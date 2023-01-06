package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
	"strings"
)

type Teams struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTeams(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Teams {
	return &Teams{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteTeamsUsernameHooksUID - Deletes the specified webhook subscription from the given team
// account.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) DeleteTeamsUsernameHooksUID(ctx context.Context, request operations.DeleteTeamsUsernameHooksUIDRequest) (*operations.DeleteTeamsUsernameHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteTeamsUsernameHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeams - Returns all the teams that the authenticated user is associated
// with.
//
// **This endpoint has been deprecated,
// and you should use the [workspaces](./workspaces) endpoint.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetTeams(ctx context.Context, request operations.GetTeamsRequest) (*operations.GetTeamsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/teams"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTeams
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTeams = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsername - Gets the public information associated with a team.
//
// If the team's profile is private, `location`, `website` and
// `created_on` elements are omitted.
//
// **This endpoint has been deprecated,
// and you should use the [workspace](../workspaces/%7Bworkspace%7D) endpoint.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetTeamsUsername(ctx context.Context, request operations.GetTeamsUsernameRequest) (*operations.GetTeamsUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Team = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameFollowers - Returns the list of accounts that are following this team.
//
// **This endpoint has been deprecated. There is no workspaces replacement.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetTeamsUsernameFollowers(ctx context.Context, request operations.GetTeamsUsernameFollowersRequest) (*operations.GetTeamsUsernameFollowersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/followers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameFollowersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameFollowing - Returns the list of accounts this team is following.
//
// **This endpoint has been deprecated. There is no workspaces replacement.
// For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetTeamsUsernameFollowing(ctx context.Context, request operations.GetTeamsUsernameFollowingRequest) (*operations.GetTeamsUsernameFollowingResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/following", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameFollowingResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedUsers
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedUsers = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetTeamsUsernameHooks(ctx context.Context, request operations.GetTeamsUsernameHooksRequest) (*operations.GetTeamsUsernameHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedWebhookSubscriptions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedWebhookSubscriptions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameHooksUID - Returns the webhook with the specified id installed on the given
// team account.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetTeamsUsernameHooksUID(ctx context.Context, request operations.GetTeamsUsernameHooksUIDRequest) (*operations.GetTeamsUsernameHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernameMembers - Returns all members of the specified team. Any member of any of the
// team's groups is considered a member of the team. This includes users
// in groups that may not actually have access to any of the team's
// repositories.
//
// **This operation has been deprecated due to privacy changes.
// See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/)
// for details.
// You should this [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint as a replacement.**
func (s *Teams) GetTeamsUsernameMembers(ctx context.Context, request operations.GetTeamsUsernameMembersRequest) (*operations.GetTeamsUsernameMembersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/members", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernameMembersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.User = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernamePermissions - Returns an object for each team permission a user on the team has.
//
// **This endpoint has been deprecated,
// and you should use the [workspace permissions](../../workspaces/%7Bworkspace%7D/permissions) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// Permissions returned are effective permissions — if a user is a member of
// multiple groups with distinct roles, only the highest level is returned.
//
// Permissions can be:
//
// * `admin`
// * `collaborator`
//
// Only users with admin permission for the team may access this resource.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "permission": "admin",
//	      "type": "team_permission",
//	      "user": {
//	        "type": "user",
//	        "nickname": "evzijst",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "team": {
//	        "display_name": "Atlassian Bitbucket",
//	        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
//	      }
//	    },
//	    {
//	      "permission": "collaborator",
//	      "type": "team_permission",
//	      "user": {
//	        "type": "user",
//	        "nickname": "seanaty",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "team": {
//	        "display_name": "Atlassian Bitbucket",
//	        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
//	      }
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../meta/filtering) by
// team, user, or permission by adding the following query string
// parameters:
//
// * `q=user.uuid="{d301aafa-d676-4ee0-88be-962be7417567}"` or `q=permission="admin"`
// * `sort=team.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *Teams) GetTeamsUsernamePermissions(ctx context.Context, request operations.GetTeamsUsernamePermissionsRequest) (*operations.GetTeamsUsernamePermissionsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/permissions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernamePermissionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTeamPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTeamPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernamePermissionsRepositories - Returns an object for each repository permission for all of a
// team’s repositories.
//
// **This endpoint has been deprecated,
// and you should use the [workspace repository permissions](../../../workspaces/%7Bworkspace%7D/permissions/repositories) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// If the username URL parameter refers to a user account instead of
// a team account, an object containing the repository permissions
// of all the username's repositories will be returned.
//
// Permissions returned are effective permissions — the highest level of
// permission the user has. This does not include public repositories that
// users are not granted any specific permission in, and does not
// distinguish between direct and indirect privileges.
//
// Only users with admin permission for the team may access this resource.
//
// Permissions can be:
//
// * `admin`
// * `write`
// * `read`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "admin"
//	    },
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "write"
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../../meta/filtering)
// by repository, user, or permission by adding the following query string
// parameters:
//
// * `q=repository.name="geordi"` or `q=permission>"read"`
// * `sort=user.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *Teams) GetTeamsUsernamePermissionsRepositories(ctx context.Context, request operations.GetTeamsUsernamePermissionsRepositoriesRequest) (*operations.GetTeamsUsernamePermissionsRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/permissions/repositories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernamePermissionsRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositoryPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositoryPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsUsernamePermissionsRepositoriesRepoSlug - Returns an object for each repository permission of a given repository.
//
// **This endpoint has been deprecated,
// and you should use the [workspace repository permissions](../../../../workspaces/%7Bworkspace%7D/permissions/repositories/%7Brepo_slug%7D) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// If the username URL parameter refers to a user account instead of
// a team account, an object containing the repository permissions
// of the username's repository will be returned.
//
// Permissions returned are effective permissions — the highest level of
// permission the user has. This does not include public repositories that
// users are not granted any specific permission in, and does not
// distinguish between direct and indirect privileges.
//
// Only users with admin permission for the repository may access this resource.
//
// Permissions can be:
//
// * `admin`
// * `write`
// * `read`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "admin"
//	    },
//	    {
//	      "type": "repository_permission",
//	      "user": {
//	        "type": "user",
//	        "display_name": "Sean Conaty",
//	        "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	      },
//	      "repository": {
//	        "type": "repository",
//	        "name": "geordi",
//	        "full_name": "bitbucket/geordi",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	      },
//	      "permission": "write"
//	    }
//	  ],
//	  "page": 1,
//	  "size": 2
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../../meta/filtering)
// by user, or permission by adding the following query string parameters:
//
// * `q=permission>"read"`
// * `sort=user.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *Teams) GetTeamsUsernamePermissionsRepositoriesRepoSlug(ctx context.Context, request operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest) (*operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/permissions/repositories/{repo_slug}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedRepositoryPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedRepositoryPermissions = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetTeamsWorkspaceRepositories - All repositories in the given workspace. This includes any private
// repositories the calling user has access to.
//
// **This endpoint has been deprecated,
// and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
// For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetTeamsWorkspaceRepositories(ctx context.Context, request operations.GetTeamsWorkspaceRepositoriesRequest) (*operations.GetTeamsWorkspaceRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{workspace}/repositories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTeamsWorkspaceRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetUserPermissionsTeams - Returns an object for each team the caller is a member of, and their
// effective role — the highest level of privilege the caller has. If a
// user is a member of multiple groups with distinct roles, only the
// highest level is returned.
//
// **This endpoint has been deprecated,
// and you should use the [workspace permissions](./workspaces) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// Permissions can be:
//
// * `admin`
// * `collaborator`
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/user/permissions/teams
//
//	{
//	  "pagelen": 10,
//	  "values": [
//	    {
//	      "permission": "admin",
//	      "type": "team_permission",
//	      "user": {
//	        "type": "user",
//	        "nickname": "evzijst",
//	        "display_name": "Erik van Zijst",
//	        "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
//	      },
//	      "team": {
//	        "display_name": "Atlassian Bitbucket",
//	        "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
//	      }
//	    }
//	  ],
//	  "page": 1,
//	  "size": 1
//	}
//
// ```
//
// Results may be further [filtered or sorted](../../../meta/filtering) by
// team or permission by adding the following query string parameters:
//
// * `q=team.uuid="{4cc6108a-a241-4db0-96a5-64347ac04f87}"` or `q=permission="admin"`
// * `sort=team.display_name`
//
// Note that the query parameter values need to be URL escaped so that `=`
// would become `%3D`.
func (s *Teams) GetUserPermissionsTeams(ctx context.Context, request operations.GetUserPermissionsTeamsRequest) (*operations.GetUserPermissionsTeamsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/user/permissions/teams"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUserPermissionsTeamsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedTeamPermissions
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedTeamPermissions = out
		}
	}

	return res, nil
}

// GetUsersWorkspaceRepositories - All repositories in the given workspace. This includes any private
// repositories the calling user has access to.
//
// **This endpoint has been deprecated,
// and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
// For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) GetUsersWorkspaceRepositories(ctx context.Context, request operations.GetUsersWorkspaceRepositoriesRequest) (*operations.GetUsersWorkspaceRepositoriesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{workspace}/repositories", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersWorkspaceRepositoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PostTeamsUsernameHooks - Creates a new webhook on the specified team.
//
// Team webhooks are fired for events from all repositories belonging to
// that team account.
//
// Note that only admins can install webhooks on teams.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) PostTeamsUsernameHooks(ctx context.Context, request operations.PostTeamsUsernameHooksRequest) (*operations.PostTeamsUsernameHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostTeamsUsernameHooksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// PutTeamsUsernameHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Teams) PutTeamsUsernameHooksUID(ctx context.Context, request operations.PutTeamsUsernameHooksUIDRequest) (*operations.PutTeamsUsernameHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/hooks/{uid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutTeamsUsernameHooksUIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.WebhookSubscription = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
