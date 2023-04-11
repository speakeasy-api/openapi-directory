import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://email.{region}.amazonaws.com", "https://email.{region}.amazonaws.com", "http://email.{region}.amazonaws.com.cn", "https://email.{region}.amazonaws.com.cn"];
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
 * <fullname>Amazon Pinpoint Email Service</fullname> <p>Welcome to the <i>Amazon Pinpoint Email API Reference</i>. This guide provides information about the Amazon Pinpoint Email API (version 1.0), including supported operations, data types, parameters, and schemas.</p> <p> <a href="https://aws.amazon.com/pinpoint">Amazon Pinpoint</a> is an AWS service that you can use to engage with your customers across multiple messaging channels. You can use Amazon Pinpoint to send email, SMS text messages, voice messages, and push notifications. The Amazon Pinpoint Email API provides programmatic access to options that are unique to the email channel and supplement the options provided by the Amazon Pinpoint API.</p> <p>If you're new to Amazon Pinpoint, you might find it helpful to also review the <a href="https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html">Amazon Pinpoint Developer Guide</a>. The <i>Amazon Pinpoint Developer Guide</i> provides tutorials, code samples, and procedures that demonstrate how to use Amazon Pinpoint features programmatically and how to integrate Amazon Pinpoint functionality into mobile apps and other types of applications. The guide also provides information about key topics such as Amazon Pinpoint integration with other AWS services and the limits that apply to using the service.</p> <p>The Amazon Pinpoint Email API is available in several AWS Regions and it provides an endpoint for each of these Regions. For a list of all the Regions and endpoints where the API is currently available, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#pinpoint_region">AWS Service Endpoints</a> in the <i>Amazon Web Services General Reference</i>. To learn more about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande-manage.html">Managing AWS Regions</a> in the <i>Amazon Web Services General Reference</i>.</p> <p>In each Region, AWS maintains multiple Availability Zones. These Availability Zones are physically isolated from each other, but are united by private, low-latency, high-throughput, and highly redundant network connections. These Availability Zones enable us to provide very high levels of availability and redundancy, while also minimizing latency. To learn more about the number of Availability Zones that are available in each Region, see <a href="http://aws.amazon.com/about-aws/global-infrastructure/">AWS Global Infrastructure</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/email/} - Amazon Web Services documentation
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
     * Create a configuration set. <i>Configuration sets</i> are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
     */
    createConfigurationSet(req: operations.CreateConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetResponse>;
    /**
     * <p>Create an event destination. In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p> <p>A single configuration set can include more than one event destination.</p>
     */
    createConfigurationSetEventDestination(req: operations.CreateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetEventDestinationResponse>;
    /**
     * Create a new pool of dedicated IP addresses. A pool can include one or more dedicated IP addresses that are associated with your Amazon Pinpoint account. You can associate a pool with a configuration set. When you send an email that uses that configuration set, Amazon Pinpoint sends it using only the IP addresses in the associated pool.
     */
    createDedicatedIpPool(req: operations.CreateDedicatedIpPoolRequest, config?: AxiosRequestConfig): Promise<operations.CreateDedicatedIpPoolResponse>;
    /**
     * Create a new predictive inbox placement test. Predictive inbox placement tests can help you predict how your messages will be handled by various email providers around the world. When you perform a predictive inbox placement test, you provide a sample message that contains the content that you plan to send to your customers. Amazon Pinpoint then sends that message to special email addresses spread across several major email providers. After about 24 hours, the test is complete, and you can use the <code>GetDeliverabilityTestReport</code> operation to view the results of the test.
     */
    createDeliverabilityTestReport(req: operations.CreateDeliverabilityTestReportRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeliverabilityTestReportResponse>;
    /**
     * <p>Verifies an email identity for use with Amazon Pinpoint. In Amazon Pinpoint, an identity is an email address or domain that you use when you send email. Before you can use an identity to send email with Amazon Pinpoint, you first have to verify it. By verifying an address, you demonstrate that you're the owner of the address, and that you've given Amazon Pinpoint permission to send email from the address.</p> <p>When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. </p> <p>When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.</p>
     */
    createEmailIdentity(req: operations.CreateEmailIdentityRequest, config?: AxiosRequestConfig): Promise<operations.CreateEmailIdentityResponse>;
    /**
     * <p>Delete an existing configuration set.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    deleteConfigurationSet(req: operations.DeleteConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetResponse>;
    /**
     * <p>Delete an event destination.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
     */
    deleteConfigurationSetEventDestination(req: operations.DeleteConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetEventDestinationResponse>;
    /**
     * Delete a dedicated IP pool.
     */
    deleteDedicatedIpPool(req: operations.DeleteDedicatedIpPoolRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDedicatedIpPoolResponse>;
    /**
     * Deletes an email identity that you previously verified for use with Amazon Pinpoint. An identity can be either an email address or a domain name.
     */
    deleteEmailIdentity(req: operations.DeleteEmailIdentityRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEmailIdentityResponse>;
    /**
     * Obtain information about the email-sending status and capabilities of your Amazon Pinpoint account in the current AWS Region.
     */
    getAccount(req: operations.GetAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountResponse>;
    /**
     * Retrieve a list of the blacklists that your dedicated IP addresses appear on.
     */
    getBlacklistReports(req: operations.GetBlacklistReportsRequest, config?: AxiosRequestConfig): Promise<operations.GetBlacklistReportsResponse>;
    /**
     * <p>Get information about an existing configuration set, including the dedicated IP pool that it's associated with, whether or not it's enabled for sending email, and more.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    getConfigurationSet(req: operations.GetConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationSetResponse>;
    /**
     * <p>Retrieve a list of event destinations that are associated with a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
     */
    getConfigurationSetEventDestinations(req: operations.GetConfigurationSetEventDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationSetEventDestinationsResponse>;
    /**
     * Get information about a dedicated IP address, including the name of the dedicated IP pool that it's associated with, as well information about the automatic warm-up process for the address.
     */
    getDedicatedIp(req: operations.GetDedicatedIpRequest, config?: AxiosRequestConfig): Promise<operations.GetDedicatedIpResponse>;
    /**
     * List the dedicated IP addresses that are associated with your Amazon Pinpoint account.
     */
    getDedicatedIps(req: operations.GetDedicatedIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetDedicatedIpsResponse>;
    /**
     * <p>Retrieve information about the status of the Deliverability dashboard for your Amazon Pinpoint account. When the Deliverability dashboard is enabled, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
     */
    getDeliverabilityDashboardOptions(req: operations.GetDeliverabilityDashboardOptionsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeliverabilityDashboardOptionsResponse>;
    /**
     * Retrieve the results of a predictive inbox placement test.
     */
    getDeliverabilityTestReport(req: operations.GetDeliverabilityTestReportRequest, config?: AxiosRequestConfig): Promise<operations.GetDeliverabilityTestReportResponse>;
    /**
     * Retrieve all the deliverability data for a specific campaign. This data is available for a campaign only if the campaign sent email by using a domain that the Deliverability dashboard is enabled for (<code>PutDeliverabilityDashboardOption</code> operation).
     */
    getDomainDeliverabilityCampaign(req: operations.GetDomainDeliverabilityCampaignRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainDeliverabilityCampaignResponse>;
    /**
     * Retrieve inbox placement and engagement rates for the domains that you use to send email.
     */
    getDomainStatisticsReport(req: operations.GetDomainStatisticsReportRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainStatisticsReportResponse>;
    /**
     * Provides information about a specific identity associated with your Amazon Pinpoint account, including the identity's verification status, its DKIM authentication status, and its custom Mail-From settings.
     */
    getEmailIdentity(req: operations.GetEmailIdentityRequest, config?: AxiosRequestConfig): Promise<operations.GetEmailIdentityResponse>;
    /**
     * <p>List all of the configuration sets associated with your Amazon Pinpoint account in the current region.</p> <p>In Amazon Pinpoint, <i>configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    listConfigurationSets(req: operations.ListConfigurationSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationSetsResponse>;
    /**
     * List all of the dedicated IP pools that exist in your Amazon Pinpoint account in the current AWS Region.
     */
    listDedicatedIpPools(req: operations.ListDedicatedIpPoolsRequest, config?: AxiosRequestConfig): Promise<operations.ListDedicatedIpPoolsResponse>;
    /**
     * Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code> operation to view the results.
     */
    listDeliverabilityTestReports(req: operations.ListDeliverabilityTestReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeliverabilityTestReportsResponse>;
    /**
     * Retrieve deliverability data for all the campaigns that used a specific domain to send email during a specified time range. This data is available for a domain only if you enabled the Deliverability dashboard (<code>PutDeliverabilityDashboardOption</code> operation) for the domain.
     */
    listDomainDeliverabilityCampaigns(req: operations.ListDomainDeliverabilityCampaignsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainDeliverabilityCampaignsResponse>;
    /**
     * Returns a list of all of the email identities that are associated with your Amazon Pinpoint account. An identity can be either an email address or a domain. This operation returns identities that are verified as well as those that aren't.
     */
    listEmailIdentities(req: operations.ListEmailIdentitiesRequest, config?: AxiosRequestConfig): Promise<operations.ListEmailIdentitiesResponse>;
    /**
     * Retrieve a list of the tags (keys and values) that are associated with a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Enable or disable the automatic warm-up feature for dedicated IP addresses.
     */
    putAccountDedicatedIpWarmupAttributes(req: operations.PutAccountDedicatedIpWarmupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountDedicatedIpWarmupAttributesResponse>;
    /**
     * Enable or disable the ability of your account to send email.
     */
    putAccountSendingAttributes(req: operations.PutAccountSendingAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountSendingAttributesResponse>;
    /**
     * Associate a configuration set with a dedicated IP pool. You can use dedicated IP pools to create groups of dedicated IP addresses for sending specific types of email.
     */
    putConfigurationSetDeliveryOptions(req: operations.PutConfigurationSetDeliveryOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetDeliveryOptionsResponse>;
    /**
     * Enable or disable collection of reputation metrics for emails that you send using a particular configuration set in a specific AWS Region.
     */
    putConfigurationSetReputationOptions(req: operations.PutConfigurationSetReputationOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetReputationOptionsResponse>;
    /**
     * Enable or disable email sending for messages that use a particular configuration set in a specific AWS Region.
     */
    putConfigurationSetSendingOptions(req: operations.PutConfigurationSetSendingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetSendingOptionsResponse>;
    /**
     * Specify a custom domain to use for open and click tracking elements in email that you send using Amazon Pinpoint.
     */
    putConfigurationSetTrackingOptions(req: operations.PutConfigurationSetTrackingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationSetTrackingOptionsResponse>;
    /**
     * <p>Move a dedicated IP address to an existing dedicated IP pool.</p> <note> <p>The dedicated IP address that you specify must already exist, and must be associated with your Amazon Pinpoint account. </p> <p>The dedicated IP pool you specify must already exist. You can create a new pool by using the <code>CreateDedicatedIpPool</code> operation.</p> </note>
     */
    putDedicatedIpInPool(req: operations.PutDedicatedIpInPoolRequest, config?: AxiosRequestConfig): Promise<operations.PutDedicatedIpInPoolResponse>;
    /**
     * <p/>
     */
    putDedicatedIpWarmupAttributes(req: operations.PutDedicatedIpWarmupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutDedicatedIpWarmupAttributesResponse>;
    /**
     * <p>Enable or disable the Deliverability dashboard for your Amazon Pinpoint account. When you enable the Deliverability dashboard, you gain access to reputation, deliverability, and other metrics for the domains that you use to send email using Amazon Pinpoint. You also gain the ability to perform predictive inbox placement tests.</p> <p>When you use the Deliverability dashboard, you pay a monthly subscription charge, in addition to any other fees that you accrue by using Amazon Pinpoint. For more information about the features and cost of a Deliverability dashboard subscription, see <a href="http://aws.amazon.com/pinpoint/pricing/">Amazon Pinpoint Pricing</a>.</p>
     */
    putDeliverabilityDashboardOption(req: operations.PutDeliverabilityDashboardOptionRequest, config?: AxiosRequestConfig): Promise<operations.PutDeliverabilityDashboardOptionResponse>;
    /**
     * Used to enable or disable DKIM authentication for an email identity.
     */
    putEmailIdentityDkimAttributes(req: operations.PutEmailIdentityDkimAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityDkimAttributesResponse>;
    /**
     * <p>Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.</p> <p>When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.</p> <p>When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).</p>
     */
    putEmailIdentityFeedbackAttributes(req: operations.PutEmailIdentityFeedbackAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityFeedbackAttributesResponse>;
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     */
    putEmailIdentityMailFromAttributes(req: operations.PutEmailIdentityMailFromAttributesRequest, config?: AxiosRequestConfig): Promise<operations.PutEmailIdentityMailFromAttributesResponse>;
    /**
     * <p>Sends an email message. You can use the Amazon Pinpoint Email API to send two types of messages:</p> <ul> <li> <p> <b>Simple</b> – A standard email message. When you create this type of message, you specify the sender, the recipient, and the message body, and Amazon Pinpoint assembles the message for you.</p> </li> <li> <p> <b>Raw</b> – A raw, MIME-formatted email message. When you send this type of email, you have to specify all of the message headers, as well as the message body. You can use this message type to send messages that contain attachments. The message that you specify has to be a valid MIME message.</p> </li> </ul>
     */
    sendEmail(req: operations.SendEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendEmailResponse>;
    /**
     * <p>Add one or more tags (keys and values) to a specified resource. A <i>tag</i> is a label that you optionally define and associate with a resource in Amazon Pinpoint. Tags can help you categorize and manage resources in different ways, such as by purpose, owner, environment, or other criteria. A resource can have as many as 50 tags.</p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Remove one or more tags (keys and values) from a specified resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * <p>Update the configuration of an event destination for a configuration set.</p> <p>In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.</p>
     */
    updateConfigurationSetEventDestination(req: operations.UpdateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationSetEventDestinationResponse>;
}
