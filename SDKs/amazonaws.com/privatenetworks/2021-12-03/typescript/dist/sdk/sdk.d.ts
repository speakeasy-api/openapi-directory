import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://private-networks.{region}.amazonaws.com", "https://private-networks.{region}.amazonaws.com", "http://private-networks.{region}.amazonaws.com.cn", "https://private-networks.{region}.amazonaws.com.cn"];
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
 * Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale your own private mobile network at your on-premises location. Private 5G provides the pre-configured hardware and software for mobile networks, helps automate setup, and scales capacity on demand to support additional devices as needed.
 *
 * @see {@link https://docs.aws.amazon.com/private-networks/} - Amazon Web Services documentation
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
     * Acknowledges that the specified network order was received.
     */
    acknowledgeOrderReceipt(req: operations.AcknowledgeOrderReceiptRequest, config?: AxiosRequestConfig): Promise<operations.AcknowledgeOrderReceiptResponse>;
    /**
     * Activates the specified device identifier.
     */
    activateDeviceIdentifier(req: operations.ActivateDeviceIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.ActivateDeviceIdentifierResponse>;
    /**
     * Activates the specified network site.
     */
    activateNetworkSite(req: operations.ActivateNetworkSiteRequest, config?: AxiosRequestConfig): Promise<operations.ActivateNetworkSiteResponse>;
    /**
     * <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
     */
    configureAccessPoint(req: operations.ConfigureAccessPointRequest, config?: AxiosRequestConfig): Promise<operations.ConfigureAccessPointResponse>;
    /**
     * Creates a network.
     */
    createNetwork(req: operations.CreateNetworkRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkResponse>;
    /**
     * Creates a network site.
     */
    createNetworkSite(req: operations.CreateNetworkSiteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSiteResponse>;
    /**
     * Deactivates the specified device identifier.
     */
    deactivateDeviceIdentifier(req: operations.DeactivateDeviceIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateDeviceIdentifierResponse>;
    /**
     * Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
     */
    deleteNetwork(req: operations.DeleteNetworkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkResponse>;
    /**
     * Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>.
     */
    deleteNetworkSite(req: operations.DeleteNetworkSiteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSiteResponse>;
    /**
     * Gets the specified device identifier.
     */
    getDeviceIdentifier(req: operations.GetDeviceIdentifierRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceIdentifierResponse>;
    /**
     * Gets the specified network.
     */
    getNetwork(req: operations.GetNetworkRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkResponse>;
    /**
     * Gets the specified network resource.
     */
    getNetworkResource(req: operations.GetNetworkResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkResourceResponse>;
    /**
     * Gets the specified network site.
     */
    getNetworkSite(req: operations.GetNetworkSiteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSiteResponse>;
    /**
     * Gets the specified order.
     */
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
     */
    listDeviceIdentifiers(req: operations.ListDeviceIdentifiersRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceIdentifiersResponse>;
    /**
     * <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
     */
    listNetworkResources(req: operations.ListNetworkResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworkResourcesResponse>;
    /**
     * Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
     */
    listNetworkSites(req: operations.ListNetworkSitesRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworkSitesResponse>;
    /**
     * Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
     */
    listNetworks(req: operations.ListNetworksRequest, config?: AxiosRequestConfig): Promise<operations.ListNetworksResponse>;
    /**
     * <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
     */
    listOrders(req: operations.ListOrdersRequest, config?: AxiosRequestConfig): Promise<operations.ListOrdersResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Checks the health of the service.
     */
    ping(req: operations.PingRequest, config?: AxiosRequestConfig): Promise<operations.PingResponse>;
    /**
     * <p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
     */
    startNetworkResourceUpdate(req: operations.StartNetworkResourceUpdateRequest, config?: AxiosRequestConfig): Promise<operations.StartNetworkResourceUpdateResponse>;
    /**
     *  Adds tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the specified network site.
     */
    updateNetworkSite(req: operations.UpdateNetworkSiteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSiteResponse>;
    /**
     * Updates the specified network site plan.
     */
    updateNetworkSitePlan(req: operations.UpdateNetworkSitePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSitePlanResponse>;
}
