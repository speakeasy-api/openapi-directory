# SDK

## Overview

<p>This is the API Reference for Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors. </p> <ul> <li> <p>The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p> <p>To access Network Firewall using the REST API endpoint: <code>https://network-firewall.&lt;region&gt;.amazonaws.com </code> </p> </li> <li> <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> </li> <li> <p>For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer Guide</a>.</p> </li> </ul> <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source network analysis and threat detection engine. Network Firewall supports Suricata version 6.0.9. For information about Suricata, see the <a href="https://suricata.io/">Suricata website</a>.</p> <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples: </p> <ul> <li> <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and block all other forms of traffic.</p> </li> <li> <p>Use custom lists of known bad domains to limit the types of domain names that your applications can access.</p> </li> <li> <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p> </li> <li> <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.</p> </li> </ul> <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p> <p>To start using Network Firewall, do the following: </p> <ol> <li> <p>(Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC. </p> </li> <li> <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall. </p> </li> <li> <p>In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have. </p> </li> <li> <p>In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior. </p> </li> <li> <p>In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.</p> </li> <li> <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints.</p> </li> </ol>

Amazon Web Services documentation
<https://docs.aws.amazon.com/network-firewall/>
### Available Operations

* [associateFirewallPolicy](#associatefirewallpolicy) - <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>
* [associateSubnets](#associatesubnets) - <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>
* [createFirewall](#createfirewall) - <p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
* [createFirewallPolicy](#createfirewallpolicy) - <p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>
* [createRuleGroup](#createrulegroup) - <p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>
* [createTLSInspectionConfiguration](#createtlsinspectionconfiguration) - <p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>
* [deleteFirewall](#deletefirewall) - <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>
* [deleteFirewallPolicy](#deletefirewallpolicy) - Deletes the specified <a>FirewallPolicy</a>. 
* [deleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. 
* [deleteRuleGroup](#deleterulegroup) - Deletes the specified <a>RuleGroup</a>. 
* [deleteTLSInspectionConfiguration](#deletetlsinspectionconfiguration) - Deletes the specified <a>TLSInspectionConfiguration</a>.
* [describeFirewall](#describefirewall) - Returns the data objects for the specified firewall. 
* [describeFirewallPolicy](#describefirewallpolicy) - Returns the data objects for the specified firewall policy. 
* [describeLoggingConfiguration](#describeloggingconfiguration) - Returns the logging configuration for the specified firewall. 
* [describeResourcePolicy](#describeresourcepolicy) - Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. 
* [describeRuleGroup](#describerulegroup) - Returns the data objects for the specified rule group. 
* [describeRuleGroupMetadata](#describerulegroupmetadata) - High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
* [describeTLSInspectionConfiguration](#describetlsinspectionconfiguration) - Returns the data objects for the specified TLS inspection configuration.
* [disassociateSubnets](#disassociatesubnets) - Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. 
* [listFirewallPolicies](#listfirewallpolicies) - Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. 
* [listFirewalls](#listfirewalls) - <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>
* [listRuleGroups](#listrulegroups) - Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. 
* [listTLSInspectionConfigurations](#listtlsinspectionconfigurations) - Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.
* [listTagsForResource](#listtagsforresource) - <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
* [putResourcePolicy](#putresourcepolicy) - <p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>
* [tagResource](#tagresource) - <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
* [untagResource](#untagresource) - <p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
* [updateFirewallDeleteProtection](#updatefirewalldeleteprotection) - Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. 
* [updateFirewallDescription](#updatefirewalldescription) - Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. 
* [updateFirewallEncryptionConfiguration](#updatefirewallencryptionconfiguration) - A complex type that contains settings for encryption of your firewall resources.
* [updateFirewallPolicy](#updatefirewallpolicy) - Updates the properties of the specified firewall policy.
* [updateFirewallPolicyChangeProtection](#updatefirewallpolicychangeprotection) - Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.
* [updateLoggingConfiguration](#updateloggingconfiguration) - <p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>
* [updateRuleGroup](#updaterulegroup) - <p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>
* [updateSubnetChangeProtection](#updatesubnetchangeprotection) - <p/>
* [updateTLSInspectionConfiguration](#updatetlsinspectionconfiguration) - <p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>

## associateFirewallPolicy

<p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyRequest;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyResponse;
import org.openapis.openapi.models.operations.AssociateFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFirewallPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFirewallPolicyRequest req = new AssociateFirewallPolicyRequest(                new AssociateFirewallPolicyRequest("magnam") {{
                                firewallArn = "debitis";
                                firewallName = "ipsa";
                                updateToken = "delectus";
                            }};, AssociateFirewallPolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_ASSOCIATE_FIREWALL_POLICY) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            AssociateFirewallPolicyResponse res = sdk.sdk.associateFirewallPolicy(req);

            if (res.associateFirewallPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateSubnets

<p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateSubnetsRequest;
import org.openapis.openapi.models.operations.AssociateSubnetsResponse;
import org.openapis.openapi.models.operations.AssociateSubnetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateSubnetsRequest;
import org.openapis.openapi.models.shared.IPAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubnetMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateSubnetsRequest req = new AssociateSubnetsRequest(                new AssociateSubnetsRequest(                new org.openapis.openapi.models.shared.SubnetMapping[]{{
                                                add(new SubnetMapping("ab") {{
                                                    ipAddressType = IPAddressTypeEnum.IPV6;
                                                    subnetId = "temporibus";
                                                }}),
                                                add(new SubnetMapping("deserunt") {{
                                                    ipAddressType = IPAddressTypeEnum.IPV4;
                                                    subnetId = "veritatis";
                                                }}),
                                            }}) {{
                                firewallArn = "perferendis";
                                firewallName = "ipsam";
                                updateToken = "repellendus";
                            }};, AssociateSubnetsXAmzTargetEnum.NETWORK_FIREWALL20201112_ASSOCIATE_SUBNETS) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "quo";
                xAmzCredential = "odit";
                xAmzDate = "at";
                xAmzSecurityToken = "at";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "molestiae";
            }};            

            AssociateSubnetsResponse res = sdk.sdk.associateSubnets(req);

            if (res.associateSubnetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFirewall

<p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFirewallRequest;
import org.openapis.openapi.models.operations.CreateFirewallResponse;
import org.openapis.openapi.models.operations.CreateFirewallXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFirewallRequest;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.IPAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubnetMapping;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFirewallRequest req = new CreateFirewallRequest(                new CreateFirewallRequest("quod", "esse",                 new org.openapis.openapi.models.shared.SubnetMapping[]{{
                                                add(new SubnetMapping("dicta") {{
                                                    ipAddressType = IPAddressTypeEnum.IPV6;
                                                    subnetId = "dolorum";
                                                }}),
                                                add(new SubnetMapping("occaecati") {{
                                                    ipAddressType = IPAddressTypeEnum.IPV6;
                                                    subnetId = "officia";
                                                }}),
                                                add(new SubnetMapping("hic") {{
                                                    ipAddressType = IPAddressTypeEnum.DUALSTACK;
                                                    subnetId = "deleniti";
                                                }}),
                                            }}, "optio") {{
                                deleteProtection = false;
                                description = "totam";
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.CUSTOMER_KMS) {{
                                    keyId = "commodi";
                                }};;
                                firewallPolicyChangeProtection = false;
                                subnetChangeProtection = false;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("impedit", "cum") {{
                                        key = "modi";
                                        value = "qui";
                                    }}),
                                    add(new Tag("excepturi", "aspernatur") {{
                                        key = "esse";
                                        value = "ipsum";
                                    }}),
                                }};
                            }};, CreateFirewallXAmzTargetEnum.NETWORK_FIREWALL20201112_CREATE_FIREWALL) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ad";
                xAmzCredential = "natus";
                xAmzDate = "sed";
                xAmzSecurityToken = "iste";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "natus";
            }};            

            CreateFirewallResponse res = sdk.sdk.createFirewall(req);

            if (res.createFirewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFirewallPolicy

<p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFirewallPolicyRequest;
import org.openapis.openapi.models.operations.CreateFirewallPolicyResponse;
import org.openapis.openapi.models.operations.CreateFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionDefinition;
import org.openapis.openapi.models.shared.CreateFirewallPolicyRequest;
import org.openapis.openapi.models.shared.CustomAction;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.OverrideActionEnum;
import org.openapis.openapi.models.shared.PublishMetricAction;
import org.openapis.openapi.models.shared.RuleOrderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatefulEngineOptions;
import org.openapis.openapi.models.shared.StatefulRuleGroupOverride;
import org.openapis.openapi.models.shared.StatefulRuleGroupReference;
import org.openapis.openapi.models.shared.StatelessRuleGroupReference;
import org.openapis.openapi.models.shared.StreamExceptionPolicyEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFirewallPolicyRequest req = new CreateFirewallPolicyRequest(                new CreateFirewallPolicyRequest(                new FirewallPolicy(                new String[]{{
                                                                add("saepe"),
                                                                add("fuga"),
                                                                add("in"),
                                                                add("corporis"),
                                                            }},                 new String[]{{
                                                                add("iure"),
                                                                add("saepe"),
                                                                add("quidem"),
                                                            }}) {{
                                                statefulDefaultActions = new String[]{{
                                                    add("ipsa"),
                                                }};
                                                statefulEngineOptions = new StatefulEngineOptions() {{
                                                    ruleOrder = RuleOrderEnum.STRICT_ORDER;
                                                    streamExceptionPolicy = StreamExceptionPolicyEnum.CONTINUE_;
                                                }};;
                                                statefulRuleGroupReferences = new org.openapis.openapi.models.shared.StatefulRuleGroupReference[]{{
                                                    add(new StatefulRuleGroupReference("dolorem") {{
                                                        override = new StatefulRuleGroupOverride() {{
                                                            action = OverrideActionEnum.DROP_TO_ALERT;
                                                        }};
                                                        priority = 670638L;
                                                        resourceArn = "dolores";
                                                    }}),
                                                    add(new StatefulRuleGroupReference("nobis") {{
                                                        override = new StatefulRuleGroupOverride() {{
                                                            action = OverrideActionEnum.DROP_TO_ALERT;
                                                        }};
                                                        priority = 358152L;
                                                        resourceArn = "explicabo";
                                                    }}),
                                                    add(new StatefulRuleGroupReference("nemo") {{
                                                        override = new StatefulRuleGroupOverride() {{
                                                            action = OverrideActionEnum.DROP_TO_ALERT;
                                                        }};
                                                        priority = 315428L;
                                                        resourceArn = "omnis";
                                                    }}),
                                                }};
                                                statelessCustomActions = new org.openapis.openapi.models.shared.CustomAction[]{{
                                                    add(new CustomAction(                new ActionDefinition() {{
                                                                        publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                            add(new Dimension("molestiae") {{
                                                                                                value = "quam";
                                                                                            }}),
                                                                                            add(new Dimension("error") {{
                                                                                                value = "velit";
                                                                                            }}),
                                                                                        }});;
                                                                    }};, "quia") {{
                                                        actionDefinition = new ActionDefinition() {{
                                                            publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                add(new Dimension("culpa") {{
                                                                                    value = "dolorem";
                                                                                }}),
                                                                                add(new Dimension("repellat") {{
                                                                                    value = "consequuntur";
                                                                                }}),
                                                                                add(new Dimension("occaecati") {{
                                                                                    value = "mollitia";
                                                                                }}),
                                                                            }}) {{
                                                                dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                                    add(new Dimension("iure") {{
                                                                        value = "accusantium";
                                                                    }}),
                                                                    add(new Dimension("doloribus") {{
                                                                        value = "culpa";
                                                                    }}),
                                                                    add(new Dimension("architecto") {{
                                                                        value = "sapiente";
                                                                    }}),
                                                                }};
                                                            }};
                                                        }};
                                                        actionName = "numquam";
                                                    }}),
                                                    add(new CustomAction(                new ActionDefinition() {{
                                                                        publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                            add(new Dimension("possimus") {{
                                                                                                value = "id";
                                                                                            }}),
                                                                                            add(new Dimension("quasi") {{
                                                                                                value = "aut";
                                                                                            }}),
                                                                                        }});;
                                                                    }};, "error") {{
                                                        actionDefinition = new ActionDefinition() {{
                                                            publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                add(new Dimension("sequi") {{
                                                                                    value = "quo";
                                                                                }}),
                                                                            }}) {{
                                                                dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                                    add(new Dimension("laborum") {{
                                                                        value = "vitae";
                                                                    }}),
                                                                    add(new Dimension("enim") {{
                                                                        value = "animi";
                                                                    }}),
                                                                }};
                                                            }};
                                                        }};
                                                        actionName = "tenetur";
                                                    }}),
                                                }};
                                                statelessRuleGroupReferences = new org.openapis.openapi.models.shared.StatelessRuleGroupReference[]{{
                                                    add(new StatelessRuleGroupReference(971945L, "voluptatibus") {{
                                                        priority = 673660L;
                                                        resourceArn = "quasi";
                                                    }}),
                                                    add(new StatelessRuleGroupReference(509624L, "voluptatibus") {{
                                                        priority = 878194L;
                                                        resourceArn = "nihil";
                                                    }}),
                                                    add(new StatelessRuleGroupReference(451159L, "cum") {{
                                                        priority = 55714L;
                                                        resourceArn = "omnis";
                                                    }}),
                                                    add(new StatelessRuleGroupReference(441711L, "ut") {{
                                                        priority = 19987L;
                                                        resourceArn = "doloremque";
                                                    }}),
                                                }};
                                                tlsInspectionConfigurationArn = "maiores";
                                            }};, "dicta") {{
                                description = "corporis";
                                dryRun = false;
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.CUSTOMER_KMS) {{
                                    keyId = "iusto";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("accusamus", "commodi") {{
                                        key = "harum";
                                        value = "enim";
                                    }}),
                                }};
                            }};, CreateFirewallPolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_CREATE_FIREWALL_POLICY) {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
            }};            

            CreateFirewallPolicyResponse res = sdk.sdk.createFirewallPolicy(req);

            if (res.createFirewallPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createRuleGroup

<p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateRuleGroupRequest;
import org.openapis.openapi.models.operations.CreateRuleGroupResponse;
import org.openapis.openapi.models.operations.CreateRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionDefinition;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateRuleGroupRequest;
import org.openapis.openapi.models.shared.CustomAction;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.GeneratedRulesTypeEnum;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.IPSet;
import org.openapis.openapi.models.shared.IPSetReference;
import org.openapis.openapi.models.shared.MatchAttributes;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.PortSet;
import org.openapis.openapi.models.shared.PublishMetricAction;
import org.openapis.openapi.models.shared.ReferenceSets;
import org.openapis.openapi.models.shared.RuleDefinition;
import org.openapis.openapi.models.shared.RuleGroup;
import org.openapis.openapi.models.shared.RuleGroupTypeEnum;
import org.openapis.openapi.models.shared.RuleOption;
import org.openapis.openapi.models.shared.RuleOrderEnum;
import org.openapis.openapi.models.shared.RuleVariables;
import org.openapis.openapi.models.shared.RulesSource;
import org.openapis.openapi.models.shared.RulesSourceList;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceMetadata;
import org.openapis.openapi.models.shared.StatefulActionEnum;
import org.openapis.openapi.models.shared.StatefulRule;
import org.openapis.openapi.models.shared.StatefulRuleDirectionEnum;
import org.openapis.openapi.models.shared.StatefulRuleOptions;
import org.openapis.openapi.models.shared.StatefulRuleProtocolEnum;
import org.openapis.openapi.models.shared.StatelessRule;
import org.openapis.openapi.models.shared.StatelessRulesAndCustomActions;
import org.openapis.openapi.models.shared.TCPFlagEnum;
import org.openapis.openapi.models.shared.TCPFlagField;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateRuleGroupRequest req = new CreateRuleGroupRequest(                new CreateRuleGroupRequest(508969L, "rem", RuleGroupTypeEnum.STATEFUL) {{
                                description = "quasi";
                                dryRun = false;
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.AWS_OWNED_KMS_KEY) {{
                                    keyId = "sint";
                                }};;
                                ruleGroup = new RuleGroup(                new RulesSource() {{
                                                    rulesSourceList = new RulesSourceList(GeneratedRulesTypeEnum.ALLOWLIST,                 new org.openapis.openapi.models.shared.TargetTypeEnum[]{{
                                                                        add(TargetTypeEnum.TLS_SNI),
                                                                        add(TargetTypeEnum.TLS_SNI),
                                                                        add(TargetTypeEnum.TLS_SNI),
                                                                        add(TargetTypeEnum.HTTP_HOST),
                                                                    }},                 new String[]{{
                                                                        add("explicabo"),
                                                                        add("deserunt"),
                                                                        add("distinctio"),
                                                                        add("quibusdam"),
                                                                    }});;
                                                    rulesString = "labore";
                                                    statefulRules = new org.openapis.openapi.models.shared.StatefulRule[]{{
                                                        add(new StatefulRule(StatefulActionEnum.ALERT,                 new Header("in", "in", StatefulRuleDirectionEnum.ANY, StatefulRuleProtocolEnum.DHCP, "rerum", "dicta");,                 new org.openapis.openapi.models.shared.RuleOption[]{{
                                                                            add(new RuleOption("non") {{
                                                                                keyword = "cumque";
                                                                                settings = new String[]{{
                                                                                    add("ea"),
                                                                                    add("aliquid"),
                                                                                    add("laborum"),
                                                                                    add("accusamus"),
                                                                                }};
                                                                            }}),
                                                                            add(new RuleOption("quidem") {{
                                                                                keyword = "occaecati";
                                                                                settings = new String[]{{
                                                                                    add("accusamus"),
                                                                                    add("delectus"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            action = StatefulActionEnum.PASS;
                                                            header = new Header("ipsam", "alias", StatefulRuleDirectionEnum.FORWARD, StatefulRuleProtocolEnum.IMAP, "excepturi", "tempora") {{
                                                                destination = "aliquid";
                                                                destinationPort = "cupiditate";
                                                                direction = StatefulRuleDirectionEnum.ANY;
                                                                protocol = StatefulRuleProtocolEnum.IP;
                                                                source = "magni";
                                                                sourcePort = "assumenda";
                                                            }};
                                                            ruleOptions = new org.openapis.openapi.models.shared.RuleOption[]{{
                                                                add(new RuleOption("non") {{
                                                                    keyword = "tempore";
                                                                    settings = new String[]{{
                                                                        add("delectus"),
                                                                        add("eum"),
                                                                    }};
                                                                }}),
                                                                add(new RuleOption("sint") {{
                                                                    keyword = "eligendi";
                                                                    settings = new String[]{{
                                                                        add("aliquid"),
                                                                        add("provident"),
                                                                        add("necessitatibus"),
                                                                    }};
                                                                }}),
                                                                add(new RuleOption("a") {{
                                                                    keyword = "officia";
                                                                    settings = new String[]{{
                                                                        add("debitis"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }}),
                                                        add(new StatefulRule(StatefulActionEnum.DROP,                 new Header("suscipit", "natus", StatefulRuleDirectionEnum.ANY, StatefulRuleProtocolEnum.DNS, "vero", "aspernatur");,                 new org.openapis.openapi.models.shared.RuleOption[]{{
                                                                            add(new RuleOption("ullam") {{
                                                                                keyword = "magnam";
                                                                                settings = new String[]{{
                                                                                    add("excepturi"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            action = StatefulActionEnum.ALERT;
                                                            header = new Header("deserunt", "nisi", StatefulRuleDirectionEnum.FORWARD, StatefulRuleProtocolEnum.SMTP, "omnis", "molestiae") {{
                                                                destination = "nam";
                                                                destinationPort = "id";
                                                                direction = StatefulRuleDirectionEnum.ANY;
                                                                protocol = StatefulRuleProtocolEnum.SSH;
                                                                source = "sapiente";
                                                                sourcePort = "amet";
                                                            }};
                                                            ruleOptions = new org.openapis.openapi.models.shared.RuleOption[]{{
                                                                add(new RuleOption("labore") {{
                                                                    keyword = "nihil";
                                                                    settings = new String[]{{
                                                                        add("distinctio"),
                                                                        add("id"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    statelessRulesAndCustomActions = new StatelessRulesAndCustomActions(                new org.openapis.openapi.models.shared.StatelessRule[]{{
                                                                        add(new StatelessRule(67249L,                 new RuleDefinition(                new String[]{{
                                                                                                            add("dolorum"),
                                                                                                            add("iusto"),
                                                                                                            add("voluptate"),
                                                                                                        }},                 new MatchAttributes() {{
                                                                                                            destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(896672L, 714697L) {{
                                                                                                                    fromPort = 536579L;
                                                                                                                    toPort = 607045L;
                                                                                                                }}),
                                                                                                                add(new PortRange(216897L, 456015L) {{
                                                                                                                    fromPort = 990339L;
                                                                                                                    toPort = 469497L;
                                                                                                                }}),
                                                                                                                add(new PortRange(263322L, 137220L) {{
                                                                                                                    fromPort = 663078L;
                                                                                                                    toPort = 906418L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("optio") {{
                                                                                                                    addressDefinition = "amet";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            protocols = new Long[]{{
                                                                                                                add(320017L),
                                                                                                                add(904425L),
                                                                                                                add(383464L),
                                                                                                                add(645785L),
                                                                                                            }};
                                                                                                            sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(519711L, 628982L) {{
                                                                                                                    fromPort = 324683L;
                                                                                                                    toPort = 831049L;
                                                                                                                }}),
                                                                                                                add(new PortRange(311860L, 273542L) {{
                                                                                                                    fromPort = 55L;
                                                                                                                    toPort = 872651L;
                                                                                                                }}),
                                                                                                                add(new PortRange(885338L, 185636L) {{
                                                                                                                    fromPort = 425451L;
                                                                                                                    toPort = 798047L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("esse") {{
                                                                                                                    addressDefinition = "a";
                                                                                                                }}),
                                                                                                                add(new Address("iusto") {{
                                                                                                                    addressDefinition = "harum";
                                                                                                                }}),
                                                                                                                add(new Address("quisquam") {{
                                                                                                                    addressDefinition = "ipsum";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.PSH),
                                                                                                                                    add(TCPFlagEnum.FIN),
                                                                                                                                    add(TCPFlagEnum.URG),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.PSH),
                                                                                                                                    add(TCPFlagEnum.SYN),
                                                                                                                                    add(TCPFlagEnum.RST),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.RST),
                                                                                                                                    add(TCPFlagEnum.SYN),
                                                                                                                                    add(TCPFlagEnum.SYN),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ACK),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ECE),
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.SYN),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ECE),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                            }};
                                                                                                        }};);) {{
                                                                            priority = 551816L;
                                                                            ruleDefinition = new RuleDefinition(                new String[]{{
                                                                                                add("porro"),
                                                                                            }},                 new MatchAttributes() {{
                                                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(50370L, 577229L) {{
                                                                                                        fromPort = 500026L;
                                                                                                        toPort = 621479L;
                                                                                                    }}),
                                                                                                }};
                                                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("asperiores") {{
                                                                                                        addressDefinition = "adipisci";
                                                                                                    }}),
                                                                                                    add(new Address("modi") {{
                                                                                                        addressDefinition = "earum";
                                                                                                    }}),
                                                                                                    add(new Address("dolorum") {{
                                                                                                        addressDefinition = "iste";
                                                                                                    }}),
                                                                                                }};
                                                                                                protocols = new Long[]{{
                                                                                                    add(864282L),
                                                                                                    add(589910L),
                                                                                                    add(750844L),
                                                                                                }};
                                                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(554242L, 398221L) {{
                                                                                                        fromPort = 964490L;
                                                                                                        toPort = 311945L;
                                                                                                    }}),
                                                                                                    add(new PortRange(222443L, 186193L) {{
                                                                                                        fromPort = 212390L;
                                                                                                        toPort = 209843L;
                                                                                                    }}),
                                                                                                    add(new PortRange(569574L, 739551L) {{
                                                                                                        fromPort = 218749L;
                                                                                                        toPort = 944373L;
                                                                                                    }}),
                                                                                                }};
                                                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("reiciendis") {{
                                                                                                        addressDefinition = "dignissimos";
                                                                                                    }}),
                                                                                                    add(new Address("dolorum") {{
                                                                                                        addressDefinition = "amet";
                                                                                                    }}),
                                                                                                }};
                                                                                                tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }};
                                                                                                    }}),
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ECE),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                        }};
                                                                                                    }}),
                                                                                                }};
                                                                                            }};) {{
                                                                                actions = new String[]{{
                                                                                    add("accusantium"),
                                                                                    add("mollitia"),
                                                                                    add("reiciendis"),
                                                                                }};
                                                                                matchAttributes = new MatchAttributes() {{
                                                                                    destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(221262L, 896547L) {{
                                                                                            fromPort = 320997L;
                                                                                            toPort = 431418L;
                                                                                        }}),
                                                                                        add(new PortRange(97260L, 435865L) {{
                                                                                            fromPort = 141264L;
                                                                                            toPort = 367562L;
                                                                                        }}),
                                                                                        add(new PortRange(260341L, 806194L) {{
                                                                                            fromPort = 984043L;
                                                                                            toPort = 891924L;
                                                                                        }}),
                                                                                    }};
                                                                                    destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("in") {{
                                                                                            addressDefinition = "facilis";
                                                                                        }}),
                                                                                        add(new Address("architecto") {{
                                                                                            addressDefinition = "architecto";
                                                                                        }}),
                                                                                        add(new Address("ullam") {{
                                                                                            addressDefinition = "repudiandae";
                                                                                        }}),
                                                                                    }};
                                                                                    protocols = new Long[]{{
                                                                                        add(469249L),
                                                                                        add(998848L),
                                                                                        add(841140L),
                                                                                    }};
                                                                                    sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(37559L, 162493L) {{
                                                                                            fromPort = 904648L;
                                                                                            toPort = 868126L;
                                                                                        }}),
                                                                                    }};
                                                                                    sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("magni") {{
                                                                                            addressDefinition = "natus";
                                                                                        }}),
                                                                                        add(new Address("quo") {{
                                                                                            addressDefinition = "sunt";
                                                                                        }}),
                                                                                        add(new Address("pariatur") {{
                                                                                            addressDefinition = "illum";
                                                                                        }}),
                                                                                    }};
                                                                                    tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.ACK),
                                                                                                add(TCPFlagEnum.SYN),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.FIN),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                                add(TCPFlagEnum.RST),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                                add(TCPFlagEnum.SYN),
                                                                                                add(TCPFlagEnum.FIN),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.RST),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.RST),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.SYN),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.SYN),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                                add(TCPFlagEnum.RST),
                                                                                            }};
                                                                                        }}),
                                                                                    }};
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                        add(new StatelessRule(56848L,                 new RuleDefinition(                new String[]{{
                                                                                                            add("quidem"),
                                                                                                            add("neque"),
                                                                                                            add("quo"),
                                                                                                        }},                 new MatchAttributes() {{
                                                                                                            destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(259422L, 178367L) {{
                                                                                                                    fromPort = 777408L;
                                                                                                                    toPort = 681359L;
                                                                                                                }}),
                                                                                                                add(new PortRange(587600L, 9688L) {{
                                                                                                                    fromPort = 373813L;
                                                                                                                    toPort = 69859L;
                                                                                                                }}),
                                                                                                                add(new PortRange(370853L, 133465L) {{
                                                                                                                    fromPort = 272822L;
                                                                                                                    toPort = 892050L;
                                                                                                                }}),
                                                                                                                add(new PortRange(459856L, 925164L) {{
                                                                                                                    fromPort = 197054L;
                                                                                                                    toPort = 779192L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("quod") {{
                                                                                                                    addressDefinition = "distinctio";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            protocols = new Long[]{{
                                                                                                                add(76956L),
                                                                                                                add(469498L),
                                                                                                            }};
                                                                                                            sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(488410L, 577543L) {{
                                                                                                                    fromPort = 882710L;
                                                                                                                    toPort = 306810L;
                                                                                                                }}),
                                                                                                                add(new PortRange(174112L, 645570L) {{
                                                                                                                    fromPort = 414567L;
                                                                                                                    toPort = 959434L;
                                                                                                                }}),
                                                                                                                add(new PortRange(783648L, 430402L) {{
                                                                                                                    fromPort = 475289L;
                                                                                                                    toPort = 35362L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("consequuntur") {{
                                                                                                                    addressDefinition = "praesentium";
                                                                                                                }}),
                                                                                                                add(new Address("fugit") {{
                                                                                                                    addressDefinition = "deleniti";
                                                                                                                }}),
                                                                                                                add(new Address("mollitia") {{
                                                                                                                    addressDefinition = "fuga";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.SYN),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.CWR),
                                                                                                                                    add(TCPFlagEnum.FIN),
                                                                                                                                    add(TCPFlagEnum.PSH),
                                                                                                                                    add(TCPFlagEnum.ECE),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ACK),
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                            }};
                                                                                                        }};);) {{
                                                                            priority = 488056L;
                                                                            ruleDefinition = new RuleDefinition(                new String[]{{
                                                                                                add("officia"),
                                                                                            }},                 new MatchAttributes() {{
                                                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(136900L, 428224L) {{
                                                                                                        fromPort = 368584L;
                                                                                                        toPort = 410492L;
                                                                                                    }}),
                                                                                                    add(new PortRange(189848L, 401132L) {{
                                                                                                        fromPort = 822118L;
                                                                                                        toPort = 297842L;
                                                                                                    }}),
                                                                                                }};
                                                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("dolor") {{
                                                                                                        addressDefinition = "dicta";
                                                                                                    }}),
                                                                                                    add(new Address("quasi") {{
                                                                                                        addressDefinition = "maiores";
                                                                                                    }}),
                                                                                                    add(new Address("nulla") {{
                                                                                                        addressDefinition = "ex";
                                                                                                    }}),
                                                                                                }};
                                                                                                protocols = new Long[]{{
                                                                                                    add(972920L),
                                                                                                    add(343605L),
                                                                                                    add(960835L),
                                                                                                }};
                                                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(774048L, 359271L) {{
                                                                                                        fromPort = 906556L;
                                                                                                        toPort = 411372L;
                                                                                                    }}),
                                                                                                    add(new PortRange(81101L, 301831L) {{
                                                                                                        fromPort = 333145L;
                                                                                                        toPort = 399499L;
                                                                                                    }}),
                                                                                                    add(new PortRange(232234L, 926213L) {{
                                                                                                        fromPort = 407241L;
                                                                                                        toPort = 775220L;
                                                                                                    }}),
                                                                                                    add(new PortRange(53427L, 952871L) {{
                                                                                                        fromPort = 132487L;
                                                                                                        toPort = 325310L;
                                                                                                    }}),
                                                                                                }};
                                                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("aut") {{
                                                                                                        addressDefinition = "aut";
                                                                                                    }}),
                                                                                                    add(new Address("impedit") {{
                                                                                                        addressDefinition = "deleniti";
                                                                                                    }}),
                                                                                                    add(new Address("fugit") {{
                                                                                                        addressDefinition = "aliquam";
                                                                                                    }}),
                                                                                                }};
                                                                                                tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ECE),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                        }};
                                                                                                    }}),
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                        }};
                                                                                                    }}),
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ACK),
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }};
                                                                                                    }}),
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.ACK),
                                                                                                                        add(TCPFlagEnum.ECE),
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }};
                                                                                                    }}),
                                                                                                }};
                                                                                            }};) {{
                                                                                actions = new String[]{{
                                                                                    add("ullam"),
                                                                                }};
                                                                                matchAttributes = new MatchAttributes() {{
                                                                                    destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(765326L, 746994L) {{
                                                                                            fromPort = 940432L;
                                                                                            toPort = 30452L;
                                                                                        }}),
                                                                                        add(new PortRange(903720L, 217450L) {{
                                                                                            fromPort = 748664L;
                                                                                            toPort = 92596L;
                                                                                        }}),
                                                                                        add(new PortRange(552193L, 731694L) {{
                                                                                            fromPort = 83422L;
                                                                                            toPort = 749255L;
                                                                                        }}),
                                                                                    }};
                                                                                    destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("delectus") {{
                                                                                            addressDefinition = "aperiam";
                                                                                        }}),
                                                                                        add(new Address("dolore") {{
                                                                                            addressDefinition = "dolorem";
                                                                                        }}),
                                                                                        add(new Address("adipisci") {{
                                                                                            addressDefinition = "labore";
                                                                                        }}),
                                                                                    }};
                                                                                    protocols = new Long[]{{
                                                                                        add(100294L),
                                                                                        add(63038L),
                                                                                        add(16429L),
                                                                                    }};
                                                                                    sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(669917L, 833038L) {{
                                                                                            fromPort = 929530L;
                                                                                            toPort = 9240L;
                                                                                        }}),
                                                                                        add(new PortRange(281730L, 703495L) {{
                                                                                            fromPort = 785153L;
                                                                                            toPort = 984330L;
                                                                                        }}),
                                                                                        add(new PortRange(63955L, 512393L) {{
                                                                                            fromPort = 586410L;
                                                                                            toPort = 181631L;
                                                                                        }}),
                                                                                    }};
                                                                                    sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("voluptatibus") {{
                                                                                            addressDefinition = "occaecati";
                                                                                        }}),
                                                                                        add(new Address("vero") {{
                                                                                            addressDefinition = "quisquam";
                                                                                        }}),
                                                                                    }};
                                                                                    tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.SYN),
                                                                                                add(TCPFlagEnum.CWR),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.SYN),
                                                                                                add(TCPFlagEnum.CWR),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.URG),
                                                                                                add(TCPFlagEnum.URG),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.RST),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.CWR),
                                                                                                add(TCPFlagEnum.RST),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.ECE),
                                                                                            }};
                                                                                        }}),
                                                                                    }};
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                        add(new StatelessRule(662505L,                 new RuleDefinition(                new String[]{{
                                                                                                            add("velit"),
                                                                                                            add("culpa"),
                                                                                                        }},                 new MatchAttributes() {{
                                                                                                            destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(853940L, 424089L) {{
                                                                                                                    fromPort = 926880L;
                                                                                                                    toPort = 517309L;
                                                                                                                }}),
                                                                                                                add(new PortRange(427834L, 287051L) {{
                                                                                                                    fromPort = 497678L;
                                                                                                                    toPort = 554688L;
                                                                                                                }}),
                                                                                                                add(new PortRange(738227L, 414857L) {{
                                                                                                                    fromPort = 822560L;
                                                                                                                    toPort = 706575L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("reiciendis") {{
                                                                                                                    addressDefinition = "corporis";
                                                                                                                }}),
                                                                                                                add(new Address("nemo") {{
                                                                                                                    addressDefinition = "assumenda";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            protocols = new Long[]{{
                                                                                                                add(397533L),
                                                                                                                add(46007L),
                                                                                                                add(738683L),
                                                                                                                add(232627L),
                                                                                                            }};
                                                                                                            sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(814967L, 257233L) {{
                                                                                                                    fromPort = 348519L;
                                                                                                                    toPort = 937285L;
                                                                                                                }}),
                                                                                                                add(new PortRange(968972L, 697142L) {{
                                                                                                                    fromPort = 985492L;
                                                                                                                    toPort = 381760L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("dolore") {{
                                                                                                                    addressDefinition = "necessitatibus";
                                                                                                                }}),
                                                                                                                add(new Address("asperiores") {{
                                                                                                                    addressDefinition = "sunt";
                                                                                                                }}),
                                                                                                                add(new Address("non") {{
                                                                                                                    addressDefinition = "adipisci";
                                                                                                                }}),
                                                                                                                add(new Address("beatae") {{
                                                                                                                    addressDefinition = "amet";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.FIN),
                                                                                                                                    add(TCPFlagEnum.CWR),
                                                                                                                                    add(TCPFlagEnum.URG),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.URG),
                                                                                                                                    add(TCPFlagEnum.SYN),
                                                                                                                                    add(TCPFlagEnum.ECE),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                            }};
                                                                                                        }};);) {{
                                                                            priority = 724168L;
                                                                            ruleDefinition = new RuleDefinition(                new String[]{{
                                                                                                add("deleniti"),
                                                                                                add("itaque"),
                                                                                            }},                 new MatchAttributes() {{
                                                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(945302L, 98478L) {{
                                                                                                        fromPort = 99615L;
                                                                                                        toPort = 609178L;
                                                                                                    }}),
                                                                                                    add(new PortRange(454162L, 55965L) {{
                                                                                                        fromPort = 869489L;
                                                                                                        toPort = 92027L;
                                                                                                    }}),
                                                                                                    add(new PortRange(232744L, 237173L) {{
                                                                                                        fromPort = 326701L;
                                                                                                        toPort = 86532L;
                                                                                                    }}),
                                                                                                }};
                                                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("accusantium") {{
                                                                                                        addressDefinition = "temporibus";
                                                                                                    }}),
                                                                                                    add(new Address("aut") {{
                                                                                                        addressDefinition = "rem";
                                                                                                    }}),
                                                                                                    add(new Address("eum") {{
                                                                                                        addressDefinition = "laudantium";
                                                                                                    }}),
                                                                                                }};
                                                                                                protocols = new Long[]{{
                                                                                                    add(68074L),
                                                                                                    add(544591L),
                                                                                                    add(251941L),
                                                                                                }};
                                                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(253191L, 771089L) {{
                                                                                                        fromPort = 221161L;
                                                                                                        toPort = 580152L;
                                                                                                    }}),
                                                                                                }};
                                                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("aut") {{
                                                                                                        addressDefinition = "voluptas";
                                                                                                    }}),
                                                                                                }};
                                                                                                tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                        }};
                                                                                                    }}),
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                        }};
                                                                                                    }}),
                                                                                                }};
                                                                                            }};) {{
                                                                                actions = new String[]{{
                                                                                    add("aliquid"),
                                                                                    add("quasi"),
                                                                                    add("saepe"),
                                                                                    add("vel"),
                                                                                }};
                                                                                matchAttributes = new MatchAttributes() {{
                                                                                    destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(580197L, 327720L) {{
                                                                                            fromPort = 473221L;
                                                                                            toPort = 699622L;
                                                                                        }}),
                                                                                        add(new PortRange(27069L, 636061L) {{
                                                                                            fromPort = 716244L;
                                                                                            toPort = 756779L;
                                                                                        }}),
                                                                                        add(new PortRange(766964L, 160538L) {{
                                                                                            fromPort = 731398L;
                                                                                            toPort = 240020L;
                                                                                        }}),
                                                                                    }};
                                                                                    destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("quaerat") {{
                                                                                            addressDefinition = "minus";
                                                                                        }}),
                                                                                    }};
                                                                                    protocols = new Long[]{{
                                                                                        add(232865L),
                                                                                        add(458139L),
                                                                                        add(503427L),
                                                                                        add(590984L),
                                                                                    }};
                                                                                    sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(457223L, 97468L) {{
                                                                                            fromPort = 857723L;
                                                                                            toPort = 557811L;
                                                                                        }}),
                                                                                        add(new PortRange(575751L, 863023L) {{
                                                                                            fromPort = 951875L;
                                                                                            toPort = 621679L;
                                                                                        }}),
                                                                                        add(new PortRange(908844L, 992430L) {{
                                                                                            fromPort = 820767L;
                                                                                            toPort = 157632L;
                                                                                        }}),
                                                                                        add(new PortRange(159414L, 94458L) {{
                                                                                            fromPort = 815524L;
                                                                                            toPort = 85001L;
                                                                                        }}),
                                                                                    }};
                                                                                    sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("aliquid") {{
                                                                                            addressDefinition = "culpa";
                                                                                        }}),
                                                                                        add(new Address("quae") {{
                                                                                            addressDefinition = "tenetur";
                                                                                        }}),
                                                                                        add(new Address("vel") {{
                                                                                            addressDefinition = "earum";
                                                                                        }}),
                                                                                    }};
                                                                                    tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.URG),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.RST),
                                                                                                add(TCPFlagEnum.CWR),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.RST),
                                                                                                add(TCPFlagEnum.PSH),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.ACK),
                                                                                            }};
                                                                                        }}),
                                                                                    }};
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        customActions = new org.openapis.openapi.models.shared.CustomAction[]{{
                                                            add(new CustomAction(                new ActionDefinition() {{
                                                                                publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                                    add(new Dimension("culpa") {{
                                                                                                        value = "nesciunt";
                                                                                                    }}),
                                                                                                    add(new Dimension("pariatur") {{
                                                                                                        value = "corrupti";
                                                                                                    }}),
                                                                                                    add(new Dimension("hic") {{
                                                                                                        value = "totam";
                                                                                                    }}),
                                                                                                    add(new Dimension("nobis") {{
                                                                                                        value = "exercitationem";
                                                                                                    }}),
                                                                                                }});;
                                                                            }};, "sit") {{
                                                                actionDefinition = new ActionDefinition() {{
                                                                    publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                        add(new Dimension("blanditiis") {{
                                                                                            value = "cum";
                                                                                        }}),
                                                                                    }}) {{
                                                                        dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                                            add(new Dimension("dolore") {{
                                                                                value = "in";
                                                                            }}),
                                                                            add(new Dimension("officiis") {{
                                                                                value = "aliquam";
                                                                            }}),
                                                                            add(new Dimension("ullam") {{
                                                                                value = "temporibus";
                                                                            }}),
                                                                        }};
                                                                    }};
                                                                }};
                                                                actionName = "quas";
                                                            }}),
                                                        }};
                                                    }};;
                                                }};) {{
                                    referenceSets = new ReferenceSets() {{
                                        ipSetReferences = new java.util.HashMap<String, org.openapis.openapi.models.shared.IPSetReference>() {{
                                            put("sed", new IPSetReference() {{
                                                referenceArn = "reiciendis";
                                            }});
                                            put("explicabo", new IPSetReference() {{
                                                referenceArn = "asperiores";
                                            }});
                                            put("facilis", new IPSetReference() {{
                                                referenceArn = "voluptate";
                                            }});
                                        }};
                                    }};;
                                    ruleVariables = new RuleVariables() {{
                                        ipSets = new java.util.HashMap<String, org.openapis.openapi.models.shared.IPSet>() {{
                                            put("ab", new IPSet(                new String[]{{
                                                                add("commodi"),
                                                                add("quidem"),
                                                            }}) {{
                                                definition = new String[]{{
                                                    add("dolore"),
                                                    add("laborum"),
                                                    add("sed"),
                                                }};
                                            }});
                                            put("explicabo", new IPSet(                new String[]{{
                                                                add("sapiente"),
                                                                add("debitis"),
                                                            }}) {{
                                                definition = new String[]{{
                                                    add("unde"),
                                                    add("architecto"),
                                                }};
                                            }});
                                            put("illo", new IPSet(                new String[]{{
                                                                add("provident"),
                                                            }}) {{
                                                definition = new String[]{{
                                                    add("perferendis"),
                                                    add("corrupti"),
                                                    add("maiores"),
                                                    add("incidunt"),
                                                }};
                                            }});
                                        }};
                                        portSets = new java.util.HashMap<String, org.openapis.openapi.models.shared.PortSet>() {{
                                            put("necessitatibus", new PortSet() {{
                                                definition = new String[]{{
                                                    add("ea"),
                                                }};
                                            }});
                                            put("occaecati", new PortSet() {{
                                                definition = new String[]{{
                                                    add("voluptatibus"),
                                                    add("tempora"),
                                                    add("tempora"),
                                                }};
                                            }});
                                        }};
                                    }};;
                                    statefulRuleOptions = new StatefulRuleOptions() {{
                                        ruleOrder = RuleOrderEnum.DEFAULT_ACTION_ORDER;
                                    }};;
                                }};;
                                rules = "reiciendis";
                                sourceMetadata = new SourceMetadata() {{
                                    sourceArn = "ex";
                                    sourceUpdateToken = "sit";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("facilis", "quaerat") {{
                                        key = "officiis";
                                        value = "praesentium";
                                    }}),
                                }};
                            }};, CreateRuleGroupXAmzTargetEnum.NETWORK_FIREWALL20201112_CREATE_RULE_GROUP) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "debitis";
                xAmzDate = "rem";
                xAmzSecurityToken = "sit";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "error";
            }};            

            CreateRuleGroupResponse res = sdk.sdk.createRuleGroup(req);

            if (res.createRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTLSInspectionConfiguration

<p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTLSInspectionConfigurationRequest;
import org.openapis.openapi.models.operations.CreateTLSInspectionConfigurationResponse;
import org.openapis.openapi.models.operations.CreateTLSInspectionConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CreateTLSInspectionConfigurationRequest;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerCertificate;
import org.openapis.openapi.models.shared.ServerCertificateConfiguration;
import org.openapis.openapi.models.shared.ServerCertificateScope;
import org.openapis.openapi.models.shared.TLSInspectionConfiguration;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTLSInspectionConfigurationRequest req = new CreateTLSInspectionConfigurationRequest(                new CreateTLSInspectionConfigurationRequest(                new TLSInspectionConfiguration() {{
                                                serverCertificateConfigurations = new org.openapis.openapi.models.shared.ServerCertificateConfiguration[]{{
                                                    add(new ServerCertificateConfiguration() {{
                                                        scopes = new org.openapis.openapi.models.shared.ServerCertificateScope[]{{
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(48690L, 901483L) {{
                                                                        fromPort = 862319L;
                                                                        toPort = 168576L;
                                                                    }}),
                                                                    add(new PortRange(446135L, 889234L) {{
                                                                        fromPort = 253642L;
                                                                        toPort = 329935L;
                                                                    }}),
                                                                    add(new PortRange(348476L, 510629L) {{
                                                                        fromPort = 104627L;
                                                                        toPort = 512452L;
                                                                    }}),
                                                                    add(new PortRange(680515L, 530089L) {{
                                                                        fromPort = 740098L;
                                                                        toPort = 386827L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("expedita") {{
                                                                        addressDefinition = "hic";
                                                                    }}),
                                                                    add(new Address("neque") {{
                                                                        addressDefinition = "debitis";
                                                                    }}),
                                                                    add(new Address("nostrum") {{
                                                                        addressDefinition = "dolorum";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(676243L),
                                                                    add(548361L),
                                                                    add(879235L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(282699L, 856303L) {{
                                                                        fromPort = 543678L;
                                                                        toPort = 148268L;
                                                                    }}),
                                                                    add(new PortRange(710337L, 299643L) {{
                                                                        fromPort = 30235L;
                                                                        toPort = 635057L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("ipsam") {{
                                                                        addressDefinition = "esse";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(922112L, 361151L) {{
                                                                        fromPort = 530537L;
                                                                        toPort = 558065L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("ex") {{
                                                                        addressDefinition = "blanditiis";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(24313L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(622231L, 8511L) {{
                                                                        fromPort = 342611L;
                                                                        toPort = 906172L;
                                                                    }}),
                                                                    add(new PortRange(209750L, 690894L) {{
                                                                        fromPort = 279068L;
                                                                        toPort = 968865L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("occaecati") {{
                                                                        addressDefinition = "architecto";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(671957L, 724148L) {{
                                                                        fromPort = 695270L;
                                                                        toPort = 539074L;
                                                                    }}),
                                                                    add(new PortRange(2703L, 227084L) {{
                                                                        fromPort = 948861L;
                                                                        toPort = 388867L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("unde") {{
                                                                        addressDefinition = "voluptate";
                                                                    }}),
                                                                    add(new Address("provident") {{
                                                                        addressDefinition = "reiciendis";
                                                                    }}),
                                                                    add(new Address("delectus") {{
                                                                        addressDefinition = "repellendus";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(16871L),
                                                                    add(667285L),
                                                                    add(696483L),
                                                                    add(440666L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(648598L, 333965L) {{
                                                                        fromPort = 685092L;
                                                                        toPort = 509807L;
                                                                    }}),
                                                                    add(new PortRange(919532L, 97243L) {{
                                                                        fromPort = 29100L;
                                                                        toPort = 790840L;
                                                                    }}),
                                                                    add(new PortRange(991142L, 519952L) {{
                                                                        fromPort = 542457L;
                                                                        toPort = 442036L;
                                                                    }}),
                                                                    add(new PortRange(806670L, 90885L) {{
                                                                        fromPort = 383103L;
                                                                        toPort = 693957L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("assumenda") {{
                                                                        addressDefinition = "amet";
                                                                    }}),
                                                                    add(new Address("atque") {{
                                                                        addressDefinition = "ea";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(880107L, 618826L) {{
                                                                        fromPort = 887265L;
                                                                        toPort = 886961L;
                                                                    }}),
                                                                    add(new PortRange(404425L, 980581L) {{
                                                                        fromPort = 328303L;
                                                                        toPort = 133461L;
                                                                    }}),
                                                                    add(new PortRange(621693L, 502721L) {{
                                                                        fromPort = 544647L;
                                                                        toPort = 871786L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("atque") {{
                                                                        addressDefinition = "repudiandae";
                                                                    }}),
                                                                    add(new Address("sunt") {{
                                                                        addressDefinition = "atque";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(680697L),
                                                                    add(829898L),
                                                                    add(287119L),
                                                                    add(968287L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(36033L, 106429L) {{
                                                                        fromPort = 919783L;
                                                                        toPort = 116098L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("laboriosam") {{
                                                                        addressDefinition = "enim";
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                        serverCertificates = new org.openapis.openapi.models.shared.ServerCertificate[]{{
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "a";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new ServerCertificateConfiguration() {{
                                                        scopes = new org.openapis.openapi.models.shared.ServerCertificateScope[]{{
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(580107L, 886305L) {{
                                                                        fromPort = 906355L;
                                                                        toPort = 160467L;
                                                                    }}),
                                                                    add(new PortRange(238043L, 907876L) {{
                                                                        fromPort = 597937L;
                                                                        toPort = 446394L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("fugit") {{
                                                                        addressDefinition = "consequuntur";
                                                                    }}),
                                                                    add(new Address("quis") {{
                                                                        addressDefinition = "id";
                                                                    }}),
                                                                    add(new Address("error") {{
                                                                        addressDefinition = "reprehenderit";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(361306L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(878493L, 39615L) {{
                                                                        fromPort = 910994L;
                                                                        toPort = 247399L;
                                                                    }}),
                                                                    add(new PortRange(517612L, 61078L) {{
                                                                        fromPort = 434156L;
                                                                        toPort = 59944L;
                                                                    }}),
                                                                    add(new PortRange(184362L, 739884L) {{
                                                                        fromPort = 474668L;
                                                                        toPort = 907733L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("ratione") {{
                                                                        addressDefinition = "necessitatibus";
                                                                    }}),
                                                                    add(new Address("distinctio") {{
                                                                        addressDefinition = "laborum";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(320565L, 997963L) {{
                                                                        fromPort = 523006L;
                                                                        toPort = 304446L;
                                                                    }}),
                                                                    add(new PortRange(597303L, 470649L) {{
                                                                        fromPort = 3099L;
                                                                        toPort = 362189L;
                                                                    }}),
                                                                    add(new PortRange(5189L, 979527L) {{
                                                                        fromPort = 649078L;
                                                                        toPort = 378245L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("id") {{
                                                                        addressDefinition = "dolores";
                                                                    }}),
                                                                    add(new Address("dolore") {{
                                                                        addressDefinition = "minima";
                                                                    }}),
                                                                    add(new Address("nesciunt") {{
                                                                        addressDefinition = "dolorum";
                                                                    }}),
                                                                    add(new Address("recusandae") {{
                                                                        addressDefinition = "quae";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(309251L),
                                                                    add(477646L),
                                                                    add(403218L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(890653L, 514513L) {{
                                                                        fromPort = 633062L;
                                                                        toPort = 238413L;
                                                                    }}),
                                                                    add(new PortRange(928219L, 456520L) {{
                                                                        fromPort = 432606L;
                                                                        toPort = 367927L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("eum") {{
                                                                        addressDefinition = "quis";
                                                                    }}),
                                                                    add(new Address("provident") {{
                                                                        addressDefinition = "reiciendis";
                                                                    }}),
                                                                    add(new Address("ullam") {{
                                                                        addressDefinition = "aspernatur";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(652309L, 591027L) {{
                                                                        fromPort = 657020L;
                                                                        toPort = 343392L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("ex") {{
                                                                        addressDefinition = "animi";
                                                                    }}),
                                                                    add(new Address("accusantium") {{
                                                                        addressDefinition = "aliquid";
                                                                    }}),
                                                                    add(new Address("doloribus") {{
                                                                        addressDefinition = "repellat";
                                                                    }}),
                                                                    add(new Address("in") {{
                                                                        addressDefinition = "ullam";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(937636L),
                                                                    add(637583L),
                                                                    add(672041L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(564064L, 889794L) {{
                                                                        fromPort = 266697L;
                                                                        toPort = 976226L;
                                                                    }}),
                                                                    add(new PortRange(113486L, 698249L) {{
                                                                        fromPort = 956933L;
                                                                        toPort = 764562L;
                                                                    }}),
                                                                    add(new PortRange(82057L, 147685L) {{
                                                                        fromPort = 272229L;
                                                                        toPort = 335498L;
                                                                    }}),
                                                                    add(new PortRange(21688L, 241901L) {{
                                                                        fromPort = 765271L;
                                                                        toPort = 62636L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("eius") {{
                                                                        addressDefinition = "eum";
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                        serverCertificates = new org.openapis.openapi.models.shared.ServerCertificate[]{{
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "at";
                                                            }}),
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "impedit";
                                                            }}),
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "eos";
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                            }};, "sapiente") {{
                                description = "eum";
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.CUSTOMER_KMS) {{
                                    keyId = "minima";
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("earum", "soluta") {{
                                        key = "cupiditate";
                                        value = "provident";
                                    }}),
                                }};
                            }};, CreateTLSInspectionConfigurationXAmzTargetEnum.NETWORK_FIREWALL20201112_CREATE_TLS_INSPECTION_CONFIGURATION) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "illum";
                xAmzCredential = "eaque";
                xAmzDate = "earum";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "debitis";
            }};            

            CreateTLSInspectionConfigurationResponse res = sdk.sdk.createTLSInspectionConfiguration(req);

            if (res.createTLSInspectionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFirewall

<p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFirewallRequest;
import org.openapis.openapi.models.operations.DeleteFirewallResponse;
import org.openapis.openapi.models.operations.DeleteFirewallXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFirewallRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFirewallRequest req = new DeleteFirewallRequest(                new DeleteFirewallRequest() {{
                                firewallArn = "porro";
                                firewallName = "suscipit";
                            }};, DeleteFirewallXAmzTargetEnum.NETWORK_FIREWALL20201112_DELETE_FIREWALL) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "cumque";
                xAmzDate = "fuga";
                xAmzSecurityToken = "ratione";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DeleteFirewallResponse res = sdk.sdk.deleteFirewall(req);

            if (res.deleteFirewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFirewallPolicy

Deletes the specified <a>FirewallPolicy</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFirewallPolicyRequest;
import org.openapis.openapi.models.operations.DeleteFirewallPolicyResponse;
import org.openapis.openapi.models.operations.DeleteFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFirewallPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFirewallPolicyRequest req = new DeleteFirewallPolicyRequest(                new DeleteFirewallPolicyRequest() {{
                                firewallPolicyArn = "consequatur";
                                firewallPolicyName = "quasi";
                            }};, DeleteFirewallPolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_DELETE_FIREWALL_POLICY) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "natus";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "adipisci";
                xAmzSignedHeaders = "quasi";
            }};            

            DeleteFirewallPolicyResponse res = sdk.sdk.deleteFirewallPolicy(req);

            if (res.deleteFirewallPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.operations.DeleteResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyRequest("doloribus");, DeleteResourcePolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_DELETE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "tempora";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "dicta";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRuleGroup

Deletes the specified <a>RuleGroup</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRuleGroupRequest;
import org.openapis.openapi.models.operations.DeleteRuleGroupResponse;
import org.openapis.openapi.models.operations.DeleteRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteRuleGroupRequest;
import org.openapis.openapi.models.shared.RuleGroupTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteRuleGroupRequest req = new DeleteRuleGroupRequest(                new DeleteRuleGroupRequest() {{
                                ruleGroupArn = "esse";
                                ruleGroupName = "praesentium";
                                type = RuleGroupTypeEnum.STATEFUL;
                            }};, DeleteRuleGroupXAmzTargetEnum.NETWORK_FIREWALL20201112_DELETE_RULE_GROUP) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "vel";
                xAmzCredential = "architecto";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "odio";
            }};            

            DeleteRuleGroupResponse res = sdk.sdk.deleteRuleGroup(req);

            if (res.deleteRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTLSInspectionConfiguration

Deletes the specified <a>TLSInspectionConfiguration</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTLSInspectionConfigurationRequest;
import org.openapis.openapi.models.operations.DeleteTLSInspectionConfigurationResponse;
import org.openapis.openapi.models.operations.DeleteTLSInspectionConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteTLSInspectionConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTLSInspectionConfigurationRequest req = new DeleteTLSInspectionConfigurationRequest(                new DeleteTLSInspectionConfigurationRequest() {{
                                tlsInspectionConfigurationArn = "esse";
                                tlsInspectionConfigurationName = "ex";
                            }};, DeleteTLSInspectionConfigurationXAmzTargetEnum.NETWORK_FIREWALL20201112_DELETE_TLS_INSPECTION_CONFIGURATION) {{
                xAmzAlgorithm = "consectetur";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "ipsa";
                xAmzDate = "laborum";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "fugiat";
            }};            

            DeleteTLSInspectionConfigurationResponse res = sdk.sdk.deleteTLSInspectionConfiguration(req);

            if (res.deleteTLSInspectionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFirewall

Returns the data objects for the specified firewall. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFirewallRequest;
import org.openapis.openapi.models.operations.DescribeFirewallResponse;
import org.openapis.openapi.models.operations.DescribeFirewallXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFirewallRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFirewallRequest req = new DescribeFirewallRequest(                new DescribeFirewallRequest() {{
                                firewallArn = "aliquid";
                                firewallName = "officia";
                            }};, DescribeFirewallXAmzTargetEnum.NETWORK_FIREWALL20201112_DESCRIBE_FIREWALL) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "perferendis";
                xAmzDate = "eum";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "id";
            }};            

            DescribeFirewallResponse res = sdk.sdk.describeFirewall(req);

            if (res.describeFirewallResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeFirewallPolicy

Returns the data objects for the specified firewall policy. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeFirewallPolicyRequest;
import org.openapis.openapi.models.operations.DescribeFirewallPolicyResponse;
import org.openapis.openapi.models.operations.DescribeFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeFirewallPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeFirewallPolicyRequest req = new DescribeFirewallPolicyRequest(                new DescribeFirewallPolicyRequest() {{
                                firewallPolicyArn = "error";
                                firewallPolicyName = "possimus";
                            }};, DescribeFirewallPolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_DESCRIBE_FIREWALL_POLICY) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "laborum";
                xAmzDate = "libero";
                xAmzSecurityToken = "ad";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "enim";
            }};            

            DescribeFirewallPolicyResponse res = sdk.sdk.describeFirewallPolicy(req);

            if (res.describeFirewallPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeLoggingConfiguration

Returns the logging configuration for the specified firewall. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeLoggingConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeLoggingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeLoggingConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeLoggingConfigurationRequest req = new DescribeLoggingConfigurationRequest(                new DescribeLoggingConfigurationRequest() {{
                                firewallArn = "repellendus";
                                firewallName = "ex";
                            }};, DescribeLoggingConfigurationXAmzTargetEnum.NETWORK_FIREWALL20201112_DESCRIBE_LOGGING_CONFIGURATION) {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "ex";
                xAmzCredential = "ut";
                xAmzDate = "ad";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "molestias";
            }};            

            DescribeLoggingConfigurationResponse res = sdk.sdk.describeLoggingConfiguration(req);

            if (res.describeLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeResourcePolicy

Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeResourcePolicyRequest;
import org.openapis.openapi.models.operations.DescribeResourcePolicyResponse;
import org.openapis.openapi.models.operations.DescribeResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeResourcePolicyRequest req = new DescribeResourcePolicyRequest(                new DescribeResourcePolicyRequest("aliquid");, DescribeResourcePolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_DESCRIBE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "beatae";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "omnis";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "est";
                xAmzSignedHeaders = "culpa";
            }};            

            DescribeResourcePolicyResponse res = sdk.sdk.describeResourcePolicy(req);

            if (res.describeResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRuleGroup

Returns the data objects for the specified rule group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRuleGroupRequest;
import org.openapis.openapi.models.operations.DescribeRuleGroupResponse;
import org.openapis.openapi.models.operations.DescribeRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRuleGroupRequest;
import org.openapis.openapi.models.shared.RuleGroupTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRuleGroupRequest req = new DescribeRuleGroupRequest(                new DescribeRuleGroupRequest() {{
                                ruleGroupArn = "sapiente";
                                ruleGroupName = "officiis";
                                type = RuleGroupTypeEnum.STATELESS;
                            }};, DescribeRuleGroupXAmzTargetEnum.NETWORK_FIREWALL20201112_DESCRIBE_RULE_GROUP) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "debitis";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "alias";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "earum";
            }};            

            DescribeRuleGroupResponse res = sdk.sdk.describeRuleGroup(req);

            if (res.describeRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeRuleGroupMetadata

High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeRuleGroupMetadataRequest;
import org.openapis.openapi.models.operations.DescribeRuleGroupMetadataResponse;
import org.openapis.openapi.models.operations.DescribeRuleGroupMetadataXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeRuleGroupMetadataRequest;
import org.openapis.openapi.models.shared.RuleGroupTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ex") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeRuleGroupMetadataRequest req = new DescribeRuleGroupMetadataRequest(                new DescribeRuleGroupMetadataRequest() {{
                                ruleGroupArn = "sapiente";
                                ruleGroupName = "rem";
                                type = RuleGroupTypeEnum.STATEFUL;
                            }};, DescribeRuleGroupMetadataXAmzTargetEnum.NETWORK_FIREWALL20201112_DESCRIBE_RULE_GROUP_METADATA) {{
                xAmzAlgorithm = "nemo";
                xAmzContentSha256 = "asperiores";
                xAmzCredential = "ratione";
                xAmzDate = "ullam";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "totam";
            }};            

            DescribeRuleGroupMetadataResponse res = sdk.sdk.describeRuleGroupMetadata(req);

            if (res.describeRuleGroupMetadataResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTLSInspectionConfiguration

Returns the data objects for the specified TLS inspection configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTLSInspectionConfigurationRequest;
import org.openapis.openapi.models.operations.DescribeTLSInspectionConfigurationResponse;
import org.openapis.openapi.models.operations.DescribeTLSInspectionConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTLSInspectionConfigurationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTLSInspectionConfigurationRequest req = new DescribeTLSInspectionConfigurationRequest(                new DescribeTLSInspectionConfigurationRequest() {{
                                tlsInspectionConfigurationArn = "quibusdam";
                                tlsInspectionConfigurationName = "nam";
                            }};, DescribeTLSInspectionConfigurationXAmzTargetEnum.NETWORK_FIREWALL20201112_DESCRIBE_TLS_INSPECTION_CONFIGURATION) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "dolor";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "inventore";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "veritatis";
            }};            

            DescribeTLSInspectionConfigurationResponse res = sdk.sdk.describeTLSInspectionConfiguration(req);

            if (res.describeTLSInspectionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateSubnets

Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateSubnetsRequest;
import org.openapis.openapi.models.operations.DisassociateSubnetsResponse;
import org.openapis.openapi.models.operations.DisassociateSubnetsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateSubnetsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateSubnetsRequest req = new DisassociateSubnetsRequest(                new DisassociateSubnetsRequest(                new String[]{{
                                                add("consequatur"),
                                            }}) {{
                                firewallArn = "architecto";
                                firewallName = "sit";
                                updateToken = "modi";
                            }};, DisassociateSubnetsXAmzTargetEnum.NETWORK_FIREWALL20201112_DISASSOCIATE_SUBNETS) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "ab";
                xAmzCredential = "laudantium";
                xAmzDate = "quae";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ipsam";
            }};            

            DisassociateSubnetsResponse res = sdk.sdk.disassociateSubnets(req);

            if (res.disassociateSubnetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallPolicies

Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallPoliciesRequest;
import org.openapis.openapi.models.operations.ListFirewallPoliciesResponse;
import org.openapis.openapi.models.operations.ListFirewallPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFirewallPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallPoliciesRequest req = new ListFirewallPoliciesRequest(                new ListFirewallPoliciesRequest() {{
                                maxResults = 55107L;
                                nextToken = "quas";
                            }};, ListFirewallPoliciesXAmzTargetEnum.NETWORK_FIREWALL20201112_LIST_FIREWALL_POLICIES) {{
                maxResults = "eveniet";
                nextToken = "impedit";
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "necessitatibus";
                xAmzDate = "sed";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "nesciunt";
                xAmzSignedHeaders = "expedita";
            }};            

            ListFirewallPoliciesResponse res = sdk.sdk.listFirewallPolicies(req);

            if (res.listFirewallPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewalls

<p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallsRequest;
import org.openapis.openapi.models.operations.ListFirewallsResponse;
import org.openapis.openapi.models.operations.ListFirewallsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFirewallsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallsRequest req = new ListFirewallsRequest(                new ListFirewallsRequest() {{
                                maxResults = 426943L;
                                nextToken = "voluptatum";
                                vpcIds = new String[]{{
                                    add("exercitationem"),
                                    add("ab"),
                                }};
                            }};, ListFirewallsXAmzTargetEnum.NETWORK_FIREWALL20201112_LIST_FIREWALLS) {{
                maxResults = "porro";
                nextToken = "autem";
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "recusandae";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "exercitationem";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            ListFirewallsResponse res = sdk.sdk.listFirewalls(req);

            if (res.listFirewallsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listRuleGroups

Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListRuleGroupsRequest;
import org.openapis.openapi.models.operations.ListRuleGroupsResponse;
import org.openapis.openapi.models.operations.ListRuleGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListRuleGroupsRequest;
import org.openapis.openapi.models.shared.ResourceManagedStatusEnum;
import org.openapis.openapi.models.shared.ResourceManagedTypeEnum;
import org.openapis.openapi.models.shared.RuleGroupTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListRuleGroupsRequest req = new ListRuleGroupsRequest(                new ListRuleGroupsRequest() {{
                                managedType = ResourceManagedTypeEnum.AWS_MANAGED_THREAT_SIGNATURES;
                                maxResults = 871103L;
                                nextToken = "vero";
                                scope = ResourceManagedStatusEnum.ACCOUNT;
                                type = RuleGroupTypeEnum.STATEFUL;
                            }};, ListRuleGroupsXAmzTargetEnum.NETWORK_FIREWALL20201112_LIST_RULE_GROUPS) {{
                maxResults = "sequi";
                nextToken = "doloribus";
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "optio";
                xAmzCredential = "occaecati";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "officia";
            }};            

            ListRuleGroupsResponse res = sdk.sdk.listRuleGroups(req);

            if (res.listRuleGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTLSInspectionConfigurations

Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTLSInspectionConfigurationsRequest;
import org.openapis.openapi.models.operations.ListTLSInspectionConfigurationsResponse;
import org.openapis.openapi.models.operations.ListTLSInspectionConfigurationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTLSInspectionConfigurationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTLSInspectionConfigurationsRequest req = new ListTLSInspectionConfigurationsRequest(                new ListTLSInspectionConfigurationsRequest() {{
                                maxResults = 254025L;
                                nextToken = "nemo";
                            }};, ListTLSInspectionConfigurationsXAmzTargetEnum.NETWORK_FIREWALL20201112_LIST_TLS_INSPECTION_CONFIGURATIONS) {{
                maxResults = "quos";
                nextToken = "eius";
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "nesciunt";
                xAmzDate = "fuga";
                xAmzSecurityToken = "laudantium";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "quasi";
            }};            

            ListTLSInspectionConfigurationsResponse res = sdk.sdk.listTLSInspectionConfigurations(req);

            if (res.listTLSInspectionConfigurationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("fugiat") {{
                                maxResults = 117380L;
                                nextToken = "nisi";
                            }};, ListTagsForResourceXAmzTargetEnum.NETWORK_FIREWALL20201112_LIST_TAGS_FOR_RESOURCE) {{
                maxResults = "consequuntur";
                nextToken = "consectetur";
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "reiciendis";
                xAmzDate = "soluta";
                xAmzSecurityToken = "alias";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "eos";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

<p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.operations.PutResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourcePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyRequest("iste", "magni");, PutResourcePolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_PUT_RESOURCE_POLICY) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "accusamus";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "delectus";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("praesentium",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("quos", "commodi") {{
                                                    key = "magnam";
                                                    value = "temporibus";
                                                }}),
                                                add(new Tag("totam", "earum") {{
                                                    key = "itaque";
                                                    value = "commodi";
                                                }}),
                                                add(new Tag("vero", "voluptatem") {{
                                                    key = "modi";
                                                    value = "nam";
                                                }}),
                                                add(new Tag("alias", "quasi") {{
                                                    key = "ipsam";
                                                    value = "vel";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.NETWORK_FIREWALL20201112_TAG_RESOURCE) {{
                xAmzAlgorithm = "non";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "enim";
                xAmzDate = "sint";
                xAmzSecurityToken = "nulla";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "esse";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("reprehenderit",                 new String[]{{
                                                add("quis"),
                                                add("sint"),
                                                add("accusamus"),
                                            }});, UntagResourceXAmzTargetEnum.NETWORK_FIREWALL20201112_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "hic";
                xAmzCredential = "necessitatibus";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "ex";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "debitis";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallDeleteProtection

Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallDeleteProtectionRequest;
import org.openapis.openapi.models.operations.UpdateFirewallDeleteProtectionResponse;
import org.openapis.openapi.models.operations.UpdateFirewallDeleteProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallDeleteProtectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallDeleteProtectionRequest req = new UpdateFirewallDeleteProtectionRequest(                new UpdateFirewallDeleteProtectionRequest(false) {{
                                firewallArn = "quae";
                                firewallName = "minus";
                                updateToken = "fuga";
                            }};, UpdateFirewallDeleteProtectionXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_FIREWALL_DELETE_PROTECTION) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "velit";
                xAmzDate = "atque";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "impedit";
                xAmzSignedHeaders = "magni";
            }};            

            UpdateFirewallDeleteProtectionResponse res = sdk.sdk.updateFirewallDeleteProtection(req);

            if (res.updateFirewallDeleteProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallDescription

Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallDescriptionRequest;
import org.openapis.openapi.models.operations.UpdateFirewallDescriptionResponse;
import org.openapis.openapi.models.operations.UpdateFirewallDescriptionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallDescriptionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallDescriptionRequest req = new UpdateFirewallDescriptionRequest(                new UpdateFirewallDescriptionRequest() {{
                                description = "repudiandae";
                                firewallArn = "nam";
                                firewallName = "dolore";
                                updateToken = "iusto";
                            }};, UpdateFirewallDescriptionXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_FIREWALL_DESCRIPTION) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "sequi";
                xAmzCredential = "dignissimos";
                xAmzDate = "neque";
                xAmzSecurityToken = "quo";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "quibusdam";
            }};            

            UpdateFirewallDescriptionResponse res = sdk.sdk.updateFirewallDescription(req);

            if (res.updateFirewallDescriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallEncryptionConfiguration

A complex type that contains settings for encryption of your firewall resources.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallEncryptionConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateFirewallEncryptionConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateFirewallEncryptionConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallEncryptionConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallEncryptionConfigurationRequest req = new UpdateFirewallEncryptionConfigurationRequest(                new UpdateFirewallEncryptionConfigurationRequest() {{
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.CUSTOMER_KMS) {{
                                    keyId = "voluptatibus";
                                }};;
                                firewallArn = "vel";
                                firewallName = "magnam";
                                updateToken = "quibusdam";
                            }};, UpdateFirewallEncryptionConfigurationXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_FIREWALL_ENCRYPTION_CONFIGURATION) {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "facere";
                xAmzCredential = "libero";
                xAmzDate = "architecto";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "porro";
            }};            

            UpdateFirewallEncryptionConfigurationResponse res = sdk.sdk.updateFirewallEncryptionConfiguration(req);

            if (res.updateFirewallEncryptionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallPolicy

Updates the properties of the specified firewall policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallPolicyRequest;
import org.openapis.openapi.models.operations.UpdateFirewallPolicyResponse;
import org.openapis.openapi.models.operations.UpdateFirewallPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionDefinition;
import org.openapis.openapi.models.shared.CustomAction;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.FirewallPolicy;
import org.openapis.openapi.models.shared.OverrideActionEnum;
import org.openapis.openapi.models.shared.PublishMetricAction;
import org.openapis.openapi.models.shared.RuleOrderEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StatefulEngineOptions;
import org.openapis.openapi.models.shared.StatefulRuleGroupOverride;
import org.openapis.openapi.models.shared.StatefulRuleGroupReference;
import org.openapis.openapi.models.shared.StatelessRuleGroupReference;
import org.openapis.openapi.models.shared.StreamExceptionPolicyEnum;
import org.openapis.openapi.models.shared.UpdateFirewallPolicyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallPolicyRequest req = new UpdateFirewallPolicyRequest(                new UpdateFirewallPolicyRequest(                new FirewallPolicy(                new String[]{{
                                                                add("illo"),
                                                            }},                 new String[]{{
                                                                add("vel"),
                                                            }}) {{
                                                statefulDefaultActions = new String[]{{
                                                    add("beatae"),
                                                    add("vero"),
                                                }};
                                                statefulEngineOptions = new StatefulEngineOptions() {{
                                                    ruleOrder = RuleOrderEnum.STRICT_ORDER;
                                                    streamExceptionPolicy = StreamExceptionPolicyEnum.DROP;
                                                }};;
                                                statefulRuleGroupReferences = new org.openapis.openapi.models.shared.StatefulRuleGroupReference[]{{
                                                    add(new StatefulRuleGroupReference("earum") {{
                                                        override = new StatefulRuleGroupOverride() {{
                                                            action = OverrideActionEnum.DROP_TO_ALERT;
                                                        }};
                                                        priority = 284086L;
                                                        resourceArn = "perspiciatis";
                                                    }}),
                                                }};
                                                statelessCustomActions = new org.openapis.openapi.models.shared.CustomAction[]{{
                                                    add(new CustomAction(                new ActionDefinition() {{
                                                                        publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                            add(new Dimension("ea") {{
                                                                                                value = "recusandae";
                                                                                            }}),
                                                                                            add(new Dimension("voluptas") {{
                                                                                                value = "quidem";
                                                                                            }}),
                                                                                            add(new Dimension("placeat") {{
                                                                                                value = "facilis";
                                                                                            }}),
                                                                                        }});;
                                                                    }};, "perspiciatis") {{
                                                        actionDefinition = new ActionDefinition() {{
                                                            publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                add(new Dimension("iusto") {{
                                                                                    value = "dolor";
                                                                                }}),
                                                                                add(new Dimension("doloremque") {{
                                                                                    value = "sit";
                                                                                }}),
                                                                            }}) {{
                                                                dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                                    add(new Dimension("iste") {{
                                                                        value = "voluptatibus";
                                                                    }}),
                                                                    add(new Dimension("alias") {{
                                                                        value = "itaque";
                                                                    }}),
                                                                    add(new Dimension("itaque") {{
                                                                        value = "nisi";
                                                                    }}),
                                                                    add(new Dimension("laborum") {{
                                                                        value = "velit";
                                                                    }}),
                                                                }};
                                                            }};
                                                        }};
                                                        actionName = "consequatur";
                                                    }}),
                                                }};
                                                statelessRuleGroupReferences = new org.openapis.openapi.models.shared.StatelessRuleGroupReference[]{{
                                                    add(new StatelessRuleGroupReference(455579L, "ullam") {{
                                                        priority = 537236L;
                                                        resourceArn = "a";
                                                    }}),
                                                    add(new StatelessRuleGroupReference(654082L, "impedit") {{
                                                        priority = 600193L;
                                                        resourceArn = "necessitatibus";
                                                    }}),
                                                    add(new StatelessRuleGroupReference(668234L, "error") {{
                                                        priority = 373040L;
                                                        resourceArn = "corporis";
                                                    }}),
                                                }};
                                                tlsInspectionConfigurationArn = "esse";
                                            }};, "labore") {{
                                description = "veritatis";
                                dryRun = false;
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.AWS_OWNED_KMS_KEY) {{
                                    keyId = "consectetur";
                                }};;
                                firewallPolicyArn = "vitae";
                                firewallPolicyName = "inventore";
                            }};, UpdateFirewallPolicyXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_FIREWALL_POLICY) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "ad";
                xAmzCredential = "qui";
                xAmzDate = "iste";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "soluta";
            }};            

            UpdateFirewallPolicyResponse res = sdk.sdk.updateFirewallPolicy(req);

            if (res.updateFirewallPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallPolicyChangeProtection

Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallPolicyChangeProtectionRequest;
import org.openapis.openapi.models.operations.UpdateFirewallPolicyChangeProtectionResponse;
import org.openapis.openapi.models.operations.UpdateFirewallPolicyChangeProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallPolicyChangeProtectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallPolicyChangeProtectionRequest req = new UpdateFirewallPolicyChangeProtectionRequest(                new UpdateFirewallPolicyChangeProtectionRequest(false) {{
                                firewallArn = "rem";
                                firewallName = "dolorum";
                                updateToken = "odio";
                            }};, UpdateFirewallPolicyChangeProtectionXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_FIREWALL_POLICY_CHANGE_PROTECTION) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "alias";
                xAmzCredential = "magni";
                xAmzDate = "vel";
                xAmzSecurityToken = "quae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "modi";
            }};            

            UpdateFirewallPolicyChangeProtectionResponse res = sdk.sdk.updateFirewallPolicyChangeProtection(req);

            if (res.updateFirewallPolicyChangeProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLoggingConfiguration

<p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateLoggingConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.LogDestinationConfig;
import org.openapis.openapi.models.shared.LogDestinationTypeEnum;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.LoggingConfiguration;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateLoggingConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLoggingConfigurationRequest req = new UpdateLoggingConfigurationRequest(                new UpdateLoggingConfigurationRequest() {{
                                firewallArn = "exercitationem";
                                firewallName = "itaque";
                                loggingConfiguration = new LoggingConfiguration(                new org.openapis.openapi.models.shared.LogDestinationConfig[]{{
                                                    add(new LogDestinationConfig(                new java.util.HashMap<String, String>() {{
                                                                        put("quia", "nostrum");
                                                                    }}, LogDestinationTypeEnum.CLOUD_WATCH_LOGS, LogTypeEnum.FLOW) {{
                                                        logDestination = new java.util.HashMap<String, String>() {{
                                                            put("unde", "nulla");
                                                        }};
                                                        logDestinationType = LogDestinationTypeEnum.KINESIS_DATA_FIREHOSE;
                                                        logType = LogTypeEnum.FLOW;
                                                    }}),
                                                }});;
                            }};, UpdateLoggingConfigurationXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_LOGGING_CONFIGURATION) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "id";
                xAmzCredential = "libero";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "officia";
                xAmzSignature = "quos";
                xAmzSignedHeaders = "placeat";
            }};            

            UpdateLoggingConfigurationResponse res = sdk.sdk.updateLoggingConfiguration(req);

            if (res.updateLoggingConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateRuleGroup

<p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRuleGroupRequest;
import org.openapis.openapi.models.operations.UpdateRuleGroupResponse;
import org.openapis.openapi.models.operations.UpdateRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionDefinition;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.CustomAction;
import org.openapis.openapi.models.shared.Dimension;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.GeneratedRulesTypeEnum;
import org.openapis.openapi.models.shared.Header;
import org.openapis.openapi.models.shared.IPSet;
import org.openapis.openapi.models.shared.IPSetReference;
import org.openapis.openapi.models.shared.MatchAttributes;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.PortSet;
import org.openapis.openapi.models.shared.PublishMetricAction;
import org.openapis.openapi.models.shared.ReferenceSets;
import org.openapis.openapi.models.shared.RuleDefinition;
import org.openapis.openapi.models.shared.RuleGroup;
import org.openapis.openapi.models.shared.RuleGroupTypeEnum;
import org.openapis.openapi.models.shared.RuleOption;
import org.openapis.openapi.models.shared.RuleOrderEnum;
import org.openapis.openapi.models.shared.RuleVariables;
import org.openapis.openapi.models.shared.RulesSource;
import org.openapis.openapi.models.shared.RulesSourceList;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceMetadata;
import org.openapis.openapi.models.shared.StatefulActionEnum;
import org.openapis.openapi.models.shared.StatefulRule;
import org.openapis.openapi.models.shared.StatefulRuleDirectionEnum;
import org.openapis.openapi.models.shared.StatefulRuleOptions;
import org.openapis.openapi.models.shared.StatefulRuleProtocolEnum;
import org.openapis.openapi.models.shared.StatelessRule;
import org.openapis.openapi.models.shared.StatelessRulesAndCustomActions;
import org.openapis.openapi.models.shared.TCPFlagEnum;
import org.openapis.openapi.models.shared.TCPFlagField;
import org.openapis.openapi.models.shared.TargetTypeEnum;
import org.openapis.openapi.models.shared.UpdateRuleGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRuleGroupRequest req = new UpdateRuleGroupRequest(                new UpdateRuleGroupRequest("iusto") {{
                                description = "ipsa";
                                dryRun = false;
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.AWS_OWNED_KMS_KEY) {{
                                    keyId = "inventore";
                                }};;
                                ruleGroup = new RuleGroup(                new RulesSource() {{
                                                    rulesSourceList = new RulesSourceList(GeneratedRulesTypeEnum.ALLOWLIST,                 new org.openapis.openapi.models.shared.TargetTypeEnum[]{{
                                                                        add(TargetTypeEnum.TLS_SNI),
                                                                        add(TargetTypeEnum.HTTP_HOST),
                                                                        add(TargetTypeEnum.HTTP_HOST),
                                                                    }},                 new String[]{{
                                                                        add("autem"),
                                                                    }});;
                                                    rulesString = "esse";
                                                    statefulRules = new org.openapis.openapi.models.shared.StatefulRule[]{{
                                                        add(new StatefulRule(StatefulActionEnum.ALERT,                 new Header("repudiandae", "accusantium", StatefulRuleDirectionEnum.ANY, StatefulRuleProtocolEnum.TFTP, "eos", "quibusdam");,                 new org.openapis.openapi.models.shared.RuleOption[]{{
                                                                            add(new RuleOption("corporis") {{
                                                                                keyword = "praesentium";
                                                                                settings = new String[]{{
                                                                                    add("explicabo"),
                                                                                }};
                                                                            }}),
                                                                            add(new RuleOption("quidem") {{
                                                                                keyword = "error";
                                                                                settings = new String[]{{
                                                                                    add("adipisci"),
                                                                                    add("recusandae"),
                                                                                    add("similique"),
                                                                                    add("ut"),
                                                                                }};
                                                                            }}),
                                                                        }}) {{
                                                            action = StatefulActionEnum.REJECT;
                                                            header = new Header("accusamus", "necessitatibus", StatefulRuleDirectionEnum.ANY, StatefulRuleProtocolEnum.SSH, "ea", "autem") {{
                                                                destination = "beatae";
                                                                destinationPort = "est";
                                                                direction = StatefulRuleDirectionEnum.ANY;
                                                                protocol = StatefulRuleProtocolEnum.SSH;
                                                                source = "molestiae";
                                                                sourcePort = "provident";
                                                            }};
                                                            ruleOptions = new org.openapis.openapi.models.shared.RuleOption[]{{
                                                                add(new RuleOption("cum") {{
                                                                    keyword = "rerum";
                                                                    settings = new String[]{{
                                                                        add("corporis"),
                                                                        add("officiis"),
                                                                        add("voluptatibus"),
                                                                    }};
                                                                }}),
                                                                add(new RuleOption("quidem") {{
                                                                    keyword = "at";
                                                                    settings = new String[]{{
                                                                        add("quia"),
                                                                    }};
                                                                }}),
                                                            }};
                                                        }}),
                                                    }};
                                                    statelessRulesAndCustomActions = new StatelessRulesAndCustomActions(                new org.openapis.openapi.models.shared.StatelessRule[]{{
                                                                        add(new StatelessRule(705710L,                 new RuleDefinition(                new String[]{{
                                                                                                            add("nisi"),
                                                                                                            add("voluptatibus"),
                                                                                                            add("quaerat"),
                                                                                                        }},                 new MatchAttributes() {{
                                                                                                            destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(335977L, 391933L) {{
                                                                                                                    fromPort = 718627L;
                                                                                                                    toPort = 392430L;
                                                                                                                }}),
                                                                                                                add(new PortRange(815200L, 706061L) {{
                                                                                                                    fromPort = 727771L;
                                                                                                                    toPort = 794507L;
                                                                                                                }}),
                                                                                                                add(new PortRange(973819L, 974589L) {{
                                                                                                                    fromPort = 217663L;
                                                                                                                    toPort = 318917L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("labore") {{
                                                                                                                    addressDefinition = "debitis";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            protocols = new Long[]{{
                                                                                                                add(179795L),
                                                                                                                add(440777L),
                                                                                                                add(345506L),
                                                                                                            }};
                                                                                                            sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(522176L, 753890L) {{
                                                                                                                    fromPort = 480061L;
                                                                                                                    toPort = 664965L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("officiis") {{
                                                                                                                    addressDefinition = "unde";
                                                                                                                }}),
                                                                                                                add(new Address("dolor") {{
                                                                                                                    addressDefinition = "ducimus";
                                                                                                                }}),
                                                                                                                add(new Address("error") {{
                                                                                                                    addressDefinition = "dicta";
                                                                                                                }}),
                                                                                                                add(new Address("vitae") {{
                                                                                                                    addressDefinition = "porro";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.PSH),
                                                                                                                                    add(TCPFlagEnum.PSH),
                                                                                                                                    add(TCPFlagEnum.URG),
                                                                                                                                    add(TCPFlagEnum.FIN),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.ECE),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.CWR),
                                                                                                                                    add(TCPFlagEnum.PSH),
                                                                                                                                    add(TCPFlagEnum.ACK),
                                                                                                                                    add(TCPFlagEnum.RST),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                            }};
                                                                                                        }};);) {{
                                                                            priority = 106255L;
                                                                            ruleDefinition = new RuleDefinition(                new String[]{{
                                                                                                add("veniam"),
                                                                                                add("animi"),
                                                                                                add("dolores"),
                                                                                                add("nam"),
                                                                                            }},                 new MatchAttributes() {{
                                                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(748224L, 56877L) {{
                                                                                                        fromPort = 164488L;
                                                                                                        toPort = 899867L;
                                                                                                    }}),
                                                                                                }};
                                                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("veritatis") {{
                                                                                                        addressDefinition = "maiores";
                                                                                                    }}),
                                                                                                    add(new Address("laboriosam") {{
                                                                                                        addressDefinition = "quasi";
                                                                                                    }}),
                                                                                                }};
                                                                                                protocols = new Long[]{{
                                                                                                    add(729448L),
                                                                                                    add(566506L),
                                                                                                    add(578210L),
                                                                                                    add(367917L),
                                                                                                }};
                                                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(757364L, 574032L) {{
                                                                                                        fromPort = 342342L;
                                                                                                        toPort = 988749L;
                                                                                                    }}),
                                                                                                    add(new PortRange(657319L, 559774L) {{
                                                                                                        fromPort = 314573L;
                                                                                                        toPort = 944950L;
                                                                                                    }}),
                                                                                                }};
                                                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("odio") {{
                                                                                                        addressDefinition = "molestias";
                                                                                                    }}),
                                                                                                    add(new Address("saepe") {{
                                                                                                        addressDefinition = "eaque";
                                                                                                    }}),
                                                                                                    add(new Address("quos") {{
                                                                                                        addressDefinition = "architecto";
                                                                                                    }}),
                                                                                                }};
                                                                                                tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                        }};
                                                                                                    }}),
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                            add(TCPFlagEnum.RST),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                        }};
                                                                                                    }}),
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.FIN),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                        }};
                                                                                                    }}),
                                                                                                }};
                                                                                            }};) {{
                                                                                actions = new String[]{{
                                                                                    add("molestiae"),
                                                                                    add("delectus"),
                                                                                    add("cupiditate"),
                                                                                }};
                                                                                matchAttributes = new MatchAttributes() {{
                                                                                    destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(201010L, 873557L) {{
                                                                                            fromPort = 253625L;
                                                                                            toPort = 256916L;
                                                                                        }}),
                                                                                    }};
                                                                                    destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("optio") {{
                                                                                            addressDefinition = "dignissimos";
                                                                                        }}),
                                                                                        add(new Address("corporis") {{
                                                                                            addressDefinition = "necessitatibus";
                                                                                        }}),
                                                                                        add(new Address("expedita") {{
                                                                                            addressDefinition = "qui";
                                                                                        }}),
                                                                                    }};
                                                                                    protocols = new Long[]{{
                                                                                        add(587375L),
                                                                                        add(326269L),
                                                                                        add(809594L),
                                                                                    }};
                                                                                    sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(796397L, 433077L) {{
                                                                                            fromPort = 204072L;
                                                                                            toPort = 446877L;
                                                                                        }}),
                                                                                        add(new PortRange(298264L, 914971L) {{
                                                                                            fromPort = 266408L;
                                                                                            toPort = 357347L;
                                                                                        }}),
                                                                                    }};
                                                                                    sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("aperiam") {{
                                                                                            addressDefinition = "tempore";
                                                                                        }}),
                                                                                        add(new Address("ratione") {{
                                                                                            addressDefinition = "libero";
                                                                                        }}),
                                                                                        add(new Address("totam") {{
                                                                                            addressDefinition = "labore";
                                                                                        }}),
                                                                                        add(new Address("voluptas") {{
                                                                                            addressDefinition = "occaecati";
                                                                                        }}),
                                                                                    }};
                                                                                    tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.ECE),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.RST),
                                                                                                add(TCPFlagEnum.URG),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.RST),
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.PSH),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.PSH),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.URG),
                                                                                                add(TCPFlagEnum.ECE),
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.RST),
                                                                                            }};
                                                                                        }}),
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.URG),
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.RST),
                                                                                                add(TCPFlagEnum.PSH),
                                                                                                add(TCPFlagEnum.SYN),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.FIN),
                                                                                                add(TCPFlagEnum.ACK),
                                                                                            }};
                                                                                        }}),
                                                                                    }};
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                        add(new StatelessRule(839807L,                 new RuleDefinition(                new String[]{{
                                                                                                            add("amet"),
                                                                                                            add("tenetur"),
                                                                                                            add("aspernatur"),
                                                                                                        }},                 new MatchAttributes() {{
                                                                                                            destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(670762L, 490420L) {{
                                                                                                                    fromPort = 931077L;
                                                                                                                    toPort = 848346L;
                                                                                                                }}),
                                                                                                                add(new PortRange(232383L, 995816L) {{
                                                                                                                    fromPort = 876285L;
                                                                                                                    toPort = 185348L;
                                                                                                                }}),
                                                                                                                add(new PortRange(350325L, 471457L) {{
                                                                                                                    fromPort = 128696L;
                                                                                                                    toPort = 129355L;
                                                                                                                }}),
                                                                                                                add(new PortRange(72754L, 943851L) {{
                                                                                                                    fromPort = 252700L;
                                                                                                                    toPort = 68093L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("non") {{
                                                                                                                    addressDefinition = "delectus";
                                                                                                                }}),
                                                                                                                add(new Address("in") {{
                                                                                                                    addressDefinition = "distinctio";
                                                                                                                }}),
                                                                                                                add(new Address("labore") {{
                                                                                                                    addressDefinition = "exercitationem";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            protocols = new Long[]{{
                                                                                                                add(921193L),
                                                                                                                add(265303L),
                                                                                                            }};
                                                                                                            sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                                add(new PortRange(525809L, 44016L) {{
                                                                                                                    fromPort = 127294L;
                                                                                                                    toPort = 879857L;
                                                                                                                }}),
                                                                                                                add(new PortRange(316730L, 452730L) {{
                                                                                                                    fromPort = 141817L;
                                                                                                                    toPort = 535802L;
                                                                                                                }}),
                                                                                                            }};
                                                                                                            sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                                add(new Address("libero") {{
                                                                                                                    addressDefinition = "minima";
                                                                                                                }}),
                                                                                                                add(new Address("sit") {{
                                                                                                                    addressDefinition = "magnam";
                                                                                                                }}),
                                                                                                                add(new Address("eum") {{
                                                                                                                    addressDefinition = "modi";
                                                                                                                }}),
                                                                                                            }};
                                                                                                            tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                                add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                                    add(TCPFlagEnum.RST),
                                                                                                                                }}) {{
                                                                                                                    flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                        add(TCPFlagEnum.ECE),
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                    }};
                                                                                                                    masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.RST),
                                                                                                                        add(TCPFlagEnum.CWR),
                                                                                                                    }};
                                                                                                                }}),
                                                                                                            }};
                                                                                                        }};);) {{
                                                                            priority = 999809L;
                                                                            ruleDefinition = new RuleDefinition(                new String[]{{
                                                                                                add("provident"),
                                                                                            }},                 new MatchAttributes() {{
                                                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(920272L, 10063L) {{
                                                                                                        fromPort = 897956L;
                                                                                                        toPort = 592880L;
                                                                                                    }}),
                                                                                                    add(new PortRange(930840L, 708771L) {{
                                                                                                        fromPort = 366244L;
                                                                                                        toPort = 475826L;
                                                                                                    }}),
                                                                                                    add(new PortRange(574092L, 879522L) {{
                                                                                                        fromPort = 545779L;
                                                                                                        toPort = 43975L;
                                                                                                    }}),
                                                                                                }};
                                                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("dicta") {{
                                                                                                        addressDefinition = "totam";
                                                                                                    }}),
                                                                                                }};
                                                                                                protocols = new Long[]{{
                                                                                                    add(244376L),
                                                                                                }};
                                                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                                    add(new PortRange(223291L, 582320L) {{
                                                                                                        fromPort = 124289L;
                                                                                                        toPort = 953676L;
                                                                                                    }}),
                                                                                                }};
                                                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                                    add(new Address("at") {{
                                                                                                        addressDefinition = "beatae";
                                                                                                    }}),
                                                                                                    add(new Address("minus") {{
                                                                                                        addressDefinition = "labore";
                                                                                                    }}),
                                                                                                    add(new Address("voluptatem") {{
                                                                                                        addressDefinition = "esse";
                                                                                                    }}),
                                                                                                }};
                                                                                                tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                                    add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                                        add(TCPFlagEnum.PSH),
                                                                                                                        add(TCPFlagEnum.SYN),
                                                                                                                        add(TCPFlagEnum.URG),
                                                                                                                        add(TCPFlagEnum.ACK),
                                                                                                                    }}) {{
                                                                                                        flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }};
                                                                                                        masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                            add(TCPFlagEnum.ECE),
                                                                                                            add(TCPFlagEnum.ACK),
                                                                                                            add(TCPFlagEnum.SYN),
                                                                                                        }};
                                                                                                    }}),
                                                                                                }};
                                                                                            }};) {{
                                                                                actions = new String[]{{
                                                                                    add("sequi"),
                                                                                    add("nihil"),
                                                                                    add("deleniti"),
                                                                                    add("illo"),
                                                                                }};
                                                                                matchAttributes = new MatchAttributes() {{
                                                                                    destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(790463L, 591065L) {{
                                                                                            fromPort = 828841L;
                                                                                            toPort = 304173L;
                                                                                        }}),
                                                                                        add(new PortRange(9683L, 805264L) {{
                                                                                            fromPort = 514993L;
                                                                                            toPort = 921719L;
                                                                                        }}),
                                                                                    }};
                                                                                    destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("expedita") {{
                                                                                            addressDefinition = "nam";
                                                                                        }}),
                                                                                    }};
                                                                                    protocols = new Long[]{{
                                                                                        add(590858L),
                                                                                        add(922299L),
                                                                                        add(700045L),
                                                                                    }};
                                                                                    sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                                        add(new PortRange(629377L, 833982L) {{
                                                                                            fromPort = 360934L;
                                                                                            toPort = 873833L;
                                                                                        }}),
                                                                                        add(new PortRange(413801L, 771226L) {{
                                                                                            fromPort = 434827L;
                                                                                            toPort = 213835L;
                                                                                        }}),
                                                                                    }};
                                                                                    sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                                        add(new Address("voluptatem") {{
                                                                                            addressDefinition = "aut";
                                                                                        }}),
                                                                                        add(new Address("quae") {{
                                                                                            addressDefinition = "ad";
                                                                                        }}),
                                                                                    }};
                                                                                    tcpFlags = new org.openapis.openapi.models.shared.TCPFlagField[]{{
                                                                                        add(new TCPFlagField(                new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                            add(TCPFlagEnum.FIN),
                                                                                                            add(TCPFlagEnum.CWR),
                                                                                                            add(TCPFlagEnum.PSH),
                                                                                                        }}) {{
                                                                                            flags = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.ACK),
                                                                                                add(TCPFlagEnum.URG),
                                                                                                add(TCPFlagEnum.URG),
                                                                                                add(TCPFlagEnum.SYN),
                                                                                            }};
                                                                                            masks = new org.openapis.openapi.models.shared.TCPFlagEnum[]{{
                                                                                                add(TCPFlagEnum.FIN),
                                                                                            }};
                                                                                        }}),
                                                                                    }};
                                                                                }};
                                                                            }};
                                                                        }}),
                                                                    }}) {{
                                                        customActions = new org.openapis.openapi.models.shared.CustomAction[]{{
                                                            add(new CustomAction(                new ActionDefinition() {{
                                                                                publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                                    add(new Dimension("itaque") {{
                                                                                                        value = "quaerat";
                                                                                                    }}),
                                                                                                }});;
                                                                            }};, "minus") {{
                                                                actionDefinition = new ActionDefinition() {{
                                                                    publishMetricAction = new PublishMetricAction(                new org.openapis.openapi.models.shared.Dimension[]{{
                                                                                        add(new Dimension("dolorum") {{
                                                                                            value = "numquam";
                                                                                        }}),
                                                                                        add(new Dimension("voluptate") {{
                                                                                            value = "possimus";
                                                                                        }}),
                                                                                    }}) {{
                                                                        dimensions = new org.openapis.openapi.models.shared.Dimension[]{{
                                                                            add(new Dimension("odio") {{
                                                                                value = "eveniet";
                                                                            }}),
                                                                        }};
                                                                    }};
                                                                }};
                                                                actionName = "consectetur";
                                                            }}),
                                                        }};
                                                    }};;
                                                }};) {{
                                    referenceSets = new ReferenceSets() {{
                                        ipSetReferences = new java.util.HashMap<String, org.openapis.openapi.models.shared.IPSetReference>() {{
                                            put("distinctio", new IPSetReference() {{
                                                referenceArn = "iusto";
                                            }});
                                        }};
                                    }};;
                                    ruleVariables = new RuleVariables() {{
                                        ipSets = new java.util.HashMap<String, org.openapis.openapi.models.shared.IPSet>() {{
                                            put("et", new IPSet(                new String[]{{
                                                                add("rem"),
                                                            }}) {{
                                                definition = new String[]{{
                                                    add("amet"),
                                                    add("autem"),
                                                    add("fuga"),
                                                }};
                                            }});
                                            put("aut", new IPSet(                new String[]{{
                                                                add("eaque"),
                                                            }}) {{
                                                definition = new String[]{{
                                                    add("laudantium"),
                                                    add("repellendus"),
                                                    add("veritatis"),
                                                }};
                                            }});
                                            put("saepe", new IPSet(                new String[]{{
                                                                add("alias"),
                                                            }}) {{
                                                definition = new String[]{{
                                                    add("mollitia"),
                                                    add("nulla"),
                                                    add("officia"),
                                                    add("sed"),
                                                }};
                                            }});
                                        }};
                                        portSets = new java.util.HashMap<String, org.openapis.openapi.models.shared.PortSet>() {{
                                            put("hic", new PortSet() {{
                                                definition = new String[]{{
                                                    add("incidunt"),
                                                }};
                                            }});
                                            put("qui", new PortSet() {{
                                                definition = new String[]{{
                                                    add("necessitatibus"),
                                                }};
                                            }});
                                            put("harum", new PortSet() {{
                                                definition = new String[]{{
                                                    add("beatae"),
                                                }};
                                            }});
                                            put("aliquid", new PortSet() {{
                                                definition = new String[]{{
                                                    add("optio"),
                                                    add("voluptatibus"),
                                                }};
                                            }});
                                        }};
                                    }};;
                                    statefulRuleOptions = new StatefulRuleOptions() {{
                                        ruleOrder = RuleOrderEnum.STRICT_ORDER;
                                    }};;
                                }};;
                                ruleGroupArn = "officia";
                                ruleGroupName = "libero";
                                rules = "totam";
                                sourceMetadata = new SourceMetadata() {{
                                    sourceArn = "sequi";
                                    sourceUpdateToken = "aliquid";
                                }};;
                                type = RuleGroupTypeEnum.STATELESS;
                            }};, UpdateRuleGroupXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_RULE_GROUP) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "odit";
                xAmzDate = "velit";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "nulla";
            }};            

            UpdateRuleGroupResponse res = sdk.sdk.updateRuleGroup(req);

            if (res.updateRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSubnetChangeProtection

<p/>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSubnetChangeProtectionRequest;
import org.openapis.openapi.models.operations.UpdateSubnetChangeProtectionResponse;
import org.openapis.openapi.models.operations.UpdateSubnetChangeProtectionXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateSubnetChangeProtectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSubnetChangeProtectionRequest req = new UpdateSubnetChangeProtectionRequest(                new UpdateSubnetChangeProtectionRequest(false) {{
                                firewallArn = "natus";
                                firewallName = "accusamus";
                                updateToken = "doloremque";
                            }};, UpdateSubnetChangeProtectionXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_SUBNET_CHANGE_PROTECTION) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "recusandae";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "non";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "quia";
            }};            

            UpdateSubnetChangeProtectionResponse res = sdk.sdk.updateSubnetChangeProtection(req);

            if (res.updateSubnetChangeProtectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTLSInspectionConfiguration

<p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTLSInspectionConfigurationRequest;
import org.openapis.openapi.models.operations.UpdateTLSInspectionConfigurationResponse;
import org.openapis.openapi.models.operations.UpdateTLSInspectionConfigurationXAmzTargetEnum;
import org.openapis.openapi.models.shared.Address;
import org.openapis.openapi.models.shared.EncryptionConfiguration;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerCertificate;
import org.openapis.openapi.models.shared.ServerCertificateConfiguration;
import org.openapis.openapi.models.shared.ServerCertificateScope;
import org.openapis.openapi.models.shared.TLSInspectionConfiguration;
import org.openapis.openapi.models.shared.UpdateTLSInspectionConfigurationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTLSInspectionConfigurationRequest req = new UpdateTLSInspectionConfigurationRequest(                new UpdateTLSInspectionConfigurationRequest(                new TLSInspectionConfiguration() {{
                                                serverCertificateConfigurations = new org.openapis.openapi.models.shared.ServerCertificateConfiguration[]{{
                                                    add(new ServerCertificateConfiguration() {{
                                                        scopes = new org.openapis.openapi.models.shared.ServerCertificateScope[]{{
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(885022L, 100002L) {{
                                                                        fromPort = 754901L;
                                                                        toPort = 62035L;
                                                                    }}),
                                                                    add(new PortRange(758985L, 525951L) {{
                                                                        fromPort = 100251L;
                                                                        toPort = 317898L;
                                                                    }}),
                                                                    add(new PortRange(967055L, 955551L) {{
                                                                        fromPort = 17060L;
                                                                        toPort = 704271L;
                                                                    }}),
                                                                    add(new PortRange(552439L, 356315L) {{
                                                                        fromPort = 615058L;
                                                                        toPort = 117819L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("itaque") {{
                                                                        addressDefinition = "modi";
                                                                    }}),
                                                                    add(new Address("modi") {{
                                                                        addressDefinition = "maxime";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(828147L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(783397L, 883819L) {{
                                                                        fromPort = 985109L;
                                                                        toPort = 773711L;
                                                                    }}),
                                                                    add(new PortRange(66074L, 573444L) {{
                                                                        fromPort = 518990L;
                                                                        toPort = 969168L;
                                                                    }}),
                                                                    add(new PortRange(438256L, 485031L) {{
                                                                        fromPort = 472414L;
                                                                        toPort = 458412L;
                                                                    }}),
                                                                    add(new PortRange(423588L, 208683L) {{
                                                                        fromPort = 202796L;
                                                                        toPort = 895513L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("consequuntur") {{
                                                                        addressDefinition = "voluptas";
                                                                    }}),
                                                                    add(new Address("reprehenderit") {{
                                                                        addressDefinition = "officia";
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                        serverCertificates = new org.openapis.openapi.models.shared.ServerCertificate[]{{
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "eius";
                                                            }}),
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "ipsa";
                                                            }}),
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "rem";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new ServerCertificateConfiguration() {{
                                                        scopes = new org.openapis.openapi.models.shared.ServerCertificateScope[]{{
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(206063L, 816365L) {{
                                                                        fromPort = 331452L;
                                                                        toPort = 906232L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("doloribus") {{
                                                                        addressDefinition = "quos";
                                                                    }}),
                                                                    add(new Address("est") {{
                                                                        addressDefinition = "fugiat";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(245278L),
                                                                    add(110522L),
                                                                    add(201096L),
                                                                    add(630832L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(987890L, 823753L) {{
                                                                        fromPort = 997995L;
                                                                        toPort = 363214L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("explicabo") {{
                                                                        addressDefinition = "incidunt";
                                                                    }}),
                                                                    add(new Address("cupiditate") {{
                                                                        addressDefinition = "ipsam";
                                                                    }}),
                                                                    add(new Address("alias") {{
                                                                        addressDefinition = "optio";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(956124L, 164319L) {{
                                                                        fromPort = 198911L;
                                                                        toPort = 412433L;
                                                                    }}),
                                                                    add(new PortRange(638390L, 575062L) {{
                                                                        fromPort = 330440L;
                                                                        toPort = 893773L;
                                                                    }}),
                                                                    add(new PortRange(947822L, 236790L) {{
                                                                        fromPort = 280859L;
                                                                        toPort = 256768L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("minima") {{
                                                                        addressDefinition = "in";
                                                                    }}),
                                                                    add(new Address("minus") {{
                                                                        addressDefinition = "ex";
                                                                    }}),
                                                                    add(new Address("beatae") {{
                                                                        addressDefinition = "ab";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(392319L),
                                                                    add(786954L),
                                                                    add(221218L),
                                                                    add(496548L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(181476L, 397026L) {{
                                                                        fromPort = 326903L;
                                                                        toPort = 102446L;
                                                                    }}),
                                                                    add(new PortRange(240490L, 506343L) {{
                                                                        fromPort = 166289L;
                                                                        toPort = 276650L;
                                                                    }}),
                                                                    add(new PortRange(709701L, 706411L) {{
                                                                        fromPort = 220528L;
                                                                        toPort = 349898L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("nemo") {{
                                                                        addressDefinition = "sit";
                                                                    }}),
                                                                    add(new Address("consequuntur") {{
                                                                        addressDefinition = "culpa";
                                                                    }}),
                                                                    add(new Address("deserunt") {{
                                                                        addressDefinition = "amet";
                                                                    }}),
                                                                    add(new Address("veniam") {{
                                                                        addressDefinition = "modi";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(788661L, 316550L) {{
                                                                        fromPort = 932250L;
                                                                        toPort = 955569L;
                                                                    }}),
                                                                    add(new PortRange(887363L, 103990L) {{
                                                                        fromPort = 987759L;
                                                                        toPort = 826806L;
                                                                    }}),
                                                                    add(new PortRange(60335L, 751033L) {{
                                                                        fromPort = 5315L;
                                                                        toPort = 633982L;
                                                                    }}),
                                                                    add(new PortRange(118932L, 426002L) {{
                                                                        fromPort = 898193L;
                                                                        toPort = 155978L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("ullam") {{
                                                                        addressDefinition = "debitis";
                                                                    }}),
                                                                    add(new Address("accusantium") {{
                                                                        addressDefinition = "architecto";
                                                                    }}),
                                                                    add(new Address("veritatis") {{
                                                                        addressDefinition = "perferendis";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(765833L),
                                                                    add(435531L),
                                                                    add(842402L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(246772L, 299153L) {{
                                                                        fromPort = 363224L;
                                                                        toPort = 923456L;
                                                                    }}),
                                                                    add(new PortRange(152283L, 486272L) {{
                                                                        fromPort = 493591L;
                                                                        toPort = 388404L;
                                                                    }}),
                                                                    add(new PortRange(739508L, 983854L) {{
                                                                        fromPort = 616941L;
                                                                        toPort = 588152L;
                                                                    }}),
                                                                    add(new PortRange(932080L, 389548L) {{
                                                                        fromPort = 703966L;
                                                                        toPort = 697330L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("perspiciatis") {{
                                                                        addressDefinition = "modi";
                                                                    }}),
                                                                    add(new Address("cum") {{
                                                                        addressDefinition = "hic";
                                                                    }}),
                                                                    add(new Address("libero") {{
                                                                        addressDefinition = "aspernatur";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(797254L, 664666L) {{
                                                                        fromPort = 279172L;
                                                                        toPort = 925395L;
                                                                    }}),
                                                                    add(new PortRange(779409L, 198991L) {{
                                                                        fromPort = 904440L;
                                                                        toPort = 423054L;
                                                                    }}),
                                                                    add(new PortRange(848722L, 706872L) {{
                                                                        fromPort = 849383L;
                                                                        toPort = 367475L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("assumenda") {{
                                                                        addressDefinition = "mollitia";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(718981L),
                                                                    add(866861L),
                                                                    add(323365L),
                                                                    add(816151L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(276337L, 802356L) {{
                                                                        fromPort = 911451L;
                                                                        toPort = 673191L;
                                                                    }}),
                                                                    add(new PortRange(379894L, 647210L) {{
                                                                        fromPort = 369523L;
                                                                        toPort = 60L;
                                                                    }}),
                                                                    add(new PortRange(668218L, 577413L) {{
                                                                        fromPort = 560451L;
                                                                        toPort = 672889L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("perferendis") {{
                                                                        addressDefinition = "quo";
                                                                    }}),
                                                                    add(new Address("aliquid") {{
                                                                        addressDefinition = "fugit";
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                        serverCertificates = new org.openapis.openapi.models.shared.ServerCertificate[]{{
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "quaerat";
                                                            }}),
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "eligendi";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new ServerCertificateConfiguration() {{
                                                        scopes = new org.openapis.openapi.models.shared.ServerCertificateScope[]{{
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(860311L, 621393L) {{
                                                                        fromPort = 888265L;
                                                                        toPort = 603650L;
                                                                    }}),
                                                                    add(new PortRange(344289L, 460909L) {{
                                                                        fromPort = 653000L;
                                                                        toPort = 298613L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("facere") {{
                                                                        addressDefinition = "fuga";
                                                                    }}),
                                                                    add(new Address("quasi") {{
                                                                        addressDefinition = "impedit";
                                                                    }}),
                                                                    add(new Address("quod") {{
                                                                        addressDefinition = "deserunt";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(41179L),
                                                                    add(31574L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(9375L, 51007L) {{
                                                                        fromPort = 901008L;
                                                                        toPort = 807564L;
                                                                    }}),
                                                                    add(new PortRange(783274L, 502453L) {{
                                                                        fromPort = 102390L;
                                                                        toPort = 627161L;
                                                                    }}),
                                                                    add(new PortRange(885797L, 148379L) {{
                                                                        fromPort = 60892L;
                                                                        toPort = 169819L;
                                                                    }}),
                                                                    add(new PortRange(55981L, 567693L) {{
                                                                        fromPort = 898111L;
                                                                        toPort = 773259L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("laudantium") {{
                                                                        addressDefinition = "maiores";
                                                                    }}),
                                                                    add(new Address("alias") {{
                                                                        addressDefinition = "maiores";
                                                                    }}),
                                                                    add(new Address("rem") {{
                                                                        addressDefinition = "asperiores";
                                                                    }}),
                                                                    add(new Address("suscipit") {{
                                                                        addressDefinition = "dicta";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(260588L, 458212L) {{
                                                                        fromPort = 985360L;
                                                                        toPort = 244569L;
                                                                    }}),
                                                                    add(new PortRange(94697L, 203621L) {{
                                                                        fromPort = 446547L;
                                                                        toPort = 757407L;
                                                                    }}),
                                                                    add(new PortRange(37534L, 185816L) {{
                                                                        fromPort = 876649L;
                                                                        toPort = 566312L;
                                                                    }}),
                                                                    add(new PortRange(278329L, 116558L) {{
                                                                        fromPort = 771241L;
                                                                        toPort = 104736L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("rerum") {{
                                                                        addressDefinition = "corporis";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(624498L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(388169L, 401688L) {{
                                                                        fromPort = 35581L;
                                                                        toPort = 664197L;
                                                                    }}),
                                                                    add(new PortRange(356440L, 62688L) {{
                                                                        fromPort = 555679L;
                                                                        toPort = 85794L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("quam") {{
                                                                        addressDefinition = "incidunt";
                                                                    }}),
                                                                    add(new Address("deserunt") {{
                                                                        addressDefinition = "magni";
                                                                    }}),
                                                                    add(new Address("omnis") {{
                                                                        addressDefinition = "delectus";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(337841L, 586108L) {{
                                                                        fromPort = 200950L;
                                                                        toPort = 805463L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("maiores") {{
                                                                        addressDefinition = "excepturi";
                                                                    }}),
                                                                    add(new Address("velit") {{
                                                                        addressDefinition = "laudantium";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(230305L),
                                                                    add(363845L),
                                                                    add(57470L),
                                                                    add(787916L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(395634L, 989033L) {{
                                                                        fromPort = 555294L;
                                                                        toPort = 476003L;
                                                                    }}),
                                                                    add(new PortRange(598316L, 34245L) {{
                                                                        fromPort = 955466L;
                                                                        toPort = 749702L;
                                                                    }}),
                                                                    add(new PortRange(417539L, 908734L) {{
                                                                        fromPort = 118917L;
                                                                        toPort = 795546L;
                                                                    }}),
                                                                    add(new PortRange(693747L, 265930L) {{
                                                                        fromPort = 781582L;
                                                                        toPort = 735740L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("eius") {{
                                                                        addressDefinition = "fugit";
                                                                    }}),
                                                                    add(new Address("eligendi") {{
                                                                        addressDefinition = "sequi";
                                                                    }}),
                                                                    add(new Address("esse") {{
                                                                        addressDefinition = "asperiores";
                                                                    }}),
                                                                    add(new Address("sint") {{
                                                                        addressDefinition = "blanditiis";
                                                                    }}),
                                                                }};
                                                            }}),
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(979287L, 930429L) {{
                                                                        fromPort = 955047L;
                                                                        toPort = 658604L;
                                                                    }}),
                                                                    add(new PortRange(359097L, 246577L) {{
                                                                        fromPort = 861591L;
                                                                        toPort = 643419L;
                                                                    }}),
                                                                    add(new PortRange(638609L, 902979L) {{
                                                                        fromPort = 887701L;
                                                                        toPort = 315022L;
                                                                    }}),
                                                                    add(new PortRange(35742L, 637840L) {{
                                                                        fromPort = 429997L;
                                                                        toPort = 922094L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("blanditiis") {{
                                                                        addressDefinition = "quasi";
                                                                    }}),
                                                                    add(new Address("quisquam") {{
                                                                        addressDefinition = "eius";
                                                                    }}),
                                                                    add(new Address("nobis") {{
                                                                        addressDefinition = "eos";
                                                                    }}),
                                                                    add(new Address("minus") {{
                                                                        addressDefinition = "natus";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(300651L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(548846L, 227870L) {{
                                                                        fromPort = 800799L;
                                                                        toPort = 552440L;
                                                                    }}),
                                                                    add(new PortRange(675126L, 266946L) {{
                                                                        fromPort = 473326L;
                                                                        toPort = 227156L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("architecto") {{
                                                                        addressDefinition = "necessitatibus";
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                        serverCertificates = new org.openapis.openapi.models.shared.ServerCertificate[]{{
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "dolore";
                                                            }}),
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "sunt";
                                                            }}),
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "maiores";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new ServerCertificateConfiguration() {{
                                                        scopes = new org.openapis.openapi.models.shared.ServerCertificateScope[]{{
                                                            add(new ServerCertificateScope() {{
                                                                destinationPorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(373106L, 51053L) {{
                                                                        fromPort = 936845L;
                                                                        toPort = 330596L;
                                                                    }}),
                                                                }};
                                                                destinations = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("nihil") {{
                                                                        addressDefinition = "veniam";
                                                                    }}),
                                                                    add(new Address("nisi") {{
                                                                        addressDefinition = "ad";
                                                                    }}),
                                                                }};
                                                                protocols = new Long[]{{
                                                                    add(338281L),
                                                                    add(845154L),
                                                                    add(366480L),
                                                                    add(382764L),
                                                                }};
                                                                sourcePorts = new org.openapis.openapi.models.shared.PortRange[]{{
                                                                    add(new PortRange(831031L, 17768L) {{
                                                                        fromPort = 24769L;
                                                                        toPort = 694728L;
                                                                    }}),
                                                                    add(new PortRange(152364L, 823572L) {{
                                                                        fromPort = 660536L;
                                                                        toPort = 958146L;
                                                                    }}),
                                                                    add(new PortRange(100233L, 240696L) {{
                                                                        fromPort = 996072L;
                                                                        toPort = 921060L;
                                                                    }}),
                                                                    add(new PortRange(294266L, 976762L) {{
                                                                        fromPort = 867115L;
                                                                        toPort = 688463L;
                                                                    }}),
                                                                }};
                                                                sources = new org.openapis.openapi.models.shared.Address[]{{
                                                                    add(new Address("minus") {{
                                                                        addressDefinition = "explicabo";
                                                                    }}),
                                                                    add(new Address("dolorum") {{
                                                                        addressDefinition = "soluta";
                                                                    }}),
                                                                }};
                                                            }}),
                                                        }};
                                                        serverCertificates = new org.openapis.openapi.models.shared.ServerCertificate[]{{
                                                            add(new ServerCertificate() {{
                                                                resourceArn = "earum";
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                            }};, "praesentium") {{
                                description = "error";
                                encryptionConfiguration = new EncryptionConfiguration(EncryptionTypeEnum.CUSTOMER_KMS) {{
                                    keyId = "quasi";
                                }};;
                                tlsInspectionConfigurationArn = "mollitia";
                                tlsInspectionConfigurationName = "accusamus";
                            }};, UpdateTLSInspectionConfigurationXAmzTargetEnum.NETWORK_FIREWALL20201112_UPDATE_TLS_INSPECTION_CONFIGURATION) {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "doloremque";
                xAmzDate = "expedita";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "deserunt";
            }};            

            UpdateTLSInspectionConfigurationResponse res = sdk.sdk.updateTLSInspectionConfiguration(req);

            if (res.updateTLSInspectionConfigurationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
