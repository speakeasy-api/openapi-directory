import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://worklink.{region}.amazonaws.com", "https://worklink.{region}.amazonaws.com", "http://worklink.{region}.amazonaws.com.cn", "https://worklink.{region}.amazonaws.com.cn"];
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
 * Amazon WorkLink is a cloud-based service that provides secure access to internal websites and web apps from iOS and Android phones. In a single step, your users, such as employees, can access internal websites as efficiently as they access any other public website. They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink authenticates the user's access and securely renders authorized internal web content in a secure rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on mobile devices.
 *
 * @see {@link https://docs.aws.amazon.com/worklink/} - Amazon Web Services documentation
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
     * Specifies a domain to be associated to Amazon WorkLink.
     */
    associateDomain(req: operations.AssociateDomainRequest, config?: AxiosRequestConfig): Promise<operations.AssociateDomainResponse>;
    /**
     * Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.
     */
    associateWebsiteAuthorizationProvider(req: operations.AssociateWebsiteAuthorizationProviderRequest, config?: AxiosRequestConfig): Promise<operations.AssociateWebsiteAuthorizationProviderResponse>;
    /**
     * Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.
     */
    associateWebsiteCertificateAuthority(req: operations.AssociateWebsiteCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.AssociateWebsiteCertificateAuthorityResponse>;
    /**
     * Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.
     */
    createFleet(req: operations.CreateFleetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFleetResponse>;
    /**
     * Deletes a fleet. Prevents users from accessing previously associated websites.
     */
    deleteFleet(req: operations.DeleteFleetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFleetResponse>;
    /**
     * Describes the configuration for delivering audit streams to the customer account.
     */
    describeAuditStreamConfiguration(req: operations.DescribeAuditStreamConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAuditStreamConfigurationResponse>;
    /**
     * Describes the networking configuration to access the internal websites associated with the specified fleet.
     */
    describeCompanyNetworkConfiguration(req: operations.DescribeCompanyNetworkConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCompanyNetworkConfigurationResponse>;
    /**
     * Provides information about a user's device.
     */
    describeDevice(req: operations.DescribeDeviceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDeviceResponse>;
    /**
     * Describes the device policy configuration for the specified fleet.
     */
    describeDevicePolicyConfiguration(req: operations.DescribeDevicePolicyConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDevicePolicyConfigurationResponse>;
    /**
     * Provides information about the domain.
     */
    describeDomain(req: operations.DescribeDomainRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDomainResponse>;
    /**
     * Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.
     */
    describeFleetMetadata(req: operations.DescribeFleetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFleetMetadataResponse>;
    /**
     * Describes the identity provider configuration of the specified fleet.
     */
    describeIdentityProviderConfiguration(req: operations.DescribeIdentityProviderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeIdentityProviderConfigurationResponse>;
    /**
     * Provides information about the certificate authority.
     */
    describeWebsiteCertificateAuthority(req: operations.DescribeWebsiteCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWebsiteCertificateAuthorityResponse>;
    /**
     * Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.
     */
    disassociateDomain(req: operations.DisassociateDomainRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateDomainResponse>;
    /**
     * Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.
     */
    disassociateWebsiteAuthorizationProvider(req: operations.DisassociateWebsiteAuthorizationProviderRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateWebsiteAuthorizationProviderResponse>;
    /**
     * Removes a certificate authority (CA).
     */
    disassociateWebsiteCertificateAuthority(req: operations.DisassociateWebsiteCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateWebsiteCertificateAuthorityResponse>;
    /**
     * Retrieves a list of devices registered with the specified fleet.
     */
    listDevices(req: operations.ListDevicesRequest, config?: AxiosRequestConfig): Promise<operations.ListDevicesResponse>;
    /**
     * Retrieves a list of domains associated to a specified fleet.
     */
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * Retrieves a list of fleets for the current account and Region.
     */
    listFleets(req: operations.ListFleetsRequest, config?: AxiosRequestConfig): Promise<operations.ListFleetsResponse>;
    /**
     * Retrieves a list of tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Retrieves a list of website authorization providers associated with a specified fleet.
     */
    listWebsiteAuthorizationProviders(req: operations.ListWebsiteAuthorizationProvidersRequest, config?: AxiosRequestConfig): Promise<operations.ListWebsiteAuthorizationProvidersResponse>;
    /**
     * Retrieves a list of certificate authorities added for the current account and Region.
     */
    listWebsiteCertificateAuthorities(req: operations.ListWebsiteCertificateAuthoritiesRequest, config?: AxiosRequestConfig): Promise<operations.ListWebsiteCertificateAuthoritiesResponse>;
    /**
     * Moves a domain to ACTIVE status if it was in the INACTIVE status.
     */
    restoreDomainAccess(req: operations.RestoreDomainAccessRequest, config?: AxiosRequestConfig): Promise<operations.RestoreDomainAccessResponse>;
    /**
     * Moves a domain to INACTIVE status if it was in the ACTIVE status.
     */
    revokeDomainAccess(req: operations.RevokeDomainAccessRequest, config?: AxiosRequestConfig): Promise<operations.RevokeDomainAccessResponse>;
    /**
     * Signs the user out from all of their devices. The user can sign in again if they have valid credentials.
     */
    signOutUser(req: operations.SignOutUserRequest, config?: AxiosRequestConfig): Promise<operations.SignOutUserResponse>;
    /**
     * Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the audit stream configuration for the fleet.
     */
    updateAuditStreamConfiguration(req: operations.UpdateAuditStreamConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAuditStreamConfigurationResponse>;
    /**
     * Updates the company network configuration for the fleet.
     */
    updateCompanyNetworkConfiguration(req: operations.UpdateCompanyNetworkConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCompanyNetworkConfigurationResponse>;
    /**
     * Updates the device policy configuration for the fleet.
     */
    updateDevicePolicyConfiguration(req: operations.UpdateDevicePolicyConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDevicePolicyConfigurationResponse>;
    /**
     * Updates domain metadata, such as DisplayName.
     */
    updateDomainMetadata(req: operations.UpdateDomainMetadataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainMetadataResponse>;
    /**
     * Updates fleet metadata, such as DisplayName.
     */
    updateFleetMetadata(req: operations.UpdateFleetMetadataRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFleetMetadataResponse>;
    /**
     * Updates the identity provider configuration for the fleet.
     */
    updateIdentityProviderConfiguration(req: operations.UpdateIdentityProviderConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIdentityProviderConfigurationResponse>;
}
