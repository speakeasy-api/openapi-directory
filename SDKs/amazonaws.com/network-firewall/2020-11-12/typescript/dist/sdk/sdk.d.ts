import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://network-firewall.{region}.amazonaws.com", "https://network-firewall.{region}.amazonaws.com", "http://network-firewall.{region}.amazonaws.com.cn", "https://network-firewall.{region}.amazonaws.com.cn"];
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
 * <p>This is the API Reference for Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors. </p> <ul> <li> <p>The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p> <p>To access Network Firewall using the REST API endpoint: <code>https://network-firewall.&lt;region&gt;.amazonaws.com </code> </p> </li> <li> <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> </li> <li> <p>For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer Guide</a>.</p> </li> </ul> <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source network analysis and threat detection engine. Network Firewall supports Suricata version 5.0.2. For information about Suricata, see the <a href="https://suricata.io/">Suricata website</a>.</p> <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples: </p> <ul> <li> <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and block all other forms of traffic.</p> </li> <li> <p>Use custom lists of known bad domains to limit the types of domain names that your applications can access.</p> </li> <li> <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p> </li> <li> <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.</p> </li> </ul> <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p> <p>To start using Network Firewall, do the following: </p> <ol> <li> <p>(Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC. </p> </li> <li> <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall. </p> </li> <li> <p>In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have. </p> </li> <li> <p>In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior. </p> </li> <li> <p>In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.</p> </li> <li> <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints.</p> </li> </ol>
 *
 * @see {@link https://docs.aws.amazon.com/network-firewall/} - Amazon Web Services documentation
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
     * <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>
     */
    associateFirewallPolicy(req: operations.AssociateFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AssociateFirewallPolicyResponse>;
    /**
     * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>
     */
    associateSubnets(req: operations.AssociateSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.AssociateSubnetsResponse>;
    /**
     * <p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
     */
    createFirewall(req: operations.CreateFirewallRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallResponse>;
    /**
     * <p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>
     */
    createFirewallPolicy(req: operations.CreateFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateFirewallPolicyResponse>;
    /**
     * <p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>
     */
    createRuleGroup(req: operations.CreateRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateRuleGroupResponse>;
    /**
     * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>
     */
    deleteFirewall(req: operations.DeleteFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallResponse>;
    /**
     * Deletes the specified <a>FirewallPolicy</a>.
     */
    deleteFirewallPolicy(req: operations.DeleteFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallPolicyResponse>;
    /**
     * Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request.
     */
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * Deletes the specified <a>RuleGroup</a>.
     */
    deleteRuleGroup(req: operations.DeleteRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRuleGroupResponse>;
    /**
     * Returns the data objects for the specified firewall.
     */
    describeFirewall(req: operations.DescribeFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFirewallResponse>;
    /**
     * Returns the data objects for the specified firewall policy.
     */
    describeFirewallPolicy(req: operations.DescribeFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeFirewallPolicyResponse>;
    /**
     * Returns the logging configuration for the specified firewall.
     */
    describeLoggingConfiguration(req: operations.DescribeLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoggingConfigurationResponse>;
    /**
     * Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request.
     */
    describeResourcePolicy(req: operations.DescribeResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeResourcePolicyResponse>;
    /**
     * Returns the data objects for the specified rule group.
     */
    describeRuleGroup(req: operations.DescribeRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRuleGroupResponse>;
    /**
     * High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
     */
    describeRuleGroupMetadata(req: operations.DescribeRuleGroupMetadataRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRuleGroupMetadataResponse>;
    /**
     * Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing.
     */
    disassociateSubnets(req: operations.DisassociateSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateSubnetsResponse>;
    /**
     * Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list.
     */
    listFirewallPolicies(req: operations.ListFirewallPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallPoliciesResponse>;
    /**
     * <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>
     */
    listFirewalls(req: operations.ListFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallsResponse>;
    /**
     * Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list.
     */
    listRuleGroups(req: operations.ListRuleGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListRuleGroupsResponse>;
    /**
     * <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * <p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>
     */
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use.
     */
    updateFirewallDeleteProtection(req: operations.UpdateFirewallDeleteProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallDeleteProtectionResponse>;
    /**
     * Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it.
     */
    updateFirewallDescription(req: operations.UpdateFirewallDescriptionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallDescriptionResponse>;
    /**
     * A complex type that contains settings for encryption of your firewall resources.
     */
    updateFirewallEncryptionConfiguration(req: operations.UpdateFirewallEncryptionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallEncryptionConfigurationResponse>;
    /**
     * Updates the properties of the specified firewall policy.
     */
    updateFirewallPolicy(req: operations.UpdateFirewallPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallPolicyResponse>;
    /**
     * Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.
     */
    updateFirewallPolicyChangeProtection(req: operations.UpdateFirewallPolicyChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFirewallPolicyChangeProtectionResponse>;
    /**
     * <p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>
     */
    updateLoggingConfiguration(req: operations.UpdateLoggingConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLoggingConfigurationResponse>;
    /**
     * <p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>
     */
    updateRuleGroup(req: operations.UpdateRuleGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRuleGroupResponse>;
    /**
     * <p/>
     */
    updateSubnetChangeProtection(req: operations.UpdateSubnetChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubnetChangeProtectionResponse>;
}
