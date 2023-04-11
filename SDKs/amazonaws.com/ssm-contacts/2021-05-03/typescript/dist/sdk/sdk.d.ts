import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://ssm-contacts.{region}.amazonaws.com", "https://ssm-contacts.{region}.amazonaws.com", "http://ssm-contacts.{region}.amazonaws.com.cn", "https://ssm-contacts.{region}.amazonaws.com.cn"];
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
 * <p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services.</p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation.</p>
 *
 * @see {@link https://docs.aws.amazon.com/ssm-contacts/} - Amazon Web Services documentation
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
     * Used to acknowledge an engagement to a contact channel during an incident.
     */
    acceptPage(req: operations.AcceptPageRequest, config?: AxiosRequestConfig): Promise<operations.AcceptPageResponse>;
    /**
     * Activates a contact's contact channel. Incident Manager can't engage a contact until the contact channel has been activated.
     */
    activateContactChannel(req: operations.ActivateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.ActivateContactChannelResponse>;
    /**
     * Contacts are either the contacts that Incident Manager engages during an incident or the escalation plans that Incident Manager uses to engage contacts in phases during an incident.
     */
    createContact(req: operations.CreateContactRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactResponse>;
    /**
     * A contact channel is the method that Incident Manager uses to engage your contact.
     */
    createContactChannel(req: operations.CreateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactChannelResponse>;
    /**
     * Creates a rotation in an on-call schedule.
     */
    createRotation(req: operations.CreateRotationRequest, config?: AxiosRequestConfig): Promise<operations.CreateRotationResponse>;
    /**
     * Creates an override for a rotation in an on-call schedule.
     */
    createRotationOverride(req: operations.CreateRotationOverrideRequest, config?: AxiosRequestConfig): Promise<operations.CreateRotationOverrideResponse>;
    /**
     * To no longer receive Incident Manager engagements to a contact channel, you can deactivate the channel.
     */
    deactivateContactChannel(req: operations.DeactivateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeactivateContactChannelResponse>;
    /**
     * To remove a contact from Incident Manager, you can delete the contact. Deleting a contact removes them from all escalation plans and related response plans. Deleting an escalation plan removes it from all related response plans. You will have to recreate the contact and its contact channels before you can use it again.
     */
    deleteContact(req: operations.DeleteContactRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContactResponse>;
    /**
     * To no longer receive engagements on a contact channel, you can delete the channel from a contact. Deleting the contact channel removes it from the contact's engagement plan. If you delete the only contact channel for a contact, you won't be able to engage that contact during an incident.
     */
    deleteContactChannel(req: operations.DeleteContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContactChannelResponse>;
    /**
     * Deletes a rotation from the system. If a rotation belongs to more than one on-call schedule, this operation deletes it from all of them.
     */
    deleteRotation(req: operations.DeleteRotationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRotationResponse>;
    /**
     * Deletes an existing override for an on-call rotation.
     */
    deleteRotationOverride(req: operations.DeleteRotationOverrideRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRotationOverrideResponse>;
    /**
     * Incident Manager uses engagements to engage contacts and escalation plans during an incident. Use this command to describe the engagement that occurred during an incident.
     */
    describeEngagement(req: operations.DescribeEngagementRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEngagementResponse>;
    /**
     * Lists details of the engagement to a contact channel.
     */
    describePage(req: operations.DescribePageRequest, config?: AxiosRequestConfig): Promise<operations.DescribePageResponse>;
    /**
     * Retrieves information about the specified contact or escalation plan.
     */
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * List details about a specific contact channel.
     */
    getContactChannel(req: operations.GetContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetContactChannelResponse>;
    /**
     * Retrieves the resource policies attached to the specified contact or escalation plan.
     */
    getContactPolicy(req: operations.GetContactPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetContactPolicyResponse>;
    /**
     * Retrieves information about an on-call rotation.
     */
    getRotation(req: operations.GetRotationRequest, config?: AxiosRequestConfig): Promise<operations.GetRotationResponse>;
    /**
     * Retrieves information about an override to an on-call rotation.
     */
    getRotationOverride(req: operations.GetRotationOverrideRequest, config?: AxiosRequestConfig): Promise<operations.GetRotationOverrideResponse>;
    /**
     * Lists all contact channels for the specified contact.
     */
    listContactChannels(req: operations.ListContactChannelsRequest, config?: AxiosRequestConfig): Promise<operations.ListContactChannelsResponse>;
    /**
     * Lists all contacts and escalation plans in Incident Manager.
     */
    listContacts(req: operations.ListContactsRequest, config?: AxiosRequestConfig): Promise<operations.ListContactsResponse>;
    /**
     * Lists all engagements that have happened in an incident.
     */
    listEngagements(req: operations.ListEngagementsRequest, config?: AxiosRequestConfig): Promise<operations.ListEngagementsResponse>;
    /**
     * Lists all of the engagements to contact channels that have been acknowledged.
     */
    listPageReceipts(req: operations.ListPageReceiptsRequest, config?: AxiosRequestConfig): Promise<operations.ListPageReceiptsResponse>;
    /**
     * Returns the resolution path of an engagement. For example, the escalation plan engaged in an incident might target an on-call schedule that includes several contacts in a rotation, but just one contact on-call when the incident starts. The resolution path indicates the hierarchy of <i>escalation plan &gt; on-call schedule &gt; contact</i>.
     */
    listPageResolutions(req: operations.ListPageResolutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListPageResolutionsResponse>;
    /**
     * Lists the engagements to a contact's contact channels.
     */
    listPagesByContact(req: operations.ListPagesByContactRequest, config?: AxiosRequestConfig): Promise<operations.ListPagesByContactResponse>;
    /**
     * Lists the engagements to contact channels that occurred by engaging a contact.
     */
    listPagesByEngagement(req: operations.ListPagesByEngagementRequest, config?: AxiosRequestConfig): Promise<operations.ListPagesByEngagementResponse>;
    /**
     * <p>Returns a list of shifts based on rotation configuration parameters.</p> <note> <p>The Incident Manager primarily uses this operation to populate the <b>Preview</b> calendar. It is not typically run by end users.</p> </note>
     */
    listPreviewRotationShifts(req: operations.ListPreviewRotationShiftsRequest, config?: AxiosRequestConfig): Promise<operations.ListPreviewRotationShiftsResponse>;
    /**
     * Retrieves a list of overrides currently specified for an on-call rotation.
     */
    listRotationOverrides(req: operations.ListRotationOverridesRequest, config?: AxiosRequestConfig): Promise<operations.ListRotationOverridesResponse>;
    /**
     * Returns a list of shifts generated by an existing rotation in the system.
     */
    listRotationShifts(req: operations.ListRotationShiftsRequest, config?: AxiosRequestConfig): Promise<operations.ListRotationShiftsResponse>;
    /**
     * Retrieves a list of on-call rotations.
     */
    listRotations(req: operations.ListRotationsRequest, config?: AxiosRequestConfig): Promise<operations.ListRotationsResponse>;
    /**
     * Lists the tags of an escalation plan or contact.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds a resource policy to the specified contact or escalation plan. The resource policy is used to share the contact or escalation plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/xa.html">Setting up cross-account functionality</a>.
     */
    putContactPolicy(req: operations.PutContactPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutContactPolicyResponse>;
    /**
     * Sends an activation code to a contact channel. The contact can use this code to activate the contact channel in the console or with the <code>ActivateChannel</code> operation. Incident Manager can't engage a contact channel until it has been activated.
     */
    sendActivationCode(req: operations.SendActivationCodeRequest, config?: AxiosRequestConfig): Promise<operations.SendActivationCodeResponse>;
    /**
     * Starts an engagement to a contact or escalation plan. The engagement engages each contact specified in the incident.
     */
    startEngagement(req: operations.StartEngagementRequest, config?: AxiosRequestConfig): Promise<operations.StartEngagementResponse>;
    /**
     * Stops an engagement before it finishes the final stage of the escalation plan or engagement plan. Further contacts aren't engaged.
     */
    stopEngagement(req: operations.StopEngagementRequest, config?: AxiosRequestConfig): Promise<operations.StopEngagementResponse>;
    /**
     * Tags a contact or escalation plan. You can tag only contacts and escalation plans in the first region of your replication set.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from the specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates the contact or escalation plan specified.
     */
    updateContact(req: operations.UpdateContactRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactResponse>;
    /**
     * Updates a contact's contact channel.
     */
    updateContactChannel(req: operations.UpdateContactChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateContactChannelResponse>;
    /**
     * Updates the information specified for an on-call rotation.
     */
    updateRotation(req: operations.UpdateRotationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRotationResponse>;
}
