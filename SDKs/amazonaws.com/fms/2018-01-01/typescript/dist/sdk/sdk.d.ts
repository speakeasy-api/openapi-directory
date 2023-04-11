import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://fms.{region}.amazonaws.com", "https://fms.{region}.amazonaws.com", "http://fms.{region}.amazonaws.com.cn", "https://fms.{region}.amazonaws.com.cn"];
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
 * <p>This is the <i>Firewall Manager API Reference</i>. This guide is for developers who need detailed information about the Firewall Manager API actions, data types, and errors. For detailed information about Firewall Manager features, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p> <p>Some API actions require explicit resource permissions. For information, see the developer guide topic <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a>. </p>
 *
 * @see {@link https://docs.aws.amazon.com/fms/} - Amazon Web Services documentation
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
     * <p>Sets the Firewall Manager administrator account. The account must be a member of the organization in Organizations whose resources you want to protect. Firewall Manager sets the permissions that allow the account to administer your Firewall Manager policies.</p> <p>The account that you associate with Firewall Manager is called the Firewall Manager administrator account. </p>
     */
    associateAdminAccount(req: operations.AssociateAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.AssociateAdminAccountResponse>;
    /**
     * Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.
     */
    associateThirdPartyFirewall(req: operations.AssociateThirdPartyFirewallRequest, config?: AxiosRequestConfig): Promise<operations.AssociateThirdPartyFirewallResponse>;
    /**
     * Associate resources to a Firewall Manager resource set.
     */
    batchAssociateResource(req: operations.BatchAssociateResourceRequest, config?: AxiosRequestConfig): Promise<operations.BatchAssociateResourceResponse>;
    /**
     * Disassociates resources from a Firewall Manager resource set.
     */
    batchDisassociateResource(req: operations.BatchDisassociateResourceRequest, config?: AxiosRequestConfig): Promise<operations.BatchDisassociateResourceResponse>;
    /**
     * Permanently deletes an Firewall Manager applications list.
     */
    deleteAppsList(req: operations.DeleteAppsListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppsListResponse>;
    /**
     * Deletes an Firewall Manager association with the IAM role and the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
     */
    deleteNotificationChannel(req: operations.DeleteNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNotificationChannelResponse>;
    /**
     * Permanently deletes an Firewall Manager policy.
     */
    deletePolicy(req: operations.DeletePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeletePolicyResponse>;
    /**
     * Permanently deletes an Firewall Manager protocols list.
     */
    deleteProtocolsList(req: operations.DeleteProtocolsListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProtocolsListResponse>;
    /**
     * Deletes the specified <a>ResourceSet</a>.
     */
    deleteResourceSet(req: operations.DeleteResourceSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceSetResponse>;
    /**
     * Disassociates the account that has been set as the Firewall Manager administrator account. To set a different account as the administrator account, you must submit an <code>AssociateAdminAccount</code> request.
     */
    disassociateAdminAccount(req: operations.DisassociateAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateAdminAccountResponse>;
    /**
     * Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.
     */
    disassociateThirdPartyFirewall(req: operations.DisassociateThirdPartyFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateThirdPartyFirewallResponse>;
    /**
     * Returns the Organizations account that is associated with Firewall Manager as the Firewall Manager administrator.
     */
    getAdminAccount(req: operations.GetAdminAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetAdminAccountResponse>;
    /**
     * Returns information about the specified Firewall Manager applications list.
     */
    getAppsList(req: operations.GetAppsListRequest, config?: AxiosRequestConfig): Promise<operations.GetAppsListResponse>;
    /**
     * <p>Returns detailed compliance information about the specified member account. Details include resources that are in and out of compliance with the specified policy. </p> <ul> <li> <p>Resources are considered noncompliant for WAF and Shield Advanced policies if the specified policy has not been applied to them.</p> </li> <li> <p>Resources are considered noncompliant for security group policies if they are in scope of the policy, they violate one or more of the policy rules, and remediation is disabled or not possible.</p> </li> <li> <p>Resources are considered noncompliant for Network Firewall policies if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet, if a subnet created by the Firewall Manager doesn't have the expected route table, and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p> </li> <li> <p>Resources are considered noncompliant for DNS Firewall policies if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p> </li> </ul>
     */
    getComplianceDetail(req: operations.GetComplianceDetailRequest, config?: AxiosRequestConfig): Promise<operations.GetComplianceDetailResponse>;
    /**
     * Information about the Amazon Simple Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.
     */
    getNotificationChannel(req: operations.GetNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.GetNotificationChannelResponse>;
    /**
     * Returns information about the specified Firewall Manager policy.
     */
    getPolicy(req: operations.GetPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetPolicyResponse>;
    /**
     * If you created a Shield Advanced policy, returns policy-level attack summary information in the event of a potential DDoS attack. Other policy types are currently unsupported.
     */
    getProtectionStatus(req: operations.GetProtectionStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetProtectionStatusResponse>;
    /**
     * Returns information about the specified Firewall Manager protocols list.
     */
    getProtocolsList(req: operations.GetProtocolsListRequest, config?: AxiosRequestConfig): Promise<operations.GetProtocolsListResponse>;
    /**
     * Gets information about a specific resource set.
     */
    getResourceSet(req: operations.GetResourceSetRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceSetResponse>;
    /**
     * The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.
     */
    getThirdPartyFirewallAssociationStatus(req: operations.GetThirdPartyFirewallAssociationStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetThirdPartyFirewallAssociationStatusResponse>;
    /**
     * Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
     */
    getViolationDetails(req: operations.GetViolationDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetViolationDetailsResponse>;
    /**
     * Returns an array of <code>AppsListDataSummary</code> objects.
     */
    listAppsLists(req: operations.ListAppsListsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsListsResponse>;
    /**
     * Returns an array of <code>PolicyComplianceStatus</code> objects. Use <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected by the specified policy.
     */
    listComplianceStatus(req: operations.ListComplianceStatusRequest, config?: AxiosRequestConfig): Promise<operations.ListComplianceStatusResponse>;
    /**
     * Returns an array of resources in the organization's accounts that are available to be associated with a resource set.
     */
    listDiscoveredResources(req: operations.ListDiscoveredResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListDiscoveredResourcesResponse>;
    /**
     * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the administrator's Amazon Web Services organization.</p> <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the Firewall Manager administrator.</p>
     */
    listMemberAccounts(req: operations.ListMemberAccountsRequest, config?: AxiosRequestConfig): Promise<operations.ListMemberAccountsResponse>;
    /**
     * Returns an array of <code>PolicySummary</code> objects.
     */
    listPolicies(req: operations.ListPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListPoliciesResponse>;
    /**
     * Returns an array of <code>ProtocolsListDataSummary</code> objects.
     */
    listProtocolsLists(req: operations.ListProtocolsListsRequest, config?: AxiosRequestConfig): Promise<operations.ListProtocolsListsResponse>;
    /**
     * Returns an array of resources that are currently associated to a resource set.
     */
    listResourceSetResources(req: operations.ListResourceSetResourcesRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceSetResourcesResponse>;
    /**
     * Returns an array of <code>ResourceSetSummary</code> objects.
     */
    listResourceSets(req: operations.ListResourceSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceSetsResponse>;
    /**
     * Retrieves the list of tags for the specified Amazon Web Services resource.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.
     */
    listThirdPartyFirewallFirewallPolicies(req: operations.ListThirdPartyFirewallFirewallPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListThirdPartyFirewallFirewallPoliciesResponse>;
    /**
     * Creates an Firewall Manager applications list.
     */
    putAppsList(req: operations.PutAppsListRequest, config?: AxiosRequestConfig): Promise<operations.PutAppsListResponse>;
    /**
     * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that Firewall Manager uses to record SNS logs.</p> <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>Firewall Manager Developer Guide</i>.</p>
     */
    putNotificationChannel(req: operations.PutNotificationChannelRequest, config?: AxiosRequestConfig): Promise<operations.PutNotificationChannelResponse>;
    /**
     * <p>Creates an Firewall Manager policy.</p> <p>Firewall Manager provides the following types of policies: </p> <ul> <li> <p>An WAF policy (type WAFV2), which defines rule groups to run first in the corresponding WAF web ACL and rule groups to run last in the web ACL.</p> </li> <li> <p>An WAF Classic policy (type WAF), which defines a rule group. </p> </li> <li> <p>A Shield Advanced policy, which applies Shield Advanced protection to specified accounts and resources.</p> </li> <li> <p>A security group policy, which manages VPC security groups across your Amazon Web Services organization. </p> </li> <li> <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified Amazon VPCs.</p> </li> <li> <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for specified VPCs.</p> </li> </ul> <p>Each policy is specific to one of the types. If you want to enforce more than one policy type across accounts, create multiple policies. You can create multiple policies for each type.</p> <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
     */
    putPolicy(req: operations.PutPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutPolicyResponse>;
    /**
     * Creates an Firewall Manager protocols list.
     */
    putProtocolsList(req: operations.PutProtocolsListRequest, config?: AxiosRequestConfig): Promise<operations.PutProtocolsListResponse>;
    /**
     * <p>Creates the resource set.</p> <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
     */
    putResourceSet(req: operations.PutResourceSetRequest, config?: AxiosRequestConfig): Promise<operations.PutResourceSetResponse>;
    /**
     * Adds one or more tags to an Amazon Web Services resource.
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * Removes one or more tags from an Amazon Web Services resource.
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
}
