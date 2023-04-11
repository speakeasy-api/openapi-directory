import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://app-integrations.{region}.amazonaws.com", "https://app-integrations.{region}.amazonaws.com", "http://app-integrations.{region}.amazonaws.com.cn", "https://app-integrations.{region}.amazonaws.com.cn"];
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
 * <p>The Amazon AppIntegrations service enables you to configure and reuse connections to external applications.</p> <p>For information about how you can use external applications with Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built integrations</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-wisdom.html">Deliver information to agents using Amazon Connect Wisdom</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/app-integrations/} - Amazon Web Services documentation
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
     * <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
     */
    createDataIntegration(req: operations.CreateDataIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataIntegrationResponse>;
    /**
     * Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
     */
    createEventIntegration(req: operations.CreateEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventIntegrationResponse>;
    /**
     * <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
     */
    deleteDataIntegration(req: operations.DeleteDataIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataIntegrationResponse>;
    /**
     * Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
     */
    deleteEventIntegration(req: operations.DeleteEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventIntegrationResponse>;
    /**
     * <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
     */
    getDataIntegration(req: operations.GetDataIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetDataIntegrationResponse>;
    /**
     * Returns information about the event integration.
     */
    getEventIntegration(req: operations.GetEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetEventIntegrationResponse>;
    /**
     * <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
     */
    listDataIntegrationAssociations(req: operations.ListDataIntegrationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataIntegrationAssociationsResponse>;
    /**
     * <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
     */
    listDataIntegrations(req: operations.ListDataIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDataIntegrationsResponse>;
    /**
     * Returns a paginated list of event integration associations in the account.
     */
    listEventIntegrationAssociations(req: operations.ListEventIntegrationAssociationsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventIntegrationAssociationsResponse>;
    /**
     * Returns a paginated list of event integrations in the account.
     */
    listEventIntegrations(req: operations.ListEventIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventIntegrationsResponse>;
    /**
     * Lists the tags for the specified resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds the specified tags to the specified resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the specified tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
     */
    updateDataIntegration(req: operations.UpdateDataIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataIntegrationResponse>;
    /**
     * Updates the description of an event integration.
     */
    updateEventIntegration(req: operations.UpdateEventIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventIntegrationResponse>;
}
