import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://workspaces-web.{region}.amazonaws.com", "https://workspaces-web.{region}.amazonaws.com", "http://workspaces-web.{region}.amazonaws.com.cn", "https://workspaces-web.{region}.amazonaws.com.cn"];
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
 * WorkSpaces Web is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Web makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Web provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.
 *
 * @see {@link https://docs.aws.amazon.com/workspaces-web/} - Amazon Web Services documentation
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
     * Associates a browser settings resource with a web portal.
     */
    associateBrowserSettings(req: operations.AssociateBrowserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateBrowserSettingsResponse>;
    /**
     * Associates a network settings resource with a web portal.
     */
    associateNetworkSettings(req: operations.AssociateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateNetworkSettingsResponse>;
    /**
     * Associates a trust store with a web portal.
     */
    associateTrustStore(req: operations.AssociateTrustStoreRequest, config?: AxiosRequestConfig): Promise<operations.AssociateTrustStoreResponse>;
    /**
     * Associates a user access logging settings resource with a web portal.
     */
    associateUserAccessLoggingSettings(req: operations.AssociateUserAccessLoggingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateUserAccessLoggingSettingsResponse>;
    /**
     * Associates a user settings resource with a web portal.
     */
    associateUserSettings(req: operations.AssociateUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateUserSettingsResponse>;
    /**
     * Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.
     */
    createBrowserSettings(req: operations.CreateBrowserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateBrowserSettingsResponse>;
    /**
     * Creates an identity provider resource that is then associated with a web portal.
     */
    createIdentityProvider(req: operations.CreateIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.CreateIdentityProviderResponse>;
    /**
     * Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
     */
    createNetworkSettings(req: operations.CreateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSettingsResponse>;
    /**
     * Creates a web portal.
     */
    createPortal(req: operations.CreatePortalRequest, config?: AxiosRequestConfig): Promise<operations.CreatePortalResponse>;
    /**
     * Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.
     */
    createTrustStore(req: operations.CreateTrustStoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateTrustStoreResponse>;
    /**
     * Creates a user access logging settings resource that can be associated with a web portal.
     */
    createUserAccessLoggingSettings(req: operations.CreateUserAccessLoggingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserAccessLoggingSettingsResponse>;
    /**
     * Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.
     */
    createUserSettings(req: operations.CreateUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserSettingsResponse>;
    /**
     * Deletes browser settings.
     */
    deleteBrowserSettings(req: operations.DeleteBrowserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBrowserSettingsResponse>;
    /**
     * Deletes the identity provider.
     */
    deleteIdentityProvider(req: operations.DeleteIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIdentityProviderResponse>;
    /**
     * Deletes network settings.
     */
    deleteNetworkSettings(req: operations.DeleteNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSettingsResponse>;
    /**
     * Deletes a web portal.
     */
    deletePortal(req: operations.DeletePortalRequest, config?: AxiosRequestConfig): Promise<operations.DeletePortalResponse>;
    /**
     * Deletes the trust store.
     */
    deleteTrustStore(req: operations.DeleteTrustStoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTrustStoreResponse>;
    /**
     * Deletes user access logging settings.
     */
    deleteUserAccessLoggingSettings(req: operations.DeleteUserAccessLoggingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserAccessLoggingSettingsResponse>;
    /**
     * Deletes user settings.
     */
    deleteUserSettings(req: operations.DeleteUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserSettingsResponse>;
    /**
     * Disassociates browser settings from a web portal.
     */
    disassociateBrowserSettings(req: operations.DisassociateBrowserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateBrowserSettingsResponse>;
    /**
     * Disassociates network settings from a web portal.
     */
    disassociateNetworkSettings(req: operations.DisassociateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateNetworkSettingsResponse>;
    /**
     * Disassociates a trust store from a web portal.
     */
    disassociateTrustStore(req: operations.DisassociateTrustStoreRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateTrustStoreResponse>;
    /**
     * Disassociates user access logging settings from a web portal.
     */
    disassociateUserAccessLoggingSettings(req: operations.DisassociateUserAccessLoggingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateUserAccessLoggingSettingsResponse>;
    /**
     * Disassociates user settings from a web portal.
     */
    disassociateUserSettings(req: operations.DisassociateUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateUserSettingsResponse>;
    /**
     * Gets browser settings.
     */
    getBrowserSettings(req: operations.GetBrowserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetBrowserSettingsResponse>;
    /**
     * Gets the identity provider.
     */
    getIdentityProvider(req: operations.GetIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.GetIdentityProviderResponse>;
    /**
     * Gets the network settings.
     */
    getNetworkSettings(req: operations.GetNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSettingsResponse>;
    /**
     * Gets the web portal.
     */
    getPortal(req: operations.GetPortalRequest, config?: AxiosRequestConfig): Promise<operations.GetPortalResponse>;
    /**
     * Gets the service provider metadata.
     */
    getPortalServiceProviderMetadata(req: operations.GetPortalServiceProviderMetadataRequest, config?: AxiosRequestConfig): Promise<operations.GetPortalServiceProviderMetadataResponse>;
    /**
     * Gets the trust store.
     */
    getTrustStore(req: operations.GetTrustStoreRequest, config?: AxiosRequestConfig): Promise<operations.GetTrustStoreResponse>;
    /**
     * Gets the trust store certificate.
     */
    getTrustStoreCertificate(req: operations.GetTrustStoreCertificateRequest, config?: AxiosRequestConfig): Promise<operations.GetTrustStoreCertificateResponse>;
    /**
     * Gets user access logging settings.
     */
    getUserAccessLoggingSettings(req: operations.GetUserAccessLoggingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserAccessLoggingSettingsResponse>;
    /**
     * Gets user settings.
     */
    getUserSettings(req: operations.GetUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserSettingsResponse>;
    /**
     * Retrieves a list of browser settings.
     */
    listBrowserSettings(req: operations.ListBrowserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ListBrowserSettingsResponse>;
    /**
     * Retrieves a list of identity providers for a specific web portal.
     */
    listIdentityProviders(req: operations.ListIdentityProvidersRequest, config?: AxiosRequestConfig): Promise<operations.ListIdentityProvidersResponse>;
    /**
     * Retrieves a list of network settings.
     */
    listNetworkSettings(req: operations.ListNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworkSettingsResponse>;
    /**
     * Retrieves a list or web portals.
     */
    listPortals(req: operations.ListPortalsRequest, config?: AxiosRequestConfig): Promise<operations.ListPortalsResponse>;
    /**
     * Retrieves a list of tags for a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Retrieves a list of trust store certificates.
     */
    listTrustStoreCertificates(req: operations.ListTrustStoreCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.ListTrustStoreCertificatesResponse>;
    /**
     * Retrieves a list of trust stores.
     */
    listTrustStores(req: operations.ListTrustStoresRequest, config?: AxiosRequestConfig): Promise<operations.ListTrustStoresResponse>;
    /**
     * Retrieves a list of user access logging settings.
     */
    listUserAccessLoggingSettings(req: operations.ListUserAccessLoggingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserAccessLoggingSettingsResponse>;
    /**
     * Retrieves a list of user settings.
     */
    listUserSettings(req: operations.ListUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserSettingsResponse>;
    /**
     * Adds or overwrites one or more tags for the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates browser settings.
     */
    updateBrowserSettings(req: operations.UpdateBrowserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBrowserSettingsResponse>;
    /**
     * Updates the identity provider.
     */
    updateIdentityProvider(req: operations.UpdateIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIdentityProviderResponse>;
    /**
     * Updates network settings.
     */
    updateNetworkSettings(req: operations.UpdateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSettingsResponse>;
    /**
     * Updates a web portal.
     */
    updatePortal(req: operations.UpdatePortalRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePortalResponse>;
    /**
     * Updates the trust store.
     */
    updateTrustStore(req: operations.UpdateTrustStoreRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTrustStoreResponse>;
    /**
     * Updates the user access logging settings.
     */
    updateUserAccessLoggingSettings(req: operations.UpdateUserAccessLoggingSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserAccessLoggingSettingsResponse>;
    /**
     * Updates the user settings.
     */
    updateUserSettings(req: operations.UpdateUserSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserSettingsResponse>;
}
