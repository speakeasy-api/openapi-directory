import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Calls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add batches to a call broadcast
     *
     * @remarks
     * The 'add batch' API allows user to add additional batches to an already created voice broadcast campaign. The added batch will go through the CallFire validation process, unlike in the recipients version of this API. That is why you can use the scrubDuplicates flag to remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers
     */
    addCallBroadcastBatch(req: operations.AddCallBroadcastBatchRequest, security: operations.AddCallBroadcastBatchSecurity, config?: AxiosRequestConfig): Promise<operations.AddCallBroadcastBatchResponse>;
    /**
     * Add recipients to a call broadcast
     *
     * @remarks
     * Use this API to add the recipients to an existing voice broadcast. Post a list of Recipient objects to be added to the voice broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers
     */
    addCallBroadcastRecipients(req: operations.AddCallBroadcastRecipientsRequest, security: operations.AddCallBroadcastRecipientsSecurity, config?: AxiosRequestConfig): Promise<operations.AddCallBroadcastRecipientsResponse>;
    /**
     * Archive voice broadcast
     *
     * @remarks
     * Archives a voice broadcast (voice broadcast will be hidden in search results)
     */
    archiveVoiceBroadcast(req: operations.ArchiveVoiceBroadcastRequest, security: operations.ArchiveVoiceBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.ArchiveVoiceBroadcastResponse>;
    /**
     * Create a call broadcast
     *
     * @remarks
     * Creates a call broadcast campaign using the Call Broadcast API. Send a CallBroadcast in the message body to add details in a voice broadcast campaign. The campaign can be created without contacts and bare minimum configuration, but contacts will have to be added further on to use the campaign
     */
    createCallBroadcast(req: operations.CreateCallBroadcastRequest, security: operations.CreateCallBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCallBroadcastResponse>;
    /**
     * Find call broadcasts
     *
     * @remarks
     * Searches for all voice broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of voice broadcasts
     */
    findCallBroadcasts(req: operations.FindCallBroadcastsRequest, security: operations.FindCallBroadcastsSecurity, config?: AxiosRequestConfig): Promise<operations.FindCallBroadcastsResponse>;
    /**
     * Find calls
     *
     * @remarks
     * To search for all calls sent or received by the user. Use "id=0" for the campaignId parameter to query for all calls sent through the POST /calls API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    findCalls(req: operations.FindCallsRequest, security: operations.FindCallsSecurity, config?: AxiosRequestConfig): Promise<operations.FindCallsResponse>;
    /**
     * Find a specific call
     *
     * @remarks
     * Returns a single Call instance for a given call id.
     */
    getCall(req: operations.GetCallRequest, security: operations.GetCallSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallResponse>;
    /**
     * Find a specific call broadcast
     *
     * @remarks
     * Returns a single CallBroadcast instance for a given call broadcast campaign id
     */
    getCallBroadcast(req: operations.GetCallBroadcastRequest, security: operations.GetCallBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallBroadcastResponse>;
    /**
     * Find batches in a call broadcast
     *
     * @remarks
     * This endpoint will enable the user to page through all of the batches for a particular voice broadcast campaign
     */
    getCallBroadcastBatches(req: operations.GetCallBroadcastBatchesRequest, security: operations.GetCallBroadcastBatchesSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallBroadcastBatchesResponse>;
    /**
     * Find calls in a call broadcast
     *
     * @remarks
     * This endpoint will enable the user to page through all calls for a particular call broadcast campaign
     */
    getCallBroadcastCalls(req: operations.GetCallBroadcastCallsRequest, security: operations.GetCallBroadcastCallsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallBroadcastCallsResponse>;
    /**
     * Get statistics on call broadcast
     *
     * @remarks
     * Returns broadcast statistics like total number of sent/received actions, total cost, number of remaining outbound actions, error count, etc
     */
    getCallBroadcastStats(req: operations.GetCallBroadcastStatsRequest, security: operations.GetCallBroadcastStatsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallBroadcastStatsResponse>;
    /**
     * Get call recording by id
     *
     * @remarks
     * Returns metadata of recording of a particular call. Metadata contains a link to a MP3 recording
     */
    getCallRecording(req: operations.GetCallRecordingRequest, security: operations.GetCallRecordingSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallRecordingResponse>;
    /**
     * Get call recording by name
     *
     * @remarks
     * Returns recording metadata of particular call. Metadata contains link to a MP3 recording
     */
    getCallRecordingByName(req: operations.GetCallRecordingByNameRequest, security: operations.GetCallRecordingByNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallRecordingByNameResponse>;
    /**
     * Get call recording in mp3 format
     *
     * @remarks
     * Returns an MP3 recording of particular call, response contains binary data, content type is 'audio/mpeg'
     */
    getCallRecordingMp3(req: operations.GetCallRecordingMp3Request, security: operations.GetCallRecordingMp3Security, config?: AxiosRequestConfig): Promise<operations.GetCallRecordingMp3Response>;
    /**
     * Get call mp3 recording by name
     *
     * @remarks
     * Returns a MP3 recording of a particular call, response contains binary data, content type is 'audio/mpeg'
     */
    getCallRecordingMp3ByName(req: operations.GetCallRecordingMp3ByNameRequest, security: operations.GetCallRecordingMp3ByNameSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallRecordingMp3ByNameResponse>;
    /**
     * Get call recordings for a call
     *
     * @remarks
     * Returns a list of recordings metadata of particular call. Metadata contains link to a MP3 recording
     */
    getCallRecordings(req: operations.GetCallRecordingsRequest, security: operations.GetCallRecordingsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallRecordingsResponse>;
    /**
     * Send calls
     *
     * @remarks
     * Use the /calls API to send individual calls quickly. A verified Caller ID and sufficient credits are required to make a call. CallRecipient represents a single recipient identified by phone number or contact id in CallFire system. You can attach user-defined attributes to a Call action via CallRecipient.attributes property, attributes are available in Call action response
     */
    sendCalls(req: operations.SendCallsRequest, security: operations.SendCallsSecurity, config?: AxiosRequestConfig): Promise<operations.SendCallsResponse>;
    /**
     * Start voice broadcast
     *
     * @remarks
     * Start a voice broadcast
     */
    startVoiceBroadcast(req: operations.StartVoiceBroadcastRequest, security: operations.StartVoiceBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.StartVoiceBroadcastResponse>;
    /**
     * Stop voice broadcast
     *
     * @remarks
     * Stop a voice broadcast
     */
    stopVoiceBroadcast(req: operations.StopVoiceBroadcastRequest, security: operations.StopVoiceBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.StopVoiceBroadcastResponse>;
    /**
     * Disable/enable undialed recipients in broadcast
     *
     * @remarks
     * This operation lets the user to disable/enable undialed recipients in created broadcast
     */
    toggleCallBroadcastRecipientsStatus(req: operations.ToggleCallBroadcastRecipientsStatusRequest, security: operations.ToggleCallBroadcastRecipientsStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ToggleCallBroadcastRecipientsStatusResponse>;
    /**
     * Update a call broadcast
     *
     * @remarks
     * This operation lets the user modify the configuration of a voice broadcast campaign after call broadcast campaign is created. See CallBroadcast for more information on what can/can't be updated on this API
     */
    updateCallBroadcast(req: operations.UpdateCallBroadcastRequest, security: operations.UpdateCallBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCallBroadcastResponse>;
}
