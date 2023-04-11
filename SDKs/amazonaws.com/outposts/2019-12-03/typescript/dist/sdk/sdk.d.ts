import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://outposts.{region}.amazonaws.com", "https://outposts.{region}.amazonaws.com", "http://outposts.{region}.amazonaws.com.cn", "https://outposts.{region}.amazonaws.com.cn"];
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
 * Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables customers to build and run applications on premises using the same programming interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local data processing needs.
 *
 * @see {@link https://docs.aws.amazon.com/outposts/} - Amazon Web Services documentation
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
     * Cancels the specified order for an Outpost.
     */
    cancelOrder(req: operations.CancelOrderRequest, config?: AxiosRequestConfig): Promise<operations.CancelOrderResponse>;
    /**
     * Creates an order for an Outpost.
     */
    createOrder(req: operations.CreateOrderRequest, config?: AxiosRequestConfig): Promise<operations.CreateOrderResponse>;
    /**
     * <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
     */
    createOutpost(req: operations.CreateOutpostRequest, config?: AxiosRequestConfig): Promise<operations.CreateOutpostResponse>;
    /**
     *  Creates a site for an Outpost.
     */
    createSite(req: operations.CreateSiteRequest, config?: AxiosRequestConfig): Promise<operations.CreateSiteResponse>;
    /**
     * Deletes the specified Outpost.
     */
    deleteOutpost(req: operations.DeleteOutpostRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOutpostResponse>;
    /**
     * Deletes the specified site.
     */
    deleteSite(req: operations.DeleteSiteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSiteResponse>;
    /**
     * Gets information about the specified catalog item.
     */
    getCatalogItem(req: operations.GetCatalogItemRequest, config?: AxiosRequestConfig): Promise<operations.GetCatalogItemResponse>;
    /**
     * <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
     */
    getConnection(req: operations.GetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionResponse>;
    /**
     * Gets information about the specified order.
     */
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * Gets information about the specified Outpost.
     */
    getOutpost(req: operations.GetOutpostRequest, config?: AxiosRequestConfig): Promise<operations.GetOutpostResponse>;
    /**
     * Gets the instance types for the specified Outpost.
     */
    getOutpostInstanceTypes(req: operations.GetOutpostInstanceTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetOutpostInstanceTypesResponse>;
    /**
     * Gets information about the specified Outpost site.
     */
    getSite(req: operations.GetSiteRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteResponse>;
    /**
     *  Gets the site address of the specified site.
     */
    getSiteAddress(req: operations.GetSiteAddressRequest, config?: AxiosRequestConfig): Promise<operations.GetSiteAddressResponse>;
    /**
     * <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
     */
    listAssets(req: operations.ListAssetsRequest, config?: AxiosRequestConfig): Promise<operations.ListAssetsResponse>;
    /**
     * <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
     */
    listCatalogItems(req: operations.ListCatalogItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListCatalogItemsResponse>;
    /**
     * Lists the Outpost orders for your Amazon Web Services account.
     */
    listOrders(req: operations.ListOrdersRequest, config?: AxiosRequestConfig): Promise<operations.ListOrdersResponse>;
    /**
     * <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
     */
    listOutposts(req: operations.ListOutpostsRequest, config?: AxiosRequestConfig): Promise<operations.ListOutpostsResponse>;
    /**
     * <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
     */
    listSites(req: operations.ListSitesRequest, config?: AxiosRequestConfig): Promise<operations.ListSitesResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
     */
    startConnection(req: operations.StartConnectionRequest, config?: AxiosRequestConfig): Promise<operations.StartConnectionResponse>;
    /**
     * Adds tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     *  Updates an Outpost.
     */
    updateOutpost(req: operations.UpdateOutpostRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOutpostResponse>;
    /**
     * Updates the specified site.
     */
    updateSite(req: operations.UpdateSiteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSiteResponse>;
    /**
     * <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
     */
    updateSiteAddress(req: operations.UpdateSiteAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSiteAddressResponse>;
    /**
     * <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>
     */
    updateSiteRackPhysicalProperties(req: operations.UpdateSiteRackPhysicalPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSiteRackPhysicalPropertiesResponse>;
}
