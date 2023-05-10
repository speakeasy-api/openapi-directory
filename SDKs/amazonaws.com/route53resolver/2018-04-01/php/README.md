# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->associateFirewallRuleGroupRequest->creatorRequestId = 'corrupti';
    $request->associateFirewallRuleGroupRequest->firewallRuleGroupId = 'provident';
    $request->associateFirewallRuleGroupRequest->mutationProtection = MutationProtectionStatusEnum::DISABLED;
    $request->associateFirewallRuleGroupRequest->name = 'Stuart Stiedemann';
    $request->associateFirewallRuleGroupRequest->priority = 423655;
    $request->associateFirewallRuleGroupRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->associateFirewallRuleGroupRequest->vpcId = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AssociateFirewallRuleGroupXAmzTargetEnum::ROUTE53_RESOLVER_ASSOCIATE_FIREWALL_RULE_GROUP;

    $response = $sdk->associateFirewallRuleGroup($request);

    if ($response->associateFirewallRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [associateFirewallRuleGroup](docs/sdk/README.md#associatefirewallrulegroup) - Associates a <a>FirewallRuleGroup</a> with a VPC, to provide DNS filtering for the VPC. 
* [associateResolverEndpointIpAddress](docs/sdk/README.md#associateresolverendpointipaddress) - <p>Adds IP addresses to an inbound or an outbound Resolver endpoint. If you want to add more than one IP address, submit one <code>AssociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To remove an IP address from an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverEndpointIpAddress.html">DisassociateResolverEndpointIpAddress</a>. </p>
* [associateResolverQueryLogConfig](docs/sdk/README.md#associateresolverquerylogconfig) - <p>Associates an Amazon VPC with a specified query logging configuration. Route 53 Resolver logs DNS queries that originate in all of the Amazon VPCs that are associated with a specified query logging configuration. To associate more than one VPC with a configuration, submit one <code>AssociateResolverQueryLogConfig</code> request for each VPC.</p> <note> <p>The VPCs that you associate with a query logging configuration must be in the same Region as the configuration.</p> </note> <p>To remove a VPC from a query logging configuration, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>. </p>
* [associateResolverRule](docs/sdk/README.md#associateresolverrule) - Associates a Resolver rule with a VPC. When you associate a rule with a VPC, Resolver forwards all DNS queries for the domain name that is specified in the rule and that originate in the VPC. The queries are forwarded to the IP addresses for the DNS resolvers that are specified in the rule. For more information about rules, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html">CreateResolverRule</a>. 
* [createFirewallDomainList](docs/sdk/README.md#createfirewalldomainlist) - Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using <a>ImportFirewallDomains</a>, or with domain strings, using <a>UpdateFirewallDomains</a>. 
* [createFirewallRule](docs/sdk/README.md#createfirewallrule) - Creates a single DNS Firewall rule in the specified rule group, using the specified domain list.
* [createFirewallRuleGroup](docs/sdk/README.md#createfirewallrulegroup) - Creates an empty DNS Firewall rule group for filtering DNS network traffic in a VPC. You can add rules to the new rule group by calling <a>CreateFirewallRule</a>. 
* [createResolverEndpoint](docs/sdk/README.md#createresolverendpoint) - <p>Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:</p> <ul> <li> <p>An <i>inbound Resolver endpoint</i> forwards DNS queries to the DNS service for a VPC from your network.</p> </li> <li> <p>An <i>outbound Resolver endpoint</i> forwards DNS queries from the DNS service for a VPC to your network.</p> </li> </ul>
* [createResolverQueryLogConfig](docs/sdk/README.md#createresolverquerylogconfig) - <p>Creates a Resolver query logging configuration, which defines where you want Resolver to save DNS query logs that originate in your VPCs. Resolver can log queries only for VPCs that are in the same Region as the query logging configuration.</p> <p>To specify which VPCs you want to log queries for, you use <code>AssociateResolverQueryLogConfig</code>. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverQueryLogConfig.html">AssociateResolverQueryLogConfig</a>. </p> <p>You can optionally use Resource Access Manager (RAM) to share a query logging configuration with other Amazon Web Services accounts. The other accounts can then associate VPCs with the configuration. The query logs that Resolver creates for a configuration include all DNS queries that originate in all VPCs that are associated with the configuration.</p>
* [createResolverRule](docs/sdk/README.md#createresolverrule) - For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
* [deleteFirewallDomainList](docs/sdk/README.md#deletefirewalldomainlist) - Deletes the specified domain list. 
* [deleteFirewallRule](docs/sdk/README.md#deletefirewallrule) - Deletes the specified firewall rule.
* [deleteFirewallRuleGroup](docs/sdk/README.md#deletefirewallrulegroup) - Deletes the specified firewall rule group. 
* [deleteResolverEndpoint](docs/sdk/README.md#deleteresolverendpoint) - <p>Deletes a Resolver endpoint. The effect of deleting a Resolver endpoint depends on whether it's an inbound or an outbound Resolver endpoint:</p> <ul> <li> <p> <b>Inbound</b>: DNS queries from your network are no longer routed to the DNS service for the specified VPC.</p> </li> <li> <p> <b>Outbound</b>: DNS queries from a VPC are no longer routed to your network.</p> </li> </ul>
* [deleteResolverQueryLogConfig](docs/sdk/README.md#deleteresolverquerylogconfig) - <p>Deletes a query logging configuration. When you delete a configuration, Resolver stops logging DNS queries for all of the Amazon VPCs that are associated with the configuration. This also applies if the query logging configuration is shared with other Amazon Web Services accounts, and the other accounts have associated VPCs with the shared configuration.</p> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. See <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverQueryLogConfig.html">DisassociateResolverQueryLogConfig</a>.</p> <p>If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, you must stop sharing the configuration before you can delete a configuration. The accounts that you shared the configuration with can first disassociate VPCs that they associated with the configuration, but that's not necessary. If you stop sharing the configuration, those VPCs are automatically disassociated from the configuration.</p>
* [deleteResolverRule](docs/sdk/README.md#deleteresolverrule) - Deletes a Resolver rule. Before you can delete a Resolver rule, you must disassociate it from all the VPCs that you associated the Resolver rule with. For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html">DisassociateResolverRule</a>.
* [disassociateFirewallRuleGroup](docs/sdk/README.md#disassociatefirewallrulegroup) - Disassociates a <a>FirewallRuleGroup</a> from a VPC, to remove DNS filtering from the VPC. 
* [disassociateResolverEndpointIpAddress](docs/sdk/README.md#disassociateresolverendpointipaddress) - <p>Removes IP addresses from an inbound or an outbound Resolver endpoint. If you want to remove more than one IP address, submit one <code>DisassociateResolverEndpointIpAddress</code> request for each IP address.</p> <p>To add an IP address to an endpoint, see <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverEndpointIpAddress.html">AssociateResolverEndpointIpAddress</a>. </p>
* [disassociateResolverQueryLogConfig](docs/sdk/README.md#disassociateresolverquerylogconfig) - <p>Disassociates a VPC from a query logging configuration.</p> <note> <p>Before you can delete a query logging configuration, you must first disassociate all VPCs from the configuration. If you used Resource Access Manager (RAM) to share a query logging configuration with other accounts, VPCs can be disassociated from the configuration in the following ways:</p> <ul> <li> <p>The accounts that you shared the configuration with can disassociate VPCs from the configuration.</p> </li> <li> <p>You can stop sharing the configuration.</p> </li> </ul> </note>
* [disassociateResolverRule](docs/sdk/README.md#disassociateresolverrule) - <p>Removes the association between a specified Resolver rule and a specified VPC.</p> <important> <p>If you disassociate a Resolver rule from a VPC, Resolver stops forwarding DNS queries for the domain name that you specified in the Resolver rule. </p> </important>
* [getFirewallConfig](docs/sdk/README.md#getfirewallconfig) - Retrieves the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* [getFirewallDomainList](docs/sdk/README.md#getfirewalldomainlist) - Retrieves the specified firewall domain list.
* [getFirewallRuleGroup](docs/sdk/README.md#getfirewallrulegroup) - Retrieves the specified firewall rule group. 
* [getFirewallRuleGroupAssociation](docs/sdk/README.md#getfirewallrulegroupassociation) - Retrieves a firewall rule group association, which enables DNS filtering for a VPC with one rule group. A VPC can have more than one firewall rule group association, and a rule group can be associated with more than one VPC.
* [getFirewallRuleGroupPolicy](docs/sdk/README.md#getfirewallrulegrouppolicy) - Returns the Identity and Access Management (Amazon Web Services IAM) policy for sharing the specified rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* [getResolverConfig](docs/sdk/README.md#getresolverconfig) - Retrieves the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
* [getResolverDnssecConfig](docs/sdk/README.md#getresolverdnssecconfig) - Gets DNSSEC validation information for a specified resource.
* [getResolverEndpoint](docs/sdk/README.md#getresolverendpoint) - Gets information about a specified Resolver endpoint, such as whether it's an inbound or an outbound Resolver endpoint, and the current status of the endpoint.
* [getResolverQueryLogConfig](docs/sdk/README.md#getresolverquerylogconfig) - Gets information about a specified Resolver query logging configuration, such as the number of VPCs that the configuration is logging queries for and the location that logs are sent to. 
* [getResolverQueryLogConfigAssociation](docs/sdk/README.md#getresolverquerylogconfigassociation) - Gets information about a specified association between a Resolver query logging configuration and an Amazon VPC. When you associate a VPC with a query logging configuration, Resolver logs DNS queries that originate in that VPC.
* [getResolverQueryLogConfigPolicy](docs/sdk/README.md#getresolverquerylogconfigpolicy) - Gets information about a query logging policy. A query logging policy specifies the Resolver query logging operations and resources that you want to allow another Amazon Web Services account to be able to use.
* [getResolverRule](docs/sdk/README.md#getresolverrule) - Gets information about a specified Resolver rule, such as the domain name that the rule forwards DNS queries for and the ID of the outbound Resolver endpoint that the rule is associated with.
* [getResolverRuleAssociation](docs/sdk/README.md#getresolverruleassociation) - Gets information about an association between a specified Resolver rule and a VPC. You associate a Resolver rule and a VPC using <a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html">AssociateResolverRule</a>. 
* [getResolverRulePolicy](docs/sdk/README.md#getresolverrulepolicy) - Gets information about the Resolver rule policy for a specified rule. A Resolver rule policy includes the rule that you want to share with another account, the account that you want to share the rule with, and the Resolver operations that you want to allow the account to use. 
* [importFirewallDomains](docs/sdk/README.md#importfirewalldomains) - <p>Imports domain names from a file into a domain list, for use in a DNS firewall rule group. </p> <p>Each domain specification in your domain list must satisfy the following requirements: </p> <ul> <li> <p>It can optionally start with <code>*</code> (asterisk).</p> </li> <li> <p>With the exception of the optional starting asterisk, it must only contain the following characters: <code>A-Z</code>, <code>a-z</code>, <code>0-9</code>, <code>-</code> (hyphen).</p> </li> <li> <p>It must be from 1-255 characters in length. </p> </li> </ul>
* [listFirewallConfigs](docs/sdk/README.md#listfirewallconfigs) - <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p> <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
* [listFirewallDomainLists](docs/sdk/README.md#listfirewalldomainlists) - <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p> <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
* [listFirewallDomains](docs/sdk/README.md#listfirewalldomains) - <p>Retrieves the domains that you have defined for the specified firewall domain list. </p> <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
* [listFirewallRuleGroupAssociations](docs/sdk/README.md#listfirewallrulegroupassociations) - <p>Retrieves the firewall rule group associations that you have defined. Each association enables DNS filtering for a VPC with one rule group. </p> <p>A single call might return only a partial list of the associations. For information, see <code>MaxResults</code>. </p>
* [listFirewallRuleGroups](docs/sdk/README.md#listfirewallrulegroups) - <p>Retrieves the minimal high-level information for the rule groups that you have defined. </p> <p>A single call might return only a partial list of the rule groups. For information, see <code>MaxResults</code>. </p>
* [listFirewallRules](docs/sdk/README.md#listfirewallrules) - <p>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. </p> <p>A single call might return only a partial list of the rules. For information, see <code>MaxResults</code>. </p>
* [listResolverConfigs](docs/sdk/README.md#listresolverconfigs) - Retrieves the Resolver configurations that you have defined. Route 53 Resolver uses the configurations to manage DNS resolution behavior for your VPCs.
* [listResolverDnssecConfigs](docs/sdk/README.md#listresolverdnssecconfigs) - Lists the configurations for DNSSEC validation that are associated with the current Amazon Web Services account.
* [listResolverEndpointIpAddresses](docs/sdk/README.md#listresolverendpointipaddresses) - Gets the IP addresses for a specified Resolver endpoint.
* [listResolverEndpoints](docs/sdk/README.md#listresolverendpoints) - Lists all the Resolver endpoints that were created using the current Amazon Web Services account.
* [listResolverQueryLogConfigAssociations](docs/sdk/README.md#listresolverquerylogconfigassociations) - Lists information about associations between Amazon VPCs and query logging configurations.
* [listResolverQueryLogConfigs](docs/sdk/README.md#listresolverquerylogconfigs) - Lists information about the specified query logging configurations. Each configuration defines where you want Resolver to save DNS query logs and specifies the VPCs that you want to log queries for.
* [listResolverRuleAssociations](docs/sdk/README.md#listresolverruleassociations) - Lists the associations that were created between Resolver rules and VPCs using the current Amazon Web Services account.
* [listResolverRules](docs/sdk/README.md#listresolverrules) - Lists the Resolver rules that were created using the current Amazon Web Services account.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags that you associated with the specified resource.
* [putFirewallRuleGroupPolicy](docs/sdk/README.md#putfirewallrulegrouppolicy) - Attaches an Identity and Access Management (Amazon Web Services IAM) policy for sharing the rule group. You can use the policy to share the rule group using Resource Access Manager (RAM). 
* [putResolverQueryLogConfigPolicy](docs/sdk/README.md#putresolverquerylogconfigpolicy) - Specifies an Amazon Web Services account that you want to share a query logging configuration with, the query logging configuration that you want to share, and the operations that you want the account to be able to perform on the configuration.
* [putResolverRulePolicy](docs/sdk/README.md#putresolverrulepolicy) - Specifies an Amazon Web Services rule that you want to share with another account, the account that you want to share the rule with, and the operations that you want the account to be able to perform on the rule.
* [tagResource](docs/sdk/README.md#tagresource) - Adds one or more tags to a specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes one or more tags from a specified resource.
* [updateFirewallConfig](docs/sdk/README.md#updatefirewallconfig) - Updates the configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
* [updateFirewallDomains](docs/sdk/README.md#updatefirewalldomains) - Updates the firewall domain list from an array of domain specifications. 
* [updateFirewallRule](docs/sdk/README.md#updatefirewallrule) - Updates the specified firewall rule. 
* [updateFirewallRuleGroupAssociation](docs/sdk/README.md#updatefirewallrulegroupassociation) - Changes the association of a <a>FirewallRuleGroup</a> with a VPC. The association enables DNS filtering for the VPC. 
* [updateResolverConfig](docs/sdk/README.md#updateresolverconfig) - Updates the behavior configuration of Route 53 Resolver behavior for a single VPC from Amazon Virtual Private Cloud.
* [updateResolverDnssecConfig](docs/sdk/README.md#updateresolverdnssecconfig) - Updates an existing DNSSEC validation configuration. If there is no existing DNSSEC validation configuration, one is created.
* [updateResolverEndpoint](docs/sdk/README.md#updateresolverendpoint) - Updates the name, or enpoint type for an inbound or an outbound Resolver endpoint. You can only update between IPV4 and DUALSTACK, IPV6 endpoint type can't be updated to other type. 
* [updateResolverRule](docs/sdk/README.md#updateresolverrule) - Updates settings for a specified Resolver rule. <code>ResolverRuleId</code> is required, and all other parameters are optional. If you don't specify a parameter, it retains its current value.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
