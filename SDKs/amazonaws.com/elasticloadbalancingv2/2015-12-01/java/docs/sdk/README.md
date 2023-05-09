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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteListenerActionEnum;
import org.openapis.openapi.models.operations.GETDeleteListenerRequest;
import org.openapis.openapi.models.operations.GETDeleteListenerResponse;
import org.openapis.openapi.models.operations.GETDeleteListenerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteListenerRequest req = new GETDeleteListenerRequest(GETDeleteListenerActionEnum.DELETE_LISTENER, "deserunt", GETDeleteListenerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            GETDeleteListenerResponse res = sdk.sdk.getDeleteListener(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteLoadBalancer

<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerRequest;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerResponse;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteLoadBalancerRequest req = new GETDeleteLoadBalancerRequest(GETDeleteLoadBalancerActionEnum.DELETE_LOAD_BALANCER, "molestiae", GETDeleteLoadBalancerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            GETDeleteLoadBalancerResponse res = sdk.sdk.getDeleteLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteRule

<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteRuleActionEnum;
import org.openapis.openapi.models.operations.GETDeleteRuleRequest;
import org.openapis.openapi.models.operations.GETDeleteRuleResponse;
import org.openapis.openapi.models.operations.GETDeleteRuleVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteRuleRequest req = new GETDeleteRuleRequest(GETDeleteRuleActionEnum.DELETE_RULE, "ab", GETDeleteRuleVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "veritatis";
                xAmzCredential = "deserunt";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "sapiente";
            }};            

            GETDeleteRuleResponse res = sdk.sdk.getDeleteRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteTargetGroup

<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteTargetGroupActionEnum;
import org.openapis.openapi.models.operations.GETDeleteTargetGroupRequest;
import org.openapis.openapi.models.operations.GETDeleteTargetGroupResponse;
import org.openapis.openapi.models.operations.GETDeleteTargetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteTargetGroupRequest req = new GETDeleteTargetGroupRequest(GETDeleteTargetGroupActionEnum.DELETE_TARGET_GROUP, "odit", GETDeleteTargetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "at";
                xAmzCredential = "maiores";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quod";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "esse";
            }};            

            GETDeleteTargetGroupResponse res = sdk.sdk.getDeleteTargetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeAccountLimits

<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsRequest;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsResponse;
import org.openapis.openapi.models.operations.GETDescribeAccountLimitsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAccountLimitsRequest req = new GETDescribeAccountLimitsRequest(GETDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, GETDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                marker = "porro";
                pageSize = 678880L;
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "nam";
                xAmzCredential = "officia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "hic";
            }};            

            GETDescribeAccountLimitsResponse res = sdk.sdk.getDescribeAccountLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeListenerCertificates

<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeListenerCertificatesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeListenerCertificatesRequest;
import org.openapis.openapi.models.operations.GETDescribeListenerCertificatesResponse;
import org.openapis.openapi.models.operations.GETDescribeListenerCertificatesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeListenerCertificatesRequest req = new GETDescribeListenerCertificatesRequest(GETDescribeListenerCertificatesActionEnum.DESCRIBE_LISTENER_CERTIFICATES, "totam", GETDescribeListenerCertificatesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                marker = "beatae";
                pageSize = 414662L;
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "modi";
                xAmzCredential = "qui";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cum";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "ipsum";
            }};            

            GETDescribeListenerCertificatesResponse res = sdk.sdk.getDescribeListenerCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeListeners

Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeListenersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeListenersRequest;
import org.openapis.openapi.models.operations.GETDescribeListenersResponse;
import org.openapis.openapi.models.operations.GETDescribeListenersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeListenersRequest req = new GETDescribeListenersRequest(GETDescribeListenersActionEnum.DESCRIBE_LISTENERS, GETDescribeListenersVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                listenerArns = new String[]{{
                    add("perferendis"),
                }};
                loadBalancerArn = "ad";
                marker = "natus";
                pageSize = 149675L;
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "natus";
                xAmzDate = "laboriosam";
                xAmzSecurityToken = "hic";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "fuga";
            }};            

            GETDescribeListenersResponse res = sdk.sdk.getDescribeListeners(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLoadBalancerAttributes

<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerAttributesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerAttributesRequest;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerAttributesResponse;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancerAttributesRequest req = new GETDescribeLoadBalancerAttributesRequest(GETDescribeLoadBalancerAttributesActionEnum.DESCRIBE_LOAD_BALANCER_ATTRIBUTES, "corporis", GETDescribeLoadBalancerAttributesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "iure";
                xAmzCredential = "saepe";
                xAmzDate = "quidem";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GETDescribeLoadBalancerAttributesResponse res = sdk.sdk.getDescribeLoadBalancerAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLoadBalancers

Describes the specified load balancers or all of your load balancers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersRequest;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersResponse;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancersRequest req = new GETDescribeLoadBalancersRequest(GETDescribeLoadBalancersActionEnum.DESCRIBE_LOAD_BALANCERS, GETDescribeLoadBalancersVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                loadBalancerArns = new String[]{{
                    add("laborum"),
                    add("dolores"),
                    add("dolorem"),
                }};
                marker = "corporis";
                names = new String[]{{
                    add("nobis"),
                }};
                pageSize = 315428L;
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            GETDescribeLoadBalancersResponse res = sdk.sdk.getDescribeLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeRules

Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeRulesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeRulesRequest;
import org.openapis.openapi.models.operations.GETDescribeRulesResponse;
import org.openapis.openapi.models.operations.GETDescribeRulesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeRulesRequest req = new GETDescribeRulesRequest(GETDescribeRulesActionEnum.DESCRIBE_RULES, GETDescribeRulesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                listenerArn = "sapiente";
                marker = "architecto";
                pageSize = 652790L;
                ruleArns = new String[]{{
                    add("culpa"),
                }};
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "mollitia";
                xAmzDate = "occaecati";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "quam";
            }};            

            GETDescribeRulesResponse res = sdk.sdk.getDescribeRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeSSLPolicies

<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeSSLPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeSSLPoliciesLoadBalancerTypeEnum;
import org.openapis.openapi.models.operations.GETDescribeSSLPoliciesRequest;
import org.openapis.openapi.models.operations.GETDescribeSSLPoliciesResponse;
import org.openapis.openapi.models.operations.GETDescribeSSLPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeSSLPoliciesRequest req = new GETDescribeSSLPoliciesRequest(GETDescribeSSLPoliciesActionEnum.DESCRIBE_SSL_POLICIES, GETDescribeSSLPoliciesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                loadBalancerType = GETDescribeSSLPoliciesLoadBalancerTypeEnum.APPLICATION;
                marker = "error";
                names = new String[]{{
                    add("quis"),
                }};
                pageSize = 110375L;
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "animi";
                xAmzCredential = "enim";
                xAmzDate = "odit";
                xAmzSecurityToken = "quo";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "tenetur";
            }};            

            GETDescribeSSLPoliciesResponse res = sdk.sdk.getDescribeSSLPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTags

Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTagsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTagsRequest;
import org.openapis.openapi.models.operations.GETDescribeTagsResponse;
import org.openapis.openapi.models.operations.GETDescribeTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTagsRequest req = new GETDescribeTagsRequest(GETDescribeTagsActionEnum.DESCRIBE_TAGS,                 new String[]{{
                                add("possimus"),
                                add("aut"),
                                add("quasi"),
                            }}, GETDescribeTagsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "laborum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "vero";
            }};            

            GETDescribeTagsResponse res = sdk.sdk.getDescribeTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTargetGroupAttributes

<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupAttributesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupAttributesRequest;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupAttributesResponse;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupAttributesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTargetGroupAttributesRequest req = new GETDescribeTargetGroupAttributesRequest(GETDescribeTargetGroupAttributesActionEnum.DESCRIBE_TARGET_GROUP_ATTRIBUTES, "praesentium", GETDescribeTargetGroupAttributesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "omnis";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "cum";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "doloremque";
            }};            

            GETDescribeTargetGroupAttributesResponse res = sdk.sdk.getDescribeTargetGroupAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeTargetGroups

Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupsRequest;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupsResponse;
import org.openapis.openapi.models.operations.GETDescribeTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTargetGroupsRequest req = new GETDescribeTargetGroupsRequest(GETDescribeTargetGroupsActionEnum.DESCRIBE_TARGET_GROUPS, GETDescribeTargetGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                loadBalancerArn = "ut";
                marker = "maiores";
                names = new String[]{{
                    add("corporis"),
                }};
                pageSize = 296140L;
                targetGroupArns = new String[]{{
                    add("dicta"),
                    add("harum"),
                }};
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "commodi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "quae";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "quidem";
            }};            

            GETDescribeTargetGroupsResponse res = sdk.sdk.getDescribeTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getModifyTargetGroup

Modifies the health checks used when evaluating the health state of the targets in the specified target group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETModifyTargetGroupActionEnum;
import org.openapis.openapi.models.operations.GETModifyTargetGroupHealthCheckProtocolEnum;
import org.openapis.openapi.models.operations.GETModifyTargetGroupMatcher;
import org.openapis.openapi.models.operations.GETModifyTargetGroupRequest;
import org.openapis.openapi.models.operations.GETModifyTargetGroupResponse;
import org.openapis.openapi.models.operations.GETModifyTargetGroupVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETModifyTargetGroupRequest req = new GETModifyTargetGroupRequest(GETModifyTargetGroupActionEnum.MODIFY_TARGET_GROUP, "excepturi", GETModifyTargetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                healthCheckEnabled = false;
                healthCheckIntervalSeconds = 865103L;
                healthCheckPath = "modi";
                healthCheckPort = "praesentium";
                healthCheckProtocol = GETModifyTargetGroupHealthCheckProtocolEnum.TLS;
                healthCheckTimeoutSeconds = 916723L;
                healthyThresholdCount = 93940L;
                matcher = new GETModifyTargetGroupMatcher() {{
                    grpcCode = "repudiandae";
                    httpCode = "sint";
                }};;
                unhealthyThresholdCount = 83112L;
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "enim";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "est";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "explicabo";
            }};            

            GETModifyTargetGroupResponse res = sdk.sdk.getModifyTargetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRemoveTags

Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETRemoveTagsActionEnum;
import org.openapis.openapi.models.operations.GETRemoveTagsRequest;
import org.openapis.openapi.models.operations.GETRemoveTagsResponse;
import org.openapis.openapi.models.operations.GETRemoveTagsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETRemoveTagsRequest req = new GETRemoveTagsRequest(GETRemoveTagsActionEnum.REMOVE_TAGS,                 new String[]{{
                                add("quibusdam"),
                                add("labore"),
                                add("modi"),
                            }},                 new String[]{{
                                add("aliquid"),
                            }}, GETRemoveTagsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            GETRemoveTagsResponse res = sdk.sdk.getRemoveTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetIpAddressType

Sets the type of IP addresses used by the subnets of the specified load balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetIPAddressTypeIPAddressTypeEnum;
import org.openapis.openapi.models.operations.GETSetIpAddressTypeActionEnum;
import org.openapis.openapi.models.operations.GETSetIpAddressTypeRequest;
import org.openapis.openapi.models.operations.GETSetIpAddressTypeResponse;
import org.openapis.openapi.models.operations.GETSetIpAddressTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetIpAddressTypeRequest req = new GETSetIpAddressTypeRequest(GETSetIpAddressTypeActionEnum.SET_IP_ADDRESS_TYPE, GETSetIPAddressTypeIPAddressTypeEnum.DUALSTACK, "excepturi", GETSetIpAddressTypeVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
            }};            

            GETSetIpAddressTypeResponse res = sdk.sdk.getSetIpAddressType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetSecurityGroups

<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.GETSetSecurityGroupsRequest;
import org.openapis.openapi.models.operations.GETSetSecurityGroupsResponse;
import org.openapis.openapi.models.operations.GETSetSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetSecurityGroupsRequest req = new GETSetSecurityGroupsRequest(GETSetSecurityGroupsActionEnum.SET_SECURITY_GROUPS, "sint",                 new String[]{{
                                add("provident"),
                                add("necessitatibus"),
                            }}, GETSetSecurityGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "officia";
                xAmzCredential = "dolor";
                xAmzDate = "debitis";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "in";
            }};            

            GETSetSecurityGroupsResponse res = sdk.sdk.getSetSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddListenerCertificates

<p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddListenerCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTAddListenerCertificatesRequest;
import org.openapis.openapi.models.operations.POSTAddListenerCertificatesResponse;
import org.openapis.openapi.models.operations.POSTAddListenerCertificatesVersionEnum;
import org.openapis.openapi.models.shared.AddListenerCertificatesInput;
import org.openapis.openapi.models.shared.Certificate;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddListenerCertificatesRequest req = new POSTAddListenerCertificatesRequest(POSTAddListenerCertificatesActionEnum.ADD_LISTENER_CERTIFICATES, POSTAddListenerCertificatesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "illum".getBytes();
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            POSTAddListenerCertificatesResponse res = sdk.sdk.postAddListenerCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAddTags

<p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAddTagsActionEnum;
import org.openapis.openapi.models.operations.POSTAddTagsRequest;
import org.openapis.openapi.models.operations.POSTAddTagsResponse;
import org.openapis.openapi.models.operations.POSTAddTagsVersionEnum;
import org.openapis.openapi.models.shared.AddTagsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsRequest req = new POSTAddTagsRequest(POSTAddTagsActionEnum.ADD_TAGS, POSTAddTagsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "laborum".getBytes();
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "non";
                xAmzCredential = "occaecati";
                xAmzDate = "enim";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTAddTagsResponse res = sdk.sdk.postAddTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateListener

<p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateListenerActionEnum;
import org.openapis.openapi.models.operations.POSTCreateListenerRequest;
import org.openapis.openapi.models.operations.POSTCreateListenerResponse;
import org.openapis.openapi.models.operations.POSTCreateListenerVersionEnum;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.ActionTypeEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConfig;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConfig;
import org.openapis.openapi.models.shared.Certificate;
import org.openapis.openapi.models.shared.CreateListenerInput;
import org.openapis.openapi.models.shared.FixedResponseActionConfig;
import org.openapis.openapi.models.shared.ForwardActionConfig;
import org.openapis.openapi.models.shared.ProtocolEnumEnum;
import org.openapis.openapi.models.shared.RedirectActionConfig;
import org.openapis.openapi.models.shared.RedirectActionStatusCodeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetGroupStickinessConfig;
import org.openapis.openapi.models.shared.TargetGroupTuple;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateListenerRequest req = new POSTCreateListenerRequest(POSTCreateListenerActionEnum.CREATE_LISTENER, POSTCreateListenerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "nam".getBytes();
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            POSTCreateListenerResponse res = sdk.sdk.postCreateListener(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateLoadBalancer

<p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.CreateLoadBalancerInput;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.LoadBalancerSchemeEnumEnum;
import org.openapis.openapi.models.shared.LoadBalancerTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubnetMapping;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateLoadBalancerRequest req = new POSTCreateLoadBalancerRequest(POSTCreateLoadBalancerActionEnum.CREATE_LOAD_BALANCER, POSTCreateLoadBalancerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "natus".getBytes();
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "perferendis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "id";
            }};            

            POSTCreateLoadBalancerResponse res = sdk.sdk.postCreateLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateRule

<p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateRuleActionEnum;
import org.openapis.openapi.models.operations.POSTCreateRuleRequest;
import org.openapis.openapi.models.operations.POSTCreateRuleResponse;
import org.openapis.openapi.models.operations.POSTCreateRuleVersionEnum;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.ActionTypeEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConfig;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConfig;
import org.openapis.openapi.models.shared.CreateRuleInput;
import org.openapis.openapi.models.shared.FixedResponseActionConfig;
import org.openapis.openapi.models.shared.ForwardActionConfig;
import org.openapis.openapi.models.shared.HostHeaderConditionConfig;
import org.openapis.openapi.models.shared.HttpHeaderConditionConfig;
import org.openapis.openapi.models.shared.HttpRequestMethodConditionConfig;
import org.openapis.openapi.models.shared.PathPatternConditionConfig;
import org.openapis.openapi.models.shared.QueryStringConditionConfig;
import org.openapis.openapi.models.shared.QueryStringKeyValuePair;
import org.openapis.openapi.models.shared.RedirectActionConfig;
import org.openapis.openapi.models.shared.RedirectActionStatusCodeEnumEnum;
import org.openapis.openapi.models.shared.RuleCondition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceIpConditionConfig;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetGroupStickinessConfig;
import org.openapis.openapi.models.shared.TargetGroupTuple;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateRuleRequest req = new POSTCreateRuleRequest(POSTCreateRuleActionEnum.CREATE_RULE, POSTCreateRuleVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "labore".getBytes();
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "natus";
                xAmzCredential = "nobis";
                xAmzDate = "eum";
                xAmzSecurityToken = "vero";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "architecto";
            }};            

            POSTCreateRuleResponse res = sdk.sdk.postCreateRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateTargetGroup

<p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateTargetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTCreateTargetGroupRequest;
import org.openapis.openapi.models.operations.POSTCreateTargetGroupResponse;
import org.openapis.openapi.models.operations.POSTCreateTargetGroupVersionEnum;
import org.openapis.openapi.models.shared.CreateTargetGroupInput;
import org.openapis.openapi.models.shared.Matcher;
import org.openapis.openapi.models.shared.ProtocolEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TargetGroupIpAddressTypeEnumEnum;
import org.openapis.openapi.models.shared.TargetTypeEnumEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateTargetGroupRequest req = new POSTCreateTargetGroupRequest(POSTCreateTargetGroupActionEnum.CREATE_TARGET_GROUP, POSTCreateTargetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "et".getBytes();
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "provident";
                xAmzDate = "quos";
                xAmzSecurityToken = "sint";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "mollitia";
            }};            

            POSTCreateTargetGroupResponse res = sdk.sdk.postCreateTargetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteListener

<p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteListenerActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteListenerRequest;
import org.openapis.openapi.models.operations.POSTDeleteListenerResponse;
import org.openapis.openapi.models.operations.POSTDeleteListenerVersionEnum;
import org.openapis.openapi.models.shared.DeleteListenerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteListenerRequest req = new POSTDeleteListenerRequest(POSTDeleteListenerActionEnum.DELETE_LISTENER, POSTDeleteListenerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "mollitia".getBytes();
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            POSTDeleteListenerResponse res = sdk.sdk.postDeleteListener(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteLoadBalancer

<p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.DeleteLoadBalancerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteLoadBalancerRequest req = new POSTDeleteLoadBalancerRequest(POSTDeleteLoadBalancerActionEnum.DELETE_LOAD_BALANCER, POSTDeleteLoadBalancerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "doloribus".getBytes();
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "eius";
                xAmzCredential = "maxime";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "architecto";
            }};            

            POSTDeleteLoadBalancerResponse res = sdk.sdk.postDeleteLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteRule

<p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteRuleActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteRuleRequest;
import org.openapis.openapi.models.operations.POSTDeleteRuleResponse;
import org.openapis.openapi.models.operations.POSTDeleteRuleVersionEnum;
import org.openapis.openapi.models.shared.DeleteRuleInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteRuleRequest req = new POSTDeleteRuleRequest(POSTDeleteRuleActionEnum.DELETE_RULE, POSTDeleteRuleVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "repudiandae".getBytes();
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "nihil";
                xAmzDate = "repellat";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "saepe";
            }};            

            POSTDeleteRuleResponse res = sdk.sdk.postDeleteRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteTargetGroup

<p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteTargetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteTargetGroupRequest;
import org.openapis.openapi.models.operations.POSTDeleteTargetGroupResponse;
import org.openapis.openapi.models.operations.POSTDeleteTargetGroupVersionEnum;
import org.openapis.openapi.models.shared.DeleteTargetGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteTargetGroupRequest req = new POSTDeleteTargetGroupRequest(POSTDeleteTargetGroupActionEnum.DELETE_TARGET_GROUP, POSTDeleteTargetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "accusantium".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "praesentium";
                xAmzCredential = "natus";
                xAmzDate = "magni";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "illum";
            }};            

            POSTDeleteTargetGroupResponse res = sdk.sdk.postDeleteTargetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeregisterTargets

Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeregisterTargetsActionEnum;
import org.openapis.openapi.models.operations.POSTDeregisterTargetsRequest;
import org.openapis.openapi.models.operations.POSTDeregisterTargetsResponse;
import org.openapis.openapi.models.operations.POSTDeregisterTargetsVersionEnum;
import org.openapis.openapi.models.shared.DeregisterTargetsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetDescription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeregisterTargetsRequest req = new POSTDeregisterTargetsRequest(POSTDeregisterTargetsActionEnum.DEREGISTER_TARGETS, POSTDeregisterTargetsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "maxime".getBytes();
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "odit";
                xAmzDate = "ea";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "maiores";
            }};            

            POSTDeregisterTargetsResponse res = sdk.sdk.postDeregisterTargets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeAccountLimits

<p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsRequest;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsResponse;
import org.openapis.openapi.models.operations.POSTDescribeAccountLimitsVersionEnum;
import org.openapis.openapi.models.shared.DescribeAccountLimitsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAccountLimitsRequest req = new POSTDescribeAccountLimitsRequest(POSTDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, POSTDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "ipsam".getBytes();
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "autem";
                xAmzCredential = "nam";
                xAmzDate = "eaque";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "voluptatibus";
            }};            

            POSTDescribeAccountLimitsResponse res = sdk.sdk.postDescribeAccountLimits(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeListenerCertificates

<p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeListenerCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeListenerCertificatesRequest;
import org.openapis.openapi.models.operations.POSTDescribeListenerCertificatesResponse;
import org.openapis.openapi.models.operations.POSTDescribeListenerCertificatesVersionEnum;
import org.openapis.openapi.models.shared.DescribeListenerCertificatesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeListenerCertificatesRequest req = new POSTDescribeListenerCertificatesRequest(POSTDescribeListenerCertificatesActionEnum.DESCRIBE_LISTENER_CERTIFICATES, POSTDescribeListenerCertificatesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "fugiat".getBytes();
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "aut";
                xAmzCredential = "cumque";
                xAmzDate = "corporis";
                xAmzSecurityToken = "hic";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTDescribeListenerCertificatesResponse res = sdk.sdk.postDescribeListenerCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeListeners

Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeListenersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeListenersRequest;
import org.openapis.openapi.models.operations.POSTDescribeListenersResponse;
import org.openapis.openapi.models.operations.POSTDescribeListenersVersionEnum;
import org.openapis.openapi.models.shared.DescribeListenersInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeListenersRequest req = new POSTDescribeListenersRequest(POSTDescribeListenersActionEnum.DESCRIBE_LISTENERS, POSTDescribeListenersVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                marker = "quis";
                requestBody = "totam".getBytes();
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            POSTDescribeListenersResponse res = sdk.sdk.postDescribeListeners(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLoadBalancerAttributes

<p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerAttributesRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerAttributesResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerAttributesVersionEnum;
import org.openapis.openapi.models.shared.DescribeLoadBalancerAttributesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancerAttributesRequest req = new POSTDescribeLoadBalancerAttributesRequest(POSTDescribeLoadBalancerAttributesActionEnum.DESCRIBE_LOAD_BALANCER_ATTRIBUTES, POSTDescribeLoadBalancerAttributesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "quam".getBytes();
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nostrum";
                xAmzDate = "hic";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "facilis";
            }};            

            POSTDescribeLoadBalancerAttributesResponse res = sdk.sdk.postDescribeLoadBalancerAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLoadBalancers

Describes the specified load balancers or all of your load balancers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.DescribeLoadBalancersInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perspiciatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancersRequest req = new POSTDescribeLoadBalancersRequest(POSTDescribeLoadBalancersActionEnum.DESCRIBE_LOAD_BALANCERS, POSTDescribeLoadBalancersVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                marker = "voluptatem";
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
            }};            

            POSTDescribeLoadBalancersResponse res = sdk.sdk.postDescribeLoadBalancers(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeRules

Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeRulesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeRulesRequest;
import org.openapis.openapi.models.operations.POSTDescribeRulesResponse;
import org.openapis.openapi.models.operations.POSTDescribeRulesVersionEnum;
import org.openapis.openapi.models.shared.DescribeRulesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeRulesRequest req = new POSTDescribeRulesRequest(POSTDescribeRulesActionEnum.DESCRIBE_RULES, POSTDescribeRulesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTDescribeRulesResponse res = sdk.sdk.postDescribeRules(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeSSLPolicies

<p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeSSLPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeSSLPoliciesRequest;
import org.openapis.openapi.models.operations.POSTDescribeSSLPoliciesResponse;
import org.openapis.openapi.models.operations.POSTDescribeSSLPoliciesVersionEnum;
import org.openapis.openapi.models.shared.DescribeSSLPoliciesInput;
import org.openapis.openapi.models.shared.LoadBalancerTypeEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeSSLPoliciesRequest req = new POSTDescribeSSLPoliciesRequest(POSTDescribeSSLPoliciesActionEnum.DESCRIBE_SSL_POLICIES, POSTDescribeSSLPoliciesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "delectus".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            POSTDescribeSSLPoliciesResponse res = sdk.sdk.postDescribeSSLPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTags

Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTagsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTagsRequest;
import org.openapis.openapi.models.operations.POSTDescribeTagsResponse;
import org.openapis.openapi.models.operations.POSTDescribeTagsVersionEnum;
import org.openapis.openapi.models.shared.DescribeTagsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTagsRequest req = new POSTDescribeTagsRequest(POSTDescribeTagsActionEnum.DESCRIBE_TAGS, POSTDescribeTagsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTDescribeTagsResponse res = sdk.sdk.postDescribeTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTargetGroupAttributes

<p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupAttributesRequest;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupAttributesResponse;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupAttributesVersionEnum;
import org.openapis.openapi.models.shared.DescribeTargetGroupAttributesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTargetGroupAttributesRequest req = new POSTDescribeTargetGroupAttributesRequest(POSTDescribeTargetGroupAttributesActionEnum.DESCRIBE_TARGET_GROUP_ATTRIBUTES, POSTDescribeTargetGroupAttributesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTDescribeTargetGroupAttributesResponse res = sdk.sdk.postDescribeTargetGroupAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTargetGroups

Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupsRequest;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupsResponse;
import org.openapis.openapi.models.operations.POSTDescribeTargetGroupsVersionEnum;
import org.openapis.openapi.models.shared.DescribeTargetGroupsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTargetGroupsRequest req = new POSTDescribeTargetGroupsRequest(POSTDescribeTargetGroupsActionEnum.DESCRIBE_TARGET_GROUPS, POSTDescribeTargetGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                marker = "voluptas";
                requestBody = "natus".getBytes();
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "atque";
                xAmzCredential = "sit";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "ab";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "dolorum";
            }};            

            POSTDescribeTargetGroupsResponse res = sdk.sdk.postDescribeTargetGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeTargetHealth

Describes the health of the specified targets or all of your targets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeTargetHealthActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeTargetHealthRequest;
import org.openapis.openapi.models.operations.POSTDescribeTargetHealthResponse;
import org.openapis.openapi.models.operations.POSTDescribeTargetHealthVersionEnum;
import org.openapis.openapi.models.shared.DescribeTargetHealthInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetDescription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeTargetHealthRequest req = new POSTDescribeTargetHealthRequest(POSTDescribeTargetHealthActionEnum.DESCRIBE_TARGET_HEALTH, POSTDescribeTargetHealthVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "omnis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nihil";
            }};            

            POSTDescribeTargetHealthResponse res = sdk.sdk.postDescribeTargetHealth(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyListener

<p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyListenerActionEnum;
import org.openapis.openapi.models.operations.POSTModifyListenerRequest;
import org.openapis.openapi.models.operations.POSTModifyListenerResponse;
import org.openapis.openapi.models.operations.POSTModifyListenerVersionEnum;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.ActionTypeEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConfig;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConfig;
import org.openapis.openapi.models.shared.Certificate;
import org.openapis.openapi.models.shared.FixedResponseActionConfig;
import org.openapis.openapi.models.shared.ForwardActionConfig;
import org.openapis.openapi.models.shared.ModifyListenerInput;
import org.openapis.openapi.models.shared.ProtocolEnumEnum;
import org.openapis.openapi.models.shared.RedirectActionConfig;
import org.openapis.openapi.models.shared.RedirectActionStatusCodeEnumEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetGroupStickinessConfig;
import org.openapis.openapi.models.shared.TargetGroupTuple;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyListenerRequest req = new POSTModifyListenerRequest(POSTModifyListenerActionEnum.MODIFY_LISTENER, POSTModifyListenerVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
            }};            

            POSTModifyListenerResponse res = sdk.sdk.postModifyListener(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyLoadBalancerAttributes

<p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesRequest;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesResponse;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesVersionEnum;
import org.openapis.openapi.models.shared.LoadBalancerAttribute;
import org.openapis.openapi.models.shared.ModifyLoadBalancerAttributesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyLoadBalancerAttributesRequest req = new POSTModifyLoadBalancerAttributesRequest(POSTModifyLoadBalancerAttributesActionEnum.MODIFY_LOAD_BALANCER_ATTRIBUTES, POSTModifyLoadBalancerAttributesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "ad".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "deserunt";
                xAmzDate = "provident";
                xAmzSecurityToken = "minima";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "totam";
            }};            

            POSTModifyLoadBalancerAttributesResponse res = sdk.sdk.postModifyLoadBalancerAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyRule

<p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyRuleActionEnum;
import org.openapis.openapi.models.operations.POSTModifyRuleRequest;
import org.openapis.openapi.models.operations.POSTModifyRuleResponse;
import org.openapis.openapi.models.operations.POSTModifyRuleVersionEnum;
import org.openapis.openapi.models.shared.Action;
import org.openapis.openapi.models.shared.ActionTypeEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateCognitoActionConfig;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConditionalBehaviorEnumEnum;
import org.openapis.openapi.models.shared.AuthenticateOidcActionConfig;
import org.openapis.openapi.models.shared.FixedResponseActionConfig;
import org.openapis.openapi.models.shared.ForwardActionConfig;
import org.openapis.openapi.models.shared.HostHeaderConditionConfig;
import org.openapis.openapi.models.shared.HttpHeaderConditionConfig;
import org.openapis.openapi.models.shared.HttpRequestMethodConditionConfig;
import org.openapis.openapi.models.shared.ModifyRuleInput;
import org.openapis.openapi.models.shared.PathPatternConditionConfig;
import org.openapis.openapi.models.shared.QueryStringConditionConfig;
import org.openapis.openapi.models.shared.QueryStringKeyValuePair;
import org.openapis.openapi.models.shared.RedirectActionConfig;
import org.openapis.openapi.models.shared.RedirectActionStatusCodeEnumEnum;
import org.openapis.openapi.models.shared.RuleCondition;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceIpConditionConfig;
import org.openapis.openapi.models.shared.TargetGroupStickinessConfig;
import org.openapis.openapi.models.shared.TargetGroupTuple;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyRuleRequest req = new POSTModifyRuleRequest(POSTModifyRuleActionEnum.MODIFY_RULE, POSTModifyRuleVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            POSTModifyRuleResponse res = sdk.sdk.postModifyRule(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyTargetGroup

Modifies the health checks used when evaluating the health state of the targets in the specified target group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupActionEnum;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupRequest;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupResponse;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupVersionEnum;
import org.openapis.openapi.models.shared.Matcher;
import org.openapis.openapi.models.shared.ModifyTargetGroupInput;
import org.openapis.openapi.models.shared.ProtocolEnumEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyTargetGroupRequest req = new POSTModifyTargetGroupRequest(POSTModifyTargetGroupActionEnum.MODIFY_TARGET_GROUP, POSTModifyTargetGroupVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "a".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "harum";
                xAmzCredential = "iusto";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "amet";
            }};            

            POSTModifyTargetGroupResponse res = sdk.sdk.postModifyTargetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postModifyTargetGroupAttributes

Modifies the specified attributes of the specified target group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupAttributesRequest;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupAttributesResponse;
import org.openapis.openapi.models.operations.POSTModifyTargetGroupAttributesVersionEnum;
import org.openapis.openapi.models.shared.ModifyTargetGroupAttributesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetGroupAttribute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyTargetGroupAttributesRequest req = new POSTModifyTargetGroupAttributesRequest(POSTModifyTargetGroupAttributesActionEnum.MODIFY_TARGET_GROUP_ATTRIBUTES, POSTModifyTargetGroupAttributesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
            }};            

            POSTModifyTargetGroupAttributesResponse res = sdk.sdk.postModifyTargetGroupAttributes(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRegisterTargets

<p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRegisterTargetsActionEnum;
import org.openapis.openapi.models.operations.POSTRegisterTargetsRequest;
import org.openapis.openapi.models.operations.POSTRegisterTargetsResponse;
import org.openapis.openapi.models.operations.POSTRegisterTargetsVersionEnum;
import org.openapis.openapi.models.shared.RegisterTargetsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TargetDescription;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRegisterTargetsRequest req = new POSTRegisterTargetsRequest(POSTRegisterTargetsActionEnum.REGISTER_TARGETS, POSTRegisterTargetsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "vel";
                xAmzCredential = "libero";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTRegisterTargetsResponse res = sdk.sdk.postRegisterTargets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveListenerCertificates

Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveListenerCertificatesActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveListenerCertificatesRequest;
import org.openapis.openapi.models.operations.POSTRemoveListenerCertificatesResponse;
import org.openapis.openapi.models.operations.POSTRemoveListenerCertificatesVersionEnum;
import org.openapis.openapi.models.shared.Certificate;
import org.openapis.openapi.models.shared.RemoveListenerCertificatesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveListenerCertificatesRequest req = new POSTRemoveListenerCertificatesRequest(POSTRemoveListenerCertificatesActionEnum.REMOVE_LISTENER_CERTIFICATES, POSTRemoveListenerCertificatesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "pariatur";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "totam";
            }};            

            POSTRemoveListenerCertificatesResponse res = sdk.sdk.postRemoveListenerCertificates(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemoveTags

Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRemoveTagsActionEnum;
import org.openapis.openapi.models.operations.POSTRemoveTagsRequest;
import org.openapis.openapi.models.operations.POSTRemoveTagsResponse;
import org.openapis.openapi.models.operations.POSTRemoveTagsVersionEnum;
import org.openapis.openapi.models.shared.RemoveTagsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsRequest req = new POSTRemoveTagsRequest(POSTRemoveTagsActionEnum.REMOVE_TAGS, POSTRemoveTagsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "aspernatur".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
            }};            

            POSTRemoveTagsResponse res = sdk.sdk.postRemoveTags(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetIpAddressType

Sets the type of IP addresses used by the subnets of the specified load balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetIpAddressTypeActionEnum;
import org.openapis.openapi.models.operations.POSTSetIpAddressTypeRequest;
import org.openapis.openapi.models.operations.POSTSetIpAddressTypeResponse;
import org.openapis.openapi.models.operations.POSTSetIpAddressTypeVersionEnum;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetIpAddressTypeInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetIpAddressTypeRequest req = new POSTSetIpAddressTypeRequest(POSTSetIpAddressTypeActionEnum.SET_IP_ADDRESS_TYPE, POSTSetIpAddressTypeVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            POSTSetIpAddressTypeResponse res = sdk.sdk.postSetIpAddressType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetRulePriorities

<p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetRulePrioritiesActionEnum;
import org.openapis.openapi.models.operations.POSTSetRulePrioritiesRequest;
import org.openapis.openapi.models.operations.POSTSetRulePrioritiesResponse;
import org.openapis.openapi.models.operations.POSTSetRulePrioritiesVersionEnum;
import org.openapis.openapi.models.shared.RulePriorityPair;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetRulePrioritiesInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetRulePrioritiesRequest req = new POSTSetRulePrioritiesRequest(POSTSetRulePrioritiesActionEnum.SET_RULE_PRIORITIES, POSTSetRulePrioritiesVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "cumque".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "et";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTSetRulePrioritiesResponse res = sdk.sdk.postSetRulePriorities(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetSecurityGroups

<p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetSecurityGroupsActionEnum;
import org.openapis.openapi.models.operations.POSTSetSecurityGroupsRequest;
import org.openapis.openapi.models.operations.POSTSetSecurityGroupsResponse;
import org.openapis.openapi.models.operations.POSTSetSecurityGroupsVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetSecurityGroupsInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetSecurityGroupsRequest req = new POSTSetSecurityGroupsRequest(POSTSetSecurityGroupsActionEnum.SET_SECURITY_GROUPS, POSTSetSecurityGroupsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "tempore".getBytes();
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "delectus";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "adipisci";
            }};            

            POSTSetSecurityGroupsResponse res = sdk.sdk.postSetSecurityGroups(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetSubnets

<p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetSubnetsActionEnum;
import org.openapis.openapi.models.operations.POSTSetSubnetsRequest;
import org.openapis.openapi.models.operations.POSTSetSubnetsResponse;
import org.openapis.openapi.models.operations.POSTSetSubnetsVersionEnum;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetSubnetsInput;
import org.openapis.openapi.models.shared.SubnetMapping;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetSubnetsRequest req = new POSTSetSubnetsRequest(POSTSetSubnetsActionEnum.SET_SUBNETS, POSTSetSubnetsVersionEnum.TWO_THOUSAND_AND_FIFTEEN1201) {{
                requestBody = "architecto".getBytes();
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
            }};            

            POSTSetSubnetsResponse res = sdk.sdk.postSetSubnets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
