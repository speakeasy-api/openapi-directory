import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Monitor charges and usage from Actions and Packages.
 */
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get GitHub Actions billing for an organization
     *
     * @remarks
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * @see {@link https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-an-organization} - API method documentation
     */
    billingGetGithubActionsBillingOrg(req: operations.BillingGetGithubActionsBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingOrgResponse>;
    /**
     * Get GitHub Actions billing for a user
     *
     * @remarks
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `user` scope.
     *
     * @see {@link https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-a-user} - API method documentation
     */
    billingGetGithubActionsBillingUser(req: operations.BillingGetGithubActionsBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingUserResponse>;
    /**
     * Get GitHub Packages billing for an organization
     *
     * @remarks
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * @see {@link https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-organization} - API method documentation
     */
    billingGetGithubPackagesBillingOrg(req: operations.BillingGetGithubPackagesBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingOrgResponse>;
    /**
     * Get GitHub Packages billing for a user
     *
     * @remarks
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * @see {@link https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-a-user} - API method documentation
     */
    billingGetGithubPackagesBillingUser(req: operations.BillingGetGithubPackagesBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingUserResponse>;
    /**
     * Get shared storage billing for an organization
     *
     * @remarks
     * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * @see {@link https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-organization} - API method documentation
     */
    billingGetSharedStorageBillingOrg(req: operations.BillingGetSharedStorageBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingOrgResponse>;
    /**
     * Get shared storage billing for a user
     *
     * @remarks
     * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * @see {@link https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-a-user} - API method documentation
     */
    billingGetSharedStorageBillingUser(req: operations.BillingGetSharedStorageBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingUserResponse>;
}
