# SDK

## Overview

<p>This is the API Reference for Network Firewall. This guide is for developers who need detailed information about the Network Firewall API actions, data types, and errors. </p> <ul> <li> <p>The REST API requires you to handle connection details, such as calculating signatures, handling request retries, and error handling. For general information about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p> <p>To access Network Firewall using the REST API endpoint: <code>https://network-firewall.&lt;region&gt;.amazonaws.com </code> </p> </li> <li> <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p> </li> <li> <p>For descriptions of Network Firewall features, including and step-by-step instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer Guide</a>.</p> </li> </ul> <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the perimeter of your VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible with Suricata, a free, open source network analysis and threat detection engine. Network Firewall supports Suricata version 6.0.9. For information about Suricata, see the <a href="https://suricata.io/">Suricata website</a>.</p> <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways. The following are just a few examples: </p> <ul> <li> <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and block all other forms of traffic.</p> </li> <li> <p>Use custom lists of known bad domains to limit the types of domain names that your applications can access.</p> </li> <li> <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p> </li> <li> <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the port used.</p> </li> </ul> <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p> <p>To start using Network Firewall, do the following: </p> <ol> <li> <p>(Optional) If you don't already have a VPC that you want to protect, create it in Amazon VPC. </p> </li> <li> <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a subnet for the sole use of Network Firewall. </p> </li> <li> <p>In Network Firewall, create stateless and stateful rule groups, to define the components of the network traffic filtering behavior that you want your firewall to have. </p> </li> <li> <p>In Network Firewall, create a firewall policy that uses your rule groups and specifies additional default traffic filtering behavior. </p> </li> <li> <p>In Network Firewall, create a firewall and specify your new firewall policy and VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you specify, with the behavior that's defined in the firewall policy.</p> </li> <li> <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall endpoints.</p> </li> </ol>

Amazon Web Services documentation
<https://docs.aws.amazon.com/network-firewall/>
### Available Operations

* [AssociateFirewallPolicy](#associatefirewallpolicy) - <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>
* [AssociateSubnets](#associatesubnets) - <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>
* [CreateFirewall](#createfirewall) - <p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
* [CreateFirewallPolicy](#createfirewallpolicy) - <p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>
* [CreateRuleGroup](#createrulegroup) - <p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>
* [CreateTLSInspectionConfiguration](#createtlsinspectionconfiguration) - <p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>
* [DeleteFirewall](#deletefirewall) - <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>
* [DeleteFirewallPolicy](#deletefirewallpolicy) - Deletes the specified <a>FirewallPolicy</a>. 
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. 
* [DeleteRuleGroup](#deleterulegroup) - Deletes the specified <a>RuleGroup</a>. 
* [DeleteTLSInspectionConfiguration](#deletetlsinspectionconfiguration) - Deletes the specified <a>TLSInspectionConfiguration</a>.
* [DescribeFirewall](#describefirewall) - Returns the data objects for the specified firewall. 
* [DescribeFirewallPolicy](#describefirewallpolicy) - Returns the data objects for the specified firewall policy. 
* [DescribeLoggingConfiguration](#describeloggingconfiguration) - Returns the logging configuration for the specified firewall. 
* [DescribeResourcePolicy](#describeresourcepolicy) - Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. 
* [DescribeRuleGroup](#describerulegroup) - Returns the data objects for the specified rule group. 
* [DescribeRuleGroupMetadata](#describerulegroupmetadata) - High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
* [DescribeTLSInspectionConfiguration](#describetlsinspectionconfiguration) - Returns the data objects for the specified TLS inspection configuration.
* [DisassociateSubnets](#disassociatesubnets) - Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. 
* [ListFirewallPolicies](#listfirewallpolicies) - Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. 
* [ListFirewalls](#listfirewalls) - <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>
* [ListRuleGroups](#listrulegroups) - Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. 
* [ListTLSInspectionConfigurations](#listtlsinspectionconfigurations) - Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.
* [ListTagsForResource](#listtagsforresource) - <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
* [PutResourcePolicy](#putresourcepolicy) - <p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>
* [TagResource](#tagresource) - <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
* [UntagResource](#untagresource) - <p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>
* [UpdateFirewallDeleteProtection](#updatefirewalldeleteprotection) - Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. 
* [UpdateFirewallDescription](#updatefirewalldescription) - Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. 
* [UpdateFirewallEncryptionConfiguration](#updatefirewallencryptionconfiguration) - A complex type that contains settings for encryption of your firewall resources.
* [UpdateFirewallPolicy](#updatefirewallpolicy) - Updates the properties of the specified firewall policy.
* [UpdateFirewallPolicyChangeProtection](#updatefirewallpolicychangeprotection) - Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.
* [UpdateLoggingConfiguration](#updateloggingconfiguration) - <p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>
* [UpdateRuleGroup](#updaterulegroup) - <p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>
* [UpdateSubnetChangeProtection](#updatesubnetchangeprotection) - <p/>
* [UpdateTLSInspectionConfiguration](#updatetlsinspectionconfiguration) - <p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>

## AssociateFirewallPolicy

<p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p> <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a collection of inspection rule groups and other settings. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateFirewallPolicy(ctx, operations.AssociateFirewallPolicyRequest{
        AssociateFirewallPolicyRequest: shared.AssociateFirewallPolicyRequest{
            FirewallArn: sdk.String("suscipit"),
            FirewallName: sdk.String("iure"),
            FirewallPolicyArn: "magnam",
            UpdateToken: sdk.String("debitis"),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("placeat"),
        XAmzTarget: operations.AssociateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112AssociateFirewallPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallPolicyResponse != nil {
        // handle response
    }
}
```

## AssociateSubnets

<p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AssociateSubnets(ctx, operations.AssociateSubnetsRequest{
        AssociateSubnetsRequest: shared.AssociateSubnetsRequest{
            FirewallArn: sdk.String("voluptatum"),
            FirewallName: sdk.String("iusto"),
            SubnetMappings: []shared.SubnetMapping{
                shared.SubnetMapping{
                    IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
                    SubnetID: "recusandae",
                },
                shared.SubnetMapping{
                    IPAddressType: shared.IPAddressTypeEnumIpv6.ToPointer(),
                    SubnetID: "ab",
                },
                shared.SubnetMapping{
                    IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
                    SubnetID: "veritatis",
                },
            },
            UpdateToken: sdk.String("deserunt"),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("odit"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.AssociateSubnetsXAmzTargetEnumNetworkFirewall20201112AssociateSubnets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateSubnetsResponse != nil {
        // handle response
    }
}
```

## CreateFirewall

<p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFirewall(ctx, operations.CreateFirewallRequest{
        CreateFirewallRequest: shared.CreateFirewallRequest{
            DeleteProtection: sdk.Bool(false),
            Description: sdk.String("at"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("maiores"),
                Type: shared.EncryptionTypeEnumCustomerKms,
            },
            FirewallName: "quod",
            FirewallPolicyArn: "quod",
            FirewallPolicyChangeProtection: sdk.Bool(false),
            SubnetChangeProtection: sdk.Bool(false),
            SubnetMappings: []shared.SubnetMapping{
                shared.SubnetMapping{
                    IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
                    SubnetID: "porro",
                },
                shared.SubnetMapping{
                    IPAddressType: shared.IPAddressTypeEnumIpv6.ToPointer(),
                    SubnetID: "dicta",
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "officia",
                    Value: "occaecati",
                },
                shared.Tag{
                    Key: "fugit",
                    Value: "deleniti",
                },
                shared.Tag{
                    Key: "hic",
                    Value: "optio",
                },
            },
            VpcID: "totam",
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("cum"),
        XAmzTarget: operations.CreateFirewallXAmzTargetEnumNetworkFirewall20201112CreateFirewall,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFirewallResponse != nil {
        // handle response
    }
}
```

## CreateFirewallPolicy

<p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateFirewallPolicy(ctx, operations.CreateFirewallPolicyRequest{
        CreateFirewallPolicyRequest: shared.CreateFirewallPolicyRequest{
            Description: sdk.String("esse"),
            DryRun: sdk.Bool(false),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("ipsum"),
                Type: shared.EncryptionTypeEnumAwsOwnedKmsKey,
            },
            FirewallPolicy: shared.FirewallPolicy{
                StatefulDefaultActions: []string{
                    "perferendis",
                },
                StatefulEngineOptions: &shared.StatefulEngineOptions{
                    RuleOrder: shared.RuleOrderEnumDefaultActionOrder.ToPointer(),
                    StreamExceptionPolicy: shared.StreamExceptionPolicyEnumContinue.ToPointer(),
                },
                StatefulRuleGroupReferences: []shared.StatefulRuleGroupReference{
                    shared.StatefulRuleGroupReference{
                        Override: &shared.StatefulRuleGroupOverride{
                            Action: shared.OverrideActionEnumDropToAlert.ToPointer(),
                        },
                        Priority: sdk.Int64(612096),
                        ResourceArn: "dolor",
                    },
                },
                StatelessCustomActions: []shared.CustomAction{
                    shared.CustomAction{
                        ActionDefinition: shared.ActionDefinition{
                            PublishMetricAction: &shared.PublishMetricAction{
                                Dimensions: []shared.Dimension{
                                    shared.Dimension{
                                        Value: "hic",
                                    },
                                    shared.Dimension{
                                        Value: "saepe",
                                    },
                                },
                            },
                        },
                        ActionName: "fuga",
                    },
                    shared.CustomAction{
                        ActionDefinition: shared.ActionDefinition{
                            PublishMetricAction: &shared.PublishMetricAction{
                                Dimensions: []shared.Dimension{
                                    shared.Dimension{
                                        Value: "corporis",
                                    },
                                    shared.Dimension{
                                        Value: "iste",
                                    },
                                },
                            },
                        },
                        ActionName: "iure",
                    },
                    shared.CustomAction{
                        ActionDefinition: shared.ActionDefinition{
                            PublishMetricAction: &shared.PublishMetricAction{
                                Dimensions: []shared.Dimension{
                                    shared.Dimension{
                                        Value: "quidem",
                                    },
                                    shared.Dimension{
                                        Value: "architecto",
                                    },
                                    shared.Dimension{
                                        Value: "ipsa",
                                    },
                                    shared.Dimension{
                                        Value: "reiciendis",
                                    },
                                },
                            },
                        },
                        ActionName: "est",
                    },
                },
                StatelessDefaultActions: []string{
                    "laborum",
                    "dolores",
                    "dolorem",
                },
                StatelessFragmentDefaultActions: []string{
                    "explicabo",
                    "nobis",
                },
                StatelessRuleGroupReferences: []shared.StatelessRuleGroupReference{
                    shared.StatelessRuleGroupReference{
                        Priority: 607831,
                        ResourceArn: "nemo",
                    },
                    shared.StatelessRuleGroupReference{
                        Priority: 325047,
                        ResourceArn: "excepturi",
                    },
                },
                TLSInspectionConfigurationArn: sdk.String("accusantium"),
            },
            FirewallPolicyName: "iure",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "doloribus",
                    Value: "sapiente",
                },
                shared.Tag{
                    Key: "architecto",
                    Value: "mollitia",
                },
                shared.Tag{
                    Key: "dolorem",
                    Value: "culpa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequuntur"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.CreateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112CreateFirewallPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFirewallPolicyResponse != nil {
        // handle response
    }
}
```

## CreateRuleGroup

<p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateRuleGroup(ctx, operations.CreateRuleGroupRequest{
        CreateRuleGroupRequest: shared.CreateRuleGroupRequest{
            Capacity: 474697,
            Description: sdk.String("velit"),
            DryRun: sdk.Bool(false),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("error"),
                Type: shared.EncryptionTypeEnumCustomerKms,
            },
            RuleGroup: &shared.RuleGroup{
                ReferenceSets: &shared.ReferenceSets{
                    IPSetReferences: map[string]shared.IPSetReference{
                        "vitae": shared.IPSetReference{
                            ReferenceArn: sdk.String("laborum"),
                        },
                        "animi": shared.IPSetReference{
                            ReferenceArn: sdk.String("enim"),
                        },
                    },
                },
                RuleVariables: &shared.RuleVariables{
                    IPSets: map[string]shared.IPSet{
                        "quo": shared.IPSet{
                            Definition: []string{
                                "tenetur",
                            },
                        },
                    },
                    PortSets: map[string]shared.PortSet{
                        "id": shared.PortSet{
                            Definition: []string{
                                "aut",
                                "quasi",
                                "error",
                                "temporibus",
                            },
                        },
                        "laborum": shared.PortSet{
                            Definition: []string{
                                "reiciendis",
                            },
                        },
                    },
                },
                RulesSource: shared.RulesSource{
                    RulesSourceList: &shared.RulesSourceList{
                        GeneratedRulesType: shared.GeneratedRulesTypeEnumDenylist,
                        TargetTypes: []shared.TargetTypeEnum{
                            shared.TargetTypeEnumTLSSni,
                            shared.TargetTypeEnumHTTPHost,
                            shared.TargetTypeEnumHTTPHost,
                            shared.TargetTypeEnumTLSSni,
                        },
                        Targets: []string{
                            "voluptate",
                            "cum",
                            "perferendis",
                        },
                    },
                    RulesString: sdk.String("doloremque"),
                    StatefulRules: []shared.StatefulRule{
                        shared.StatefulRule{
                            Action: shared.StatefulActionEnumDrop,
                            Header: shared.Header{
                                Destination: "maiores",
                                DestinationPort: "dicta",
                                Direction: shared.StatefulRuleDirectionEnumForward,
                                Protocol: shared.StatefulRuleProtocolEnumFtp,
                                Source: "iusto",
                                SourcePort: "dicta",
                            },
                            RuleOptions: []shared.RuleOption{
                                shared.RuleOption{
                                    Keyword: "enim",
                                    Settings: []string{
                                        "commodi",
                                        "repudiandae",
                                        "quae",
                                        "ipsum",
                                    },
                                },
                                shared.RuleOption{
                                    Keyword: "quidem",
                                    Settings: []string{
                                        "excepturi",
                                        "pariatur",
                                        "modi",
                                    },
                                },
                                shared.RuleOption{
                                    Keyword: "praesentium",
                                    Settings: []string{
                                        "voluptates",
                                        "quasi",
                                        "repudiandae",
                                    },
                                },
                            },
                        },
                        shared.StatefulRule{
                            Action: shared.StatefulActionEnumAlert,
                            Header: shared.Header{
                                Destination: "veritatis",
                                DestinationPort: "itaque",
                                Direction: shared.StatefulRuleDirectionEnumForward,
                                Protocol: shared.StatefulRuleProtocolEnumTLS,
                                Source: "consequatur",
                                SourcePort: "est",
                            },
                            RuleOptions: []shared.RuleOption{
                                shared.RuleOption{
                                    Keyword: "explicabo",
                                    Settings: []string{
                                        "distinctio",
                                        "quibusdam",
                                        "labore",
                                    },
                                },
                                shared.RuleOption{
                                    Keyword: "modi",
                                    Settings: []string{
                                        "aliquid",
                                    },
                                },
                                shared.RuleOption{
                                    Keyword: "cupiditate",
                                    Settings: []string{
                                        "perferendis",
                                        "magni",
                                        "assumenda",
                                    },
                                },
                                shared.RuleOption{
                                    Keyword: "ipsam",
                                    Settings: []string{
                                        "fugit",
                                    },
                                },
                            },
                        },
                    },
                    StatelessRulesAndCustomActions: &shared.StatelessRulesAndCustomActions{
                        CustomActions: []shared.CustomAction{
                            shared.CustomAction{
                                ActionDefinition: shared.ActionDefinition{
                                    PublishMetricAction: &shared.PublishMetricAction{
                                        Dimensions: []shared.Dimension{
                                            shared.Dimension{
                                                Value: "tempora",
                                            },
                                            shared.Dimension{
                                                Value: "facilis",
                                            },
                                            shared.Dimension{
                                                Value: "tempore",
                                            },
                                        },
                                    },
                                },
                                ActionName: "labore",
                            },
                            shared.CustomAction{
                                ActionDefinition: shared.ActionDefinition{
                                    PublishMetricAction: &shared.PublishMetricAction{
                                        Dimensions: []shared.Dimension{
                                            shared.Dimension{
                                                Value: "eum",
                                            },
                                            shared.Dimension{
                                                Value: "non",
                                            },
                                            shared.Dimension{
                                                Value: "eligendi",
                                            },
                                            shared.Dimension{
                                                Value: "sint",
                                            },
                                        },
                                    },
                                },
                                ActionName: "aliquid",
                            },
                            shared.CustomAction{
                                ActionDefinition: shared.ActionDefinition{
                                    PublishMetricAction: &shared.PublishMetricAction{
                                        Dimensions: []shared.Dimension{
                                            shared.Dimension{
                                                Value: "necessitatibus",
                                            },
                                            shared.Dimension{
                                                Value: "sint",
                                            },
                                            shared.Dimension{
                                                Value: "officia",
                                            },
                                        },
                                    },
                                },
                                ActionName: "dolor",
                            },
                        },
                        StatelessRules: []shared.StatelessRule{
                            shared.StatelessRule{
                                Priority: 952749,
                                RuleDefinition: shared.RuleDefinition{
                                    Actions: []string{
                                        "in",
                                        "in",
                                        "illum",
                                    },
                                    MatchAttributes: shared.MatchAttributes{
                                        DestinationPorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 699479,
                                                ToPort: 116202,
                                            },
                                            shared.PortRange{
                                                FromPort: 297437,
                                                ToPort: 767024,
                                            },
                                            shared.PortRange{
                                                FromPort: 813798,
                                                ToPort: 411820,
                                            },
                                            shared.PortRange{
                                                FromPort: 396506,
                                                ToPort: 675439,
                                            },
                                        },
                                        Destinations: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "non",
                                            },
                                            shared.Address{
                                                AddressDefinition: "occaecati",
                                            },
                                            shared.Address{
                                                AddressDefinition: "enim",
                                            },
                                            shared.Address{
                                                AddressDefinition: "accusamus",
                                            },
                                        },
                                        Protocols: []int64{
                                            692532,
                                            588465,
                                            725255,
                                            659669,
                                        },
                                        SourcePorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 533206,
                                                ToPort: 956084,
                                            },
                                            shared.PortRange{
                                                FromPort: 230533,
                                                ToPort: 643990,
                                            },
                                            shared.PortRange{
                                                FromPort: 394869,
                                                ToPort: 423855,
                                            },
                                        },
                                        Sources: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "omnis",
                                            },
                                            shared.Address{
                                                AddressDefinition: "molestiae",
                                            },
                                            shared.Address{
                                                AddressDefinition: "perferendis",
                                            },
                                        },
                                        TCPFlags: []shared.TCPFlagField{
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumUrg,
                                                    shared.TCPFlagEnumUrg,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumRst,
                                                    shared.TCPFlagEnumPsh,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumUrg,
                                                    shared.TCPFlagEnumPsh,
                                                    shared.TCPFlagEnumCwr,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumFin,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            shared.StatelessRule{
                                Priority: 298282,
                                RuleDefinition: shared.RuleDefinition{
                                    Actions: []string{
                                        "excepturi",
                                    },
                                    MatchAttributes: shared.MatchAttributes{
                                        DestinationPorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 590873,
                                                ToPort: 551816,
                                            },
                                            shared.PortRange{
                                                FromPort: 574325,
                                                ToPort: 33625,
                                            },
                                        },
                                        Destinations: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "reiciendis",
                                            },
                                            shared.Address{
                                                AddressDefinition: "mollitia",
                                            },
                                            shared.Address{
                                                AddressDefinition: "ad",
                                            },
                                        },
                                        Protocols: []int64{
                                            221262,
                                            896547,
                                        },
                                        SourcePorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 367562,
                                                ToPort: 97260,
                                            },
                                        },
                                        Sources: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "doloribus",
                                            },
                                            shared.Address{
                                                AddressDefinition: "debitis",
                                            },
                                        },
                                        TCPFlags: []shared.TCPFlagField{
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumAck,
                                                    shared.TCPFlagEnumUrg,
                                                    shared.TCPFlagEnumPsh,
                                                    shared.TCPFlagEnumFin,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumCwr,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumUrg,
                                                    shared.TCPFlagEnumPsh,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumEce,
                                                    shared.TCPFlagEnumSyn,
                                                    shared.TCPFlagEnumCwr,
                                                    shared.TCPFlagEnumEce,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            shared.StatelessRule{
                                Priority: 37559,
                                RuleDefinition: shared.RuleDefinition{
                                    Actions: []string{
                                        "praesentium",
                                    },
                                    MatchAttributes: shared.MatchAttributes{
                                        DestinationPorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 166847,
                                                ToPort: 123820,
                                            },
                                            shared.PortRange{
                                                FromPort: 779051,
                                                ToPort: 848009,
                                            },
                                            shared.PortRange{
                                                FromPort: 864934,
                                                ToPort: 807319,
                                            },
                                        },
                                        Destinations: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "excepturi",
                                            },
                                            shared.Address{
                                                AddressDefinition: "odit",
                                            },
                                        },
                                        Protocols: []int64{
                                            33222,
                                            69167,
                                        },
                                        SourcePorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 697429,
                                                ToPort: 373291,
                                            },
                                            shared.PortRange{
                                                FromPort: 453543,
                                                ToPort: 420075,
                                            },
                                            shared.PortRange{
                                                FromPort: 722056,
                                                ToPort: 50588,
                                            },
                                            shared.PortRange{
                                                FromPort: 866383,
                                                ToPort: 365496,
                                            },
                                        },
                                        Sources: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "perferendis",
                                            },
                                            shared.Address{
                                                AddressDefinition: "fugiat",
                                            },
                                            shared.Address{
                                                AddressDefinition: "amet",
                                            },
                                            shared.Address{
                                                AddressDefinition: "aut",
                                            },
                                        },
                                        TCPFlags: []shared.TCPFlagField{
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumCwr,
                                                    shared.TCPFlagEnumUrg,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumSyn,
                                                    shared.TCPFlagEnumRst,
                                                    shared.TCPFlagEnumAck,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumFin,
                                                    shared.TCPFlagEnumRst,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumSyn,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumSyn,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumPsh,
                                                    shared.TCPFlagEnumSyn,
                                                    shared.TCPFlagEnumEce,
                                                    shared.TCPFlagEnumRst,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumCwr,
                                                    shared.TCPFlagEnumAck,
                                                    shared.TCPFlagEnumUrg,
                                                    shared.TCPFlagEnumAck,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumEce,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                            shared.StatelessRule{
                                Priority: 164694,
                                RuleDefinition: shared.RuleDefinition{
                                    Actions: []string{
                                        "error",
                                        "eaque",
                                        "occaecati",
                                    },
                                    MatchAttributes: shared.MatchAttributes{
                                        DestinationPorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 237893,
                                                ToPort: 992397,
                                            },
                                            shared.PortRange{
                                                FromPort: 934214,
                                                ToPort: 267262,
                                            },
                                            shared.PortRange{
                                                FromPort: 613966,
                                                ToPort: 679091,
                                            },
                                        },
                                        Destinations: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "pariatur",
                                            },
                                            shared.Address{
                                                AddressDefinition: "provident",
                                            },
                                            shared.Address{
                                                AddressDefinition: "nobis",
                                            },
                                        },
                                        Protocols: []int64{
                                            964490,
                                            311945,
                                            554242,
                                        },
                                        SourcePorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 212390,
                                                ToPort: 209843,
                                            },
                                            shared.PortRange{
                                                FromPort: 222443,
                                                ToPort: 186193,
                                            },
                                        },
                                        Sources: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "hic",
                                            },
                                        },
                                        TCPFlags: []shared.TCPFlagField{
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumPsh,
                                                    shared.TCPFlagEnumPsh,
                                                    shared.TCPFlagEnumCwr,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumUrg,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumFin,
                                                    shared.TCPFlagEnumFin,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumPsh,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumRst,
                                                    shared.TCPFlagEnumCwr,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumCwr,
                                                    shared.TCPFlagEnumPsh,
                                                    shared.TCPFlagEnumAck,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                StatefulRuleOptions: &shared.StatefulRuleOptions{
                    RuleOrder: shared.RuleOrderEnumDefaultActionOrder.ToPointer(),
                },
            },
            RuleGroupName: "atque",
            Rules: sdk.String("sit"),
            SourceMetadata: &shared.SourceMetadata{
                SourceArn: sdk.String("fugiat"),
                SourceUpdateToken: sdk.String("ab"),
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorum",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "voluptate",
                    Value: "dolorum",
                },
                shared.Tag{
                    Key: "deleniti",
                    Value: "omnis",
                },
            },
            Type: shared.RuleGroupTypeEnumStateful,
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("ipsum"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.CreateRuleGroupXAmzTargetEnumNetworkFirewall20201112CreateRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateRuleGroupResponse != nil {
        // handle response
    }
}
```

## CreateTLSInspectionConfiguration

<p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateTLSInspectionConfiguration(ctx, operations.CreateTLSInspectionConfigurationRequest{
        CreateTLSInspectionConfigurationRequest: shared.CreateTLSInspectionConfigurationRequest{
            Description: sdk.String("eius"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("aspernatur"),
                Type: shared.EncryptionTypeEnumCustomerKms,
            },
            TLSInspectionConfiguration: shared.TLSInspectionConfiguration{
                ServerCertificateConfigurations: []shared.ServerCertificateConfiguration{
                    shared.ServerCertificateConfiguration{
                        Scopes: []shared.ServerCertificateScope{
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 320017,
                                        ToPort: 904425,
                                    },
                                    shared.PortRange{
                                        FromPort: 383464,
                                        ToPort: 645785,
                                    },
                                    shared.PortRange{
                                        FromPort: 588317,
                                        ToPort: 324683,
                                    },
                                    shared.PortRange{
                                        FromPort: 831049,
                                        ToPort: 519711,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "alias",
                                    },
                                    shared.Address{
                                        AddressDefinition: "at",
                                    },
                                    shared.Address{
                                        AddressDefinition: "quaerat",
                                    },
                                },
                                Protocols: []int64{
                                    425451,
                                    798047,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 185636,
                                        ToPort: 679880,
                                    },
                                    shared.PortRange{
                                        FromPort: 952792,
                                        ToPort: 456130,
                                    },
                                    shared.PortRange{
                                        FromPort: 687488,
                                        ToPort: 483409,
                                    },
                                    shared.PortRange{
                                        FromPort: 215507,
                                        ToPort: 788740,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "amet",
                                    },
                                    shared.Address{
                                        AddressDefinition: "tempore",
                                    },
                                    shared.Address{
                                        AddressDefinition: "accusamus",
                                    },
                                    shared.Address{
                                        AddressDefinition: "numquam",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 213312,
                                        ToPort: 957451,
                                    },
                                    shared.PortRange{
                                        FromPort: 518201,
                                        ToPort: 471752,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "expedita",
                                    },
                                },
                                Protocols: []int64{
                                    153694,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 730442,
                                        ToPort: 374170,
                                    },
                                    shared.PortRange{
                                        FromPort: 646265,
                                        ToPort: 463575,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "incidunt",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 586784,
                                        ToPort: 807581,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "soluta",
                                    },
                                    shared.Address{
                                        AddressDefinition: "dicta",
                                    },
                                    shared.Address{
                                        AddressDefinition: "laborum",
                                    },
                                    shared.Address{
                                        AddressDefinition: "totam",
                                    },
                                },
                                Protocols: []int64{
                                    132068,
                                    174909,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 704474,
                                        ToPort: 396060,
                                    },
                                    shared.PortRange{
                                        FromPort: 463150,
                                        ToPort: 565421,
                                    },
                                    shared.PortRange{
                                        FromPort: 840429,
                                        ToPort: 183280,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "fugit",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 488056,
                                        ToPort: 124833,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "nam",
                                    },
                                    shared.Address{
                                        AddressDefinition: "hic",
                                    },
                                },
                                Protocols: []int64{
                                    765326,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 748664,
                                        ToPort: 92596,
                                    },
                                    shared.PortRange{
                                        FromPort: 903720,
                                        ToPort: 217450,
                                    },
                                    shared.PortRange{
                                        FromPort: 83422,
                                        ToPort: 749255,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "tempore",
                                    },
                                    shared.Address{
                                        AddressDefinition: "cupiditate",
                                    },
                                    shared.Address{
                                        AddressDefinition: "aperiam",
                                    },
                                },
                            },
                        },
                        ServerCertificates: []shared.ServerCertificate{
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("dolorem"),
                            },
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("dolore"),
                            },
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("labore"),
                            },
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("adipisci"),
                            },
                        },
                    },
                },
            },
            TLSInspectionConfigurationName: "dolorum",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quae",
                    Value: "aut",
                },
            },
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.CreateTLSInspectionConfigurationXAmzTargetEnumNetworkFirewall20201112CreateTLSInspectionConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTLSInspectionConfigurationResponse != nil {
        // handle response
    }
}
```

## DeleteFirewall

<p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFirewall(ctx, operations.DeleteFirewallRequest{
        DeleteFirewallRequest: shared.DeleteFirewallRequest{
            FirewallArn: sdk.String("ut"),
            FirewallName: sdk.String("facilis"),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DeleteFirewallXAmzTargetEnumNetworkFirewall20201112DeleteFirewall,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFirewallResponse != nil {
        // handle response
    }
}
```

## DeleteFirewallPolicy

Deletes the specified <a>FirewallPolicy</a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteFirewallPolicy(ctx, operations.DeleteFirewallPolicyRequest{
        DeleteFirewallPolicyRequest: shared.DeleteFirewallPolicyRequest{
            FirewallPolicyArn: sdk.String("quisquam"),
            FirewallPolicyName: sdk.String("vero"),
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeleteFirewallPolicyXAmzTargetEnumNetworkFirewall20201112DeleteFirewallPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFirewallPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        DeleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest{
            ResourceArn: "tenetur",
        },
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.DeleteResourcePolicyXAmzTargetEnumNetworkFirewall20201112DeleteResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DeleteRuleGroup

Deletes the specified <a>RuleGroup</a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteRuleGroup(ctx, operations.DeleteRuleGroupRequest{
        DeleteRuleGroupRequest: shared.DeleteRuleGroupRequest{
            RuleGroupArn: sdk.String("vero"),
            RuleGroupName: sdk.String("ducimus"),
            Type: shared.RuleGroupTypeEnumStateless.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.DeleteRuleGroupXAmzTargetEnumNetworkFirewall20201112DeleteRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteRuleGroupResponse != nil {
        // handle response
    }
}
```

## DeleteTLSInspectionConfiguration

Deletes the specified <a>TLSInspectionConfiguration</a>.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteTLSInspectionConfiguration(ctx, operations.DeleteTLSInspectionConfigurationRequest{
        DeleteTLSInspectionConfigurationRequest: shared.DeleteTLSInspectionConfigurationRequest{
            TLSInspectionConfigurationArn: sdk.String("exercitationem"),
            TLSInspectionConfigurationName: sdk.String("nulla"),
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.DeleteTLSInspectionConfigurationXAmzTargetEnumNetworkFirewall20201112DeleteTLSInspectionConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTLSInspectionConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeFirewall

Returns the data objects for the specified firewall. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFirewall(ctx, operations.DescribeFirewallRequest{
        DescribeFirewallRequest: shared.DescribeFirewallRequest{
            FirewallArn: sdk.String("alias"),
            FirewallName: sdk.String("officia"),
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.DescribeFirewallXAmzTargetEnumNetworkFirewall20201112DescribeFirewall,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFirewallResponse != nil {
        // handle response
    }
}
```

## DescribeFirewallPolicy

Returns the data objects for the specified firewall policy. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeFirewallPolicy(ctx, operations.DescribeFirewallPolicyRequest{
        DescribeFirewallPolicyRequest: shared.DescribeFirewallPolicyRequest{
            FirewallPolicyArn: sdk.String("ratione"),
            FirewallPolicyName: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.DescribeFirewallPolicyXAmzTargetEnumNetworkFirewall20201112DescribeFirewallPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeFirewallPolicyResponse != nil {
        // handle response
    }
}
```

## DescribeLoggingConfiguration

Returns the logging configuration for the specified firewall. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeLoggingConfiguration(ctx, operations.DescribeLoggingConfigurationRequest{
        DescribeLoggingConfigurationRequest: shared.DescribeLoggingConfigurationRequest{
            FirewallArn: sdk.String("excepturi"),
            FirewallName: sdk.String("voluptatibus"),
        },
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.DescribeLoggingConfigurationXAmzTargetEnumNetworkFirewall20201112DescribeLoggingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeLoggingConfigurationResponse != nil {
        // handle response
    }
}
```

## DescribeResourcePolicy

Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeResourcePolicy(ctx, operations.DescribeResourcePolicyRequest{
        DescribeResourcePolicyRequest: shared.DescribeResourcePolicyRequest{
            ResourceArn: "veniam",
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzTarget: operations.DescribeResourcePolicyXAmzTargetEnumNetworkFirewall20201112DescribeResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeResourcePolicyResponse != nil {
        // handle response
    }
}
```

## DescribeRuleGroup

Returns the data objects for the specified rule group. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRuleGroup(ctx, operations.DescribeRuleGroupRequest{
        DescribeRuleGroupRequest: shared.DescribeRuleGroupRequest{
            RuleGroupArn: sdk.String("aspernatur"),
            RuleGroupName: sdk.String("minima"),
            Type: shared.RuleGroupTypeEnumStateless.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.DescribeRuleGroupXAmzTargetEnumNetworkFirewall20201112DescribeRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRuleGroupResponse != nil {
        // handle response
    }
}
```

## DescribeRuleGroupMetadata

High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeRuleGroupMetadata(ctx, operations.DescribeRuleGroupMetadataRequest{
        DescribeRuleGroupMetadataRequest: shared.DescribeRuleGroupMetadataRequest{
            RuleGroupArn: sdk.String("fugit"),
            RuleGroupName: sdk.String("accusamus"),
            Type: shared.RuleGroupTypeEnumStateless.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.DescribeRuleGroupMetadataXAmzTargetEnumNetworkFirewall20201112DescribeRuleGroupMetadata,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeRuleGroupMetadataResponse != nil {
        // handle response
    }
}
```

## DescribeTLSInspectionConfiguration

Returns the data objects for the specified TLS inspection configuration.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeTLSInspectionConfiguration(ctx, operations.DescribeTLSInspectionConfigurationRequest{
        DescribeTLSInspectionConfigurationRequest: shared.DescribeTLSInspectionConfigurationRequest{
            TLSInspectionConfigurationArn: sdk.String("autem"),
            TLSInspectionConfigurationName: sdk.String("nobis"),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.DescribeTLSInspectionConfigurationXAmzTargetEnumNetworkFirewall20201112DescribeTLSInspectionConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTLSInspectionConfigurationResponse != nil {
        // handle response
    }
}
```

## DisassociateSubnets

Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DisassociateSubnets(ctx, operations.DisassociateSubnetsRequest{
        DisassociateSubnetsRequest: shared.DisassociateSubnetsRequest{
            FirewallArn: sdk.String("numquam"),
            FirewallName: sdk.String("explicabo"),
            SubnetIds: []string{
                "ipsa",
                "molestiae",
                "magnam",
            },
            UpdateToken: sdk.String("odio"),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("reprehenderit"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DisassociateSubnetsXAmzTargetEnumNetworkFirewall20201112DisassociateSubnets,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateSubnetsResponse != nil {
        // handle response
    }
}
```

## ListFirewallPolicies

Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFirewallPolicies(ctx, operations.ListFirewallPoliciesRequest{
        ListFirewallPoliciesRequest: shared.ListFirewallPoliciesRequest{
            MaxResults: sdk.Int64(852635),
            NextToken: sdk.String("ut"),
        },
        MaxResults: sdk.String("eum"),
        NextToken: sdk.String("suscipit"),
        XAmzAlgorithm: sdk.String("assumenda"),
        XAmzContentSha256: sdk.String("eos"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("id"),
        XAmzTarget: operations.ListFirewallPoliciesXAmzTargetEnumNetworkFirewall20201112ListFirewallPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallPoliciesResponse != nil {
        // handle response
    }
}
```

## ListFirewalls

<p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListFirewalls(ctx, operations.ListFirewallsRequest{
        ListFirewallsRequest: shared.ListFirewallsRequest{
            MaxResults: sdk.Int64(696997),
            NextToken: sdk.String("neque"),
            VpcIds: []string{
                "illum",
                "quo",
                "fuga",
                "eius",
            },
        },
        MaxResults: sdk.String("eos"),
        NextToken: sdk.String("voluptas"),
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        XAmzTarget: operations.ListFirewallsXAmzTargetEnumNetworkFirewall20201112ListFirewalls,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallsResponse != nil {
        // handle response
    }
}
```

## ListRuleGroups

Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListRuleGroups(ctx, operations.ListRuleGroupsRequest{
        ListRuleGroupsRequest: shared.ListRuleGroupsRequest{
            ManagedType: shared.ResourceManagedTypeEnumAwsManagedThreatSignatures.ToPointer(),
            MaxResults: sdk.Int64(779192),
            NextToken: sdk.String("esse"),
            Scope: shared.ResourceManagedStatusEnumAccount.ToPointer(),
            Type: shared.RuleGroupTypeEnumStateless.ToPointer(),
        },
        MaxResults: sdk.String("distinctio"),
        NextToken: sdk.String("quod"),
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("inventore"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.ListRuleGroupsXAmzTargetEnumNetworkFirewall20201112ListRuleGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRuleGroupsResponse != nil {
        // handle response
    }
}
```

## ListTLSInspectionConfigurations

Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTLSInspectionConfigurations(ctx, operations.ListTLSInspectionConfigurationsRequest{
        ListTLSInspectionConfigurationsRequest: shared.ListTLSInspectionConfigurationsRequest{
            MaxResults: sdk.Int64(577543),
            NextToken: sdk.String("commodi"),
        },
        MaxResults: sdk.String("sapiente"),
        NextToken: sdk.String("dolores"),
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.ListTLSInspectionConfigurationsXAmzTargetEnumNetworkFirewall20201112ListTLSInspectionConfigurations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTLSInspectionConfigurationsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            MaxResults: sdk.Int64(159867),
            NextToken: sdk.String("deleniti"),
            ResourceArn: "fugit",
        },
        MaxResults: sdk.String("fuga"),
        NextToken: sdk.String("mollitia"),
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("atque"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumNetworkFirewall20201112ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutResourcePolicy

<p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        PutResourcePolicyRequest: shared.PutResourcePolicyRequest{
            Policy: "consequuntur",
            ResourceArn: "ratione",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("eveniet"),
        XAmzTarget: operations.PutResourcePolicyXAmzTargetEnumNetworkFirewall20201112PutResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyResponse != nil {
        // handle response
    }
}
```

## TagResource

<p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "accusamus",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "esse",
                    Value: "quod",
                },
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumNetworkFirewall20201112TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "molestiae",
            TagKeys: []string{
                "occaecati",
                "minima",
                "distinctio",
            },
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("tempore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("cumque"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumNetworkFirewall20201112UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallDeleteProtection

Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFirewallDeleteProtection(ctx, operations.UpdateFirewallDeleteProtectionRequest{
        UpdateFirewallDeleteProtectionRequest: shared.UpdateFirewallDeleteProtectionRequest{
            DeleteProtection: false,
            FirewallArn: sdk.String("consequatur"),
            FirewallName: sdk.String("minus"),
            UpdateToken: sdk.String("quaerat"),
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.UpdateFirewallDeleteProtectionXAmzTargetEnumNetworkFirewall20201112UpdateFirewallDeleteProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallDeleteProtectionResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallDescription

Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFirewallDescription(ctx, operations.UpdateFirewallDescriptionRequest{
        UpdateFirewallDescriptionRequest: shared.UpdateFirewallDescriptionRequest{
            Description: sdk.String("quas"),
            FirewallArn: sdk.String("esse"),
            FirewallName: sdk.String("quasi"),
            UpdateToken: sdk.String("a"),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("quia"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.UpdateFirewallDescriptionXAmzTargetEnumNetworkFirewall20201112UpdateFirewallDescription,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallDescriptionResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallEncryptionConfiguration

A complex type that contains settings for encryption of your firewall resources.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFirewallEncryptionConfiguration(ctx, operations.UpdateFirewallEncryptionConfigurationRequest{
        UpdateFirewallEncryptionConfigurationRequest: shared.UpdateFirewallEncryptionConfigurationRequest{
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("facere"),
                Type: shared.EncryptionTypeEnumCustomerKms,
            },
            FirewallArn: sdk.String("consequuntur"),
            FirewallName: sdk.String("quasi"),
            UpdateToken: sdk.String("similique"),
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.UpdateFirewallEncryptionConfigurationXAmzTargetEnumNetworkFirewall20201112UpdateFirewallEncryptionConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallEncryptionConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallPolicy

Updates the properties of the specified firewall policy.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFirewallPolicy(ctx, operations.UpdateFirewallPolicyRequest{
        UpdateFirewallPolicyRequest: shared.UpdateFirewallPolicyRequest{
            Description: sdk.String("eius"),
            DryRun: sdk.Bool(false),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("libero"),
                Type: shared.EncryptionTypeEnumAwsOwnedKmsKey,
            },
            FirewallPolicy: shared.FirewallPolicy{
                StatefulDefaultActions: []string{
                    "accusantium",
                    "aliquam",
                    "sapiente",
                },
                StatefulEngineOptions: &shared.StatefulEngineOptions{
                    RuleOrder: shared.RuleOrderEnumDefaultActionOrder.ToPointer(),
                    StreamExceptionPolicy: shared.StreamExceptionPolicyEnumDrop.ToPointer(),
                },
                StatefulRuleGroupReferences: []shared.StatefulRuleGroupReference{
                    shared.StatefulRuleGroupReference{
                        Override: &shared.StatefulRuleGroupOverride{
                            Action: shared.OverrideActionEnumDropToAlert.ToPointer(),
                        },
                        Priority: sdk.Int64(356707),
                        ResourceArn: "nisi",
                    },
                    shared.StatefulRuleGroupReference{
                        Override: &shared.StatefulRuleGroupOverride{
                            Action: shared.OverrideActionEnumDropToAlert.ToPointer(),
                        },
                        Priority: sdk.Int64(16328),
                        ResourceArn: "voluptatum",
                    },
                },
                StatelessCustomActions: []shared.CustomAction{
                    shared.CustomAction{
                        ActionDefinition: shared.ActionDefinition{
                            PublishMetricAction: &shared.PublishMetricAction{
                                Dimensions: []shared.Dimension{
                                    shared.Dimension{
                                        Value: "ex",
                                    },
                                    shared.Dimension{
                                        Value: "deleniti",
                                    },
                                    shared.Dimension{
                                        Value: "itaque",
                                    },
                                    shared.Dimension{
                                        Value: "dolorum",
                                    },
                                },
                            },
                        },
                        ActionName: "architecto",
                    },
                },
                StatelessDefaultActions: []string{
                    "tenetur",
                    "quasi",
                    "at",
                },
                StatelessFragmentDefaultActions: []string{
                    "voluptate",
                },
                StatelessRuleGroupReferences: []shared.StatelessRuleGroupReference{
                    shared.StatelessRuleGroupReference{
                        Priority: 326701,
                        ResourceArn: "veritatis",
                    },
                },
                TLSInspectionConfigurationArn: sdk.String("consectetur"),
            },
            FirewallPolicyArn: sdk.String("adipisci"),
            FirewallPolicyName: sdk.String("iste"),
            UpdateToken: "temporibus",
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("eum"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.UpdateFirewallPolicyXAmzTargetEnumNetworkFirewall20201112UpdateFirewallPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallPolicyResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallPolicyChangeProtection

Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateFirewallPolicyChangeProtection(ctx, operations.UpdateFirewallPolicyChangeProtectionRequest{
        UpdateFirewallPolicyChangeProtectionRequest: shared.UpdateFirewallPolicyChangeProtectionRequest{
            FirewallArn: sdk.String("corrupti"),
            FirewallName: sdk.String("non"),
            FirewallPolicyChangeProtection: false,
            UpdateToken: sdk.String("voluptatem"),
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("impedit"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.UpdateFirewallPolicyChangeProtectionXAmzTargetEnumNetworkFirewall20201112UpdateFirewallPolicyChangeProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallPolicyChangeProtectionResponse != nil {
        // handle response
    }
}
```

## UpdateLoggingConfiguration

<p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateLoggingConfiguration(ctx, operations.UpdateLoggingConfigurationRequest{
        UpdateLoggingConfigurationRequest: shared.UpdateLoggingConfigurationRequest{
            FirewallArn: sdk.String("dignissimos"),
            FirewallName: sdk.String("dicta"),
            LoggingConfiguration: &shared.LoggingConfiguration{
                LogDestinationConfigs: []shared.LogDestinationConfig{
                    shared.LogDestinationConfig{
                        LogDestination: map[string]string{
                            "velit": "voluptatibus",
                            "voluptas": "asperiores",
                            "aperiam": "ea",
                        },
                        LogDestinationType: shared.LogDestinationTypeEnumS3,
                        LogType: shared.LogTypeEnumAlert,
                    },
                    shared.LogDestinationConfig{
                        LogDestination: map[string]string{
                            "officia": "maxime",
                            "dignissimos": "officia",
                            "asperiores": "nemo",
                            "quae": "quaerat",
                        },
                        LogDestinationType: shared.LogDestinationTypeEnumKinesisDataFirehose,
                        LogType: shared.LogTypeEnumFlow,
                    },
                    shared.LogDestinationConfig{
                        LogDestination: map[string]string{
                            "ab": "adipisci",
                            "fuga": "id",
                        },
                        LogDestinationType: shared.LogDestinationTypeEnumCloudWatchLogs,
                        LogType: shared.LogTypeEnumAlert,
                    },
                    shared.LogDestinationConfig{
                        LogDestination: map[string]string{
                            "est": "recusandae",
                            "totam": "fugiat",
                            "vel": "ducimus",
                        },
                        LogDestinationType: shared.LogDestinationTypeEnumCloudWatchLogs,
                        LogType: shared.LogTypeEnumAlert,
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("facilis"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.UpdateLoggingConfigurationXAmzTargetEnumNetworkFirewall20201112UpdateLoggingConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLoggingConfigurationResponse != nil {
        // handle response
    }
}
```

## UpdateRuleGroup

<p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateRuleGroup(ctx, operations.UpdateRuleGroupRequest{
        UpdateRuleGroupRequest: shared.UpdateRuleGroupRequest{
            Description: sdk.String("reiciendis"),
            DryRun: sdk.Bool(false),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("assumenda"),
                Type: shared.EncryptionTypeEnumCustomerKms,
            },
            RuleGroup: &shared.RuleGroup{
                ReferenceSets: &shared.ReferenceSets{
                    IPSetReferences: map[string]shared.IPSetReference{
                        "aliquid": shared.IPSetReference{
                            ReferenceArn: sdk.String("aperiam"),
                        },
                        "cum": shared.IPSetReference{
                            ReferenceArn: sdk.String("consectetur"),
                        },
                        "in": shared.IPSetReference{
                            ReferenceArn: sdk.String("exercitationem"),
                        },
                        "earum": shared.IPSetReference{
                            ReferenceArn: sdk.String("facere"),
                        },
                    },
                },
                RuleVariables: &shared.RuleVariables{
                    IPSets: map[string]shared.IPSet{
                        "doloribus": shared.IPSet{
                            Definition: []string{
                                "reiciendis",
                                "quidem",
                            },
                        },
                        "saepe": shared.IPSet{
                            Definition: []string{
                                "dolore",
                                "sunt",
                                "asperiores",
                                "adipisci",
                            },
                        },
                    },
                    PortSets: map[string]shared.PortSet{
                        "amet": shared.PortSet{
                            Definition: []string{
                                "dignissimos",
                            },
                        },
                    },
                },
                RulesSource: shared.RulesSource{
                    RulesSourceList: &shared.RulesSourceList{
                        GeneratedRulesType: shared.GeneratedRulesTypeEnumDenylist,
                        TargetTypes: []shared.TargetTypeEnum{
                            shared.TargetTypeEnumTLSSni,
                            shared.TargetTypeEnumTLSSni,
                            shared.TargetTypeEnumHTTPHost,
                            shared.TargetTypeEnumTLSSni,
                        },
                        Targets: []string{
                            "voluptates",
                        },
                    },
                    RulesString: sdk.String("libero"),
                    StatefulRules: []shared.StatefulRule{
                        shared.StatefulRule{
                            Action: shared.StatefulActionEnumReject,
                            Header: shared.Header{
                                Destination: "similique",
                                DestinationPort: "tempora",
                                Direction: shared.StatefulRuleDirectionEnumForward,
                                Protocol: shared.StatefulRuleProtocolEnumSmb,
                                Source: "voluptas",
                                SourcePort: "voluptas",
                            },
                            RuleOptions: []shared.RuleOption{
                                shared.RuleOption{
                                    Keyword: "nobis",
                                    Settings: []string{
                                        "adipisci",
                                        "minus",
                                        "dolores",
                                    },
                                },
                                shared.RuleOption{
                                    Keyword: "blanditiis",
                                    Settings: []string{
                                        "dolore",
                                        "aliquam",
                                    },
                                },
                            },
                        },
                    },
                    StatelessRulesAndCustomActions: &shared.StatelessRulesAndCustomActions{
                        CustomActions: []shared.CustomAction{
                            shared.CustomAction{
                                ActionDefinition: shared.ActionDefinition{
                                    PublishMetricAction: &shared.PublishMetricAction{
                                        Dimensions: []shared.Dimension{
                                            shared.Dimension{
                                                Value: "ullam",
                                            },
                                            shared.Dimension{
                                                Value: "adipisci",
                                            },
                                            shared.Dimension{
                                                Value: "cum",
                                            },
                                            shared.Dimension{
                                                Value: "blanditiis",
                                            },
                                        },
                                    },
                                },
                                ActionName: "quas",
                            },
                            shared.CustomAction{
                                ActionDefinition: shared.ActionDefinition{
                                    PublishMetricAction: &shared.PublishMetricAction{
                                        Dimensions: []shared.Dimension{
                                            shared.Dimension{
                                                Value: "nesciunt",
                                            },
                                            shared.Dimension{
                                                Value: "culpa",
                                            },
                                            shared.Dimension{
                                                Value: "corrupti",
                                            },
                                            shared.Dimension{
                                                Value: "pariatur",
                                            },
                                        },
                                    },
                                },
                                ActionName: "totam",
                            },
                            shared.CustomAction{
                                ActionDefinition: shared.ActionDefinition{
                                    PublishMetricAction: &shared.PublishMetricAction{
                                        Dimensions: []shared.Dimension{
                                            shared.Dimension{
                                                Value: "exercitationem",
                                            },
                                            shared.Dimension{
                                                Value: "nobis",
                                            },
                                            shared.Dimension{
                                                Value: "sit",
                                            },
                                            shared.Dimension{
                                                Value: "rerum",
                                            },
                                        },
                                    },
                                },
                                ActionName: "sed",
                            },
                            shared.CustomAction{
                                ActionDefinition: shared.ActionDefinition{
                                    PublishMetricAction: &shared.PublishMetricAction{
                                        Dimensions: []shared.Dimension{
                                            shared.Dimension{
                                                Value: "explicabo",
                                            },
                                            shared.Dimension{
                                                Value: "asperiores",
                                            },
                                            shared.Dimension{
                                                Value: "facilis",
                                            },
                                            shared.Dimension{
                                                Value: "voluptate",
                                            },
                                        },
                                    },
                                },
                                ActionName: "expedita",
                            },
                        },
                        StatelessRules: []shared.StatelessRule{
                            shared.StatelessRule{
                                Priority: 611749,
                                RuleDefinition: shared.RuleDefinition{
                                    Actions: []string{
                                        "laborum",
                                        "sed",
                                    },
                                    MatchAttributes: shared.MatchAttributes{
                                        DestinationPorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 417486,
                                                ToPort: 696077,
                                            },
                                            shared.PortRange{
                                                FromPort: 131289,
                                                ToPort: 378326,
                                            },
                                        },
                                        Destinations: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "architecto",
                                            },
                                            shared.Address{
                                                AddressDefinition: "suscipit",
                                            },
                                            shared.Address{
                                                AddressDefinition: "sapiente",
                                            },
                                        },
                                        Protocols: []int64{
                                            72434,
                                            967795,
                                            19300,
                                            546885,
                                        },
                                        SourcePorts: []shared.PortRange{
                                            shared.PortRange{
                                                FromPort: 274823,
                                                ToPort: 148478,
                                            },
                                            shared.PortRange{
                                                FromPort: 592231,
                                                ToPort: 258702,
                                            },
                                            shared.PortRange{
                                                FromPort: 896762,
                                                ToPort: 215529,
                                            },
                                            shared.PortRange{
                                                FromPort: 406733,
                                                ToPort: 579912,
                                            },
                                        },
                                        Sources: []shared.Address{
                                            shared.Address{
                                                AddressDefinition: "voluptatibus",
                                            },
                                            shared.Address{
                                                AddressDefinition: "tempora",
                                            },
                                            shared.Address{
                                                AddressDefinition: "tempora",
                                            },
                                        },
                                        TCPFlags: []shared.TCPFlagField{
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumPsh,
                                                    shared.TCPFlagEnumFin,
                                                    shared.TCPFlagEnumSyn,
                                                    shared.TCPFlagEnumCwr,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumUrg,
                                                    shared.TCPFlagEnumRst,
                                                    shared.TCPFlagEnumRst,
                                                },
                                            },
                                            shared.TCPFlagField{
                                                Flags: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumCwr,
                                                    shared.TCPFlagEnumAck,
                                                },
                                                Masks: []shared.TCPFlagEnum{
                                                    shared.TCPFlagEnumEce,
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                StatefulRuleOptions: &shared.StatefulRuleOptions{
                    RuleOrder: shared.RuleOrderEnumStrictOrder.ToPointer(),
                },
            },
            RuleGroupArn: sdk.String("veniam"),
            RuleGroupName: sdk.String("minima"),
            Rules: sdk.String("recusandae"),
            SourceMetadata: &shared.SourceMetadata{
                SourceArn: sdk.String("reiciendis"),
                SourceUpdateToken: sdk.String("nulla"),
            },
            Type: shared.RuleGroupTypeEnumStateless.ToPointer(),
            UpdateToken: "aperiam",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzTarget: operations.UpdateRuleGroupXAmzTargetEnumNetworkFirewall20201112UpdateRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRuleGroupResponse != nil {
        // handle response
    }
}
```

## UpdateSubnetChangeProtection

<p/>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateSubnetChangeProtection(ctx, operations.UpdateSubnetChangeProtectionRequest{
        UpdateSubnetChangeProtectionRequest: shared.UpdateSubnetChangeProtectionRequest{
            FirewallArn: sdk.String("exercitationem"),
            FirewallName: sdk.String("praesentium"),
            SubnetChangeProtection: false,
            UpdateToken: sdk.String("cum"),
        },
        XAmzAlgorithm: sdk.String("laboriosam"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.UpdateSubnetChangeProtectionXAmzTargetEnumNetworkFirewall20201112UpdateSubnetChangeProtection,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSubnetChangeProtectionResponse != nil {
        // handle response
    }
}
```

## UpdateTLSInspectionConfiguration

<p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateTLSInspectionConfiguration(ctx, operations.UpdateTLSInspectionConfigurationRequest{
        UpdateTLSInspectionConfigurationRequest: shared.UpdateTLSInspectionConfigurationRequest{
            Description: sdk.String("neque"),
            EncryptionConfiguration: &shared.EncryptionConfiguration{
                KeyID: sdk.String("dolorum"),
                Type: shared.EncryptionTypeEnumCustomerKms,
            },
            TLSInspectionConfiguration: shared.TLSInspectionConfiguration{
                ServerCertificateConfigurations: []shared.ServerCertificateConfiguration{
                    shared.ServerCertificateConfiguration{
                        Scopes: []shared.ServerCertificateScope{
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 879235,
                                        ToPort: 272683,
                                    },
                                    shared.PortRange{
                                        FromPort: 543678,
                                        ToPort: 148268,
                                    },
                                    shared.PortRange{
                                        FromPort: 282699,
                                        ToPort: 856303,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "culpa",
                                    },
                                },
                                Protocols: []int64{
                                    299643,
                                    7884,
                                    460220,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 24527,
                                        ToPort: 530537,
                                    },
                                    shared.PortRange{
                                        FromPort: 558065,
                                        ToPort: 922112,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "et",
                                    },
                                    shared.Address{
                                        AddressDefinition: "blanditiis",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 153627,
                                        ToPort: 24313,
                                    },
                                    shared.PortRange{
                                        FromPort: 425508,
                                        ToPort: 342611,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "error",
                                    },
                                    shared.Address{
                                        AddressDefinition: "consequatur",
                                    },
                                    shared.Address{
                                        AddressDefinition: "incidunt",
                                    },
                                    shared.Address{
                                        AddressDefinition: "reiciendis",
                                    },
                                },
                                Protocols: []int64{
                                    690894,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 99416,
                                        ToPort: 577140,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "quidem",
                                    },
                                    shared.Address{
                                        AddressDefinition: "atque",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 724148,
                                        ToPort: 948861,
                                    },
                                    shared.PortRange{
                                        FromPort: 388867,
                                        ToPort: 2703,
                                    },
                                    shared.PortRange{
                                        FromPort: 227084,
                                        ToPort: 647197,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "unde",
                                    },
                                    shared.Address{
                                        AddressDefinition: "reiciendis",
                                    },
                                },
                                Protocols: []int64{
                                    833819,
                                    962771,
                                    914791,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 667285,
                                        ToPort: 696483,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "facere",
                                    },
                                    shared.Address{
                                        AddressDefinition: "fuga",
                                    },
                                },
                            },
                        },
                        ServerCertificates: []shared.ServerCertificate{
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("mollitia"),
                            },
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("veniam"),
                            },
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("voluptatem"),
                            },
                        },
                    },
                    shared.ServerCertificateConfiguration{
                        Scopes: []shared.ServerCertificateScope{
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 97243,
                                        ToPort: 542457,
                                    },
                                    shared.PortRange{
                                        FromPort: 442036,
                                        ToPort: 991142,
                                    },
                                    shared.PortRange{
                                        FromPort: 519952,
                                        ToPort: 383103,
                                    },
                                    shared.PortRange{
                                        FromPort: 693957,
                                        ToPort: 806670,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "esse",
                                    },
                                },
                                Protocols: []int64{
                                    826825,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 539118,
                                        ToPort: 623295,
                                    },
                                    shared.PortRange{
                                        FromPort: 887265,
                                        ToPort: 886961,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "natus",
                                    },
                                    shared.Address{
                                        AddressDefinition: "minima",
                                    },
                                    shared.Address{
                                        AddressDefinition: "aspernatur",
                                    },
                                    shared.Address{
                                        AddressDefinition: "ex",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 544647,
                                        ToPort: 871786,
                                    },
                                    shared.PortRange{
                                        FromPort: 621693,
                                        ToPort: 502721,
                                    },
                                    shared.PortRange{
                                        FromPort: 379356,
                                        ToPort: 922348,
                                    },
                                    shared.PortRange{
                                        FromPort: 542129,
                                        ToPort: 541381,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "recusandae",
                                    },
                                },
                                Protocols: []int64{
                                    829898,
                                    287119,
                                    968287,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 919783,
                                        ToPort: 116098,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "beatae",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 316488,
                                        ToPort: 389135,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "a",
                                    },
                                },
                                Protocols: []int64{
                                    300029,
                                    906355,
                                    160467,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 886305,
                                        ToPort: 597937,
                                    },
                                    shared.PortRange{
                                        FromPort: 446394,
                                        ToPort: 238043,
                                    },
                                    shared.PortRange{
                                        FromPort: 907876,
                                        ToPort: 580887,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "fugit",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 335631,
                                        ToPort: 440264,
                                    },
                                    shared.PortRange{
                                        FromPort: 625528,
                                        ToPort: 76486,
                                    },
                                    shared.PortRange{
                                        FromPort: 361306,
                                        ToPort: 696463,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "non",
                                    },
                                    shared.Address{
                                        AddressDefinition: "vero",
                                    },
                                    shared.Address{
                                        AddressDefinition: "doloremque",
                                    },
                                    shared.Address{
                                        AddressDefinition: "iure",
                                    },
                                },
                                Protocols: []int64{
                                    517612,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 474668,
                                        ToPort: 907733,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "cum",
                                    },
                                },
                            },
                        },
                        ServerCertificates: []shared.ServerCertificate{
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("necessitatibus"),
                            },
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("ratione"),
                            },
                        },
                    },
                    shared.ServerCertificateConfiguration{
                        Scopes: []shared.ServerCertificateScope{
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 528940,
                                        ToPort: 523006,
                                    },
                                    shared.PortRange{
                                        FromPort: 304446,
                                        ToPort: 320565,
                                    },
                                    shared.PortRange{
                                        FromPort: 997963,
                                        ToPort: 3099,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "perspiciatis",
                                    },
                                    shared.Address{
                                        AddressDefinition: "nihil",
                                    },
                                },
                                Protocols: []int64{
                                    378245,
                                    5189,
                                    979527,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 174658,
                                        ToPort: 663866,
                                    },
                                    shared.PortRange{
                                        FromPort: 327988,
                                        ToPort: 293144,
                                    },
                                    shared.PortRange{
                                        FromPort: 680349,
                                        ToPort: 200364,
                                    },
                                    shared.PortRange{
                                        FromPort: 63207,
                                        ToPort: 925703,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "quaerat",
                                    },
                                    shared.Address{
                                        AddressDefinition: "molestiae",
                                    },
                                    shared.Address{
                                        AddressDefinition: "ex",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 633062,
                                        ToPort: 238413,
                                    },
                                    shared.PortRange{
                                        FromPort: 890653,
                                        ToPort: 514513,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "nemo",
                                    },
                                    shared.Address{
                                        AddressDefinition: "recusandae",
                                    },
                                },
                                Protocols: []int64{
                                    592081,
                                    337477,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 970494,
                                        ToPort: 592780,
                                    },
                                    shared.PortRange{
                                        FromPort: 133439,
                                        ToPort: 354506,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "animi",
                                    },
                                },
                            },
                            shared.ServerCertificateScope{
                                DestinationPorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 652309,
                                        ToPort: 591027,
                                    },
                                    shared.PortRange{
                                        FromPort: 821719,
                                        ToPort: 659177,
                                    },
                                },
                                Destinations: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "aliquid",
                                    },
                                    shared.Address{
                                        AddressDefinition: "accusantium",
                                    },
                                },
                                Protocols: []int64{
                                    984632,
                                    351893,
                                    448143,
                                    721407,
                                },
                                SourcePorts: []shared.PortRange{
                                    shared.PortRange{
                                        FromPort: 637583,
                                        ToPort: 672041,
                                    },
                                    shared.PortRange{
                                        FromPort: 813054,
                                        ToPort: 266697,
                                    },
                                    shared.PortRange{
                                        FromPort: 976226,
                                        ToPort: 564064,
                                    },
                                    shared.PortRange{
                                        FromPort: 889794,
                                        ToPort: 956933,
                                    },
                                },
                                Sources: []shared.Address{
                                    shared.Address{
                                        AddressDefinition: "vitae",
                                    },
                                    shared.Address{
                                        AddressDefinition: "rerum",
                                    },
                                    shared.Address{
                                        AddressDefinition: "tempora",
                                    },
                                    shared.Address{
                                        AddressDefinition: "quis",
                                    },
                                },
                            },
                        },
                        ServerCertificates: []shared.ServerCertificate{
                            shared.ServerCertificate{
                                ResourceArn: sdk.String("fugit"),
                            },
                        },
                    },
                },
            },
            TLSInspectionConfigurationArn: sdk.String("cumque"),
            TLSInspectionConfigurationName: sdk.String("quae"),
            UpdateToken: "perferendis",
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("rem"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("impedit"),
        XAmzTarget: operations.UpdateTLSInspectionConfigurationXAmzTargetEnumNetworkFirewall20201112UpdateTLSInspectionConfiguration,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTLSInspectionConfigurationResponse != nil {
        // handle response
    }
}
```
