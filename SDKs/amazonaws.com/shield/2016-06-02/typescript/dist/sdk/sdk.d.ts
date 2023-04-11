import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://shield.{region}.amazonaws.com", "https://shield.{region}.amazonaws.com", "http://shield.{region}.amazonaws.com.cn", "https://shield.{region}.amazonaws.com.cn"];
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
 * <fullname>Shield Advanced</fullname> <p>This is the <i>Shield Advanced API Reference</i>. This guide is for developers who need detailed information about the Shield Advanced API actions, data types, and errors. For detailed information about WAF and Shield Advanced features and an overview of how to use the WAF and Shield Advanced APIs, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF and Shield Developer Guide</a>.</p>
 *
 * @see {@link https://docs.aws.amazon.com/shield/} - Amazon Web Services documentation
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
     * <p>Authorizes the Shield Response Team (SRT) to access the specified Amazon S3 bucket containing log data such as Application Load Balancer access logs, CloudFront logs, or logs from third party sources. You can associate up to 10 Amazon S3 buckets with your subscription.</p> <p>To use the services of the SRT and make an <code>AssociateDRTLogBucket</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
     */
    associateDRTLogBucket(req: operations.AssociateDRTLogBucketRequest, config?: AxiosRequestConfig): Promise<operations.AssociateDRTLogBucketResponse>;
    /**
     * <p>Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.</p> <p>You can associate only one <code>RoleArn</code> with your subscription. If you submit an <code>AssociateDRTRole</code> request for an account that already has an associated role, the new <code>RoleArn</code> will replace the existing <code>RoleArn</code>. </p> <p>Prior to making the <code>AssociateDRTRole</code> request, you must attach the <code>AWSShieldDRTAccessPolicy</code> managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy">AWSShieldDRTAccessPolicy</a>. For more information see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html">Adding and removing IAM identity permissions</a>. The role must also trust the service principal <code>drt.shield.amazonaws.com</code>. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">IAM JSON policy elements: Principal</a>.</p> <p>The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.</p> <p>You must have the <code>iam:PassRole</code> permission to make an <code>AssociateDRTRole</code> request. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html">Granting a user permissions to pass a role to an Amazon Web Services service</a>. </p> <p>To use the services of the SRT and make an <code>AssociateDRTRole</code> request, you must be subscribed to the <a href="http://aws.amazon.com/premiumsupport/business-support/">Business Support plan</a> or the <a href="http://aws.amazon.com/premiumsupport/enterprise-support/">Enterprise Support plan</a>.</p>
     */
    associateDRTRole(req: operations.AssociateDRTRoleRequest, config?: AxiosRequestConfig): Promise<operations.AssociateDRTRoleResponse>;
    /**
     * <p>Adds health-based detection to the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
     */
    associateHealthCheck(req: operations.AssociateHealthCheckRequest, config?: AxiosRequestConfig): Promise<operations.AssociateHealthCheckResponse>;
    /**
     * <p>Initializes proactive engagement and sets the list of contacts for the Shield Response Team (SRT) to use. You must provide at least one phone number in the emergency contact list. </p> <p>After you have initialized proactive engagement using this call, to disable or enable proactive engagement, use the calls <code>DisableProactiveEngagement</code> and <code>EnableProactiveEngagement</code>. </p> <note> <p>This call defines the list of email addresses and phone numbers that the SRT can use to contact you for escalations to the SRT and to initiate proactive customer support.</p> <p>The contacts that you provide in the request replace any contacts that were already defined. If you already have contacts defined and want to use them, retrieve the list using <code>DescribeEmergencyContactSettings</code> and then provide it to this call. </p> </note>
     */
    associateProactiveEngagementDetails(req: operations.AssociateProactiveEngagementDetailsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateProactiveEngagementDetailsResponse>;
    /**
     * <p>Enables Shield Advanced for a specific Amazon Web Services resource. The resource can be an Amazon CloudFront distribution, Amazon Route 53 hosted zone, Global Accelerator standard accelerator, Elastic IP Address, Application Load Balancer, or a Classic Load Balancer. You can protect Amazon EC2 instances and Network Load Balancers by association with protected Amazon EC2 Elastic IP addresses.</p> <p>You can add protection to only a single resource with each <code>CreateProtection</code> request. You can add protection to multiple resources at once through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a> and <a href="https://docs.aws.amazon.com/waf/latest/developerguide/configure-new-protection.html">Adding Shield Advanced protection to Amazon Web Services resources</a>.</p>
     */
    createProtection(req: operations.CreateProtectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateProtectionResponse>;
    /**
     * Creates a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
     */
    createProtectionGroup(req: operations.CreateProtectionGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateProtectionGroupResponse>;
    /**
     * <p>Activates Shield Advanced for an account.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note> <p>When you initially create a subscription, your subscription is set to be automatically renewed at the end of the existing subscription period. You can change this by submitting an <code>UpdateSubscription</code> request. </p>
     */
    createSubscription(req: operations.CreateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionResponse>;
    /**
     * Deletes an Shield Advanced <a>Protection</a>.
     */
    deleteProtection(req: operations.DeleteProtectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProtectionResponse>;
    /**
     * Removes the specified protection group.
     */
    deleteProtectionGroup(req: operations.DeleteProtectionGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProtectionGroupResponse>;
    /**
     * Removes Shield Advanced from an account. Shield Advanced requires a 1-year subscription commitment. You cannot delete a subscription prior to the completion of that commitment.
     */
    deleteSubscription(req: operations.DeleteSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionResponse>;
    /**
     * Describes the details of a DDoS attack.
     */
    describeAttack(req: operations.DescribeAttackRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAttackResponse>;
    /**
     * <p>Provides information about the number and type of attacks Shield has detected in the last year for all resources that belong to your account, regardless of whether you've defined Shield protections for them. This operation is available to Shield customers as well as to Shield Advanced customers.</p> <p>The operation returns data for the time range of midnight UTC, one year ago, to midnight UTC, today. For example, if the current time is <code>2020-10-26 15:39:32 PDT</code>, equal to <code>2020-10-26 22:39:32 UTC</code>, then the time range for the attack data returned is from <code>2019-10-26 00:00:00 UTC</code> to <code>2020-10-26 00:00:00 UTC</code>. </p> <p>The time range indicates the period covered by the attack statistics data items.</p>
     */
    describeAttackStatistics(req: operations.DescribeAttackStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAttackStatisticsResponse>;
    /**
     * Returns the current role and list of Amazon S3 log buckets used by the Shield Response Team (SRT) to access your Amazon Web Services account while assisting with attack mitigation.
     */
    describeDRTAccess(req: operations.DescribeDRTAccessRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDRTAccessResponse>;
    /**
     * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
     */
    describeEmergencyContactSettings(req: operations.DescribeEmergencyContactSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEmergencyContactSettingsResponse>;
    /**
     * Lists the details of a <a>Protection</a> object.
     */
    describeProtection(req: operations.DescribeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProtectionResponse>;
    /**
     * Returns the specification for the specified protection group.
     */
    describeProtectionGroup(req: operations.DescribeProtectionGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProtectionGroupResponse>;
    /**
     * Provides details about the Shield Advanced subscription for an account.
     */
    describeSubscription(req: operations.DescribeSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSubscriptionResponse>;
    /**
     * Disable the Shield Advanced automatic application layer DDoS mitigation feature for the protected resource. This stops Shield Advanced from creating, verifying, and applying WAF rules for attacks that it detects for the resource.
     */
    disableApplicationLayerAutomaticResponse(req: operations.DisableApplicationLayerAutomaticResponseRequest, config?: AxiosRequestConfig): Promise<operations.DisableApplicationLayerAutomaticResponseResponse>;
    /**
     * Removes authorization from the Shield Response Team (SRT) to notify contacts about escalations to the SRT and to initiate proactive customer support.
     */
    disableProactiveEngagement(req: operations.DisableProactiveEngagementRequest, config?: AxiosRequestConfig): Promise<operations.DisableProactiveEngagementResponse>;
    /**
     * Removes the Shield Response Team's (SRT) access to the specified Amazon S3 bucket containing the logs that you shared previously.
     */
    disassociateDRTLogBucket(req: operations.DisassociateDRTLogBucketRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateDRTLogBucketResponse>;
    /**
     * Removes the Shield Response Team's (SRT) access to your Amazon Web Services account.
     */
    disassociateDRTRole(req: operations.DisassociateDRTRoleRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateDRTRoleResponse>;
    /**
     * <p>Removes health-based detection from the Shield Advanced protection for a resource. Shield Advanced health-based detection uses the health of your Amazon Web Services resource to improve responsiveness and accuracy in attack detection and response. </p> <p>You define the health check in Route 53 and then associate or disassociate it with your Shield Advanced protection. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html#ddos-advanced-health-check-option">Shield Advanced Health-Based Detection</a> in the <i>WAF Developer Guide</i>. </p>
     */
    disassociateHealthCheck(req: operations.DisassociateHealthCheckRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateHealthCheckResponse>;
    /**
     * <p>Enable the Shield Advanced automatic application layer DDoS mitigation for the protected resource. </p> <note> <p>This feature is available for Amazon CloudFront distributions and Application Load Balancers only.</p> </note> <p>This causes Shield Advanced to create, verify, and apply WAF rules for DDoS attacks that it detects for the resource. Shield Advanced applies the rules in a Shield rule group inside the web ACL that you've associated with the resource. For information about how automatic mitigation works and the requirements for using it, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/ddos-advanced-automatic-app-layer-response.html">Shield Advanced automatic application layer DDoS mitigation</a>.</p> <note> <p>Don't use this action to make changes to automatic mitigation settings when it's already enabled for a resource. Instead, use <a>UpdateApplicationLayerAutomaticResponse</a>.</p> </note> <p>To use this feature, you must associate a web ACL with the protected resource. The web ACL must be created using the latest version of WAF (v2). You can associate the web ACL through the Shield Advanced console at <a href="https://console.aws.amazon.com/wafv2/shieldv2#/">https://console.aws.amazon.com/wafv2/shieldv2#/</a>. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/getting-started-ddos.html">Getting Started with Shield Advanced</a>. You can also associate the web ACL to the resource through the WAF console or the WAF API, but you must manage Shield Advanced automatic mitigation through Shield Advanced. For information about WAF, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">WAF Developer Guide</a>.</p>
     */
    enableApplicationLayerAutomaticResponse(req: operations.EnableApplicationLayerAutomaticResponseRequest, config?: AxiosRequestConfig): Promise<operations.EnableApplicationLayerAutomaticResponseResponse>;
    /**
     * Authorizes the Shield Response Team (SRT) to use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
     */
    enableProactiveEngagement(req: operations.EnableProactiveEngagementRequest, config?: AxiosRequestConfig): Promise<operations.EnableProactiveEngagementResponse>;
    /**
     * Returns the <code>SubscriptionState</code>, either <code>Active</code> or <code>Inactive</code>.
     */
    getSubscriptionState(req: operations.GetSubscriptionStateRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionStateResponse>;
    /**
     * Returns all ongoing DDoS attacks or all DDoS attacks during a specified time period.
     */
    listAttacks(req: operations.ListAttacksRequest, config?: AxiosRequestConfig): Promise<operations.ListAttacksResponse>;
    /**
     * Retrieves <a>ProtectionGroup</a> objects for the account. You can retrieve all protection groups or you can provide filtering criteria and retrieve just the subset of protection groups that match the criteria.
     */
    listProtectionGroups(req: operations.ListProtectionGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListProtectionGroupsResponse>;
    /**
     * Retrieves <a>Protection</a> objects for the account. You can retrieve all protections or you can provide filtering criteria and retrieve just the subset of protections that match the criteria.
     */
    listProtections(req: operations.ListProtectionsRequest, config?: AxiosRequestConfig): Promise<operations.ListProtectionsResponse>;
    /**
     * Retrieves the resources that are included in the protection group.
     */
    listResourcesInProtectionGroup(req: operations.ListResourcesInProtectionGroupRequest, config?: AxiosRequestConfig): Promise<operations.ListResourcesInProtectionGroupResponse>;
    /**
     * Gets information about Amazon Web Services tags for a specified Amazon Resource Name (ARN) in Shield.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Adds or updates tags for a resource in Shield.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes tags from a resource in Shield.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Updates an existing Shield Advanced automatic application layer DDoS mitigation configuration for the specified resource.
     */
    updateApplicationLayerAutomaticResponse(req: operations.UpdateApplicationLayerAutomaticResponseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationLayerAutomaticResponseResponse>;
    /**
     * Updates the details of the list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you if you have proactive engagement enabled, for escalations to the SRT and to initiate proactive customer support.
     */
    updateEmergencyContactSettings(req: operations.UpdateEmergencyContactSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEmergencyContactSettingsResponse>;
    /**
     * Updates an existing protection group. A protection group is a grouping of protected resources so they can be handled as a collective. This resource grouping improves the accuracy of detection and reduces false positives.
     */
    updateProtectionGroup(req: operations.UpdateProtectionGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProtectionGroupResponse>;
    /**
     * <p>Updates the details of an existing subscription. Only enter values for parameters you want to change. Empty parameters are not updated.</p> <note> <p>For accounts that are members of an Organizations organization, Shield Advanced subscriptions are billed against the organization's payer account, regardless of whether the payer account itself is subscribed. </p> </note>
     */
    updateSubscription(req: operations.UpdateSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionResponse>;
}
