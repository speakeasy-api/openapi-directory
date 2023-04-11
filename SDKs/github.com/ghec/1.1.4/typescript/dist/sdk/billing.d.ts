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
     * Get GitHub Actions billing for an enterprise
     *
     * @remarks
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * The authenticated user must be an enterprise admin.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-actions-billing-for-an-enterprise} - API method documentation
     */
    billingGetGithubActionsBillingGhe(req: operations.BillingGetGithubActionsBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingGheResponse>;
    /**
     * Get GitHub Actions billing for an organization
     *
     * @remarks
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-actions-billing-for-an-organization} - API method documentation
     */
    billingGetGithubActionsBillingOrg(req: operations.BillingGetGithubActionsBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingOrgResponse>;
    /**
     * Get GitHub Actions billing for a user
     *
     * @remarks
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `user` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-actions-billing-for-a-user} - API method documentation
     */
    billingGetGithubActionsBillingUser(req: operations.BillingGetGithubActionsBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingUserResponse>;
    /**
     * Get GitHub Advanced Security active committers for an enterprise
     *
     * @remarks
     * Gets the GitHub Advanced Security active committers for an enterprise per repository.
     *
     * Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.
     *
     * The total number of repositories with committer information is tracked by the `total_count` field.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise} - API method documentation
     */
    billingGetGithubAdvancedSecurityBillingGhe(req: operations.BillingGetGithubAdvancedSecurityBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubAdvancedSecurityBillingGheResponse>;
    /**
     * Get GitHub Advanced Security active committers for an organization
     *
     * @remarks
     * Gets the GitHub Advanced Security active committers for an organization per repository.
     *
     * Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.
     *
     * If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.
     *
     * The total number of repositories with committer information is tracked by the `total_count` field.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization} - API method documentation
     */
    billingGetGithubAdvancedSecurityBillingOrg(req: operations.BillingGetGithubAdvancedSecurityBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubAdvancedSecurityBillingOrgResponse>;
    /**
     * Get GitHub Packages billing for an enterprise
     *
     * @remarks
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * The authenticated user must be an enterprise admin.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-packages-billing-for-an-enterprise} - API method documentation
     */
    billingGetGithubPackagesBillingGhe(req: operations.BillingGetGithubPackagesBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingGheResponse>;
    /**
     * Get GitHub Packages billing for an organization
     *
     * @remarks
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-packages-billing-for-an-organization} - API method documentation
     */
    billingGetGithubPackagesBillingOrg(req: operations.BillingGetGithubPackagesBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingOrgResponse>;
    /**
     * Get GitHub Packages billing for a user
     *
     * @remarks
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-github-packages-billing-for-a-user} - API method documentation
     */
    billingGetGithubPackagesBillingUser(req: operations.BillingGetGithubPackagesBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingUserResponse>;
    /**
     * Get shared storage billing for an enterprise
     *
     * @remarks
     * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * The authenticated user must be an enterprise admin.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-shared-storage-billing-for-an-enterprise} - API method documentation
     */
    billingGetSharedStorageBillingGhe(req: operations.BillingGetSharedStorageBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingGheResponse>;
    /**
     * Get shared storage billing for an organization
     *
     * @remarks
     * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-shared-storage-billing-for-an-organization} - API method documentation
     */
    billingGetSharedStorageBillingOrg(req: operations.BillingGetSharedStorageBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingOrgResponse>;
    /**
     * Get shared storage billing for a user
     *
     * @remarks
     * Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/enterprise-cloud@latest//github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * @see {@link https://docs.github.com/enterprise-cloud@latest//rest/reference/billing#get-shared-storage-billing-for-a-user} - API method documentation
     */
    billingGetSharedStorageBillingUser(req: operations.BillingGetSharedStorageBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingUserResponse>;
}
