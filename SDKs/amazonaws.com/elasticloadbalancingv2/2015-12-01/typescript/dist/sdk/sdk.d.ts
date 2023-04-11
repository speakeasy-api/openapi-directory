import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://elasticloadbalancing.{region}.amazonaws.com", "https://elasticloadbalancing.{region}.amazonaws.com", "http://elasticloadbalancing.amazonaws.com", "https://elasticloadbalancing.amazonaws.com", "http://elasticloadbalancing.{region}.amazonaws.com.cn", "https://elasticloadbalancing.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * <fullname>Elastic Load Balancing</fullname> <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered targets and ensures that it routes traffic only to healthy targets. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer. You configure a target group with a protocol and port number for connections from the load balancer to the targets, and with health check settings to be used when checking the health status of the targets.</p> <p>Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This reference covers the following load balancer types:</p> <ul> <li> <p>Application Load Balancer - Operates at the application layer (layer 7) and supports HTTP and HTTPS.</p> </li> <li> <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP, TLS, and UDP.</p> </li> <li> <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p> </li> </ul> <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>All Elastic Load Balancing operations are idempotent, which means that they complete at most one time. If you repeat an operation, it succeeds.</p>
 *
 * @see {@link https://docs.aws.amazon.com/elasticloadbalancing/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
     */
    getDeleteListener(req: operations.GETDeleteListenerRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteListenerResponse>;
    /**
     * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
     */
    getDeleteLoadBalancer(req: operations.GETDeleteLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteLoadBalancerResponse>;
    /**
     * <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
     */
    getDeleteRule(req: operations.GETDeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteRuleResponse>;
    /**
     * <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
     */
    getDeleteTargetGroup(req: operations.GETDeleteTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETDeleteTargetGroupResponse>;
    /**
     * <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
     */
    getDescribeAccountLimits(req: operations.GETDescribeAccountLimitsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeAccountLimitsResponse>;
    /**
     * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
     */
    getDescribeListenerCertificates(req: operations.GETDescribeListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeListenerCertificatesResponse>;
    /**
     * Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
     */
    getDescribeListeners(req: operations.GETDescribeListenersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeListenersResponse>;
    /**
     * <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
     */
    getDescribeLoadBalancerAttributes(req: operations.GETDescribeLoadBalancerAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeLoadBalancerAttributesResponse>;
    /**
     * Describes the specified load balancers or all of your load balancers.
     */
    getDescribeLoadBalancers(req: operations.GETDescribeLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeLoadBalancersResponse>;
    /**
     * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
     */
    getDescribeRules(req: operations.GETDescribeRulesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeRulesResponse>;
    /**
     * <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
     */
    getDescribeSSLPolicies(req: operations.GETDescribeSSLPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeSSLPoliciesResponse>;
    /**
     * Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
     */
    getDescribeTags(req: operations.GETDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeTagsResponse>;
    /**
     * <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
     */
    getDescribeTargetGroupAttributes(req: operations.GETDescribeTargetGroupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeTargetGroupAttributesResponse>;
    /**
     * Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
     */
    getDescribeTargetGroups(req: operations.GETDescribeTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETDescribeTargetGroupsResponse>;
    /**
     * Modifies the health checks used when evaluating the health state of the targets in the specified target group.
     */
    getModifyTargetGroup(req: operations.GETModifyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GETModifyTargetGroupResponse>;
    /**
     * Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
     */
    getRemoveTags(req: operations.GETRemoveTagsRequest, config?: AxiosRequestConfig): Promise<operations.GETRemoveTagsResponse>;
    /**
     * Sets the type of IP addresses used by the subnets of the specified load balancer.
     */
    getSetIpAddressType(req: operations.GETSetIpAddressTypeRequest, config?: AxiosRequestConfig): Promise<operations.GETSetIpAddressTypeResponse>;
    /**
     * <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
     */
    getSetSecurityGroups(req: operations.GETSetSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GETSetSecurityGroupsResponse>;
    /**
     * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS or TLS listener.</p> <p>If the certificate in already in the certificate list, the call is successful but the certificate is not added again.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
     */
    postAddListenerCertificates(req: operations.POSTAddListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddListenerCertificatesResponse>;
    /**
     * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, and rules.</p> <p>Each tag consists of a key and an optional value. If a resource already has a tag with the same key, <code>AddTags</code> updates its value.</p>
     */
    postAddTags(req: operations.POSTAddTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTAddTagsResponse>;
    /**
     * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple listeners with the same settings, each call succeeds.</p>
     */
    postCreateListener(req: operations.POSTCreateListenerRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateListenerResponse>;
    /**
     * <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple load balancers with the same settings, each call succeeds.</p>
     */
    postCreateLoadBalancer(req: operations.POSTCreateLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateLoadBalancerResponse>;
    /**
     * <p>Creates a rule for the specified listener. The listener must be associated with an Application Load Balancer.</p> <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules are evaluated in priority order, from the lowest value to the highest value. When the conditions for a rule are met, its actions are performed. If the conditions for no rules are met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
     */
    postCreateRule(req: operations.POSTCreateRuleRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateRuleResponse>;
    /**
     * <p>Creates a target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target groups for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your Gateway Load Balancers</a> </p> </li> </ul> <p>This operation is idempotent, which means that it completes at most one time. If you attempt to create multiple target groups with the same settings, each call succeeds.</p>
     */
    postCreateTargetGroup(req: operations.POSTCreateTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTCreateTargetGroupResponse>;
    /**
     * <p>Deletes the specified listener.</p> <p>Alternatively, your listener is deleted when you delete the load balancer to which it is attached.</p>
     */
    postDeleteListener(req: operations.POSTDeleteListenerRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteListenerResponse>;
    /**
     * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. Deleting a load balancer also deletes its listeners.</p> <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer does not exist or has already been deleted, the call succeeds.</p> <p>Deleting a load balancer does not affect its registered targets. For example, your EC2 instances continue to run and are still registered to their target groups. If you no longer need these EC2 instances, you can stop or terminate them.</p>
     */
    postDeleteLoadBalancer(req: operations.POSTDeleteLoadBalancerRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteLoadBalancerResponse>;
    /**
     * <p>Deletes the specified rule.</p> <p>You can't delete the default rule.</p>
     */
    postDeleteRule(req: operations.POSTDeleteRuleRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteRuleResponse>;
    /**
     * <p>Deletes the specified target group.</p> <p>You can delete a target group if it is not referenced by any actions. Deleting a target group also deletes any associated health checks. Deleting a target group does not affect its registered targets. For example, any EC2 instances continue to run until you stop or terminate them.</p>
     */
    postDeleteTargetGroup(req: operations.POSTDeleteTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeleteTargetGroupResponse>;
    /**
     * Deregisters the specified targets from the specified target group. After the targets are deregistered, they no longer receive traffic from the load balancer.
     */
    postDeregisterTargets(req: operations.POSTDeregisterTargetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDeregisterTargetsResponse>;
    /**
     * <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services account.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your Application Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your Network Load Balancers</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway Load Balancers</a> </p> </li> </ul>
     */
    postDescribeAccountLimits(req: operations.POSTDescribeAccountLimitsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeAccountLimitsResponse>;
    /**
     * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS listener.</p> <p>If the default certificate is also in the certificate list, it appears twice in the results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set to false).</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers Guide</i>.</p>
     */
    postDescribeListenerCertificates(req: operations.POSTDescribeListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeListenerCertificatesResponse>;
    /**
     * Describes the specified listeners or the listeners for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load balancer or one or more listeners.
     */
    postDescribeListeners(req: operations.POSTDescribeListenersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeListenersResponse>;
    /**
     * <p>Describes the attributes for the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
     */
    postDescribeLoadBalancerAttributes(req: operations.POSTDescribeLoadBalancerAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLoadBalancerAttributesResponse>;
    /**
     * Describes the specified load balancers or all of your load balancers.
     */
    postDescribeLoadBalancers(req: operations.POSTDescribeLoadBalancersRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeLoadBalancersResponse>;
    /**
     * Describes the specified rules or the rules for the specified listener. You must specify either a listener or one or more rules.
     */
    postDescribeRules(req: operations.POSTDescribeRulesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeRulesResponse>;
    /**
     * <p>Describes the specified policies or all policies used for SSL negotiation.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
     */
    postDescribeSSLPolicies(req: operations.POSTDescribeSSLPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeSSLPoliciesResponse>;
    /**
     * Describes the tags for the specified Elastic Load Balancing resources. You can describe the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
     */
    postDescribeTags(req: operations.POSTDescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTagsResponse>;
    /**
     * <p>Describes the attributes for the specified target group.</p> <p>For more information, see the following:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers Guide</i> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers Guide</i> </p> </li> </ul>
     */
    postDescribeTargetGroupAttributes(req: operations.POSTDescribeTargetGroupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTargetGroupAttributesResponse>;
    /**
     * Describes the specified target groups or all of your target groups. By default, all target groups are described. Alternatively, you can specify one of the following to filter the results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of one or more target groups.
     */
    postDescribeTargetGroups(req: operations.POSTDescribeTargetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTargetGroupsResponse>;
    /**
     * Describes the health of the specified targets or all of your targets.
     */
    postDescribeTargetHealth(req: operations.POSTDescribeTargetHealthRequest, config?: AxiosRequestConfig): Promise<operations.POSTDescribeTargetHealthResponse>;
    /**
     * <p>Replaces the specified properties of the specified listener. Any properties that you do not specify remain unchanged.</p> <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP to TLS, you must add the security policy and default certificate properties.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
     */
    postModifyListener(req: operations.POSTModifyListenerRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyListenerResponse>;
    /**
     * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load Balancer, or Gateway Load Balancer.</p> <p>If any of the specified attributes can't be modified as requested, the call fails. Any existing attributes that you do not modify retain their current values.</p>
     */
    postModifyLoadBalancerAttributes(req: operations.POSTModifyLoadBalancerAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyLoadBalancerAttributesResponse>;
    /**
     * <p>Replaces the specified properties of the specified rule. Any properties that you do not specify are unchanged.</p> <p>To add an item to a list, remove an item from a list, or update an item in a list, you must provide the entire list. For example, to add an action, specify a list with the current actions plus the new action.</p>
     */
    postModifyRule(req: operations.POSTModifyRuleRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyRuleResponse>;
    /**
     * Modifies the health checks used when evaluating the health state of the targets in the specified target group.
     */
    postModifyTargetGroup(req: operations.POSTModifyTargetGroupRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTargetGroupResponse>;
    /**
     * Modifies the specified attributes of the specified target group.
     */
    postModifyTargetGroupAttributes(req: operations.POSTModifyTargetGroupAttributesRequest, config?: AxiosRequestConfig): Promise<operations.POSTModifyTargetGroupAttributesResponse>;
    /**
     * <p>Registers the specified targets with the specified target group.</p> <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you register it.</p> <p>By default, the load balancer routes requests to registered targets using the protocol and port for the target group. Alternatively, you can override the port for a target when you register it. You can register each EC2 instance or IP address with the same target group multiple times using different ports.</p> <p>With a Network Load Balancer, you cannot register instances by instance ID if they have the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3, and T1. You can register instances of these types by IP address.</p>
     */
    postRegisterTargets(req: operations.POSTRegisterTargetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTRegisterTargetsResponse>;
    /**
     * Removes the specified certificate from the certificate list for the specified HTTPS or TLS listener.
     */
    postRemoveListenerCertificates(req: operations.POSTRemoveListenerCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveListenerCertificatesResponse>;
    /**
     * Removes the specified tags from the specified Elastic Load Balancing resources. You can remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups, listeners, or rules.
     */
    postRemoveTags(req: operations.POSTRemoveTagsRequest, config?: AxiosRequestConfig): Promise<operations.POSTRemoveTagsResponse>;
    /**
     * Sets the type of IP addresses used by the subnets of the specified load balancer.
     */
    postSetIpAddressType(req: operations.POSTSetIpAddressTypeRequest, config?: AxiosRequestConfig): Promise<operations.POSTSetIpAddressTypeResponse>;
    /**
     * <p>Sets the priorities of the specified rules.</p> <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any existing rules that you do not specify retain their current priority.</p>
     */
    postSetRulePriorities(req: operations.POSTSetRulePrioritiesRequest, config?: AxiosRequestConfig): Promise<operations.POSTSetRulePrioritiesResponse>;
    /**
     * <p>Associates the specified security groups with the specified Application Load Balancer. The specified security groups override the previously associated security groups.</p> <p>You can't specify a security group for a Network Load Balancer or Gateway Load Balancer.</p>
     */
    postSetSecurityGroups(req: operations.POSTSetSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.POSTSetSecurityGroupsResponse>;
    /**
     * <p>Enables the Availability Zones for the specified public subnets for the specified Application Load Balancer or Network Load Balancer. The specified subnets replace the previously enabled subnets.</p> <p>When you specify subnets for a Network Load Balancer, you must include all subnets that were enabled previously, with their existing configurations, plus any additional subnets.</p>
     */
    postSetSubnets(req: operations.POSTSetSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.POSTSetSubnetsResponse>;
}
