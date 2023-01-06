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

type Webhooks struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewWebhooks(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Webhooks {
	return &Webhooks{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteRepositoriesWorkspaceRepoSlugHooksUID - Deletes the specified webhook subscription from the given
// repository.
func (s *Webhooks) DeleteRepositoriesWorkspaceRepoSlugHooksUID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.PathParams)

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

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDResponse{
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

// DeleteTeamsUsernameHooksUID - Deletes the specified webhook subscription from the given team
// account.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Webhooks) DeleteTeamsUsernameHooksUID(ctx context.Context, request operations.DeleteTeamsUsernameHooksUIDRequest) (*operations.DeleteTeamsUsernameHooksUIDResponse, error) {
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

// DeleteUsersSelectedUserHooksUID - Deletes the specified webhook subscription from the given user
// account.
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Webhooks) DeleteUsersSelectedUserHooksUID(ctx context.Context, request operations.DeleteUsersSelectedUserHooksUIDRequest) (*operations.DeleteUsersSelectedUserHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks/{uid}", request.PathParams)

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

	res := &operations.DeleteUsersSelectedUserHooksUIDResponse{
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

// DeleteWorkspacesWorkspaceHooksUID - Deletes the specified webhook subscription from the given workspace.
func (s *Webhooks) DeleteWorkspacesWorkspaceHooksUID(ctx context.Context, request operations.DeleteWorkspacesWorkspaceHooksUIDRequest) (*operations.DeleteWorkspacesWorkspaceHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks/{uid}", request.PathParams)

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

	res := &operations.DeleteWorkspacesWorkspaceHooksUIDResponse{
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

// GetHookEvents - Returns the webhook resource or subject types on which webhooks can
// be registered.
//
// Each resource/subject type contains an `events` link that returns the
// paginated list of specific events each individual subject type can
// emit.
//
// This endpoint is publicly accessible and does not require
// authentication or scopes.
//
// Example:
//
// ```
// $ curl https://api.bitbucket.org/2.0/hook_events
//
//	{
//	    "repository": {
//	        "links": {
//	            "events": {
//	                "href": "https://api.bitbucket.org/2.0/hook_events/repository"
//	            }
//	        }
//	    },
//	    "team": {
//	        "links": {
//	            "events": {
//	                "href": "https://api.bitbucket.org/2.0/hook_events/team"
//	            }
//	        }
//	    },
//	    "user": {
//	        "links": {
//	            "events": {
//	                "href": "https://api.bitbucket.org/2.0/hook_events/user"
//	            }
//	        }
//	    }
//	}
//
// ```
func (s *Webhooks) GetHookEvents(ctx context.Context, request operations.GetHookEventsRequest) (*operations.GetHookEventsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/hook_events"

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

	res := &operations.GetHookEventsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SubjectTypes
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SubjectTypes = out
		}
	}

	return res, nil
}

// GetHookEventsSubjectType - Returns a paginated list of all valid webhook events for the
// specified entity.
// **The team and user webhooks are deprecated, and you should use workspace instead.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
//
// This is public data that does not require any scopes or authentication.
//
// Example:
//
// NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
// We return the same structure for the other `subject_type` objects.
//
// ```
// $ curl https://api.bitbucket.org/2.0/hook_events/workspace
//
//	{
//	    "page": 1,
//	    "pagelen": 30,
//	    "size": 21,
//	    "values": [
//	        {
//	            "category": "Repository",
//	            "description": "Whenever a repository push occurs",
//	            "event": "repo:push",
//	            "label": "Push"
//	        },
//	        {
//	            "category": "Repository",
//	            "description": "Whenever a repository fork occurs",
//	            "event": "repo:fork",
//	            "label": "Fork"
//	        },
//	        {
//	            "category": "Repository",
//	            "description": "Whenever a repository import occurs",
//	            "event": "repo:imported",
//	            "label": "Import"
//	        },
//	        ...
//	        {
//	            "category":"Pull Request",
//	            "label":"Approved",
//	            "description":"When someone has approved a pull request",
//	            "event":"pullrequest:approved"
//	        },
//	    ]
//	}
//
// ```
func (s *Webhooks) GetHookEventsSubjectType(ctx context.Context, request operations.GetHookEventsSubjectTypeRequest) (*operations.GetHookEventsSubjectTypeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/hook_events/{subject_type}", request.PathParams)

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

	res := &operations.GetHookEventsSubjectTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedHookEvents
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedHookEvents = out
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

// GetRepositoriesWorkspaceRepoSlugHooks - Returns a paginated list of webhooks installed on this repository.
func (s *Webhooks) GetRepositoriesWorkspaceRepoSlugHooks(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugHooksRequest) (*operations.GetRepositoriesWorkspaceRepoSlugHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugHooksResponse{
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

// GetRepositoriesWorkspaceRepoSlugHooksUID - Returns the webhook with the specified id installed on the specified
// repository.
func (s *Webhooks) GetRepositoriesWorkspaceRepoSlugHooksUID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugHooksUIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugHooksUIDResponse{
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

// GetTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Webhooks) GetTeamsUsernameHooks(ctx context.Context, request operations.GetTeamsUsernameHooksRequest) (*operations.GetTeamsUsernameHooksResponse, error) {
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
func (s *Webhooks) GetTeamsUsernameHooksUID(ctx context.Context, request operations.GetTeamsUsernameHooksUIDRequest) (*operations.GetTeamsUsernameHooksUIDResponse, error) {
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

// GetUsersSelectedUserHooks - Returns a paginated list of webhooks installed on this user account.
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Webhooks) GetUsersSelectedUserHooks(ctx context.Context, request operations.GetUsersSelectedUserHooksRequest) (*operations.GetUsersSelectedUserHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks", request.PathParams)

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

	res := &operations.GetUsersSelectedUserHooksResponse{
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

// GetUsersSelectedUserHooksUID - Returns the webhook with the specified id installed on the given
// user account.
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Webhooks) GetUsersSelectedUserHooksUID(ctx context.Context, request operations.GetUsersSelectedUserHooksUIDRequest) (*operations.GetUsersSelectedUserHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks/{uid}", request.PathParams)

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

	res := &operations.GetUsersSelectedUserHooksUIDResponse{
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

// GetWorkspacesWorkspaceHooks - Returns a paginated list of webhooks installed on this workspace.
func (s *Webhooks) GetWorkspacesWorkspaceHooks(ctx context.Context, request operations.GetWorkspacesWorkspaceHooksRequest) (*operations.GetWorkspacesWorkspaceHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks", request.PathParams)

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

	res := &operations.GetWorkspacesWorkspaceHooksResponse{
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

// GetWorkspacesWorkspaceHooksUID - Returns the webhook with the specified id installed on the given
// workspace.
func (s *Webhooks) GetWorkspacesWorkspaceHooksUID(ctx context.Context, request operations.GetWorkspacesWorkspaceHooksUIDRequest) (*operations.GetWorkspacesWorkspaceHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks/{uid}", request.PathParams)

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

	res := &operations.GetWorkspacesWorkspaceHooksUIDResponse{
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

// PostRepositoriesWorkspaceRepoSlugHooks - Creates a new webhook on the specified repository.
//
// Example:
//
// ```
// $ curl -X POST -u credentials -H 'Content-Type: application/json'
//
//	https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
//	-d '
//	  {
//	    "description": "Webhook Description",
//	    "url": "https://example.com/",
//	    "active": true,
//	    "events": [
//	      "repo:push",
//	      "issue:created",
//	      "issue:updated"
//	    ]
//	  }'
//
// ```
//
// Note that this call requires the webhook scope, as well as any scope
// that applies to the events that the webhook subscribes to. In the
// example above that means: `webhook`, `repository` and `issue`.
//
// Also note that the `url` must properly resolve and cannot be an
// internal, non-routed address.
func (s *Webhooks) PostRepositoriesWorkspaceRepoSlugHooks(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugHooksRequest) (*operations.PostRepositoriesWorkspaceRepoSlugHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks", request.PathParams)

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

	res := &operations.PostRepositoriesWorkspaceRepoSlugHooksResponse{
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
func (s *Webhooks) PostTeamsUsernameHooks(ctx context.Context, request operations.PostTeamsUsernameHooksRequest) (*operations.PostTeamsUsernameHooksResponse, error) {
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

// PostUsersSelectedUserHooks - Creates a new webhook on the specified user account.
//
// Account-level webhooks are fired for events from all repositories
// belonging to that account.
//
// Note that one can only register webhooks on one's own account, not that
// of others.
//
// Also, note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Webhooks) PostUsersSelectedUserHooks(ctx context.Context, request operations.PostUsersSelectedUserHooksRequest) (*operations.PostUsersSelectedUserHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks", request.PathParams)

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

	res := &operations.PostUsersSelectedUserHooksResponse{
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

// PostWorkspacesWorkspaceHooks - Creates a new webhook on the specified workspace.
//
// Workspace webhooks are fired for events from all repositories contained
// by that workspace.
//
// Note that only owners can install webhooks on workspaces.
func (s *Webhooks) PostWorkspacesWorkspaceHooks(ctx context.Context, request operations.PostWorkspacesWorkspaceHooksRequest) (*operations.PostWorkspacesWorkspaceHooksResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks", request.PathParams)

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

	res := &operations.PostWorkspacesWorkspaceHooksResponse{
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

// PutRepositoriesWorkspaceRepoSlugHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
func (s *Webhooks) PutRepositoriesWorkspaceRepoSlugHooksUID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugHooksUIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.PathParams)

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

	res := &operations.PutRepositoriesWorkspaceRepoSlugHooksUIDResponse{
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
func (s *Webhooks) PutTeamsUsernameHooksUID(ctx context.Context, request operations.PutTeamsUsernameHooksUIDRequest) (*operations.PutTeamsUsernameHooksUIDResponse, error) {
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

// PutUsersSelectedUserHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
//
// Note that the username path parameter has been deprecated due to
// [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
// Use the account's UUID or account_id instead.
//
// **This endpoint has been deprecated, and you should
// use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
// For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
func (s *Webhooks) PutUsersSelectedUserHooksUID(ctx context.Context, request operations.PutUsersSelectedUserHooksUIDRequest) (*operations.PutUsersSelectedUserHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/hooks/{uid}", request.PathParams)

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

	res := &operations.PutUsersSelectedUserHooksUIDResponse{
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

// PutWorkspacesWorkspaceHooksUID - Updates the specified webhook subscription.
//
// The following properties can be mutated:
//
// * `description`
// * `url`
// * `active`
// * `events`
func (s *Webhooks) PutWorkspacesWorkspaceHooksUID(ctx context.Context, request operations.PutWorkspacesWorkspaceHooksUIDRequest) (*operations.PutWorkspacesWorkspaceHooksUIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/hooks/{uid}", request.PathParams)

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

	res := &operations.PutWorkspacesWorkspaceHooksUIDResponse{
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
