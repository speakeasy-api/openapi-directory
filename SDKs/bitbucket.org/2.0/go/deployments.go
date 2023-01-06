package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Deployments struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDeployments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Deployments {
	return &Deployments{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CreateEnvironment - Create an environment.
func (s *Deployments) CreateEnvironment(ctx context.Context, request operations.CreateEnvironmentRequest) (*operations.CreateEnvironmentResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.CreateEnvironmentResponse{
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

			res.DeploymentEnvironment = out
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
	case httpRes.StatusCode == 409:
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

// DeleteEnvironmentForRepository - Delete an environment
func (s *Deployments) DeleteEnvironmentForRepository(ctx context.Context, request operations.DeleteEnvironmentForRepositoryRequest) (*operations.DeleteEnvironmentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteEnvironmentForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
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

// DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID - This deletes a deploy key from a repository.
//
// Example:
// ```
// $ curl -XDELETE \
// -H "Authorization <auth header>" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
// ```
func (s *Deployments) DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.PathParams)

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

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
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

// GetDeploymentForRepository - Retrieve a deployment
func (s *Deployments) GetDeploymentForRepository(ctx context.Context, request operations.GetDeploymentForRepositoryRequest) (*operations.GetDeploymentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeploymentForRepositoryResponse{
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

			res.Deployment = out
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

// GetDeploymentsForRepository - Find deployments
func (s *Deployments) GetDeploymentsForRepository(ctx context.Context, request operations.GetDeploymentsForRepositoryRequest) (*operations.GetDeploymentsForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deployments/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDeploymentsForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedDeployments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedDeployments = out
		}
	}

	return res, nil
}

// GetEnvironmentForRepository - Retrieve an environment
func (s *Deployments) GetEnvironmentForRepository(ctx context.Context, request operations.GetEnvironmentForRepositoryRequest) (*operations.GetEnvironmentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEnvironmentForRepositoryResponse{
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

			res.DeploymentEnvironment = out
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

// GetEnvironmentsForRepository - Find environments
func (s *Deployments) GetEnvironmentsForRepository(ctx context.Context, request operations.GetEnvironmentsForRepositoryRequest) (*operations.GetEnvironmentsForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetEnvironmentsForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedEnvironments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedEnvironments = out
		}
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDeployKeys - Returns all deploy-keys belonging to a repository.
//
// Example:
// ```
// $ curl -H "Authorization <auth header>" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys
//
// Output:
//
//	{
//	    "pagelen": 10,
//	    "values": [
//	        {
//	            "id": 123,
//	            "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	            "label": "mykey",
//	            "type": "deploy_key",
//	            "created_on": "2018-08-15T23:50:59.993890+00:00",
//	            "repository": {
//	                "full_name": "mleu/test",
//	                "name": "test",
//	                "type": "repository",
//	                "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	            },
//	            "links":{
//	                "self":{
//	                    "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
//	                }
//	            }
//	            "last_used": null,
//	            "comment": "mleu@C02W454JHTD8"
//	        }
//	    ],
//	    "page": 1,
//	    "size": 1
//	}
//
// ```
func (s *Deployments) GetRepositoriesWorkspaceRepoSlugDeployKeys(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedDeployKeys
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedDeployKeys = out
		}
	case httpRes.StatusCode == 403:
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

// GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID - Returns the deploy key belonging to a specific key.
//
// Example:
// ```
// $ curl -H "Authorization <auth header>" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234
//
// Output:
//
//	{
//	    "comment": "mleu@C02W454JHTD8",
//	    "last_used": null,
//	    "links": {
//	        "self": {
//	            "href": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234"
//	        }
//	    },
//	    "repository": {
//	        "full_name": "mleu/test",
//	        "name": "test",
//	        "type": "repository",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "label": "mykey",
//	    "created_on": "2018-08-15T23:50:59.993890+00:00",
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	    "id": 1234,
//	    "type": "deploy_key"
//	}
//
// ```
func (s *Deployments) GetRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.PathParams)

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

	res := &operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse{
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

			res.DeployKey = out
		}
	case httpRes.StatusCode == 403:
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

// PostRepositoriesWorkspaceRepoSlugDeployKeys - Create a new deploy key in a repository. Note: If authenticating a deploy key
// with an OAuth consumer, any changes to the OAuth consumer will subsequently
// invalidate the deploy key.
//
// Example:
// ```
// $ curl -XPOST \
// -H "Authorization <auth header>" \
// -H "Content-type: application/json" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
//
//	'{
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8",
//	    "label": "mydeploykey"
//	}'
//
// Output:
//
//	{
//	    "id": 123,
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	    "label": "mydeploykey",
//	    "type": "deploy_key",
//	    "created_on": "2018-08-15T23:50:59.993890+00:00",
//	    "repository": {
//	        "full_name": "mleu/test",
//	        "name": "test",
//	        "type": "repository",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "links":{
//	        "self":{
//	            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123"
//	        }
//	    }
//	    "last_used": null,
//	    "comment": "mleu@C02W454JHTD8"
//	}
//
// ```
func (s *Deployments) PostRepositoriesWorkspaceRepoSlugDeployKeys(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest) (*operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys", request.PathParams)

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

	res := &operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse{
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

			res.DeployKey = out
		}
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
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

// PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID - Create a new deploy key in a repository.
//
// The same key needs to be passed in but the comment and label can change.
//
// Example:
// ```
// $ curl -XPUT \
// -H "Authorization <auth header>" \
// -H "Content-type: application/json" \
// https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
//
//	'{
//	    "label": "newlabel",
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment",
//	}'
//
// Output:
//
//	{
//	    "comment": "newcomment",
//	    "last_used": null,
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234"
//	        }
//	    },
//	    "repository": {
//	        "full_name": "mleu/test",
//	        "name": "test",
//	        "type": "repository",
//	        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
//	    },
//	    "label": "newlabel",
//	    "created_on": "2018-08-15T23:50:59.993890+00:00",
//	    "key": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5",
//	    "id": 1234,
//	    "type": "deploy_key"
//	}
//
// ```
func (s *Deployments) PutRepositoriesWorkspaceRepoSlugDeployKeysKeyID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.PathParams)

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

	res := &operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse{
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

			res.DeployKey = out
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
	case httpRes.StatusCode == 403:
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

// UpdateEnvironmentForRepository - Update an environment
func (s *Deployments) UpdateEnvironmentForRepository(ctx context.Context, request operations.UpdateEnvironmentForRepositoryRequest) (*operations.UpdateEnvironmentForRepositoryResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes/", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.UpdateEnvironmentForRepositoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 202:
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
