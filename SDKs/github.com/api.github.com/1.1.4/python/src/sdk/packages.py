import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Packages:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def packages_delete_package_for_authenticated_user(self, request: operations.PackagesDeletePackageForAuthenticatedUserRequest) -> operations.PackagesDeletePackageForAuthenticatedUserResponse:
        r"""Delete a package for the authenticated user
        Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/packages/{package_type}/{package_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesDeletePackageForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_delete_package_for_org(self, request: operations.PackagesDeletePackageForOrgRequest) -> operations.PackagesDeletePackageForOrgResponse:
        r"""Delete a package for an organization
        Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
        
        To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
        - If `package_type` is not `container`, your token must also include the `repo` scope.
        - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
        https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/packages/{package_type}/{package_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesDeletePackageForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_delete_package_version_for_authenticated_user(self, request: operations.PackagesDeletePackageVersionForAuthenticatedUserRequest) -> operations.PackagesDeletePackageVersionForAuthenticatedUserResponse:
        r"""Delete a package version for the authenticated user
        Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
        
        To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesDeletePackageVersionForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_delete_package_version_for_org(self, request: operations.PackagesDeletePackageVersionForOrgRequest) -> operations.PackagesDeletePackageVersionForOrgResponse:
        r"""Delete package version for an organization
        Deletes a specific package version in an organization. If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
        
        To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
        - If `package_type` is not `container`, your token must also include the `repo` scope.
        - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
        https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesDeletePackageVersionForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_get_all_package_versions_for_package_owned_by_authenticated_user(self, request: operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest) -> operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse:
        r"""Get all package versions for a package owned by the authenticated user
        Returns all package versions for a package owned by the authenticated user.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/packages/{package_type}/{package_name}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PackageVersion]])
                res.package_versions = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_get_all_package_versions_for_package_owned_by_org(self, request: operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest) -> operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse:
        r"""Get all package versions for a package owned by an organization
        Returns all package versions for a package owned by an organization.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/packages/{package_type}/{package_name}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PackageVersion]])
                res.package_versions = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_get_all_package_versions_for_package_owned_by_user(self, request: operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest) -> operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse:
        r"""Get all package versions for a package owned by a user
        Returns all package versions for a public package owned by a specified user.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/packages/{package_type}/{package_name}/versions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PackageVersion]])
                res.package_versions = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_get_package_for_authenticated_user(self, request: operations.PackagesGetPackageForAuthenticatedUserRequest) -> operations.PackagesGetPackageForAuthenticatedUserResponse:
        r"""Get a package for the authenticated user
        Gets a specific package for a package owned by the authenticated user.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/packages/{package_type}/{package_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackageForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Package])
                res.package = out

        return res

    
    def packages_get_package_for_organization(self, request: operations.PackagesGetPackageForOrganizationRequest) -> operations.PackagesGetPackageForOrganizationResponse:
        r"""Get a package for an organization
        Gets a specific package in an organization.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/packages/{package_type}/{package_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackageForOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Package])
                res.package = out

        return res

    
    def packages_get_package_for_user(self, request: operations.PackagesGetPackageForUserRequest) -> operations.PackagesGetPackageForUserResponse:
        r"""Get a package for a user
        Gets a specific package metadata for a public package owned by a user.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-a-package-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/packages/{package_type}/{package_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackageForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Package])
                res.package = out

        return res

    
    def packages_get_package_version_for_authenticated_user(self, request: operations.PackagesGetPackageVersionForAuthenticatedUserRequest) -> operations.PackagesGetPackageVersionForAuthenticatedUserResponse:
        r"""Get a package version for the authenticated user
        Gets a specific package version for a package owned by the authenticated user.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackageVersionForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PackageVersion])
                res.package_version = out

        return res

    
    def packages_get_package_version_for_organization(self, request: operations.PackagesGetPackageVersionForOrganizationRequest) -> operations.PackagesGetPackageVersionForOrganizationResponse:
        r"""Get a package version for an organization
        Gets a specific package version in an organization.
        
        You must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackageVersionForOrganizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PackageVersion])
                res.package_version = out

        return res

    
    def packages_get_package_version_for_user(self, request: operations.PackagesGetPackageVersionForUserRequest) -> operations.PackagesGetPackageVersionForUserResponse:
        r"""Get a package version for a user
        Gets a specific package version for a public package owned by a specified user.
        
        At this time, to use this endpoint, you must authenticate using an access token with the `packages:read` scope.
        If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesGetPackageVersionForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PackageVersion])
                res.package_version = out

        return res

    
    def packages_restore_package_for_authenticated_user(self, request: operations.PackagesRestorePackageForAuthenticatedUserRequest) -> operations.PackagesRestorePackageForAuthenticatedUserResponse:
        r"""Restore a package for the authenticated user
        Restores a package owned by the authenticated user.
        
        You can restore a deleted package under the following conditions:
          - The package was deleted within the last 30 days.
          - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/packages/{package_type}/{package_name}/restore", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesRestorePackageForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_restore_package_for_org(self, request: operations.PackagesRestorePackageForOrgRequest) -> operations.PackagesRestorePackageForOrgResponse:
        r"""Restore a package for an organization
        Restores an entire package in an organization.
        
        You can restore a deleted package under the following conditions:
          - The package was deleted within the last 30 days.
          - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
        
        To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
        - If `package_type` is not `container`, your token must also include the `repo` scope.
        - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
        https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/packages/{package_type}/{package_name}/restore", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesRestorePackageForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_restore_package_version_for_authenticated_user(self, request: operations.PackagesRestorePackageVersionForAuthenticatedUserRequest) -> operations.PackagesRestorePackageVersionForAuthenticatedUserResponse:
        r"""Restore a package version for the authenticated user
        Restores a package version owned by the authenticated user.
        
        You can restore a deleted package version under the following conditions:
          - The package was deleted within the last 30 days.
          - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
        
        To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
        https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesRestorePackageVersionForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def packages_restore_package_version_for_org(self, request: operations.PackagesRestorePackageVersionForOrgRequest) -> operations.PackagesRestorePackageVersionForOrgResponse:
        r"""Restore package version for an organization
        Restores a specific package version in an organization.
        
        You can restore a deleted package under the following conditions:
          - The package was deleted within the last 30 days.
          - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
        
        To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
        - If `package_type` is not `container`, your token must also include the `repo` scope.
        - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
        https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagesRestorePackageVersionForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    