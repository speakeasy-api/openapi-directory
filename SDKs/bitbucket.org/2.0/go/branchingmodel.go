package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/utils"
)

type BranchingModel struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBranchingModel(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *BranchingModel {
	return &BranchingModel{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetRepositoriesWorkspaceRepoSlugBranchingModel - Return the branching model as applied to the repository. This view is
// read-only. The branching model settings can be changed using the
// [settings](branching-model/settings#get) API.
//
// The returned object:
//
//  1. Always has a `development` property. `development.branch` contains
//     the actual repository branch object that is considered to be the
//     `development` branch. `development.branch` will not be present
//     if it does not exist.
//  2. Might have a `production` property. `production` will not
//     be present when `production` is disabled.
//     `production.branch` contains the actual branch object that is
//     considered to be the `production` branch. `production.branch` will
//     not be present if it does not exist.
//  3. Always has a `branch_types` array which contains all enabled branch
//     types.
//
// Example body:
//
// ```
//
//	{
//	  "development": {
//	    "name": "master",
//	    "branch": {
//	      "type": "branch",
//	      "name": "master",
//	      "target": {
//	        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
//	      }
//	    },
//	    "use_mainbranch": true
//	  },
//	  "production": {
//	    "name": "production",
//	    "branch": {
//	      "type": "branch",
//	      "name": "production",
//	      "target": {
//	        "hash": "16dffcb0de1b22e249db6799532074cf32efe80f"
//	      }
//	    },
//	    "use_mainbranch": false
//	  },
//	  "branch_types": [
//	    {
//	      "kind": "release",
//	      "prefix": "release/"
//	    },
//	    {
//	      "kind": "hotfix",
//	      "prefix": "hotfix/"
//	    },
//	    {
//	      "kind": "feature",
//	      "prefix": "feature/"
//	    },
//	    {
//	      "kind": "bugfix",
//	      "prefix": "bugfix/"
//	    }
//	  ],
//	  "type": "branching_model",
//	  "links": {
//	    "self": {
//	      "href": "https://api.bitbucket.org/.../branching-model"
//	    }
//	  }
//	}
//
// ```
func (s *BranchingModel) GetRepositoriesWorkspaceRepoSlugBranchingModel(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest) (*operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branching-model", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse{
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

			res.BranchingModel = out
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

// GetRepositoriesWorkspaceRepoSlugBranchingModelSettings - Return the branching model configuration for a repository. The returned
// object:
//
//  1. Always has a `development` property for the development branch.
//  2. Always a `production` property for the production branch. The
//     production branch can be disabled.
//  3. The `branch_types` contains all the branch types.
//
// This is the raw configuration for the branching model. A client
// wishing to see the branching model with its actual current branches may
// find the [active model API](../branching-model#get) more useful.
//
// Example body:
//
// ```
//
//	{
//	  "development": {
//	    "is_valid": true,
//	    "name": null,
//	    "use_mainbranch": true
//	  },
//	  "production": {
//	    "is_valid": true,
//	    "name": "production",
//	    "use_mainbranch": false,
//	    "enabled": false
//	  },
//	  "branch_types": [
//	    {
//	      "kind": "release",
//	      "enabled": true,
//	      "prefix": "release/"
//	    },
//	    {
//	      "kind": "hotfix",
//	      "enabled": true,
//	      "prefix": "hotfix/"
//	    },
//	    {
//	      "kind": "feature",
//	      "enabled": true,
//	      "prefix": "feature/"
//	    },
//	    {
//	      "kind": "bugfix",
//	      "enabled": false,
//	      "prefix": "bugfix/"
//	    }
//	  ],
//	  "type": "branching_model_settings",
//	  "links": {
//	    "self": {
//	      "href": "https://api.bitbucket.org/.../branching-model/settings"
//	    }
//	  }
//	}
//
// ```
func (s *BranchingModel) GetRepositoriesWorkspaceRepoSlugBranchingModelSettings(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse{
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

			res.BranchingModelSettings = out
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

// PutRepositoriesWorkspaceRepoSlugBranchingModelSettings - Update the branching model configuration for a repository.
//
// The `development` branch can be configured to a specific branch or to
// track the main branch. When set to a specific branch it must
// currently exist. Only the passed properties will be updated. The
// properties not passed will be left unchanged. A request without a
// `development` property will leave the development branch unchanged.
//
// It is possible for the `development` branch to be invalid. This
// happens when it points at a specific branch that has been
// deleted. This is indicated in the `is_valid` field for the branch. It is
// not possible to update the settings for `development` if that
// would leave the branch in an invalid state. Such a request will be
// rejected.
//
// The `production` branch can be a specific branch, the main
// branch or disabled. When set to a specific branch it must currently
// exist. The `enabled` property can be used to enable (`true`) or
// disable (`false`) it. Only the passed properties will be updated. The
// properties not passed will be left unchanged. A request without a
// `production` property will leave the production branch unchanged.
//
// It is possible for the `production` branch to be invalid. This
// happens when it points at a specific branch that has been
// deleted. This is indicated in the `is_valid` field for the branch. A
// request that would leave `production` enabled and invalid will be
// rejected. It is possible to update `production` and make it invalid if
// it would also be left disabled.
//
// The `branch_types` property contains the branch types to be updated.
// Only the branch types passed will be updated. All updates will be
// rejected if it would leave the branching model in an invalid state.
// For branch types this means that:
//
//  1. The prefixes for all enabled branch types are valid. For example,
//     it is not possible to use '*' inside a Git prefix.
//  2. A prefix of an enabled branch type must not be a prefix of another
//     enabled branch type. This is to ensure that a branch can be easily
//     classified by its prefix unambiguously.
//
// It is possible to store an invalid prefix if that branch type would be
// left disabled. Only the passed properties will be updated. The
// properties not passed will be left unchanged. Each branch type must
// have a `kind` property to identify it.
//
// Example Body:
//
// ```
//
//	{
//	  "development": {
//	    "use_mainbranch": true
//	  },
//	  "production": {
//	    "enabled": true,
//	    "use_mainbranch": false,
//	    "name": "production"
//	  },
//	  "branch_types": [
//	    {
//	      "kind": "bugfix",
//	      "enabled": true,
//	      "prefix": "bugfix/"
//	    },
//	    {
//	      "kind": "feature",
//	      "enabled": true,
//	      "prefix": "feature/"
//	    },
//	    {
//	      "kind": "hotfix",
//	      "prefix": "hotfix/"
//	    },
//	    {
//	      "kind": "release",
//	      "enabled": false,
//	    }
//	  ]
//	}
//
// ```
func (s *BranchingModel) PutRepositoriesWorkspaceRepoSlugBranchingModelSettings(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest) (*operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/branching-model/settings", request.PathParams)

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

	res := &operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse{
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

			res.BranchingModelSettings = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
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
