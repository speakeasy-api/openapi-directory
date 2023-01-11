import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * billingGetGithubActionsBillingGhe - Get GitHub Actions billing for an enterprise
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-enterprise - API method documentation
    **/
    billingGetGithubActionsBillingGhe(req: operations.BillingGetGithubActionsBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingGheResponse>;
    /**
     * billingGetGithubActionsBillingOrg - Get GitHub Actions billing for an organization
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-organization - API method documentation
    **/
    billingGetGithubActionsBillingOrg(req: operations.BillingGetGithubActionsBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingOrgResponse>;
    /**
     * billingGetGithubActionsBillingUser - Get GitHub Actions billing for a user
     *
     * Gets the summary of the free and paid GitHub Actions minutes used.
     *
     * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
     *
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-a-user - API method documentation
    **/
    billingGetGithubActionsBillingUser(req: operations.BillingGetGithubActionsBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubActionsBillingUserResponse>;
    /**
     * billingGetGithubPackagesBillingGhe - Get GitHub Packages billing for an enterprise
     *
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-enterprise - API method documentation
    **/
    billingGetGithubPackagesBillingGhe(req: operations.BillingGetGithubPackagesBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingGheResponse>;
    /**
     * billingGetGithubPackagesBillingOrg - Get GitHub Packages billing for an organization
     *
     * Gets the free and paid storage usued for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-organization - API method documentation
    **/
    billingGetGithubPackagesBillingOrg(req: operations.BillingGetGithubPackagesBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingOrgResponse>;
    /**
     * billingGetGithubPackagesBillingUser - Get GitHub Packages billing for a user
     *
     * Gets the free and paid storage used for GitHub Packages in gigabytes.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-a-user - API method documentation
    **/
    billingGetGithubPackagesBillingUser(req: operations.BillingGetGithubPackagesBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetGithubPackagesBillingUserResponse>;
    /**
     * billingGetSharedStorageBillingGhe - Get shared storage billing for an enterprise
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * The authenticated user must be an enterprise admin.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-enterprise - API method documentation
    **/
    billingGetSharedStorageBillingGhe(req: operations.BillingGetSharedStorageBillingGheRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingGheResponse>;
    /**
     * billingGetSharedStorageBillingOrg - Get shared storage billing for an organization
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `repo` or `admin:org` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-organization - API method documentation
    **/
    billingGetSharedStorageBillingOrg(req: operations.BillingGetSharedStorageBillingOrgRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingOrgResponse>;
    /**
     * billingGetSharedStorageBillingUser - Get shared storage billing for a user
     *
     * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
     *
     * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
     *
     * Access tokens must have the `user` scope.
     *
     * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-a-user - API method documentation
    **/
    billingGetSharedStorageBillingUser(req: operations.BillingGetSharedStorageBillingUserRequest, config?: AxiosRequestConfig): Promise<operations.BillingGetSharedStorageBillingUserResponse>;
}
