package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Billing struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewBilling(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Billing {
	return &Billing{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// BillingGetGithubActionsBillingGhe - Get GitHub Actions billing for an enterprise
// Gets the summary of the free and paid GitHub Actions minutes used.
//
// Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
//
// The authenticated user must be an enterprise admin.
// https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-enterprise - API method documentation
func (s *Billing) BillingGetGithubActionsBillingGhe(ctx context.Context, request operations.BillingGetGithubActionsBillingGheRequest) (*operations.BillingGetGithubActionsBillingGheResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/settings/billing/actions", request.PathParams)

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

	res := &operations.BillingGetGithubActionsBillingGheResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetGithubActionsBillingOrg - Get GitHub Actions billing for an organization
// Gets the summary of the free and paid GitHub Actions minutes used.
//
// Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
//
// Access tokens must have the `repo` or `admin:org` scope.
// https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-organization - API method documentation
func (s *Billing) BillingGetGithubActionsBillingOrg(ctx context.Context, request operations.BillingGetGithubActionsBillingOrgRequest) (*operations.BillingGetGithubActionsBillingOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/settings/billing/actions", request.PathParams)

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

	res := &operations.BillingGetGithubActionsBillingOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetGithubActionsBillingUser - Get GitHub Actions billing for a user
// Gets the summary of the free and paid GitHub Actions minutes used.
//
// Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
//
// Access tokens must have the `user` scope.
// https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-a-user - API method documentation
func (s *Billing) BillingGetGithubActionsBillingUser(ctx context.Context, request operations.BillingGetGithubActionsBillingUserRequest) (*operations.BillingGetGithubActionsBillingUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/settings/billing/actions", request.PathParams)

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

	res := &operations.BillingGetGithubActionsBillingUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.ActionsBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ActionsBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetGithubPackagesBillingGhe - Get GitHub Packages billing for an enterprise
// Gets the free and paid storage used for GitHub Packages in gigabytes.
//
// Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
//
// The authenticated user must be an enterprise admin.
// https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-enterprise - API method documentation
func (s *Billing) BillingGetGithubPackagesBillingGhe(ctx context.Context, request operations.BillingGetGithubPackagesBillingGheRequest) (*operations.BillingGetGithubPackagesBillingGheResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/settings/billing/packages", request.PathParams)

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

	res := &operations.BillingGetGithubPackagesBillingGheResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PackagesBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackagesBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetGithubPackagesBillingOrg - Get GitHub Packages billing for an organization
// Gets the free and paid storage usued for GitHub Packages in gigabytes.
//
// Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
//
// Access tokens must have the `repo` or `admin:org` scope.
// https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-organization - API method documentation
func (s *Billing) BillingGetGithubPackagesBillingOrg(ctx context.Context, request operations.BillingGetGithubPackagesBillingOrgRequest) (*operations.BillingGetGithubPackagesBillingOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/settings/billing/packages", request.PathParams)

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

	res := &operations.BillingGetGithubPackagesBillingOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PackagesBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackagesBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetGithubPackagesBillingUser - Get GitHub Packages billing for a user
// Gets the free and paid storage used for GitHub Packages in gigabytes.
//
// Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
//
// Access tokens must have the `user` scope.
// https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-a-user - API method documentation
func (s *Billing) BillingGetGithubPackagesBillingUser(ctx context.Context, request operations.BillingGetGithubPackagesBillingUserRequest) (*operations.BillingGetGithubPackagesBillingUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/settings/billing/packages", request.PathParams)

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

	res := &operations.BillingGetGithubPackagesBillingUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PackagesBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackagesBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetSharedStorageBillingGhe - Get shared storage billing for an enterprise
// Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
//
// Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
//
// The authenticated user must be an enterprise admin.
// https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-enterprise - API method documentation
func (s *Billing) BillingGetSharedStorageBillingGhe(ctx context.Context, request operations.BillingGetSharedStorageBillingGheRequest) (*operations.BillingGetSharedStorageBillingGheResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/enterprises/{enterprise}/settings/billing/shared-storage", request.PathParams)

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

	res := &operations.BillingGetSharedStorageBillingGheResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CombinedBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CombinedBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetSharedStorageBillingOrg - Get shared storage billing for an organization
// Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
//
// Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
//
// Access tokens must have the `repo` or `admin:org` scope.
// https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-organization - API method documentation
func (s *Billing) BillingGetSharedStorageBillingOrg(ctx context.Context, request operations.BillingGetSharedStorageBillingOrgRequest) (*operations.BillingGetSharedStorageBillingOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/settings/billing/shared-storage", request.PathParams)

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

	res := &operations.BillingGetSharedStorageBillingOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CombinedBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CombinedBillingUsage = out
		}
	}

	return res, nil
}

// BillingGetSharedStorageBillingUser - Get shared storage billing for a user
// Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
//
// Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
//
// Access tokens must have the `user` scope.
// https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-a-user - API method documentation
func (s *Billing) BillingGetSharedStorageBillingUser(ctx context.Context, request operations.BillingGetSharedStorageBillingUserRequest) (*operations.BillingGetSharedStorageBillingUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/settings/billing/shared-storage", request.PathParams)

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

	res := &operations.BillingGetSharedStorageBillingUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.CombinedBillingUsage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.CombinedBillingUsage = out
		}
	}

	return res, nil
}
