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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\MutationProtectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFirewallRuleGroupRequest();
    $request->associateFirewallRuleGroupRequest = new AssociateFirewallRuleGroupRequest();
    $request->associateFirewallRuleGroupRequest->creatorRequestId = 'suscipit';
    $request->associateFirewallRuleGroupRequest->firewallRuleGroupId = 'molestiae';
    $request->associateFirewallRuleGroupRequest->mutationProtection = MutationProtectionStatusEnum::DISABLED;
    $request->associateFirewallRuleGroupRequest->name = 'Ken Kshlerin';
    $request->associateFirewallRuleGroupRequest->priority = 925597;
    $request->associateFirewallRuleGroupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->associateFirewallRuleGroupRequest->vpcId = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = AssociateFirewallRuleGroupXAmzTargetEnum::ROUTE53_RESOLVER_ASSOCIATE_FIREWALL_RULE_GROUP;

    $response = $sdk->sdk->associateFirewallRuleGroup($request);

    if ($response->associateFirewallRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateResolverEndpointIpAddress

<p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResolverEndpointIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateResolverEndpointIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressUpdate;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResolverEndpointIpAddressXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateResolverEndpointIpAddressRequest();
    $request->associateResolverEndpointIpAddressRequest = new AssociateResolverEndpointIpAddressRequest();
    $request->associateResolverEndpointIpAddressRequest->ipAddress = new IpAddressUpdate();
    $request->associateResolverEndpointIpAddressRequest->ipAddress->ip = 'quo';
    $request->associateResolverEndpointIpAddressRequest->ipAddress->ipId = 'odit';
    $request->associateResolverEndpointIpAddressRequest->ipAddress->ipv6 = 'ddf7:cc78:ca1b:a928:fc81:6742:cb73:9205';
    $request->associateResolverEndpointIpAddressRequest->ipAddress->subnetId = 'natus';
    $request->associateResolverEndpointIpAddressRequest->resolverEndpointId = 'sed';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->xAmzTarget = AssociateResolverEndpointIpAddressXAmzTargetEnum::ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS;

    $response = $sdk->sdk->associateResolverEndpointIpAddress($request);

    if ($response->associateResolverEndpointIpAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateResolverQueryLogConfig

<p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResolverQueryLogConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateResolverQueryLogConfigRequest();
    $request->associateResolverQueryLogConfigRequest = new AssociateResolverQueryLogConfigRequest();
    $request->associateResolverQueryLogConfigRequest->resolverQueryLogConfigId = 'in';
    $request->associateResolverQueryLogConfigRequest->resourceId = 'corporis';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = AssociateResolverQueryLogConfigXAmzTargetEnum::ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_QUERY_LOG_CONFIG;

    $response = $sdk->sdk->associateResolverQueryLogConfig($request);

    if ($response->associateResolverQueryLogConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateResolverRule

Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateResolverRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateResolverRuleRequest();
    $request->associateResolverRuleRequest = new AssociateResolverRuleRequest();
    $request->associateResolverRuleRequest->name = 'Shaun Osinski';
    $request->associateResolverRuleRequest->resolverRuleId = 'corporis';
    $request->associateResolverRuleRequest->vpcId = 'explicabo';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = AssociateResolverRuleXAmzTargetEnum::ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_RULE;

    $response = $sdk->sdk->associateResolverRule($request);

    if ($response->associateResolverRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFirewallDomainList

Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallDomainListRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFirewallDomainListRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallDomainListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFirewallDomainListRequest();
    $request->createFirewallDomainListRequest = new CreateFirewallDomainListRequest();
    $request->createFirewallDomainListRequest->creatorRequestId = 'iure';
    $request->createFirewallDomainListRequest->name = 'Miss Aubrey Williamson';
    $request->createFirewallDomainListRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = CreateFirewallDomainListXAmzTargetEnum::ROUTE53_RESOLVER_CREATE_FIREWALL_DOMAIN_LIST;

    $response = $sdk->sdk->createFirewallDomainList($request);

    if ($response->createFirewallDomainListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFirewallRule

Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFirewallRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlockOverrideDnsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlockResponseEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFirewallRuleRequest();
    $request->createFirewallRuleRequest = new CreateFirewallRuleRequest();
    $request->createFirewallRuleRequest->action = ActionEnum::BLOCK;
    $request->createFirewallRuleRequest->blockOverrideDnsType = BlockOverrideDnsTypeEnum::CNAME;
    $request->createFirewallRuleRequest->blockOverrideDomain = 'velit';
    $request->createFirewallRuleRequest->blockOverrideTtl = 623510;
    $request->createFirewallRuleRequest->blockResponse = BlockResponseEnum::NODATA;
    $request->createFirewallRuleRequest->creatorRequestId = 'quis';
    $request->createFirewallRuleRequest->firewallDomainListId = 'vitae';
    $request->createFirewallRuleRequest->firewallRuleGroupId = 'laborum';
    $request->createFirewallRuleRequest->name = 'Bill Conn';
    $request->createFirewallRuleRequest->priority = 949572;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->xAmzTarget = CreateFirewallRuleXAmzTargetEnum::ROUTE53_RESOLVER_CREATE_FIREWALL_RULE;

    $response = $sdk->sdk->createFirewallRule($request);

    if ($response->createFirewallRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFirewallRuleGroup

Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFirewallRuleGroupRequest();
    $request->createFirewallRuleGroupRequest = new CreateFirewallRuleGroupRequest();
    $request->createFirewallRuleGroupRequest->creatorRequestId = 'laborum';
    $request->createFirewallRuleGroupRequest->name = 'Johanna Wolf';
    $request->createFirewallRuleGroupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->xAmzTarget = CreateFirewallRuleGroupXAmzTargetEnum::ROUTE53_RESOLVER_CREATE_FIREWALL_RULE_GROUP;

    $response = $sdk->sdk->createFirewallRuleGroup($request);

    if ($response->createFirewallRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResolverEndpoint

<p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResolverEndpointDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResolverEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResolverEndpointRequest();
    $request->createResolverEndpointRequest = new CreateResolverEndpointRequest();
    $request->createResolverEndpointRequest->creatorRequestId = 'reprehenderit';
    $request->createResolverEndpointRequest->direction = ResolverEndpointDirectionEnum::INBOUND;
    $request->createResolverEndpointRequest->ipAddresses = [
        new IpAddressRequest(),
        new IpAddressRequest(),
        new IpAddressRequest(),
        new IpAddressRequest(),
    ];
    $request->createResolverEndpointRequest->name = 'Stacy Gulgowski MD';
    $request->createResolverEndpointRequest->resolverEndpointType = ResolverEndpointTypeEnum::IPV6;
    $request->createResolverEndpointRequest->securityGroupIds = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->createResolverEndpointRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = CreateResolverEndpointXAmzTargetEnum::ROUTE53_RESOLVER_CREATE_RESOLVER_ENDPOINT;

    $response = $sdk->sdk->createResolverEndpoint($request);

    if ($response->createResolverEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResolverQueryLogConfig

<p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverQueryLogConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResolverQueryLogConfigRequest();
    $request->createResolverQueryLogConfigRequest = new CreateResolverQueryLogConfigRequest();
    $request->createResolverQueryLogConfigRequest->creatorRequestId = 'quasi';
    $request->createResolverQueryLogConfigRequest->destinationArn = 'repudiandae';
    $request->createResolverQueryLogConfigRequest->name = 'Patrick Ward';
    $request->createResolverQueryLogConfigRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = CreateResolverQueryLogConfigXAmzTargetEnum::ROUTE53_RESOLVER_CREATE_RESOLVER_QUERY_LOG_CONFIG;

    $response = $sdk->sdk->createResolverQueryLogConfig($request);

    if ($response->createResolverQueryLogConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createResolverRule

For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TargetAddress;
use \OpenAPI\OpenAPI\Models\Operations\CreateResolverRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateResolverRuleRequest();
    $request->createResolverRuleRequest = new CreateResolverRuleRequest();
    $request->createResolverRuleRequest->creatorRequestId = 'modi';
    $request->createResolverRuleRequest->domainName = 'qui';
    $request->createResolverRuleRequest->name = 'Mr. Shelly Lueilwitz';
    $request->createResolverRuleRequest->resolverEndpointId = 'ipsam';
    $request->createResolverRuleRequest->ruleType = RuleTypeOptionEnum::FORWARD;
    $request->createResolverRuleRequest->tags = [
        new Tag(),
    ];
    $request->createResolverRuleRequest->targetIps = [
        new TargetAddress(),
        new TargetAddress(),
        new TargetAddress(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = CreateResolverRuleXAmzTargetEnum::ROUTE53_RESOLVER_CREATE_RESOLVER_RULE;

    $response = $sdk->sdk->createResolverRule($request);

    if ($response->createResolverRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFirewallDomainList

Deletes the specified domain list. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallDomainListRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFirewallDomainListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallDomainListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFirewallDomainListRequest();
    $request->deleteFirewallDomainListRequest = new DeleteFirewallDomainListRequest();
    $request->deleteFirewallDomainListRequest->firewallDomainListId = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = DeleteFirewallDomainListXAmzTargetEnum::ROUTE53_RESOLVER_DELETE_FIREWALL_DOMAIN_LIST;

    $response = $sdk->sdk->deleteFirewallDomainList($request);

    if ($response->deleteFirewallDomainListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFirewallRule

Deletes the specified firewall rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFirewallRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFirewallRuleRequest();
    $request->deleteFirewallRuleRequest = new DeleteFirewallRuleRequest();
    $request->deleteFirewallRuleRequest->firewallDomainListId = 'dolor';
    $request->deleteFirewallRuleRequest->firewallRuleGroupId = 'debitis';
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = DeleteFirewallRuleXAmzTargetEnum::ROUTE53_RESOLVER_DELETE_FIREWALL_RULE;

    $response = $sdk->sdk->deleteFirewallRule($request);

    if ($response->deleteFirewallRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFirewallRuleGroup

Deletes the specified firewall rule group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFirewallRuleGroupRequest();
    $request->deleteFirewallRuleGroupRequest = new DeleteFirewallRuleGroupRequest();
    $request->deleteFirewallRuleGroupRequest->firewallRuleGroupId = 'dicta';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DeleteFirewallRuleGroupXAmzTargetEnum::ROUTE53_RESOLVER_DELETE_FIREWALL_RULE_GROUP;

    $response = $sdk->sdk->deleteFirewallRuleGroup($request);

    if ($response->deleteFirewallRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResolverEndpoint

<p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResolverEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResolverEndpointRequest();
    $request->deleteResolverEndpointRequest = new DeleteResolverEndpointRequest();
    $request->deleteResolverEndpointRequest->resolverEndpointId = 'non';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = DeleteResolverEndpointXAmzTargetEnum::ROUTE53_RESOLVER_DELETE_RESOLVER_ENDPOINT;

    $response = $sdk->sdk->deleteResolverEndpoint($request);

    if ($response->deleteResolverEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResolverQueryLogConfig

<p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResolverQueryLogConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResolverQueryLogConfigRequest();
    $request->deleteResolverQueryLogConfigRequest = new DeleteResolverQueryLogConfigRequest();
    $request->deleteResolverQueryLogConfigRequest->resolverQueryLogConfigId = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteResolverQueryLogConfigXAmzTargetEnum::ROUTE53_RESOLVER_DELETE_RESOLVER_QUERY_LOG_CONFIG;

    $response = $sdk->sdk->deleteResolverQueryLogConfig($request);

    if ($response->deleteResolverQueryLogConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResolverRule

Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResolverRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResolverRuleRequest();
    $request->deleteResolverRuleRequest = new DeleteResolverRuleRequest();
    $request->deleteResolverRuleRequest->resolverRuleId = 'natus';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DeleteResolverRuleXAmzTargetEnum::ROUTE53_RESOLVER_DELETE_RESOLVER_RULE;

    $response = $sdk->sdk->deleteResolverRule($request);

    if ($response->deleteResolverRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateFirewallRuleGroup

Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateFirewallRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateFirewallRuleGroupRequest();
    $request->disassociateFirewallRuleGroupRequest = new DisassociateFirewallRuleGroupRequest();
    $request->disassociateFirewallRuleGroupRequest->firewallRuleGroupAssociationId = 'labore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = DisassociateFirewallRuleGroupXAmzTargetEnum::ROUTE53_RESOLVER_DISASSOCIATE_FIREWALL_RULE_GROUP;

    $response = $sdk->sdk->disassociateFirewallRuleGroup($request);

    if ($response->disassociateFirewallRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateResolverEndpointIpAddress

<p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResolverEndpointIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateResolverEndpointIpAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressUpdate;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResolverEndpointIpAddressXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateResolverEndpointIpAddressRequest();
    $request->disassociateResolverEndpointIpAddressRequest = new DisassociateResolverEndpointIpAddressRequest();
    $request->disassociateResolverEndpointIpAddressRequest->ipAddress = new IpAddressUpdate();
    $request->disassociateResolverEndpointIpAddressRequest->ipAddress->ip = 'architecto';
    $request->disassociateResolverEndpointIpAddressRequest->ipAddress->ipId = 'magnam';
    $request->disassociateResolverEndpointIpAddressRequest->ipAddress->ipv6 = '1959:890a:fa56:3e25:16fe:4c8b:711e:5b7f';
    $request->disassociateResolverEndpointIpAddressRequest->ipAddress->subnetId = 'quibusdam';
    $request->disassociateResolverEndpointIpAddressRequest->resolverEndpointId = 'sed';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = DisassociateResolverEndpointIpAddressXAmzTargetEnum::ROUTE53_RESOLVER_DISASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS;

    $response = $sdk->sdk->disassociateResolverEndpointIpAddress($request);

    if ($response->disassociateResolverEndpointIpAddressResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateResolverQueryLogConfig

<p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResolverQueryLogConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateResolverQueryLogConfigRequest();
    $request->disassociateResolverQueryLogConfigRequest = new DisassociateResolverQueryLogConfigRequest();
    $request->disassociateResolverQueryLogConfigRequest->resolverQueryLogConfigId = 'sunt';
    $request->disassociateResolverQueryLogConfigRequest->resourceId = 'quo';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'maxime';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DisassociateResolverQueryLogConfigXAmzTargetEnum::ROUTE53_RESOLVER_DISASSOCIATE_RESOLVER_QUERY_LOG_CONFIG;

    $response = $sdk->sdk->disassociateResolverQueryLogConfig($request);

    if ($response->disassociateResolverQueryLogConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateResolverRule

<p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateResolverRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateResolverRuleRequest();
    $request->disassociateResolverRuleRequest = new DisassociateResolverRuleRequest();
    $request->disassociateResolverRuleRequest->resolverRuleId = 'accusantium';
    $request->disassociateResolverRuleRequest->vpcId = 'ab';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = DisassociateResolverRuleXAmzTargetEnum::ROUTE53_RESOLVER_DISASSOCIATE_RESOLVER_RULE;

    $response = $sdk->sdk->disassociateResolverRule($request);

    if ($response->disassociateResolverRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallConfig

Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFirewallConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallConfigRequest();
    $request->getFirewallConfigRequest = new GetFirewallConfigRequest();
    $request->getFirewallConfigRequest->resourceId = 'pariatur';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = GetFirewallConfigXAmzTargetEnum::ROUTE53_RESOLVER_GET_FIREWALL_CONFIG;

    $response = $sdk->sdk->getFirewallConfig($request);

    if ($response->getFirewallConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallDomainList

Retrieves the specified firewall domain list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallDomainListRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFirewallDomainListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallDomainListXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallDomainListRequest();
    $request->getFirewallDomainListRequest = new GetFirewallDomainListRequest();
    $request->getFirewallDomainListRequest->firewallDomainListId = 'corporis';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = GetFirewallDomainListXAmzTargetEnum::ROUTE53_RESOLVER_GET_FIREWALL_DOMAIN_LIST;

    $response = $sdk->sdk->getFirewallDomainList($request);

    if ($response->getFirewallDomainListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallRuleGroup

Retrieves the specified firewall rule group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFirewallRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallRuleGroupRequest();
    $request->getFirewallRuleGroupRequest = new GetFirewallRuleGroupRequest();
    $request->getFirewallRuleGroupRequest->firewallRuleGroupId = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = GetFirewallRuleGroupXAmzTargetEnum::ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP;

    $response = $sdk->sdk->getFirewallRuleGroup($request);

    if ($response->getFirewallRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallRuleGroupAssociation

Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleGroupAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFirewallRuleGroupAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleGroupAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallRuleGroupAssociationRequest();
    $request->getFirewallRuleGroupAssociationRequest = new GetFirewallRuleGroupAssociationRequest();
    $request->getFirewallRuleGroupAssociationRequest->firewallRuleGroupAssociationId = 'dolor';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->xAmzTarget = GetFirewallRuleGroupAssociationXAmzTargetEnum::ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP_ASSOCIATION;

    $response = $sdk->sdk->getFirewallRuleGroupAssociation($request);

    if ($response->getFirewallRuleGroupAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFirewallRuleGroupPolicy

Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetFirewallRuleGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFirewallRuleGroupPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFirewallRuleGroupPolicyRequest();
    $request->getFirewallRuleGroupPolicyRequest = new GetFirewallRuleGroupPolicyRequest();
    $request->getFirewallRuleGroupPolicyRequest->arn = 'voluptatem';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'rerum';
    $request->xAmzTarget = GetFirewallRuleGroupPolicyXAmzTargetEnum::ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP_POLICY;

    $response = $sdk->sdk->getFirewallRuleGroupPolicy($request);

    if ($response->getFirewallRuleGroupPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverConfig

Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverConfigRequest();
    $request->getResolverConfigRequest = new GetResolverConfigRequest();
    $request->getResolverConfigRequest->resourceId = 'adipisci';
    $request->xAmzAlgorithm = 'asperiores';
    $request->xAmzContentSha256 = 'earum';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetResolverConfigXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_CONFIG;

    $response = $sdk->sdk->getResolverConfig($request);

    if ($response->getResolverConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverDnssecConfig

Gets DNSSEC validation information for a specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverDnssecConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverDnssecConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverDnssecConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverDnssecConfigRequest();
    $request->getResolverDnssecConfigRequest = new GetResolverDnssecConfigRequest();
    $request->getResolverDnssecConfigRequest->resourceId = 'provident';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = GetResolverDnssecConfigXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_DNSSEC_CONFIG;

    $response = $sdk->sdk->getResolverDnssecConfig($request);

    if ($response->getResolverDnssecConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverEndpoint

Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverEndpointRequest();
    $request->getResolverEndpointRequest = new GetResolverEndpointRequest();
    $request->getResolverEndpointRequest->resolverEndpointId = 'dolorem';
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = GetResolverEndpointXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_ENDPOINT;

    $response = $sdk->sdk->getResolverEndpoint($request);

    if ($response->getResolverEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverQueryLogConfig

Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverQueryLogConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverQueryLogConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverQueryLogConfigRequest();
    $request->getResolverQueryLogConfigRequest = new GetResolverQueryLogConfigRequest();
    $request->getResolverQueryLogConfigRequest->resolverQueryLogConfigId = 'dignissimos';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = GetResolverQueryLogConfigXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_QUERY_LOG_CONFIG;

    $response = $sdk->sdk->getResolverQueryLogConfig($request);

    if ($response->getResolverQueryLogConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverQueryLogConfigAssociation

Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverQueryLogConfigAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverQueryLogConfigAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverQueryLogConfigAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverQueryLogConfigAssociationRequest();
    $request->getResolverQueryLogConfigAssociationRequest = new GetResolverQueryLogConfigAssociationRequest();
    $request->getResolverQueryLogConfigAssociationRequest->resolverQueryLogConfigAssociationId = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = GetResolverQueryLogConfigAssociationXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATION;

    $response = $sdk->sdk->getResolverQueryLogConfigAssociation($request);

    if ($response->getResolverQueryLogConfigAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverQueryLogConfigPolicy

Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverQueryLogConfigPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverQueryLogConfigPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverQueryLogConfigPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverQueryLogConfigPolicyRequest();
    $request->getResolverQueryLogConfigPolicyRequest = new GetResolverQueryLogConfigPolicyRequest();
    $request->getResolverQueryLogConfigPolicyRequest->arn = 'eos';
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = GetResolverQueryLogConfigPolicyXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_QUERY_LOG_CONFIG_POLICY;

    $response = $sdk->sdk->getResolverQueryLogConfigPolicy($request);

    if ($response->getResolverQueryLogConfigPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverRule

Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverRuleRequest();
    $request->getResolverRuleRequest = new GetResolverRuleRequest();
    $request->getResolverRuleRequest->resolverRuleId = 'voluptate';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = GetResolverRuleXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_RULE;

    $response = $sdk->sdk->getResolverRule($request);

    if ($response->getResolverRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverRuleAssociation

Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverRuleAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverRuleAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverRuleAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverRuleAssociationRequest();
    $request->getResolverRuleAssociationRequest = new GetResolverRuleAssociationRequest();
    $request->getResolverRuleAssociationRequest->resolverRuleAssociationId = 'ipsum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = GetResolverRuleAssociationXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_RULE_ASSOCIATION;

    $response = $sdk->sdk->getResolverRuleAssociation($request);

    if ($response->getResolverRuleAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResolverRulePolicy

Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResolverRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetResolverRulePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResolverRulePolicyRequest();
    $request->getResolverRulePolicyRequest = new GetResolverRulePolicyRequest();
    $request->getResolverRulePolicyRequest->arn = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->xAmzTarget = GetResolverRulePolicyXAmzTargetEnum::ROUTE53_RESOLVER_GET_RESOLVER_RULE_POLICY;

    $response = $sdk->sdk->getResolverRulePolicy($request);

    if ($response->getResolverRulePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importFirewallDomains

<p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportFirewallDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportFirewallDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDomainImportOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportFirewallDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportFirewallDomainsRequest();
    $request->importFirewallDomainsRequest = new ImportFirewallDomainsRequest();
    $request->importFirewallDomainsRequest->domainFileUrl = 'repellendus';
    $request->importFirewallDomainsRequest->firewallDomainListId = 'totam';
    $request->importFirewallDomainsRequest->operation = FirewallDomainImportOperationEnum::REPLACE;
    $request->xAmzAlgorithm = 'similique';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = ImportFirewallDomainsXAmzTargetEnum::ROUTE53_RESOLVER_IMPORT_FIREWALL_DOMAINS;

    $response = $sdk->sdk->importFirewallDomains($request);

    if ($response->importFirewallDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallConfigs

<p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallConfigsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallConfigsRequest();
    $request->listFirewallConfigsRequest = new ListFirewallConfigsRequest();
    $request->listFirewallConfigsRequest->maxResults = 885338;
    $request->listFirewallConfigsRequest->nextToken = 'qui';
    $request->maxResults = 'dolorum';
    $request->nextToken = 'a';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = ListFirewallConfigsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_FIREWALL_CONFIGS;

    $response = $sdk->sdk->listFirewallConfigs($request);

    if ($response->listFirewallConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallDomainLists

<p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallDomainListsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallDomainListsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallDomainListsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallDomainListsRequest();
    $request->listFirewallDomainListsRequest = new ListFirewallDomainListsRequest();
    $request->listFirewallDomainListsRequest->maxResults = 730856;
    $request->listFirewallDomainListsRequest->nextToken = 'accusamus';
    $request->maxResults = 'numquam';
    $request->nextToken = 'enim';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = ListFirewallDomainListsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_FIREWALL_DOMAIN_LISTS;

    $response = $sdk->sdk->listFirewallDomainLists($request);

    if ($response->listFirewallDomainListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallDomains

<p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallDomainsRequest();
    $request->listFirewallDomainsRequest = new ListFirewallDomainsRequest();
    $request->listFirewallDomainsRequest->firewallDomainListId = 'sed';
    $request->listFirewallDomainsRequest->maxResults = 424685;
    $request->listFirewallDomainsRequest->nextToken = 'libero';
    $request->maxResults = 'voluptas';
    $request->nextToken = 'deserunt';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = ListFirewallDomainsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_FIREWALL_DOMAINS;

    $response = $sdk->sdk->listFirewallDomains($request);

    if ($response->listFirewallDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallRuleGroupAssociations

<p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRuleGroupAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallRuleGroupAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FirewallRuleGroupAssociationStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRuleGroupAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallRuleGroupAssociationsRequest();
    $request->listFirewallRuleGroupAssociationsRequest = new ListFirewallRuleGroupAssociationsRequest();
    $request->listFirewallRuleGroupAssociationsRequest->firewallRuleGroupId = 'soluta';
    $request->listFirewallRuleGroupAssociationsRequest->maxResults = 117531;
    $request->listFirewallRuleGroupAssociationsRequest->nextToken = 'laborum';
    $request->listFirewallRuleGroupAssociationsRequest->priority = 517379;
    $request->listFirewallRuleGroupAssociationsRequest->status = FirewallRuleGroupAssociationStatusEnum::COMPLETE;
    $request->listFirewallRuleGroupAssociationsRequest->vpcId = 'aspernatur';
    $request->maxResults = 'dolores';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = ListFirewallRuleGroupAssociationsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_FIREWALL_RULE_GROUP_ASSOCIATIONS;

    $response = $sdk->sdk->listFirewallRuleGroupAssociations($request);

    if ($response->listFirewallRuleGroupAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallRuleGroups

<p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRuleGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallRuleGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRuleGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallRuleGroupsRequest();
    $request->listFirewallRuleGroupsRequest = new ListFirewallRuleGroupsRequest();
    $request->listFirewallRuleGroupsRequest->maxResults = 144847;
    $request->listFirewallRuleGroupsRequest->nextToken = 'magni';
    $request->maxResults = 'odio';
    $request->nextToken = 'sunt';
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'soluta';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListFirewallRuleGroupsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_FIREWALL_RULE_GROUPS;

    $response = $sdk->sdk->listFirewallRuleGroups($request);

    if ($response->listFirewallRuleGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallRules

<p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallRulesRequest();
    $request->listFirewallRulesRequest = new ListFirewallRulesRequest();
    $request->listFirewallRulesRequest->action = ActionEnum::ALLOW;
    $request->listFirewallRulesRequest->firewallRuleGroupId = 'saepe';
    $request->listFirewallRulesRequest->maxResults = 217450;
    $request->listFirewallRulesRequest->nextToken = 'veritatis';
    $request->listFirewallRulesRequest->priority = 749255;
    $request->maxResults = 'quos';
    $request->nextToken = 'tempore';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'aperiam';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->xAmzTarget = ListFirewallRulesXAmzTargetEnum::ROUTE53_RESOLVER_LIST_FIREWALL_RULES;

    $response = $sdk->sdk->listFirewallRules($request);

    if ($response->listFirewallRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverConfigs

Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverConfigsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverConfigsRequest();
    $request->listResolverConfigsRequest = new ListResolverConfigsRequest();
    $request->listResolverConfigsRequest->maxResults = 677263;
    $request->listResolverConfigsRequest->nextToken = 'architecto';
    $request->maxResults = 'quae';
    $request->nextToken = 'aut';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = ListResolverConfigsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_CONFIGS;

    $response = $sdk->sdk->listResolverConfigs($request);

    if ($response->listResolverConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverDnssecConfigs

Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverDnssecConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverDnssecConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverDnssecConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverDnssecConfigsRequest();
    $request->listResolverDnssecConfigsRequest = new ListResolverDnssecConfigsRequest();
    $request->listResolverDnssecConfigsRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listResolverDnssecConfigsRequest->maxResults = 703495;
    $request->listResolverDnssecConfigsRequest->nextToken = 'cupiditate';
    $request->maxResults = 'qui';
    $request->nextToken = 'quae';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ListResolverDnssecConfigsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_DNSSEC_CONFIGS;

    $response = $sdk->sdk->listResolverDnssecConfigs($request);

    if ($response->listResolverDnssecConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverEndpointIpAddresses

Gets the IP addresses for a specified Resolver endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverEndpointIpAddressesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverEndpointIpAddressesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverEndpointIpAddressesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverEndpointIpAddressesRequest();
    $request->listResolverEndpointIpAddressesRequest = new ListResolverEndpointIpAddressesRequest();
    $request->listResolverEndpointIpAddressesRequest->maxResults = 338159;
    $request->listResolverEndpointIpAddressesRequest->nextToken = 'ipsum';
    $request->listResolverEndpointIpAddressesRequest->resolverEndpointId = 'delectus';
    $request->maxResults = 'voluptate';
    $request->nextToken = 'consectetur';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = ListResolverEndpointIpAddressesXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_ENDPOINT_IP_ADDRESSES;

    $response = $sdk->sdk->listResolverEndpointIpAddresses($request);

    if ($response->listResolverEndpointIpAddressesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverEndpoints

Lists all the Resolver endpoints that were created using the current Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverEndpointsRequest();
    $request->listResolverEndpointsRequest = new ListResolverEndpointsRequest();
    $request->listResolverEndpointsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listResolverEndpointsRequest->maxResults = 708548;
    $request->listResolverEndpointsRequest->nextToken = 'vero';
    $request->maxResults = 'ducimus';
    $request->nextToken = 'dolore';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'impedit';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = ListResolverEndpointsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_ENDPOINTS;

    $response = $sdk->sdk->listResolverEndpoints($request);

    if ($response->listResolverEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverQueryLogConfigAssociations

Lists information about associations between Amazon VPCs and query logging configurations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverQueryLogConfigAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverQueryLogConfigAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverQueryLogConfigAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverQueryLogConfigAssociationsRequest();
    $request->listResolverQueryLogConfigAssociationsRequest = new ListResolverQueryLogConfigAssociationsRequest();
    $request->listResolverQueryLogConfigAssociationsRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listResolverQueryLogConfigAssociationsRequest->maxResults = 862310;
    $request->listResolverQueryLogConfigAssociationsRequest->nextToken = 'fugit';
    $request->listResolverQueryLogConfigAssociationsRequest->sortBy = 'porro';
    $request->listResolverQueryLogConfigAssociationsRequest->sortOrder = SortOrderEnum::DESCENDING;
    $request->maxResults = 'doloribus';
    $request->nextToken = 'iusto';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'ducimus';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = ListResolverQueryLogConfigAssociationsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATIONS;

    $response = $sdk->sdk->listResolverQueryLogConfigAssociations($request);

    if ($response->listResolverQueryLogConfigAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverQueryLogConfigs

Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverQueryLogConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverQueryLogConfigsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverQueryLogConfigsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverQueryLogConfigsRequest();
    $request->listResolverQueryLogConfigsRequest = new ListResolverQueryLogConfigsRequest();
    $request->listResolverQueryLogConfigsRequest->filters = [
        new Filter(),
    ];
    $request->listResolverQueryLogConfigsRequest->maxResults = 428224;
    $request->listResolverQueryLogConfigsRequest->nextToken = 'possimus';
    $request->listResolverQueryLogConfigsRequest->sortBy = 'magnam';
    $request->listResolverQueryLogConfigsRequest->sortOrder = SortOrderEnum::ASCENDING;
    $request->maxResults = 'ex';
    $request->nextToken = 'laudantium';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'ex';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = ListResolverQueryLogConfigsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_QUERY_LOG_CONFIGS;

    $response = $sdk->sdk->listResolverQueryLogConfigs($request);

    if ($response->listResolverQueryLogConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverRuleAssociations

Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverRuleAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverRuleAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverRuleAssociationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverRuleAssociationsRequest();
    $request->listResolverRuleAssociationsRequest = new ListResolverRuleAssociationsRequest();
    $request->listResolverRuleAssociationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listResolverRuleAssociationsRequest->maxResults = 343605;
    $request->listResolverRuleAssociationsRequest->nextToken = 'sapiente';
    $request->maxResults = 'quisquam';
    $request->nextToken = 'saepe';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = ListResolverRuleAssociationsXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_RULE_ASSOCIATIONS;

    $response = $sdk->sdk->listResolverRuleAssociations($request);

    if ($response->listResolverRuleAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResolverRules

Lists the Resolver rules that were created using the current Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResolverRulesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListResolverRulesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResolverRulesRequest();
    $request->listResolverRulesRequest = new ListResolverRulesRequest();
    $request->listResolverRulesRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listResolverRulesRequest->maxResults = 775220;
    $request->listResolverRulesRequest->nextToken = 'consectetur';
    $request->maxResults = 'recusandae';
    $request->nextToken = 'aspernatur';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'libero';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = ListResolverRulesXAmzTargetEnum::ROUTE53_RESOLVER_LIST_RESOLVER_RULES;

    $response = $sdk->sdk->listResolverRules($request);

    if ($response->listResolverRulesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags that you associated with the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->maxResults = 770581;
    $request->listTagsForResourceRequest->nextToken = 'aliquam';
    $request->listTagsForResourceRequest->resourceArn = 'fugit';
    $request->maxResults = 'accusamus';
    $request->nextToken = 'inventore';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::ROUTE53_RESOLVER_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putFirewallRuleGroupPolicy

Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutFirewallRuleGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutFirewallRuleGroupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutFirewallRuleGroupPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutFirewallRuleGroupPolicyRequest();
    $request->putFirewallRuleGroupPolicyRequest = new PutFirewallRuleGroupPolicyRequest();
    $request->putFirewallRuleGroupPolicyRequest->arn = 'autem';
    $request->putFirewallRuleGroupPolicyRequest->firewallRuleGroupPolicy = 'nobis';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = PutFirewallRuleGroupPolicyXAmzTargetEnum::ROUTE53_RESOLVER_PUT_FIREWALL_RULE_GROUP_POLICY;

    $response = $sdk->sdk->putFirewallRuleGroupPolicy($request);

    if ($response->putFirewallRuleGroupPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResolverQueryLogConfigPolicy

Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResolverQueryLogConfigPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResolverQueryLogConfigPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResolverQueryLogConfigPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResolverQueryLogConfigPolicyRequest();
    $request->putResolverQueryLogConfigPolicyRequest = new PutResolverQueryLogConfigPolicyRequest();
    $request->putResolverQueryLogConfigPolicyRequest->arn = 'numquam';
    $request->putResolverQueryLogConfigPolicyRequest->resolverQueryLogConfigPolicy = 'explicabo';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = PutResolverQueryLogConfigPolicyXAmzTargetEnum::ROUTE53_RESOLVER_PUT_RESOLVER_QUERY_LOG_CONFIG_POLICY;

    $response = $sdk->sdk->putResolverQueryLogConfigPolicy($request);

    if ($response->putResolverQueryLogConfigPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResolverRulePolicy

Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResolverRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResolverRulePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResolverRulePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResolverRulePolicyRequest();
    $request->putResolverRulePolicyRequest = new PutResolverRulePolicyRequest();
    $request->putResolverRulePolicyRequest->arn = 'esse';
    $request->putResolverRulePolicyRequest->resolverRulePolicy = 'rem';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'reprehenderit';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'ut';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->xAmzTarget = PutResolverRulePolicyXAmzTargetEnum::ROUTE53_RESOLVER_PUT_RESOLVER_RULE_POLICY;

    $response = $sdk->sdk->putResolverRulePolicy($request);

    if ($response->putResolverRulePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds one or more tags to a specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'assumenda';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::ROUTE53_RESOLVER_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from a specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'quo';
    $request->untagResourceRequest->tagKeys = [
        'quo',
        'fuga',
        'eius',
        'eos',
    ];
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::ROUTE53_RESOLVER_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallConfig

Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\FirewallFailOpenStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallConfigRequest();
    $request->updateFirewallConfigRequest = new UpdateFirewallConfigRequest();
    $request->updateFirewallConfigRequest->firewallFailOpen = FirewallFailOpenStatusEnum::ENABLED;
    $request->updateFirewallConfigRequest->resourceId = 'sequi';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aperiam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->xAmzTarget = UpdateFirewallConfigXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_FIREWALL_CONFIG;

    $response = $sdk->sdk->updateFirewallConfig($request);

    if ($response->updateFirewallConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallDomains

Updates the firewall domain list from an array of domain specifications. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\FirewallDomainUpdateOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallDomainsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallDomainsRequest();
    $request->updateFirewallDomainsRequest = new UpdateFirewallDomainsRequest();
    $request->updateFirewallDomainsRequest->domains = [
        'nihil',
    ];
    $request->updateFirewallDomainsRequest->firewallDomainListId = 'totam';
    $request->updateFirewallDomainsRequest->operation = FirewallDomainUpdateOperationEnum::REPLACE;
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = UpdateFirewallDomainsXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_FIREWALL_DOMAINS;

    $response = $sdk->sdk->updateFirewallDomains($request);

    if ($response->updateFirewallDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallRule

Updates the specified firewall rule. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlockOverrideDnsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BlockResponseEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallRuleRequest();
    $request->updateFirewallRuleRequest = new UpdateFirewallRuleRequest();
    $request->updateFirewallRuleRequest->action = ActionEnum::BLOCK;
    $request->updateFirewallRuleRequest->blockOverrideDnsType = BlockOverrideDnsTypeEnum::CNAME;
    $request->updateFirewallRuleRequest->blockOverrideDomain = 'accusantium';
    $request->updateFirewallRuleRequest->blockOverrideTtl = 783648;
    $request->updateFirewallRuleRequest->blockResponse = BlockResponseEnum::NXDOMAIN;
    $request->updateFirewallRuleRequest->firewallDomainListId = 'quas';
    $request->updateFirewallRuleRequest->firewallRuleGroupId = 'praesentium';
    $request->updateFirewallRuleRequest->name = 'Cassandra Considine';
    $request->updateFirewallRuleRequest->priority = 277596;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = UpdateFirewallRuleXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_FIREWALL_RULE;

    $response = $sdk->sdk->updateFirewallRule($request);

    if ($response->updateFirewallRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallRuleGroupAssociation

Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallRuleGroupAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallRuleGroupAssociationRequest;
use \OpenAPI\OpenAPI\Models\Shared\MutationProtectionStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallRuleGroupAssociationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallRuleGroupAssociationRequest();
    $request->updateFirewallRuleGroupAssociationRequest = new UpdateFirewallRuleGroupAssociationRequest();
    $request->updateFirewallRuleGroupAssociationRequest->firewallRuleGroupAssociationId = 'ratione';
    $request->updateFirewallRuleGroupAssociationRequest->mutationProtection = MutationProtectionStatusEnum::ENABLED;
    $request->updateFirewallRuleGroupAssociationRequest->name = 'Ms. Marion Little';
    $request->updateFirewallRuleGroupAssociationRequest->priority = 882042;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = UpdateFirewallRuleGroupAssociationXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_FIREWALL_RULE_GROUP_ASSOCIATION;

    $response = $sdk->sdk->updateFirewallRuleGroupAssociation($request);

    if ($response->updateFirewallRuleGroupAssociationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResolverConfig

Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResolverConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutodefinedReverseFlagEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResolverConfigRequest();
    $request->updateResolverConfigRequest = new UpdateResolverConfigRequest();
    $request->updateResolverConfigRequest->autodefinedReverseFlag = AutodefinedReverseFlagEnum::USE_LOCAL_RESOURCE_SETTING;
    $request->updateResolverConfigRequest->resourceId = 'vel';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = UpdateResolverConfigXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_RESOLVER_CONFIG;

    $response = $sdk->sdk->updateResolverConfig($request);

    if ($response->updateResolverConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResolverDnssecConfig

Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverDnssecConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResolverDnssecConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\ValidationEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverDnssecConfigXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResolverDnssecConfigRequest();
    $request->updateResolverDnssecConfigRequest = new UpdateResolverDnssecConfigRequest();
    $request->updateResolverDnssecConfigRequest->resourceId = 'sit';
    $request->updateResolverDnssecConfigRequest->validation = ValidationEnum::DISABLE;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = UpdateResolverDnssecConfigXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_RESOLVER_DNSSEC_CONFIG;

    $response = $sdk->sdk->updateResolverDnssecConfig($request);

    if ($response->updateResolverDnssecConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResolverEndpoint

Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResolverEndpointRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResolverEndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateIpAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverEndpointXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResolverEndpointRequest();
    $request->updateResolverEndpointRequest = new UpdateResolverEndpointRequest();
    $request->updateResolverEndpointRequest->name = 'Glenn Koch';
    $request->updateResolverEndpointRequest->resolverEndpointId = 'a';
    $request->updateResolverEndpointRequest->resolverEndpointType = ResolverEndpointTypeEnum::DUALSTACK;
    $request->updateResolverEndpointRequest->updateIpAddresses = [
        new UpdateIpAddress(),
        new UpdateIpAddress(),
        new UpdateIpAddress(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = UpdateResolverEndpointXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_RESOLVER_ENDPOINT;

    $response = $sdk->sdk->updateResolverEndpoint($request);

    if ($response->updateResolverEndpointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateResolverRule

Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateResolverRuleRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResolverRuleConfig;
use \OpenAPI\OpenAPI\Models\Shared\TargetAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateResolverRuleXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateResolverRuleRequest();
    $request->updateResolverRuleRequest = new UpdateResolverRuleRequest();
    $request->updateResolverRuleRequest->config = new ResolverRuleConfig();
    $request->updateResolverRuleRequest->config->name = 'Laverne Zemlak Sr.';
    $request->updateResolverRuleRequest->config->resolverEndpointId = 'quasi';
    $request->updateResolverRuleRequest->config->targetIps = [
        new TargetAddress(),
        new TargetAddress(),
        new TargetAddress(),
    ];
    $request->updateResolverRuleRequest->resolverRuleId = 'culpa';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = UpdateResolverRuleXAmzTargetEnum::ROUTE53_RESOLVER_UPDATE_RESOLVER_RULE;

    $response = $sdk->sdk->updateResolverRule($request);

    if ($response->updateResolverRuleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
