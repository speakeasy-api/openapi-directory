import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Manage packages for authenticated users and organizations.
 */
export declare class Packages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a package for the authenticated user
     *
     * @remarks
     * Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes.
     * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user} - API method documentation
     */
    packagesDeletePackageForAuthenticatedUser(req: operations.PackagesDeletePackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageForAuthenticatedUserResponse>;
    /**
     * Delete a package for an organization
     *
     * @remarks
     * Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization} - API method documentation
     */
    packagesDeletePackageForOrg(req: operations.PackagesDeletePackageForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageForOrgResponse>;
    /**
     * Delete a package for a user
     *
     * @remarks
     * Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#delete-a-package-for-a-user} - API method documentation
     */
    packagesDeletePackageForUser(req: operations.PackagesDeletePackageForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageForUserResponse>;
    /**
     * Delete a package version for the authenticated user
     *
     * @remarks
     * Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes.
     * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user} - API method documentation
     */
    packagesDeletePackageVersionForAuthenticatedUser(req: operations.PackagesDeletePackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageVersionForAuthenticatedUserResponse>;
    /**
     * Delete package version for an organization
     *
     * @remarks
     * Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization} - API method documentation
     */
    packagesDeletePackageVersionForOrg(req: operations.PackagesDeletePackageVersionForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageVersionForOrgResponse>;
    /**
     * Delete package version for a user
     *
     * @remarks
     * Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `delete:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to delete. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#delete-a-package-version-for-a-user} - API method documentation
     */
    packagesDeletePackageVersionForUser(req: operations.PackagesDeletePackageVersionForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesDeletePackageVersionForUserResponse>;
    /**
     * List package versions for a package owned by the authenticated user
     *
     * @remarks
     * Lists package versions for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user} - API method documentation
     */
    packagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUser(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByAuthenticatedUserResponse>;
    /**
     * List package versions for a package owned by an organization
     *
     * @remarks
     * Lists package versions for a package owned by an organization.
     *
     * If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-an-organization} - API method documentation
     */
    packagesGetAllPackageVersionsForPackageOwnedByOrg(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse>;
    /**
     * List package versions for a package owned by a user
     *
     * @remarks
     * Lists package versions for a public package owned by a specified user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/packages#get-all-package-versions-for-a-package-owned-by-a-user} - API method documentation
     */
    packagesGetAllPackageVersionsForPackageOwnedByUser(req: operations.PackagesGetAllPackageVersionsForPackageOwnedByUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetAllPackageVersionsForPackageOwnedByUserResponse>;
    /**
     * Get a package for the authenticated user
     *
     * @remarks
     * Gets a specific package for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user} - API method documentation
     */
    packagesGetPackageForAuthenticatedUser(req: operations.PackagesGetPackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForAuthenticatedUserResponse>;
    /**
     * Get a package for an organization
     *
     * @remarks
     * Gets a specific package in an organization.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization} - API method documentation
     */
    packagesGetPackageForOrganization(req: operations.PackagesGetPackageForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForOrganizationResponse>;
    /**
     * Get a package for a user
     *
     * @remarks
     * Gets a specific package metadata for a public package owned by a user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#get-a-package-for-a-user} - API method documentation
     */
    packagesGetPackageForUser(req: operations.PackagesGetPackageForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageForUserResponse>;
    /**
     * Get a package version for the authenticated user
     *
     * @remarks
     * Gets a specific package version for a package owned by the authenticated user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user} - API method documentation
     */
    packagesGetPackageVersionForAuthenticatedUser(req: operations.PackagesGetPackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForAuthenticatedUserResponse>;
    /**
     * Get a package version for an organization
     *
     * @remarks
     * Gets a specific package version in an organization.
     *
     * You must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization} - API method documentation
     */
    packagesGetPackageVersionForOrganization(req: operations.PackagesGetPackageVersionForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForOrganizationResponse>;
    /**
     * Get a package version for a user
     *
     * @remarks
     * Gets a specific package version for a public package owned by a specified user.
     *
     * At this time, to use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user} - API method documentation
     */
    packagesGetPackageVersionForUser(req: operations.PackagesGetPackageVersionForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesGetPackageVersionForUserResponse>;
    /**
     * List packages for the authenticated user's namespace
     *
     * @remarks
     * Lists packages owned by the authenticated user within the user's namespace.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#list-packages-for-the-authenticated-user} - API method documentation
     */
    packagesListPackagesForAuthenticatedUser(req: operations.PackagesListPackagesForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesListPackagesForAuthenticatedUserResponse>;
    /**
     * List packages for an organization
     *
     * @remarks
     * Lists packages in an organization readable by the user.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#list-packages-for-an-organization} - API method documentation
     */
    packagesListPackagesForOrganization(req: operations.PackagesListPackagesForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.PackagesListPackagesForOrganizationResponse>;
    /**
     * List packages for a user
     *
     * @remarks
     * Lists all packages in a user's namespace for which the requesting user has access.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` scope. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#list-packages-for-user} - API method documentation
     */
    packagesListPackagesForUser(req: operations.PackagesListPackagesForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesListPackagesForUserResponse>;
    /**
     * Restore a package for the authenticated user
     *
     * @remarks
     * Restores a package owned by the authenticated user.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user} - API method documentation
     */
    packagesRestorePackageForAuthenticatedUser(req: operations.PackagesRestorePackageForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageForAuthenticatedUserResponse>;
    /**
     * Restore a package for an organization
     *
     * @remarks
     * Restores an entire package in an organization.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization} - API method documentation
     */
    packagesRestorePackageForOrg(req: operations.PackagesRestorePackageForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageForOrgResponse>;
    /**
     * Restore a package for a user
     *
     * @remarks
     * Restores an entire package for a user.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#restore-a-package-for-a-user} - API method documentation
     */
    packagesRestorePackageForUser(req: operations.PackagesRestorePackageForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageForUserResponse>;
    /**
     * Restore a package version for the authenticated user
     *
     * @remarks
     * Restores a package version owned by the authenticated user.
     *
     * You can restore a deleted package version under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of GitHub Packages registries that only support repository-scoped permissions, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user} - API method documentation
     */
    packagesRestorePackageVersionForAuthenticatedUser(req: operations.PackagesRestorePackageVersionForAuthenticatedUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageVersionForAuthenticatedUserResponse>;
    /**
     * Restore package version for an organization
     *
     * @remarks
     * Restores a specific package version in an organization.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization} - API method documentation
     */
    packagesRestorePackageVersionForOrg(req: operations.PackagesRestorePackageVersionForOrgRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageVersionForOrgResponse>;
    /**
     * Restore package version for a user
     *
     * @remarks
     * Restores a specific package version for a user.
     *
     * You can restore a deleted package under the following conditions:
     *   - The package was deleted within the last 30 days.
     *   - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
     *
     * To use this endpoint, you must authenticate using an access token with the `read:packages` and `write:packages` scopes. In addition:
     * - If the `package_type` belongs to a GitHub Packages registry that only supports repository-scoped permissions, your token must also include the `repo` scope. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)."
     * - If the `package_type` belongs to a GitHub Packages registry that supports granular permissions, you must have admin permissions to the package whose version you want to restore. For the list of these registries, see "[About permissions for GitHub Packages](https://docs.github.com/packages/learn-github-packages/about-permissions-for-github-packages#granular-permissions-for-userorganization-scoped-packages)."
     *
     * @see {@link https://docs.github.com/rest/reference/packages#restore-a-package-version-for-a-user} - API method documentation
     */
    packagesRestorePackageVersionForUser(req: operations.PackagesRestorePackageVersionForUserRequest, config?: AxiosRequestConfig): Promise<operations.PackagesRestorePackageVersionForUserResponse>;
}
