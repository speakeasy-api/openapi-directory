# SDK

## Overview

<p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or Elastic Load Balancing load balancers. Resolver performs recursive lookups against public name servers for all other domain names.</p> <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p> <p> <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b> </p> <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p> <b>Conditionally forward queries from a VPC to resolvers on your network</b> </p> <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network. To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward (such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to. If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match (acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose whether to forward queries from your VPCs to your network (outbound queries), from your network to your VPCs (inbound queries), or both.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/route53resolver/>
### Available Operations

* [AssociateFirewallRuleGroup](#associatefirewallrulegroup) - Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. 
* [AssociateResolverEndpointIPAddress](#associateresolverendpointipaddress) - <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>
* [AssociateResolverQueryLogConfig](#associateresolverquerylogconfig) - <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>
* [AssociateResolverRule](#associateresolverrule) - Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 
* [CreateFirewallDomainList](#createfirewalldomainlist) - Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 
* [CreateFirewallRule](#createfirewallrule) - Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.
* [CreateFirewallRuleGroup](#createfirewallrulegroup) - Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 
* [CreateResolverEndpoint](#createresolverendpoint) - <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>
* [CreateResolverQueryLogConfig](#createresolverquerylogconfig) - <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>
* [CreateResolverRule](#createresolverrule) - For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
* [DeleteFirewallDomainList](#deletefirewalldomainlist) - Deletes the specified domain list. 
* [DeleteFirewallRule](#deletefirewallrule) - Deletes the specified firewall rule.
* [DeleteFirewallRuleGroup](#deletefirewallrulegroup) - Deletes the specified firewall rule group. 
* [DeleteResolverEndpoint](#deleteresolverendpoint) - <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>
* [DeleteResolverQueryLogConfig](#deleteresolverquerylogconfig) - <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>
* [DeleteResolverRule](#deleteresolverrule) - Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.
* [DisassociateFirewallRuleGroup](#disassociatefirewallrulegroup) - Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 
* [DisassociateResolverEndpointIPAddress](#disassociateresolverendpointipaddress) - <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>
* [DisassociateResolverQueryLogConfig](#disassociateresolverquerylogconfig) - <p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>
* [DisassociateResolverRule](#disassociateresolverrule) - <p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>
* [GetFirewallConfig](#getfirewallconfig) - Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* [GetFirewallDomainList](#getfirewalldomainlist) - Retrieves the specified firewall domain list.
* [GetFirewallRuleGroup](#getfirewallrulegroup) - Retrieves the specified firewall rule group. 
* [GetFirewallRuleGroupAssociation](#getfirewallrulegroupassociation) - Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.
* [GetFirewallRuleGroupPolicy](#getfirewallrulegrouppolicy) - Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* [GetResolverConfig](#getresolverconfig) - Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
* [GetResolverDnssecConfig](#getresolverdnssecconfig) - Gets DNSSEC validation information for a specified resource.
* [GetResolverEndpoint](#getresolverendpoint) - Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
* [GetResolverQueryLogConfig](#getresolverquerylogconfig) - Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 
* [GetResolverQueryLogConfigAssociation](#getresolverquerylogconfigassociation) - Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
* [GetResolverQueryLogConfigPolicy](#getresolverquerylogconfigpolicy) - Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.
* [GetResolverRule](#getresolverrule) - Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
* [GetResolverRuleAssociation](#getresolverruleassociation) - Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 
* [GetResolverRulePolicy](#getresolverrulepolicy) - Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 
* [ImportFirewallDomains](#importfirewalldomains) - <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>
* [ListFirewallConfigs](#listfirewallconfigs) - <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
* [ListFirewallDomainLists](#listfirewalldomainlists) - <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
* [ListFirewallDomains](#listfirewalldomains) - <p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
* [ListFirewallRuleGroupAssociations](#listfirewallrulegroupassociations) - <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
* [ListFirewallRuleGroups](#listfirewallrulegroups) - <p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
* [ListFirewallRules](#listfirewallrules) - <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
* [ListResolverConfigs](#listresolverconfigs) - Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.
* [ListResolverDnssecConfigs](#listresolverdnssecconfigs) - Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.
* [ListResolverEndpointIPAddresses](#listresolverendpointipaddresses) - Gets the IP addresses for a specified Resolver endpoint.
* [ListResolverEndpoints](#listresolverendpoints) - Lists all the Resolver endpoints that were created using the current Amazon Web Services account.
* [ListResolverQueryLogConfigAssociations](#listresolverquerylogconfigassociations) - Lists information about associations between Amazon VPCs and query logging configurations.
* [ListResolverQueryLogConfigs](#listresolverquerylogconfigs) - Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
* [ListResolverRuleAssociations](#listresolverruleassociations) - Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.
* [ListResolverRules](#listresolverrules) - Lists the Resolver rules that were created using the current Amazon Web Services account.
* [ListTagsForResource](#listtagsforresource) - Lists the tags that you associated with the specified resource.
* [PutFirewallRuleGroupPolicy](#putfirewallrulegrouppolicy) - Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* [PutResolverQueryLogConfigPolicy](#putresolverquerylogconfigpolicy) - Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
* [PutResolverRulePolicy](#putresolverrulepolicy) - Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.
* [TagResource](#tagresource) - Adds one or more tags to a specified resource.
* [UntagResource](#untagresource) - Removes one or more tags from a specified resource.
* [UpdateFirewallConfig](#updatefirewallconfig) - Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* [UpdateFirewallDomains](#updatefirewalldomains) - Updates the firewall domain list from an array of domain specifications. 
* [UpdateFirewallRule](#updatefirewallrule) - Updates the specified firewall rule. 
* [UpdateFirewallRuleGroupAssociation](#updatefirewallrulegroupassociation) - Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 
* [UpdateResolverConfig](#updateresolverconfig) - Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
* [UpdateResolverDnssecConfig](#updateresolverdnssecconfig) - Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.
* [UpdateResolverEndpoint](#updateresolverendpoint) - Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. 
* [UpdateResolverRule](#updateresolverrule) - Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

## AssociateFirewallRuleGroup

Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. 

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
    res, err := s.SDK.AssociateFirewallRuleGroup(ctx, operations.AssociateFirewallRuleGroupRequest{
        AssociateFirewallRuleGroupRequest: shared.AssociateFirewallRuleGroupRequest{
            CreatorRequestID: "excepturi",
            FirewallRuleGroupID: "nisi",
            MutationProtection: shared.MutationProtectionStatusEnumDisabled.ToPointer(),
            Name: "Miss Raymond Hauck III",
            Priority: 832620,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quo",
                    Value: "odit",
                },
                shared.Tag{
                    Key: "at",
                    Value: "at",
                },
                shared.Tag{
                    Key: "maiores",
                    Value: "molestiae",
                },
                shared.Tag{
                    Key: "quod",
                    Value: "quod",
                },
            },
            VpcID: "esse",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.AssociateFirewallRuleGroupXAmzTargetEnumRoute53ResolverAssociateFirewallRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateFirewallRuleGroupResponse != nil {
        // handle response
    }
}
```

## AssociateResolverEndpointIPAddress

<p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>

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
    res, err := s.SDK.AssociateResolverEndpointIPAddress(ctx, operations.AssociateResolverEndpointIPAddressRequest{
        AssociateResolverEndpointIPAddressRequest: shared.AssociateResolverEndpointIPAddressRequest{
            IPAddress: shared.IPAddressUpdate{
                IP: sdk.String("fugit"),
                IPID: sdk.String("deleniti"),
                Ipv6: sdk.String("fc81:6742:cb73:9205:9293:96fe:a759:6eb1"),
                SubnetID: sdk.String("ipsa"),
            },
            ResolverEndpointID: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzTarget: operations.AssociateResolverEndpointIPAddressXAmzTargetEnumRoute53ResolverAssociateResolverEndpointIPAddress,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateResolverEndpointIPAddressResponse != nil {
        // handle response
    }
}
```

## AssociateResolverQueryLogConfig

<p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>

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
    res, err := s.SDK.AssociateResolverQueryLogConfig(ctx, operations.AssociateResolverQueryLogConfigRequest{
        AssociateResolverQueryLogConfigRequest: shared.AssociateResolverQueryLogConfigRequest{
            ResolverQueryLogConfigID: "nobis",
            ResourceID: "enim",
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.AssociateResolverQueryLogConfigXAmzTargetEnumRoute53ResolverAssociateResolverQueryLogConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateResolverQueryLogConfigResponse != nil {
        // handle response
    }
}
```

## AssociateResolverRule

Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 

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
    res, err := s.SDK.AssociateResolverRule(ctx, operations.AssociateResolverRuleRequest{
        AssociateResolverRuleRequest: shared.AssociateResolverRuleRequest{
            Name: sdk.String("Darrin Brakus"),
            ResolverRuleID: "culpa",
            VPCID: "consequuntur",
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AssociateResolverRuleXAmzTargetEnumRoute53ResolverAssociateResolverRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateResolverRuleResponse != nil {
        // handle response
    }
}
```

## CreateFirewallDomainList

Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 

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
    res, err := s.SDK.CreateFirewallDomainList(ctx, operations.CreateFirewallDomainListRequest{
        CreateFirewallDomainListRequest: shared.CreateFirewallDomainListRequest{
            CreatorRequestID: "velit",
            Name: "Miss Eugene Hauck",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "odit",
                    Value: "quo",
                },
                shared.Tag{
                    Key: "sequi",
                    Value: "tenetur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("possimus"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("temporibus"),
        XAmzTarget: operations.CreateFirewallDomainListXAmzTargetEnumRoute53ResolverCreateFirewallDomainList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFirewallDomainListResponse != nil {
        // handle response
    }
}
```

## CreateFirewallRule

Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.

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
    res, err := s.SDK.CreateFirewallRule(ctx, operations.CreateFirewallRuleRequest{
        CreateFirewallRuleRequest: shared.CreateFirewallRuleRequest{
            Action: shared.ActionEnumAlert,
            BlockOverrideDNSType: shared.BlockOverrideDNSTypeEnumCname.ToPointer(),
            BlockOverrideDomain: sdk.String("quasi"),
            BlockOverrideTTL: sdk.Int64(971945),
            BlockResponse: shared.BlockResponseEnumOverride.ToPointer(),
            CreatorRequestID: "vero",
            FirewallDomainListID: "nihil",
            FirewallRuleGroupID: "praesentium",
            Name: "Jose Moen",
            Priority: 19987,
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.CreateFirewallRuleXAmzTargetEnumRoute53ResolverCreateFirewallRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFirewallRuleResponse != nil {
        // handle response
    }
}
```

## CreateFirewallRuleGroup

Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 

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
    res, err := s.SDK.CreateFirewallRuleGroup(ctx, operations.CreateFirewallRuleGroupRequest{
        CreateFirewallRuleGroupRequest: shared.CreateFirewallRuleGroupRequest{
            CreatorRequestID: "iusto",
            Name: "Maryann Hamill",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "quae",
                    Value: "ipsum",
                },
                shared.Tag{
                    Key: "quidem",
                    Value: "molestias",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "pariatur",
                },
                shared.Tag{
                    Key: "modi",
                    Value: "praesentium",
                },
            },
        },
        XAmzAlgorithm: sdk.String("rem"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("sint"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.CreateFirewallRuleGroupXAmzTargetEnumRoute53ResolverCreateFirewallRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFirewallRuleGroupResponse != nil {
        // handle response
    }
}
```

## CreateResolverEndpoint

<p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>

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
    res, err := s.SDK.CreateResolverEndpoint(ctx, operations.CreateResolverEndpointRequest{
        CreateResolverEndpointRequest: shared.CreateResolverEndpointRequest{
            CreatorRequestID: "incidunt",
            Direction: shared.ResolverEndpointDirectionEnumInbound,
            IPAddresses: []shared.IPAddressRequest{
                shared.IPAddressRequest{
                    IP: sdk.String("est"),
                    Ipv6: sdk.String("d2ab:d442:6980:2d50:2a94:bb4f:63c9:69e9"),
                    SubnetID: "officia",
                },
            },
            Name: sdk.String("Raquel Wilderman"),
            ResolverEndpointType: shared.ResolverEndpointTypeEnumIpv4.ToPointer(),
            SecurityGroupIds: []string{
                "maiores",
                "rerum",
                "dicta",
                "magnam",
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "facere",
                    Value: "ea",
                },
                shared.Tag{
                    Key: "aliquid",
                    Value: "laborum",
                },
                shared.Tag{
                    Key: "accusamus",
                    Value: "non",
                },
                shared.Tag{
                    Key: "occaecati",
                    Value: "enim",
                },
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzTarget: operations.CreateResolverEndpointXAmzTargetEnumRoute53ResolverCreateResolverEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResolverEndpointResponse != nil {
        // handle response
    }
}
```

## CreateResolverQueryLogConfig

<p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>

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
    res, err := s.SDK.CreateResolverQueryLogConfig(ctx, operations.CreateResolverQueryLogConfigRequest{
        CreateResolverQueryLogConfigRequest: shared.CreateResolverQueryLogConfigRequest{
            CreatorRequestID: "deleniti",
            DestinationArn: "sapiente",
            Name: "Sandy Huels",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "molestiae",
                    Value: "perferendis",
                },
                shared.Tag{
                    Key: "nihil",
                    Value: "magnam",
                },
                shared.Tag{
                    Key: "distinctio",
                    Value: "id",
                },
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.CreateResolverQueryLogConfigXAmzTargetEnumRoute53ResolverCreateResolverQueryLogConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResolverQueryLogConfigResponse != nil {
        // handle response
    }
}
```

## CreateResolverRule

For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.

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
    res, err := s.SDK.CreateResolverRule(ctx, operations.CreateResolverRuleRequest{
        CreateResolverRuleRequest: shared.CreateResolverRuleRequest{
            CreatorRequestID: "aspernatur",
            DomainName: "architecto",
            Name: sdk.String("Frances Marks"),
            ResolverEndpointID: sdk.String("quos"),
            RuleType: shared.RuleTypeOptionEnumSystem,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "mollitia",
                    Value: "reiciendis",
                },
            },
            TargetIps: []shared.TargetAddress{
                shared.TargetAddress{
                    IP: sdk.String("ad"),
                    Ipv6: sdk.String("63e2:516f:e4c8:b711:e5b7:fd2e:d028:921c"),
                    Port: sdk.Int64(848009),
                },
                shared.TargetAddress{
                    IP: sdk.String("pariatur"),
                    Ipv6: sdk.String("c692:601f:b576:b0d5:f0d3:0c5f:bb25:8705"),
                    Port: sdk.Int64(199996),
                },
                shared.TargetAddress{
                    IP: sdk.String("eos"),
                    Ipv6: sdk.String("02c7:3d5f:e9b9:0c28:909b:3fe4:9a8d:9cbf"),
                    Port: sdk.Int64(311945),
                },
            },
        },
        XAmzAlgorithm: sdk.String("quos"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.CreateResolverRuleXAmzTargetEnumRoute53ResolverCreateResolverRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResolverRuleResponse != nil {
        // handle response
    }
}
```

## DeleteFirewallDomainList

Deletes the specified domain list. 

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
    res, err := s.SDK.DeleteFirewallDomainList(ctx, operations.DeleteFirewallDomainListRequest{
        DeleteFirewallDomainListRequest: shared.DeleteFirewallDomainListRequest{
            FirewallDomainListID: "hic",
        },
        XAmzAlgorithm: sdk.String("excepturi"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteFirewallDomainListXAmzTargetEnumRoute53ResolverDeleteFirewallDomainList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFirewallDomainListResponse != nil {
        // handle response
    }
}
```

## DeleteFirewallRule

Deletes the specified firewall rule.

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
    res, err := s.SDK.DeleteFirewallRule(ctx, operations.DeleteFirewallRuleRequest{
        DeleteFirewallRuleRequest: shared.DeleteFirewallRuleRequest{
            FirewallDomainListID: "numquam",
            FirewallRuleGroupID: "veritatis",
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzTarget: operations.DeleteFirewallRuleXAmzTargetEnumRoute53ResolverDeleteFirewallRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFirewallRuleResponse != nil {
        // handle response
    }
}
```

## DeleteFirewallRuleGroup

Deletes the specified firewall rule group. 

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
    res, err := s.SDK.DeleteFirewallRuleGroup(ctx, operations.DeleteFirewallRuleGroupRequest{
        DeleteFirewallRuleGroupRequest: shared.DeleteFirewallRuleGroupRequest{
            FirewallRuleGroupID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("atque"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("fugiat"),
        XAmzSignedHeaders: sdk.String("ab"),
        XAmzTarget: operations.DeleteFirewallRuleGroupXAmzTargetEnumRoute53ResolverDeleteFirewallRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFirewallRuleGroupResponse != nil {
        // handle response
    }
}
```

## DeleteResolverEndpoint

<p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>

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
    res, err := s.SDK.DeleteResolverEndpoint(ctx, operations.DeleteResolverEndpointRequest{
        DeleteResolverEndpointRequest: shared.DeleteResolverEndpointRequest{
            ResolverEndpointID: "soluta",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("iusto"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzTarget: operations.DeleteResolverEndpointXAmzTargetEnumRoute53ResolverDeleteResolverEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResolverEndpointResponse != nil {
        // handle response
    }
}
```

## DeleteResolverQueryLogConfig

<p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>

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
    res, err := s.SDK.DeleteResolverQueryLogConfig(ctx, operations.DeleteResolverQueryLogConfigRequest{
        DeleteResolverQueryLogConfigRequest: shared.DeleteResolverQueryLogConfigRequest{
            ResolverQueryLogConfigID: "distinctio",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzTarget: operations.DeleteResolverQueryLogConfigXAmzTargetEnumRoute53ResolverDeleteResolverQueryLogConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResolverQueryLogConfigResponse != nil {
        // handle response
    }
}
```

## DeleteResolverRule

Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.

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
    res, err := s.SDK.DeleteResolverRule(ctx, operations.DeleteResolverRuleRequest{
        DeleteResolverRuleRequest: shared.DeleteResolverRuleRequest{
            ResolverRuleID: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.DeleteResolverRuleXAmzTargetEnumRoute53ResolverDeleteResolverRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResolverRuleResponse != nil {
        // handle response
    }
}
```

## DisassociateFirewallRuleGroup

Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 

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
    res, err := s.SDK.DisassociateFirewallRuleGroup(ctx, operations.DisassociateFirewallRuleGroupRequest{
        DisassociateFirewallRuleGroupRequest: shared.DisassociateFirewallRuleGroupRequest{
            FirewallRuleGroupAssociationID: "deserunt",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("alias"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.DisassociateFirewallRuleGroupXAmzTargetEnumRoute53ResolverDisassociateFirewallRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateFirewallRuleGroupResponse != nil {
        // handle response
    }
}
```

## DisassociateResolverEndpointIPAddress

<p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>

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
    res, err := s.SDK.DisassociateResolverEndpointIPAddress(ctx, operations.DisassociateResolverEndpointIPAddressRequest{
        DisassociateResolverEndpointIPAddressRequest: shared.DisassociateResolverEndpointIPAddressRequest{
            IPAddress: shared.IPAddressUpdate{
                IP: sdk.String("quaerat"),
                IPID: sdk.String("tempora"),
                Ipv6: sdk.String("6ce2:af7a:73cf:3be4:53f8:70b3:26b5:a734"),
                SubnetID: sdk.String("qui"),
            },
            ResolverEndpointID: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.DisassociateResolverEndpointIPAddressXAmzTargetEnumRoute53ResolverDisassociateResolverEndpointIPAddress,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateResolverEndpointIPAddressResponse != nil {
        // handle response
    }
}
```

## DisassociateResolverQueryLogConfig

<p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>

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
    res, err := s.SDK.DisassociateResolverQueryLogConfig(ctx, operations.DisassociateResolverQueryLogConfigRequest{
        DisassociateResolverQueryLogConfigRequest: shared.DisassociateResolverQueryLogConfigRequest{
            ResolverQueryLogConfigID: "aspernatur",
            ResourceID: "dolores",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("quam"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.DisassociateResolverQueryLogConfigXAmzTargetEnumRoute53ResolverDisassociateResolverQueryLogConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateResolverQueryLogConfigResponse != nil {
        // handle response
    }
}
```

## DisassociateResolverRule

<p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>

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
    res, err := s.SDK.DisassociateResolverRule(ctx, operations.DisassociateResolverRuleRequest{
        DisassociateResolverRuleRequest: shared.DisassociateResolverRuleRequest{
            ResolverRuleID: "neque",
            VPCID: "fugit",
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzTarget: operations.DisassociateResolverRuleXAmzTargetEnumRoute53ResolverDisassociateResolverRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateResolverRuleResponse != nil {
        // handle response
    }
}
```

## GetFirewallConfig

Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

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
    res, err := s.SDK.GetFirewallConfig(ctx, operations.GetFirewallConfigRequest{
        GetFirewallConfigRequest: shared.GetFirewallConfigRequest{
            ResourceID: "cumque",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("nobis"),
        XAmzCredential: sdk.String("et"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.GetFirewallConfigXAmzTargetEnumRoute53ResolverGetFirewallConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFirewallConfigResponse != nil {
        // handle response
    }
}
```

## GetFirewallDomainList

Retrieves the specified firewall domain list.

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
    res, err := s.SDK.GetFirewallDomainList(ctx, operations.GetFirewallDomainListRequest{
        GetFirewallDomainListRequest: shared.GetFirewallDomainListRequest{
            FirewallDomainListID: "quos",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("labore"),
        XAmzTarget: operations.GetFirewallDomainListXAmzTargetEnumRoute53ResolverGetFirewallDomainList,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFirewallDomainListResponse != nil {
        // handle response
    }
}
```

## GetFirewallRuleGroup

Retrieves the specified firewall rule group. 

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
    res, err := s.SDK.GetFirewallRuleGroup(ctx, operations.GetFirewallRuleGroupRequest{
        GetFirewallRuleGroupRequest: shared.GetFirewallRuleGroupRequest{
            FirewallRuleGroupID: "adipisci",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzTarget: operations.GetFirewallRuleGroupXAmzTargetEnumRoute53ResolverGetFirewallRuleGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFirewallRuleGroupResponse != nil {
        // handle response
    }
}
```

## GetFirewallRuleGroupAssociation

Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.

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
    res, err := s.SDK.GetFirewallRuleGroupAssociation(ctx, operations.GetFirewallRuleGroupAssociationRequest{
        GetFirewallRuleGroupAssociationRequest: shared.GetFirewallRuleGroupAssociationRequest{
            FirewallRuleGroupAssociationID: "est",
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("porro"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("ut"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("qui"),
        XAmzTarget: operations.GetFirewallRuleGroupAssociationXAmzTargetEnumRoute53ResolverGetFirewallRuleGroupAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFirewallRuleGroupAssociationResponse != nil {
        // handle response
    }
}
```

## GetFirewallRuleGroupPolicy

Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

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
    res, err := s.SDK.GetFirewallRuleGroupPolicy(ctx, operations.GetFirewallRuleGroupPolicyRequest{
        GetFirewallRuleGroupPolicyRequest: shared.GetFirewallRuleGroupPolicyRequest{
            Arn: "quae",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("odio"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("omnis"),
        XAmzTarget: operations.GetFirewallRuleGroupPolicyXAmzTargetEnumRoute53ResolverGetFirewallRuleGroupPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFirewallRuleGroupPolicyResponse != nil {
        // handle response
    }
}
```

## GetResolverConfig

Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

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
    res, err := s.SDK.GetResolverConfig(ctx, operations.GetResolverConfigRequest{
        GetResolverConfigRequest: shared.GetResolverConfigRequest{
            ResourceID: "quis",
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzTarget: operations.GetResolverConfigXAmzTargetEnumRoute53ResolverGetResolverConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverConfigResponse != nil {
        // handle response
    }
}
```

## GetResolverDnssecConfig

Gets DNSSEC validation information for a specified resource.

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
    res, err := s.SDK.GetResolverDnssecConfig(ctx, operations.GetResolverDnssecConfigRequest{
        GetResolverDnssecConfigRequest: shared.GetResolverDnssecConfigRequest{
            ResourceID: "hic",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("vero"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.GetResolverDnssecConfigXAmzTargetEnumRoute53ResolverGetResolverDnssecConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverDnssecConfigResponse != nil {
        // handle response
    }
}
```

## GetResolverEndpoint

Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.

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
    res, err := s.SDK.GetResolverEndpoint(ctx, operations.GetResolverEndpointRequest{
        GetResolverEndpointRequest: shared.GetResolverEndpointRequest{
            ResolverEndpointID: "dolore",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.GetResolverEndpointXAmzTargetEnumRoute53ResolverGetResolverEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverEndpointResponse != nil {
        // handle response
    }
}
```

## GetResolverQueryLogConfig

Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 

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
    res, err := s.SDK.GetResolverQueryLogConfig(ctx, operations.GetResolverQueryLogConfigRequest{
        GetResolverQueryLogConfigRequest: shared.GetResolverQueryLogConfigRequest{
            ResolverQueryLogConfigID: "exercitationem",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("doloribus"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.GetResolverQueryLogConfigXAmzTargetEnumRoute53ResolverGetResolverQueryLogConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverQueryLogConfigResponse != nil {
        // handle response
    }
}
```

## GetResolverQueryLogConfigAssociation

Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.

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
    res, err := s.SDK.GetResolverQueryLogConfigAssociation(ctx, operations.GetResolverQueryLogConfigAssociationRequest{
        GetResolverQueryLogConfigAssociationRequest: shared.GetResolverQueryLogConfigAssociationRequest{
            ResolverQueryLogConfigAssociationID: "ducimus",
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.GetResolverQueryLogConfigAssociationXAmzTargetEnumRoute53ResolverGetResolverQueryLogConfigAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverQueryLogConfigAssociationResponse != nil {
        // handle response
    }
}
```

## GetResolverQueryLogConfigPolicy

Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.

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
    res, err := s.SDK.GetResolverQueryLogConfigPolicy(ctx, operations.GetResolverQueryLogConfigPolicyRequest{
        GetResolverQueryLogConfigPolicyRequest: shared.GetResolverQueryLogConfigPolicyRequest{
            Arn: "possimus",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ratione"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.GetResolverQueryLogConfigPolicyXAmzTargetEnumRoute53ResolverGetResolverQueryLogConfigPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverQueryLogConfigPolicyResponse != nil {
        // handle response
    }
}
```

## GetResolverRule

Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.

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
    res, err := s.SDK.GetResolverRule(ctx, operations.GetResolverRuleRequest{
        GetResolverRuleRequest: shared.GetResolverRuleRequest{
            ResolverRuleID: "quasi",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("quisquam"),
        XAmzTarget: operations.GetResolverRuleXAmzTargetEnumRoute53ResolverGetResolverRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverRuleResponse != nil {
        // handle response
    }
}
```

## GetResolverRuleAssociation

Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 

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
    res, err := s.SDK.GetResolverRuleAssociation(ctx, operations.GetResolverRuleAssociationRequest{
        GetResolverRuleAssociationRequest: shared.GetResolverRuleAssociationRequest{
            ResolverRuleAssociationID: "saepe",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.GetResolverRuleAssociationXAmzTargetEnumRoute53ResolverGetResolverRuleAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverRuleAssociationResponse != nil {
        // handle response
    }
}
```

## GetResolverRulePolicy

Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 

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
    res, err := s.SDK.GetResolverRulePolicy(ctx, operations.GetResolverRulePolicyRequest{
        GetResolverRulePolicyRequest: shared.GetResolverRulePolicyRequest{
            Arn: "ea",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("a"),
        XAmzTarget: operations.GetResolverRulePolicyXAmzTargetEnumRoute53ResolverGetResolverRulePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResolverRulePolicyResponse != nil {
        // handle response
    }
}
```

## ImportFirewallDomains

<p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>

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
    res, err := s.SDK.ImportFirewallDomains(ctx, operations.ImportFirewallDomainsRequest{
        ImportFirewallDomainsRequest: shared.ImportFirewallDomainsRequest{
            DomainFileURL: "libero",
            FirewallDomainListID: "aut",
            Operation: shared.FirewallDomainImportOperationEnumReplace,
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("inventore"),
        XAmzTarget: operations.ImportFirewallDomainsXAmzTargetEnumRoute53ResolverImportFirewallDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportFirewallDomainsResponse != nil {
        // handle response
    }
}
```

## ListFirewallConfigs

<p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>

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
    res, err := s.SDK.ListFirewallConfigs(ctx, operations.ListFirewallConfigsRequest{
        ListFirewallConfigsRequest: shared.ListFirewallConfigsRequest{
            MaxResults: sdk.Int64(250622),
            NextToken: sdk.String("et"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("laborum"),
        XAmzAlgorithm: sdk.String("placeat"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("autem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.ListFirewallConfigsXAmzTargetEnumRoute53ResolverListFirewallConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallConfigsResponse != nil {
        // handle response
    }
}
```

## ListFirewallDomainLists

<p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>

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
    res, err := s.SDK.ListFirewallDomainLists(ctx, operations.ListFirewallDomainListsRequest{
        ListFirewallDomainListsRequest: shared.ListFirewallDomainListsRequest{
            MaxResults: sdk.Int64(860552),
            NextToken: sdk.String("voluptas"),
        },
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("quasi"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzTarget: operations.ListFirewallDomainListsXAmzTargetEnumRoute53ResolverListFirewallDomainLists,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallDomainListsResponse != nil {
        // handle response
    }
}
```

## ListFirewallDomains

<p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>

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
    res, err := s.SDK.ListFirewallDomains(ctx, operations.ListFirewallDomainsRequest{
        ListFirewallDomainsRequest: shared.ListFirewallDomainsRequest{
            FirewallDomainListID: "odio",
            MaxResults: sdk.Int64(262118),
            NextToken: sdk.String("esse"),
        },
        MaxResults: sdk.String("esse"),
        NextToken: sdk.String("rem"),
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        XAmzTarget: operations.ListFirewallDomainsXAmzTargetEnumRoute53ResolverListFirewallDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallDomainsResponse != nil {
        // handle response
    }
}
```

## ListFirewallRuleGroupAssociations

<p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>

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
    res, err := s.SDK.ListFirewallRuleGroupAssociations(ctx, operations.ListFirewallRuleGroupAssociationsRequest{
        ListFirewallRuleGroupAssociationsRequest: shared.ListFirewallRuleGroupAssociationsRequest{
            FirewallRuleGroupID: sdk.String("assumenda"),
            MaxResults: sdk.Int64(181151),
            NextToken: sdk.String("praesentium"),
            Priority: sdk.Int64(788546),
            Status: shared.FirewallRuleGroupAssociationStatusEnumComplete.ToPointer(),
            VpcID: sdk.String("ipsa"),
        },
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("quidem"),
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("fuga"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzTarget: operations.ListFirewallRuleGroupAssociationsXAmzTargetEnumRoute53ResolverListFirewallRuleGroupAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallRuleGroupAssociationsResponse != nil {
        // handle response
    }
}
```

## ListFirewallRuleGroups

<p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>

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
    res, err := s.SDK.ListFirewallRuleGroups(ctx, operations.ListFirewallRuleGroupsRequest{
        ListFirewallRuleGroupsRequest: shared.ListFirewallRuleGroupsRequest{
            MaxResults: sdk.Int64(373813),
            NextToken: sdk.String("ab"),
        },
        MaxResults: sdk.String("cupiditate"),
        NextToken: sdk.String("consequatur"),
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("quo"),
        XAmzSignedHeaders: sdk.String("esse"),
        XAmzTarget: operations.ListFirewallRuleGroupsXAmzTargetEnumRoute53ResolverListFirewallRuleGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallRuleGroupsResponse != nil {
        // handle response
    }
}
```

## ListFirewallRules

<p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>

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
    res, err := s.SDK.ListFirewallRules(ctx, operations.ListFirewallRulesRequest{
        ListFirewallRulesRequest: shared.ListFirewallRulesRequest{
            Action: shared.ActionEnumAlert.ToPointer(),
            FirewallRuleGroupID: "aperiam",
            MaxResults: sdk.Int64(715179),
            NextToken: sdk.String("quod"),
            Priority: sdk.Int64(490819),
        },
        MaxResults: sdk.String("inventore"),
        NextToken: sdk.String("nihil"),
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ListFirewallRulesXAmzTargetEnumRoute53ResolverListFirewallRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFirewallRulesResponse != nil {
        // handle response
    }
}
```

## ListResolverConfigs

Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.

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
    res, err := s.SDK.ListResolverConfigs(ctx, operations.ListResolverConfigsRequest{
        ListResolverConfigsRequest: shared.ListResolverConfigsRequest{
            MaxResults: sdk.Int64(174112),
            NextToken: sdk.String("deserunt"),
        },
        MaxResults: sdk.String("molestiae"),
        NextToken: sdk.String("accusantium"),
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("quas"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.ListResolverConfigsXAmzTargetEnumRoute53ResolverListResolverConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverConfigsResponse != nil {
        // handle response
    }
}
```

## ListResolverDnssecConfigs

Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.

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
    res, err := s.SDK.ListResolverDnssecConfigs(ctx, operations.ListResolverDnssecConfigsRequest{
        ListResolverDnssecConfigsRequest: shared.ListResolverDnssecConfigsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Randall Lindgren"),
                    Values: []string{
                        "fugit",
                        "sapiente",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Norma Christiansen"),
                    Values: []string{
                        "et",
                        "esse",
                        "eveniet",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Patrick Koch"),
                    Values: []string{
                        "aliquid",
                        "quasi",
                        "saepe",
                        "vel",
                    },
                },
            },
            MaxResults: sdk.Int64(690025),
            NextToken: sdk.String("molestiae"),
        },
        MaxResults: sdk.String("rerum"),
        NextToken: sdk.String("occaecati"),
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("adipisci"),
        XAmzTarget: operations.ListResolverDnssecConfigsXAmzTargetEnumRoute53ResolverListResolverDnssecConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverDnssecConfigsResponse != nil {
        // handle response
    }
}
```

## ListResolverEndpointIPAddresses

Gets the IP addresses for a specified Resolver endpoint.

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
    res, err := s.SDK.ListResolverEndpointIPAddresses(ctx, operations.ListResolverEndpointIPAddressesRequest{
        ListResolverEndpointIPAddressesRequest: shared.ListResolverEndpointIPAddressesRequest{
            MaxResults: sdk.Int64(766964),
            NextToken: sdk.String("consequuntur"),
            ResolverEndpointID: "consequatur",
        },
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("quaerat"),
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.ListResolverEndpointIPAddressesXAmzTargetEnumRoute53ResolverListResolverEndpointIPAddresses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverEndpointIPAddressesResponse != nil {
        // handle response
    }
}
```

## ListResolverEndpoints

Lists all the Resolver endpoints that were created using the current Amazon Web Services account.

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
    res, err := s.SDK.ListResolverEndpoints(ctx, operations.ListResolverEndpointsRequest{
        ListResolverEndpointsRequest: shared.ListResolverEndpointsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Joyce Wilderman"),
                    Values: []string{
                        "possimus",
                        "quia",
                        "eveniet",
                        "asperiores",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Miss Peter Cronin"),
                    Values: []string{
                        "tenetur",
                        "quae",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Chester King"),
                    Values: []string{
                        "soluta",
                        "accusantium",
                        "aliquam",
                        "sapiente",
                    },
                },
            },
            MaxResults: sdk.Int64(119771),
            NextToken: sdk.String("ullam"),
        },
        MaxResults: sdk.String("reprehenderit"),
        NextToken: sdk.String("ullam"),
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.ListResolverEndpointsXAmzTargetEnumRoute53ResolverListResolverEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverEndpointsResponse != nil {
        // handle response
    }
}
```

## ListResolverQueryLogConfigAssociations

Lists information about associations between Amazon VPCs and query logging configurations.

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
    res, err := s.SDK.ListResolverQueryLogConfigAssociations(ctx, operations.ListResolverQueryLogConfigAssociationsRequest{
        ListResolverQueryLogConfigAssociationsRequest: shared.ListResolverQueryLogConfigAssociationsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Roger Monahan PhD"),
                    Values: []string{
                        "voluptate",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Joann Bogan"),
                    Values: []string{
                        "temporibus",
                        "accusantium",
                        "rem",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Marsha Keebler IV"),
                    Values: []string{
                        "voluptatem",
                        "dolor",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Francis Russel"),
                    Values: []string{
                        "dignissimos",
                    },
                },
            },
            MaxResults: sdk.Int64(115484),
            NextToken: sdk.String("maiores"),
            SortBy: sdk.String("natus"),
            SortOrder: shared.SortOrderEnumAscending.ToPointer(),
        },
        MaxResults: sdk.String("voluptatibus"),
        NextToken: sdk.String("voluptas"),
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("aperiam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzTarget: operations.ListResolverQueryLogConfigAssociationsXAmzTargetEnumRoute53ResolverListResolverQueryLogConfigAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverQueryLogConfigAssociationsResponse != nil {
        // handle response
    }
}
```

## ListResolverQueryLogConfigs

Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.

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
    res, err := s.SDK.ListResolverQueryLogConfigs(ctx, operations.ListResolverQueryLogConfigsRequest{
        ListResolverQueryLogConfigsRequest: shared.ListResolverQueryLogConfigsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Blanche Yundt II"),
                    Values: []string{
                        "quod",
                        "labore",
                        "ab",
                        "adipisci",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Orlando Homenick"),
                    Values: []string{
                        "recusandae",
                        "totam",
                        "fugiat",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Dora Luettgen"),
                    Values: []string{
                        "facilis",
                        "cum",
                        "commodi",
                        "in",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Lela Shields"),
                    Values: []string{
                        "aperiam",
                        "cum",
                    },
                },
            },
            MaxResults: sdk.Int64(232627),
            NextToken: sdk.String("in"),
            SortBy: sdk.String("exercitationem"),
            SortOrder: shared.SortOrderEnumDescending.ToPointer(),
        },
        MaxResults: sdk.String("facere"),
        NextToken: sdk.String("numquam"),
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("quidem"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.ListResolverQueryLogConfigsXAmzTargetEnumRoute53ResolverListResolverQueryLogConfigs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverQueryLogConfigsResponse != nil {
        // handle response
    }
}
```

## ListResolverRuleAssociations

Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.

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
    res, err := s.SDK.ListResolverRuleAssociations(ctx, operations.ListResolverRuleAssociationsRequest{
        ListResolverRuleAssociationsRequest: shared.ListResolverRuleAssociationsRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Chad Franey IV"),
                    Values: []string{
                        "debitis",
                        "consectetur",
                        "corporis",
                        "harum",
                    },
                },
            },
            MaxResults: sdk.Int64(385237),
            NextToken: sdk.String("ipsa"),
        },
        MaxResults: sdk.String("voluptates"),
        NextToken: sdk.String("libero"),
        XAmzAlgorithm: sdk.String("vitae"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("voluptas"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.ListResolverRuleAssociationsXAmzTargetEnumRoute53ResolverListResolverRuleAssociations,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverRuleAssociationsResponse != nil {
        // handle response
    }
}
```

## ListResolverRules

Lists the Resolver rules that were created using the current Amazon Web Services account.

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
    res, err := s.SDK.ListResolverRules(ctx, operations.ListResolverRulesRequest{
        ListResolverRulesRequest: shared.ListResolverRulesRequest{
            Filters: []shared.Filter{
                shared.Filter{
                    Name: sdk.String("Gayle Parisian"),
                    Values: []string{
                        "blanditiis",
                    },
                },
                shared.Filter{
                    Name: sdk.String("Valerie Haag"),
                    Values: []string{
                        "adipisci",
                        "cum",
                    },
                },
            },
            MaxResults: sdk.Int64(502389),
            NextToken: sdk.String("quas"),
        },
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("nesciunt"),
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.ListResolverRulesXAmzTargetEnumRoute53ResolverListResolverRules,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResolverRulesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags that you associated with the specified resource.

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
            MaxResults: sdk.Int64(24619),
            NextToken: sdk.String("rerum"),
            ResourceArn: "sed",
        },
        MaxResults: sdk.String("reiciendis"),
        NextToken: sdk.String("explicabo"),
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumRoute53ResolverListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## PutFirewallRuleGroupPolicy

Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

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
    res, err := s.SDK.PutFirewallRuleGroupPolicy(ctx, operations.PutFirewallRuleGroupPolicyRequest{
        PutFirewallRuleGroupPolicyRequest: shared.PutFirewallRuleGroupPolicyRequest{
            Arn: "laborum",
            FirewallRuleGroupPolicy: "sed",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.PutFirewallRuleGroupPolicyXAmzTargetEnumRoute53ResolverPutFirewallRuleGroupPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutFirewallRuleGroupPolicyResponse != nil {
        // handle response
    }
}
```

## PutResolverQueryLogConfigPolicy

Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.

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
    res, err := s.SDK.PutResolverQueryLogConfigPolicy(ctx, operations.PutResolverQueryLogConfigPolicyRequest{
        PutResolverQueryLogConfigPolicyRequest: shared.PutResolverQueryLogConfigPolicyRequest{
            Arn: "suscipit",
            ResolverQueryLogConfigPolicy: "sapiente",
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.PutResolverQueryLogConfigPolicyXAmzTargetEnumRoute53ResolverPutResolverQueryLogConfigPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResolverQueryLogConfigPolicyResponse != nil {
        // handle response
    }
}
```

## PutResolverRulePolicy

Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.

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
    res, err := s.SDK.PutResolverRulePolicy(ctx, operations.PutResolverRulePolicyRequest{
        PutResolverRulePolicyRequest: shared.PutResolverRulePolicyRequest{
            Arn: "sed",
            ResolverRulePolicy: "provident",
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.PutResolverRulePolicyXAmzTargetEnumRoute53ResolverPutResolverRulePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResolverRulePolicyResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds one or more tags to a specified resource.

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
            ResourceArn: "tempora",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptate",
                    Value: "reiciendis",
                },
                shared.Tag{
                    Key: "ex",
                    Value: "sit",
                },
            },
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("incidunt"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumRoute53ResolverTagResource,
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

Removes one or more tags from a specified resource.

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
            ResourceArn: "debitis",
            TagKeys: []string{
                "sit",
                "nobis",
                "error",
            },
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("magni"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumRoute53ResolverUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallConfig

Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

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
    res, err := s.SDK.UpdateFirewallConfig(ctx, operations.UpdateFirewallConfigRequest{
        UpdateFirewallConfigRequest: shared.UpdateFirewallConfigRequest{
            FirewallFailOpen: shared.FirewallFailOpenStatusEnumUseLocalResourceSetting,
            ResourceID: "numquam",
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("in"),
        XAmzCredential: sdk.String("officiis"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.UpdateFirewallConfigXAmzTargetEnumRoute53ResolverUpdateFirewallConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallConfigResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallDomains

Updates the firewall domain list from an array of domain specifications. 

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
    res, err := s.SDK.UpdateFirewallDomains(ctx, operations.UpdateFirewallDomainsRequest{
        UpdateFirewallDomainsRequest: shared.UpdateFirewallDomainsRequest{
            Domains: []string{
                "laboriosam",
                "dolorum",
                "voluptatum",
            },
            FirewallDomainListID: "error",
            Operation: shared.FirewallDomainUpdateOperationEnumReplace,
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("nostrum"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.UpdateFirewallDomainsXAmzTargetEnumRoute53ResolverUpdateFirewallDomains,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallDomainsResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallRule

Updates the specified firewall rule. 

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
    res, err := s.SDK.UpdateFirewallRule(ctx, operations.UpdateFirewallRuleRequest{
        UpdateFirewallRuleRequest: shared.UpdateFirewallRuleRequest{
            Action: shared.ActionEnumBlock.ToPointer(),
            BlockOverrideDNSType: shared.BlockOverrideDNSTypeEnumCname.ToPointer(),
            BlockOverrideDomain: sdk.String("accusamus"),
            BlockOverrideTTL: sdk.Int64(272683),
            BlockResponse: shared.BlockResponseEnumNxdomain.ToPointer(),
            FirewallDomainListID: "fugit",
            FirewallRuleGroupID: "ut",
            Name: sdk.String("George Nicolas"),
            Priority: sdk.Int64(7884),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("sit"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("corporis"),
        XAmzTarget: operations.UpdateFirewallRuleXAmzTargetEnumRoute53ResolverUpdateFirewallRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallRuleResponse != nil {
        // handle response
    }
}
```

## UpdateFirewallRuleGroupAssociation

Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 

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
    res, err := s.SDK.UpdateFirewallRuleGroupAssociation(ctx, operations.UpdateFirewallRuleGroupAssociationRequest{
        UpdateFirewallRuleGroupAssociationRequest: shared.UpdateFirewallRuleGroupAssociationRequest{
            FirewallRuleGroupAssociationID: "et",
            MutationProtection: shared.MutationProtectionStatusEnumDisabled.ToPointer(),
            Name: sdk.String("Jane Bailey"),
            Priority: sdk.Int64(906172),
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("consequatur"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("harum"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.UpdateFirewallRuleGroupAssociationXAmzTargetEnumRoute53ResolverUpdateFirewallRuleGroupAssociation,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFirewallRuleGroupAssociationResponse != nil {
        // handle response
    }
}
```

## UpdateResolverConfig

Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

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
    res, err := s.SDK.UpdateResolverConfig(ctx, operations.UpdateResolverConfigRequest{
        UpdateResolverConfigRequest: shared.UpdateResolverConfigRequest{
            AutodefinedReverseFlag: shared.AutodefinedReverseFlagEnumEnable,
            ResourceID: "occaecati",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("nam"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.UpdateResolverConfigXAmzTargetEnumRoute53ResolverUpdateResolverConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResolverConfigResponse != nil {
        // handle response
    }
}
```

## UpdateResolverDnssecConfig

Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.

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
    res, err := s.SDK.UpdateResolverDnssecConfig(ctx, operations.UpdateResolverDnssecConfigRequest{
        UpdateResolverDnssecConfigRequest: shared.UpdateResolverDnssecConfigRequest{
            ResourceID: "alias",
            Validation: shared.ValidationEnumEnable,
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("delectus"),
        XAmzTarget: operations.UpdateResolverDnssecConfigXAmzTargetEnumRoute53ResolverUpdateResolverDnssecConfig,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResolverDnssecConfigResponse != nil {
        // handle response
    }
}
```

## UpdateResolverEndpoint

Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. 

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
    res, err := s.SDK.UpdateResolverEndpoint(ctx, operations.UpdateResolverEndpointRequest{
        UpdateResolverEndpointRequest: shared.UpdateResolverEndpointRequest{
            Name: sdk.String("Joseph Orn"),
            ResolverEndpointID: "facere",
            ResolverEndpointType: shared.ResolverEndpointTypeEnumDualstack.ToPointer(),
            UpdateIPAddresses: []shared.UpdateIPAddress{
                shared.UpdateIPAddress{
                    IPID: "mollitia",
                    Ipv6: "50ce:187f:86bc:173d:689e:ee95:26f8:d986",
                },
                shared.UpdateIPAddress{
                    IPID: "repudiandae",
                    Ipv6: "881e:ad4f:0e10:1256:3f94:e29e:973e:922a",
                },
                shared.UpdateIPAddress{
                    IPID: "quis",
                    Ipv6: "7a15:be3e:0608:07e2:b6e3:ab88:45f0:597a",
                },
            },
        },
        XAmzAlgorithm: sdk.String("voluptas"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("id"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.UpdateResolverEndpointXAmzTargetEnumRoute53ResolverUpdateResolverEndpoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResolverEndpointResponse != nil {
        // handle response
    }
}
```

## UpdateResolverRule

Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

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
    res, err := s.SDK.UpdateResolverRule(ctx, operations.UpdateResolverRuleRequest{
        UpdateResolverRuleRequest: shared.UpdateResolverRuleRequest{
            Config: shared.ResolverRuleConfig{
                Name: sdk.String("Dr. Lee Dooley"),
                ResolverEndpointID: sdk.String("quaerat"),
                TargetIps: []shared.TargetAddress{
                    shared.TargetAddress{
                        IP: sdk.String("ex"),
                        Ipv6: sdk.String("4a3e:865e:7956:f925:1a5a:9da6:60ff:57bf"),
                        Port: sdk.Int64(637583),
                    },
                    shared.TargetAddress{
                        IP: sdk.String("laborum"),
                        Ipv6: sdk.String("d4f9:efc1:b451:2c10:3264:8dc2:f615:199e"),
                        Port: sdk.Int64(745398),
                    },
                },
            },
            ResolverRuleID: "hic",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("eaque"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("debitis"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.UpdateResolverRuleXAmzTargetEnumRoute53ResolverUpdateResolverRule,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResolverRuleResponse != nil {
        // handle response
    }
}
```
