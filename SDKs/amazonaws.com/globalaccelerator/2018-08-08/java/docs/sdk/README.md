# SDK

## Overview

<fullname>Global Accelerator</fullname> <p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p> <p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance of your applications for local and global users. Depending on the type of accelerator you choose, you can gain additional benefits. </p> <ul> <li> <p>By using a standard accelerator, you can improve availability of your internet applications that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services global network. </p> </li> <li> <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p> </li> </ul> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important> <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack, Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses. With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you bring toGlobal Accelerator (BYOIP). </p> <p>For a standard accelerator, they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that are virtual private cloud (VPC) subnets.</p> <important> <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p> </important> <p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based on health, client location, and policies that you configure. The service reacts instantly to changes in health or configuration to ensure that internet traffic from clients is always directed to healthy endpoints.</p> <p>For more information about understanding and using Global Accelerator, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/globalaccelerator/>
### Available Operations

* [addCustomRoutingEndpoints](#addcustomroutingendpoints) - <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>
* [addEndpoints](#addendpoints) - <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>
* [advertiseByoipCidr](#advertisebyoipcidr) - <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [allowCustomRoutingTraffic](#allowcustomroutingtraffic) - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* [createAccelerator](#createaccelerator) - <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [createCustomRoutingAccelerator](#createcustomroutingaccelerator) - <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [createCustomRoutingEndpointGroup](#createcustomroutingendpointgroup) - Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. 
* [createCustomRoutingListener](#createcustomroutinglistener) - Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 
* [createEndpointGroup](#createendpointgroup) - Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.
* [createListener](#createlistener) - Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 
* [deleteAccelerator](#deleteaccelerator) - <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
* [deleteCustomRoutingAccelerator](#deletecustomroutingaccelerator) - <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
* [deleteCustomRoutingEndpointGroup](#deletecustomroutingendpointgroup) - Delete an endpoint group from a listener for a custom routing accelerator.
* [deleteCustomRoutingListener](#deletecustomroutinglistener) - Delete a listener for a custom routing accelerator.
* [deleteEndpointGroup](#deleteendpointgroup) - Delete an endpoint group from a listener.
* [deleteListener](#deletelistener) - Delete a listener from an accelerator.
* [denyCustomRoutingTraffic](#denycustomroutingtraffic) - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* [deprovisionByoipCidr](#deprovisionbyoipcidr) - <p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [describeAccelerator](#describeaccelerator) - Describe an accelerator. 
* [describeAcceleratorAttributes](#describeacceleratorattributes) - Describe the attributes of an accelerator. 
* [describeCustomRoutingAccelerator](#describecustomroutingaccelerator) - Describe a custom routing accelerator. 
* [describeCustomRoutingAcceleratorAttributes](#describecustomroutingacceleratorattributes) - Describe the attributes of a custom routing accelerator. 
* [describeCustomRoutingEndpointGroup](#describecustomroutingendpointgroup) - Describe an endpoint group for a custom routing accelerator. 
* [describeCustomRoutingListener](#describecustomroutinglistener) - The description of a listener for a custom routing accelerator.
* [describeEndpointGroup](#describeendpointgroup) - Describe an endpoint group. 
* [describeListener](#describelistener) - Describe a listener. 
* [listAccelerators](#listaccelerators) - List the accelerators for an Amazon Web Services account. 
* [listByoipCidrs](#listbyoipcidrs) - Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.
* [listCustomRoutingAccelerators](#listcustomroutingaccelerators) - List the custom routing accelerators for an Amazon Web Services account. 
* [listCustomRoutingEndpointGroups](#listcustomroutingendpointgroups) - List the endpoint groups that are associated with a listener for a custom routing accelerator. 
* [listCustomRoutingListeners](#listcustomroutinglisteners) - List the listeners for a custom routing accelerator. 
* [listCustomRoutingPortMappings](#listcustomroutingportmappings) - <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>
* [listCustomRoutingPortMappingsByDestination](#listcustomroutingportmappingsbydestination) - List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.
* [listEndpointGroups](#listendpointgroups) - List the endpoint groups that are associated with a listener. 
* [listListeners](#listlisteners) - List the listeners for an accelerator. 
* [listTagsForResource](#listtagsforresource) - <p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
* [provisionByoipCidr](#provisionbyoipcidr) - <p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [removeCustomRoutingEndpoints](#removecustomroutingendpoints) - Remove endpoints from a custom routing accelerator.
* [removeEndpoints](#removeendpoints) - <p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>
* [tagResource](#tagresource) - <p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
* [untagResource](#untagresource) - <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [updateAccelerator](#updateaccelerator) - <p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [updateAcceleratorAttributes](#updateacceleratorattributes) - Update the attributes for an accelerator. 
* [updateCustomRoutingAccelerator](#updatecustomroutingaccelerator) - Update a custom routing accelerator. 
* [updateCustomRoutingAcceleratorAttributes](#updatecustomroutingacceleratorattributes) - Update the attributes for a custom routing accelerator. 
* [updateCustomRoutingListener](#updatecustomroutinglistener) - Update a listener for a custom routing accelerator. 
* [updateEndpointGroup](#updateendpointgroup) - Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
* [updateListener](#updatelistener) - Update a listener. 
* [withdrawByoipCidr](#withdrawbyoipcidr) - <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

## addCustomRoutingEndpoints

<p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsResponse;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCustomRoutingEndpointsRequest req = new AddCustomRoutingEndpointsRequest(                new AddCustomRoutingEndpointsRequest(                new org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration[]{{
                                                add(new CustomRoutingEndpointConfiguration() {{
                                                    endpointId = "ipsa";
                                                }}),
                                                add(new CustomRoutingEndpointConfiguration() {{
                                                    endpointId = "delectus";
                                                }}),
                                                add(new CustomRoutingEndpointConfiguration() {{
                                                    endpointId = "tempora";
                                                }}),
                                                add(new CustomRoutingEndpointConfiguration() {{
                                                    endpointId = "suscipit";
                                                }}),
                                            }}, "molestiae");, AddCustomRoutingEndpointsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_ADD_CUSTOM_ROUTING_ENDPOINTS) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            AddCustomRoutingEndpointsResponse res = sdk.sdk.addCustomRoutingEndpoints(req);

            if (res.addCustomRoutingEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## addEndpoints

<p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddEndpointsRequest;
import org.openapis.openapi.models.operations.AddEndpointsResponse;
import org.openapis.openapi.models.operations.AddEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddEndpointsRequest;
import org.openapis.openapi.models.shared.EndpointConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddEndpointsRequest req = new AddEndpointsRequest(                new AddEndpointsRequest(                new org.openapis.openapi.models.shared.EndpointConfiguration[]{{
                                                add(new EndpointConfiguration() {{
                                                    clientIPPreservationEnabled = false;
                                                    endpointId = "quis";
                                                    weight = 87129L;
                                                }}),
                                            }}, "deserunt");, AddEndpointsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_ADD_ENDPOINTS) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "repellendus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "quo";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "at";
            }};            

            AddEndpointsResponse res = sdk.sdk.addEndpoints(req);

            if (res.addEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## advertiseByoipCidr

<p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdvertiseByoipCidrRequest;
import org.openapis.openapi.models.operations.AdvertiseByoipCidrResponse;
import org.openapis.openapi.models.operations.AdvertiseByoipCidrXAmzTargetEnum;
import org.openapis.openapi.models.shared.AdvertiseByoipCidrRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AdvertiseByoipCidrRequest req = new AdvertiseByoipCidrRequest(                new AdvertiseByoipCidrRequest("maiores");, AdvertiseByoipCidrXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_ADVERTISE_BYOIP_CIDR) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            AdvertiseByoipCidrResponse res = sdk.sdk.advertiseByoipCidr(req);

            if (res.advertiseByoipCidrResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## allowCustomRoutingTraffic

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllowCustomRoutingTrafficRequest;
import org.openapis.openapi.models.operations.AllowCustomRoutingTrafficResponse;
import org.openapis.openapi.models.operations.AllowCustomRoutingTrafficXAmzTargetEnum;
import org.openapis.openapi.models.shared.AllowCustomRoutingTrafficRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllowCustomRoutingTrafficRequest req = new AllowCustomRoutingTrafficRequest(                new AllowCustomRoutingTrafficRequest("nam", "officia") {{
                                allowAllTrafficToEndpoint = false;
                                destinationAddresses = new String[]{{
                                    add("fugit"),
                                    add("deleniti"),
                                    add("hic"),
                                }};
                                destinationPorts = new Long[]{{
                                    add(521848L),
                                    add(105907L),
                                    add(414662L),
                                    add(473600L),
                                }};
                            }};, AllowCustomRoutingTrafficXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_ALLOW_CUSTOM_ROUTING_TRAFFIC) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "impedit";
                xAmzDate = "cum";
                xAmzSecurityToken = "esse";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "excepturi";
            }};            

            AllowCustomRoutingTrafficResponse res = sdk.sdk.allowCustomRoutingTraffic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAccelerator

<p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAcceleratorRequest;
import org.openapis.openapi.models.operations.CreateAcceleratorResponse;
import org.openapis.openapi.models.operations.CreateAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAcceleratorRequest;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAcceleratorRequest req = new CreateAcceleratorRequest(                new CreateAcceleratorRequest("perferendis", "ad") {{
                                enabled = false;
                                ipAddressType = IpAddressTypeEnum.DUAL_STACK;
                                ipAddresses = new String[]{{
                                    add("iste"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("hic", "saepe") {{
                                        key = "natus";
                                        value = "laboriosam";
                                    }}),
                                }};
                            }};, CreateAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_CREATE_ACCELERATOR) {{
                xAmzAlgorithm = "fuga";
                xAmzContentSha256 = "in";
                xAmzCredential = "corporis";
                xAmzDate = "iste";
                xAmzSecurityToken = "iure";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "quidem";
            }};            

            CreateAcceleratorResponse res = sdk.sdk.createAccelerator(req);

            if (res.createAcceleratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomRoutingAccelerator

<p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomRoutingAcceleratorRequest;
import org.openapis.openapi.models.operations.CreateCustomRoutingAcceleratorResponse;
import org.openapis.openapi.models.operations.CreateCustomRoutingAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateCustomRoutingAcceleratorRequest;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
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

            CreateCustomRoutingAcceleratorRequest req = new CreateCustomRoutingAcceleratorRequest(                new CreateCustomRoutingAcceleratorRequest("ipsa", "reiciendis") {{
                                enabled = false;
                                ipAddressType = IpAddressTypeEnum.DUAL_STACK;
                                ipAddresses = new String[]{{
                                    add("laborum"),
                                    add("dolores"),
                                    add("dolorem"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("enim", "omnis") {{
                                        key = "explicabo";
                                        value = "nobis";
                                    }}),
                                    add(new Tag("excepturi", "accusantium") {{
                                        key = "nemo";
                                        value = "minima";
                                    }}),
                                }};
                            }};, CreateCustomRoutingAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_CREATE_CUSTOM_ROUTING_ACCELERATOR) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "culpa";
                xAmzCredential = "doloribus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "architecto";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "dolorem";
            }};            

            CreateCustomRoutingAcceleratorResponse res = sdk.sdk.createCustomRoutingAccelerator(req);

            if (res.createCustomRoutingAcceleratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomRoutingEndpointGroup

Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomRoutingEndpointGroupRequest;
import org.openapis.openapi.models.operations.CreateCustomRoutingEndpointGroupResponse;
import org.openapis.openapi.models.operations.CreateCustomRoutingEndpointGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateCustomRoutingEndpointGroupRequest;
import org.openapis.openapi.models.shared.CustomRoutingDestinationConfiguration;
import org.openapis.openapi.models.shared.CustomRoutingProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomRoutingEndpointGroupRequest req = new CreateCustomRoutingEndpointGroupRequest(                new CreateCustomRoutingEndpointGroupRequest(                new org.openapis.openapi.models.shared.CustomRoutingDestinationConfiguration[]{{
                                                add(new CustomRoutingDestinationConfiguration(474697L,                 new org.openapis.openapi.models.shared.CustomRoutingProtocolEnum[]{{
                                                                    add(CustomRoutingProtocolEnum.UDP),
                                                                }}, 158969L) {{
                                                    fromPort = 995300L;
                                                    protocols = new org.openapis.openapi.models.shared.CustomRoutingProtocolEnum[]{{
                                                        add(CustomRoutingProtocolEnum.UDP),
                                                        add(CustomRoutingProtocolEnum.TCP),
                                                        add(CustomRoutingProtocolEnum.TCP),
                                                    }};
                                                    toPort = 466311L;
                                                }}),
                                            }}, "quis", "vitae", "laborum");, CreateCustomRoutingEndpointGroupXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_CREATE_CUSTOM_ROUTING_ENDPOINT_GROUP) {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "enim";
                xAmzCredential = "odit";
                xAmzDate = "quo";
                xAmzSecurityToken = "sequi";
                xAmzSignature = "tenetur";
                xAmzSignedHeaders = "ipsam";
            }};            

            CreateCustomRoutingEndpointGroupResponse res = sdk.sdk.createCustomRoutingEndpointGroup(req);

            if (res.createCustomRoutingEndpointGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCustomRoutingListener

Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCustomRoutingListenerRequest;
import org.openapis.openapi.models.operations.CreateCustomRoutingListenerResponse;
import org.openapis.openapi.models.operations.CreateCustomRoutingListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateCustomRoutingListenerRequest;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCustomRoutingListenerRequest req = new CreateCustomRoutingListenerRequest(                new CreateCustomRoutingListenerRequest("possimus", "aut",                 new org.openapis.openapi.models.shared.PortRange[]{{
                                                add(new PortRange() {{
                                                    fromPort = 622846L;
                                                    toPort = 837945L;
                                                }}),
                                            }});, CreateCustomRoutingListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_CREATE_CUSTOM_ROUTING_LISTENER) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "reiciendis";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "praesentium";
            }};            

            CreateCustomRoutingListenerResponse res = sdk.sdk.createCustomRoutingListener(req);

            if (res.createCustomRoutingListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEndpointGroup

Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEndpointGroupRequest;
import org.openapis.openapi.models.operations.CreateEndpointGroupResponse;
import org.openapis.openapi.models.operations.CreateEndpointGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateEndpointGroupRequest;
import org.openapis.openapi.models.shared.EndpointConfiguration;
import org.openapis.openapi.models.shared.HealthCheckProtocolEnum;
import org.openapis.openapi.models.shared.PortOverride;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEndpointGroupRequest req = new CreateEndpointGroupRequest(                new CreateEndpointGroupRequest("ipsa", "omnis", "voluptate") {{
                                endpointConfigurations = new org.openapis.openapi.models.shared.EndpointConfiguration[]{{
                                    add(new EndpointConfiguration() {{
                                        clientIPPreservationEnabled = false;
                                        endpointId = "perferendis";
                                        weight = 39187L;
                                    }}),
                                    add(new EndpointConfiguration() {{
                                        clientIPPreservationEnabled = false;
                                        endpointId = "reprehenderit";
                                        weight = 282807L;
                                    }}),
                                    add(new EndpointConfiguration() {{
                                        clientIPPreservationEnabled = false;
                                        endpointId = "maiores";
                                        weight = 120196L;
                                    }}),
                                }};
                                healthCheckIntervalSeconds = 359444L;
                                healthCheckPath = "dolore";
                                healthCheckPort = 480894L;
                                healthCheckProtocol = HealthCheckProtocolEnum.TCP;
                                portOverrides = new org.openapis.openapi.models.shared.PortOverride[]{{
                                    add(new PortOverride() {{
                                        endpointPort = 317983L;
                                        listenerPort = 880476L;
                                    }}),
                                    add(new PortOverride() {{
                                        endpointPort = 414263L;
                                        listenerPort = 918236L;
                                    }}),
                                    add(new PortOverride() {{
                                        endpointPort = 64147L;
                                        listenerPort = 216822L;
                                    }}),
                                }};
                                thresholdCount = 692472L;
                                trafficDialPercentage = 5651.89;
                            }};, CreateEndpointGroupXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_CREATE_ENDPOINT_GROUP) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "pariatur";
                xAmzCredential = "modi";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "rem";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "quasi";
            }};            

            CreateEndpointGroupResponse res = sdk.sdk.createEndpointGroup(req);

            if (res.createEndpointGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createListener

Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateListenerRequest;
import org.openapis.openapi.models.operations.CreateListenerResponse;
import org.openapis.openapi.models.operations.CreateListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientAffinityEnum;
import org.openapis.openapi.models.shared.CreateListenerRequest;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateListenerRequest req = new CreateListenerRequest(                new CreateListenerRequest("sint", "veritatis",                 new org.openapis.openapi.models.shared.PortRange[]{{
                                                add(new PortRange() {{
                                                    fromPort = 277718L;
                                                    toPort = 318569L;
                                                }}),
                                                add(new PortRange() {{
                                                    fromPort = 9356L;
                                                    toPort = 667411L;
                                                }}),
                                                add(new PortRange() {{
                                                    fromPort = 842342L;
                                                    toPort = 131797L;
                                                }}),
                                                add(new PortRange() {{
                                                    fromPort = 647174L;
                                                    toPort = 716327L;
                                                }}),
                                            }}, ProtocolEnum.UDP) {{
                                clientAffinity = ClientAffinityEnum.NONE;
                            }};, CreateListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_CREATE_LISTENER) {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "qui";
                xAmzCredential = "aliquid";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "quos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "magni";
            }};            

            CreateListenerResponse res = sdk.sdk.createListener(req);

            if (res.createListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccelerator

<p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAcceleratorRequest;
import org.openapis.openapi.models.operations.DeleteAcceleratorResponse;
import org.openapis.openapi.models.operations.DeleteAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAcceleratorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAcceleratorRequest req = new DeleteAcceleratorRequest(                new DeleteAcceleratorRequest("ipsam");, DeleteAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DELETE_ACCELERATOR) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "dolorum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "tempore";
            }};            

            DeleteAcceleratorResponse res = sdk.sdk.deleteAccelerator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomRoutingAccelerator

<p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomRoutingAcceleratorRequest;
import org.openapis.openapi.models.operations.DeleteCustomRoutingAcceleratorResponse;
import org.openapis.openapi.models.operations.DeleteCustomRoutingAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCustomRoutingAcceleratorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomRoutingAcceleratorRequest req = new DeleteCustomRoutingAcceleratorRequest(                new DeleteCustomRoutingAcceleratorRequest("delectus");, DeleteCustomRoutingAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DELETE_CUSTOM_ROUTING_ACCELERATOR) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "non";
                xAmzCredential = "eligendi";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "necessitatibus";
            }};            

            DeleteCustomRoutingAcceleratorResponse res = sdk.sdk.deleteCustomRoutingAccelerator(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomRoutingEndpointGroup

Delete an endpoint group from a listener for a custom routing accelerator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomRoutingEndpointGroupRequest;
import org.openapis.openapi.models.operations.DeleteCustomRoutingEndpointGroupResponse;
import org.openapis.openapi.models.operations.DeleteCustomRoutingEndpointGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCustomRoutingEndpointGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomRoutingEndpointGroupRequest req = new DeleteCustomRoutingEndpointGroupRequest(                new DeleteCustomRoutingEndpointGroupRequest("officia");, DeleteCustomRoutingEndpointGroupXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DELETE_CUSTOM_ROUTING_ENDPOINT_GROUP) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "in";
                xAmzSignature = "in";
                xAmzSignedHeaders = "illum";
            }};            

            DeleteCustomRoutingEndpointGroupResponse res = sdk.sdk.deleteCustomRoutingEndpointGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCustomRoutingListener

Delete a listener for a custom routing accelerator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCustomRoutingListenerRequest;
import org.openapis.openapi.models.operations.DeleteCustomRoutingListenerResponse;
import org.openapis.openapi.models.operations.DeleteCustomRoutingListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCustomRoutingListenerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCustomRoutingListenerRequest req = new DeleteCustomRoutingListenerRequest(                new DeleteCustomRoutingListenerRequest("rerum");, DeleteCustomRoutingListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DELETE_CUSTOM_ROUTING_LISTENER) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteCustomRoutingListenerResponse res = sdk.sdk.deleteCustomRoutingListener(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEndpointGroup

Delete an endpoint group from a listener.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEndpointGroupRequest;
import org.openapis.openapi.models.operations.DeleteEndpointGroupResponse;
import org.openapis.openapi.models.operations.DeleteEndpointGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteEndpointGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEndpointGroupRequest req = new DeleteEndpointGroupRequest(                new DeleteEndpointGroupRequest("non");, DeleteEndpointGroupXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DELETE_ENDPOINT_GROUP) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "delectus";
                xAmzSecurityToken = "quidem";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nam";
            }};            

            DeleteEndpointGroupResponse res = sdk.sdk.deleteEndpointGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteListener

Delete a listener from an accelerator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteListenerRequest;
import org.openapis.openapi.models.operations.DeleteListenerResponse;
import org.openapis.openapi.models.operations.DeleteListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteListenerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteListenerRequest req = new DeleteListenerRequest(                new DeleteListenerRequest("blanditiis");, DeleteListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DELETE_LISTENER) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "amet";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "natus";
            }};            

            DeleteListenerResponse res = sdk.sdk.deleteListener(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## denyCustomRoutingTraffic

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DenyCustomRoutingTrafficRequest;
import org.openapis.openapi.models.operations.DenyCustomRoutingTrafficResponse;
import org.openapis.openapi.models.operations.DenyCustomRoutingTrafficXAmzTargetEnum;
import org.openapis.openapi.models.shared.DenyCustomRoutingTrafficRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DenyCustomRoutingTrafficRequest req = new DenyCustomRoutingTrafficRequest(                new DenyCustomRoutingTrafficRequest("molestiae", "perferendis") {{
                                denyAllTrafficToEndpoint = false;
                                destinationAddresses = new String[]{{
                                    add("magnam"),
                                    add("distinctio"),
                                }};
                                destinationPorts = new Long[]{{
                                    add(287991L),
                                    add(290077L),
                                    add(383462L),
                                }};
                            }};, DenyCustomRoutingTrafficXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DENY_CUSTOM_ROUTING_TRAFFIC) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "eum";
                xAmzDate = "vero";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "magnam";
            }};            

            DenyCustomRoutingTrafficResponse res = sdk.sdk.denyCustomRoutingTraffic(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deprovisionByoipCidr

<p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeprovisionByoipCidrRequest;
import org.openapis.openapi.models.operations.DeprovisionByoipCidrResponse;
import org.openapis.openapi.models.operations.DeprovisionByoipCidrXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeprovisionByoipCidrRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeprovisionByoipCidrRequest req = new DeprovisionByoipCidrRequest(                new DeprovisionByoipCidrRequest("excepturi");, DeprovisionByoipCidrXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DEPROVISION_BYOIP_CIDR) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            DeprovisionByoipCidrResponse res = sdk.sdk.deprovisionByoipCidr(req);

            if (res.deprovisionByoipCidrResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccelerator

Describe an accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAcceleratorRequest;
import org.openapis.openapi.models.operations.DescribeAcceleratorResponse;
import org.openapis.openapi.models.operations.DescribeAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAcceleratorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAcceleratorRequest req = new DescribeAcceleratorRequest(                new DescribeAcceleratorRequest("ad");, DescribeAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_ACCELERATOR) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            DescribeAcceleratorResponse res = sdk.sdk.describeAccelerator(req);

            if (res.describeAcceleratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAcceleratorAttributes

Describe the attributes of an accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAcceleratorAttributesRequest;
import org.openapis.openapi.models.operations.DescribeAcceleratorAttributesResponse;
import org.openapis.openapi.models.operations.DescribeAcceleratorAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAcceleratorAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAcceleratorAttributesRequest req = new DescribeAcceleratorAttributesRequest(                new DescribeAcceleratorAttributesRequest("debitis");, DescribeAcceleratorAttributesXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_ACCELERATOR_ATTRIBUTES) {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            DescribeAcceleratorAttributesResponse res = sdk.sdk.describeAcceleratorAttributes(req);

            if (res.describeAcceleratorAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCustomRoutingAccelerator

Describe a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCustomRoutingAcceleratorRequest;
import org.openapis.openapi.models.operations.DescribeCustomRoutingAcceleratorResponse;
import org.openapis.openapi.models.operations.DescribeCustomRoutingAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCustomRoutingAcceleratorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCustomRoutingAcceleratorRequest req = new DescribeCustomRoutingAcceleratorRequest(                new DescribeCustomRoutingAcceleratorRequest("ullam");, DescribeCustomRoutingAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ACCELERATOR) {{
                xAmzAlgorithm = "expedita";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "repellat";
                xAmzDate = "quibusdam";
                xAmzSecurityToken = "sed";
                xAmzSignature = "saepe";
                xAmzSignedHeaders = "pariatur";
            }};            

            DescribeCustomRoutingAcceleratorResponse res = sdk.sdk.describeCustomRoutingAccelerator(req);

            if (res.describeCustomRoutingAcceleratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCustomRoutingAcceleratorAttributes

Describe the attributes of a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCustomRoutingAcceleratorAttributesRequest;
import org.openapis.openapi.models.operations.DescribeCustomRoutingAcceleratorAttributesResponse;
import org.openapis.openapi.models.operations.DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCustomRoutingAcceleratorAttributesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCustomRoutingAcceleratorAttributesRequest req = new DescribeCustomRoutingAcceleratorAttributesRequest(                new DescribeCustomRoutingAcceleratorAttributesRequest("consequuntur");, DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ACCELERATOR_ATTRIBUTES) {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "natus";
                xAmzCredential = "magni";
                xAmzDate = "sunt";
                xAmzSecurityToken = "quo";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "pariatur";
            }};            

            DescribeCustomRoutingAcceleratorAttributesResponse res = sdk.sdk.describeCustomRoutingAcceleratorAttributes(req);

            if (res.describeCustomRoutingAcceleratorAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCustomRoutingEndpointGroup

Describe an endpoint group for a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCustomRoutingEndpointGroupRequest;
import org.openapis.openapi.models.operations.DescribeCustomRoutingEndpointGroupResponse;
import org.openapis.openapi.models.operations.DescribeCustomRoutingEndpointGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCustomRoutingEndpointGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCustomRoutingEndpointGroupRequest req = new DescribeCustomRoutingEndpointGroupRequest(                new DescribeCustomRoutingEndpointGroupRequest("ea");, DescribeCustomRoutingEndpointGroupXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ENDPOINT_GROUP) {{
                xAmzAlgorithm = "excepturi";
                xAmzContentSha256 = "odit";
                xAmzCredential = "ea";
                xAmzDate = "accusantium";
                xAmzSecurityToken = "ab";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quidem";
            }};            

            DescribeCustomRoutingEndpointGroupResponse res = sdk.sdk.describeCustomRoutingEndpointGroup(req);

            if (res.describeCustomRoutingEndpointGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCustomRoutingListener

The description of a listener for a custom routing accelerator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCustomRoutingListenerRequest;
import org.openapis.openapi.models.operations.DescribeCustomRoutingListenerResponse;
import org.openapis.openapi.models.operations.DescribeCustomRoutingListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCustomRoutingListenerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCustomRoutingListenerRequest req = new DescribeCustomRoutingListenerRequest(                new DescribeCustomRoutingListenerRequest("voluptate");, DescribeCustomRoutingListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_LISTENER) {{
                xAmzAlgorithm = "autem";
                xAmzContentSha256 = "nam";
                xAmzCredential = "eaque";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "perferendis";
            }};            

            DescribeCustomRoutingListenerResponse res = sdk.sdk.describeCustomRoutingListener(req);

            if (res.describeCustomRoutingListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEndpointGroup

Describe an endpoint group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEndpointGroupRequest;
import org.openapis.openapi.models.operations.DescribeEndpointGroupResponse;
import org.openapis.openapi.models.operations.DescribeEndpointGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEndpointGroupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugiat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEndpointGroupRequest req = new DescribeEndpointGroupRequest(                new DescribeEndpointGroupRequest("amet");, DescribeEndpointGroupXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_ENDPOINT_GROUP) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "cumque";
                xAmzCredential = "corporis";
                xAmzDate = "hic";
                xAmzSecurityToken = "libero";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "dolores";
            }};            

            DescribeEndpointGroupResponse res = sdk.sdk.describeEndpointGroup(req);

            if (res.describeEndpointGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeListener

Describe a listener. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeListenerRequest;
import org.openapis.openapi.models.operations.DescribeListenerResponse;
import org.openapis.openapi.models.operations.DescribeListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeListenerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeListenerRequest req = new DescribeListenerRequest(                new DescribeListenerRequest("totam");, DescribeListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_DESCRIBE_LISTENER) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "eaque";
                xAmzCredential = "quis";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "eos";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "dolores";
            }};            

            DescribeListenerResponse res = sdk.sdk.describeListener(req);

            if (res.describeListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccelerators

List the accelerators for an Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAcceleratorsRequest;
import org.openapis.openapi.models.operations.ListAcceleratorsResponse;
import org.openapis.openapi.models.operations.ListAcceleratorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAcceleratorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAcceleratorsRequest req = new ListAcceleratorsRequest(                new ListAcceleratorsRequest() {{
                                maxResults = 463451L;
                                nextToken = "dolor";
                            }};, ListAcceleratorsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_ACCELERATORS) {{
                maxResults = "vero";
                nextToken = "nostrum";
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "facilis";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "porro";
            }};            

            ListAcceleratorsResponse res = sdk.sdk.listAccelerators(req);

            if (res.listAcceleratorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listByoipCidrs

Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListByoipCidrsRequest;
import org.openapis.openapi.models.operations.ListByoipCidrsResponse;
import org.openapis.openapi.models.operations.ListByoipCidrsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListByoipCidrsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListByoipCidrsRequest req = new ListByoipCidrsRequest(                new ListByoipCidrsRequest() {{
                                maxResults = 500026L;
                                nextToken = "error";
                            }};, ListByoipCidrsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_BYOIP_CIDRS) {{
                maxResults = "eaque";
                nextToken = "occaecati";
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            ListByoipCidrsResponse res = sdk.sdk.listByoipCidrs(req);

            if (res.listByoipCidrsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomRoutingAccelerators

List the custom routing accelerators for an Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomRoutingAcceleratorsRequest;
import org.openapis.openapi.models.operations.ListCustomRoutingAcceleratorsResponse;
import org.openapis.openapi.models.operations.ListCustomRoutingAcceleratorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCustomRoutingAcceleratorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomRoutingAcceleratorsRequest req = new ListCustomRoutingAcceleratorsRequest(                new ListCustomRoutingAcceleratorsRequest() {{
                                maxResults = 864282L;
                                nextToken = "provident";
                            }};, ListCustomRoutingAcceleratorsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_ACCELERATORS) {{
                maxResults = "nobis";
                nextToken = "libero";
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "quos";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "dolor";
            }};            

            ListCustomRoutingAcceleratorsResponse res = sdk.sdk.listCustomRoutingAccelerators(req);

            if (res.listCustomRoutingAcceleratorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomRoutingEndpointGroups

List the endpoint groups that are associated with a listener for a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomRoutingEndpointGroupsRequest;
import org.openapis.openapi.models.operations.ListCustomRoutingEndpointGroupsResponse;
import org.openapis.openapi.models.operations.ListCustomRoutingEndpointGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCustomRoutingEndpointGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomRoutingEndpointGroupsRequest req = new ListCustomRoutingEndpointGroupsRequest(                new ListCustomRoutingEndpointGroupsRequest("ipsum") {{
                                maxResults = 944373L;
                                nextToken = "excepturi";
                            }};, ListCustomRoutingEndpointGroupsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_ENDPOINT_GROUPS) {{
                maxResults = "cum";
                nextToken = "voluptate";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "amet";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "ipsa";
            }};            

            ListCustomRoutingEndpointGroupsResponse res = sdk.sdk.listCustomRoutingEndpointGroups(req);

            if (res.listCustomRoutingEndpointGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomRoutingListeners

List the listeners for a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomRoutingListenersRequest;
import org.openapis.openapi.models.operations.ListCustomRoutingListenersResponse;
import org.openapis.openapi.models.operations.ListCustomRoutingListenersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCustomRoutingListenersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomRoutingListenersRequest req = new ListCustomRoutingListenersRequest(                new ListCustomRoutingListenersRequest("iure") {{
                                maxResults = 487838L;
                                nextToken = "quaerat";
                            }};, ListCustomRoutingListenersXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_LISTENERS) {{
                maxResults = "accusamus";
                nextToken = "quidem";
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "natus";
                xAmzDate = "eos";
                xAmzSecurityToken = "atque";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "fugiat";
            }};            

            ListCustomRoutingListenersResponse res = sdk.sdk.listCustomRoutingListeners(req);

            if (res.listCustomRoutingListenersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomRoutingPortMappings

<p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomRoutingPortMappingsRequest;
import org.openapis.openapi.models.operations.ListCustomRoutingPortMappingsResponse;
import org.openapis.openapi.models.operations.ListCustomRoutingPortMappingsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCustomRoutingPortMappingsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomRoutingPortMappingsRequest req = new ListCustomRoutingPortMappingsRequest(                new ListCustomRoutingPortMappingsRequest("soluta") {{
                                endpointGroupArn = "dolorum";
                                maxResults = 478596L;
                                nextToken = "voluptate";
                            }};, ListCustomRoutingPortMappingsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_PORT_MAPPINGS) {{
                maxResults = "dolorum";
                nextToken = "deleniti";
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "distinctio";
                xAmzDate = "asperiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "voluptate";
            }};            

            ListCustomRoutingPortMappingsResponse res = sdk.sdk.listCustomRoutingPortMappings(req);

            if (res.listCustomRoutingPortMappingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCustomRoutingPortMappingsByDestination

List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCustomRoutingPortMappingsByDestinationRequest;
import org.openapis.openapi.models.operations.ListCustomRoutingPortMappingsByDestinationResponse;
import org.openapis.openapi.models.operations.ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCustomRoutingPortMappingsByDestinationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCustomRoutingPortMappingsByDestinationRequest req = new ListCustomRoutingPortMappingsByDestinationRequest(                new ListCustomRoutingPortMappingsByDestinationRequest("saepe", "eius") {{
                                maxResults = 137220L;
                                nextToken = "perferendis";
                            }};, ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_PORT_MAPPINGS_BY_DESTINATION) {{
                maxResults = "amet";
                nextToken = "optio";
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "ad";
                xAmzCredential = "saepe";
                xAmzDate = "suscipit";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "minima";
            }};            

            ListCustomRoutingPortMappingsByDestinationResponse res = sdk.sdk.listCustomRoutingPortMappingsByDestination(req);

            if (res.listCustomRoutingPortMappingsByDestinationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEndpointGroups

List the endpoint groups that are associated with a listener. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEndpointGroupsRequest;
import org.openapis.openapi.models.operations.ListEndpointGroupsResponse;
import org.openapis.openapi.models.operations.ListEndpointGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListEndpointGroupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEndpointGroupsRequest req = new ListEndpointGroupsRequest(                new ListEndpointGroupsRequest("totam") {{
                                maxResults = 628982L;
                                nextToken = "alias";
                            }};, ListEndpointGroupsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_ENDPOINT_GROUPS) {{
                maxResults = "at";
                nextToken = "quaerat";
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
            }};            

            ListEndpointGroupsResponse res = sdk.sdk.listEndpointGroups(req);

            if (res.listEndpointGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listListeners

List the listeners for an accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListListenersRequest;
import org.openapis.openapi.models.operations.ListListenersResponse;
import org.openapis.openapi.models.operations.ListListenersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListListenersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListListenersRequest req = new ListListenersRequest(                new ListListenersRequest("harum") {{
                                maxResults = 483409L;
                                nextToken = "ipsum";
                            }};, ListListenersXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_LISTENERS) {{
                maxResults = "quisquam";
                nextToken = "tenetur";
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "accusamus";
                xAmzDate = "numquam";
                xAmzSecurityToken = "enim";
                xAmzSignature = "dolorem";
                xAmzSignedHeaders = "sapiente";
            }};            

            ListListenersResponse res = sdk.sdk.listListeners(req);

            if (res.listListenersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

<p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

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
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("nihil");, ListTagsForResourceXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_LIST_TAGS_FOR_RESOURCE) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
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

## provisionByoipCidr

<p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ProvisionByoipCidrRequest;
import org.openapis.openapi.models.operations.ProvisionByoipCidrResponse;
import org.openapis.openapi.models.operations.ProvisionByoipCidrXAmzTargetEnum;
import org.openapis.openapi.models.shared.CidrAuthorizationContext;
import org.openapis.openapi.models.shared.ProvisionByoipCidrRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ProvisionByoipCidrRequest req = new ProvisionByoipCidrRequest(                new ProvisionByoipCidrRequest("quam",                 new CidrAuthorizationContext("ipsum", "incidunt"););, ProvisionByoipCidrXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_PROVISION_BYOIP_CIDR) {{
                xAmzAlgorithm = "qui";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "maxime";
                xAmzDate = "pariatur";
                xAmzSecurityToken = "soluta";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "laborum";
            }};            

            ProvisionByoipCidrResponse res = sdk.sdk.provisionByoipCidr(req);

            if (res.provisionByoipCidrResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeCustomRoutingEndpoints

Remove endpoints from a custom routing accelerator.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.operations.RemoveCustomRoutingEndpointsResponse;
import org.openapis.openapi.models.operations.RemoveCustomRoutingEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.RemoveCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveCustomRoutingEndpointsRequest req = new RemoveCustomRoutingEndpointsRequest(                new RemoveCustomRoutingEndpointsRequest("incidunt",                 new String[]{{
                                                add("dolores"),
                                            }});, RemoveCustomRoutingEndpointsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_REMOVE_CUSTOM_ROUTING_ENDPOINTS) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "aliquid";
                xAmzDate = "quam";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "qui";
            }};            

            RemoveCustomRoutingEndpointsResponse res = sdk.sdk.removeCustomRoutingEndpoints(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeEndpoints

<p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveEndpointsRequest;
import org.openapis.openapi.models.operations.RemoveEndpointsResponse;
import org.openapis.openapi.models.operations.RemoveEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.EndpointIdentifier;
import org.openapis.openapi.models.shared.RemoveEndpointsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveEndpointsRequest req = new RemoveEndpointsRequest(                new RemoveEndpointsRequest("fugit",                 new org.openapis.openapi.models.shared.EndpointIdentifier[]{{
                                                add(new EndpointIdentifier("sunt") {{
                                                    clientIPPreservationEnabled = false;
                                                    endpointId = "odio";
                                                }}),
                                            }});, RemoveEndpointsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_REMOVE_ENDPOINTS) {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "nam";
                xAmzCredential = "hic";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "nobis";
            }};            

            RemoveEndpointsResponse res = sdk.sdk.removeEndpoints(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

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
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("saepe",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("quos", "tempore") {{
                                                    key = "veritatis";
                                                    value = "nobis";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_TAG_RESOURCE) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "delectus";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "adipisci";
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

<p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>

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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("architecto",                 new String[]{{
                                                add("aut"),
                                            }});, UntagResourceXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "consequatur";
                xAmzDate = "est";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "doloribus";
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

## updateAccelerator

<p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAcceleratorRequest;
import org.openapis.openapi.models.operations.UpdateAcceleratorResponse;
import org.openapis.openapi.models.operations.UpdateAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAcceleratorRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAcceleratorRequest req = new UpdateAcceleratorRequest(                new UpdateAcceleratorRequest("facilis") {{
                                enabled = false;
                                ipAddressType = IpAddressTypeEnum.DUAL_STACK;
                                name = "Amy Langworth";
                            }};, UpdateAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UPDATE_ACCELERATOR) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "quisquam";
                xAmzCredential = "vero";
                xAmzDate = "omnis";
                xAmzSecurityToken = "quis";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "delectus";
            }};            

            UpdateAcceleratorResponse res = sdk.sdk.updateAccelerator(req);

            if (res.updateAcceleratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAcceleratorAttributes

Update the attributes for an accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAcceleratorAttributesRequest;
import org.openapis.openapi.models.operations.UpdateAcceleratorAttributesResponse;
import org.openapis.openapi.models.operations.UpdateAcceleratorAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAcceleratorAttributesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAcceleratorAttributesRequest req = new UpdateAcceleratorAttributesRequest(                new UpdateAcceleratorAttributesRequest("consectetur") {{
                                flowLogsEnabled = false;
                                flowLogsS3Bucket = "vero";
                                flowLogsS3Prefix = "tenetur";
                            }};, UpdateAcceleratorAttributesXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UPDATE_ACCELERATOR_ATTRIBUTES) {{
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "hic";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "odio";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "facilis";
            }};            

            UpdateAcceleratorAttributesResponse res = sdk.sdk.updateAcceleratorAttributes(req);

            if (res.updateAcceleratorAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomRoutingAccelerator

Update a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomRoutingAcceleratorRequest;
import org.openapis.openapi.models.operations.UpdateCustomRoutingAcceleratorResponse;
import org.openapis.openapi.models.operations.UpdateCustomRoutingAcceleratorXAmzTargetEnum;
import org.openapis.openapi.models.shared.IpAddressTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCustomRoutingAcceleratorRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomRoutingAcceleratorRequest req = new UpdateCustomRoutingAcceleratorRequest(                new UpdateCustomRoutingAcceleratorRequest("ducimus") {{
                                enabled = false;
                                ipAddressType = IpAddressTypeEnum.IPV4;
                                name = "Gilberto Dickinson";
                            }};, UpdateCustomRoutingAcceleratorXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UPDATE_CUSTOM_ROUTING_ACCELERATOR) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "exercitationem";
                xAmzDate = "nulla";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "maiores";
            }};            

            UpdateCustomRoutingAcceleratorResponse res = sdk.sdk.updateCustomRoutingAccelerator(req);

            if (res.updateCustomRoutingAcceleratorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomRoutingAcceleratorAttributes

Update the attributes for a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomRoutingAcceleratorAttributesRequest;
import org.openapis.openapi.models.operations.UpdateCustomRoutingAcceleratorAttributesResponse;
import org.openapis.openapi.models.operations.UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCustomRoutingAcceleratorAttributesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomRoutingAcceleratorAttributesRequest req = new UpdateCustomRoutingAcceleratorAttributesRequest(                new UpdateCustomRoutingAcceleratorAttributesRequest("iusto") {{
                                flowLogsEnabled = false;
                                flowLogsS3Bucket = "eligendi";
                                flowLogsS3Prefix = "ducimus";
                            }};, UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UPDATE_CUSTOM_ROUTING_ACCELERATOR_ATTRIBUTES) {{
                xAmzAlgorithm = "alias";
                xAmzContentSha256 = "officia";
                xAmzCredential = "tempora";
                xAmzDate = "ipsam";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "vel";
            }};            

            UpdateCustomRoutingAcceleratorAttributesResponse res = sdk.sdk.updateCustomRoutingAcceleratorAttributes(req);

            if (res.updateCustomRoutingAcceleratorAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomRoutingListener

Update a listener for a custom routing accelerator. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomRoutingListenerRequest;
import org.openapis.openapi.models.operations.UpdateCustomRoutingListenerResponse;
import org.openapis.openapi.models.operations.UpdateCustomRoutingListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCustomRoutingListenerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomRoutingListenerRequest req = new UpdateCustomRoutingListenerRequest(                new UpdateCustomRoutingListenerRequest("magnam",                 new org.openapis.openapi.models.shared.PortRange[]{{
                                                add(new PortRange() {{
                                                    fromPort = 401132L;
                                                    toPort = 511319L;
                                                }}),
                                            }});, UpdateCustomRoutingListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UPDATE_CUSTOM_ROUTING_LISTENER) {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "maiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "ex";
                xAmzSignature = "nulla";
                xAmzSignedHeaders = "excepturi";
            }};            

            UpdateCustomRoutingListenerResponse res = sdk.sdk.updateCustomRoutingListener(req);

            if (res.updateCustomRoutingListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEndpointGroup

Update an endpoint group. A resource must be valid and active when you add it as an endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEndpointGroupRequest;
import org.openapis.openapi.models.operations.UpdateEndpointGroupResponse;
import org.openapis.openapi.models.operations.UpdateEndpointGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.EndpointConfiguration;
import org.openapis.openapi.models.shared.HealthCheckProtocolEnum;
import org.openapis.openapi.models.shared.PortOverride;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateEndpointGroupRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEndpointGroupRequest req = new UpdateEndpointGroupRequest(                new UpdateEndpointGroupRequest("nostrum") {{
                                endpointConfigurations = new org.openapis.openapi.models.shared.EndpointConfiguration[]{{
                                    add(new EndpointConfiguration() {{
                                        clientIPPreservationEnabled = false;
                                        endpointId = "quisquam";
                                        weight = 906556L;
                                    }}),
                                    add(new EndpointConfiguration() {{
                                        clientIPPreservationEnabled = false;
                                        endpointId = "ea";
                                        weight = 774048L;
                                    }}),
                                    add(new EndpointConfiguration() {{
                                        clientIPPreservationEnabled = false;
                                        endpointId = "corporis";
                                        weight = 333145L;
                                    }}),
                                    add(new EndpointConfiguration() {{
                                        clientIPPreservationEnabled = false;
                                        endpointId = "aliquid";
                                        weight = 81101L;
                                    }}),
                                }};
                                healthCheckIntervalSeconds = 301831L;
                                healthCheckPath = "ea";
                                healthCheckPort = 775220L;
                                healthCheckProtocol = HealthCheckProtocolEnum.TCP;
                                portOverrides = new org.openapis.openapi.models.shared.PortOverride[]{{
                                    add(new PortOverride() {{
                                        endpointPort = 132487L;
                                        listenerPort = 325310L;
                                    }}),
                                    add(new PortOverride() {{
                                        endpointPort = 53427L;
                                        listenerPort = 952871L;
                                    }}),
                                    add(new PortOverride() {{
                                        endpointPort = 725595L;
                                        listenerPort = 13948L;
                                    }}),
                                    add(new PortOverride() {{
                                        endpointPort = 11427L;
                                        listenerPort = 533466L;
                                    }}),
                                }};
                                thresholdCount = 770581L;
                                trafficDialPercentage = 3045.82;
                            }};, UpdateEndpointGroupXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UPDATE_ENDPOINT_GROUP) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "inventore";
                xAmzDate = "non";
                xAmzSecurityToken = "et";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "laborum";
            }};            

            UpdateEndpointGroupResponse res = sdk.sdk.updateEndpointGroup(req);

            if (res.updateEndpointGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateListener

Update a listener. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateListenerRequest;
import org.openapis.openapi.models.operations.UpdateListenerResponse;
import org.openapis.openapi.models.operations.UpdateListenerXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClientAffinityEnum;
import org.openapis.openapi.models.shared.PortRange;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateListenerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateListenerRequest req = new UpdateListenerRequest(                new UpdateListenerRequest("velit") {{
                                clientAffinity = ClientAffinityEnum.NONE;
                                portRanges = new org.openapis.openapi.models.shared.PortRange[]{{
                                    add(new PortRange() {{
                                        fromPort = 752135L;
                                        toPort = 557369L;
                                    }}),
                                    add(new PortRange() {{
                                        fromPort = 829603L;
                                        toPort = 860552L;
                                    }}),
                                }};
                                protocol = ProtocolEnum.TCP;
                            }};, UpdateListenerXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_UPDATE_LISTENER) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "tempora";
                xAmzDate = "numquam";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "ipsa";
            }};            

            UpdateListenerResponse res = sdk.sdk.updateListener(req);

            if (res.updateListenerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## withdrawByoipCidr

<p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WithdrawByoipCidrRequest;
import org.openapis.openapi.models.operations.WithdrawByoipCidrResponse;
import org.openapis.openapi.models.operations.WithdrawByoipCidrXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WithdrawByoipCidrRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            WithdrawByoipCidrRequest req = new WithdrawByoipCidrRequest(                new WithdrawByoipCidrRequest("magnam");, WithdrawByoipCidrXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_WITHDRAW_BYOIP_CIDR) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "eius";
                xAmzCredential = "esse";
                xAmzDate = "esse";
                xAmzSecurityToken = "rem";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            WithdrawByoipCidrResponse res = sdk.sdk.withdrawByoipCidr(req);

            if (res.withdrawByoipCidrResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
