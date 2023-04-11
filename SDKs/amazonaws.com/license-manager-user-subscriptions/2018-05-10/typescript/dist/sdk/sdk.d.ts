import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://license-manager-user-subscriptions.{region}.amazonaws.com", "https://license-manager-user-subscriptions.{region}.amazonaws.com", "http://license-manager-user-subscriptions.{region}.amazonaws.com.cn", "https://license-manager-user-subscriptions.{region}.amazonaws.com.cn"];
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
 * With License Manager, you can create user-based subscriptions to utilize licensed software with a per user subscription fee on Amazon EC2 instances.
 *
 * @see {@link https://docs.aws.amazon.com/license-manager-user-subscriptions/} - Amazon Web Services documentation
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
     * <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
     */
    associateUser(req: operations.AssociateUserRequest, config?: AxiosRequestConfig): Promise<operations.AssociateUserResponse>;
    /**
     * Deregisters the identity provider from providing user-based subscriptions.
     */
    deregisterIdentityProvider(req: operations.DeregisterIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.DeregisterIdentityProviderResponse>;
    /**
     * Disassociates the user from an EC2 instance providing user-based subscriptions.
     */
    disassociateUser(req: operations.DisassociateUserRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateUserResponse>;
    /**
     * Lists the identity providers for user-based subscriptions.
     */
    listIdentityProviders(req: operations.ListIdentityProvidersRequest, config?: AxiosRequestConfig): Promise<operations.ListIdentityProvidersResponse>;
    /**
     * Lists the EC2 instances providing user-based subscriptions.
     */
    listInstances(req: operations.ListInstancesRequest, config?: AxiosRequestConfig): Promise<operations.ListInstancesResponse>;
    /**
     * Lists the user-based subscription products available from an identity provider.
     */
    listProductSubscriptions(req: operations.ListProductSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListProductSubscriptionsResponse>;
    /**
     * Lists user associations for an identity provider.
     */
    listUserAssociations(req: operations.ListUserAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListUserAssociationsResponse>;
    /**
     * Registers an identity provider for user-based subscriptions.
     */
    registerIdentityProvider(req: operations.RegisterIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.RegisterIdentityProviderResponse>;
    /**
     * <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
     */
    startProductSubscription(req: operations.StartProductSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.StartProductSubscriptionResponse>;
    /**
     * Stops a product subscription for a user with the specified identity provider.
     */
    stopProductSubscription(req: operations.StopProductSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.StopProductSubscriptionResponse>;
    /**
     * Updates additional product configuration settings for the registered identity provider.
     */
    updateIdentityProviderSettings(req: operations.UpdateIdentityProviderSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIdentityProviderSettingsResponse>;
}
