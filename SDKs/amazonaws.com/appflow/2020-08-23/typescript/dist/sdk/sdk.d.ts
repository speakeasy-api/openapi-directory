import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://appflow.{region}.amazonaws.com", "https://appflow.{region}.amazonaws.com", "http://appflow.{region}.amazonaws.com.cn", "https://appflow.{region}.amazonaws.com.cn"];
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
 * <p>Welcome to the Amazon AppFlow API reference. This guide is for developers who need detailed information about the Amazon AppFlow API operations, data types, and errors. </p> <p>Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between software as a service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and Amazon Web Services like Amazon S3 and Amazon Redshift. </p> <p>Use the following links to get started on the Amazon AppFlow API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Operations.html">Actions</a>: An alphabetical list of all Amazon AppFlow API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/API_Types.html">Data types</a>: An alphabetical list of all Amazon AppFlow data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonParameters.html">Common parameters</a>: Parameters that all Query operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/appflow/1.0/APIReference/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul> <p>If you're new to Amazon AppFlow, we recommend that you review the <a href="https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html">Amazon AppFlow User Guide</a>.</p> <p>Amazon AppFlow API users can use vendor-specific mechanisms for OAuth, and include applicable OAuth attributes (such as <code>auth-code</code> and <code>redirecturi</code>) with the connector-specific <code>ConnectorProfileProperties</code> when creating a new connector profile using Amazon AppFlow API operations. For example, Salesforce users can refer to the <a href="https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm"> <i>Authorize Apps with OAuth</i> </a> documentation.</p>
 *
 * @see {@link https://docs.aws.amazon.com/appflow/} - Amazon Web Services documentation
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
     *  Creates a new connector profile associated with your Amazon Web Services account. There is a soft quota of 100 connector profiles per Amazon Web Services account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
     */
    createConnectorProfile(req: operations.CreateConnectorProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorProfileResponse>;
    /**
     *  Enables your application to create a new flow using Amazon AppFlow. You must create a connector profile before calling this API. Please note that the Request Syntax below shows syntax for multiple destinations, however, you can only transfer data to one item in this list at a time. Amazon AppFlow does not currently support flows to multiple destinations at once.
     */
    createFlow(req: operations.CreateFlowRequest, config?: AxiosRequestConfig): Promise<operations.CreateFlowResponse>;
    /**
     *  Enables you to delete an existing connector profile.
     */
    deleteConnectorProfile(req: operations.DeleteConnectorProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorProfileResponse>;
    /**
     *  Enables your application to delete an existing flow. Before deleting the flow, Amazon AppFlow validates the request by checking the flow configuration and status. You can delete flows one at a time.
     */
    deleteFlow(req: operations.DeleteFlowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlowResponse>;
    /**
     * Describes the given custom connector registered in your Amazon Web Services account. This API can be used for custom connectors that are registered in your account and also for Amazon authored connectors.
     */
    describeConnector(req: operations.DescribeConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorResponse>;
    /**
     *  Provides details regarding the entity used with the connector, with a description of the data model for each field in that entity.
     */
    describeConnectorEntity(req: operations.DescribeConnectorEntityRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorEntityResponse>;
    /**
     * <p> Returns a list of <code>connector-profile</code> details matching the provided <code>connector-profile</code> names and <code>connector-types</code>. Both input lists are optional, and you can use them to filter the result. </p> <p>If no names or <code>connector-types</code> are provided, returns all connector profiles in a paginated form. If there is no match, this operation returns an empty list.</p>
     */
    describeConnectorProfiles(req: operations.DescribeConnectorProfilesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorProfilesResponse>;
    /**
     *  Describes the connectors vended by Amazon AppFlow for specified connector types. If you don't specify a connector type, this operation describes all connectors vended by Amazon AppFlow. If there are more connectors than can be returned in one page, the response contains a <code>nextToken</code> object, which can be be passed in to the next call to the <code>DescribeConnectors</code> API operation to retrieve the next page.
     */
    describeConnectors(req: operations.DescribeConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorsResponse>;
    /**
     *  Provides a description of the specified flow.
     */
    describeFlow(req: operations.DescribeFlowRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFlowResponse>;
    /**
     *  Fetches the execution history of the flow.
     */
    describeFlowExecutionRecords(req: operations.DescribeFlowExecutionRecordsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFlowExecutionRecordsResponse>;
    /**
     *  Returns the list of available connector entities supported by Amazon AppFlow. For example, you can query Salesforce for <i>Account</i> and <i>Opportunity</i> entities, or query ServiceNow for the <i>Incident</i> entity.
     */
    listConnectorEntities(req: operations.ListConnectorEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorEntitiesResponse>;
    /**
     * Returns the list of all registered custom connectors in your Amazon Web Services account. This API lists only custom connectors registered in this account, not the Amazon Web Services authored connectors.
     */
    listConnectors(req: operations.ListConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorsResponse>;
    /**
     *  Lists all of the flows associated with your account.
     */
    listFlows(req: operations.ListFlowsRequest, config?: AxiosRequestConfig): Promise<operations.ListFlowsResponse>;
    /**
     *  Retrieves the tags that are associated with a specified flow.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Registers a new custom connector with your Amazon Web Services account. Before you can register the connector, you must deploy the associated AWS lambda function in your account.
     */
    registerConnector(req: operations.RegisterConnectorRequest, config?: AxiosRequestConfig): Promise<operations.RegisterConnectorResponse>;
    /**
     *  Activates an existing flow. For on-demand flows, this operation runs the flow immediately. For schedule and event-triggered flows, this operation activates the flow.
     */
    startFlow(req: operations.StartFlowRequest, config?: AxiosRequestConfig): Promise<operations.StartFlowResponse>;
    /**
     *  Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow.
     */
    stopFlow(req: operations.StopFlowRequest, config?: AxiosRequestConfig): Promise<operations.StopFlowResponse>;
    /**
     *  Applies a tag to the specified flow.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Unregisters the custom connector registered in your account that matches the connector label provided in the request.
     */
    unregisterConnector(req: operations.UnregisterConnectorRequest, config?: AxiosRequestConfig): Promise<operations.UnregisterConnectorResponse>;
    /**
     *  Removes a tag from the specified flow.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     *  Updates a given connector profile associated with your account.
     */
    updateConnectorProfile(req: operations.UpdateConnectorProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorProfileResponse>;
    /**
     * <p>Updates a custom connector that you've previously registered. This operation updates the connector with one of the following:</p> <ul> <li> <p>The latest version of the AWS Lambda function that's assigned to the connector</p> </li> <li> <p>A new AWS Lambda function that you specify</p> </li> </ul>
     */
    updateConnectorRegistration(req: operations.UpdateConnectorRegistrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorRegistrationResponse>;
    /**
     *  Updates an existing flow.
     */
    updateFlow(req: operations.UpdateFlowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFlowResponse>;
}
