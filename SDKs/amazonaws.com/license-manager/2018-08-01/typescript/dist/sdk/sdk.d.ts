import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://license-manager.{region}.amazonaws.com", "https://license-manager.{region}.amazonaws.com", "http://license-manager.{region}.amazonaws.com.cn", "https://license-manager.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * License Manager makes it easier to manage licenses from software vendors across multiple Amazon Web Services accounts and on-premises servers.
 *
 * @see {@link https://docs.aws.amazon.com/license-manager/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Accepts the specified grant.
     */
    acceptGrant(req: operations.AcceptGrantRequest, config?: AxiosRequestConfig): Promise<operations.AcceptGrantResponse>;
    /**
     * Checks in the specified license. Check in a license when it is no longer in use.
     */
    checkInLicense(req: operations.CheckInLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CheckInLicenseResponse>;
    /**
     * Checks out the specified license for offline use.
     */
    checkoutBorrowLicense(req: operations.CheckoutBorrowLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CheckoutBorrowLicenseResponse>;
    /**
     * <p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>
     */
    checkoutLicense(req: operations.CheckoutLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CheckoutLicenseResponse>;
    /**
     * Creates a grant for the specified license. A grant shares the use of license entitlements with specific Amazon Web Services accounts.
     */
    createGrant(req: operations.CreateGrantRequest, config?: AxiosRequestConfig): Promise<operations.CreateGrantResponse>;
    /**
     * Creates a new version of the specified grant.
     */
    createGrantVersion(req: operations.CreateGrantVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateGrantVersionResponse>;
    /**
     * Creates a license.
     */
    createLicense(req: operations.CreateLicenseRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseResponse>;
    /**
     * <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
     */
    createLicenseConfiguration(req: operations.CreateLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseConfigurationResponse>;
    /**
     * Creates a new license conversion task.
     */
    createLicenseConversionTaskForResource(req: operations.CreateLicenseConversionTaskForResourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseConversionTaskForResourceResponse>;
    /**
     * Creates a report generator.
     */
    createLicenseManagerReportGenerator(req: operations.CreateLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseManagerReportGeneratorResponse>;
    /**
     * Creates a new version of the specified license.
     */
    createLicenseVersion(req: operations.CreateLicenseVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateLicenseVersionResponse>;
    /**
     * <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
     */
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Deletes the specified grant.
     */
    deleteGrant(req: operations.DeleteGrantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGrantResponse>;
    /**
     * Deletes the specified license.
     */
    deleteLicense(req: operations.DeleteLicenseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseResponse>;
    /**
     * <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
     */
    deleteLicenseConfiguration(req: operations.DeleteLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseConfigurationResponse>;
    /**
     * <p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
     */
    deleteLicenseManagerReportGenerator(req: operations.DeleteLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLicenseManagerReportGeneratorResponse>;
    /**
     * Deletes the specified token. Must be called in the license home Region.
     */
    deleteToken(req: operations.DeleteTokenRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTokenResponse>;
    /**
     * Extends the expiration date for license consumption.
     */
    extendLicenseConsumption(req: operations.ExtendLicenseConsumptionRequest, config?: AxiosRequestConfig): Promise<operations.ExtendLicenseConsumptionResponse>;
    /**
     * Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
     */
    getAccessToken(req: operations.GetAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAccessTokenResponse>;
    /**
     * Gets detailed information about the specified grant.
     */
    getGrant(req: operations.GetGrantRequest, config?: AxiosRequestConfig): Promise<operations.GetGrantResponse>;
    /**
     * Gets detailed information about the specified license.
     */
    getLicense(req: operations.GetLicenseRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseResponse>;
    /**
     * Gets detailed information about the specified license configuration.
     */
    getLicenseConfiguration(req: operations.GetLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseConfigurationResponse>;
    /**
     * Gets information about the specified license type conversion task.
     */
    getLicenseConversionTask(req: operations.GetLicenseConversionTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseConversionTaskResponse>;
    /**
     * Gets information about the specified report generator.
     */
    getLicenseManagerReportGenerator(req: operations.GetLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseManagerReportGeneratorResponse>;
    /**
     * Gets detailed information about the usage of the specified license.
     */
    getLicenseUsage(req: operations.GetLicenseUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetLicenseUsageResponse>;
    /**
     * Gets the License Manager settings for the current Region.
     */
    getServiceSettings(req: operations.GetServiceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceSettingsResponse>;
    /**
     * <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
     */
    listAssociationsForLicenseConfiguration(req: operations.ListAssociationsForLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ListAssociationsForLicenseConfigurationResponse>;
    /**
     * Lists the grants distributed for the specified license.
     */
    listDistributedGrants(req: operations.ListDistributedGrantsRequest, config?: AxiosRequestConfig): Promise<operations.ListDistributedGrantsResponse>;
    /**
     * Lists the license configuration operations that failed.
     */
    listFailuresForLicenseConfigurationOperations(req: operations.ListFailuresForLicenseConfigurationOperationsRequest, config?: AxiosRequestConfig): Promise<operations.ListFailuresForLicenseConfigurationOperationsResponse>;
    /**
     * Lists the license configurations for your account.
     */
    listLicenseConfigurations(req: operations.ListLicenseConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseConfigurationsResponse>;
    /**
     * Lists the license type conversion tasks for your account.
     */
    listLicenseConversionTasks(req: operations.ListLicenseConversionTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseConversionTasksResponse>;
    /**
     * Lists the report generators for your account.
     */
    listLicenseManagerReportGenerators(req: operations.ListLicenseManagerReportGeneratorsRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseManagerReportGeneratorsResponse>;
    /**
     * Describes the license configurations for the specified resource.
     */
    listLicenseSpecificationsForResource(req: operations.ListLicenseSpecificationsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseSpecificationsForResourceResponse>;
    /**
     * Lists all versions of the specified license.
     */
    listLicenseVersions(req: operations.ListLicenseVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListLicenseVersionsResponse>;
    /**
     * Lists the licenses for your account.
     */
    listLicenses(req: operations.ListLicensesRequest, config?: AxiosRequestConfig): Promise<operations.ListLicensesResponse>;
    /**
     * Lists grants that are received but not accepted.
     */
    listReceivedGrants(req: operations.ListReceivedGrantsRequest, config?: AxiosRequestConfig): Promise<operations.ListReceivedGrantsResponse>;
    /**
     * Lists the grants received for all accounts in the organization.
     */
    listReceivedGrantsForOrganization(req: operations.ListReceivedGrantsForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ListReceivedGrantsForOrganizationResponse>;
    /**
     * Lists received licenses.
     */
    listReceivedLicenses(req: operations.ListReceivedLicensesRequest, config?: AxiosRequestConfig): Promise<operations.ListReceivedLicensesResponse>;
    /**
     * Lists the licenses received for all accounts in the organization.
     */
    listReceivedLicensesForOrganization(req: operations.ListReceivedLicensesForOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.ListReceivedLicensesForOrganizationResponse>;
    /**
     * Lists resources managed using Systems Manager inventory.
     */
    listResourceInventory(req: operations.ListResourceInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceInventoryResponse>;
    /**
     * Lists the tags for the specified license configuration.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists your tokens.
     */
    listTokens(req: operations.ListTokensRequest, config?: AxiosRequestConfig): Promise<operations.ListTokensResponse>;
    /**
     * Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
     */
    listUsageForLicenseConfiguration(req: operations.ListUsageForLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageForLicenseConfigurationResponse>;
    /**
     * Rejects the specified grant.
     */
    rejectGrant(req: operations.RejectGrantRequest, config?: AxiosRequestConfig): Promise<operations.RejectGrantResponse>;
    /**
     * Adds the specified tags to the specified license configuration.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the specified tags from the specified license configuration.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Modifies the attributes of an existing license configuration.
     */
    updateLicenseConfiguration(req: operations.UpdateLicenseConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseConfigurationResponse>;
    /**
     * <p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
     */
    updateLicenseManagerReportGenerator(req: operations.UpdateLicenseManagerReportGeneratorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseManagerReportGeneratorResponse>;
    /**
     * <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
     */
    updateLicenseSpecificationsForResource(req: operations.UpdateLicenseSpecificationsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLicenseSpecificationsForResourceResponse>;
    /**
     * Updates License Manager settings for the current Region.
     */
    updateServiceSettings(req: operations.UpdateServiceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceSettingsResponse>;
}
