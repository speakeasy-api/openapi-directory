import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ssm-incidents.{region}.amazonaws.com", "https://ssm-incidents.{region}.amazonaws.com", "http://ssm-incidents.{region}.amazonaws.com.cn", "https://ssm-incidents.{region}.amazonaws.com.cn"];
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
 * <p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services. </p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation. </p>
 *
 * @see {@link https://docs.aws.amazon.com/ssm-incidents/} - Amazon Web Services documentation
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
     * A replication set replicates and encrypts your data to the provided Regions with the provided KMS key.
     */
    createReplicationSet(req: operations.CreateReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationSetResponse>;
    /**
     * Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
     */
    createResponsePlan(req: operations.CreateResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.CreateResponsePlanResponse>;
    /**
     * Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
     */
    createTimelineEvent(req: operations.CreateTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.CreateTimelineEventResponse>;
    /**
     * Delete an incident record from Incident Manager.
     */
    deleteIncidentRecord(req: operations.DeleteIncidentRecordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIncidentRecordResponse>;
    /**
     * Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
     */
    deleteReplicationSet(req: operations.DeleteReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationSetResponse>;
    /**
     * Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
     */
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
     */
    deleteResponsePlan(req: operations.DeleteResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResponsePlanResponse>;
    /**
     * Deletes a timeline event from an incident.
     */
    deleteTimelineEvent(req: operations.DeleteTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTimelineEventResponse>;
    /**
     * Returns the details for the specified incident record.
     */
    getIncidentRecord(req: operations.GetIncidentRecordRequest, config?: AxiosRequestConfig): Promise<operations.GetIncidentRecordResponse>;
    /**
     * Retrieve your Incident Manager replication set.
     */
    getReplicationSet(req: operations.GetReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.GetReplicationSetResponse>;
    /**
     * Retrieves the resource policies attached to the specified response plan.
     */
    getResourcePolicies(req: operations.GetResourcePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePoliciesResponse>;
    /**
     * Retrieves the details of the specified response plan.
     */
    getResponsePlan(req: operations.GetResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.GetResponsePlanResponse>;
    /**
     * Retrieves a timeline event based on its ID and incident record.
     */
    getTimelineEvent(req: operations.GetTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.GetTimelineEventResponse>;
    /**
     * Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update.
     */
    listIncidentRecords(req: operations.ListIncidentRecordsRequest, config?: AxiosRequestConfig): Promise<operations.ListIncidentRecordsResponse>;
    /**
     * List all related items for an incident record.
     */
    listRelatedItems(req: operations.ListRelatedItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListRelatedItemsResponse>;
    /**
     * Lists details about the replication set configured in your account.
     */
    listReplicationSets(req: operations.ListReplicationSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListReplicationSetsResponse>;
    /**
     * Lists all response plans in your account.
     */
    listResponsePlans(req: operations.ListResponsePlansRequest, config?: AxiosRequestConfig): Promise<operations.ListResponsePlansResponse>;
    /**
     * Lists the tags that are attached to the specified response plan.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists timeline events for the specified incident record.
     */
    listTimelineEvents(req: operations.ListTimelineEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListTimelineEventsResponse>;
    /**
     * Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
     */
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * Used to start an incident from CloudWatch alarms, EventBridge events, or manually.
     */
    startIncident(req: operations.StartIncidentRequest, config?: AxiosRequestConfig): Promise<operations.StartIncidentResponse>;
    /**
     * Adds a tag to a response plan.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes a tag from a resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Update deletion protection to either allow or deny deletion of the final Region in a replication set.
     */
    updateDeletionProtection(req: operations.UpdateDeletionProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeletionProtectionResponse>;
    /**
     * Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
     */
    updateIncidentRecord(req: operations.UpdateIncidentRecordRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIncidentRecordResponse>;
    /**
     * Add or remove related items from the related items tab of an incident record.
     */
    updateRelatedItems(req: operations.UpdateRelatedItemsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRelatedItemsResponse>;
    /**
     * Add or delete Regions from your replication set.
     */
    updateReplicationSet(req: operations.UpdateReplicationSetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateReplicationSetResponse>;
    /**
     * Updates the specified response plan.
     */
    updateResponsePlan(req: operations.UpdateResponsePlanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResponsePlanResponse>;
    /**
     * Updates a timeline event. You can update events of type <code>Custom Event</code>.
     */
    updateTimelineEvent(req: operations.UpdateTimelineEventRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTimelineEventResponse>;
}
