# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/elasticloadbalancingv2/2015-12-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GETDeleteListenerRequest{
        Action: "DeleteListener",
        ListenerArn: "corrupti",
        Version: "2015-12-01",
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.GETDeleteListener(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `GETDeleteListener` - <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
* `GETDeleteLoadBalancer` - <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
* `GETDeleteRule` - <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
* `GETDeleteTargetGroup` - <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
* `GETDescribeAccountLimits` - <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
* `GETDescribeListenerCertificates` - <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
* `GETDescribeListeners` - Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
* `GETDescribeLoadBalancerAttributes` - <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* `GETDescribeLoadBalancers` - Describes the specified load balancers or all of your load balancers.
* `GETDescribeRules` - Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
* `GETDescribeSSLPolicies` - <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
* `GETDescribeTags` - Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* `GETDescribeTargetGroupAttributes` - <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* `GETDescribeTargetGroups` - Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
* `GETModifyTargetGroup` - Modifies the health checks used when evaluating the health state of the targets in the specified target group.
* `GETRemoveTags` - Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* `GETSetIPAddressType` - Sets the type of IP addresses used by the subnets of the specified load balancer.
* `GETSetSecurityGroups` - <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
* `POSTAddListenerCertificates` - <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
* `POSTAddTags` - <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>
* `POSTCreateListener` - <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>
* `POSTCreateLoadBalancer` - <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>
* `POSTCreateRule` - <p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
* `POSTCreateTargetGroup` - <p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>
* `POSTDeleteListener` - <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
* `POSTDeleteLoadBalancer` - <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
* `POSTDeleteRule` - <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
* `POSTDeleteTargetGroup` - <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
* `POSTDeregisterTargets` - Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
* `POSTDescribeAccountLimits` - <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
* `POSTDescribeListenerCertificates` - <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
* `POSTDescribeListeners` - Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
* `POSTDescribeLoadBalancerAttributes` - <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* `POSTDescribeLoadBalancers` - Describes the specified load balancers or all of your load balancers.
* `POSTDescribeRules` - Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
* `POSTDescribeSSLPolicies` - <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
* `POSTDescribeTags` - Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* `POSTDescribeTargetGroupAttributes` - <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
* `POSTDescribeTargetGroups` - Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
* `POSTDescribeTargetHealth` - Describes the health of the specified targets or all of your targets.
* `POSTModifyListener` - <p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
* `POSTModifyLoadBalancerAttributes` - <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>
* `POSTModifyRule` - <p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
* `POSTModifyTargetGroup` - Modifies the health checks used when evaluating the health state of the targets in the specified target group.
* `POSTModifyTargetGroupAttributes` - Modifies the specified attributes of the specified target group.
* `POSTRegisterTargets` - <p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>
* `POSTRemoveListenerCertificates` - Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.
* `POSTRemoveTags` - Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
* `POSTSetIPAddressType` - Sets the type of IP addresses used by the subnets of the specified load balancer.
* `POSTSetRulePriorities` - <p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>
* `POSTSetSecurityGroups` - <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
* `POSTSetSubnets` - <p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
