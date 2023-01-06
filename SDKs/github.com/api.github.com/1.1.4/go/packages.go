package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Packages struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPackages(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Packages {
	return &Packages{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// PackagesDeletePackageForAuthenticatedUser - Delete a package for the authenticated user
// Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user - API method documentation
func (s *Packages) PackagesDeletePackageForAuthenticatedUser(ctx context.Context, request operations.PackagesDeletePackageForAuthenticatedUserRequest) (*operations.PackagesDeletePackageForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/packages/{package_type}/{package_name}", request.PathParams)

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

	res := &operations.PackagesDeletePackageForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesDeletePackageForOrg - Delete a package for an organization
// Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
//
// To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
// - If `package_type` is not `container`, your token must also include the `repo` scope.
// - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
// https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization - API method documentation
func (s *Packages) PackagesDeletePackageForOrg(ctx context.Context, request operations.PackagesDeletePackageForOrgRequest) (*operations.PackagesDeletePackageForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/packages/{package_type}/{package_name}", request.PathParams)

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

	res := &operations.PackagesDeletePackageForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesDeletePackageVersionForAuthenticatedUser - Delete a package version for the authenticated user
// Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
//
// To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user - API method documentation
func (s *Packages) PackagesDeletePackageVersionForAuthenticatedUser(ctx context.Context, request operations.PackagesDeletePackageVersionForAuthenticatedUserRequest) (*operations.PackagesDeletePackageVersionForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", request.PathParams)

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

	res := &operations.PackagesDeletePackageVersionForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesDeletePackageVersionForOrg - Delete package version for an organization
// Deletes a specific package version in an organization. If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
//
// To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
// - If `package_type` is not `container`, your token must also include the `repo` scope.
// - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
// https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization - API method documentation
func (s *Packages) PackagesDeletePackageVersionForOrg(ctx context.Context, request operations.PackagesDeletePackageVersionForOrgRequest) (*operations.PackagesDeletePackageVersionForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.PathParams)

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

	res := &operations.PackagesDeletePackageVersionForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser - Get all package versions for a package owned by the authenticated user
// Returns all package versions for a package owned by the authenticated user.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
func (s *Packages) PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(ctx context.Context, request operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest) (*operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/packages/{package_type}/{package_name}/versions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.PackageVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackageVersions = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesGetAllPackageVersionsForPackageOwnedByOrg - Get all package versions for a package owned by an organization
// Returns all package versions for a package owned by an organization.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
func (s *Packages) PackagesGetAllPackageVersionsForPackageOwnedByOrg(ctx context.Context, request operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest) (*operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.PackageVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackageVersions = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesGetAllPackageVersionsForPackageOwnedByUser - Get all package versions for a package owned by a user
// Returns all package versions for a public package owned by a specified user.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-a-user - API method documentation
func (s *Packages) PackagesGetAllPackageVersionsForPackageOwnedByUser(ctx context.Context, request operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest) (*operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/packages/{package_type}/{package_name}/versions", request.PathParams)

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

	res := &operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []shared.PackageVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackageVersions = out
		}
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesGetPackageForAuthenticatedUser - Get a package for the authenticated user
// Gets a specific package for a package owned by the authenticated user.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user - API method documentation
func (s *Packages) PackagesGetPackageForAuthenticatedUser(ctx context.Context, request operations.PackagesGetPackageForAuthenticatedUserRequest) (*operations.PackagesGetPackageForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/packages/{package_type}/{package_name}", request.PathParams)

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

	res := &operations.PackagesGetPackageForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Package
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Package = out
		}
	}

	return res, nil
}

// PackagesGetPackageForOrganization - Get a package for an organization
// Gets a specific package in an organization.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization - API method documentation
func (s *Packages) PackagesGetPackageForOrganization(ctx context.Context, request operations.PackagesGetPackageForOrganizationRequest) (*operations.PackagesGetPackageForOrganizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/packages/{package_type}/{package_name}", request.PathParams)

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

	res := &operations.PackagesGetPackageForOrganizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Package
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Package = out
		}
	}

	return res, nil
}

// PackagesGetPackageForUser - Get a package for a user
// Gets a specific package metadata for a public package owned by a user.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-a-package-for-a-user - API method documentation
func (s *Packages) PackagesGetPackageForUser(ctx context.Context, request operations.PackagesGetPackageForUserRequest) (*operations.PackagesGetPackageForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/packages/{package_type}/{package_name}", request.PathParams)

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

	res := &operations.PackagesGetPackageForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.Package
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Package = out
		}
	}

	return res, nil
}

// PackagesGetPackageVersionForAuthenticatedUser - Get a package version for the authenticated user
// Gets a specific package version for a package owned by the authenticated user.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user - API method documentation
func (s *Packages) PackagesGetPackageVersionForAuthenticatedUser(ctx context.Context, request operations.PackagesGetPackageVersionForAuthenticatedUserRequest) (*operations.PackagesGetPackageVersionForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", request.PathParams)

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

	res := &operations.PackagesGetPackageVersionForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PackageVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackageVersion = out
		}
	}

	return res, nil
}

// PackagesGetPackageVersionForOrganization - Get a package version for an organization
// Gets a specific package version in an organization.
//
// You must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization - API method documentation
func (s *Packages) PackagesGetPackageVersionForOrganization(ctx context.Context, request operations.PackagesGetPackageVersionForOrganizationRequest) (*operations.PackagesGetPackageVersionForOrganizationResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.PathParams)

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

	res := &operations.PackagesGetPackageVersionForOrganizationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PackageVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackageVersion = out
		}
	}

	return res, nil
}

// PackagesGetPackageVersionForUser - Get a package version for a user
// Gets a specific package version for a public package owned by a specified user.
//
// At this time, to use this endpoint, you must authenticate using an access token with the `packages:read` scope.
// If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user - API method documentation
func (s *Packages) PackagesGetPackageVersionForUser(ctx context.Context, request operations.PackagesGetPackageVersionForUserRequest) (*operations.PackagesGetPackageVersionForUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.PathParams)

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

	res := &operations.PackagesGetPackageVersionForUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PackageVersion
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PackageVersion = out
		}
	}

	return res, nil
}

// PackagesRestorePackageForAuthenticatedUser - Restore a package for the authenticated user
// Restores a package owned by the authenticated user.
//
// You can restore a deleted package under the following conditions:
//   - The package was deleted within the last 30 days.
//   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user - API method documentation
func (s *Packages) PackagesRestorePackageForAuthenticatedUser(ctx context.Context, request operations.PackagesRestorePackageForAuthenticatedUserRequest) (*operations.PackagesRestorePackageForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/packages/{package_type}/{package_name}/restore", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PackagesRestorePackageForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesRestorePackageForOrg - Restore a package for an organization
// Restores an entire package in an organization.
//
// You can restore a deleted package under the following conditions:
//   - The package was deleted within the last 30 days.
//   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
//
// To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
// - If `package_type` is not `container`, your token must also include the `repo` scope.
// - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
// https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization - API method documentation
func (s *Packages) PackagesRestorePackageForOrg(ctx context.Context, request operations.PackagesRestorePackageForOrgRequest) (*operations.PackagesRestorePackageForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/restore", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PackagesRestorePackageForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesRestorePackageVersionForAuthenticatedUser - Restore a package version for the authenticated user
// Restores a package version owned by the authenticated user.
//
// You can restore a deleted package version under the following conditions:
//   - The package was deleted within the last 30 days.
//   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
//
// To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
// https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user - API method documentation
func (s *Packages) PackagesRestorePackageVersionForAuthenticatedUser(ctx context.Context, request operations.PackagesRestorePackageVersionForAuthenticatedUserRequest) (*operations.PackagesRestorePackageVersionForAuthenticatedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", request.PathParams)

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

	res := &operations.PackagesRestorePackageVersionForAuthenticatedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}

// PackagesRestorePackageVersionForOrg - Restore package version for an organization
// Restores a specific package version in an organization.
//
// You can restore a deleted package under the following conditions:
//   - The package was deleted within the last 30 days.
//   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
//
// To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
// - If `package_type` is not `container`, your token must also include the `repo` scope.
// - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
// https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization - API method documentation
func (s *Packages) PackagesRestorePackageVersionForOrg(ctx context.Context, request operations.PackagesRestorePackageVersionForOrgRequest) (*operations.PackagesRestorePackageVersionForOrgResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", request.PathParams)

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

	res := &operations.PackagesRestorePackageVersionForOrgResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.BasicError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.BasicError = out
		}
	}

	return res, nil
}
