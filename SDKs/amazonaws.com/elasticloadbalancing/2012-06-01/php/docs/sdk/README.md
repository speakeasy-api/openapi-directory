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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETApplySecurityGroupsToLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETApplySecurityGroupsToLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETApplySecurityGroupsToLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETApplySecurityGroupsToLoadBalancerRequest();
    $request->action = GETApplySecurityGroupsToLoadBalancerActionEnum::APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER;
    $request->loadBalancerName = 'iure';
    $request->securityGroups = [
        'debitis',
        'ipsa',
    ];
    $request->version = GETApplySecurityGroupsToLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';

    $response = $sdk->sdk->getApplySecurityGroupsToLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAttachLoadBalancerToSubnets

<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancerToSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancerToSubnetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAttachLoadBalancerToSubnetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAttachLoadBalancerToSubnetsRequest();
    $request->action = GETAttachLoadBalancerToSubnetsActionEnum::ATTACH_LOAD_BALANCER_TO_SUBNETS;
    $request->loadBalancerName = 'iusto';
    $request->subnets = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->version = GETAttachLoadBalancerToSubnetsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';

    $response = $sdk->sdk->getAttachLoadBalancerToSubnets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConfigureHealthCheck

<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETConfigureHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETConfigureHealthCheckActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETConfigureHealthCheckHealthCheck;
use \OpenAPI\OpenAPI\Models\Operations\GETConfigureHealthCheckVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETConfigureHealthCheckRequest();
    $request->action = GETConfigureHealthCheckActionEnum::CONFIGURE_HEALTH_CHECK;
    $request->healthCheck = new GETConfigureHealthCheckHealthCheck();
    $request->healthCheck->healthyThreshold = 957156;
    $request->healthCheck->interval = 778157;
    $request->healthCheck->target = 'odit';
    $request->healthCheck->timeout = 870013;
    $request->healthCheck->unhealthyThreshold = 870088;
    $request->loadBalancerName = 'maiores';
    $request->version = GETConfigureHealthCheckVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getConfigureHealthCheck($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateAppCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAppCookieStickinessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAppCookieStickinessPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateAppCookieStickinessPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateAppCookieStickinessPolicyRequest();
    $request->action = GETCreateAppCookieStickinessPolicyActionEnum::CREATE_APP_COOKIE_STICKINESS_POLICY;
    $request->cookieName = 'dicta';
    $request->loadBalancerName = 'nam';
    $request->policyName = 'officia';
    $request->version = GETCreateAppCookieStickinessPolicyVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';

    $response = $sdk->sdk->getCreateAppCookieStickinessPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCreateLBCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateLBCookieStickinessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateLBCookieStickinessPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETCreateLBCookieStickinessPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETCreateLBCookieStickinessPolicyRequest();
    $request->action = GETCreateLBCookieStickinessPolicyActionEnum::CREATE_LB_COOKIE_STICKINESS_POLICY;
    $request->cookieExpirationPeriod = 414662;
    $request->loadBalancerName = 'molestiae';
    $request->policyName = 'modi';
    $request->version = GETCreateLBCookieStickinessPolicyVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->getCreateLBCookieStickinessPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteLoadBalancer

<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>

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
    $request->loadBalancerName = 'perferendis';
    $request->version = GETDeleteLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->getDeleteLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteLoadBalancerListeners

Deletes the specified listeners from the specified load balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerListenersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerListenersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerListenersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteLoadBalancerListenersRequest();
    $request->action = GETDeleteLoadBalancerListenersActionEnum::DELETE_LOAD_BALANCER_LISTENERS;
    $request->loadBalancerName = 'hic';
    $request->loadBalancerPorts = [
        681820,
        449950,
        359508,
        613064,
    ];
    $request->version = GETDeleteLoadBalancerListenersVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->getDeleteLoadBalancerListeners($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeleteLoadBalancerPolicy

Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDeleteLoadBalancerPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDeleteLoadBalancerPolicyRequest();
    $request->action = GETDeleteLoadBalancerPolicyActionEnum::DELETE_LOAD_BALANCER_POLICY;
    $request->loadBalancerName = 'mollitia';
    $request->policyName = 'laborum';
    $request->version = GETDeleteLoadBalancerPolicyVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->getDeleteLoadBalancerPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeAccountLimits

<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

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
    $request->marker = 'nemo';
    $request->pageSize = 325047;
    $request->version = GETDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->getDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancerAttributes

Describes the attributes for the specified load balancer.

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
    $request->loadBalancerName = 'mollitia';
    $request->version = GETDescribeLoadBalancerAttributesVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'repellat';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'numquam';

    $response = $sdk->sdk->getDescribeLoadBalancerAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancerPolicies

<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLoadBalancerPoliciesRequest();
    $request->action = GETDescribeLoadBalancerPoliciesActionEnum::DESCRIBE_LOAD_BALANCER_POLICIES;
    $request->loadBalancerName = 'commodi';
    $request->policyNames = [
        'molestiae',
        'velit',
    ];
    $request->version = GETDescribeLoadBalancerPoliciesVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDescribeLoadBalancerPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancerPolicyTypes

<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerPolicyTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerPolicyTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDescribeLoadBalancerPolicyTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDescribeLoadBalancerPolicyTypesRequest();
    $request->action = GETDescribeLoadBalancerPolicyTypesActionEnum::DESCRIBE_LOAD_BALANCER_POLICY_TYPES;
    $request->policyTypeNames = [
        'quo',
    ];
    $request->version = GETDescribeLoadBalancerPolicyTypesVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';

    $response = $sdk->sdk->getDescribeLoadBalancerPolicyTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeLoadBalancers

Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.

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
    $request->loadBalancerNames = [
        'temporibus',
        'laborum',
        'quasi',
    ];
    $request->marker = 'reiciendis';
    $request->pageSize = 976460;
    $request->version = GETDescribeLoadBalancersVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'voluptate';

    $response = $sdk->sdk->getDescribeLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDescribeTags

Describes the tags associated with the specified load balancers.

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
    $request->loadBalancerNames = [
        'perferendis',
        'doloremque',
        'reprehenderit',
    ];
    $request->version = GETDescribeTagsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->getDescribeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDetachLoadBalancerFromSubnets

<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancerFromSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancerFromSubnetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDetachLoadBalancerFromSubnetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDetachLoadBalancerFromSubnetsRequest();
    $request->action = GETDetachLoadBalancerFromSubnetsActionEnum::DETACH_LOAD_BALANCER_FROM_SUBNETS;
    $request->loadBalancerName = 'harum';
    $request->subnets = [
        'accusamus',
        'commodi',
    ];
    $request->version = GETDetachLoadBalancerFromSubnetsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';

    $response = $sdk->sdk->getDetachLoadBalancerFromSubnets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDisableAvailabilityZonesForLoadBalancer

<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableAvailabilityZonesForLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableAvailabilityZonesForLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETDisableAvailabilityZonesForLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETDisableAvailabilityZonesForLoadBalancerRequest();
    $request->action = GETDisableAvailabilityZonesForLoadBalancerActionEnum::DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER;
    $request->availabilityZones = [
        'praesentium',
        'rem',
    ];
    $request->loadBalancerName = 'voluptates';
    $request->version = GETDisableAvailabilityZonesForLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->getDisableAvailabilityZonesForLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEnableAvailabilityZonesForLoadBalancer

<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableAvailabilityZonesForLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableAvailabilityZonesForLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETEnableAvailabilityZonesForLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETEnableAvailabilityZonesForLoadBalancerRequest();
    $request->action = GETEnableAvailabilityZonesForLoadBalancerActionEnum::ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER;
    $request->availabilityZones = [
        'est',
    ];
    $request->loadBalancerName = 'quibusdam';
    $request->version = GETEnableAvailabilityZonesForLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getEnableAvailabilityZonesForLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetLoadBalancerListenerSSLCertificate

<p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerListenerSSLCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerListenerSSLCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerListenerSSLCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetLoadBalancerListenerSSLCertificateRequest();
    $request->action = GETSetLoadBalancerListenerSSLCertificateActionEnum::SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE;
    $request->loadBalancerName = 'aliquid';
    $request->loadBalancerPort = 586513;
    $request->sslCertificateId = 'quos';
    $request->version = GETSetLoadBalancerListenerSSLCertificateVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'assumenda';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->getSetLoadBalancerListenerSSLCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetLoadBalancerPoliciesForBackendServer

<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerPoliciesForBackendServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerPoliciesForBackendServerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerPoliciesForBackendServerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetLoadBalancerPoliciesForBackendServerRequest();
    $request->action = GETSetLoadBalancerPoliciesForBackendServerActionEnum::SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER;
    $request->instancePort = 569618;
    $request->loadBalancerName = 'tempora';
    $request->policyNames = [
        'tempore',
        'labore',
        'delectus',
    ];
    $request->version = GETSetLoadBalancerPoliciesForBackendServerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->getSetLoadBalancerPoliciesForBackendServer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSetLoadBalancerPoliciesOfListener

<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerPoliciesOfListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerPoliciesOfListenerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETSetLoadBalancerPoliciesOfListenerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETSetLoadBalancerPoliciesOfListenerRequest();
    $request->action = GETSetLoadBalancerPoliciesOfListenerActionEnum::SET_LOAD_BALANCER_POLICIES_OF_LISTENER;
    $request->loadBalancerName = 'sint';
    $request->loadBalancerPort = 638921;
    $request->policyNames = [
        'debitis',
    ];
    $request->version = GETSetLoadBalancerPoliciesOfListenerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';

    $response = $sdk->sdk->getSetLoadBalancerPoliciesOfListener($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAddTags

<p>Adds the specified tags to the specified load balancer. Each load balancer can have a maximum of 10 tags.</p> <p>Each tag consists of a key and an optional value. If a tag with the same key is already associated with the load balancer, <code>AddTags</code> updates its value.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/add-remove-tags.html">Tag Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

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
    $request->requestBody = 'dicta';
    $request->version = POSTAddTagsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postAddTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postApplySecurityGroupsToLoadBalancer

<p>Associates one or more security groups with your load balancer in a virtual private cloud (VPC). The specified security groups override the previously associated security groups.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-security-groups.html#elb-vpc-security-groups">Security Groups for Load Balancers in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplySecurityGroupsToLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplySecurityGroupsToLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTApplySecurityGroupsToLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTApplySecurityGroupsToLoadBalancerRequest();
    $request->action = POSTApplySecurityGroupsToLoadBalancerActionEnum::APPLY_SECURITY_GROUPS_TO_LOAD_BALANCER;
    $request->requestBody = 'non';
    $request->version = POSTApplySecurityGroupsToLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';

    $response = $sdk->sdk->postApplySecurityGroupsToLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAttachLoadBalancerToSubnets

<p>Adds one or more subnets to the set of configured subnets for the specified load balancer.</p> <p>The load balancer evenly distributes requests across all registered subnets. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-manage-subnets.html">Add or Remove Subnets for Your Load Balancer in a VPC</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancerToSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancerToSubnetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTAttachLoadBalancerToSubnetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTAttachLoadBalancerToSubnetsRequest();
    $request->action = POSTAttachLoadBalancerToSubnetsActionEnum::ATTACH_LOAD_BALANCER_TO_SUBNETS;
    $request->requestBody = 'id';
    $request->version = POSTAttachLoadBalancerToSubnetsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->postAttachLoadBalancerToSubnets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postConfigureHealthCheck

<p>Specifies the health check settings to use when evaluating the health state of your EC2 instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-healthchecks.html">Configure Health Checks for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTConfigureHealthCheckRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTConfigureHealthCheckActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTConfigureHealthCheckVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTConfigureHealthCheckRequest();
    $request->action = POSTConfigureHealthCheckActionEnum::CONFIGURE_HEALTH_CHECK;
    $request->requestBody = 'natus';
    $request->version = POSTConfigureHealthCheckVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';

    $response = $sdk->sdk->postConfigureHealthCheck($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateAppCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes that follow that of an application-generated cookie. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>This policy is similar to the policy created by <a>CreateLBCookieStickinessPolicy</a>, except that the lifetime of the special Elastic Load Balancing cookie, <code>AWSELB</code>, follows the lifetime of the application-generated cookie specified in the policy configuration. The load balancer only inserts a new stickiness cookie when the application response includes a new application cookie.</p> <p>If the application cookie is explicitly removed or expires, the session stops being sticky until a new application cookie is issued.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAppCookieStickinessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAppCookieStickinessPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateAppCookieStickinessPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateAppCookieStickinessPolicyRequest();
    $request->action = POSTCreateAppCookieStickinessPolicyActionEnum::CREATE_APP_COOKIE_STICKINESS_POLICY;
    $request->requestBody = 'labore';
    $request->version = POSTCreateAppCookieStickinessPolicyVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';

    $response = $sdk->sdk->postCreateAppCookieStickinessPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateLBCookieStickinessPolicy

<p>Generates a stickiness policy with sticky session lifetimes controlled by the lifetime of the browser (user-agent) or a specified expiration period. This policy can be associated only with HTTP/HTTPS listeners.</p> <p>When a load balancer implements this policy, the load balancer uses a special cookie to track the instance for each request. When the load balancer receives a request, it first checks to see if this cookie is present in the request. If so, the load balancer sends the request to the application server specified in the cookie. If not, the load balancer sends the request to a server that is chosen based on the existing load-balancing algorithm.</p> <p>A cookie is inserted into the response for binding subsequent requests from the same user to that server. The validity of the cookie is based on the cookie expiration time, which is specified in the policy configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLBCookieStickinessPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLBCookieStickinessPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLBCookieStickinessPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateLBCookieStickinessPolicyRequest();
    $request->action = POSTCreateLBCookieStickinessPolicyActionEnum::CREATE_LB_COOKIE_STICKINESS_POLICY;
    $request->requestBody = 'architecto';
    $request->version = POSTCreateLBCookieStickinessPolicyVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->postCreateLBCookieStickinessPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateLoadBalancer

<p>Creates a Classic Load Balancer.</p> <p>You can add listeners, security groups, subnets, and tags when you create your load balancer, or you can add them later using <a>CreateLoadBalancerListeners</a>, <a>ApplySecurityGroupsToLoadBalancer</a>, <a>AttachLoadBalancerToSubnets</a>, and <a>AddTags</a>.</p> <p>To describe your current load balancers, see <a>DescribeLoadBalancers</a>. When you are finished with a load balancer, you can delete it using <a>DeleteLoadBalancer</a>.</p> <p>You can create up to 20 load balancers per region per account. You can request an increase for the number of load balancers for your account. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

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
    $request->requestBody = 'accusantium';
    $request->version = POSTCreateLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';

    $response = $sdk->sdk->postCreateLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateLoadBalancerListeners

<p>Creates one or more listeners for the specified load balancer. If a listener with the specified port does not already exist, it is created; otherwise, the properties of the new listener must match the properties of the existing listener.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-listener-config.html">Listeners for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerListenersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerListenersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerListenersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateLoadBalancerListenersRequest();
    $request->action = POSTCreateLoadBalancerListenersActionEnum::CREATE_LOAD_BALANCER_LISTENERS;
    $request->requestBody = 'odit';
    $request->version = POSTCreateLoadBalancerListenersVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'quasi';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'eius';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->postCreateLoadBalancerListeners($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postCreateLoadBalancerPolicy

<p>Creates a policy with the specified attributes for the specified load balancer.</p> <p>Policies are settings that are saved for your load balancer and that can be applied to the listener or the application server, depending on the policy type.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTCreateLoadBalancerPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTCreateLoadBalancerPolicyRequest();
    $request->action = POSTCreateLoadBalancerPolicyActionEnum::CREATE_LOAD_BALANCER_POLICY;
    $request->requestBody = 'deleniti';
    $request->version = POSTCreateLoadBalancerPolicyVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->postCreateLoadBalancerPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLoadBalancer

<p>Deletes the specified load balancer.</p> <p>If you are attempting to recreate a load balancer, you must reconfigure all settings. The DNS name associated with a deleted load balancer are no longer usable. The name and associated DNS record of the deleted load balancer no longer exist and traffic sent to any of its IP addresses is no longer delivered to your instances.</p> <p>If the load balancer does not exist or has already been deleted, the call to <code>DeleteLoadBalancer</code> still succeeds.</p>

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
    $request->requestBody = 'nihil';
    $request->version = POSTDeleteLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postDeleteLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLoadBalancerListeners

Deletes the specified listeners from the specified load balancer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerListenersRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerListenersActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerListenersVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteLoadBalancerListenersRequest();
    $request->action = POSTDeleteLoadBalancerListenersActionEnum::DELETE_LOAD_BALANCER_LISTENERS;
    $request->requestBody = 'praesentium';
    $request->version = POSTDeleteLoadBalancerListenersVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';

    $response = $sdk->sdk->postDeleteLoadBalancerListeners($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeleteLoadBalancerPolicy

Deletes the specified policy from the specified load balancer. This policy must not be enabled for any listeners.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerPolicyActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeleteLoadBalancerPolicyVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeleteLoadBalancerPolicyRequest();
    $request->action = POSTDeleteLoadBalancerPolicyActionEnum::DELETE_LOAD_BALANCER_POLICY;
    $request->requestBody = 'ea';
    $request->version = POSTDeleteLoadBalancerPolicyVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->postDeleteLoadBalancerPolicy($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDeregisterInstancesFromLoadBalancer

<p>Deregisters the specified instances from the specified load balancer. After the instance is deregistered, it no longer receives traffic from the load balancer.</p> <p>You can use <a>DescribeLoadBalancers</a> to verify that the instance is deregistered from the load balancer.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterInstancesFromLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterInstancesFromLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDeregisterInstancesFromLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDeregisterInstancesFromLoadBalancerRequest();
    $request->action = POSTDeregisterInstancesFromLoadBalancerActionEnum::DEREGISTER_INSTANCES_FROM_LOAD_BALANCER;
    $request->requestBody = 'ipsam';
    $request->version = POSTDeregisterInstancesFromLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->postDeregisterInstancesFromLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeAccountLimits

<p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

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
    $request->requestBody = 'perferendis';
    $request->version = POSTDescribeAccountLimitsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';

    $response = $sdk->sdk->postDescribeAccountLimits($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeInstanceHealth

Describes the state of the specified instances with respect to the specified load balancer. If no instances are specified, the call describes the state of all instances that are currently registered with the load balancer. If instances are specified, their state is returned even if they are no longer registered with the load balancer. The state of terminated instances is not returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstanceHealthRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstanceHealthActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeInstanceHealthVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeInstanceHealthRequest();
    $request->action = POSTDescribeInstanceHealthActionEnum::DESCRIBE_INSTANCE_HEALTH;
    $request->requestBody = 'nobis';
    $request->version = POSTDescribeInstanceHealthVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';

    $response = $sdk->sdk->postDescribeInstanceHealth($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancerAttributes

Describes the attributes for the specified load balancer.

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
    $request->requestBody = 'eos';
    $request->version = POSTDescribeLoadBalancerAttributesVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';

    $response = $sdk->sdk->postDescribeLoadBalancerAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancerPolicies

<p>Describes the specified policies.</p> <p>If you specify a load balancer name, the action returns the descriptions of all policies created for the load balancer. If you specify a policy name associated with your load balancer, the action returns the description of that policy. If you don't specify a load balancer name, the action returns descriptions of the specified sample policies, or descriptions of all sample policies. The names of the sample policies have the <code>ELBSample-</code> prefix.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerPoliciesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerPoliciesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLoadBalancerPoliciesRequest();
    $request->action = POSTDescribeLoadBalancerPoliciesActionEnum::DESCRIBE_LOAD_BALANCER_POLICIES;
    $request->requestBody = 'hic';
    $request->version = POSTDescribeLoadBalancerPoliciesVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';

    $response = $sdk->sdk->postDescribeLoadBalancerPolicies($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancerPolicyTypes

<p>Describes the specified load balancer policy types or all load balancer policy types.</p> <p>The description of each type indicates how it can be used. For example, some policies can be used only with layer 7 listeners, some policies can be used only with layer 4 listeners, and some policies can be used only with your EC2 instances.</p> <p>You can use <a>CreateLoadBalancerPolicy</a> to create a policy configuration for any of these policy types. Then, depending on the policy type, use either <a>SetLoadBalancerPoliciesOfListener</a> or <a>SetLoadBalancerPoliciesForBackendServer</a> to set the policy.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerPolicyTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerPolicyTypesActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDescribeLoadBalancerPolicyTypesVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDescribeLoadBalancerPolicyTypesRequest();
    $request->action = POSTDescribeLoadBalancerPolicyTypesActionEnum::DESCRIBE_LOAD_BALANCER_POLICY_TYPES;
    $request->requestBody = 'blanditiis';
    $request->version = POSTDescribeLoadBalancerPolicyTypesVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';

    $response = $sdk->sdk->postDescribeLoadBalancerPolicyTypes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeLoadBalancers

Describes the specified the load balancers. If no load balancers are specified, the call describes all of your load balancers.

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
    $request->marker = 'modi';
    $request->requestBody = 'iste';
    $request->version = POSTDescribeLoadBalancersVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'nobis';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'delectus';

    $response = $sdk->sdk->postDescribeLoadBalancers($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDescribeTags

Describes the tags associated with the specified load balancers.

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
    $request->requestBody = 'quaerat';
    $request->version = POSTDescribeTagsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->postDescribeTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDetachLoadBalancerFromSubnets

<p>Removes the specified subnets from the set of configured subnets for the load balancer.</p> <p>After a subnet is removed, all EC2 instances registered with the load balancer in the removed subnet go into the <code>OutOfService</code> state. Then, the load balancer balances the traffic among the remaining routable subnets.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancerFromSubnetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancerFromSubnetsActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDetachLoadBalancerFromSubnetsVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDetachLoadBalancerFromSubnetsRequest();
    $request->action = POSTDetachLoadBalancerFromSubnetsActionEnum::DETACH_LOAD_BALANCER_FROM_SUBNETS;
    $request->requestBody = 'hic';
    $request->version = POSTDetachLoadBalancerFromSubnetsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postDetachLoadBalancerFromSubnets($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDisableAvailabilityZonesForLoadBalancer

<p>Removes the specified Availability Zones from the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>DetachLoadBalancerFromSubnets</a>.</p> <p>There must be at least one Availability Zone registered with a load balancer at all times. After an Availability Zone is removed, all instances registered with the load balancer that are in the removed Availability Zone go into the <code>OutOfService</code> state. Then, the load balancer attempts to equally balance the traffic among its remaining Availability Zones.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableAvailabilityZonesForLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableAvailabilityZonesForLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTDisableAvailabilityZonesForLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTDisableAvailabilityZonesForLoadBalancerRequest();
    $request->action = POSTDisableAvailabilityZonesForLoadBalancerActionEnum::DISABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER;
    $request->requestBody = 'numquam';
    $request->version = POSTDisableAvailabilityZonesForLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->postDisableAvailabilityZonesForLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postEnableAvailabilityZonesForLoadBalancer

<p>Adds the specified Availability Zones to the set of Availability Zones for the specified load balancer in EC2-Classic or a default VPC.</p> <p>For load balancers in a non-default VPC, use <a>AttachLoadBalancerToSubnets</a>.</p> <p>The load balancer evenly distributes requests across all its registered Availability Zones that contain instances. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-az.html">Add or Remove Availability Zones</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableAvailabilityZonesForLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableAvailabilityZonesForLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTEnableAvailabilityZonesForLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTEnableAvailabilityZonesForLoadBalancerRequest();
    $request->action = POSTEnableAvailabilityZonesForLoadBalancerActionEnum::ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER;
    $request->requestBody = 'quidem';
    $request->version = POSTEnableAvailabilityZonesForLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'eos';
    $request->xAmzSecurityToken = 'atque';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'fugiat';

    $response = $sdk->sdk->postEnableAvailabilityZonesForLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postModifyLoadBalancerAttributes

<p>Modifies the attributes of the specified load balancer.</p> <p>You can modify the load balancer attributes, such as <code>AccessLogs</code>, <code>ConnectionDraining</code>, and <code>CrossZoneLoadBalancing</code> by either enabling or disabling them. Or, you can modify the load balancer attribute <code>ConnectionSettings</code> by specifying an idle connection timeout value for your load balancer.</p> <p>For more information, see the following in the <i>Classic Load Balancers Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html">Cross-Zone Load Balancing</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html">Connection Draining</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/access-log-collection.html">Access Logs</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html">Idle Connection Timeout</a> </p> </li> </ul>

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
    $request->requestBody = 'ab';
    $request->version = POSTModifyLoadBalancerAttributesVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->postModifyLoadBalancerAttributes($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRegisterInstancesWithLoadBalancer

<p>Adds the specified instances to the specified load balancer.</p> <p>The instance must be a running instance in the same network as the load balancer (EC2-Classic or the same VPC). If you have EC2-Classic instances and a load balancer in a VPC with ClassicLink enabled, you can link the EC2-Classic instances to that VPC and then register the linked EC2-Classic instances with the load balancer in the VPC.</p> <p>Note that <code>RegisterInstanceWithLoadBalancer</code> completes when the request has been registered. Instance registration takes a little time to complete. To check the state of the registered instances, use <a>DescribeLoadBalancers</a> or <a>DescribeInstanceHealth</a>.</p> <p>After the instance is registered, it starts receiving traffic and requests from the load balancer. Any instance that is not in one of the Availability Zones registered for the load balancer is moved to the <code>OutOfService</code> state. If an Availability Zone is added to the load balancer later, any instances registered with the load balancer move to the <code>InService</code> state.</p> <p>To deregister instances from a load balancer, use <a>DeregisterInstancesFromLoadBalancer</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-deregister-register-instances.html">Register or De-Register EC2 Instances</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterInstancesWithLoadBalancerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterInstancesWithLoadBalancerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTRegisterInstancesWithLoadBalancerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTRegisterInstancesWithLoadBalancerRequest();
    $request->action = POSTRegisterInstancesWithLoadBalancerActionEnum::REGISTER_INSTANCES_WITH_LOAD_BALANCER;
    $request->requestBody = 'necessitatibus';
    $request->version = POSTRegisterInstancesWithLoadBalancerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postRegisterInstancesWithLoadBalancer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRemoveTags

Removes one or more tags from the specified load balancer.

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
    $request->requestBody = 'eius';
    $request->version = POSTRemoveTagsVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'saepe';

    $response = $sdk->sdk->postRemoveTags($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetLoadBalancerListenerSSLCertificate

<p>Sets the certificate that terminates the specified listener's SSL connections. The specified certificate replaces any prior certificate that was used on the same load balancer and port.</p> <p>For more information about updating your SSL certificate, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-update-ssl-cert.html">Replace the SSL Certificate for Your Load Balancer</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerListenerSSLCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerListenerSSLCertificateActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerListenerSSLCertificateVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetLoadBalancerListenerSSLCertificateRequest();
    $request->action = POSTSetLoadBalancerListenerSSLCertificateActionEnum::SET_LOAD_BALANCER_LISTENER_SSL_CERTIFICATE;
    $request->requestBody = 'suscipit';
    $request->version = POSTSetLoadBalancerListenerSSLCertificateVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';

    $response = $sdk->sdk->postSetLoadBalancerListenerSSLCertificate($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetLoadBalancerPoliciesForBackendServer

<p>Replaces the set of policies associated with the specified port on which the EC2 instance is listening with a new set of policies. At this time, only the back-end server authentication policy type can be applied to the instance ports; this policy type is composed of multiple public key policies.</p> <p>Each time you use <code>SetLoadBalancerPoliciesForBackendServer</code> to enable the policies, use the <code>PolicyNames</code> parameter to list the policies that you want to enable.</p> <p>You can use <a>DescribeLoadBalancers</a> or <a>DescribeLoadBalancerPolicies</a> to verify that the policy is associated with the EC2 instance.</p> <p>For more information about enabling back-end instance authentication, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-create-https-ssl-load-balancer.html#configure_backendauth_clt">Configure Back-end Instance Authentication</a> in the <i>Classic Load Balancers Guide</i>. For more information about Proxy Protocol, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-proxy-protocol.html">Configure Proxy Protocol Support</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerPoliciesForBackendServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerPoliciesForBackendServerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerPoliciesForBackendServerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetLoadBalancerPoliciesForBackendServerRequest();
    $request->action = POSTSetLoadBalancerPoliciesForBackendServerActionEnum::SET_LOAD_BALANCER_POLICIES_FOR_BACKEND_SERVER;
    $request->requestBody = 'at';
    $request->version = POSTSetLoadBalancerPoliciesForBackendServerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'officiis';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->postSetLoadBalancerPoliciesForBackendServer($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetLoadBalancerPoliciesOfListener

<p>Replaces the current set of policies for the specified load balancer port with the specified set of policies.</p> <p>To enable back-end server authentication, use <a>SetLoadBalancerPoliciesForBackendServer</a>.</p> <p>For more information about setting policies, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/ssl-config-update.html">Update the SSL Negotiation Configuration</a>, <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-duration">Duration-Based Session Stickiness</a>, and <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-sticky-sessions.html#enable-sticky-sessions-application">Application-Controlled Session Stickiness</a> in the <i>Classic Load Balancers Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerPoliciesOfListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerPoliciesOfListenerActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\POSTSetLoadBalancerPoliciesOfListenerVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new POSTSetLoadBalancerPoliciesOfListenerRequest();
    $request->action = POSTSetLoadBalancerPoliciesOfListenerActionEnum::SET_LOAD_BALANCER_POLICIES_OF_LISTENER;
    $request->requestBody = 'a';
    $request->version = POSTSetLoadBalancerPoliciesOfListenerVersionEnum::TWO_THOUSAND_AND_TWELVE0601;
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->postSetLoadBalancerPoliciesOfListener($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
