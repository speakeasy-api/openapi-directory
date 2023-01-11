import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Packages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * packagesDeletePackageForAuthenticatedUser - Delete a package for the authenticated user
     *
     * Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user - API method documentation
    **/
    packagesDeletePackageForAuthenticatedUser(req: operations.PackagesDeletePackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageForAuthenticatedUserResponse>;
    /**
     * packagesDeletePackageForOrg - Delete a package for an organization
     *
     * Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 25 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization - API method documentation
    **/
    packagesDeletePackageForOrg(req: operations.PackagesDeletePackageForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageForOrgResponse>;
    /**
     * packagesDeletePackageVersionForAuthenticatedUser - Delete a package version for the authenticated user
     *
     * Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user - API method documentation
    **/
    packagesDeletePackageVersionForAuthenticatedUser(req: operations.PackagesDeletePackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageVersionForAuthenticatedUserResponse>;
    /**
     * packagesDeletePackageVersionForOrg - Delete package version for an organization
     *
     * Deletes a specific package version in an organization. If the package is public and the package version has more than 25 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
     *
     * https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization - API method documentation
    **/
    packagesDeletePackageVersionForOrg(req: operations.PackagesDeletePackageVersionForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageVersionForOrgResponse>;
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser - Get all package versions for a package owned by the authenticated user
     *
     * Returns all package versions for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
    **/
    packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse>;
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByOrg - Get all package versions for a package owned by an organization
     *
     * Returns all package versions for a package owned by an organization.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user - API method documentation
    **/
    packagesGetAllPackageVersionsForPackageOwnedByOrg(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse>;
    /**
     * packagesGetAllPackageVersionsForPackageOwnedByUser - Get all package versions for a package owned by a user
     *
     * Returns all package versions for a public package owned by a specified user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-a-user - API method documentation
    **/
    packagesGetAllPackageVersionsForPackageOwnedByUser(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse>;
    /**
     * packagesGetPackageForAuthenticatedUser - Get a package for the authenticated user
     *
     * Gets a specific package for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user - API method documentation
    **/
    packagesGetPackageForAuthenticatedUser(req: operations.PackagesGetPackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForAuthenticatedUserResponse>;
    /**
     * packagesGetPackageForOrganization - Get a package for an organization
     *
     * Gets a specific package in an organization.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization - API method documentation
    **/
    packagesGetPackageForOrganization(req: operations.PackagesGetPackageForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForOrganizationResponse>;
    /**
     * packagesGetPackageForUser - Get a package for a user
     *
     * Gets a specific package metadata for a public package owned by a user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-for-a-user - API method documentation
    **/
    packagesGetPackageForUser(req: operations.PackagesGetPackageForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForUserResponse>;
    /**
     * packagesGetPackageVersionForAuthenticatedUser - Get a package version for the authenticated user
     *
     * Gets a specific package version for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user - API method documentation
    **/
    packagesGetPackageVersionForAuthenticatedUser(req: operations.PackagesGetPackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForAuthenticatedUserResponse>;
    /**
     * packagesGetPackageVersionForOrganization - Get a package version for an organization
     *
     * Gets a specific package version in an organization.
     *
     * You must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization - API method documentation
    **/
    packagesGetPackageVersionForOrganization(req: operations.PackagesGetPackageVersionForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForOrganizationResponse>;
    /**
     * packagesGetPackageVersionForUser - Get a package version for a user
     *
     * Gets a specific package version for a public package owned by a specified user.
     *
     * At this time, to use this endpoint, you must authenticate using an access token with the `packages:read` scope.
     * If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user - API method documentation
    **/
    packagesGetPackageVersionForUser(req: operations.PackagesGetPackageVersionForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForUserResponse>;
    /**
     * packagesRestorePackageForAuthenticatedUser - Restore a package for the authenticated user
     *
     * Restores a package owned by the authenticated user.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user - API method documentation
    **/
    packagesRestorePackageForAuthenticatedUser(req: operations.PackagesRestorePackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageForAuthenticatedUserResponse>;
    /**
     * packagesRestorePackageForOrg - Restore a package for an organization
     *
     * Restores an entire package in an organization.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization - API method documentation
    **/
    packagesRestorePackageForOrg(req: operations.PackagesRestorePackageForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageForOrgResponse>;
    /**
     * packagesRestorePackageVersionForAuthenticatedUser - Restore a package version for the authenticated user
     *
     * Restores a package version owned by the authenticated user.
     *
     * You can restore a deleted package version under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scope. If `package_type` is not `container`, your token must also include the `repo` scope.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user - API method documentation
    **/
    packagesRestorePackageVersionForAuthenticatedUser(req: operations.PackagesRestorePackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageVersionForAuthenticatedUserResponse>;
    /**
     * packagesRestorePackageVersionForOrg - Restore package version for an organization
     *
     * Restores a specific package version in an organization.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scope. In addition:
     * - If `package_type` is not `container`, your token must also include the `repo` scope.
     * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
     *
     * https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization - API method documentation
    **/
    packagesRestorePackageVersionForOrg(req: operations.PackagesRestorePackageVersionForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageVersionForOrgResponse>;
}
