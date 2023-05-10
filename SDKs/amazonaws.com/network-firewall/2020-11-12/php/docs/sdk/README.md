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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateFirewallPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateFirewallPolicyRequest();
    $request->associateFirewallPolicyRequest = new AssociateFirewallPolicyRequest();
    $request->associateFirewallPolicyRequest->firewallArn = 'suscipit';
    $request->associateFirewallPolicyRequest->firewallName = 'iure';
    $request->associateFirewallPolicyRequest->firewallPolicyArn = 'magnam';
    $request->associateFirewallPolicyRequest->updateToken = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';
    $request->xAmzTarget = AssociateFirewallPolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_ASSOCIATE_FIREWALL_POLICY;

    $response = $sdk->sdk->associateFirewallPolicy($request);

    if ($response->associateFirewallPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateSubnets

<p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one subnet for each of the Availability Zones that the VPC spans. </p> <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To enable the firewall's protections, you must also modify the VPC's route tables for each subnet's Availability Zone, to redirect the traffic that's coming into and going out of the zone through the firewall endpoint. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubnetMapping;
use \OpenAPI\OpenAPI\Models\Shared\IPAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AssociateSubnetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateSubnetsRequest();
    $request->associateSubnetsRequest = new AssociateSubnetsRequest();
    $request->associateSubnetsRequest->firewallArn = 'voluptatum';
    $request->associateSubnetsRequest->firewallName = 'iusto';
    $request->associateSubnetsRequest->subnetMappings = [
        new SubnetMapping(),
        new SubnetMapping(),
        new SubnetMapping(),
    ];
    $request->associateSubnetsRequest->updateToken = 'nisi';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = AssociateSubnetsXAmzTargetEnum::NETWORK_FIREWALL20201112_ASSOCIATE_SUBNETS;

    $response = $sdk->sdk->associateSubnets($request);

    if ($response->associateSubnetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFirewall

<p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p> <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p> <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p> <p>To update the settings for a firewall, you use the operations that apply to the settings themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p> <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetMapping;
use \OpenAPI\OpenAPI\Models\Shared\IPAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFirewallRequest();
    $request->createFirewallRequest = new CreateFirewallRequest();
    $request->createFirewallRequest->deleteProtection = false;
    $request->createFirewallRequest->description = 'ipsam';
    $request->createFirewallRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->createFirewallRequest->encryptionConfiguration->keyId = 'repellendus';
    $request->createFirewallRequest->encryptionConfiguration->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createFirewallRequest->firewallName = 'quo';
    $request->createFirewallRequest->firewallPolicyArn = 'odit';
    $request->createFirewallRequest->firewallPolicyChangeProtection = false;
    $request->createFirewallRequest->subnetChangeProtection = false;
    $request->createFirewallRequest->subnetMappings = [
        new SubnetMapping(),
        new SubnetMapping(),
        new SubnetMapping(),
        new SubnetMapping(),
    ];
    $request->createFirewallRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createFirewallRequest->vpcId = 'maiores';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = CreateFirewallXAmzTargetEnum::NETWORK_FIREWALL20201112_CREATE_FIREWALL;

    $response = $sdk->sdk->createFirewall($request);

    if ($response->createFirewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFirewallPolicy

<p>Creates the firewall policy for the firewall according to the specifications. </p> <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of stateless and stateful rule groups and other settings. You can use one firewall policy for multiple firewalls. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\StatefulEngineOptions;
use \OpenAPI\OpenAPI\Models\Shared\RuleOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamExceptionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleGroupReference;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleGroupOverride;
use \OpenAPI\OpenAPI\Models\Shared\OverrideActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\PublishMetricAction;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\StatelessRuleGroupReference;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateFirewallPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFirewallPolicyRequest();
    $request->createFirewallPolicyRequest = new CreateFirewallPolicyRequest();
    $request->createFirewallPolicyRequest->description = 'dicta';
    $request->createFirewallPolicyRequest->dryRun = false;
    $request->createFirewallPolicyRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->createFirewallPolicyRequest->encryptionConfiguration->keyId = 'nam';
    $request->createFirewallPolicyRequest->encryptionConfiguration->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createFirewallPolicyRequest->firewallPolicy = new FirewallPolicy();
    $request->createFirewallPolicyRequest->firewallPolicy->statefulDefaultActions = [
        'fugit',
        'deleniti',
        'hic',
    ];
    $request->createFirewallPolicyRequest->firewallPolicy->statefulEngineOptions = new StatefulEngineOptions();
    $request->createFirewallPolicyRequest->firewallPolicy->statefulEngineOptions->ruleOrder = RuleOrderEnum::STRICT_ORDER;
    $request->createFirewallPolicyRequest->firewallPolicy->statefulEngineOptions->streamExceptionPolicy = StreamExceptionPolicyEnum::CONTINUE;
    $request->createFirewallPolicyRequest->firewallPolicy->statefulRuleGroupReferences = [
        new StatefulRuleGroupReference(),
    ];
    $request->createFirewallPolicyRequest->firewallPolicy->statelessCustomActions = [
        new CustomAction(),
        new CustomAction(),
    ];
    $request->createFirewallPolicyRequest->firewallPolicy->statelessDefaultActions = [
        'modi',
        'qui',
    ];
    $request->createFirewallPolicyRequest->firewallPolicy->statelessFragmentDefaultActions = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->createFirewallPolicyRequest->firewallPolicy->statelessRuleGroupReferences = [
        new StatelessRuleGroupReference(),
    ];
    $request->createFirewallPolicyRequest->firewallPolicy->tlsInspectionConfigurationArn = 'perferendis';
    $request->createFirewallPolicyRequest->firewallPolicyName = 'ad';
    $request->createFirewallPolicyRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'laboriosam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = CreateFirewallPolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_CREATE_FIREWALL_POLICY;

    $response = $sdk->sdk->createFirewallPolicy($request);

    if ($response->createFirewallPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createRuleGroup

<p>Creates the specified stateless or stateful rule group, which includes the rules for network traffic inspection, a capacity setting, and tags. </p> <p>You provide your rule group specification in your request using either <code>RuleGroup</code> or <code>Rules</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\ReferenceSets;
use \OpenAPI\OpenAPI\Models\Shared\IPSetReference;
use \OpenAPI\OpenAPI\Models\Shared\RuleVariables;
use \OpenAPI\OpenAPI\Models\Shared\IPSet;
use \OpenAPI\OpenAPI\Models\Shared\PortSet;
use \OpenAPI\OpenAPI\Models\Shared\RulesSource;
use \OpenAPI\OpenAPI\Models\Shared\RulesSourceList;
use \OpenAPI\OpenAPI\Models\Shared\GeneratedRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRule;
use \OpenAPI\OpenAPI\Models\Shared\StatefulActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleOption;
use \OpenAPI\OpenAPI\Models\Shared\StatelessRulesAndCustomActions;
use \OpenAPI\OpenAPI\Models\Shared\CustomAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\PublishMetricAction;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\StatelessRule;
use \OpenAPI\OpenAPI\Models\Shared\RuleDefinition;
use \OpenAPI\OpenAPI\Models\Shared\MatchAttributes;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\TCPFlagField;
use \OpenAPI\OpenAPI\Models\Shared\TCPFlagEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleOptions;
use \OpenAPI\OpenAPI\Models\Shared\RuleOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateRuleGroupRequest();
    $request->createRuleGroupRequest = new CreateRuleGroupRequest();
    $request->createRuleGroupRequest->capacity = 681820;
    $request->createRuleGroupRequest->description = 'in';
    $request->createRuleGroupRequest->dryRun = false;
    $request->createRuleGroupRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->createRuleGroupRequest->encryptionConfiguration->keyId = 'corporis';
    $request->createRuleGroupRequest->encryptionConfiguration->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createRuleGroupRequest->ruleGroup = new RuleGroup();
    $request->createRuleGroupRequest->ruleGroup->referenceSets = new ReferenceSets();
    $request->createRuleGroupRequest->ruleGroup->referenceSets->ipSetReferences = [
        'saepe' => new IPSetReference(),
        'quidem' => new IPSetReference(),
    ];
    $request->createRuleGroupRequest->ruleGroup->ruleVariables = new RuleVariables();
    $request->createRuleGroupRequest->ruleGroup->ruleVariables->ipSets = [
        'ipsa' => new IPSet(),
    ];
    $request->createRuleGroupRequest->ruleGroup->ruleVariables->portSets = [
        'est' => new PortSet(),
        'mollitia' => new PortSet(),
        'laborum' => new PortSet(),
        'dolores' => new PortSet(),
    ];
    $request->createRuleGroupRequest->ruleGroup->rulesSource = new RulesSource();
    $request->createRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList = new RulesSourceList();
    $request->createRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList->generatedRulesType = GeneratedRulesTypeEnum::ALLOWLIST;
    $request->createRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList->targetTypes = [
        TargetTypeEnum::TLS_SNI,
        TargetTypeEnum::HTTP_HOST,
    ];
    $request->createRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList->targets = [
        'omnis',
        'nemo',
    ];
    $request->createRuleGroupRequest->ruleGroup->rulesSource->rulesString = 'minima';
    $request->createRuleGroupRequest->ruleGroup->rulesSource->statefulRules = [
        new StatefulRule(),
        new StatefulRule(),
        new StatefulRule(),
    ];
    $request->createRuleGroupRequest->ruleGroup->rulesSource->statelessRulesAndCustomActions = new StatelessRulesAndCustomActions();
    $request->createRuleGroupRequest->ruleGroup->rulesSource->statelessRulesAndCustomActions->customActions = [
        new CustomAction(),
    ];
    $request->createRuleGroupRequest->ruleGroup->rulesSource->statelessRulesAndCustomActions->statelessRules = [
        new StatelessRule(),
        new StatelessRule(),
    ];
    $request->createRuleGroupRequest->ruleGroup->statefulRuleOptions = new StatefulRuleOptions();
    $request->createRuleGroupRequest->ruleGroup->statefulRuleOptions->ruleOrder = RuleOrderEnum::STRICT_ORDER;
    $request->createRuleGroupRequest->ruleGroupName = 'doloribus';
    $request->createRuleGroupRequest->rules = 'sapiente';
    $request->createRuleGroupRequest->sourceMetadata = new SourceMetadata();
    $request->createRuleGroupRequest->sourceMetadata->sourceArn = 'architecto';
    $request->createRuleGroupRequest->sourceMetadata->sourceUpdateToken = 'mollitia';
    $request->createRuleGroupRequest->tags = [
        new Tag(),
    ];
    $request->createRuleGroupRequest->type = RuleGroupTypeEnum::STATEFUL;
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = CreateRuleGroupXAmzTargetEnum::NETWORK_FIREWALL20201112_CREATE_RULE_GROUP;

    $response = $sdk->sdk->createRuleGroup($request);

    if ($response->createRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTLSInspectionConfiguration

<p>Creates an Network Firewall TLS inspection configuration. A TLS inspection configuration contains the Certificate Manager certificate references that Network Firewall uses to decrypt and re-encrypt inbound traffic.</p> <p>After you create a TLS inspection configuration, you associate it with a firewall policy.</p> <p>To update the settings for a TLS inspection configuration, use <a>UpdateTLSInspectionConfiguration</a>.</p> <p>To manage a TLS inspection configuration's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p> <p>To retrieve information about TLS inspection configurations, use <a>ListTLSInspectionConfigurations</a> and <a>DescribeTLSInspectionConfiguration</a>.</p> <p> For more information about TLS inspection configurations, see <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html">Decrypting SSL/TLS traffic with TLS inspection configurations</a> in the <i>Network Firewall Developer Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TLSInspectionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerCertificateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerCertificateScope;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\ServerCertificate;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateTLSInspectionConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTLSInspectionConfigurationRequest();
    $request->createTLSInspectionConfigurationRequest = new CreateTLSInspectionConfigurationRequest();
    $request->createTLSInspectionConfigurationRequest->description = 'molestiae';
    $request->createTLSInspectionConfigurationRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->createTLSInspectionConfigurationRequest->encryptionConfiguration->keyId = 'velit';
    $request->createTLSInspectionConfigurationRequest->encryptionConfiguration->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->createTLSInspectionConfigurationRequest->tlsInspectionConfiguration = new TLSInspectionConfiguration();
    $request->createTLSInspectionConfigurationRequest->tlsInspectionConfiguration->serverCertificateConfigurations = [
        new ServerCertificateConfiguration(),
    ];
    $request->createTLSInspectionConfigurationRequest->tlsInspectionConfigurationName = 'quis';
    $request->createTLSInspectionConfigurationRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = CreateTLSInspectionConfigurationXAmzTargetEnum::NETWORK_FIREWALL20201112_CREATE_TLS_INSPECTION_CONFIGURATION;

    $response = $sdk->sdk->createTLSInspectionConfiguration($request);

    if ($response->createTLSInspectionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFirewall

<p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>. This operation requires the firewall's <code>DeleteProtection</code> flag to be <code>FALSE</code>. You can't revert this operation. </p> <p>You can check whether a firewall is in use by reviewing the route tables for the Availability Zones where you have firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>. You define and update the route tables through Amazon VPC. As needed, update the route tables for the zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints, you can remove the firewall safely.</p> <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>, then delete the firewall by calling <a>DeleteFirewall</a>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFirewallRequest();
    $request->deleteFirewallRequest = new DeleteFirewallRequest();
    $request->deleteFirewallRequest->firewallArn = 'ipsam';
    $request->deleteFirewallRequest->firewallName = 'id';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteFirewallXAmzTargetEnum::NETWORK_FIREWALL20201112_DELETE_FIREWALL;

    $response = $sdk->sdk->deleteFirewall($request);

    if ($response->deleteFirewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFirewallPolicy

Deletes the specified <a>FirewallPolicy</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFirewallPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFirewallPolicyRequest();
    $request->deleteFirewallPolicyRequest = new DeleteFirewallPolicyRequest();
    $request->deleteFirewallPolicyRequest->firewallPolicyArn = 'reiciendis';
    $request->deleteFirewallPolicyRequest->firewallPolicyName = 'voluptatibus';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = DeleteFirewallPolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_DELETE_FIREWALL_POLICY;

    $response = $sdk->sdk->deleteFirewallPolicy($request);

    if ($response->deleteFirewallPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyRequest->resourceArn = 'cum';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'doloremque';
    $request->xAmzCredential = 'reprehenderit';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'corporis';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRuleGroup

Deletes the specified <a>RuleGroup</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRuleGroupRequest();
    $request->deleteRuleGroupRequest = new DeleteRuleGroupRequest();
    $request->deleteRuleGroupRequest->ruleGroupArn = 'dolore';
    $request->deleteRuleGroupRequest->ruleGroupName = 'iusto';
    $request->deleteRuleGroupRequest->type = RuleGroupTypeEnum::STATELESS;
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DeleteRuleGroupXAmzTargetEnum::NETWORK_FIREWALL20201112_DELETE_RULE_GROUP;

    $response = $sdk->sdk->deleteRuleGroup($request);

    if ($response->deleteRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTLSInspectionConfiguration

Deletes the specified <a>TLSInspectionConfiguration</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTLSInspectionConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTLSInspectionConfigurationRequest();
    $request->deleteTLSInspectionConfigurationRequest = new DeleteTLSInspectionConfigurationRequest();
    $request->deleteTLSInspectionConfigurationRequest->tlsInspectionConfigurationArn = 'quidem';
    $request->deleteTLSInspectionConfigurationRequest->tlsInspectionConfigurationName = 'molestias';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'voluptates';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = DeleteTLSInspectionConfigurationXAmzTargetEnum::NETWORK_FIREWALL20201112_DELETE_TLS_INSPECTION_CONFIGURATION;

    $response = $sdk->sdk->deleteTLSInspectionConfiguration($request);

    if ($response->deleteTLSInspectionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFirewall

Returns the data objects for the specified firewall. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFirewallRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFirewallRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFirewallXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFirewallRequest();
    $request->describeFirewallRequest = new DescribeFirewallRequest();
    $request->describeFirewallRequest->firewallArn = 'repudiandae';
    $request->describeFirewallRequest->firewallName = 'sint';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = DescribeFirewallXAmzTargetEnum::NETWORK_FIREWALL20201112_DESCRIBE_FIREWALL;

    $response = $sdk->sdk->describeFirewall($request);

    if ($response->describeFirewallResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeFirewallPolicy

Returns the data objects for the specified firewall policy. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFirewallPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFirewallPolicyRequest();
    $request->describeFirewallPolicyRequest = new DescribeFirewallPolicyRequest();
    $request->describeFirewallPolicyRequest->firewallPolicyArn = 'explicabo';
    $request->describeFirewallPolicyRequest->firewallPolicyName = 'deserunt';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = DescribeFirewallPolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_DESCRIBE_FIREWALL_POLICY;

    $response = $sdk->sdk->describeFirewallPolicy($request);

    if ($response->describeFirewallPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeLoggingConfiguration

Returns the logging configuration for the specified firewall. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeLoggingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeLoggingConfigurationRequest();
    $request->describeLoggingConfigurationRequest = new DescribeLoggingConfigurationRequest();
    $request->describeLoggingConfigurationRequest->firewallArn = 'quos';
    $request->describeLoggingConfigurationRequest->firewallName = 'perferendis';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeLoggingConfigurationXAmzTargetEnum::NETWORK_FIREWALL20201112_DESCRIBE_LOGGING_CONFIGURATION;

    $response = $sdk->sdk->describeLoggingConfiguration($request);

    if ($response->describeLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeResourcePolicy

Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeResourcePolicyRequest();
    $request->describeResourcePolicyRequest = new DescribeResourcePolicyRequest();
    $request->describeResourcePolicyRequest->resourceArn = 'tempora';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->xAmzTarget = DescribeResourcePolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_DESCRIBE_RESOURCE_POLICY;

    $response = $sdk->sdk->describeResourcePolicy($request);

    if ($response->describeResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRuleGroup

Returns the data objects for the specified rule group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRuleGroupRequest();
    $request->describeRuleGroupRequest = new DescribeRuleGroupRequest();
    $request->describeRuleGroupRequest->ruleGroupArn = 'sint';
    $request->describeRuleGroupRequest->ruleGroupName = 'aliquid';
    $request->describeRuleGroupRequest->type = RuleGroupTypeEnum::STATEFUL;
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = DescribeRuleGroupXAmzTargetEnum::NETWORK_FIREWALL20201112_DESCRIBE_RULE_GROUP;

    $response = $sdk->sdk->describeRuleGroup($request);

    if ($response->describeRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeRuleGroupMetadata

High-level information about a rule group, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuleGroupMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeRuleGroupMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeRuleGroupMetadataXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeRuleGroupMetadataRequest();
    $request->describeRuleGroupMetadataRequest = new DescribeRuleGroupMetadataRequest();
    $request->describeRuleGroupMetadataRequest->ruleGroupArn = 'in';
    $request->describeRuleGroupMetadataRequest->ruleGroupName = 'in';
    $request->describeRuleGroupMetadataRequest->type = RuleGroupTypeEnum::STATEFUL;
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DescribeRuleGroupMetadataXAmzTargetEnum::NETWORK_FIREWALL20201112_DESCRIBE_RULE_GROUP_METADATA;

    $response = $sdk->sdk->describeRuleGroupMetadata($request);

    if ($response->describeRuleGroupMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTLSInspectionConfiguration

Returns the data objects for the specified TLS inspection configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTLSInspectionConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTLSInspectionConfigurationRequest();
    $request->describeTLSInspectionConfigurationRequest = new DescribeTLSInspectionConfigurationRequest();
    $request->describeTLSInspectionConfigurationRequest->tlsInspectionConfigurationArn = 'aliquid';
    $request->describeTLSInspectionConfigurationRequest->tlsInspectionConfigurationName = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DescribeTLSInspectionConfigurationXAmzTargetEnum::NETWORK_FIREWALL20201112_DESCRIBE_TLS_INSPECTION_CONFIGURATION;

    $response = $sdk->sdk->describeTLSInspectionConfiguration($request);

    if ($response->describeTLSInspectionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateSubnets

Removes the specified subnet associations from the firewall. This removes the firewall endpoints from the subnets and removes any network filtering protections that the endpoints were providing. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DisassociateSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateSubnetsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateSubnetsRequest();
    $request->disassociateSubnetsRequest = new DisassociateSubnetsRequest();
    $request->disassociateSubnetsRequest->firewallArn = 'provident';
    $request->disassociateSubnetsRequest->firewallName = 'nam';
    $request->disassociateSubnetsRequest->subnetIds = [
        'blanditiis',
        'deleniti',
        'sapiente',
    ];
    $request->disassociateSubnetsRequest->updateToken = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DisassociateSubnetsXAmzTargetEnum::NETWORK_FIREWALL20201112_DISASSOCIATE_SUBNETS;

    $response = $sdk->sdk->disassociateSubnets($request);

    if ($response->disassociateSubnetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewallPolicies

Retrieves the metadata for the firewall policies that you have defined. Depending on your setting for max results and the number of firewall policies, a single call might not return the full list. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallPoliciesRequest();
    $request->listFirewallPoliciesRequest = new ListFirewallPoliciesRequest();
    $request->listFirewallPoliciesRequest->maxResults = 470132;
    $request->listFirewallPoliciesRequest->nextToken = 'magnam';
    $request->maxResults = 'distinctio';
    $request->nextToken = 'id';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = ListFirewallPoliciesXAmzTargetEnum::NETWORK_FIREWALL20201112_LIST_FIREWALL_POLICIES;

    $response = $sdk->sdk->listFirewallPolicies($request);

    if ($response->listFirewallPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFirewalls

<p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC identifiers in your request, this returns only the firewalls for those VPCs.</p> <p>Depending on your setting for max results and the number of firewalls, a single call might not return the full list. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFirewallsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFirewallsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFirewallsRequest();
    $request->listFirewallsRequest = new ListFirewallsRequest();
    $request->listFirewallsRequest->maxResults = 135474;
    $request->listFirewallsRequest->nextToken = 'architecto';
    $request->listFirewallsRequest->vpcIds = [
        'et',
        'excepturi',
    ];
    $request->maxResults = 'ullam';
    $request->nextToken = 'provident';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = ListFirewallsXAmzTargetEnum::NETWORK_FIREWALL20201112_LIST_FIREWALLS;

    $response = $sdk->sdk->listFirewalls($request);

    if ($response->listFirewallsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRuleGroups

Retrieves the metadata for the rule groups that you have defined. Depending on your setting for max results and the number of rule groups, a single call might not return the full list. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRuleGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListRuleGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ResourceManagedTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceManagedStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListRuleGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRuleGroupsRequest();
    $request->listRuleGroupsRequest = new ListRuleGroupsRequest();
    $request->listRuleGroupsRequest->managedType = ResourceManagedTypeEnum::AWS_MANAGED_THREAT_SIGNATURES;
    $request->listRuleGroupsRequest->maxResults = 221262;
    $request->listRuleGroupsRequest->nextToken = 'necessitatibus';
    $request->listRuleGroupsRequest->scope = ResourceManagedStatusEnum::MANAGED;
    $request->listRuleGroupsRequest->type = RuleGroupTypeEnum::STATELESS;
    $request->maxResults = 'quasi';
    $request->nextToken = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = ListRuleGroupsXAmzTargetEnum::NETWORK_FIREWALL20201112_LIST_RULE_GROUPS;

    $response = $sdk->sdk->listRuleGroups($request);

    if ($response->listRuleGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTLSInspectionConfigurations

Retrieves the metadata for the TLS inspection configurations that you have defined. Depending on your setting for max results and the number of TLS inspection configurations, a single call might not return the full list.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTLSInspectionConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTLSInspectionConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTLSInspectionConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTLSInspectionConfigurationsRequest();
    $request->listTLSInspectionConfigurationsRequest = new ListTLSInspectionConfigurationsRequest();
    $request->listTLSInspectionConfigurationsRequest->maxResults = 100226;
    $request->listTLSInspectionConfigurationsRequest->nextToken = 'architecto';
    $request->maxResults = 'repudiandae';
    $request->nextToken = 'ullam';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = ListTLSInspectionConfigurationsXAmzTargetEnum::NETWORK_FIREWALL20201112_LIST_TLS_INSPECTION_CONFIGURATIONS;

    $response = $sdk->sdk->listTLSInspectionConfigurations($request);

    if ($response->listTLSInspectionConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

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
    $request->listTagsForResourceRequest->maxResults = 37559;
    $request->listTagsForResourceRequest->nextToken = 'consequuntur';
    $request->listTagsForResourceRequest->resourceArn = 'praesentium';
    $request->maxResults = 'natus';
    $request->nextToken = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::NETWORK_FIREWALL20201112_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

<p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service to manage resource sharing for Network Firewall. </p> <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p> <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations. </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p> </li> </ul> <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest = new PutResourcePolicyRequest();
    $request->putResourcePolicyRequest->policy = 'odit';
    $request->putResourcePolicyRequest->resourceArn = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

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
    $request->tagResourceRequest->resourceArn = 'nam';
    $request->tagResourceRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::NETWORK_FIREWALL20201112_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes the tags with the specified keys from the specified resource. Tags are key:value pairs that you can use to categorize and manage your resources, for purposes like billing. For example, you might set the tag key to "customer" and the value to the customer name or ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p> <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall policies, and rule groups. </p>

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
    $request->untagResourceRequest->resourceArn = 'cumque';
    $request->untagResourceRequest->tagKeys = [
        'hic',
        'libero',
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::NETWORK_FIREWALL20201112_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallDeleteProtection

Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected against deletion. This setting helps protect against accidentally deleting a firewall that's in use. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallDeleteProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallDeleteProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallDeleteProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallDeleteProtectionRequest();
    $request->updateFirewallDeleteProtectionRequest = new UpdateFirewallDeleteProtectionRequest();
    $request->updateFirewallDeleteProtectionRequest->deleteProtection = false;
    $request->updateFirewallDeleteProtectionRequest->firewallArn = 'nesciunt';
    $request->updateFirewallDeleteProtectionRequest->firewallName = 'eos';
    $request->updateFirewallDeleteProtectionRequest->updateToken = 'perferendis';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'nostrum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = UpdateFirewallDeleteProtectionXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_FIREWALL_DELETE_PROTECTION;

    $response = $sdk->sdk->updateFirewallDeleteProtection($request);

    if ($response->updateFirewallDeleteProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallDescription

Modifies the description for the specified firewall. Use the description to help you identify the firewall when you're working with it. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallDescriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallDescriptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallDescriptionRequest();
    $request->updateFirewallDescriptionRequest = new UpdateFirewallDescriptionRequest();
    $request->updateFirewallDescriptionRequest->description = 'recusandae';
    $request->updateFirewallDescriptionRequest->firewallArn = 'omnis';
    $request->updateFirewallDescriptionRequest->firewallName = 'facilis';
    $request->updateFirewallDescriptionRequest->updateToken = 'perspiciatis';
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = UpdateFirewallDescriptionXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_FIREWALL_DESCRIPTION;

    $response = $sdk->sdk->updateFirewallDescription($request);

    if ($response->updateFirewallDescriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallEncryptionConfiguration

A complex type that contains settings for encryption of your firewall resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallEncryptionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallEncryptionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallEncryptionConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallEncryptionConfigurationRequest();
    $request->updateFirewallEncryptionConfigurationRequest = new UpdateFirewallEncryptionConfigurationRequest();
    $request->updateFirewallEncryptionConfigurationRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateFirewallEncryptionConfigurationRequest->encryptionConfiguration->keyId = 'rerum';
    $request->updateFirewallEncryptionConfigurationRequest->encryptionConfiguration->type = EncryptionTypeEnum::CUSTOMER_KMS;
    $request->updateFirewallEncryptionConfigurationRequest->firewallArn = 'asperiores';
    $request->updateFirewallEncryptionConfigurationRequest->firewallName = 'earum';
    $request->updateFirewallEncryptionConfigurationRequest->updateToken = 'modi';
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzTarget = UpdateFirewallEncryptionConfigurationXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_FIREWALL_ENCRYPTION_CONFIGURATION;

    $response = $sdk->sdk->updateFirewallEncryptionConfiguration($request);

    if ($response->updateFirewallEncryptionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallPolicy

Updates the properties of the specified firewall policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FirewallPolicy;
use \OpenAPI\OpenAPI\Models\Shared\StatefulEngineOptions;
use \OpenAPI\OpenAPI\Models\Shared\RuleOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\StreamExceptionPolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleGroupReference;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleGroupOverride;
use \OpenAPI\OpenAPI\Models\Shared\OverrideActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\PublishMetricAction;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\StatelessRuleGroupReference;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallPolicyRequest();
    $request->updateFirewallPolicyRequest = new UpdateFirewallPolicyRequest();
    $request->updateFirewallPolicyRequest->description = 'delectus';
    $request->updateFirewallPolicyRequest->dryRun = false;
    $request->updateFirewallPolicyRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateFirewallPolicyRequest->encryptionConfiguration->keyId = 'quaerat';
    $request->updateFirewallPolicyRequest->encryptionConfiguration->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->updateFirewallPolicyRequest->firewallPolicy = new FirewallPolicy();
    $request->updateFirewallPolicyRequest->firewallPolicy->statefulDefaultActions = [
        'dolorem',
        'dolorem',
    ];
    $request->updateFirewallPolicyRequest->firewallPolicy->statefulEngineOptions = new StatefulEngineOptions();
    $request->updateFirewallPolicyRequest->firewallPolicy->statefulEngineOptions->ruleOrder = RuleOrderEnum::DEFAULT_ACTION_ORDER;
    $request->updateFirewallPolicyRequest->firewallPolicy->statefulEngineOptions->streamExceptionPolicy = StreamExceptionPolicyEnum::DROP;
    $request->updateFirewallPolicyRequest->firewallPolicy->statefulRuleGroupReferences = [
        new StatefulRuleGroupReference(),
    ];
    $request->updateFirewallPolicyRequest->firewallPolicy->statelessCustomActions = [
        new CustomAction(),
        new CustomAction(),
        new CustomAction(),
        new CustomAction(),
    ];
    $request->updateFirewallPolicyRequest->firewallPolicy->statelessDefaultActions = [
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->updateFirewallPolicyRequest->firewallPolicy->statelessFragmentDefaultActions = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->updateFirewallPolicyRequest->firewallPolicy->statelessRuleGroupReferences = [
        new StatelessRuleGroupReference(),
    ];
    $request->updateFirewallPolicyRequest->firewallPolicy->tlsInspectionConfigurationArn = 'ipsa';
    $request->updateFirewallPolicyRequest->firewallPolicyArn = 'iure';
    $request->updateFirewallPolicyRequest->firewallPolicyName = 'odio';
    $request->updateFirewallPolicyRequest->updateToken = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzTarget = UpdateFirewallPolicyXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_FIREWALL_POLICY;

    $response = $sdk->sdk->updateFirewallPolicy($request);

    if ($response->updateFirewallPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFirewallPolicyChangeProtection

Modifies the flag, <code>ChangeProtection</code>, which indicates whether it is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected from changes. This setting helps protect against accidentally changing a firewall that's in use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallPolicyChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateFirewallPolicyChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFirewallPolicyChangeProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFirewallPolicyChangeProtectionRequest();
    $request->updateFirewallPolicyChangeProtectionRequest = new UpdateFirewallPolicyChangeProtectionRequest();
    $request->updateFirewallPolicyChangeProtectionRequest->firewallArn = 'sit';
    $request->updateFirewallPolicyChangeProtectionRequest->firewallName = 'fugiat';
    $request->updateFirewallPolicyChangeProtectionRequest->firewallPolicyChangeProtection = false;
    $request->updateFirewallPolicyChangeProtectionRequest->updateToken = 'ab';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = UpdateFirewallPolicyChangeProtectionXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_FIREWALL_POLICY_CHANGE_PROTECTION;

    $response = $sdk->sdk->updateFirewallPolicyChangeProtection($request);

    if ($response->updateFirewallPolicyChangeProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLoggingConfiguration

<p>Sets the logging configuration for the specified firewall. </p> <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide the modified object to this update call. You must change the logging configuration one <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p> <p>You can perform only one of the following actions in any call to <code>UpdateLoggingConfiguration</code>: </p> <ul> <li> <p>Create a new log destination object by adding a single <code>LogDestinationConfig</code> array element to <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Delete a log destination object by removing a single <code>LogDestinationConfig</code> array element from <code>LogDestinationConfigs</code>.</p> </li> <li> <p>Change the <code>LogDestination</code> setting in a single <code>LogDestinationConfig</code> array element.</p> </li> </ul> <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a <code>LogDestinationConfig</code>. To change these settings, delete the existing <code>LogDestinationConfig</code> object and create a new one, using two separate calls to this update operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLoggingConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LoggingConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\LogDestinationConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogDestinationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLoggingConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLoggingConfigurationRequest();
    $request->updateLoggingConfigurationRequest = new UpdateLoggingConfigurationRequest();
    $request->updateLoggingConfigurationRequest->firewallArn = 'necessitatibus';
    $request->updateLoggingConfigurationRequest->firewallName = 'distinctio';
    $request->updateLoggingConfigurationRequest->loggingConfiguration = new LoggingConfiguration();
    $request->updateLoggingConfigurationRequest->loggingConfiguration->logDestinationConfigs = [
        new LogDestinationConfig(),
        new LogDestinationConfig(),
        new LogDestinationConfig(),
        new LogDestinationConfig(),
    ];
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = UpdateLoggingConfigurationXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_LOGGING_CONFIGURATION;

    $response = $sdk->sdk->updateLoggingConfiguration($request);

    if ($response->updateLoggingConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRuleGroup

<p>Updates the rule settings for the specified rule group. You use a rule group by reference in one or more firewall policies. When you modify a rule group, you modify all firewall policies that use the rule group. </p> <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the current <a>RuleGroup</a> object, update the object as needed, and then provide the updated object to this call. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateRuleGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroup;
use \OpenAPI\OpenAPI\Models\Shared\ReferenceSets;
use \OpenAPI\OpenAPI\Models\Shared\IPSetReference;
use \OpenAPI\OpenAPI\Models\Shared\RuleVariables;
use \OpenAPI\OpenAPI\Models\Shared\IPSet;
use \OpenAPI\OpenAPI\Models\Shared\PortSet;
use \OpenAPI\OpenAPI\Models\Shared\RulesSource;
use \OpenAPI\OpenAPI\Models\Shared\RulesSourceList;
use \OpenAPI\OpenAPI\Models\Shared\GeneratedRulesTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TargetTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRule;
use \OpenAPI\OpenAPI\Models\Shared\StatefulActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Header;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuleOption;
use \OpenAPI\OpenAPI\Models\Shared\StatelessRulesAndCustomActions;
use \OpenAPI\OpenAPI\Models\Shared\CustomAction;
use \OpenAPI\OpenAPI\Models\Shared\ActionDefinition;
use \OpenAPI\OpenAPI\Models\Shared\PublishMetricAction;
use \OpenAPI\OpenAPI\Models\Shared\Dimension;
use \OpenAPI\OpenAPI\Models\Shared\StatelessRule;
use \OpenAPI\OpenAPI\Models\Shared\RuleDefinition;
use \OpenAPI\OpenAPI\Models\Shared\MatchAttributes;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\TCPFlagField;
use \OpenAPI\OpenAPI\Models\Shared\TCPFlagEnum;
use \OpenAPI\OpenAPI\Models\Shared\StatefulRuleOptions;
use \OpenAPI\OpenAPI\Models\Shared\RuleOrderEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\RuleGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRuleGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRuleGroupRequest();
    $request->updateRuleGroupRequest = new UpdateRuleGroupRequest();
    $request->updateRuleGroupRequest->description = 'perferendis';
    $request->updateRuleGroupRequest->dryRun = false;
    $request->updateRuleGroupRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateRuleGroupRequest->encryptionConfiguration->keyId = 'amet';
    $request->updateRuleGroupRequest->encryptionConfiguration->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->updateRuleGroupRequest->ruleGroup = new RuleGroup();
    $request->updateRuleGroupRequest->ruleGroup->referenceSets = new ReferenceSets();
    $request->updateRuleGroupRequest->ruleGroup->referenceSets->ipSetReferences = [
        'ad' => new IPSetReference(),
        'saepe' => new IPSetReference(),
        'suscipit' => new IPSetReference(),
        'deserunt' => new IPSetReference(),
    ];
    $request->updateRuleGroupRequest->ruleGroup->ruleVariables = new RuleVariables();
    $request->updateRuleGroupRequest->ruleGroup->ruleVariables->ipSets = [
        'minima' => new IPSet(),
        'repellendus' => new IPSet(),
        'totam' => new IPSet(),
    ];
    $request->updateRuleGroupRequest->ruleGroup->ruleVariables->portSets = [
        'alias' => new PortSet(),
        'at' => new PortSet(),
        'quaerat' => new PortSet(),
    ];
    $request->updateRuleGroupRequest->ruleGroup->rulesSource = new RulesSource();
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList = new RulesSourceList();
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList->generatedRulesType = GeneratedRulesTypeEnum::ALLOWLIST;
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList->targetTypes = [
        TargetTypeEnum::HTTP_HOST,
        TargetTypeEnum::HTTP_HOST,
    ];
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->rulesSourceList->targets = [
        'dolorum',
    ];
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->rulesString = 'a';
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->statefulRules = [
        new StatefulRule(),
        new StatefulRule(),
    ];
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->statelessRulesAndCustomActions = new StatelessRulesAndCustomActions();
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->statelessRulesAndCustomActions->customActions = [
        new CustomAction(),
        new CustomAction(),
        new CustomAction(),
    ];
    $request->updateRuleGroupRequest->ruleGroup->rulesSource->statelessRulesAndCustomActions->statelessRules = [
        new StatelessRule(),
        new StatelessRule(),
    ];
    $request->updateRuleGroupRequest->ruleGroup->statefulRuleOptions = new StatefulRuleOptions();
    $request->updateRuleGroupRequest->ruleGroup->statefulRuleOptions->ruleOrder = RuleOrderEnum::DEFAULT_ACTION_ORDER;
    $request->updateRuleGroupRequest->ruleGroupArn = 'quisquam';
    $request->updateRuleGroupRequest->ruleGroupName = 'tenetur';
    $request->updateRuleGroupRequest->rules = 'amet';
    $request->updateRuleGroupRequest->sourceMetadata = new SourceMetadata();
    $request->updateRuleGroupRequest->sourceMetadata->sourceArn = 'tempore';
    $request->updateRuleGroupRequest->sourceMetadata->sourceUpdateToken = 'accusamus';
    $request->updateRuleGroupRequest->type = RuleGroupTypeEnum::STATELESS;
    $request->updateRuleGroupRequest->updateToken = 'enim';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = UpdateRuleGroupXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_RULE_GROUP;

    $response = $sdk->sdk->updateRuleGroup($request);

    if ($response->updateRuleGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSubnetChangeProtection

<p/>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubnetChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSubnetChangeProtectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSubnetChangeProtectionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSubnetChangeProtectionRequest();
    $request->updateSubnetChangeProtectionRequest = new UpdateSubnetChangeProtectionRequest();
    $request->updateSubnetChangeProtectionRequest->firewallArn = 'sed';
    $request->updateSubnetChangeProtectionRequest->firewallName = 'vel';
    $request->updateSubnetChangeProtectionRequest->subnetChangeProtection = false;
    $request->updateSubnetChangeProtectionRequest->updateToken = 'libero';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->xAmzTarget = UpdateSubnetChangeProtectionXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_SUBNET_CHANGE_PROTECTION;

    $response = $sdk->sdk->updateSubnetChangeProtection($request);

    if ($response->updateSubnetChangeProtectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTLSInspectionConfiguration

<p>Updates the TLS inspection configuration settings for the specified TLS inspection configuration. You use a TLS inspection configuration by reference in one or more firewall policies. When you modify a TLS inspection configuration, you modify all firewall policies that use the TLS inspection configuration. </p> <p>To update a TLS inspection configuration, first call <a>DescribeTLSInspectionConfiguration</a> to retrieve the current <a>TLSInspectionConfiguration</a> object, update the object as needed, and then provide the updated object to this call. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTLSInspectionConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TLSInspectionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerCertificateConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ServerCertificateScope;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\ServerCertificate;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTLSInspectionConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTLSInspectionConfigurationRequest();
    $request->updateTLSInspectionConfigurationRequest = new UpdateTLSInspectionConfigurationRequest();
    $request->updateTLSInspectionConfigurationRequest->description = 'maxime';
    $request->updateTLSInspectionConfigurationRequest->encryptionConfiguration = new EncryptionConfiguration();
    $request->updateTLSInspectionConfigurationRequest->encryptionConfiguration->keyId = 'pariatur';
    $request->updateTLSInspectionConfigurationRequest->encryptionConfiguration->type = EncryptionTypeEnum::AWS_OWNED_KMS_KEY;
    $request->updateTLSInspectionConfigurationRequest->tlsInspectionConfiguration = new TLSInspectionConfiguration();
    $request->updateTLSInspectionConfigurationRequest->tlsInspectionConfiguration->serverCertificateConfigurations = [
        new ServerCertificateConfiguration(),
    ];
    $request->updateTLSInspectionConfigurationRequest->tlsInspectionConfigurationArn = 'laborum';
    $request->updateTLSInspectionConfigurationRequest->tlsInspectionConfigurationName = 'totam';
    $request->updateTLSInspectionConfigurationRequest->updateToken = 'incidunt';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->xAmzTarget = UpdateTLSInspectionConfigurationXAmzTargetEnum::NETWORK_FIREWALL20201112_UPDATE_TLS_INSPECTION_CONFIGURATION;

    $response = $sdk->sdk->updateTLSInspectionConfiguration($request);

    if ($response->updateTLSInspectionConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
