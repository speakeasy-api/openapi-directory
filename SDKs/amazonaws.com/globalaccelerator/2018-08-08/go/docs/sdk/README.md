# SDK

## Overview

<fullname>Global Accelerator</fullname> <p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p> <p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance of your applications for local and global users. Depending on the type of accelerator you choose, you can gain additional benefits. </p> <ul> <li> <p>By using a standard accelerator, you can improve availability of your internet applications that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services global network. </p> </li> <li> <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p> </li> </ul> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important> <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack, Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses. With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges that you bring toGlobal Accelerator (BYOIP). </p> <p>For a standard accelerator, they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that are virtual private cloud (VPC) subnets.</p> <important> <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to it, so you can no longer route traffic by using them. You can use IAM policies like tag-based permissions with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p> </important> <p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based on health, client location, and policies that you configure. The service reacts instantly to changes in health or configuration to ensure that internet traffic from clients is always directed to healthy endpoints.</p> <p>For more information about understanding and using Global Accelerator, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/globalaccelerator/>
### Available Operations

* [AddCustomRoutingEndpoints](#addcustomroutingendpoints) - <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>
* [AddEndpoints](#addendpoints) - <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>
* [AdvertiseByoipCidr](#advertisebyoipcidr) - <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [AllowCustomRoutingTraffic](#allowcustomroutingtraffic) - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* [CreateAccelerator](#createaccelerator) - <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [CreateCustomRoutingAccelerator](#createcustomroutingaccelerator) - <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [CreateCustomRoutingEndpointGroup](#createcustomroutingendpointgroup) - Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. 
* [CreateCustomRoutingListener](#createcustomroutinglistener) - Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 
* [CreateEndpointGroup](#createendpointgroup) - Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.
* [CreateListener](#createlistener) - Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 
* [DeleteAccelerator](#deleteaccelerator) - <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
* [DeleteCustomRoutingAccelerator](#deletecustomroutingaccelerator) - <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
* [DeleteCustomRoutingEndpointGroup](#deletecustomroutingendpointgroup) - Delete an endpoint group from a listener for a custom routing accelerator.
* [DeleteCustomRoutingListener](#deletecustomroutinglistener) - Delete a listener for a custom routing accelerator.
* [DeleteEndpointGroup](#deleteendpointgroup) - Delete an endpoint group from a listener.
* [DeleteListener](#deletelistener) - Delete a listener from an accelerator.
* [DenyCustomRoutingTraffic](#denycustomroutingtraffic) - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* [DeprovisionByoipCidr](#deprovisionbyoipcidr) - <p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [DescribeAccelerator](#describeaccelerator) - Describe an accelerator. 
* [DescribeAcceleratorAttributes](#describeacceleratorattributes) - Describe the attributes of an accelerator. 
* [DescribeCustomRoutingAccelerator](#describecustomroutingaccelerator) - Describe a custom routing accelerator. 
* [DescribeCustomRoutingAcceleratorAttributes](#describecustomroutingacceleratorattributes) - Describe the attributes of a custom routing accelerator. 
* [DescribeCustomRoutingEndpointGroup](#describecustomroutingendpointgroup) - Describe an endpoint group for a custom routing accelerator. 
* [DescribeCustomRoutingListener](#describecustomroutinglistener) - The description of a listener for a custom routing accelerator.
* [DescribeEndpointGroup](#describeendpointgroup) - Describe an endpoint group. 
* [DescribeListener](#describelistener) - Describe a listener. 
* [ListAccelerators](#listaccelerators) - List the accelerators for an Amazon Web Services account. 
* [ListByoipCidrs](#listbyoipcidrs) - Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.
* [ListCustomRoutingAccelerators](#listcustomroutingaccelerators) - List the custom routing accelerators for an Amazon Web Services account. 
* [ListCustomRoutingEndpointGroups](#listcustomroutingendpointgroups) - List the endpoint groups that are associated with a listener for a custom routing accelerator. 
* [ListCustomRoutingListeners](#listcustomroutinglisteners) - List the listeners for a custom routing accelerator. 
* [ListCustomRoutingPortMappings](#listcustomroutingportmappings) - <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>
* [ListCustomRoutingPortMappingsByDestination](#listcustomroutingportmappingsbydestination) - List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.
* [ListEndpointGroups](#listendpointgroups) - List the endpoint groups that are associated with a listener. 
* [ListListeners](#listlisteners) - List the listeners for an accelerator. 
* [ListTagsForResource](#listtagsforresource) - <p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
* [ProvisionByoipCidr](#provisionbyoipcidr) - <p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [RemoveCustomRoutingEndpoints](#removecustomroutingendpoints) - Remove endpoints from a custom routing accelerator.
* [RemoveEndpoints](#removeendpoints) - <p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>
* [TagResource](#tagresource) - <p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
* [UntagResource](#untagresource) - <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [UpdateAccelerator](#updateaccelerator) - <p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [UpdateAcceleratorAttributes](#updateacceleratorattributes) - Update the attributes for an accelerator. 
* [UpdateCustomRoutingAccelerator](#updatecustomroutingaccelerator) - Update a custom routing accelerator. 
* [UpdateCustomRoutingAcceleratorAttributes](#updatecustomroutingacceleratorattributes) - Update the attributes for a custom routing accelerator. 
* [UpdateCustomRoutingListener](#updatecustomroutinglistener) - Update a listener for a custom routing accelerator. 
* [UpdateEndpointGroup](#updateendpointgroup) - Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
* [UpdateListener](#updatelistener) - Update a listener. 
* [WithdrawByoipCidr](#withdrawbyoipcidr) - <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

## AddCustomRoutingEndpoints

<p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddCustomRoutingEndpoints(ctx, operations.AddCustomRoutingEndpointsRequest{
        AddCustomRoutingEndpointsRequest: shared.AddCustomRoutingEndpointsRequest{
            EndpointConfigurations: []shared.CustomRoutingEndpointConfiguration{
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: sdk.String("magnam"),
                },
                shared.CustomRoutingEndpointConfiguration{
                    EndpointID: sdk.String("debitis"),
                },
            },
            EndpointGroupArn: "ipsa",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzTarget: operations.AddCustomRoutingEndpointsXAmzTargetEnumGlobalAcceleratorV20180706AddCustomRoutingEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomRoutingEndpointsResponse != nil {
        // handle response
    }
}
```

## AddEndpoints

<p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AddEndpoints(ctx, operations.AddEndpointsRequest{
        AddEndpointsRequest: shared.AddEndpointsRequest{
            EndpointConfigurations: []shared.EndpointConfiguration{
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("excepturi"),
                    Weight: sdk.Int64(392785),
                },
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("recusandae"),
                    Weight: sdk.Int64(836079),
                },
            },
            EndpointGroupArn: "ab",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.AddEndpointsXAmzTargetEnumGlobalAcceleratorV20180706AddEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddEndpointsResponse != nil {
        // handle response
    }
}
```

## AdvertiseByoipCidr

<p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AdvertiseByoipCidr(ctx, operations.AdvertiseByoipCidrRequest{
        AdvertiseByoipCidrRequest: shared.AdvertiseByoipCidrRequest{
            Cidr: "quo",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.AdvertiseByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706AdvertiseByoipCidr,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AdvertiseByoipCidrResponse != nil {
        // handle response
    }
}
```

## AllowCustomRoutingTraffic

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.AllowCustomRoutingTraffic(ctx, operations.AllowCustomRoutingTrafficRequest{
        AllowCustomRoutingTrafficRequest: shared.AllowCustomRoutingTrafficRequest{
            AllowAllTrafficToEndpoint: sdk.Bool(false),
            DestinationAddresses: []string{
                "totam",
                "porro",
            },
            DestinationPorts: []int64{
                118274,
                720633,
                639921,
            },
            EndpointGroupArn: "occaecati",
            EndpointID: "fugit",
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.AllowCustomRoutingTrafficXAmzTargetEnumGlobalAcceleratorV20180706AllowCustomRoutingTraffic,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## CreateAccelerator

<p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateAccelerator(ctx, operations.CreateAcceleratorRequest{
        CreateAcceleratorRequest: shared.CreateAcceleratorRequest{
            Enabled: sdk.Bool(false),
            IdempotencyToken: "modi",
            IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
            IPAddresses: []string{
                "cum",
                "esse",
                "ipsum",
                "excepturi",
            },
            Name: "Dorothy Hane",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolor",
                    Value: "natus",
                },
                shared.Tag{
                    Key: "laboriosam",
                    Value: "hic",
                },
                shared.Tag{
                    Key: "saepe",
                    Value: "fuga",
                },
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("saepe"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.CreateAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706CreateAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAcceleratorResponse != nil {
        // handle response
    }
}
```

## CreateCustomRoutingAccelerator

<p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCustomRoutingAccelerator(ctx, operations.CreateCustomRoutingAcceleratorRequest{
        CreateCustomRoutingAcceleratorRequest: shared.CreateCustomRoutingAcceleratorRequest{
            Enabled: sdk.Bool(false),
            IdempotencyToken: "ipsa",
            IPAddressType: shared.IPAddressTypeEnumDualStack.ToPointer(),
            IPAddresses: []string{
                "mollitia",
                "laborum",
                "dolores",
            },
            Name: "Stacy Champlin",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nemo",
                    Value: "minima",
                },
                shared.Tag{
                    Key: "excepturi",
                    Value: "accusantium",
                },
                shared.Tag{
                    Key: "iure",
                    Value: "culpa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("consequuntur"),
        XAmzTarget: operations.CreateCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomRoutingAcceleratorResponse != nil {
        // handle response
    }
}
```

## CreateCustomRoutingEndpointGroup

Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCustomRoutingEndpointGroup(ctx, operations.CreateCustomRoutingEndpointGroupRequest{
        CreateCustomRoutingEndpointGroupRequest: shared.CreateCustomRoutingEndpointGroupRequest{
            DestinationConfigurations: []shared.CustomRoutingDestinationConfiguration{
                shared.CustomRoutingDestinationConfiguration{
                    FromPort: 653108,
                    Protocols: []shared.CustomRoutingProtocolEnum{
                        shared.CustomRoutingProtocolEnumTCP,
                        shared.CustomRoutingProtocolEnumTCP,
                        shared.CustomRoutingProtocolEnumTCP,
                    },
                    ToPort: 474697,
                },
                shared.CustomRoutingDestinationConfiguration{
                    FromPort: 244425,
                    Protocols: []shared.CustomRoutingProtocolEnum{
                        shared.CustomRoutingProtocolEnumTCP,
                        shared.CustomRoutingProtocolEnumTCP,
                        shared.CustomRoutingProtocolEnumTCP,
                    },
                    ToPort: 674752,
                },
                shared.CustomRoutingDestinationConfiguration{
                    FromPort: 656330,
                    Protocols: []shared.CustomRoutingProtocolEnum{
                        shared.CustomRoutingProtocolEnumTCP,
                        shared.CustomRoutingProtocolEnumUDP,
                    },
                    ToPort: 196582,
                },
                shared.CustomRoutingDestinationConfiguration{
                    FromPort: 949572,
                    Protocols: []shared.CustomRoutingProtocolEnum{
                        shared.CustomRoutingProtocolEnumUDP,
                        shared.CustomRoutingProtocolEnumUDP,
                    },
                    ToPort: 13571,
                },
            },
            EndpointGroupRegion: "quasi",
            IdempotencyToken: "error",
            ListenerArn: "temporibus",
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.CreateCustomRoutingEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomRoutingEndpointGroupResponse != nil {
        // handle response
    }
}
```

## CreateCustomRoutingListener

Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCustomRoutingListener(ctx, operations.CreateCustomRoutingListenerRequest{
        CreateCustomRoutingListenerRequest: shared.CreateCustomRoutingListenerRequest{
            AcceleratorArn: "voluptatibus",
            IdempotencyToken: "ipsa",
            PortRanges: []shared.PortRange{
                shared.PortRange{
                    FromPort: sdk.Int64(451159),
                    ToPort: sdk.Int64(739264),
                },
                shared.PortRange{
                    FromPort: sdk.Int64(19987),
                    ToPort: sdk.Int64(39187),
                },
                shared.PortRange{
                    FromPort: sdk.Int64(441711),
                    ToPort: sdk.Int64(282807),
                },
            },
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.CreateCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706CreateCustomRoutingListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomRoutingListenerResponse != nil {
        // handle response
    }
}
```

## CreateEndpointGroup

Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateEndpointGroup(ctx, operations.CreateEndpointGroupRequest{
        CreateEndpointGroupRequest: shared.CreateEndpointGroupRequest{
            EndpointConfigurations: []shared.EndpointConfiguration{
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("accusamus"),
                    Weight: sdk.Int64(414263),
                },
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("repudiandae"),
                    Weight: sdk.Int64(64147),
                },
            },
            EndpointGroupRegion: "ipsum",
            HealthCheckIntervalSeconds: sdk.Int64(692472),
            HealthCheckPath: sdk.String("molestias"),
            HealthCheckPort: sdk.Int64(566602),
            HealthCheckProtocol: shared.HealthCheckProtocolEnumHTTPS.ToPointer(),
            IdempotencyToken: "modi",
            ListenerArn: "praesentium",
            PortOverrides: []shared.PortOverride{
                shared.PortOverride{
                    EndpointPort: sdk.Int64(916723),
                    ListenerPort: sdk.Int64(93940),
                },
                shared.PortOverride{
                    EndpointPort: sdk.Int64(921158),
                    ListenerPort: sdk.Int64(575947),
                },
                shared.PortOverride{
                    EndpointPort: sdk.Int64(83112),
                    ListenerPort: sdk.Int64(929297),
                },
            },
            ThresholdCount: sdk.Int64(277718),
            TrafficDialPercentage: sdk.Float32(3185.69),
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quibusdam"),
        XAmzTarget: operations.CreateEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706CreateEndpointGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEndpointGroupResponse != nil {
        // handle response
    }
}
```

## CreateListener

Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateListener(ctx, operations.CreateListenerRequest{
        CreateListenerRequest: shared.CreateListenerRequest{
            AcceleratorArn: "labore",
            ClientAffinity: shared.ClientAffinityEnumNone.ToPointer(),
            IdempotencyToken: "qui",
            PortRanges: []shared.PortRange{
                shared.PortRange{
                    FromPort: sdk.Int64(586513),
                    ToPort: sdk.Int64(552822),
                },
                shared.PortRange{
                    FromPort: sdk.Int64(20107),
                    ToPort: sdk.Int64(164940),
                },
            },
            Protocol: shared.ProtocolEnumUDP,
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzTarget: operations.CreateListenerXAmzTargetEnumGlobalAcceleratorV20180706CreateListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateListenerResponse != nil {
        // handle response
    }
}
```

## DeleteAccelerator

<p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteAccelerator(ctx, operations.DeleteAcceleratorRequest{
        DeleteAcceleratorRequest: shared.DeleteAcceleratorRequest{
            AcceleratorArn: "tempore",
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("eligendi"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.DeleteAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DeleteAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCustomRoutingAccelerator

<p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCustomRoutingAccelerator(ctx, operations.DeleteCustomRoutingAcceleratorRequest{
        DeleteCustomRoutingAcceleratorRequest: shared.DeleteCustomRoutingAcceleratorRequest{
            AcceleratorArn: "provident",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("sint"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCustomRoutingEndpointGroup

Delete an endpoint group from a listener for a custom routing accelerator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCustomRoutingEndpointGroup(ctx, operations.DeleteCustomRoutingEndpointGroupRequest{
        DeleteCustomRoutingEndpointGroupRequest: shared.DeleteCustomRoutingEndpointGroupRequest{
            EndpointGroupArn: "in",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("maiores"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("cumque"),
        XAmzTarget: operations.DeleteCustomRoutingEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCustomRoutingListener

Delete a listener for a custom routing accelerator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteCustomRoutingListener(ctx, operations.DeleteCustomRoutingListenerRequest{
        DeleteCustomRoutingListenerRequest: shared.DeleteCustomRoutingListenerRequest{
            ListenerArn: "facere",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("aliquid"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzTarget: operations.DeleteCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706DeleteCustomRoutingListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteEndpointGroup

Delete an endpoint group from a listener.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteEndpointGroup(ctx, operations.DeleteEndpointGroupRequest{
        DeleteEndpointGroupRequest: shared.DeleteEndpointGroupRequest{
            EndpointGroupArn: "accusamus",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DeleteEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DeleteEndpointGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteListener

Delete a listener from an accelerator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeleteListener(ctx, operations.DeleteListenerRequest{
        DeleteListenerRequest: shared.DeleteListenerRequest{
            ListenerArn: "sapiente",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzTarget: operations.DeleteListenerXAmzTargetEnumGlobalAcceleratorV20180706DeleteListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DenyCustomRoutingTraffic

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DenyCustomRoutingTraffic(ctx, operations.DenyCustomRoutingTrafficRequest{
        DenyCustomRoutingTrafficRequest: shared.DenyCustomRoutingTrafficRequest{
            DenyAllTrafficToEndpoint: sdk.Bool(false),
            DestinationAddresses: []string{
                "nihil",
            },
            DestinationPorts: []int64{
                716075,
                660174,
            },
            EndpointGroupArn: "labore",
            EndpointID: "labore",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzTarget: operations.DenyCustomRoutingTrafficXAmzTargetEnumGlobalAcceleratorV20180706DenyCustomRoutingTraffic,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeprovisionByoipCidr

<p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DeprovisionByoipCidr(ctx, operations.DeprovisionByoipCidrRequest{
        DeprovisionByoipCidrRequest: shared.DeprovisionByoipCidrRequest{
            Cidr: "magnam",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        XAmzTarget: operations.DeprovisionByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706DeprovisionByoipCidr,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeprovisionByoipCidrResponse != nil {
        // handle response
    }
}
```

## DescribeAccelerator

Describe an accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAccelerator(ctx, operations.DescribeAcceleratorRequest{
        DescribeAcceleratorRequest: shared.DescribeAcceleratorRequest{
            AcceleratorArn: "mollitia",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzTarget: operations.DescribeAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DescribeAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAcceleratorResponse != nil {
        // handle response
    }
}
```

## DescribeAcceleratorAttributes

Describe the attributes of an accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAcceleratorAttributes(ctx, operations.DescribeAcceleratorAttributesRequest{
        DescribeAcceleratorAttributesRequest: shared.DescribeAcceleratorAttributesRequest{
            AcceleratorArn: "nemo",
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.DescribeAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706DescribeAcceleratorAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAcceleratorAttributesResponse != nil {
        // handle response
    }
}
```

## DescribeCustomRoutingAccelerator

Describe a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCustomRoutingAccelerator(ctx, operations.DescribeCustomRoutingAcceleratorRequest{
        DescribeCustomRoutingAcceleratorRequest: shared.DescribeCustomRoutingAcceleratorRequest{
            AcceleratorArn: "facilis",
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.DescribeCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomRoutingAcceleratorResponse != nil {
        // handle response
    }
}
```

## DescribeCustomRoutingAcceleratorAttributes

Describe the attributes of a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCustomRoutingAcceleratorAttributes(ctx, operations.DescribeCustomRoutingAcceleratorAttributesRequest{
        DescribeCustomRoutingAcceleratorAttributesRequest: shared.DescribeCustomRoutingAcceleratorAttributesRequest{
            AcceleratorArn: "repellat",
        },
        XAmzAlgorithm: sdk.String("quibusdam"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("consequuntur"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomRoutingAcceleratorAttributesResponse != nil {
        // handle response
    }
}
```

## DescribeCustomRoutingEndpointGroup

Describe an endpoint group for a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCustomRoutingEndpointGroup(ctx, operations.DescribeCustomRoutingEndpointGroupRequest{
        DescribeCustomRoutingEndpointGroupRequest: shared.DescribeCustomRoutingEndpointGroupRequest{
            EndpointGroupArn: "natus",
        },
        XAmzAlgorithm: sdk.String("magni"),
        XAmzContentSha256: sdk.String("sunt"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DescribeCustomRoutingEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomRoutingEndpointGroupResponse != nil {
        // handle response
    }
}
```

## DescribeCustomRoutingListener

The description of a listener for a custom routing accelerator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeCustomRoutingListener(ctx, operations.DescribeCustomRoutingListenerRequest{
        DescribeCustomRoutingListenerRequest: shared.DescribeCustomRoutingListenerRequest{
            ListenerArn: "excepturi",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("ipsam"),
        XAmzTarget: operations.DescribeCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706DescribeCustomRoutingListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCustomRoutingListenerResponse != nil {
        // handle response
    }
}
```

## DescribeEndpointGroup

Describe an endpoint group. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeEndpointGroup(ctx, operations.DescribeEndpointGroupRequest{
        DescribeEndpointGroupRequest: shared.DescribeEndpointGroupRequest{
            EndpointGroupArn: "voluptate",
        },
        XAmzAlgorithm: sdk.String("autem"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.DescribeEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706DescribeEndpointGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeEndpointGroupResponse != nil {
        // handle response
    }
}
```

## DescribeListener

Describe a listener. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeListener(ctx, operations.DescribeListenerRequest{
        DescribeListenerRequest: shared.DescribeListenerRequest{
            ListenerArn: "fugiat",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.DescribeListenerXAmzTargetEnumGlobalAcceleratorV20180706DescribeListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeListenerResponse != nil {
        // handle response
    }
}
```

## ListAccelerators

List the accelerators for an Amazon Web Services account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAccelerators(ctx, operations.ListAcceleratorsRequest{
        ListAcceleratorsRequest: shared.ListAcceleratorsRequest{
            MaxResults: sdk.Int64(171629),
            NextToken: sdk.String("quis"),
        },
        MaxResults: sdk.String("totam"),
        NextToken: sdk.String("dignissimos"),
        XAmzAlgorithm: sdk.String("eaque"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("nesciunt"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("dolores"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.ListAcceleratorsXAmzTargetEnumGlobalAcceleratorV20180706ListAccelerators,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAcceleratorsResponse != nil {
        // handle response
    }
}
```

## ListByoipCidrs

Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListByoipCidrs(ctx, operations.ListByoipCidrsRequest{
        ListByoipCidrsRequest: shared.ListByoipCidrsRequest{
            MaxResults: sdk.Int64(463451),
            NextToken: sdk.String("dolor"),
        },
        MaxResults: sdk.String("vero"),
        NextToken: sdk.String("nostrum"),
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.ListByoipCidrsXAmzTargetEnumGlobalAcceleratorV20180706ListByoipCidrs,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListByoipCidrsResponse != nil {
        // handle response
    }
}
```

## ListCustomRoutingAccelerators

List the custom routing accelerators for an Amazon Web Services account. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomRoutingAccelerators(ctx, operations.ListCustomRoutingAcceleratorsRequest{
        ListCustomRoutingAcceleratorsRequest: shared.ListCustomRoutingAcceleratorsRequest{
            MaxResults: sdk.Int64(164694),
            NextToken: sdk.String("blanditiis"),
        },
        MaxResults: sdk.String("error"),
        NextToken: sdk.String("eaque"),
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("earum"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("iste"),
        XAmzTarget: operations.ListCustomRoutingAcceleratorsXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingAccelerators,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomRoutingAcceleratorsResponse != nil {
        // handle response
    }
}
```

## ListCustomRoutingEndpointGroups

List the endpoint groups that are associated with a listener for a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomRoutingEndpointGroups(ctx, operations.ListCustomRoutingEndpointGroupsRequest{
        ListCustomRoutingEndpointGroupsRequest: shared.ListCustomRoutingEndpointGroupsRequest{
            ListenerArn: "dolorum",
            MaxResults: sdk.Int64(535633),
            NextToken: sdk.String("pariatur"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("nobis"),
        XAmzAlgorithm: sdk.String("libero"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.ListCustomRoutingEndpointGroupsXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingEndpointGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomRoutingEndpointGroupsResponse != nil {
        // handle response
    }
}
```

## ListCustomRoutingListeners

List the listeners for a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomRoutingListeners(ctx, operations.ListCustomRoutingListenersRequest{
        ListCustomRoutingListenersRequest: shared.ListCustomRoutingListenersRequest{
            AcceleratorArn: "dolor",
            MaxResults: sdk.Int64(186193),
            NextToken: sdk.String("ipsum"),
        },
        MaxResults: sdk.String("hic"),
        NextToken: sdk.String("excepturi"),
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("reiciendis"),
        XAmzSecurityToken: sdk.String("amet"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.ListCustomRoutingListenersXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingListeners,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomRoutingListenersResponse != nil {
        // handle response
    }
}
```

## ListCustomRoutingPortMappings

<p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomRoutingPortMappings(ctx, operations.ListCustomRoutingPortMappingsRequest{
        ListCustomRoutingPortMappingsRequest: shared.ListCustomRoutingPortMappingsRequest{
            AcceleratorArn: "veritatis",
            EndpointGroupArn: sdk.String("ipsa"),
            MaxResults: sdk.Int64(56418),
            NextToken: sdk.String("iure"),
        },
        MaxResults: sdk.String("odio"),
        NextToken: sdk.String("quaerat"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.ListCustomRoutingPortMappingsXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingPortMappings,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomRoutingPortMappingsResponse != nil {
        // handle response
    }
}
```

## ListCustomRoutingPortMappingsByDestination

List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomRoutingPortMappingsByDestination(ctx, operations.ListCustomRoutingPortMappingsByDestinationRequest{
        ListCustomRoutingPortMappingsByDestinationRequest: shared.ListCustomRoutingPortMappingsByDestinationRequest{
            DestinationAddress: "sit",
            EndpointID: "fugiat",
            MaxResults: sdk.Int64(67249),
            NextToken: sdk.String("soluta"),
        },
        MaxResults: sdk.String("dolorum"),
        NextToken: sdk.String("iusto"),
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("asperiores"),
        XAmzTarget: operations.ListCustomRoutingPortMappingsByDestinationXAmzTargetEnumGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomRoutingPortMappingsByDestinationResponse != nil {
        // handle response
    }
}
```

## ListEndpointGroups

List the endpoint groups that are associated with a listener. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListEndpointGroups(ctx, operations.ListEndpointGroupsRequest{
        ListEndpointGroupsRequest: shared.ListEndpointGroupsRequest{
            ListenerArn: "nihil",
            MaxResults: sdk.Int64(216897),
            NextToken: sdk.String("voluptate"),
        },
        MaxResults: sdk.String("id"),
        NextToken: sdk.String("saepe"),
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzTarget: operations.ListEndpointGroupsXAmzTargetEnumGlobalAcceleratorV20180706ListEndpointGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEndpointGroupsResponse != nil {
        // handle response
    }
}
```

## ListListeners

List the listeners for an accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListListeners(ctx, operations.ListListenersRequest{
        ListListenersRequest: shared.ListListenersRequest{
            AcceleratorArn: "saepe",
            MaxResults: sdk.Int64(383464),
            NextToken: sdk.String("deserunt"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("minima"),
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.ListListenersXAmzTargetEnumGlobalAcceleratorV20180706ListListeners,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListListenersResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

<p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            ResourceArn: "vel",
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("officiis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("harum"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumGlobalAcceleratorV20180706ListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ProvisionByoipCidr

<p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ProvisionByoipCidr(ctx, operations.ProvisionByoipCidrRequest{
        ProvisionByoipCidrRequest: shared.ProvisionByoipCidrRequest{
            Cidr: "iusto",
            CidrAuthorizationContext: shared.CidrAuthorizationContext{
                Message: "ipsum",
                Signature: "quisquam",
            },
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.ProvisionByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706ProvisionByoipCidr,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProvisionByoipCidrResponse != nil {
        // handle response
    }
}
```

## RemoveCustomRoutingEndpoints

Remove endpoints from a custom routing accelerator.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveCustomRoutingEndpoints(ctx, operations.RemoveCustomRoutingEndpointsRequest{
        RemoveCustomRoutingEndpointsRequest: shared.RemoveCustomRoutingEndpointsRequest{
            EndpointGroupArn: "sapiente",
            EndpointIds: []string{
                "nihil",
                "sit",
                "expedita",
            },
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.RemoveCustomRoutingEndpointsXAmzTargetEnumGlobalAcceleratorV20180706RemoveCustomRoutingEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveEndpoints

<p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.RemoveEndpoints(ctx, operations.RemoveEndpointsRequest{
        RemoveEndpointsRequest: shared.RemoveEndpointsRequest{
            EndpointGroupArn: "ipsum",
            EndpointIdentifiers: []shared.EndpointIdentifier{
                shared.EndpointIdentifier{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: "qui",
                },
                shared.EndpointIdentifier{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: "cupiditate",
                },
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("soluta"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.RemoveEndpointsXAmzTargetEnumGlobalAcceleratorV20180706RemoveEndpoints,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

<p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            ResourceArn: "aspernatur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "distinctio",
                    Value: "facilis",
                },
            },
        },
        XAmzAlgorithm: sdk.String("aliquid"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("neque"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumGlobalAcceleratorV20180706TagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            ResourceArn: "magni",
            TagKeys: []string{
                "sunt",
                "ullam",
            },
        },
        XAmzAlgorithm: sdk.String("nam"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("soluta"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumGlobalAcceleratorV20180706UntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateAccelerator

<p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAccelerator(ctx, operations.UpdateAcceleratorRequest{
        UpdateAcceleratorRequest: shared.UpdateAcceleratorRequest{
            AcceleratorArn: "saepe",
            Enabled: sdk.Bool(false),
            IPAddressType: shared.IPAddressTypeEnumIpv4.ToPointer(),
            Name: sdk.String("Gayle Lueilwitz"),
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.UpdateAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706UpdateAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAcceleratorResponse != nil {
        // handle response
    }
}
```

## UpdateAcceleratorAttributes

Update the attributes for an accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateAcceleratorAttributes(ctx, operations.UpdateAcceleratorAttributesRequest{
        UpdateAcceleratorAttributesRequest: shared.UpdateAcceleratorAttributesRequest{
            AcceleratorArn: "architecto",
            FlowLogsEnabled: sdk.Bool(false),
            FlowLogsS3Bucket: sdk.String("quae"),
            FlowLogsS3Prefix: sdk.String("aut"),
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.UpdateAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706UpdateAcceleratorAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAcceleratorAttributesResponse != nil {
        // handle response
    }
}
```

## UpdateCustomRoutingAccelerator

Update a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCustomRoutingAccelerator(ctx, operations.UpdateCustomRoutingAcceleratorRequest{
        UpdateCustomRoutingAcceleratorRequest: shared.UpdateCustomRoutingAcceleratorRequest{
            AcceleratorArn: "ut",
            Enabled: sdk.Bool(false),
            IPAddressType: shared.IPAddressTypeEnumDualStack.ToPointer(),
            Name: sdk.String("Alan Bergnaum"),
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("omnis"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.UpdateCustomRoutingAcceleratorXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingAccelerator,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomRoutingAcceleratorResponse != nil {
        // handle response
    }
}
```

## UpdateCustomRoutingAcceleratorAttributes

Update the attributes for a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCustomRoutingAcceleratorAttributes(ctx, operations.UpdateCustomRoutingAcceleratorAttributesRequest{
        UpdateCustomRoutingAcceleratorAttributesRequest: shared.UpdateCustomRoutingAcceleratorAttributesRequest{
            AcceleratorArn: "delectus",
            FlowLogsEnabled: sdk.Bool(false),
            FlowLogsS3Bucket: sdk.String("voluptate"),
            FlowLogsS3Prefix: sdk.String("consectetur"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomRoutingAcceleratorAttributesResponse != nil {
        // handle response
    }
}
```

## UpdateCustomRoutingListener

Update a listener for a custom routing accelerator. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCustomRoutingListener(ctx, operations.UpdateCustomRoutingListenerRequest{
        UpdateCustomRoutingListenerRequest: shared.UpdateCustomRoutingListenerRequest{
            ListenerArn: "similique",
            PortRanges: []shared.PortRange{
                shared.PortRange{
                    FromPort: sdk.Int64(874288),
                    ToPort: sdk.Int64(498140),
                },
                shared.PortRange{
                    FromPort: sdk.Int64(293020),
                    ToPort: sdk.Int64(844550),
                },
                shared.PortRange{
                    FromPort: sdk.Int64(848944),
                    ToPort: sdk.Int64(194342),
                },
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzTarget: operations.UpdateCustomRoutingListenerXAmzTargetEnumGlobalAcceleratorV20180706UpdateCustomRoutingListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomRoutingListenerResponse != nil {
        // handle response
    }
}
```

## UpdateEndpointGroup

Update an endpoint group. A resource must be valid and active when you add it as an endpoint.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateEndpointGroup(ctx, operations.UpdateEndpointGroupRequest{
        UpdateEndpointGroupRequest: shared.UpdateEndpointGroupRequest{
            EndpointConfigurations: []shared.EndpointConfiguration{
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("maiores"),
                    Weight: sdk.Int64(985033),
                },
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("iusto"),
                    Weight: sdk.Int64(753570),
                },
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("ducimus"),
                    Weight: sdk.Int64(4048),
                },
                shared.EndpointConfiguration{
                    ClientIPPreservationEnabled: sdk.Bool(false),
                    EndpointID: sdk.String("officia"),
                    Weight: sdk.Int64(269479),
                },
            },
            EndpointGroupArn: "ipsam",
            HealthCheckIntervalSeconds: sdk.Int64(410492),
            HealthCheckPath: sdk.String("aspernatur"),
            HealthCheckPort: sdk.Int64(428224),
            HealthCheckProtocol: shared.HealthCheckProtocolEnumHTTPS.ToPointer(),
            PortOverrides: []shared.PortOverride{
                shared.PortOverride{
                    EndpointPort: sdk.Int64(189848),
                    ListenerPort: sdk.Int64(401132),
                },
                shared.PortOverride{
                    EndpointPort: sdk.Int64(511319),
                    ListenerPort: sdk.Int64(120657),
                },
            },
            ThresholdCount: sdk.Int64(224317),
            TrafficDialPercentage: sdk.Float32(9807),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("ex"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.UpdateEndpointGroupXAmzTargetEnumGlobalAcceleratorV20180706UpdateEndpointGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEndpointGroupResponse != nil {
        // handle response
    }
}
```

## UpdateListener

Update a listener. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateListener(ctx, operations.UpdateListenerRequest{
        UpdateListenerRequest: shared.UpdateListenerRequest{
            ClientAffinity: shared.ClientAffinityEnumSourceIP.ToPointer(),
            ListenerArn: "saepe",
            PortRanges: []shared.PortRange{
                shared.PortRange{
                    FromPort: sdk.Int64(774048),
                    ToPort: sdk.Int64(359271),
                },
                shared.PortRange{
                    FromPort: sdk.Int64(333145),
                    ToPort: sdk.Int64(399499),
                },
            },
            Protocol: shared.ProtocolEnumTCP.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.UpdateListenerXAmzTargetEnumGlobalAcceleratorV20180706UpdateListener,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateListenerResponse != nil {
        // handle response
    }
}
```

## WithdrawByoipCidr

<p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.WithdrawByoipCidr(ctx, operations.WithdrawByoipCidrRequest{
        WithdrawByoipCidrRequest: shared.WithdrawByoipCidrRequest{
            Cidr: "eaque",
        },
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aliquam"),
        XAmzTarget: operations.WithdrawByoipCidrXAmzTargetEnumGlobalAcceleratorV20180706WithdrawByoipCidr,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WithdrawByoipCidrResponse != nil {
        // handle response
    }
}
```
