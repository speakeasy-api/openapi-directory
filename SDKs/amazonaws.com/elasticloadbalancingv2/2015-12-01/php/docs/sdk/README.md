# SDK

## Overview

<fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This reference covers the following load balancer types:</p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.</p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.</p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticloadbalancing/>
### Available Operations

* [getDeleteListener](#getdeletelistener) - <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
* [getDeleteLoadBalancer](#getdeleteloadbalancer) - <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
* [getDeleteRule](#getdeleterule) - <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
* [getDeleteTargetGroup](#getdeletetargetgroup) - <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
* [getDescribeAccountLimits](#getdescribeaccountlimits) - <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
* [getDescribeListenerCertificates](#getdescribelistenercertificates) - <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
* [getDescribeListeners](#getdescribelisteners) - Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
* [getDescribeLoadBalancerAttributes](#getdescribeloadbalancerattributes) - <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* [getDescribeLoadBalancers](#getdescribeloadbalancers) - Describes the specified load balancers or all of your load balancers.
* [getDescribeRules](#getdescriberules) - Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
* [getDescribeSSLPolicies](#getdescribesslpolicies) - <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
* [getDescribeTags](#getdescribetags) - Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* [getDescribeTargetGroupAttributes](#getdescribetargetgroupattributes) - <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* [getDescribeTargetGroups](#getdescribetargetgroups) - Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
* [getModifyTargetGroup](#getmodifytargetgroup) - Modifies the health checks used when evaluating the health state of the targets in the specified target group.
* [getRemoveTags](#getremovetags) - Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* [getSetIpAddressType](#getsetipaddresstype) - Sets the type of IP addresses used by the subnets of the specified load balancer.
* [getSetSecurityGroups](#getsetsecuritygroups) - <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
* [postAddListenerCertificates](#postaddlistenercertificates) - <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
* [postAddTags](#postaddtags) - <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>
* [postCreateListener](#postcreatelistener) - <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>
* [postCreateLoadBalancer](#postcreateloadbalancer) - <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>
* [postCreateRule](#postcreaterule) - <p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
* [postCreateTargetGroup](#postcreatetargetgroup) - <p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>
* [postDeleteListener](#postdeletelistener) - <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
* [postDeleteLoadBalancer](#postdeleteloadbalancer) - <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
* [postDeleteRule](#postdeleterule) - <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
* [postDeleteTargetGroup](#postdeletetargetgroup) - <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
* [postDeregisterTargets](#postderegistertargets) - Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
* [postDescribeAccountLimits](#postdescribeaccountlimits) - <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
* [postDescribeListenerCertificates](#postdescribelistenercertificates) - <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
* [postDescribeListeners](#postdescribelisteners) - Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
* [postDescribeLoadBalancerAttributes](#postdescribeloadbalancerattributes) - <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* [postDescribeLoadBalancers](#postdescribeloadbalancers) - Describes the specified load balancers or all of your load balancers.
* [postDescribeRules](#postdescriberules) - Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
* [postDescribeSSLPolicies](#postdescribesslpolicies) - <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
* [postDescribeTags](#postdescribetags) - Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* [postDescribeTargetGroupAttributes](#postdescribetargetgroupattributes) - <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* [postDescribeTargetGroups](#postdescribetargetgroups) - Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
* [postDescribeTargetHealth](#postdescribetargethealth) - Describes the health of the specified targets or all of your targets.
* [postModifyListener](#postmodifylistener) - <p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
* [postModifyLoadBalancerAttributes](#postmodifyloadbalancerattributes) - <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>
* [postModifyRule](#postmodifyrule) - <p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
* [postModifyTargetGroup](#postmodifytargetgroup) - Modifies the health checks used when evaluating the health state of the targets in the specified target group.
* [postModifyTargetGroupAttributes](#postmodifytargetgroupattributes) - Modifies the specified attributes of the specified target group.
* [postRegisterTargets](#postregistertargets) - <p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>
* [postRemoveListenerCertificates](#postremovelistenercertificates) - Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.
* [postRemoveTags](#postremovetags) - Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* [postSetIpAddressType](#postsetipaddresstype) - Sets the type of IP addresses used by the subnets of the specified load balancer.
* [postSetRulePriorities](#postsetrulepriorities) - <p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>
* [postSetSecurityGroups](#postsetsecuritygroups) - <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
* [postSetSubnets](#postsetsubnets) - <p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>

## getDeleteListener

<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteListenerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteListenerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteListenerRequest();
    $request->action = GETDeleteListenerActionEnum::DELETE_LISTENER;
    $request->listenerArn = 'vel';
    $request->version = GETDeleteListenerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->getDeleteListener($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteLoadBalancer

<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteLoadBalancerRequest();
    $request->action = GETDeleteLoadBalancerActionEnum::DELETE_LOAD_BALANCER;
    $request->loadBalancerArn = 'delectus';
    $request->version = GETDeleteLoadBalancerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'minus';
    $request->xAmzSecurityToken = 'placeat';
    $request->xAmzSignature = 'voluptatum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getDeleteLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteRule

<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteRuleRequest();
    $request->action = GETDeleteRuleActionEnum::DELETE_RULE;
    $request->ruleArn = 'excepturi';
    $request->version = GETDeleteRuleVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';

    $response = $sdk->sdk->getDeleteRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteTargetGroup

<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTargetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteTargetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteTargetGroupRequest();
    $request->action = GETDeleteTargetGroupActionEnum::DELETE_TARGET_GROUP;
    $request->targetGroupArn = 'perferendis';
    $request->version = GETDeleteTargetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->getDeleteTargetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAccountLimits

<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeAccountLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeAccountLimitsRequest();
    $request->action = GETDescribeAccountLimitsActionEnum::DESCRIBE_ACCOUNT_LIMITS;
    $request->marker = 'maiores';
    $request->pageSize = 473608;
    $request->version = GETDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeListenerCertificates

<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeListenerCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeListenerCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeListenerCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeListenerCertificatesRequest();
    $request->action = GETDescribeListenerCertificatesActionEnum::DESCRIBE_LISTENER_CERTIFICATES;
    $request->listenerArn = 'nam';
    $request->marker = 'officia';
    $request->pageSize = 582020;
    $request->version = GETDescribeListenerCertificatesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->getDescribeListenerCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeListeners

Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeListenersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeListenersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeListenersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeListenersRequest();
    $request->action = GETDescribeListenersActionEnum::DESCRIBE_LISTENERS;
    $request->listenerArns = [
        'modi',
        'qui',
    ];
    $request->loadBalancerArn = 'impedit';
    $request->marker = 'cum';
    $request->pageSize = 456150;
    $request->version = GETDescribeListenersVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->getDescribeListeners($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancerAttributes

<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLoadBalancerAttributesRequest();
    $request->action = GETDescribeLoadBalancerAttributesActionEnum::DESCRIBE_LOAD_BALANCER_ATTRIBUTES;
    $request->loadBalancerArn = 'iste';
    $request->version = GETDescribeLoadBalancerAttributesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'laboriosam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'in';

    $response = $sdk->sdk->getDescribeLoadBalancerAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancers

Describes the specified load balancers or all of your load balancers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLoadBalancersRequest();
    $request->action = GETDescribeLoadBalancersActionEnum::DESCRIBE_LOAD_BALANCERS;
    $request->loadBalancerArns = [
        'iste',
        'iure',
    ];
    $request->marker = 'saepe';
    $request->names = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->pageSize = 666767;
    $request->version = GETDescribeLoadBalancersVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->getDescribeLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeRules

Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeRulesRequest();
    $request->action = GETDescribeRulesActionEnum::DESCRIBE_RULES;
    $request->listenerArn = 'enim';
    $request->marker = 'omnis';
    $request->pageSize = 363711;
    $request->ruleArns = [
        'excepturi',
        'accusantium',
    ];
    $request->version = GETDescribeRulesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->getDescribeRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeSSLPolicies

<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSSLPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSSLPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSSLPoliciesLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeSSLPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeSSLPoliciesRequest();
    $request->action = GETDescribeSSLPoliciesActionEnum::DESCRIBE_SSL_POLICIES;
    $request->loadBalancerType = GETDescribeSSLPoliciesLoadBalancerTypeEnum::NETWORK;
    $request->marker = 'consequuntur';
    $request->names = [
        'mollitia',
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->pageSize = 466311;
    $request->version = GETDescribeSSLPoliciesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';

    $response = $sdk->sdk->getDescribeSSLPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTags

Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTagsRequest();
    $request->action = GETDescribeTagsActionEnum::DESCRIBE_TAGS;
    $request->resourceArns = [
        'enim',
        'odit',
        'quo',
    ];
    $request->version = GETDescribeTagsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getDescribeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTargetGroupAttributes

<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTargetGroupAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTargetGroupAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTargetGroupAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTargetGroupAttributesRequest();
    $request->action = GETDescribeTargetGroupAttributesActionEnum::DESCRIBE_TARGET_GROUP_ATTRIBUTES;
    $request->targetGroupArn = 'error';
    $request->version = GETDescribeTargetGroupAttributesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->getDescribeTargetGroupAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTargetGroups

Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeTargetGroupsRequest();
    $request->action = GETDescribeTargetGroupsActionEnum::DESCRIBE_TARGET_GROUPS;
    $request->loadBalancerArn = 'praesentium';
    $request->marker = 'voluptatibus';
    $request->names = [
        'omnis',
    ];
    $request->pageSize = 451159;
    $request->targetGroupArns = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->version = GETDescribeTargetGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getDescribeTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getModifyTargetGroup

Modifies the health checks used when evaluating the health state of the targets in the specified target group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyTargetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyTargetGroupHealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyTargetGroupMatcher;
use \OpenAPI\OpenAPI\Models\Operations\GETModifyTargetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETModifyTargetGroupRequest();
    $request->action = GETModifyTargetGroupActionEnum::MODIFY_TARGET_GROUP;
    $request->healthCheckEnabled = false;
    $request->healthCheckIntervalSeconds = 688661;
    $request->healthCheckPath = 'enim';
    $request->healthCheckPort = 'accusamus';
    $request->healthCheckProtocol = GETModifyTargetGroupHealthCheckProtocolEnum::TCP;
    $request->healthCheckTimeoutSeconds = 918236;
    $request->healthyThresholdCount = 64147;
    $request->matcher = new GETModifyTargetGroupMatcher();
    $request->matcher->grpcCode = 'ipsum';
    $request->matcher->httpCode = 'quidem';
    $request->targetGroupArn = 'molestias';
    $request->unhealthyThresholdCount = 566602;
    $request->version = GETModifyTargetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getModifyTargetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRemoveTags

Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETRemoveTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETRemoveTagsRequest();
    $request->action = GETRemoveTagsActionEnum::REMOVE_TAGS;
    $request->resourceArns = [
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->tagKeys = [
        'consequatur',
        'est',
    ];
    $request->version = GETRemoveTagsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getRemoveTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetIpAddressType

Sets the type of IP addresses used by the subnets of the specified load balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIpAddressTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIpAddressTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIPAddressTypeIPAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetIpAddressTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetIpAddressTypeRequest();
    $request->action = GETSetIpAddressTypeActionEnum::SET_IP_ADDRESS_TYPE;
    $request->ipAddressType = GETSetIPAddressTypeIPAddressTypeEnum::IPV4;
    $request->loadBalancerArn = 'aliquid';
    $request->version = GETSetIpAddressTypeVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->getSetIpAddressType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetSecurityGroups

<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetSecurityGroupsRequest();
    $request->action = GETSetSecurityGroupsActionEnum::SET_SECURITY_GROUPS;
    $request->loadBalancerArn = 'fugit';
    $request->securityGroups = [
        'excepturi',
        'tempora',
        'facilis',
    ];
    $request->version = GETSetSecurityGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->getSetSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddListenerCertificates

<p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddListenerCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddListenerCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddListenerCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddListenerCertificatesRequest();
    $request->action = POSTAddListenerCertificatesActionEnum::ADD_LISTENER_CERTIFICATES;
    $request->requestBody = 'aliquid';
    $request->version = POSTAddListenerCertificatesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->postAddListenerCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddTags

<p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAddTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAddTagsRequest();
    $request->action = POSTAddTagsActionEnum::ADD_TAGS;
    $request->requestBody = 'dolorum';
    $request->version = POSTAddTagsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->postAddTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateListener

<p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateListenerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateListenerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateListenerRequest();
    $request->action = POSTCreateListenerActionEnum::CREATE_LISTENER;
    $request->requestBody = 'cumque';
    $request->version = POSTCreateListenerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->postCreateListener($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateLoadBalancer

<p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateLoadBalancerRequest();
    $request->action = POSTCreateLoadBalancerActionEnum::CREATE_LOAD_BALANCER;
    $request->requestBody = 'enim';
    $request->version = POSTCreateLoadBalancerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->postCreateLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateRule

<p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateRuleRequest();
    $request->action = POSTCreateRuleActionEnum::CREATE_RULE;
    $request->requestBody = 'deleniti';
    $request->version = POSTCreateRuleVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'nisi';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->postCreateRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateTargetGroup

<p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTargetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateTargetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateTargetGroupRequest();
    $request->action = POSTCreateTargetGroupActionEnum::CREATE_TARGET_GROUP;
    $request->requestBody = 'molestiae';
    $request->version = POSTCreateTargetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->postCreateTargetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteListener

<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteListenerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteListenerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteListenerRequest();
    $request->action = POSTDeleteListenerActionEnum::DELETE_LISTENER;
    $request->requestBody = 'suscipit';
    $request->version = POSTDeleteListenerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->postDeleteListener($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLoadBalancer

<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteLoadBalancerRequest();
    $request->action = POSTDeleteLoadBalancerActionEnum::DELETE_LOAD_BALANCER;
    $request->requestBody = 'et';
    $request->version = POSTDeleteLoadBalancerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->postDeleteLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteRule

<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteRuleRequest();
    $request->action = POSTDeleteRuleActionEnum::DELETE_RULE;
    $request->requestBody = 'reiciendis';
    $request->version = POSTDeleteRuleVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->postDeleteRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteTargetGroup

<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTargetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteTargetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteTargetGroupRequest();
    $request->action = POSTDeleteTargetGroupActionEnum::DELETE_TARGET_GROUP;
    $request->requestBody = 'quasi';
    $request->version = POSTDeleteTargetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postDeleteTargetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeregisterTargets

Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterTargetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterTargetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeregisterTargetsRequest();
    $request->action = POSTDeregisterTargetsActionEnum::DEREGISTER_TARGETS;
    $request->requestBody = 'in';
    $request->version = POSTDeregisterTargetsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';

    $response = $sdk->sdk->postDeregisterTargets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAccountLimits

<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeAccountLimitsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeAccountLimitsRequest();
    $request->action = POSTDescribeAccountLimitsActionEnum::DESCRIBE_ACCOUNT_LIMITS;
    $request->requestBody = 'quibusdam';
    $request->version = POSTDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeListenerCertificates

<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeListenerCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeListenerCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeListenerCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeListenerCertificatesRequest();
    $request->action = POSTDescribeListenerCertificatesActionEnum::DESCRIBE_LISTENER_CERTIFICATES;
    $request->requestBody = 'magni';
    $request->version = POSTDescribeListenerCertificatesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->postDescribeListenerCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeListeners

Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeListenersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeListenersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeListenersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeListenersRequest();
    $request->action = POSTDescribeListenersActionEnum::DESCRIBE_LISTENERS;
    $request->marker = 'odit';
    $request->requestBody = 'ea';
    $request->version = POSTDescribeListenersVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';

    $response = $sdk->sdk->postDescribeListeners($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancerAttributes

<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLoadBalancerAttributesRequest();
    $request->action = POSTDescribeLoadBalancerAttributesActionEnum::DESCRIBE_LOAD_BALANCER_ATTRIBUTES;
    $request->requestBody = 'nam';
    $request->version = POSTDescribeLoadBalancerAttributesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postDescribeLoadBalancerAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancers

Describes the specified load balancers or all of your load balancers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLoadBalancersRequest();
    $request->action = POSTDescribeLoadBalancersActionEnum::DESCRIBE_LOAD_BALANCERS;
    $request->marker = 'aut';
    $request->requestBody = 'cumque';
    $request->version = POSTDescribeLoadBalancersVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'totam';

    $response = $sdk->sdk->postDescribeLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeRules

Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeRulesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeRulesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeRulesRequest();
    $request->action = POSTDescribeRulesActionEnum::DESCRIBE_RULES;
    $request->requestBody = 'dignissimos';
    $request->version = POSTDescribeRulesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'nesciunt';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'minus';

    $response = $sdk->sdk->postDescribeRules($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeSSLPolicies

<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSSLPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSSLPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeSSLPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeSSLPoliciesRequest();
    $request->action = POSTDescribeSSLPoliciesActionEnum::DESCRIBE_SSL_POLICIES;
    $request->requestBody = 'quam';
    $request->version = POSTDescribeSSLPoliciesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'recusandae';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->postDescribeSSLPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTags

Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTagsRequest();
    $request->action = POSTDescribeTagsActionEnum::DESCRIBE_TAGS;
    $request->requestBody = 'perspiciatis';
    $request->version = POSTDescribeTagsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'voluptatem';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->postDescribeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTargetGroupAttributes

<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetGroupAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetGroupAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetGroupAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTargetGroupAttributesRequest();
    $request->action = POSTDescribeTargetGroupAttributesActionEnum::DESCRIBE_TARGET_GROUP_ATTRIBUTES;
    $request->requestBody = 'rerum';
    $request->version = POSTDescribeTargetGroupAttributesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->postDescribeTargetGroupAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTargetGroups

Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTargetGroupsRequest();
    $request->action = POSTDescribeTargetGroupsActionEnum::DESCRIBE_TARGET_GROUPS;
    $request->marker = 'pariatur';
    $request->requestBody = 'provident';
    $request->version = POSTDescribeTargetGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->postDescribeTargetGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTargetHealth

Describes the health of the specified targets or all of your targets.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeTargetHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeTargetHealthRequest();
    $request->action = POSTDescribeTargetHealthActionEnum::DESCRIBE_TARGET_HEALTH;
    $request->requestBody = 'dolorem';
    $request->version = POSTDescribeTargetHealthVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'dolor';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->postDescribeTargetHealth($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyListener

<p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyListenerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyListenerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyListenerRequest();
    $request->action = POSTModifyListenerActionEnum::MODIFY_LISTENER;
    $request->requestBody = 'dignissimos';
    $request->version = POSTModifyListenerVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->postModifyListener($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyLoadBalancerAttributes

<p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyLoadBalancerAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyLoadBalancerAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyLoadBalancerAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyLoadBalancerAttributesRequest();
    $request->action = POSTModifyLoadBalancerAttributesActionEnum::MODIFY_LOAD_BALANCER_ATTRIBUTES;
    $request->requestBody = 'iure';
    $request->version = POSTModifyLoadBalancerAttributesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->postModifyLoadBalancerAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyRule

<p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyRuleActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyRuleVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyRuleRequest();
    $request->action = POSTModifyRuleActionEnum::MODIFY_RULE;
    $request->requestBody = 'eos';
    $request->version = POSTModifyRuleVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'atque';
    $request->xAmzContentSha256 = 'sit';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->postModifyRule($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyTargetGroup

Modifies the health checks used when evaluating the health state of the targets in the specified target group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyTargetGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyTargetGroupActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyTargetGroupVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyTargetGroupRequest();
    $request->action = POSTModifyTargetGroupActionEnum::MODIFY_TARGET_GROUP;
    $request->requestBody = 'voluptate';
    $request->version = POSTModifyTargetGroupVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->postModifyTargetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyTargetGroupAttributes

Modifies the specified attributes of the specified target group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyTargetGroupAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyTargetGroupAttributesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTModifyTargetGroupAttributesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTModifyTargetGroupAttributesRequest();
    $request->action = POSTModifyTargetGroupAttributesActionEnum::MODIFY_TARGET_GROUP_ATTRIBUTES;
    $request->requestBody = 'ipsum';
    $request->version = POSTModifyTargetGroupAttributesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'eius';
    $request->xAmzSecurityToken = 'aspernatur';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postModifyTargetGroupAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRegisterTargets

<p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterTargetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterTargetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRegisterTargetsRequest();
    $request->action = POSTRegisterTargetsActionEnum::REGISTER_TARGETS;
    $request->requestBody = 'optio';
    $request->version = POSTRegisterTargetsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->postRegisterTargets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveListenerCertificates

Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveListenerCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveListenerCertificatesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveListenerCertificatesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveListenerCertificatesRequest();
    $request->action = POSTRemoveListenerCertificatesActionEnum::REMOVE_LISTENER_CERTIFICATES;
    $request->requestBody = 'repellendus';
    $request->version = POSTRemoveListenerCertificatesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postRemoveListenerCertificates($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveTags

Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRemoveTagsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRemoveTagsRequest();
    $request->action = POSTRemoveTagsActionEnum::REMOVE_TAGS;
    $request->requestBody = 'quod';
    $request->version = POSTRemoveTagsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'officiis';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->postRemoveTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetIpAddressType

Sets the type of IP addresses used by the subnets of the specified load balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIpAddressTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIpAddressTypeActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetIpAddressTypeVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetIpAddressTypeRequest();
    $request->action = POSTSetIpAddressTypeActionEnum::SET_IP_ADDRESS_TYPE;
    $request->requestBody = 'ipsum';
    $request->version = POSTSetIpAddressTypeVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->postSetIpAddressType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetRulePriorities

<p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetRulePrioritiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetRulePrioritiesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetRulePrioritiesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetRulePrioritiesRequest();
    $request->action = POSTSetRulePrioritiesActionEnum::SET_RULE_PRIORITIES;
    $request->requestBody = 'dolorem';
    $request->version = POSTSetRulePrioritiesVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';

    $response = $sdk->sdk->postSetRulePriorities($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetSecurityGroups

<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSecurityGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSecurityGroupsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSecurityGroupsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetSecurityGroupsRequest();
    $request->action = POSTSetSecurityGroupsActionEnum::SET_SECURITY_GROUPS;
    $request->requestBody = 'vel';
    $request->version = POSTSetSecurityGroupsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->postSetSecurityGroups($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetSubnets

<p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSubnetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetSubnetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetSubnetsRequest();
    $request->action = POSTSetSubnetsActionEnum::SET_SUBNETS;
    $request->requestBody = 'cupiditate';
    $request->version = POSTSetSubnetsVersionEnum::TWO_THOUSAND_AND_FIFTEEN1201;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';

    $response = $sdk->sdk->postSetSubnets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
