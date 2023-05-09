# SDK

## Overview

<p>When you create a VPC using Amazon VPC, you automatically get DNS resolution within the VPC from Route 53 Resolver. By default, Resolver answers DNS queries for VPC domain names such as domain names for EC2 instances or Elastic Load Balancing load balancers. Resolver performs recursive lookups against public name servers for all other domain names.</p> <p>You can also configure DNS resolution between your VPC and your network over a Direct Connect or VPN connection:</p> <p> <b>Forward DNS queries from resolvers on your network to Route 53 Resolver</b> </p> <p>DNS resolvers on your network can forward DNS queries to Resolver in a specified VPC. This allows your DNS resolvers to easily resolve domain names for Amazon Web Services resources such as EC2 instances or records in a Route 53 private hosted zone. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-network-to-vpc">How DNS Resolvers on Your Network Forward DNS Queries to Route 53 Resolver</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p> <b>Conditionally forward queries from a VPC to resolvers on your network</b> </p> <p>You can configure Resolver to forward queries that it receives from EC2 instances in your VPCs to DNS resolvers on your network. To forward selected queries, you create Resolver rules that specify the domain names for the DNS queries that you want to forward (such as example.com), and the IP addresses of the DNS resolvers on your network that you want to forward the queries to. If a query matches multiple rules (example.com, acme.example.com), Resolver chooses the rule with the most specific match (acme.example.com) and forwards the query to the IP addresses that you specified in that rule. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resolver.html#resolver-overview-forward-vpc-to-network">How Route 53 Resolver Forwards DNS Queries from Your VPCs to Your Network</a> in the <i>Amazon Route 53 Developer Guide</i>.</p> <p>Like Amazon VPC, Resolver is Regional. In each Region where you have VPCs, you can choose whether to forward queries from your VPCs to your network (outbound queries), from your network to your VPCs (inbound queries), or both.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/route53resolver/>
### Available Operations

* [associateFirewallRuleGroup](#associatefirewallrulegroup) - Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. 
* [associateResolverEndpointIpAddress](#associateresolverendpointipaddress) - <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>
* [associateResolverQueryLogConfig](#associateresolverquerylogconfig) - <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>
* [associateResolverRule](#associateresolverrule) - Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 
* [createFirewallDomainList](#createfirewalldomainlist) - Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 
* [createFirewallRule](#createfirewallrule) - Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.
* [createFirewallRuleGroup](#createfirewallrulegroup) - Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 
* [createResolverEndpoint](#createresolverendpoint) - <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>
* [createResolverQueryLogConfig](#createresolverquerylogconfig) - <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>
* [createResolverRule](#createresolverrule) - For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
* [deleteFirewallDomainList](#deletefirewalldomainlist) - Deletes the specified domain list. 
* [deleteFirewallRule](#deletefirewallrule) - Deletes the specified firewall rule.
* [deleteFirewallRuleGroup](#deletefirewallrulegroup) - Deletes the specified firewall rule group. 
* [deleteResolverEndpoint](#deleteresolverendpoint) - <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>
* [deleteResolverQueryLogConfig](#deleteresolverquerylogconfig) - <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>
* [deleteResolverRule](#deleteresolverrule) - Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.
* [disassociateFirewallRuleGroup](#disassociatefirewallrulegroup) - Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 
* [disassociateResolverEndpointIpAddress](#disassociateresolverendpointipaddress) - <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>
* [disassociateResolverQueryLogConfig](#disassociateresolverquerylogconfig) - <p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>
* [disassociateResolverRule](#disassociateresolverrule) - <p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>
* [getFirewallConfig](#getfirewallconfig) - Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* [getFirewallDomainList](#getfirewalldomainlist) - Retrieves the specified firewall domain list.
* [getFirewallRuleGroup](#getfirewallrulegroup) - Retrieves the specified firewall rule group. 
* [getFirewallRuleGroupAssociation](#getfirewallrulegroupassociation) - Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.
* [getFirewallRuleGroupPolicy](#getfirewallrulegrouppolicy) - Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* [getResolverConfig](#getresolverconfig) - Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
* [getResolverDnssecConfig](#getresolverdnssecconfig) - Gets DNSSEC validation information for a specified resource.
* [getResolverEndpoint](#getresolverendpoint) - Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
* [getResolverQueryLogConfig](#getresolverquerylogconfig) - Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 
* [getResolverQueryLogConfigAssociation](#getresolverquerylogconfigassociation) - Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
* [getResolverQueryLogConfigPolicy](#getresolverquerylogconfigpolicy) - Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.
* [getResolverRule](#getresolverrule) - Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
* [getResolverRuleAssociation](#getresolverruleassociation) - Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 
* [getResolverRulePolicy](#getresolverrulepolicy) - Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 
* [importFirewallDomains](#importfirewalldomains) - <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>
* [listFirewallConfigs](#listfirewallconfigs) - <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
* [listFirewallDomainLists](#listfirewalldomainlists) - <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
* [listFirewallDomains](#listfirewalldomains) - <p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
* [listFirewallRuleGroupAssociations](#listfirewallrulegroupassociations) - <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
* [listFirewallRuleGroups](#listfirewallrulegroups) - <p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
* [listFirewallRules](#listfirewallrules) - <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
* [listResolverConfigs](#listresolverconfigs) - Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.
* [listResolverDnssecConfigs](#listresolverdnssecconfigs) - Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.
* [listResolverEndpointIpAddresses](#listresolverendpointipaddresses) - Gets the IP addresses for a specified Resolver endpoint.
* [listResolverEndpoints](#listresolverendpoints) - Lists all the Resolver endpoints that were created using the current Amazon Web Services account.
* [listResolverQueryLogConfigAssociations](#listresolverquerylogconfigassociations) - Lists information about associations between Amazon VPCs and query logging configurations.
* [listResolverQueryLogConfigs](#listresolverquerylogconfigs) - Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
* [listResolverRuleAssociations](#listresolverruleassociations) - Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.
* [listResolverRules](#listresolverrules) - Lists the Resolver rules that were created using the current Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - Lists the tags that you associated with the specified resource.
* [putFirewallRuleGroupPolicy](#putfirewallrulegrouppolicy) - Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* [putResolverQueryLogConfigPolicy](#putresolverquerylogconfigpolicy) - Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
* [putResolverRulePolicy](#putresolverrulepolicy) - Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.
* [tagResource](#tagresource) - Adds one or more tags to a specified resource.
* [untagResource](#untagresource) - Removes one or more tags from a specified resource.
* [updateFirewallConfig](#updatefirewallconfig) - Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* [updateFirewallDomains](#updatefirewalldomains) - Updates the firewall domain list from an array of domain specifications. 
* [updateFirewallRule](#updatefirewallrule) - Updates the specified firewall rule. 
* [updateFirewallRuleGroupAssociation](#updatefirewallrulegroupassociation) - Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 
* [updateResolverConfig](#updateresolverconfig) - Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
* [updateResolverDnssecConfig](#updateresolverdnssecconfig) - Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.
* [updateResolverEndpoint](#updateresolverendpoint) - Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. 
* [updateResolverRule](#updateresolverrule) - Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

## associateFirewallRuleGroup

Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupResponse;
import org.openapis.openapi.models.operations.AssociateFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.shared.MutationProtectionStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateFirewallRuleGroupRequest req = new AssociateFirewallRuleGroupRequest(                new AssociateFirewallRuleGroupRequest("perferendis", "ipsam", "repellendus", 957156L, "quo") {{
                                mutationProtection = MutationProtectionStatusEnum.ENABLED;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("molestiae", "quod") {{
                                        key = "at";
                                        value = "maiores";
                                    }}),
                                    add(new Tag("totam", "porro") {{
                                        key = "quod";
                                        value = "esse";
                                    }}),
                                    add(new Tag("nam", "officia") {{
                                        key = "dolorum";
                                        value = "dicta";
                                    }}),
                                    add(new Tag("deleniti", "hic") {{
                                        key = "occaecati";
                                        value = "fugit";
                                    }}),
                                }};
                            }};, AssociateFirewallRuleGroupXAmzTargetEnum.ROUTE53_RESOLVER_ASSOCIATE_FIREWALL_RULE_GROUP) {{
                xAmzAlgorithm = "optio";
                xAmzContentSha256 = "totam";
                xAmzCredential = "beatae";
                xAmzDate = "commodi";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "qui";
            }};            

            AssociateFirewallRuleGroupResponse res = sdk.sdk.associateFirewallRuleGroup(req);

            if (res.associateFirewallRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateResolverEndpointIpAddress

<p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateResolverEndpointIpAddressRequest;
import org.openapis.openapi.models.operations.AssociateResolverEndpointIpAddressResponse;
import org.openapis.openapi.models.operations.AssociateResolverEndpointIpAddressXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateResolverEndpointIpAddressRequest;
import org.openapis.openapi.models.shared.IpAddressUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateResolverEndpointIpAddressRequest req = new AssociateResolverEndpointIpAddressRequest(                new AssociateResolverEndpointIpAddressRequest(                new IpAddressUpdate() {{
                                                ip = "cum";
                                                ipId = "esse";
                                                ipv6 = "3920:5929:396f:ea75:96eb:10fa:aa23:52c5";
                                                subnetId = "omnis";
                                            }};, "nemo");, AssociateResolverEndpointIpAddressXAmzTargetEnum.ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "accusantium";
                xAmzDate = "iure";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "sapiente";
            }};            

            AssociateResolverEndpointIpAddressResponse res = sdk.sdk.associateResolverEndpointIpAddress(req);

            if (res.associateResolverEndpointIpAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateResolverQueryLogConfig

<p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateResolverQueryLogConfigRequest;
import org.openapis.openapi.models.operations.AssociateResolverQueryLogConfigResponse;
import org.openapis.openapi.models.operations.AssociateResolverQueryLogConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateResolverQueryLogConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateResolverQueryLogConfigRequest req = new AssociateResolverQueryLogConfigRequest(                new AssociateResolverQueryLogConfigRequest("mollitia", "dolorem");, AssociateResolverQueryLogConfigXAmzTargetEnum.ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_QUERY_LOG_CONFIG) {{
                xAmzAlgorithm = "culpa";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "repellat";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "commodi";
            }};            

            AssociateResolverQueryLogConfigResponse res = sdk.sdk.associateResolverQueryLogConfig(req);

            if (res.associateResolverQueryLogConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## associateResolverRule

Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateResolverRuleRequest;
import org.openapis.openapi.models.operations.AssociateResolverRuleResponse;
import org.openapis.openapi.models.operations.AssociateResolverRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateResolverRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateResolverRuleRequest req = new AssociateResolverRuleRequest(                new AssociateResolverRuleRequest("molestiae", "velit") {{
                                name = "Miss Eugene Hauck";
                            }};, AssociateResolverRuleXAmzTargetEnum.ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_RULE) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "odit";
                xAmzCredential = "quo";
                xAmzDate = "sequi";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "id";
            }};            

            AssociateResolverRuleResponse res = sdk.sdk.associateResolverRule(req);

            if (res.associateResolverRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFirewallDomainList

Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFirewallDomainListRequest;
import org.openapis.openapi.models.operations.CreateFirewallDomainListResponse;
import org.openapis.openapi.models.operations.CreateFirewallDomainListXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFirewallDomainListRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFirewallDomainListRequest req = new CreateFirewallDomainListRequest(                new CreateFirewallDomainListRequest("aut", "quasi") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("quasi", "reiciendis") {{
                                        key = "temporibus";
                                        value = "laborum";
                                    }}),
                                    add(new Tag("nihil", "praesentium") {{
                                        key = "voluptatibus";
                                        value = "vero";
                                    }}),
                                    add(new Tag("omnis", "voluptate") {{
                                        key = "voluptatibus";
                                        value = "ipsa";
                                    }}),
                                }};
                            }};, CreateFirewallDomainListXAmzTargetEnum.ROUTE53_RESOLVER_CREATE_FIREWALL_DOMAIN_LIST) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "doloremque";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "dicta";
            }};            

            CreateFirewallDomainListResponse res = sdk.sdk.createFirewallDomainList(req);

            if (res.createFirewallDomainListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFirewallRule

Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFirewallRuleRequest;
import org.openapis.openapi.models.operations.CreateFirewallRuleResponse;
import org.openapis.openapi.models.operations.CreateFirewallRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionEnum;
import org.openapis.openapi.models.shared.BlockOverrideDnsTypeEnum;
import org.openapis.openapi.models.shared.BlockResponseEnum;
import org.openapis.openapi.models.shared.CreateFirewallRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFirewallRuleRequest req = new CreateFirewallRuleRequest(                new CreateFirewallRuleRequest(ActionEnum.ALLOW, "iusto", "dicta", "harum", "enim", 880476L) {{
                                blockOverrideDnsType = BlockOverrideDnsTypeEnum.CNAME;
                                blockOverrideDomain = "commodi";
                                blockOverrideTtl = 918236L;
                                blockResponse = BlockResponseEnum.NODATA;
                            }};, CreateFirewallRuleXAmzTargetEnum.ROUTE53_RESOLVER_CREATE_FIREWALL_RULE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "molestias";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "praesentium";
            }};            

            CreateFirewallRuleResponse res = sdk.sdk.createFirewallRule(req);

            if (res.createFirewallRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFirewallRuleGroup

Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFirewallRuleGroupRequest;
import org.openapis.openapi.models.operations.CreateFirewallRuleGroupResponse;
import org.openapis.openapi.models.operations.CreateFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateFirewallRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFirewallRuleGroupRequest req = new CreateFirewallRuleGroupRequest(                new CreateFirewallRuleGroupRequest("voluptates", "quasi") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("itaque", "incidunt") {{
                                        key = "sint";
                                        value = "veritatis";
                                    }}),
                                    add(new Tag("est", "quibusdam") {{
                                        key = "enim";
                                        value = "consequatur";
                                    }}),
                                    add(new Tag("distinctio", "quibusdam") {{
                                        key = "explicabo";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("qui", "aliquid") {{
                                        key = "labore";
                                        value = "modi";
                                    }}),
                                }};
                            }};, CreateFirewallRuleGroupXAmzTargetEnum.ROUTE53_RESOLVER_CREATE_FIREWALL_RULE_GROUP) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            CreateFirewallRuleGroupResponse res = sdk.sdk.createFirewallRuleGroup(req);

            if (res.createFirewallRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResolverEndpoint

<p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResolverEndpointRequest;
import org.openapis.openapi.models.operations.CreateResolverEndpointResponse;
import org.openapis.openapi.models.operations.CreateResolverEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateResolverEndpointRequest;
import org.openapis.openapi.models.shared.IpAddressRequest;
import org.openapis.openapi.models.shared.ResolverEndpointDirectionEnum;
import org.openapis.openapi.models.shared.ResolverEndpointTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResolverEndpointRequest req = new CreateResolverEndpointRequest(                new CreateResolverEndpointRequest("dolorum", ResolverEndpointDirectionEnum.OUTBOUND,                 new org.openapis.openapi.models.shared.IpAddressRequest[]{{
                                                add(new IpAddressRequest("delectus") {{
                                                    ip = "facilis";
                                                    ipv6 = "b4f6:3c96:9e9a:3efa:77df:b14c:d66a:e395";
                                                    subnetId = "accusamus";
                                                }}),
                                                add(new IpAddressRequest("sint") {{
                                                    ip = "quidem";
                                                    ipv6 = "9ba8:8f3a:6699:7074:ba44:69b6:e214:1959";
                                                    subnetId = "quos";
                                                }}),
                                            }},                 new String[]{{
                                                add("mollitia"),
                                            }}) {{
                                name = "Shaun Hammes";
                                resolverEndpointType = ResolverEndpointTypeEnum.DUALSTACK;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("iure", "doloribus") {{
                                        key = "nemo";
                                        value = "quasi";
                                    }}),
                                }};
                            }};, CreateResolverEndpointXAmzTargetEnum.ROUTE53_RESOLVER_CREATE_RESOLVER_ENDPOINT) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            CreateResolverEndpointResponse res = sdk.sdk.createResolverEndpoint(req);

            if (res.createResolverEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResolverQueryLogConfig

<p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResolverQueryLogConfigRequest;
import org.openapis.openapi.models.operations.CreateResolverQueryLogConfigResponse;
import org.openapis.openapi.models.operations.CreateResolverQueryLogConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateResolverQueryLogConfigRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResolverQueryLogConfigRequest req = new CreateResolverQueryLogConfigRequest(                new CreateResolverQueryLogConfigRequest("repudiandae", "ullam", "expedita") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sed", "saepe") {{
                                        key = "repellat";
                                        value = "quibusdam";
                                    }}),
                                    add(new Tag("consequuntur", "praesentium") {{
                                        key = "pariatur";
                                        value = "accusantium";
                                    }}),
                                }};
                            }};, CreateResolverQueryLogConfigXAmzTargetEnum.ROUTE53_RESOLVER_CREATE_RESOLVER_QUERY_LOG_CONFIG) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
            }};            

            CreateResolverQueryLogConfigResponse res = sdk.sdk.createResolverQueryLogConfig(req);

            if (res.createResolverQueryLogConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createResolverRule

For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateResolverRuleRequest;
import org.openapis.openapi.models.operations.CreateResolverRuleResponse;
import org.openapis.openapi.models.operations.CreateResolverRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateResolverRuleRequest;
import org.openapis.openapi.models.shared.RuleTypeOptionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateResolverRuleRequest req = new CreateResolverRuleRequest(                new CreateResolverRuleRequest("excepturi", "odit", RuleTypeOptionEnum.SYSTEM) {{
                                name = "Virginia Wunsch";
                                resolverEndpointId = "voluptate";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("pariatur", "nemo") {{
                                        key = "nam";
                                        value = "eaque";
                                    }}),
                                    add(new Tag("fugiat", "amet") {{
                                        key = "voluptatibus";
                                        value = "perferendis";
                                    }}),
                                }};
                                targetIps = new org.openapis.openapi.models.shared.TargetAddress[]{{
                                    add(new TargetAddress() {{
                                        ip = "cumque";
                                        ipv6 = "5fbb:2587:0532:02c7:3d5f:e9b9:0c28:909b";
                                        port = 237893L;
                                    }}),
                                }};
                            }};, CreateResolverRuleXAmzTargetEnum.ROUTE53_RESOLVER_CREATE_RESOLVER_RULE) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "earum";
                xAmzCredential = "modi";
                xAmzDate = "iste";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "pariatur";
            }};            

            CreateResolverRuleResponse res = sdk.sdk.createResolverRule(req);

            if (res.createResolverRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFirewallDomainList

Deletes the specified domain list. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFirewallDomainListRequest;
import org.openapis.openapi.models.operations.DeleteFirewallDomainListResponse;
import org.openapis.openapi.models.operations.DeleteFirewallDomainListXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFirewallDomainListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFirewallDomainListRequest req = new DeleteFirewallDomainListRequest(                new DeleteFirewallDomainListRequest("nobis");, DeleteFirewallDomainListXAmzTargetEnum.ROUTE53_RESOLVER_DELETE_FIREWALL_DOMAIN_LIST) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "quaerat";
                xAmzDate = "quos";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolorem";
            }};            

            DeleteFirewallDomainListResponse res = sdk.sdk.deleteFirewallDomainList(req);

            if (res.deleteFirewallDomainListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFirewallRule

Deletes the specified firewall rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFirewallRuleRequest;
import org.openapis.openapi.models.operations.DeleteFirewallRuleResponse;
import org.openapis.openapi.models.operations.DeleteFirewallRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFirewallRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFirewallRuleRequest req = new DeleteFirewallRuleRequest(                new DeleteFirewallRuleRequest("qui", "ipsum");, DeleteFirewallRuleXAmzTargetEnum.ROUTE53_RESOLVER_DELETE_FIREWALL_RULE) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
            }};            

            DeleteFirewallRuleResponse res = sdk.sdk.deleteFirewallRule(req);

            if (res.deleteFirewallRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFirewallRuleGroup

Deletes the specified firewall rule group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFirewallRuleGroupRequest;
import org.openapis.openapi.models.operations.DeleteFirewallRuleGroupResponse;
import org.openapis.openapi.models.operations.DeleteFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteFirewallRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFirewallRuleGroupRequest req = new DeleteFirewallRuleGroupRequest(                new DeleteFirewallRuleGroupRequest("numquam");, DeleteFirewallRuleGroupXAmzTargetEnum.ROUTE53_RESOLVER_DELETE_FIREWALL_RULE_GROUP) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "ipsa";
                xAmzDate = "iure";
                xAmzSecurityToken = "odio";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "accusamus";
            }};            

            DeleteFirewallRuleGroupResponse res = sdk.sdk.deleteFirewallRuleGroup(req);

            if (res.deleteFirewallRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResolverEndpoint

<p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResolverEndpointRequest;
import org.openapis.openapi.models.operations.DeleteResolverEndpointResponse;
import org.openapis.openapi.models.operations.DeleteResolverEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResolverEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResolverEndpointRequest req = new DeleteResolverEndpointRequest(                new DeleteResolverEndpointRequest("voluptatibus");, DeleteResolverEndpointXAmzTargetEnum.ROUTE53_RESOLVER_DELETE_RESOLVER_ENDPOINT) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "natus";
                xAmzCredential = "eos";
                xAmzDate = "atque";
                xAmzSecurityToken = "sit";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ab";
            }};            

            DeleteResolverEndpointResponse res = sdk.sdk.deleteResolverEndpoint(req);

            if (res.deleteResolverEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResolverQueryLogConfig

<p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResolverQueryLogConfigRequest;
import org.openapis.openapi.models.operations.DeleteResolverQueryLogConfigResponse;
import org.openapis.openapi.models.operations.DeleteResolverQueryLogConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResolverQueryLogConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResolverQueryLogConfigRequest req = new DeleteResolverQueryLogConfigRequest(                new DeleteResolverQueryLogConfigRequest("dolorum");, DeleteResolverQueryLogConfigXAmzTargetEnum.ROUTE53_RESOLVER_DELETE_RESOLVER_QUERY_LOG_CONFIG) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "distinctio";
            }};            

            DeleteResolverQueryLogConfigResponse res = sdk.sdk.deleteResolverQueryLogConfig(req);

            if (res.deleteResolverQueryLogConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResolverRule

Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResolverRuleRequest;
import org.openapis.openapi.models.operations.DeleteResolverRuleResponse;
import org.openapis.openapi.models.operations.DeleteResolverRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResolverRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResolverRuleRequest req = new DeleteResolverRuleRequest(                new DeleteResolverRuleRequest("nihil");, DeleteResolverRuleXAmzTargetEnum.ROUTE53_RESOLVER_DELETE_RESOLVER_RULE) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "id";
                xAmzDate = "saepe";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteResolverRuleResponse res = sdk.sdk.deleteResolverRule(req);

            if (res.deleteResolverRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateFirewallRuleGroup

Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.operations.DisassociateFirewallRuleGroupResponse;
import org.openapis.openapi.models.operations.DisassociateFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateFirewallRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateFirewallRuleGroupRequest req = new DisassociateFirewallRuleGroupRequest(                new DisassociateFirewallRuleGroupRequest("optio");, DisassociateFirewallRuleGroupXAmzTargetEnum.ROUTE53_RESOLVER_DISASSOCIATE_FIREWALL_RULE_GROUP) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            DisassociateFirewallRuleGroupResponse res = sdk.sdk.disassociateFirewallRuleGroup(req);

            if (res.disassociateFirewallRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateResolverEndpointIpAddress

<p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateResolverEndpointIpAddressRequest;
import org.openapis.openapi.models.operations.DisassociateResolverEndpointIpAddressResponse;
import org.openapis.openapi.models.operations.DisassociateResolverEndpointIpAddressXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateResolverEndpointIpAddressRequest;
import org.openapis.openapi.models.shared.IpAddressUpdate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateResolverEndpointIpAddressRequest req = new DisassociateResolverEndpointIpAddressRequest(                new DisassociateResolverEndpointIpAddressRequest(                new IpAddressUpdate() {{
                                                ip = "totam";
                                                ipId = "similique";
                                                ipv6 = "0d44:6ce2:af7a:73cf:3be4:53f8:70b3:26b5";
                                                subnetId = "deserunt";
                                            }};, "quam");, DisassociateResolverEndpointIpAddressXAmzTargetEnum.ROUTE53_RESOLVER_DISASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS) {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "qui";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "maxime";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "soluta";
            }};            

            DisassociateResolverEndpointIpAddressResponse res = sdk.sdk.disassociateResolverEndpointIpAddress(req);

            if (res.disassociateResolverEndpointIpAddressResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateResolverQueryLogConfig

<p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateResolverQueryLogConfigRequest;
import org.openapis.openapi.models.operations.DisassociateResolverQueryLogConfigResponse;
import org.openapis.openapi.models.operations.DisassociateResolverQueryLogConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateResolverQueryLogConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateResolverQueryLogConfigRequest req = new DisassociateResolverQueryLogConfigRequest(                new DisassociateResolverQueryLogConfigRequest("laborum", "totam");, DisassociateResolverQueryLogConfigXAmzTargetEnum.ROUTE53_RESOLVER_DISASSOCIATE_RESOLVER_QUERY_LOG_CONFIG) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "dolores";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "quam";
            }};            

            DisassociateResolverQueryLogConfigResponse res = sdk.sdk.disassociateResolverQueryLogConfig(req);

            if (res.disassociateResolverQueryLogConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateResolverRule

<p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateResolverRuleRequest;
import org.openapis.openapi.models.operations.DisassociateResolverRuleResponse;
import org.openapis.openapi.models.operations.DisassociateResolverRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateResolverRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateResolverRuleRequest req = new DisassociateResolverRuleRequest(                new DisassociateResolverRuleRequest("temporibus", "qui");, DisassociateResolverRuleXAmzTargetEnum.ROUTE53_RESOLVER_DISASSOCIATE_RESOLVER_RULE) {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "magni";
                xAmzDate = "odio";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nam";
            }};            

            DisassociateResolverRuleResponse res = sdk.sdk.disassociateResolverRule(req);

            if (res.disassociateResolverRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallConfig

Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallConfigRequest;
import org.openapis.openapi.models.operations.GetFirewallConfigResponse;
import org.openapis.openapi.models.operations.GetFirewallConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFirewallConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFirewallConfigRequest req = new GetFirewallConfigRequest(                new GetFirewallConfigRequest("voluptatem");, GetFirewallConfigXAmzTargetEnum.ROUTE53_RESOLVER_GET_FIREWALL_CONFIG) {{
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "nobis";
                xAmzDate = "et";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "veritatis";
            }};            

            GetFirewallConfigResponse res = sdk.sdk.getFirewallConfig(req);

            if (res.getFirewallConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallDomainList

Retrieves the specified firewall domain list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallDomainListRequest;
import org.openapis.openapi.models.operations.GetFirewallDomainListResponse;
import org.openapis.openapi.models.operations.GetFirewallDomainListXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFirewallDomainListRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFirewallDomainListRequest req = new GetFirewallDomainListRequest(                new GetFirewallDomainListRequest("quos");, GetFirewallDomainListXAmzTargetEnum.ROUTE53_RESOLVER_GET_FIREWALL_DOMAIN_LIST) {{
                xAmzAlgorithm = "tempore";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "aperiam";
                xAmzDate = "delectus";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "labore";
            }};            

            GetFirewallDomainListResponse res = sdk.sdk.getFirewallDomainList(req);

            if (res.getFirewallDomainListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallRuleGroup

Retrieves the specified firewall rule group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupRequest;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupResponse;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFirewallRuleGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFirewallRuleGroupRequest req = new GetFirewallRuleGroupRequest(                new GetFirewallRuleGroupRequest("dolorum");, GetFirewallRuleGroupXAmzTargetEnum.ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "quae";
                xAmzCredential = "aut";
                xAmzDate = "quas";
                xAmzSecurityToken = "itaque";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "est";
            }};            

            GetFirewallRuleGroupResponse res = sdk.sdk.getFirewallRuleGroup(req);

            if (res.getFirewallRuleGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallRuleGroupAssociation

Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupAssociationRequest;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupAssociationResponse;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFirewallRuleGroupAssociationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFirewallRuleGroupAssociationRequest req = new GetFirewallRuleGroupAssociationRequest(                new GetFirewallRuleGroupAssociationRequest("porro");, GetFirewallRuleGroupAssociationXAmzTargetEnum.ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP_ASSOCIATION) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "ut";
                xAmzCredential = "facilis";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "qui";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "laudantium";
            }};            

            GetFirewallRuleGroupAssociationResponse res = sdk.sdk.getFirewallRuleGroupAssociation(req);

            if (res.getFirewallRuleGroupAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFirewallRuleGroupPolicy

Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupPolicyRequest;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupPolicyResponse;
import org.openapis.openapi.models.operations.GetFirewallRuleGroupPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetFirewallRuleGroupPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFirewallRuleGroupPolicyRequest req = new GetFirewallRuleGroupPolicyRequest(                new GetFirewallRuleGroupPolicyRequest("occaecati");, GetFirewallRuleGroupPolicyXAmzTargetEnum.ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP_POLICY) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
            }};            

            GetFirewallRuleGroupPolicyResponse res = sdk.sdk.getFirewallRuleGroupPolicy(req);

            if (res.getFirewallRuleGroupPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverConfig

Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverConfigRequest;
import org.openapis.openapi.models.operations.GetResolverConfigResponse;
import org.openapis.openapi.models.operations.GetResolverConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverConfigRequest req = new GetResolverConfigRequest(                new GetResolverConfigRequest("consectetur");, GetResolverConfigXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_CONFIG) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "dignissimos";
                xAmzDate = "hic";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "odio";
            }};            

            GetResolverConfigResponse res = sdk.sdk.getResolverConfig(req);

            if (res.getResolverConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverDnssecConfig

Gets DNSSEC validation information for a specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverDnssecConfigRequest;
import org.openapis.openapi.models.operations.GetResolverDnssecConfigResponse;
import org.openapis.openapi.models.operations.GetResolverDnssecConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverDnssecConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverDnssecConfigRequest req = new GetResolverDnssecConfigRequest(                new GetResolverDnssecConfigRequest("facilis");, GetResolverDnssecConfigXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_DNSSEC_CONFIG) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "ducimus";
                xAmzCredential = "dolore";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "illum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "natus";
            }};            

            GetResolverDnssecConfigResponse res = sdk.sdk.getResolverDnssecConfig(req);

            if (res.getResolverDnssecConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverEndpoint

Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverEndpointRequest;
import org.openapis.openapi.models.operations.GetResolverEndpointResponse;
import org.openapis.openapi.models.operations.GetResolverEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverEndpointRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverEndpointRequest req = new GetResolverEndpointRequest(                new GetResolverEndpointRequest("aut");, GetResolverEndpointXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_ENDPOINT) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "nulla";
                xAmzDate = "fugit";
                xAmzSecurityToken = "porro";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "doloribus";
            }};            

            GetResolverEndpointResponse res = sdk.sdk.getResolverEndpoint(req);

            if (res.getResolverEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverQueryLogConfig

Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigRequest;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigResponse;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverQueryLogConfigRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverQueryLogConfigRequest req = new GetResolverQueryLogConfigRequest(                new GetResolverQueryLogConfigRequest("eligendi");, GetResolverQueryLogConfigXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_QUERY_LOG_CONFIG) {{
                xAmzAlgorithm = "ducimus";
                xAmzContentSha256 = "alias";
                xAmzCredential = "officia";
                xAmzDate = "tempora";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "aspernatur";
            }};            

            GetResolverQueryLogConfigResponse res = sdk.sdk.getResolverQueryLogConfig(req);

            if (res.getResolverQueryLogConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverQueryLogConfigAssociation

Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigAssociationRequest;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigAssociationResponse;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverQueryLogConfigAssociationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverQueryLogConfigAssociationRequest req = new GetResolverQueryLogConfigAssociationRequest(                new GetResolverQueryLogConfigAssociationRequest("possimus");, GetResolverQueryLogConfigAssociationXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATION) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "ratione";
                xAmzCredential = "ex";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "maiores";
            }};            

            GetResolverQueryLogConfigAssociationResponse res = sdk.sdk.getResolverQueryLogConfigAssociation(req);

            if (res.getResolverQueryLogConfigAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverQueryLogConfigPolicy

Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigPolicyRequest;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigPolicyResponse;
import org.openapis.openapi.models.operations.GetResolverQueryLogConfigPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverQueryLogConfigPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverQueryLogConfigPolicyRequest req = new GetResolverQueryLogConfigPolicyRequest(                new GetResolverQueryLogConfigPolicyRequest("ex");, GetResolverQueryLogConfigPolicyXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_QUERY_LOG_CONFIG_POLICY) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            GetResolverQueryLogConfigPolicyResponse res = sdk.sdk.getResolverQueryLogConfigPolicy(req);

            if (res.getResolverQueryLogConfigPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverRule

Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverRuleRequest;
import org.openapis.openapi.models.operations.GetResolverRuleResponse;
import org.openapis.openapi.models.operations.GetResolverRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverRuleRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverRuleRequest req = new GetResolverRuleRequest(                new GetResolverRuleRequest("impedit");, GetResolverRuleXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_RULE) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            GetResolverRuleResponse res = sdk.sdk.getResolverRule(req);

            if (res.getResolverRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverRuleAssociation

Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverRuleAssociationRequest;
import org.openapis.openapi.models.operations.GetResolverRuleAssociationResponse;
import org.openapis.openapi.models.operations.GetResolverRuleAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverRuleAssociationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverRuleAssociationRequest req = new GetResolverRuleAssociationRequest(                new GetResolverRuleAssociationRequest("recusandae");, GetResolverRuleAssociationXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_RULE_ASSOCIATION) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "minima";
                xAmzCredential = "eaque";
                xAmzDate = "a";
                xAmzSecurityToken = "libero";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "aut";
            }};            

            GetResolverRuleAssociationResponse res = sdk.sdk.getResolverRuleAssociation(req);

            if (res.getResolverRuleAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResolverRulePolicy

Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResolverRulePolicyRequest;
import org.openapis.openapi.models.operations.GetResolverRulePolicyResponse;
import org.openapis.openapi.models.operations.GetResolverRulePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResolverRulePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResolverRulePolicyRequest req = new GetResolverRulePolicyRequest(                new GetResolverRulePolicyRequest("impedit");, GetResolverRulePolicyXAmzTargetEnum.ROUTE53_RESOLVER_GET_RESOLVER_RULE_POLICY) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "accusamus";
                xAmzDate = "inventore";
                xAmzSecurityToken = "non";
                xAmzSignature = "et";
                xAmzSignedHeaders = "dolorum";
            }};            

            GetResolverRulePolicyResponse res = sdk.sdk.getResolverRulePolicy(req);

            if (res.getResolverRulePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importFirewallDomains

<p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportFirewallDomainsRequest;
import org.openapis.openapi.models.operations.ImportFirewallDomainsResponse;
import org.openapis.openapi.models.operations.ImportFirewallDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FirewallDomainImportOperationEnum;
import org.openapis.openapi.models.shared.ImportFirewallDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportFirewallDomainsRequest req = new ImportFirewallDomainsRequest(                new ImportFirewallDomainsRequest("placeat", "velit", FirewallDomainImportOperationEnum.REPLACE);, ImportFirewallDomainsXAmzTargetEnum.ROUTE53_RESOLVER_IMPORT_FIREWALL_DOMAINS) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nobis";
                xAmzDate = "quas";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "voluptas";
            }};            

            ImportFirewallDomainsResponse res = sdk.sdk.importFirewallDomains(req);

            if (res.importFirewallDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallConfigs

<p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallConfigsRequest;
import org.openapis.openapi.models.operations.ListFirewallConfigsResponse;
import org.openapis.openapi.models.operations.ListFirewallConfigsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFirewallConfigsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallConfigsRequest req = new ListFirewallConfigsRequest(                new ListFirewallConfigsRequest() {{
                                maxResults = 96549L;
                                nextToken = "tempora";
                            }};, ListFirewallConfigsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_FIREWALL_CONFIGS) {{
                maxResults = "numquam";
                nextToken = "explicabo";
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "molestiae";
                xAmzDate = "magnam";
                xAmzSecurityToken = "odio";
                xAmzSignature = "eius";
                xAmzSignedHeaders = "esse";
            }};            

            ListFirewallConfigsResponse res = sdk.sdk.listFirewallConfigs(req);

            if (res.listFirewallConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallDomainLists

<p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallDomainListsRequest;
import org.openapis.openapi.models.operations.ListFirewallDomainListsResponse;
import org.openapis.openapi.models.operations.ListFirewallDomainListsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFirewallDomainListsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallDomainListsRequest req = new ListFirewallDomainListsRequest(                new ListFirewallDomainListsRequest() {{
                                maxResults = 524593L;
                                nextToken = "fuga";
                            }};, ListFirewallDomainListsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_FIREWALL_DOMAIN_LISTS) {{
                maxResults = "reprehenderit";
                nextToken = "quidem";
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "ut";
                xAmzCredential = "eum";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "praesentium";
            }};            

            ListFirewallDomainListsResponse res = sdk.sdk.listFirewallDomainLists(req);

            if (res.listFirewallDomainListsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallDomains

<p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallDomainsRequest;
import org.openapis.openapi.models.operations.ListFirewallDomainsResponse;
import org.openapis.openapi.models.operations.ListFirewallDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFirewallDomainsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quisquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallDomainsRequest req = new ListFirewallDomainsRequest(                new ListFirewallDomainsRequest("veritatis") {{
                                maxResults = 56848L;
                                nextToken = "id";
                            }};, ListFirewallDomainsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_FIREWALL_DOMAINS) {{
                maxResults = "quidem";
                nextToken = "neque";
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "illum";
                xAmzCredential = "quo";
                xAmzDate = "fuga";
                xAmzSecurityToken = "eius";
                xAmzSignature = "eos";
                xAmzSignedHeaders = "voluptas";
            }};            

            ListFirewallDomainsResponse res = sdk.sdk.listFirewallDomains(req);

            if (res.listFirewallDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallRuleGroupAssociations

<p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallRuleGroupAssociationsRequest;
import org.openapis.openapi.models.operations.ListFirewallRuleGroupAssociationsResponse;
import org.openapis.openapi.models.operations.ListFirewallRuleGroupAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FirewallRuleGroupAssociationStatusEnum;
import org.openapis.openapi.models.shared.ListFirewallRuleGroupAssociationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallRuleGroupAssociationsRequest req = new ListFirewallRuleGroupAssociationsRequest(                new ListFirewallRuleGroupAssociationsRequest() {{
                                firewallRuleGroupId = "cupiditate";
                                maxResults = 9688L;
                                nextToken = "tempora";
                                priority = 892050L;
                                status = FirewallRuleGroupAssociationStatusEnum.DELETING;
                                vpcId = "aspernatur";
                            }};, ListFirewallRuleGroupAssociationsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_FIREWALL_RULE_GROUP_ASSOCIATIONS) {{
                maxResults = "sequi";
                nextToken = "quo";
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "aperiam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "quod";
                xAmzSignature = "dignissimos";
                xAmzSignedHeaders = "inventore";
            }};            

            ListFirewallRuleGroupAssociationsResponse res = sdk.sdk.listFirewallRuleGroupAssociations(req);

            if (res.listFirewallRuleGroupAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallRuleGroups

<p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallRuleGroupsRequest;
import org.openapis.openapi.models.operations.ListFirewallRuleGroupsResponse;
import org.openapis.openapi.models.operations.ListFirewallRuleGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListFirewallRuleGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallRuleGroupsRequest req = new ListFirewallRuleGroupsRequest(                new ListFirewallRuleGroupsRequest() {{
                                maxResults = 518835L;
                                nextToken = "accusamus";
                            }};, ListFirewallRuleGroupsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_FIREWALL_RULE_GROUPS) {{
                maxResults = "aliquam";
                nextToken = "odio";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "sapiente";
                xAmzDate = "dolores";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "accusantium";
            }};            

            ListFirewallRuleGroupsResponse res = sdk.sdk.listFirewallRuleGroups(req);

            if (res.listFirewallRuleGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFirewallRules

<p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFirewallRulesRequest;
import org.openapis.openapi.models.operations.ListFirewallRulesResponse;
import org.openapis.openapi.models.operations.ListFirewallRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionEnum;
import org.openapis.openapi.models.shared.ListFirewallRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFirewallRulesRequest req = new ListFirewallRulesRequest(                new ListFirewallRulesRequest("eum") {{
                                action = ActionEnum.BLOCK;
                                maxResults = 510017L;
                                nextToken = "consequuntur";
                                priority = 536178L;
                            }};, ListFirewallRulesXAmzTargetEnum.ROUTE53_RESOLVER_LIST_FIREWALL_RULES) {{
                maxResults = "fugit";
                nextToken = "fuga";
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "atque";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "minima";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "fugit";
            }};            

            ListFirewallRulesResponse res = sdk.sdk.listFirewallRules(req);

            if (res.listFirewallRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverConfigs

Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverConfigsRequest;
import org.openapis.openapi.models.operations.ListResolverConfigsResponse;
import org.openapis.openapi.models.operations.ListResolverConfigsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResolverConfigsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverConfigsRequest req = new ListResolverConfigsRequest(                new ListResolverConfigsRequest() {{
                                maxResults = 159870L;
                                nextToken = "ratione";
                            }};, ListResolverConfigsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_CONFIGS) {{
                maxResults = "explicabo";
                nextToken = "saepe";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "atque";
                xAmzCredential = "et";
                xAmzDate = "esse";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "veritatis";
            }};            

            ListResolverConfigsResponse res = sdk.sdk.listResolverConfigs(req);

            if (res.listResolverConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverDnssecConfigs

Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverDnssecConfigsRequest;
import org.openapis.openapi.models.operations.ListResolverDnssecConfigsResponse;
import org.openapis.openapi.models.operations.ListResolverDnssecConfigsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListResolverDnssecConfigsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverDnssecConfigsRequest req = new ListResolverDnssecConfigsRequest(                new ListResolverDnssecConfigsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Dr. Ignacio Jacobi";
                                        values = new String[]{{
                                            add("molestiae"),
                                            add("rerum"),
                                            add("occaecati"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Miss Verna Roob";
                                        values = new String[]{{
                                            add("cumque"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Elizabeth Schinner";
                                        values = new String[]{{
                                            add("esse"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Eduardo Wilkinson";
                                        values = new String[]{{
                                            add("quasi"),
                                            add("a"),
                                        }};
                                    }}),
                                }};
                                maxResults = 621679L;
                                nextToken = "sint";
                            }};, ListResolverDnssecConfigsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_DNSSEC_CONFIGS) {{
                maxResults = "pariatur";
                nextToken = "possimus";
                xAmzAlgorithm = "quia";
                xAmzContentSha256 = "eveniet";
                xAmzCredential = "asperiores";
                xAmzDate = "facere";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "quasi";
            }};            

            ListResolverDnssecConfigsResponse res = sdk.sdk.listResolverDnssecConfigs(req);

            if (res.listResolverDnssecConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverEndpointIpAddresses

Gets the IP addresses for a specified Resolver endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverEndpointIpAddressesRequest;
import org.openapis.openapi.models.operations.ListResolverEndpointIpAddressesResponse;
import org.openapis.openapi.models.operations.ListResolverEndpointIpAddressesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListResolverEndpointIpAddressesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverEndpointIpAddressesRequest req = new ListResolverEndpointIpAddressesRequest(                new ListResolverEndpointIpAddressesRequest("culpa") {{
                                maxResults = 398434L;
                                nextToken = "tenetur";
                            }};, ListResolverEndpointIpAddressesXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_ENDPOINT_IP_ADDRESSES) {{
                maxResults = "quae";
                nextToken = "earum";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "in";
                xAmzCredential = "eius";
                xAmzDate = "libero";
                xAmzSecurityToken = "illum";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "accusantium";
            }};            

            ListResolverEndpointIpAddressesResponse res = sdk.sdk.listResolverEndpointIpAddresses(req);

            if (res.listResolverEndpointIpAddressesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverEndpoints

Lists all the Resolver endpoints that were created using the current Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverEndpointsRequest;
import org.openapis.openapi.models.operations.ListResolverEndpointsResponse;
import org.openapis.openapi.models.operations.ListResolverEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListResolverEndpointsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverEndpointsRequest req = new ListResolverEndpointsRequest(                new ListResolverEndpointsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Marion Kihn";
                                        values = new String[]{{
                                            add("voluptatum"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Rosemarie Jacobs";
                                        values = new String[]{{
                                            add("architecto"),
                                            add("omnis"),
                                            add("tenetur"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Lynette Bosco II";
                                        values = new String[]{{
                                            add("consectetur"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Ms. Cora Spencer IV";
                                        values = new String[]{{
                                            add("mollitia"),
                                            add("ab"),
                                        }};
                                    }}),
                                }};
                                maxResults = 544591L;
                                nextToken = "non";
                            }};, ListResolverEndpointsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_ENDPOINTS) {{
                maxResults = "voluptatem";
                nextToken = "dolor";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "impedit";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "voluptas";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "dignissimos";
            }};            

            ListResolverEndpointsResponse res = sdk.sdk.listResolverEndpoints(req);

            if (res.listResolverEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverQueryLogConfigAssociations

Lists information about associations between Amazon VPCs and query logging configurations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverQueryLogConfigAssociationsRequest;
import org.openapis.openapi.models.operations.ListResolverQueryLogConfigAssociationsResponse;
import org.openapis.openapi.models.operations.ListResolverQueryLogConfigAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListResolverQueryLogConfigAssociationsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverQueryLogConfigAssociationsRequest req = new ListResolverQueryLogConfigAssociationsRequest(                new ListResolverQueryLogConfigAssociationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Lee Wiza";
                                        values = new String[]{{
                                            add("ea"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Kathryn Sipes";
                                        values = new String[]{{
                                            add("officia"),
                                            add("asperiores"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Anna Hahn";
                                        values = new String[]{{
                                            add("ab"),
                                            add("adipisci"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Orlando Homenick";
                                        values = new String[]{{
                                            add("recusandae"),
                                            add("totam"),
                                            add("fugiat"),
                                        }};
                                    }}),
                                }};
                                maxResults = 424089L;
                                nextToken = "ducimus";
                                sortBy = "quos";
                                sortOrder = SortOrderEnum.ASCENDING;
                            }};, ListResolverQueryLogConfigAssociationsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATIONS) {{
                maxResults = "labore";
                nextToken = "possimus";
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "cum";
                xAmzCredential = "commodi";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "assumenda";
            }};            

            ListResolverQueryLogConfigAssociationsResponse res = sdk.sdk.listResolverQueryLogConfigAssociations(req);

            if (res.listResolverQueryLogConfigAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverQueryLogConfigs

Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverQueryLogConfigsRequest;
import org.openapis.openapi.models.operations.ListResolverQueryLogConfigsResponse;
import org.openapis.openapi.models.operations.ListResolverQueryLogConfigsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListResolverQueryLogConfigsRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverQueryLogConfigsRequest req = new ListResolverQueryLogConfigsRequest(                new ListResolverQueryLogConfigsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Kimberly Ritchie";
                                        values = new String[]{{
                                            add("earum"),
                                            add("facere"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Melba Homenick";
                                        values = new String[]{{
                                            add("necessitatibus"),
                                            add("dolore"),
                                            add("sunt"),
                                            add("asperiores"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Ms. Ethel Farrell";
                                        values = new String[]{{
                                            add("consectetur"),
                                            add("corporis"),
                                            add("harum"),
                                            add("laboriosam"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Dr. Silvia Renner";
                                        values = new String[]{{
                                            add("aspernatur"),
                                            add("voluptas"),
                                        }};
                                    }}),
                                }};
                                maxResults = 374244L;
                                nextToken = "voluptas";
                                sortBy = "minima";
                                sortOrder = SortOrderEnum.DESCENDING;
                            }};, ListResolverQueryLogConfigsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_QUERY_LOG_CONFIGS) {{
                maxResults = "dolorum";
                nextToken = "adipisci";
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "blanditiis";
                xAmzDate = "in";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "aliquam";
                xAmzSignedHeaders = "officiis";
            }};            

            ListResolverQueryLogConfigsResponse res = sdk.sdk.listResolverQueryLogConfigs(req);

            if (res.listResolverQueryLogConfigsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverRuleAssociations

Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverRuleAssociationsRequest;
import org.openapis.openapi.models.operations.ListResolverRuleAssociationsResponse;
import org.openapis.openapi.models.operations.ListResolverRuleAssociationsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListResolverRuleAssociationsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverRuleAssociationsRequest req = new ListResolverRuleAssociationsRequest(                new ListResolverRuleAssociationsRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Karla Kuvalis";
                                        values = new String[]{{
                                            add("culpa"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Dewey Leannon";
                                        values = new String[]{{
                                            add("sit"),
                                            add("rerum"),
                                            add("sed"),
                                            add("reiciendis"),
                                        }};
                                    }}),
                                }};
                                maxResults = 131852L;
                                nextToken = "asperiores";
                            }};, ListResolverRuleAssociationsXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_RULE_ASSOCIATIONS) {{
                maxResults = "facilis";
                nextToken = "voluptate";
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "ab";
                xAmzCredential = "iste";
                xAmzDate = "dolore";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "in";
            }};            

            ListResolverRuleAssociationsResponse res = sdk.sdk.listResolverRuleAssociations(req);

            if (res.listResolverRuleAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listResolverRules

Lists the Resolver rules that were created using the current Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListResolverRulesRequest;
import org.openapis.openapi.models.operations.ListResolverRulesResponse;
import org.openapis.openapi.models.operations.ListResolverRulesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Filter;
import org.openapis.openapi.models.shared.ListResolverRulesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListResolverRulesRequest req = new ListResolverRulesRequest(                new ListResolverRulesRequest() {{
                                filters = new org.openapis.openapi.models.shared.Filter[]{{
                                    add(new Filter() {{
                                        name = "Mrs. Yolanda Mitchell";
                                        values = new String[]{{
                                            add("illo"),
                                            add("reiciendis"),
                                            add("perferendis"),
                                            add("corrupti"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Troy Cormier";
                                        values = new String[]{{
                                            add("ipsum"),
                                            add("ea"),
                                            add("occaecati"),
                                            add("quos"),
                                        }};
                                    }}),
                                    add(new Filter() {{
                                        name = "Eddie Goodwin";
                                        values = new String[]{{
                                            add("sit"),
                                            add("non"),
                                        }};
                                    }}),
                                }};
                                maxResults = 888044L;
                                nextToken = "praesentium";
                            }};, ListResolverRulesXAmzTargetEnum.ROUTE53_RESOLVER_LIST_RESOLVER_RULES) {{
                maxResults = "facilis";
                nextToken = "quaerat";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "debitis";
                xAmzDate = "rem";
                xAmzSecurityToken = "sit";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "error";
            }};            

            ListResolverRulesResponse res = sdk.sdk.listResolverRules(req);

            if (res.listResolverRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags that you associated with the specified resource.

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
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("minima") {{
                                maxResults = 924159L;
                                nextToken = "reiciendis";
                            }};, ListTagsForResourceXAmzTargetEnum.ROUTE53_RESOLVER_LIST_TAGS_FOR_RESOURCE) {{
                maxResults = "nulla";
                nextToken = "magni";
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "numquam";
                xAmzDate = "veniam";
                xAmzSecurityToken = "in";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "beatae";
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

## putFirewallRuleGroupPolicy

Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFirewallRuleGroupPolicyRequest;
import org.openapis.openapi.models.operations.PutFirewallRuleGroupPolicyResponse;
import org.openapis.openapi.models.operations.PutFirewallRuleGroupPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutFirewallRuleGroupPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutFirewallRuleGroupPolicyRequest req = new PutFirewallRuleGroupPolicyRequest(                new PutFirewallRuleGroupPolicyRequest("exercitationem", "praesentium");, PutFirewallRuleGroupPolicyXAmzTargetEnum.ROUTE53_RESOLVER_PUT_FIREWALL_RULE_GROUP_POLICY) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "dolorum";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "error";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "expedita";
            }};            

            PutFirewallRuleGroupPolicyResponse res = sdk.sdk.putFirewallRuleGroupPolicy(req);

            if (res.putFirewallRuleGroupPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResolverQueryLogConfigPolicy

Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResolverQueryLogConfigPolicyRequest;
import org.openapis.openapi.models.operations.PutResolverQueryLogConfigPolicyResponse;
import org.openapis.openapi.models.operations.PutResolverQueryLogConfigPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResolverQueryLogConfigPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResolverQueryLogConfigPolicyRequest req = new PutResolverQueryLogConfigPolicyRequest(                new PutResolverQueryLogConfigPolicyRequest("neque", "dolorum");, PutResolverQueryLogConfigPolicyXAmzTargetEnum.ROUTE53_RESOLVER_PUT_RESOLVER_QUERY_LOG_CONFIG_POLICY) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolorum";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "atque";
            }};            

            PutResolverQueryLogConfigPolicyResponse res = sdk.sdk.putResolverQueryLogConfigPolicy(req);

            if (res.putResolverQueryLogConfigPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResolverRulePolicy

Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResolverRulePolicyRequest;
import org.openapis.openapi.models.operations.PutResolverRulePolicyResponse;
import org.openapis.openapi.models.operations.PutResolverRulePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResolverRulePolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResolverRulePolicyRequest req = new PutResolverRulePolicyRequest(                new PutResolverRulePolicyRequest("ut", "fugiat");, PutResolverRulePolicyXAmzTargetEnum.ROUTE53_RESOLVER_PUT_RESOLVER_RULE_POLICY) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "expedita";
                xAmzDate = "magnam";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsam";
            }};            

            PutResolverRulePolicyResponse res = sdk.sdk.putResolverRulePolicy(req);

            if (res.putResolverRulePolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds one or more tags to a specified resource.

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
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("voluptatum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("et", "blanditiis") {{
                                                    key = "repudiandae";
                                                    value = "corporis";
                                                }}),
                                                add(new Tag("sit", "vel") {{
                                                    key = "ex";
                                                    value = "sed";
                                                }}),
                                                add(new Tag("error", "consequatur") {{
                                                    key = "nostrum";
                                                    value = "saepe";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.ROUTE53_RESOLVER_TAG_RESOURCE) {{
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "dolorem";
                xAmzDate = "harum";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "occaecati";
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

Removes one or more tags from a specified resource.

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
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("quidem",                 new String[]{{
                                                add("laborum"),
                                                add("nam"),
                                                add("tenetur"),
                                            }});, UntagResourceXAmzTargetEnum.ROUTE53_RESOLVER_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "laboriosam";
                xAmzContentSha256 = "alias";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "unde";
                xAmzSignedHeaders = "reiciendis";
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

## updateFirewallConfig

Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallConfigRequest;
import org.openapis.openapi.models.operations.UpdateFirewallConfigResponse;
import org.openapis.openapi.models.operations.UpdateFirewallConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.FirewallFailOpenStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallConfigRequest req = new UpdateFirewallConfigRequest(                new UpdateFirewallConfigRequest(FirewallFailOpenStatusEnum.USE_LOCAL_RESOURCE_SETTING, "delectus");, UpdateFirewallConfigXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_FIREWALL_CONFIG) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "est";
                xAmzDate = "quidem";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "fuga";
            }};            

            UpdateFirewallConfigResponse res = sdk.sdk.updateFirewallConfig(req);

            if (res.updateFirewallConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallDomains

Updates the firewall domain list from an array of domain specifications. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallDomainsRequest;
import org.openapis.openapi.models.operations.UpdateFirewallDomainsResponse;
import org.openapis.openapi.models.operations.UpdateFirewallDomainsXAmzTargetEnum;
import org.openapis.openapi.models.shared.FirewallDomainUpdateOperationEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallDomainsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallDomainsRequest req = new UpdateFirewallDomainsRequest(                new UpdateFirewallDomainsRequest(                new String[]{{
                                                add("veniam"),
                                                add("voluptatem"),
                                                add("quisquam"),
                                            }}, "repudiandae", FirewallDomainUpdateOperationEnum.ADD);, UpdateFirewallDomainsXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_FIREWALL_DOMAINS) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "asperiores";
                xAmzDate = "totam";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "maxime";
            }};            

            UpdateFirewallDomainsResponse res = sdk.sdk.updateFirewallDomains(req);

            if (res.updateFirewallDomainsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallRule

Updates the specified firewall rule. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallRuleRequest;
import org.openapis.openapi.models.operations.UpdateFirewallRuleResponse;
import org.openapis.openapi.models.operations.UpdateFirewallRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ActionEnum;
import org.openapis.openapi.models.shared.BlockOverrideDnsTypeEnum;
import org.openapis.openapi.models.shared.BlockResponseEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallRuleRequest req = new UpdateFirewallRuleRequest(                new UpdateFirewallRuleRequest("esse", "amet") {{
                                action = ActionEnum.ALERT;
                                blockOverrideDnsType = BlockOverrideDnsTypeEnum.CNAME;
                                blockOverrideDomain = "ea";
                                blockOverrideTtl = 539118L;
                                blockResponse = BlockResponseEnum.NXDOMAIN;
                                name = "Frankie Thompson";
                                priority = 133461L;
                            }};, UpdateFirewallRuleXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_FIREWALL_RULE) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "corrupti";
                xAmzDate = "at";
                xAmzSecurityToken = "error";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "suscipit";
            }};            

            UpdateFirewallRuleResponse res = sdk.sdk.updateFirewallRule(req);

            if (res.updateFirewallRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFirewallRuleGroupAssociation

Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFirewallRuleGroupAssociationRequest;
import org.openapis.openapi.models.operations.UpdateFirewallRuleGroupAssociationResponse;
import org.openapis.openapi.models.operations.UpdateFirewallRuleGroupAssociationXAmzTargetEnum;
import org.openapis.openapi.models.shared.MutationProtectionStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateFirewallRuleGroupAssociationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFirewallRuleGroupAssociationRequest req = new UpdateFirewallRuleGroupAssociationRequest(                new UpdateFirewallRuleGroupAssociationRequest("atque") {{
                                mutationProtection = MutationProtectionStatusEnum.DISABLED;
                                name = "Delia Parisian";
                                priority = 968287L;
                            }};, UpdateFirewallRuleGroupAssociationXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_FIREWALL_RULE_GROUP_ASSOCIATION) {{
                xAmzAlgorithm = "doloremque";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "dicta";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "enim";
            }};            

            UpdateFirewallRuleGroupAssociationResponse res = sdk.sdk.updateFirewallRuleGroupAssociation(req);

            if (res.updateFirewallRuleGroupAssociationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResolverConfig

Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResolverConfigRequest;
import org.openapis.openapi.models.operations.UpdateResolverConfigResponse;
import org.openapis.openapi.models.operations.UpdateResolverConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutodefinedReverseFlagEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateResolverConfigRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResolverConfigRequest req = new UpdateResolverConfigRequest(                new UpdateResolverConfigRequest(AutodefinedReverseFlagEnum.ENABLE, "a");, UpdateResolverConfigXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_RESOLVER_CONFIG) {{
                xAmzAlgorithm = "molestias";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "saepe";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            UpdateResolverConfigResponse res = sdk.sdk.updateResolverConfig(req);

            if (res.updateResolverConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResolverDnssecConfig

Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResolverDnssecConfigRequest;
import org.openapis.openapi.models.operations.UpdateResolverDnssecConfigResponse;
import org.openapis.openapi.models.operations.UpdateResolverDnssecConfigXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateResolverDnssecConfigRequest;
import org.openapis.openapi.models.shared.ValidationEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResolverDnssecConfigRequest req = new UpdateResolverDnssecConfigRequest(                new UpdateResolverDnssecConfigRequest("adipisci", ValidationEnum.USE_LOCAL_RESOURCE_SETTING);, UpdateResolverDnssecConfigXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_RESOLVER_DNSSEC_CONFIG) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "fugit";
                xAmzDate = "id";
                xAmzSecurityToken = "quis";
                xAmzSignature = "reprehenderit";
                xAmzSignedHeaders = "error";
            }};            

            UpdateResolverDnssecConfigResponse res = sdk.sdk.updateResolverDnssecConfig(req);

            if (res.updateResolverDnssecConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResolverEndpoint

Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResolverEndpointRequest;
import org.openapis.openapi.models.operations.UpdateResolverEndpointResponse;
import org.openapis.openapi.models.operations.UpdateResolverEndpointXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResolverEndpointTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateIpAddress;
import org.openapis.openapi.models.shared.UpdateResolverEndpointRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResolverEndpointRequest req = new UpdateResolverEndpointRequest(                new UpdateResolverEndpointRequest("corporis") {{
                                name = "Conrad Franey III";
                                resolverEndpointType = ResolverEndpointTypeEnum.IPV6;
                                updateIpAddresses = new org.openapis.openapi.models.shared.UpdateIpAddress[]{{
                                    add(new UpdateIpAddress("quaerat", "molestiae") {{
                                        ipId = "quae";
                                        ipv6 = "7e2b:6e3a:b884:5f05:97a6:0ff2:a54a:31e9";
                                    }}),
                                    add(new UpdateIpAddress("officia", "laborum") {{
                                        ipId = "ex";
                                        ipv6 = "4a3e:865e:7956:f925:1a5a:9da6:60ff:57bf";
                                    }}),
                                    add(new UpdateIpAddress("hic", "illum") {{
                                        ipId = "placeat";
                                        ipv6 = "4f9e:fc1b:4512:c103:2648:dc2f:6151:99eb";
                                    }}),
                                }};
                            }};, UpdateResolverEndpointXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_RESOLVER_ENDPOINT) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "earum";
                xAmzCredential = "perspiciatis";
                xAmzDate = "maiores";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "porro";
            }};            

            UpdateResolverEndpointResponse res = sdk.sdk.updateResolverEndpoint(req);

            if (res.updateResolverEndpointResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateResolverRule

Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateResolverRuleRequest;
import org.openapis.openapi.models.operations.UpdateResolverRuleResponse;
import org.openapis.openapi.models.operations.UpdateResolverRuleXAmzTargetEnum;
import org.openapis.openapi.models.shared.ResolverRuleConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetAddress;
import org.openapis.openapi.models.shared.UpdateResolverRuleRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateResolverRuleRequest req = new UpdateResolverRuleRequest(                new UpdateResolverRuleRequest(                new ResolverRuleConfig() {{
                                                name = "Denise Runolfsdottir";
                                                resolverEndpointId = "animi";
                                                targetIps = new org.openapis.openapi.models.shared.TargetAddress[]{{
                                                    add(new TargetAddress() {{
                                                        ip = "nulla";
                                                        ipv6 = "0117:9963:12fd:e047:7177:8ff6:1d01:7476";
                                                        port = 235263L;
                                                    }}),
                                                    add(new TargetAddress() {{
                                                        ip = "aliquid";
                                                        ipv6 = "0a15:db6a:6606:59a1:adea:ab58:51d6:c645";
                                                        port = 713927L;
                                                    }}),
                                                    add(new TargetAddress() {{
                                                        ip = "voluptatem";
                                                        ipv6 = "8b61:891b:aa0f:e1ad:e008:e6f8:c5f3:50d8";
                                                        port = 770675L;
                                                    }}),
                                                    add(new TargetAddress() {{
                                                        ip = "quibusdam";
                                                        ipv6 = "b5a3:4181:4301:0421:813d:5208:ece7:e253";
                                                        port = 712927L;
                                                    }}),
                                                }};
                                            }};, "eum");, UpdateResolverRuleXAmzTargetEnum.ROUTE53_RESOLVER_UPDATE_RESOLVER_RULE) {{
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "magnam";
                xAmzDate = "exercitationem";
                xAmzSecurityToken = "ab";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "autem";
            }};            

            UpdateResolverRuleResponse res = sdk.sdk.updateResolverRule(req);

            if (res.updateResolverRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
