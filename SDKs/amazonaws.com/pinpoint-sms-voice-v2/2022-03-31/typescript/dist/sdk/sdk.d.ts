import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://sms-voice.{region}.amazonaws.com", "https://sms-voice.{region}.amazonaws.com", "http://sms-voice.{region}.amazonaws.com.cn", "https://sms-voice.{region}.amazonaws.com.cn"];
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
 * <p>Welcome to the <i>Amazon Pinpoint SMS and Voice, version 2 API Reference</i>. This guide provides information about Amazon Pinpoint SMS and Voice, version 2 API resources, including supported HTTP methods, parameters, and schemas.</p> <p>Amazon Pinpoint is an Amazon Web Services service that you can use to engage with your recipients across multiple messaging channels. The Amazon Pinpoint SMS and Voice, version 2 API provides programmatic access to options that are unique to the SMS and voice channels and supplements the resources provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, it's also helpful to review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html"> Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides key information, such as Amazon Pinpoint integration with other Amazon Web Services services, and the quotas that apply to use of the service.</p>
 *
 * @see {@link https://docs.aws.amazon.com/sms-voice/} - Amazon Web Services documentation
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
     * <p>Associates the specified origination identity with a pool.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p> <p>If the origination identity configuration doesn't match the pool's configuration, an Error is returned.</p>
     */
    associateOriginationIdentity(req: operations.AssociateOriginationIdentityRequest, config?: AxiosRequestConfig): Promise<operations.AssociateOriginationIdentityResponse>;
    /**
     * <p>Creates a new configuration set. After you create the configuration set, you can add one or more event destinations to it.</p> <p>A configuration set is a set of rules that you apply to the SMS and voice messages that you send.</p> <p>When you send a message, you can optionally specify a single configuration set.</p>
     */
    createConfigurationSet(req: operations.CreateConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetResponse>;
    /**
     * <p>Creates a new event destination in a configuration set.</p> <p>An event destination is a location where you send message events. The event options are Amazon CloudWatch, Amazon Kinesis Data Firehose, or Amazon SNS. For example, when a message is delivered successfully, you can send information about that event to an event destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p> <p>Each configuration set can contain between 0 and 5 event destinations. Each event destination can contain a reference to a single destination, such as a CloudWatch or Kinesis Data Firehose destination.</p>
     */
    createEventDestination(req: operations.CreateEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventDestinationResponse>;
    /**
     * <p>Creates a new opt-out list.</p> <p>If the opt-out list name already exists, an Error is returned.</p> <p>An opt-out list is a list of phone numbers that are opted out, meaning you can't send SMS or voice messages to them. If end user replies with the keyword "STOP," an entry for the phone number is added to the opt-out list. In addition to STOP, your recipients can use any supported opt-out keyword, such as CANCEL or OPTOUT. For a list of supported opt-out keywords, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-manage.html#channels-sms-manage-optout"> SMS opt out </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
     */
    createOptOutList(req: operations.CreateOptOutListRequest, config?: AxiosRequestConfig): Promise<operations.CreateOptOutListResponse>;
    /**
     * <p>Creates a new pool and associates the specified origination identity to the pool. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p> <p>The new pool inherits its configuration from the specified origination identity. This includes keywords, message type, opt-out list, two-way configuration, and self-managed opt-out configuration. Deletion protection isn't inherited from the origination identity and defaults to false.</p> <p>If the origination identity is a phone number and is already associated with another pool, an Error is returned. A sender ID can be associated with multiple pools.</p>
     */
    createPool(req: operations.CreatePoolRequest, config?: AxiosRequestConfig): Promise<operations.CreatePoolResponse>;
    /**
     * <p>Deletes an existing configuration set.</p> <p>A configuration set is a set of rules that you apply to voice and SMS messages that you send. In a configuration set, you can specify a destination for specific types of events related to voice and SMS messages. </p>
     */
    deleteConfigurationSet(req: operations.DeleteConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetResponse>;
    /**
     * <p>Deletes an existing default message type on a configuration set.</p> <p> A message type is a type of messages that you plan to send. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account. </p>
     */
    deleteDefaultMessageType(req: operations.DeleteDefaultMessageTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDefaultMessageTypeResponse>;
    /**
     * <p>Deletes an existing default sender ID on a configuration set.</p> <p>A default sender ID is the identity that appears on recipients' devices when they receive SMS messages. Support for sender ID capabilities varies by country or region.</p>
     */
    deleteDefaultSenderId(req: operations.DeleteDefaultSenderIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDefaultSenderIdResponse>;
    /**
     * <p>Deletes an existing event destination.</p> <p>An event destination is a location where you send response information about the messages that you send. For example, when a message is delivered successfully, you can send information about that event to an Amazon CloudWatch destination, or send notifications to endpoints that are subscribed to an Amazon SNS topic.</p>
     */
    deleteEventDestination(req: operations.DeleteEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventDestinationResponse>;
    /**
     * <p>Deletes an existing keyword from an origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>Keywords "HELP" and "STOP" can't be deleted or modified.</p>
     */
    deleteKeyword(req: operations.DeleteKeywordRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeywordResponse>;
    /**
     * <p>Deletes an existing opt-out list. All opted out phone numbers in the opt-out list are deleted.</p> <p>If the specified opt-out list name doesn't exist or is in-use by an origination phone number or pool, an Error is returned.</p>
     */
    deleteOptOutList(req: operations.DeleteOptOutListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOptOutListResponse>;
    /**
     * <p>Deletes an existing opted out destination phone number from the specified opt-out list.</p> <p>Each destination phone number can only be deleted once every 30 days.</p> <p>If the specified destination phone number doesn't exist or if the opt-out list doesn't exist, an Error is returned.</p>
     */
    deleteOptedOutNumber(req: operations.DeleteOptedOutNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOptedOutNumberResponse>;
    /**
     * <p>Deletes an existing pool. Deleting a pool disassociates all origination identities from that pool.</p> <p>If the pool status isn't active or if deletion protection is enabled, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
     */
    deletePool(req: operations.DeletePoolRequest, config?: AxiosRequestConfig): Promise<operations.DeletePoolResponse>;
    /**
     * Deletes an account-level monthly spending limit override for sending text messages. Deleting a spend limit override will set the <code>EnforcedLimit</code> to equal the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spend limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.
     */
    deleteTextMessageSpendLimitOverride(req: operations.DeleteTextMessageSpendLimitOverrideRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTextMessageSpendLimitOverrideResponse>;
    /**
     * Deletes an account level monthly spend limit override for sending voice messages. Deleting a spend limit override sets the <code>EnforcedLimit</code> equal to the <code>MaxLimit</code>, which is controlled by Amazon Web Services. For more information on spending limits (quotas) see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html">Amazon Pinpoint quotas</a> in the <i>Amazon Pinpoint Developer Guide</i>.
     */
    deleteVoiceMessageSpendLimitOverride(req: operations.DeleteVoiceMessageSpendLimitOverrideRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVoiceMessageSpendLimitOverrideResponse>;
    /**
     * <p>Describes attributes of your Amazon Web Services account. The supported account attributes include account tier, which indicates whether your account is in the sandbox or production environment. When you're ready to move your account out of the sandbox, create an Amazon Web Services Support case for a service limit increase request.</p> <p>New Amazon Pinpoint accounts are placed into an SMS or voice sandbox. The sandbox protects both Amazon Web Services end recipients and SMS or voice recipients from fraud and abuse. </p>
     */
    describeAccountAttributes(req: operations.DescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountAttributesResponse>;
    /**
     * <p>Describes the current Amazon Pinpoint SMS Voice V2 resource quotas for your account. The description for a quota includes the quota name, current usage toward that quota, and the quota's maximum value.</p> <p>When you establish an Amazon Web Services account, the account has initial quotas on the maximum number of configuration sets, opt-out lists, phone numbers, and pools that you can create in a given Region. For more information see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/quotas.html"> Amazon Pinpoint quotas </a> in the <i>Amazon Pinpoint Developer Guide</i>.</p>
     */
    describeAccountLimits(req: operations.DescribeAccountLimitsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountLimitsResponse>;
    /**
     * <p>Describes the specified configuration sets or all in your account.</p> <p>If you specify configuration set names, the output includes information for only the specified configuration sets. If you specify filters, the output includes information for only those configuration sets that meet the filter criteria. If you don't specify configuration set names or filters, the output includes information for all configuration sets.</p> <p>If you specify a configuration set name that isn't valid, an error is returned.</p>
     */
    describeConfigurationSets(req: operations.DescribeConfigurationSetsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigurationSetsResponse>;
    /**
     * <p>Describes the specified keywords or all keywords on your origination phone number or pool.</p> <p>A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
     */
    describeKeywords(req: operations.DescribeKeywordsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeKeywordsResponse>;
    /**
     * <p>Describes the specified opt-out list or all opt-out lists in your account.</p> <p>If you specify opt-out list names, the output includes information for only the specified opt-out lists. Opt-out lists include only those that meet the filter criteria. If you don't specify opt-out list names or filters, the output includes information for all opt-out lists.</p> <p>If you specify an opt-out list name that isn't valid, an Error is returned.</p>
     */
    describeOptOutLists(req: operations.DescribeOptOutListsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOptOutListsResponse>;
    /**
     * <p>Describes the specified opted out destination numbers or all opted out destination numbers in an opt-out list.</p> <p>If you specify opted out numbers, the output includes information for only the specified opted out numbers. If you specify filters, the output includes information for only those opted out numbers that meet the filter criteria. If you don't specify opted out numbers or filters, the output includes information for all opted out destination numbers in your opt-out list.</p> <p>If you specify an opted out number that isn't valid, an Error is returned.</p>
     */
    describeOptedOutNumbers(req: operations.DescribeOptedOutNumbersRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOptedOutNumbersResponse>;
    /**
     * <p>Describes the specified origination phone number, or all the phone numbers in your account.</p> <p>If you specify phone number IDs, the output includes information for only the specified phone numbers. If you specify filters, the output includes information for only those phone numbers that meet the filter criteria. If you don't specify phone number IDs or filters, the output includes information for all phone numbers.</p> <p>If you specify a phone number ID that isn't valid, an Error is returned.</p>
     */
    describePhoneNumbers(req: operations.DescribePhoneNumbersRequest, config?: AxiosRequestConfig): Promise<operations.DescribePhoneNumbersResponse>;
    /**
     * <p>Retrieves the specified pools or all pools associated with your Amazon Web Services account.</p> <p>If you specify pool IDs, the output includes information for only the specified pools. If you specify filters, the output includes information for only those pools that meet the filter criteria. If you don't specify pool IDs or filters, the output includes information for all pools.</p> <p>If you specify a pool ID that isn't valid, an Error is returned.</p> <p>A pool is a collection of phone numbers and SenderIds. A pool can include one or more phone numbers and SenderIds that are associated with your Amazon Web Services account.</p>
     */
    describePools(req: operations.DescribePoolsRequest, config?: AxiosRequestConfig): Promise<operations.DescribePoolsResponse>;
    /**
     * <p>Describes the specified SenderIds or all SenderIds associated with your Amazon Web Services account.</p> <p>If you specify SenderIds, the output includes information for only the specified SenderIds. If you specify filters, the output includes information for only those SenderIds that meet the filter criteria. If you don't specify SenderIds or filters, the output includes information for all SenderIds.</p> <p>f you specify a sender ID that isn't valid, an Error is returned.</p>
     */
    describeSenderIds(req: operations.DescribeSenderIdsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSenderIdsResponse>;
    /**
     * <p>Describes the current Amazon Pinpoint monthly spend limits for sending voice and text messages.</p> <p>When you establish an Amazon Web Services account, the account has initial monthly spend limit in a given Region. For more information on increasing your monthly spend limit, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-awssupport-spend-threshold.html"> Requesting increases to your monthly SMS spending quota for Amazon Pinpoint </a> in the <i>Amazon Pinpoint User Guide</i>.</p>
     */
    describeSpendLimits(req: operations.DescribeSpendLimitsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSpendLimitsResponse>;
    /**
     * <p>Removes the specified origination identity from an existing pool.</p> <p>If the origination identity isn't associated with the specified pool, an Error is returned.</p>
     */
    disassociateOriginationIdentity(req: operations.DisassociateOriginationIdentityRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateOriginationIdentityResponse>;
    /**
     * <p>Lists all associated origination identities in your pool.</p> <p>If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</p>
     */
    listPoolOriginationIdentities(req: operations.ListPoolOriginationIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListPoolOriginationIdentitiesResponse>;
    /**
     * List all tags associated with a resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Creates or updates a keyword configuration on an origination phone number or pool.</p> <p> A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, Amazon Pinpoint responds with a customizable message.</p> <p>If you specify a keyword that isn't valid, an Error is returned.</p>
     */
    putKeyword(req: operations.PutKeywordRequest, config?: AxiosRequestConfig): Promise<operations.PutKeywordResponse>;
    /**
     * <p>Creates an opted out destination phone number in the opt-out list.</p> <p>If the destination phone number isn't valid or if the specified opt-out list doesn't exist, an Error is returned.</p>
     */
    putOptedOutNumber(req: operations.PutOptedOutNumberRequest, config?: AxiosRequestConfig): Promise<operations.PutOptedOutNumberResponse>;
    /**
     * <p>Releases an existing origination phone number in your account. Once released, a phone number is no longer available for sending messages.</p> <p>If the origination phone number has deletion protection enabled or is associated with a pool, an Error is returned.</p>
     */
    releasePhoneNumber(req: operations.ReleasePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.ReleasePhoneNumberResponse>;
    /**
     * Request an origination phone number for use in your account. For more information on phone number request see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/settings-sms-request-number.html"> Requesting a number </a> in the <i>Amazon Pinpoint User Guide</i>.
     */
    requestPhoneNumber(req: operations.RequestPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.RequestPhoneNumberResponse>;
    /**
     * <p>Creates a new text message and sends it to a recipient's phone number.</p> <p>SMS throughput limits are measured in Message Parts per Second (MPS). Your MPS limit depends on the destination country of your messages, as well as the type of phone number (origination number) that you use to send the message. For more information, see <a href="https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-sms-limitations-mps.html">Message Parts per Second (MPS) limits</a> in the <i>Amazon Pinpoint User Guide</i>.</p>
     */
    sendTextMessage(req: operations.SendTextMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendTextMessageResponse>;
    /**
     * Allows you to send a request that sends a text message through Amazon Pinpoint. This operation uses <a href="http://aws.amazon.com/polly/">Amazon Polly</a> to convert a text script into a voice message.
     */
    sendVoiceMessage(req: operations.SendVoiceMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendVoiceMessageResponse>;
    /**
     * <p>Sets the default message type on a configuration set.</p> <p>Choose the category of SMS messages that you plan to send from this account. If you send account-related messages or time-sensitive messages such as one-time passcodes, choose <b>Transactional</b>. If you plan to send messages that contain marketing material or other promotional content, choose <b>Promotional</b>. This setting applies to your entire Amazon Web Services account.</p>
     */
    setDefaultMessageType(req: operations.SetDefaultMessageTypeRequest, config?: AxiosRequestConfig): Promise<operations.SetDefaultMessageTypeResponse>;
    /**
     * <p>Sets default sender ID on a configuration set.</p> <p>When sending a text message to a destination country that supports sender IDs, the default sender ID on the configuration set specified will be used if no dedicated origination phone numbers or registered sender IDs are available in your account.</p>
     */
    setDefaultSenderId(req: operations.SetDefaultSenderIdRequest, config?: AxiosRequestConfig): Promise<operations.SetDefaultSenderIdResponse>;
    /**
     * Sets an account level monthly spend limit override for sending text messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services.
     */
    setTextMessageSpendLimitOverride(req: operations.SetTextMessageSpendLimitOverrideRequest, config?: AxiosRequestConfig): Promise<operations.SetTextMessageSpendLimitOverrideResponse>;
    /**
     * Sets an account level monthly spend limit override for sending voice messages. The requested spend limit must be less than or equal to the <code>MaxLimit</code>, which is set by Amazon Web Services.
     */
    setVoiceMessageSpendLimitOverride(req: operations.SetVoiceMessageSpendLimitOverrideRequest, config?: AxiosRequestConfig): Promise<operations.SetVoiceMessageSpendLimitOverrideResponse>;
    /**
     * Adds or overwrites only the specified tags for the specified Amazon Pinpoint SMS Voice, version 2 resource. When you specify an existing tag key, the value is overwritten with the new value. Each resource can have a maximum of 50 tags. Each tag consists of a key and an optional value. Tag keys must be unique per resource. For more information about tags, see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes the association of the specified tags from an Amazon Pinpoint SMS Voice V2 resource. For more information on tags see <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/tagging-resources.html"> Tagging Amazon Pinpoint resources</a> in the <i>Amazon Pinpoint Developer Guide</i>.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Updates an existing event destination in a configuration set. You can update the IAM role ARN for CloudWatch Logs and Kinesis Data Firehose. You can also enable or disable the event destination.</p> <p>You may want to update an event destination to change its matching event types or updating the destination resource ARN. You can't change an event destination's type between CloudWatch Logs, Kinesis Data Firehose, and Amazon SNS.</p>
     */
    updateEventDestination(req: operations.UpdateEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEventDestinationResponse>;
    /**
     * <p>Updates the configuration of an existing origination phone number. You can update the opt-out list, enable or disable two-way messaging, change the TwoWayChannelArn, enable or disable self-managed opt-outs, and enable or disable deletion protection.</p> <p>If the origination phone number is associated with a pool, an Error is returned.</p>
     */
    updatePhoneNumber(req: operations.UpdatePhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePhoneNumberResponse>;
    /**
     * Updates the configuration of an existing pool. You can update the opt-out list, enable or disable two-way messaging, change the <code>TwoWayChannelArn</code>, enable or disable self-managed opt-outs, enable or disable deletion protection, and enable or disable shared routes.
     */
    updatePool(req: operations.UpdatePoolRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePoolResponse>;
}
