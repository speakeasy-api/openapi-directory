package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type CommitStatuses struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewCommitStatuses(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *CommitStatuses {
	return &CommitStatuses{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses - Returns all statuses (e.g. build results) for a specific commit.
func (s *CommitStatuses) GetRepositoriesWorkspaceRepoSlugCommitCommitStatuses(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedCommitstatuses
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedCommitstatuses = out
		}
	case httpRes.StatusCode == 401:
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

// GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Returns the specified build status for a commit.
func (s *CommitStatuses) GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest) (*operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse{
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

			res.Commitstatus = out
		}
	case httpRes.StatusCode == 401:
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

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses - Returns all statuses (e.g. build results) for the given pull
// request.
func (s *CommitStatuses) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedCommitstatuses
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedCommitstatuses = out
		}
	case httpRes.StatusCode == 401:
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

// PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild - Creates a new build status against the specified commit.
//
// If the specified key already exists, the existing status object will
// be overwritten.
//
// Example:
//
// ```
//
//	curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
//	    "key": "MY-BUILD",
//	    "state": "SUCCESSFUL",
//	    "description": "42 tests passed",
//	    "url": "https://www.example.org/my-build-result"
//	  }'
//
// ```
//
// When creating a new commit status, you can use a URI template for the URL.
// Templates are URLs that contain variable names that Bitbucket will
// evaluate at runtime whenever the URL is displayed anywhere similar to
// parameter substitution in
// [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
// For example, one could use `https://foo.com/builds/{repository.full_name}`
// which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
// The context variables available are `repository` and `commit`.
func (s *CommitStatuses) PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest) (*operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Commitstatus = out
		}
	case httpRes.StatusCode == 401:
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

// PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Used to update the current status of a build status object on the
// specific commit.
//
// This operation can also be used to change other properties of the
// build status:
//
// * `state`
// * `name`
// * `description`
// * `url`
// * `refname`
//
// The `key` cannot be changed.
func (s *CommitStatuses) PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest) (*operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse{
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

			res.Commitstatus = out
		}
	case httpRes.StatusCode == 401:
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
