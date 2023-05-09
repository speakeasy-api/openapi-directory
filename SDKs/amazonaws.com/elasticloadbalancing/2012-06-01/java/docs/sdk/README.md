# SDK

## Overview

<fullname>Elastic Load Balancing</fullname> <p>A load balancer can distribute incoming traffic across your EC2 instances. This enables you to increase the availability of your application. The load balancer also monitors the health of its registered instances and ensures that it routes traffic only to healthy instances. You configure your load balancer to accept incoming traffic by specifying one or more listeners, which are configured with a protocol and port number for connections from clients to the load balancer and a protocol and port number for connections from the load balancer to the instances.</p> <p>Elastic Load Balancing supports three types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers. You can select a load balancer based on your application needs. For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User Guide</a>.</p> <p>This reference covers the 2012-06-01 API, which supports Classic Load Balancers. The 2015-12-01 API supports Application Load Balancers and Network Load Balancers.</p> <p>To get started, create a load balancer with one or more listeners using <a>CreateLoadBalancer</a>. Register your instances with the load balancer using <a>RegisterInstancesWithLoadBalancer</a>.</p> <p>All Elastic Load Balancing operations are <i>idempotent</i>, which means that they complete at most one time. If you repeat an operation, it succeeds with a 200 OK response code.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/elasticloadbalancing/>
### Available Operations

* [getApplySecurityGroupsToLoadBalancer](#getapplysecuritygroupstoloadbalancer) - <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getAttachLoadBalancerToSubnets](#getattachloadbalancertosubnets) - <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getConfigureHealthCheck](#getconfigurehealthcheck) - <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getCreateAppCookieStickinessPolicy](#getcreateappcookiestickinesspolicy) - <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getCreateLBCookieStickinessPolicy](#getcreatelbcookiestickinesspolicy) - <p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getDeleteLoadBalancer](#getdeleteloadbalancer) - <p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>
* [getDeleteLoadBalancerListeners](#getdeleteloadbalancerlisteners) - Deletes the specified listeners from the specified load balancer.
* [getDeleteLoadBalancerPolicy](#getdeleteloadbalancerpolicy) - Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
* [getDescribeAccountLimits](#getdescribeaccountlimits) - <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getDescribeLoadBalancerAttributes](#getdescribeloadbalancerattributes) - Describes the attributes for the specified load balancer.
* [getDescribeLoadBalancerPolicies](#getdescribeloadbalancerpolicies) - <p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
* [getDescribeLoadBalancerPolicyTypes](#getdescribeloadbalancerpolicytypes) - <p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
* [getDescribeLoadBalancers](#getdescribeloadbalancers) - Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
* [getDescribeTags](#getdescribetags) - Describes the tags associated with the specified load balancers.
* [getDetachLoadBalancerFromSubnets](#getdetachloadbalancerfromsubnets) - <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>
* [getDisableAvailabilityZonesForLoadBalancer](#getdisableavailabilityzonesforloadbalancer) - <p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getEnableAvailabilityZonesForLoadBalancer](#getenableavailabilityzonesforloadbalancer) - <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getSetLoadBalancerListenerSSLCertificate](#getsetloadbalancerlistenersslcertificate) - <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getSetLoadBalancerPoliciesForBackendServer](#getsetloadbalancerpoliciesforbackendserver) - <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [getSetLoadBalancerPoliciesOfListener](#getsetloadbalancerpoliciesoflistener) - <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postAddTags](#postaddtags) - <p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postApplySecurityGroupsToLoadBalancer](#postapplysecuritygroupstoloadbalancer) - <p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postAttachLoadBalancerToSubnets](#postattachloadbalancertosubnets) - <p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postConfigureHealthCheck](#postconfigurehealthcheck) - <p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postCreateAppCookieStickinessPolicy](#postcreateappcookiestickinesspolicy) - <p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postCreateLBCookieStickinessPolicy](#postcreatelbcookiestickinesspolicy) - <p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postCreateLoadBalancer](#postcreateloadbalancer) - <p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postCreateLoadBalancerListeners](#postcreateloadbalancerlisteners) - <p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postCreateLoadBalancerPolicy](#postcreateloadbalancerpolicy) - <p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>
* [postDeleteLoadBalancer](#postdeleteloadbalancer) - <p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>
* [postDeleteLoadBalancerListeners](#postdeleteloadbalancerlisteners) - Deletes the specified listeners from the specified load balancer.
* [postDeleteLoadBalancerPolicy](#postdeleteloadbalancerpolicy) - Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.
* [postDeregisterInstancesFromLoadBalancer](#postderegisterinstancesfromloadbalancer) - <p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postDescribeAccountLimits](#postdescribeaccountlimits) - <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postDescribeInstanceHealth](#postdescribeinstancehealth) - Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.
* [postDescribeLoadBalancerAttributes](#postdescribeloadbalancerattributes) - Describes the attributes for the specified load balancer.
* [postDescribeLoadBalancerPolicies](#postdescribeloadbalancerpolicies) - <p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>
* [postDescribeLoadBalancerPolicyTypes](#postdescribeloadbalancerpolicytypes) - <p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>
* [postDescribeLoadBalancers](#postdescribeloadbalancers) - Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.
* [postDescribeTags](#postdescribetags) - Describes the tags associated with the specified load balancers.
* [postDetachLoadBalancerFromSubnets](#postdetachloadbalancerfromsubnets) - <p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>
* [postDisableAvailabilityZonesForLoadBalancer](#postdisableavailabilityzonesforloadbalancer) - <p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postEnableAvailabilityZonesForLoadBalancer](#postenableavailabilityzonesforloadbalancer) - <p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postModifyLoadBalancerAttributes](#postmodifyloadbalancerattributes) - <p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>
* [postRegisterInstancesWithLoadBalancer](#postregisterinstanceswithloadbalancer) - <p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postRemoveTags](#postremovetags) - Removes one or more tags from the specified load balancer.
* [postSetLoadBalancerListenerSSLCertificate](#postsetloadbalancerlistenersslcertificate) - <p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postSetLoadBalancerPoliciesForBackendServer](#postsetloadbalancerpoliciesforbackendserver) - <p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>
* [postSetLoadBalancerPoliciesOfListener](#postsetloadbalancerpoliciesoflistener) - <p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

## getApplySecurityGroupsToLoadBalancer

<p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerRequest;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerResponse;
import org.openapis.openapi.models.operations.GETApplySecurityGroupsToLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETApplySecurityGroupsToLoadBalancerRequest req = new GETApplySecurityGroupsToLoadBalancerRequest(GETApplySecurityGroupsToLoadBalancerActionEnum.APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER, "debitis",                 new String[]{{
                                add("delectus"),
                            }}, GETApplySecurityGroupsToLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            GETApplySecurityGroupsToLoadBalancerResponse res = sdk.sdk.getApplySecurityGroupsToLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAttachLoadBalancerToSubnets

<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerToSubnetsActionEnum;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerToSubnetsRequest;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerToSubnetsResponse;
import org.openapis.openapi.models.operations.GETAttachLoadBalancerToSubnetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAttachLoadBalancerToSubnetsRequest req = new GETAttachLoadBalancerToSubnetsRequest(GETAttachLoadBalancerToSubnetsActionEnum.ATTACH_LOAD_BALANCER_TO_SUBNETS, "nisi",                 new String[]{{
                                add("temporibus"),
                                add("ab"),
                                add("quis"),
                                add("veritatis"),
                            }}, GETAttachLoadBalancerToSubnetsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ipsam";
                xAmzDate = "repellendus";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "odit";
            }};            

            GETAttachLoadBalancerToSubnetsResponse res = sdk.sdk.getAttachLoadBalancerToSubnets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigureHealthCheck

<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETConfigureHealthCheckActionEnum;
import org.openapis.openapi.models.operations.GETConfigureHealthCheckHealthCheck;
import org.openapis.openapi.models.operations.GETConfigureHealthCheckRequest;
import org.openapis.openapi.models.operations.GETConfigureHealthCheckResponse;
import org.openapis.openapi.models.operations.GETConfigureHealthCheckVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETConfigureHealthCheckRequest req = new GETConfigureHealthCheckRequest(GETConfigureHealthCheckActionEnum.CONFIGURE_HEALTH_CHECK,                 new GETConfigureHealthCheckHealthCheck(870088L, 978619L, "molestiae", 799159L, 800911L);, "esse", GETConfigureHealthCheckVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "porro";
                xAmzCredential = "dolorum";
                xAmzDate = "dicta";
                xAmzSecurityToken = "nam";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "occaecati";
            }};            

            GETConfigureHealthCheckResponse res = sdk.sdk.getConfigureHealthCheck(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateAppCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateAppCookieStickinessPolicyActionEnum;
import org.openapis.openapi.models.operations.GETCreateAppCookieStickinessPolicyRequest;
import org.openapis.openapi.models.operations.GETCreateAppCookieStickinessPolicyResponse;
import org.openapis.openapi.models.operations.GETCreateAppCookieStickinessPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateAppCookieStickinessPolicyRequest req = new GETCreateAppCookieStickinessPolicyRequest(GETCreateAppCookieStickinessPolicyActionEnum.CREATE_APP_COOKIE_STICKINESS_POLICY, "deleniti", "hic", "optio", GETCreateAppCookieStickinessPolicyVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "beatae";
                xAmzCredential = "commodi";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "impedit";
            }};            

            GETCreateAppCookieStickinessPolicyResponse res = sdk.sdk.getCreateAppCookieStickinessPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateLBCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETCreateLBCookieStickinessPolicyActionEnum;
import org.openapis.openapi.models.operations.GETCreateLBCookieStickinessPolicyRequest;
import org.openapis.openapi.models.operations.GETCreateLBCookieStickinessPolicyResponse;
import org.openapis.openapi.models.operations.GETCreateLBCookieStickinessPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETCreateLBCookieStickinessPolicyRequest req = new GETCreateLBCookieStickinessPolicyRequest(GETCreateLBCookieStickinessPolicyActionEnum.CREATE_LB_COOKIE_STICKINESS_POLICY, "esse", "ipsum", GETCreateLBCookieStickinessPolicyVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                cookieExpirationPeriod = 568434L;
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            GETCreateLBCookieStickinessPolicyResponse res = sdk.sdk.getCreateLBCookieStickinessPolicy(req);

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

<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>

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
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteLoadBalancerRequest req = new GETDeleteLoadBalancerRequest(GETDeleteLoadBalancerActionEnum.DELETE_LOAD_BALANCER, "laboriosam", GETDeleteLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "fuga";
                xAmzDate = "in";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "iure";
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

## getDeleteLoadBalancerListeners

Deletes the specified listeners from the specified load balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerListenersActionEnum;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerListenersRequest;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerListenersResponse;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerListenersVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteLoadBalancerListenersRequest req = new GETDeleteLoadBalancerListenersRequest(GETDeleteLoadBalancerListenersActionEnum.DELETE_LOAD_BALANCER_LISTENERS, "quidem",                 new Long[]{{
                                add(60225L),
                            }}, GETDeleteLoadBalancerListenersVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "mollitia";
                xAmzDate = "laborum";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "corporis";
            }};            

            GETDeleteLoadBalancerListenersResponse res = sdk.sdk.getDeleteLoadBalancerListeners(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDeleteLoadBalancerPolicy

Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerPolicyActionEnum;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerPolicyRequest;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerPolicyResponse;
import org.openapis.openapi.models.operations.GETDeleteLoadBalancerPolicyVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteLoadBalancerPolicyRequest req = new GETDeleteLoadBalancerPolicyRequest(GETDeleteLoadBalancerPolicyActionEnum.DELETE_LOAD_BALANCER_POLICY, "nobis", "enim", GETDeleteLoadBalancerPolicyVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "minima";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "culpa";
            }};            

            GETDeleteLoadBalancerPolicyResponse res = sdk.sdk.getDeleteLoadBalancerPolicy(req);

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

<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

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
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeAccountLimitsRequest req = new GETDescribeAccountLimitsRequest(GETDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, GETDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                marker = "sapiente";
                pageSize = 102044L;
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "culpa";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "repellat";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "occaecati";
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

## getDescribeLoadBalancerAttributes

Describes the attributes for the specified load balancer.

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
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancerAttributesRequest req = new GETDescribeLoadBalancerAttributesRequest(GETDescribeLoadBalancerAttributesActionEnum.DESCRIBE_LOAD_BALANCER_ATTRIBUTES, "commodi", GETDescribeLoadBalancerAttributesVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
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

## getDescribeLoadBalancerPolicies

<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPoliciesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPoliciesRequest;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPoliciesResponse;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPoliciesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancerPoliciesRequest req = new GETDescribeLoadBalancerPoliciesRequest(GETDescribeLoadBalancerPoliciesActionEnum.DESCRIBE_LOAD_BALANCER_POLICIES, GETDescribeLoadBalancerPoliciesVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                loadBalancerName = "animi";
                policyNames = new String[]{{
                    add("odit"),
                    add("quo"),
                }};
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "ipsam";
                xAmzDate = "id";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "quasi";
            }};            

            GETDescribeLoadBalancerPoliciesResponse res = sdk.sdk.getDescribeLoadBalancerPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDescribeLoadBalancerPolicyTypes

<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPolicyTypesActionEnum;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPolicyTypesRequest;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPolicyTypesResponse;
import org.openapis.openapi.models.operations.GETDescribeLoadBalancerPolicyTypesVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancerPolicyTypesRequest req = new GETDescribeLoadBalancerPolicyTypesRequest(GETDescribeLoadBalancerPolicyTypesActionEnum.DESCRIBE_LOAD_BALANCER_POLICY_TYPES, GETDescribeLoadBalancerPolicyTypesVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                policyTypeNames = new String[]{{
                    add("laborum"),
                    add("quasi"),
                    add("reiciendis"),
                    add("voluptatibus"),
                }};
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "praesentium";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "voluptate";
            }};            

            GETDescribeLoadBalancerPolicyTypesResponse res = sdk.sdk.getDescribeLoadBalancerPolicyTypes(req);

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

Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.

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
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeLoadBalancersRequest req = new GETDescribeLoadBalancersRequest(GETDescribeLoadBalancersActionEnum.DESCRIBE_LOAD_BALANCERS, GETDescribeLoadBalancersVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                loadBalancerNames = new String[]{{
                    add("doloremque"),
                }};
                marker = "reprehenderit";
                pageSize = 282807L;
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "dolore";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "harum";
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

## getDescribeTags

Describes the tags associated with the specified load balancers.

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
                .setSecurity(new Security("enim") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDescribeTagsRequest req = new GETDescribeTagsRequest(GETDescribeTagsActionEnum.DESCRIBE_TAGS,                 new String[]{{
                                add("commodi"),
                                add("repudiandae"),
                                add("quae"),
                                add("ipsum"),
                            }}, GETDescribeTagsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "excepturi";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "modi";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "rem";
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

## getDetachLoadBalancerFromSubnets

<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerFromSubnetsActionEnum;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerFromSubnetsRequest;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerFromSubnetsResponse;
import org.openapis.openapi.models.operations.GETDetachLoadBalancerFromSubnetsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDetachLoadBalancerFromSubnetsRequest req = new GETDetachLoadBalancerFromSubnetsRequest(GETDetachLoadBalancerFromSubnetsActionEnum.DETACH_LOAD_BALANCER_FROM_SUBNETS, "quasi",                 new String[]{{
                                add("sint"),
                                add("veritatis"),
                                add("itaque"),
                                add("incidunt"),
                            }}, GETDetachLoadBalancerFromSubnetsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "consequatur";
                xAmzCredential = "est";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "distinctio";
            }};            

            GETDetachLoadBalancerFromSubnetsResponse res = sdk.sdk.getDetachLoadBalancerFromSubnets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDisableAvailabilityZonesForLoadBalancer

<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDisableAvailabilityZonesForLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.GETDisableAvailabilityZonesForLoadBalancerRequest;
import org.openapis.openapi.models.operations.GETDisableAvailabilityZonesForLoadBalancerResponse;
import org.openapis.openapi.models.operations.GETDisableAvailabilityZonesForLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDisableAvailabilityZonesForLoadBalancerRequest req = new GETDisableAvailabilityZonesForLoadBalancerRequest(GETDisableAvailabilityZonesForLoadBalancerActionEnum.DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER,                 new String[]{{
                                add("modi"),
                                add("qui"),
                            }}, "aliquid", GETDisableAvailabilityZonesForLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            GETDisableAvailabilityZonesForLoadBalancerResponse res = sdk.sdk.getDisableAvailabilityZonesForLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEnableAvailabilityZonesForLoadBalancer

<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETEnableAvailabilityZonesForLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.GETEnableAvailabilityZonesForLoadBalancerRequest;
import org.openapis.openapi.models.operations.GETEnableAvailabilityZonesForLoadBalancerResponse;
import org.openapis.openapi.models.operations.GETEnableAvailabilityZonesForLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETEnableAvailabilityZonesForLoadBalancerRequest req = new GETEnableAvailabilityZonesForLoadBalancerRequest(GETEnableAvailabilityZonesForLoadBalancerActionEnum.ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER,                 new String[]{{
                                add("excepturi"),
                                add("tempora"),
                                add("facilis"),
                            }}, "tempore", GETEnableAvailabilityZonesForLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            GETEnableAvailabilityZonesForLoadBalancerResponse res = sdk.sdk.getEnableAvailabilityZonesForLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetLoadBalancerListenerSSLCertificate

<p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetLoadBalancerListenerSSLCertificateActionEnum;
import org.openapis.openapi.models.operations.GETSetLoadBalancerListenerSSLCertificateRequest;
import org.openapis.openapi.models.operations.GETSetLoadBalancerListenerSSLCertificateResponse;
import org.openapis.openapi.models.operations.GETSetLoadBalancerListenerSSLCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetLoadBalancerListenerSSLCertificateRequest req = new GETSetLoadBalancerListenerSSLCertificateRequest(GETSetLoadBalancerListenerSSLCertificateActionEnum.SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE, "necessitatibus", 572252L, "officia", GETSetLoadBalancerListenerSSLCertificateVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            GETSetLoadBalancerListenerSSLCertificateResponse res = sdk.sdk.getSetLoadBalancerListenerSSLCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetLoadBalancerPoliciesForBackendServer

<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesForBackendServerActionEnum;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesForBackendServerRequest;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesForBackendServerResponse;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesForBackendServerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetLoadBalancerPoliciesForBackendServerRequest req = new GETSetLoadBalancerPoliciesForBackendServerRequest(GETSetLoadBalancerPoliciesForBackendServerActionEnum.SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER, 699479L, "dicta",                 new String[]{{
                                add("cumque"),
                                add("facere"),
                            }}, GETSetLoadBalancerPoliciesForBackendServerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laborum";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "non";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "enim";
            }};            

            GETSetLoadBalancerPoliciesForBackendServerResponse res = sdk.sdk.getSetLoadBalancerPoliciesForBackendServer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSetLoadBalancerPoliciesOfListener

<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesOfListenerActionEnum;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesOfListenerRequest;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesOfListenerResponse;
import org.openapis.openapi.models.operations.GETSetLoadBalancerPoliciesOfListenerVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSetLoadBalancerPoliciesOfListenerRequest req = new GETSetLoadBalancerPoliciesOfListenerRequest(GETSetLoadBalancerPoliciesOfListenerActionEnum.SET_LOAD_BALANCER_POLICIES_OF_LISTENER, "delectus", 692532L,                 new String[]{{
                                add("nam"),
                                add("id"),
                                add("blanditiis"),
                            }}, GETSetLoadBalancerPoliciesOfListenerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            GETSetLoadBalancerPoliciesOfListenerResponse res = sdk.sdk.getSetLoadBalancerPoliciesOfListener(req);

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

<p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

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
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAddTagsRequest req = new POSTAddTagsRequest(POSTAddTagsActionEnum.ADD_TAGS, POSTAddTagsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "molestiae".getBytes();
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "magnam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "id";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "labore";
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

## postApplySecurityGroupsToLoadBalancer

<p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTApplySecurityGroupsToLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTApplySecurityGroupsToLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTApplySecurityGroupsToLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTApplySecurityGroupsToLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.ApplySecurityGroupsToLoadBalancerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTApplySecurityGroupsToLoadBalancerRequest req = new POSTApplySecurityGroupsToLoadBalancerRequest(POSTApplySecurityGroupsToLoadBalancerActionEnum.APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER, POSTApplySecurityGroupsToLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "natus".getBytes();
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "vero";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "et";
            }};            

            POSTApplySecurityGroupsToLoadBalancerResponse res = sdk.sdk.postApplySecurityGroupsToLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAttachLoadBalancerToSubnets

<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerToSubnetsActionEnum;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerToSubnetsRequest;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerToSubnetsResponse;
import org.openapis.openapi.models.operations.POSTAttachLoadBalancerToSubnetsVersionEnum;
import org.openapis.openapi.models.shared.AttachLoadBalancerToSubnetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTAttachLoadBalancerToSubnetsRequest req = new POSTAttachLoadBalancerToSubnetsRequest(POSTAttachLoadBalancerToSubnetsActionEnum.ATTACH_LOAD_BALANCER_TO_SUBNETS, POSTAttachLoadBalancerToSubnetsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "ullam".getBytes();
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "quos";
                xAmzCredential = "sint";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "mollitia";
            }};            

            POSTAttachLoadBalancerToSubnetsResponse res = sdk.sdk.postAttachLoadBalancerToSubnets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigureHealthCheck

<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTConfigureHealthCheckActionEnum;
import org.openapis.openapi.models.operations.POSTConfigureHealthCheckRequest;
import org.openapis.openapi.models.operations.POSTConfigureHealthCheckResponse;
import org.openapis.openapi.models.operations.POSTConfigureHealthCheckVersionEnum;
import org.openapis.openapi.models.shared.ConfigureHealthCheckInput;
import org.openapis.openapi.models.shared.HealthCheck;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTConfigureHealthCheckRequest req = new POSTConfigureHealthCheckRequest(POSTConfigureHealthCheckActionEnum.CONFIGURE_HEALTH_CHECK, POSTConfigureHealthCheckVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "eum".getBytes();
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "odit";
                xAmzDate = "nemo";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "doloribus";
            }};            

            POSTConfigureHealthCheckResponse res = sdk.sdk.postConfigureHealthCheck(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateAppCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateAppCookieStickinessPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTCreateAppCookieStickinessPolicyRequest;
import org.openapis.openapi.models.operations.POSTCreateAppCookieStickinessPolicyResponse;
import org.openapis.openapi.models.operations.POSTCreateAppCookieStickinessPolicyVersionEnum;
import org.openapis.openapi.models.shared.CreateAppCookieStickinessPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateAppCookieStickinessPolicyRequest req = new POSTCreateAppCookieStickinessPolicyRequest(POSTCreateAppCookieStickinessPolicyActionEnum.CREATE_APP_COOKIE_STICKINESS_POLICY, POSTCreateAppCookieStickinessPolicyVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "eius".getBytes();
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "facilis";
                xAmzDate = "in";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "repudiandae";
            }};            

            POSTCreateAppCookieStickinessPolicyResponse res = sdk.sdk.postCreateAppCookieStickinessPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateLBCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateLBCookieStickinessPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTCreateLBCookieStickinessPolicyRequest;
import org.openapis.openapi.models.operations.POSTCreateLBCookieStickinessPolicyResponse;
import org.openapis.openapi.models.operations.POSTCreateLBCookieStickinessPolicyVersionEnum;
import org.openapis.openapi.models.shared.CreateLBCookieStickinessPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateLBCookieStickinessPolicyRequest req = new POSTCreateLBCookieStickinessPolicyRequest(POSTCreateLBCookieStickinessPolicyActionEnum.CREATE_LB_COOKIE_STICKINESS_POLICY, POSTCreateLBCookieStickinessPolicyVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "expedita".getBytes();
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            POSTCreateLBCookieStickinessPolicyResponse res = sdk.sdk.postCreateLBCookieStickinessPolicy(req);

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

<p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.CreateAccessPointInput;
import org.openapis.openapi.models.shared.Listener;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateLoadBalancerRequest req = new POSTCreateLoadBalancerRequest(POSTCreateLoadBalancerActionEnum.CREATE_LOAD_BALANCER, POSTCreateLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "praesentium".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "magni";
                xAmzCredential = "sunt";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "maxime";
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

## postCreateLoadBalancerListeners

<p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerListenersActionEnum;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerListenersRequest;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerListenersResponse;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerListenersVersionEnum;
import org.openapis.openapi.models.shared.CreateLoadBalancerListenerInput;
import org.openapis.openapi.models.shared.Listener;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateLoadBalancerListenersRequest req = new POSTCreateLoadBalancerListenersRequest(POSTCreateLoadBalancerListenersActionEnum.CREATE_LOAD_BALANCER_LISTENERS, POSTCreateLoadBalancerListenersVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "excepturi".getBytes();
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "ea";
                xAmzCredential = "accusantium";
                xAmzDate = "ab";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "ipsam";
            }};            

            POSTCreateLoadBalancerListenersResponse res = sdk.sdk.postCreateLoadBalancerListeners(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCreateLoadBalancerPolicy

<p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerPolicyRequest;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerPolicyResponse;
import org.openapis.openapi.models.operations.POSTCreateLoadBalancerPolicyVersionEnum;
import org.openapis.openapi.models.shared.CreateLoadBalancerPolicyInput;
import org.openapis.openapi.models.shared.PolicyAttribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTCreateLoadBalancerPolicyRequest req = new POSTCreateLoadBalancerPolicyRequest(POSTCreateLoadBalancerPolicyActionEnum.CREATE_LOAD_BALANCER_POLICY, POSTCreateLoadBalancerPolicyVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "autem".getBytes();
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "pariatur";
                xAmzDate = "nemo";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "fugiat";
            }};            

            POSTCreateLoadBalancerPolicyResponse res = sdk.sdk.postCreateLoadBalancerPolicy(req);

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

<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.DeleteAccessPointInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteLoadBalancerRequest req = new POSTDeleteLoadBalancerRequest(POSTDeleteLoadBalancerActionEnum.DELETE_LOAD_BALANCER, POSTDeleteLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "aut".getBytes();
                xAmzAlgorithm = "cumque";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "hic";
                xAmzDate = "libero";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "quis";
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

## postDeleteLoadBalancerListeners

Deletes the specified listeners from the specified load balancer.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerListenersActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerListenersRequest;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerListenersResponse;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerListenersVersionEnum;
import org.openapis.openapi.models.shared.DeleteLoadBalancerListenerInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteLoadBalancerListenersRequest req = new POSTDeleteLoadBalancerListenersRequest(POSTDeleteLoadBalancerListenersActionEnum.DELETE_LOAD_BALANCER_LISTENERS, POSTDeleteLoadBalancerListenersVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "dignissimos".getBytes();
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            POSTDeleteLoadBalancerListenersResponse res = sdk.sdk.postDeleteLoadBalancerListeners(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeleteLoadBalancerPolicy

Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerPolicyActionEnum;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerPolicyRequest;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerPolicyResponse;
import org.openapis.openapi.models.operations.POSTDeleteLoadBalancerPolicyVersionEnum;
import org.openapis.openapi.models.shared.DeleteLoadBalancerPolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeleteLoadBalancerPolicyRequest req = new POSTDeleteLoadBalancerPolicyRequest(POSTDeleteLoadBalancerPolicyActionEnum.DELETE_LOAD_BALANCER_POLICY, POSTDeleteLoadBalancerPolicyVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "dolor".getBytes();
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "nostrum";
                xAmzCredential = "hic";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            POSTDeleteLoadBalancerPolicyResponse res = sdk.sdk.postDeleteLoadBalancerPolicy(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeregisterInstancesFromLoadBalancer

<p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDeregisterInstancesFromLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTDeregisterInstancesFromLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTDeregisterInstancesFromLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTDeregisterInstancesFromLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.DeregisterEndPointsInput;
import org.openapis.openapi.models.shared.Instance;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDeregisterInstancesFromLoadBalancerRequest req = new POSTDeregisterInstancesFromLoadBalancerRequest(POSTDeregisterInstancesFromLoadBalancerActionEnum.DEREGISTER_INSTANCES_FROM_LOAD_BALANCER, POSTDeregisterInstancesFromLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "porro".getBytes();
                xAmzAlgorithm = "consequuntur";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "error";
                xAmzDate = "eaque";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "rerum";
                xAmzSignedHeaders = "adipisci";
            }};            

            POSTDeregisterInstancesFromLoadBalancerResponse res = sdk.sdk.postDeregisterInstancesFromLoadBalancer(req);

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

<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

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
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeAccountLimitsRequest req = new POSTDescribeAccountLimitsRequest(POSTDescribeAccountLimitsActionEnum.DESCRIBE_ACCOUNT_LIMITS, POSTDescribeAccountLimitsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "earum".getBytes();
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
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

## postDescribeInstanceHealth

Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeInstanceHealthActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeInstanceHealthRequest;
import org.openapis.openapi.models.operations.POSTDescribeInstanceHealthResponse;
import org.openapis.openapi.models.operations.POSTDescribeInstanceHealthVersionEnum;
import org.openapis.openapi.models.shared.DescribeEndPointStateInput;
import org.openapis.openapi.models.shared.Instance;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeInstanceHealthRequest req = new POSTDescribeInstanceHealthRequest(POSTDescribeInstanceHealthActionEnum.DESCRIBE_INSTANCE_HEALTH, POSTDescribeInstanceHealthVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "delectus".getBytes();
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "quos";
                xAmzCredential = "aliquid";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "qui";
            }};            

            POSTDescribeInstanceHealthResponse res = sdk.sdk.postDescribeInstanceHealth(req);

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

Describes the attributes for the specified load balancer.

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
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancerAttributesRequest req = new POSTDescribeLoadBalancerAttributesRequest(POSTDescribeLoadBalancerAttributesActionEnum.DESCRIBE_LOAD_BALANCER_ATTRIBUTES, POSTDescribeLoadBalancerAttributesVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "hic".getBytes();
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "voluptate";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "dolorum";
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

## postDescribeLoadBalancerPolicies

<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPoliciesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPoliciesRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPoliciesResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPoliciesVersionEnum;
import org.openapis.openapi.models.shared.DescribeLoadBalancerPoliciesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancerPoliciesRequest req = new POSTDescribeLoadBalancerPoliciesRequest(POSTDescribeLoadBalancerPoliciesActionEnum.DESCRIBE_LOAD_BALANCER_POLICIES, POSTDescribeLoadBalancerPoliciesVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "veritatis".getBytes();
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "ipsa";
                xAmzCredential = "iure";
                xAmzDate = "odio";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quidem";
            }};            

            POSTDescribeLoadBalancerPoliciesResponse res = sdk.sdk.postDescribeLoadBalancerPolicies(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDescribeLoadBalancerPolicyTypes

<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPolicyTypesActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPolicyTypesRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPolicyTypesResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancerPolicyTypesVersionEnum;
import org.openapis.openapi.models.shared.DescribeLoadBalancerPolicyTypesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancerPolicyTypesRequest req = new POSTDescribeLoadBalancerPolicyTypesRequest(POSTDescribeLoadBalancerPolicyTypesActionEnum.DESCRIBE_LOAD_BALANCER_POLICY_TYPES, POSTDescribeLoadBalancerPolicyTypesVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "voluptas".getBytes();
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "eos";
                xAmzCredential = "atque";
                xAmzDate = "sit";
                xAmzSecurityToken = "fugiat";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "soluta";
            }};            

            POSTDescribeLoadBalancerPolicyTypesResponse res = sdk.sdk.postDescribeLoadBalancerPolicyTypes(req);

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

Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersActionEnum;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersRequest;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersResponse;
import org.openapis.openapi.models.operations.POSTDescribeLoadBalancersVersionEnum;
import org.openapis.openapi.models.shared.DescribeAccessPointsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDescribeLoadBalancersRequest req = new POSTDescribeLoadBalancersRequest(POSTDescribeLoadBalancersActionEnum.DESCRIBE_LOAD_BALANCERS, POSTDescribeLoadBalancersVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                marker = "iusto";
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "omnis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nihil";
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

## postDescribeTags

Describes the tags associated with the specified load balancers.

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

            POSTDescribeTagsRequest req = new POSTDescribeTagsRequest(POSTDescribeTagsActionEnum.DESCRIBE_TAGS, POSTDescribeTagsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "voluptate".getBytes();
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
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

## postDetachLoadBalancerFromSubnets

<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerFromSubnetsActionEnum;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerFromSubnetsRequest;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerFromSubnetsResponse;
import org.openapis.openapi.models.operations.POSTDetachLoadBalancerFromSubnetsVersionEnum;
import org.openapis.openapi.models.shared.DetachLoadBalancerFromSubnetsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDetachLoadBalancerFromSubnetsRequest req = new POSTDetachLoadBalancerFromSubnetsRequest(POSTDetachLoadBalancerFromSubnetsActionEnum.DETACH_LOAD_BALANCER_FROM_SUBNETS, POSTDetachLoadBalancerFromSubnetsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "ad".getBytes();
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "deserunt";
                xAmzDate = "provident";
                xAmzSecurityToken = "minima";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "totam";
            }};            

            POSTDetachLoadBalancerFromSubnetsResponse res = sdk.sdk.postDetachLoadBalancerFromSubnets(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDisableAvailabilityZonesForLoadBalancer

<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTDisableAvailabilityZonesForLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTDisableAvailabilityZonesForLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTDisableAvailabilityZonesForLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTDisableAvailabilityZonesForLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.RemoveAvailabilityZonesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTDisableAvailabilityZonesForLoadBalancerRequest req = new POSTDisableAvailabilityZonesForLoadBalancerRequest(POSTDisableAvailabilityZonesForLoadBalancerActionEnum.DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER, POSTDisableAvailabilityZonesForLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "alias".getBytes();
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "tempora";
                xAmzDate = "vel";
                xAmzSecurityToken = "quod";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "qui";
            }};            

            POSTDisableAvailabilityZonesForLoadBalancerResponse res = sdk.sdk.postDisableAvailabilityZonesForLoadBalancer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postEnableAvailabilityZonesForLoadBalancer

<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTEnableAvailabilityZonesForLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTEnableAvailabilityZonesForLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTEnableAvailabilityZonesForLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTEnableAvailabilityZonesForLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.AddAvailabilityZonesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTEnableAvailabilityZonesForLoadBalancerRequest req = new POSTEnableAvailabilityZonesForLoadBalancerRequest(POSTEnableAvailabilityZonesForLoadBalancerActionEnum.ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER, POSTEnableAvailabilityZonesForLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "a".getBytes();
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "harum";
                xAmzCredential = "iusto";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "amet";
            }};            

            POSTEnableAvailabilityZonesForLoadBalancerResponse res = sdk.sdk.postEnableAvailabilityZonesForLoadBalancer(req);

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

<p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesActionEnum;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesRequest;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesResponse;
import org.openapis.openapi.models.operations.POSTModifyLoadBalancerAttributesVersionEnum;
import org.openapis.openapi.models.shared.AccessLog;
import org.openapis.openapi.models.shared.AdditionalAttribute;
import org.openapis.openapi.models.shared.ConnectionDraining;
import org.openapis.openapi.models.shared.ConnectionSettings;
import org.openapis.openapi.models.shared.CrossZoneLoadBalancing;
import org.openapis.openapi.models.shared.LoadBalancerAttributes;
import org.openapis.openapi.models.shared.ModifyLoadBalancerAttributesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTModifyLoadBalancerAttributesRequest req = new POSTModifyLoadBalancerAttributesRequest(POSTModifyLoadBalancerAttributesActionEnum.MODIFY_LOAD_BALANCER_ATTRIBUTES, POSTModifyLoadBalancerAttributesVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "accusamus".getBytes();
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "enim";
                xAmzCredential = "dolorem";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "totam";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "sit";
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

## postRegisterInstancesWithLoadBalancer

<p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTRegisterInstancesWithLoadBalancerActionEnum;
import org.openapis.openapi.models.operations.POSTRegisterInstancesWithLoadBalancerRequest;
import org.openapis.openapi.models.operations.POSTRegisterInstancesWithLoadBalancerResponse;
import org.openapis.openapi.models.operations.POSTRegisterInstancesWithLoadBalancerVersionEnum;
import org.openapis.openapi.models.shared.Instance;
import org.openapis.openapi.models.shared.RegisterEndPointsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRegisterInstancesWithLoadBalancerRequest req = new POSTRegisterInstancesWithLoadBalancerRequest(POSTRegisterInstancesWithLoadBalancerActionEnum.REGISTER_INSTANCES_WITH_LOAD_BALANCER, POSTRegisterInstancesWithLoadBalancerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "vel";
                xAmzCredential = "libero";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "ipsum";
            }};            

            POSTRegisterInstancesWithLoadBalancerResponse res = sdk.sdk.postRegisterInstancesWithLoadBalancer(req);

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

Removes one or more tags from the specified load balancer.

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
import org.openapis.openapi.models.shared.TagKeyOnly;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTRemoveTagsRequest req = new POSTRemoveTagsRequest(POSTRemoveTagsActionEnum.REMOVE_TAGS, POSTRemoveTagsVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "qui".getBytes();
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "pariatur";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "laborum";
                xAmzSignedHeaders = "totam";
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

## postSetLoadBalancerListenerSSLCertificate

<p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerListenerSSLCertificateActionEnum;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerListenerSSLCertificateRequest;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerListenerSSLCertificateResponse;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerListenerSSLCertificateVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetLoadBalancerListenerSSLCertificateInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetLoadBalancerListenerSSLCertificateRequest req = new POSTSetLoadBalancerListenerSSLCertificateRequest(POSTSetLoadBalancerListenerSSLCertificateActionEnum.SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE, POSTSetLoadBalancerListenerSSLCertificateVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "aspernatur".getBytes();
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "facilis";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "quam";
                xAmzSignature = "molestias";
                xAmzSignedHeaders = "temporibus";
            }};            

            POSTSetLoadBalancerListenerSSLCertificateResponse res = sdk.sdk.postSetLoadBalancerListenerSSLCertificate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetLoadBalancerPoliciesForBackendServer

<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesForBackendServerActionEnum;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesForBackendServerRequest;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesForBackendServerResponse;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesForBackendServerVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetLoadBalancerPoliciesForBackendServerInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetLoadBalancerPoliciesForBackendServerRequest req = new POSTSetLoadBalancerPoliciesForBackendServerRequest(POSTSetLoadBalancerPoliciesForBackendServerActionEnum.SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER, POSTSetLoadBalancerPoliciesForBackendServerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "neque".getBytes();
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "magni";
                xAmzCredential = "odio";
                xAmzDate = "sunt";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "hic";
            }};            

            POSTSetLoadBalancerPoliciesForBackendServerResponse res = sdk.sdk.postSetLoadBalancerPoliciesForBackendServer(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetLoadBalancerPoliciesOfListener

<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesOfListenerActionEnum;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesOfListenerRequest;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesOfListenerResponse;
import org.openapis.openapi.models.operations.POSTSetLoadBalancerPoliciesOfListenerVersionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetLoadBalancerPoliciesOfListenerInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            POSTSetLoadBalancerPoliciesOfListenerRequest req = new POSTSetLoadBalancerPoliciesOfListenerRequest(POSTSetLoadBalancerPoliciesOfListenerActionEnum.SET_LOAD_BALANCER_POLICIES_OF_LISTENER, POSTSetLoadBalancerPoliciesOfListenerVersionEnum.TWO_THOUSAND_AND_TWELVE0601) {{
                requestBody = "cumque".getBytes();
                xAmzAlgorithm = "soluta";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "et";
                xAmzDate = "saepe";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "nobis";
            }};            

            POSTSetLoadBalancerPoliciesOfListenerResponse res = sdk.sdk.postSetLoadBalancerPoliciesOfListener(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
