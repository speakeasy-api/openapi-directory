import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Texts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add batches to a text broadcast
     *
     * @remarks
     * Allows adding an extra batches to an already created text broadcast campaign. The batches which being  added pass the CallFire validation process (unlike in the recipients version of this API). That is why using of a scrubDuplicates flag remove duplicates from your batch. Batches may be added as a contact list id, a list of contact ids, or a list of numbers
     */
    addTextBroadcastBatch(req: operations.AddTextBroadcastBatchRequest, security: operations.AddTextBroadcastBatchSecurity, config?: AxiosRequestConfig): Promise<operations.AddTextBroadcastBatchResponse>;
    /**
     * Add recipients to a text broadcast
     *
     * @remarks
     * Use this API to add recipients to a text broadcast which is already created. Post a list of Recipient objects to be immediately added to the text broadcast campaign. These contacts will not go through validation process, and will be acted upon as they are added. Recipients may be added as a list of contact ids, or list of numbers
     */
    addTextBroadcastRecipients(req: operations.AddTextBroadcastRecipientsRequest, security: operations.AddTextBroadcastRecipientsSecurity, config?: AxiosRequestConfig): Promise<operations.AddTextBroadcastRecipientsResponse>;
    /**
     * Archive text broadcast
     *
     * @remarks
     * Archives a text broadcast (and hides it in the search results)
     */
    archiveTextBroadcast(req: operations.ArchiveTextBroadcastRequest, security: operations.ArchiveTextBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.ArchiveTextBroadcastResponse>;
    /**
     * Create an auto reply
     *
     * @remarks
     * CallFire gives you possibility to set up auto reply messages for your numbers and keywords. You can set a general auto reply for anyone who texts your number, keyword, and/or include a text to match, so that the auto reply would be sent only to those who text the matched text
     */
    createTextAutoReply(req: shared.TextAutoReply, security: operations.CreateTextAutoReplySecurity, config?: AxiosRequestConfig): Promise<operations.CreateTextAutoReplyResponse>;
    /**
     * Create a text broadcast
     *
     * @remarks
     * Creates a text broadcast campaign using the Text Broadcast API. Send a TextBroadcast object in the message body to detail a text broadcast campaign. A campaign can be created without contacts and with bare minimum configuration, but contacts have to be added further on to use the campaign. It supports scheduling, retry logic, pattern-based messages.
     */
    createTextBroadcast(req: operations.CreateTextBroadcastRequest, security: operations.CreateTextBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTextBroadcastResponse>;
    /**
     * Delete an auto reply
     *
     * @remarks
     * Deletes a text auto reply and removes the configuration. Can not delete a TextAutoReply which is currently active for a campaign
     */
    deleteTextAutoReply(req: operations.DeleteTextAutoReplyRequest, security: operations.DeleteTextAutoReplySecurity, config?: AxiosRequestConfig): Promise<operations.DeleteTextAutoReplyResponse>;
    /**
     * Find auto replies
     *
     * @remarks
     * Find all text autoreplies created by user. Returns a paged list of TextAutoReply
     */
    findTextAutoReplys(req: operations.FindTextAutoReplysRequest, security: operations.FindTextAutoReplysSecurity, config?: AxiosRequestConfig): Promise<operations.FindTextAutoReplysResponse>;
    /**
     * Find text broadcasts
     *
     * @remarks
     * Searches for all text broadcasts created by user. Can query on label, name, and the current running status of the campaign. Returns a paged list of text broadcasts
     */
    findTextBroadcasts(req: operations.FindTextBroadcastsRequest, security: operations.FindTextBroadcastsSecurity, config?: AxiosRequestConfig): Promise<operations.FindTextBroadcastsResponse>;
    /**
     * Find texts
     *
     * @remarks
     * Searches for texts sent or received by user. Use "campaignId=0" parameter to query for all texts sent through the POST /texts API. See [call states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    findTexts(req: operations.FindTextsRequest, security: operations.FindTextsSecurity, config?: AxiosRequestConfig): Promise<operations.FindTextsResponse>;
    /**
     * Find a specific text
     *
     * @remarks
     * Returns a single Text instance for a given text id
     */
    getText(req: operations.GetTextRequest, security: operations.GetTextSecurity, config?: AxiosRequestConfig): Promise<operations.GetTextResponse>;
    /**
     * Find a specific auto reply
     *
     * @remarks
     * Returns a single TextAutoReply instance for a given text auto reply id
     */
    getTextAutoReply(req: operations.GetTextAutoReplyRequest, security: operations.GetTextAutoReplySecurity, config?: AxiosRequestConfig): Promise<operations.GetTextAutoReplyResponse>;
    /**
     * Find a specific text broadcast
     *
     * @remarks
     * Returns a single TextBroadcast instance for a given text broadcast id
     */
    getTextBroadcast(req: operations.GetTextBroadcastRequest, security: operations.GetTextBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.GetTextBroadcastResponse>;
    /**
     * Find batches in a text broadcast
     *
     * @remarks
     * This endpoint will enable the user to page through all of the batches for a particular text broadcast campaign
     */
    getTextBroadcastBatches(req: operations.GetTextBroadcastBatchesRequest, security: operations.GetTextBroadcastBatchesSecurity, config?: AxiosRequestConfig): Promise<operations.GetTextBroadcastBatchesResponse>;
    /**
     * Get statistics on text broadcast
     *
     * @remarks
     * Returns the broadcast statistics. Example: total number of the sent/received actions, total cost, number of remaining outbound actions, error count, etc
     */
    getTextBroadcastStats(req: operations.GetTextBroadcastStatsRequest, security: operations.GetTextBroadcastStatsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTextBroadcastStatsResponse>;
    /**
     * Find texts in a text broadcast
     *
     * @remarks
     * This endpoint will enable the user to page through all of the texts for a particular text broadcast campaign
     */
    getTextBroadcastTexts(req: operations.GetTextBroadcastTextsRequest, security: operations.GetTextBroadcastTextsSecurity, config?: AxiosRequestConfig): Promise<operations.GetTextBroadcastTextsResponse>;
    /**
     * Send texts
     *
     * @remarks
     * Use the /texts API to send individual texts quickly. By default all texts are going out from CallFire's dedicated short code. Example: 67076, 818818 etc
     */
    sendTexts(req: operations.SendTextsRequest, security: operations.SendTextsSecurity, config?: AxiosRequestConfig): Promise<operations.SendTextsResponse>;
    /**
     * Start text broadcast
     *
     * @remarks
     * Starts a text broadcast
     */
    startTextBroadcast(req: operations.StartTextBroadcastRequest, security: operations.StartTextBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.StartTextBroadcastResponse>;
    /**
     * Stop text broadcast
     *
     * @remarks
     * Stops a text broadcast
     */
    stopTextBroadcast(req: operations.StopTextBroadcastRequest, security: operations.StopTextBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.StopTextBroadcastResponse>;
    /**
     * Disable/enable undialed recipients in broadcast
     *
     * @remarks
     * This operation lets the user to disable/enable undialed contacts in created broadcast
     */
    toggleTextBroadcastRecipientsStatus(req: operations.ToggleTextBroadcastRecipientsStatusRequest, security: operations.ToggleTextBroadcastRecipientsStatusSecurity, config?: AxiosRequestConfig): Promise<operations.ToggleTextBroadcastRecipientsStatusResponse>;
    /**
     * Update a text broadcast
     *
     * @remarks
     * Allows modifying the configuration of existing text broadcast campaign. See TextBroadcast for more information on what can/can't be updated on this API
     */
    updateTextBroadcast(req: operations.UpdateTextBroadcastRequest, security: operations.UpdateTextBroadcastSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateTextBroadcastResponse>;
}
