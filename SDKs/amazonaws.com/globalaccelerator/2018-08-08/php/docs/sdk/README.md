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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomRoutingEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddCustomRoutingEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomRoutingEndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomRoutingEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCustomRoutingEndpointsRequest();
    $request->addCustomRoutingEndpointsRequest = new AddCustomRoutingEndpointsRequest();
    $request->addCustomRoutingEndpointsRequest->endpointConfigurations = [
        new CustomRoutingEndpointConfiguration(),
        new CustomRoutingEndpointConfiguration(),
        new CustomRoutingEndpointConfiguration(),
    ];
    $request->addCustomRoutingEndpointsRequest->endpointGroupArn = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = AddCustomRoutingEndpointsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_ADD_CUSTOM_ROUTING_ENDPOINTS;

    $response = $sdk->sdk->addCustomRoutingEndpoints($request);

    if ($response->addCustomRoutingEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addEndpoints

<p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\AddEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddEndpointsRequest();
    $request->addEndpointsRequest = new AddEndpointsRequest();
    $request->addEndpointsRequest->endpointConfigurations = [
        new EndpointConfiguration(),
        new EndpointConfiguration(),
    ];
    $request->addEndpointsRequest->endpointGroupArn = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->xAmzTarget = AddEndpointsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_ADD_ENDPOINTS;

    $response = $sdk->sdk->addEndpoints($request);

    if ($response->addEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## advertiseByoipCidr

<p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AdvertiseByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Shared\AdvertiseByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Operations\AdvertiseByoipCidrXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdvertiseByoipCidrRequest();
    $request->advertiseByoipCidrRequest = new AdvertiseByoipCidrRequest();
    $request->advertiseByoipCidrRequest->cidr = 'temporibus';
    $request->xAmzAlgorithm = 'ab';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'repellendus';
    $request->xAmzTarget = AdvertiseByoipCidrXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_ADVERTISE_BYOIP_CIDR;

    $response = $sdk->sdk->advertiseByoipCidr($request);

    if ($response->advertiseByoipCidrResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## allowCustomRoutingTraffic

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AllowCustomRoutingTrafficRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllowCustomRoutingTrafficRequest;
use \OpenAPI\OpenAPI\Models\Operations\AllowCustomRoutingTrafficXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AllowCustomRoutingTrafficRequest();
    $request->allowCustomRoutingTrafficRequest = new AllowCustomRoutingTrafficRequest();
    $request->allowCustomRoutingTrafficRequest->allowAllTrafficToEndpoint = false;
    $request->allowCustomRoutingTrafficRequest->destinationAddresses = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->allowCustomRoutingTrafficRequest->destinationPorts = [
        473608,
        799159,
        800911,
        461479,
    ];
    $request->allowCustomRoutingTrafficRequest->endpointGroupArn = 'totam';
    $request->allowCustomRoutingTrafficRequest->endpointId = 'porro';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = AllowCustomRoutingTrafficXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_ALLOW_CUSTOM_ROUTING_TRAFFIC;

    $response = $sdk->sdk->allowCustomRoutingTraffic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAccelerator

<p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAcceleratorRequest();
    $request->createAcceleratorRequest = new CreateAcceleratorRequest();
    $request->createAcceleratorRequest->enabled = false;
    $request->createAcceleratorRequest->idempotencyToken = 'hic';
    $request->createAcceleratorRequest->ipAddressType = IpAddressTypeEnum::DUAL_STACK;
    $request->createAcceleratorRequest->ipAddresses = [
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->createAcceleratorRequest->name = 'Norma Ryan';
    $request->createAcceleratorRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'sed';
    $request->xAmzSignedHeaders = 'iste';
    $request->xAmzTarget = CreateAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_CREATE_ACCELERATOR;

    $response = $sdk->sdk->createAccelerator($request);

    if ($response->createAcceleratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomRoutingAccelerator

<p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomRoutingAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomRoutingAcceleratorRequest();
    $request->createCustomRoutingAcceleratorRequest = new CreateCustomRoutingAcceleratorRequest();
    $request->createCustomRoutingAcceleratorRequest->enabled = false;
    $request->createCustomRoutingAcceleratorRequest->idempotencyToken = 'dolor';
    $request->createCustomRoutingAcceleratorRequest->ipAddressType = IpAddressTypeEnum::DUAL_STACK;
    $request->createCustomRoutingAcceleratorRequest->ipAddresses = [
        'hic',
        'saepe',
    ];
    $request->createCustomRoutingAcceleratorRequest->name = 'Harvey Hessel';
    $request->createCustomRoutingAcceleratorRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzTarget = CreateCustomRoutingAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_CREATE_CUSTOM_ROUTING_ACCELERATOR;

    $response = $sdk->sdk->createCustomRoutingAccelerator($request);

    if ($response->createCustomRoutingAcceleratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomRoutingEndpointGroup

Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomRoutingEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomRoutingEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomRoutingDestinationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\CustomRoutingProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomRoutingEndpointGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomRoutingEndpointGroupRequest();
    $request->createCustomRoutingEndpointGroupRequest = new CreateCustomRoutingEndpointGroupRequest();
    $request->createCustomRoutingEndpointGroupRequest->destinationConfigurations = [
        new CustomRoutingDestinationConfiguration(),
    ];
    $request->createCustomRoutingEndpointGroupRequest->endpointGroupRegion = 'dolorem';
    $request->createCustomRoutingEndpointGroupRequest->idempotencyToken = 'corporis';
    $request->createCustomRoutingEndpointGroupRequest->listenerArn = 'explicabo';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = CreateCustomRoutingEndpointGroupXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_CREATE_CUSTOM_ROUTING_ENDPOINT_GROUP;

    $response = $sdk->sdk->createCustomRoutingEndpointGroup($request);

    if ($response->createCustomRoutingEndpointGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCustomRoutingListener

Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Operations\CreateCustomRoutingListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCustomRoutingListenerRequest();
    $request->createCustomRoutingListenerRequest = new CreateCustomRoutingListenerRequest();
    $request->createCustomRoutingListenerRequest->acceleratorArn = 'iure';
    $request->createCustomRoutingListenerRequest->idempotencyToken = 'culpa';
    $request->createCustomRoutingListenerRequest->portRanges = [
        new PortRange(),
        new PortRange(),
        new PortRange(),
        new PortRange(),
    ];
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = CreateCustomRoutingListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_CREATE_CUSTOM_ROUTING_LISTENER;

    $response = $sdk->sdk->createCustomRoutingListener($request);

    if ($response->createCustomRoutingListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createEndpointGroup

Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortOverride;
use \OpenAPI\OpenAPI\Models\Operations\CreateEndpointGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateEndpointGroupRequest();
    $request->createEndpointGroupRequest = new CreateEndpointGroupRequest();
    $request->createEndpointGroupRequest->endpointConfigurations = [
        new EndpointConfiguration(),
        new EndpointConfiguration(),
        new EndpointConfiguration(),
    ];
    $request->createEndpointGroupRequest->endpointGroupRegion = 'occaecati';
    $request->createEndpointGroupRequest->healthCheckIntervalSeconds = 253291;
    $request->createEndpointGroupRequest->healthCheckPath = 'commodi';
    $request->createEndpointGroupRequest->healthCheckPort = 466311;
    $request->createEndpointGroupRequest->healthCheckProtocol = HealthCheckProtocolEnum::HTTP;
    $request->createEndpointGroupRequest->idempotencyToken = 'velit';
    $request->createEndpointGroupRequest->listenerArn = 'error';
    $request->createEndpointGroupRequest->portOverrides = [
        new PortOverride(),
    ];
    $request->createEndpointGroupRequest->thresholdCount = 338007;
    $request->createEndpointGroupRequest->trafficDialPercentage = 1103.75;
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';
    $request->xAmzTarget = CreateEndpointGroupXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_CREATE_ENDPOINT_GROUP;

    $response = $sdk->sdk->createEndpointGroup($request);

    if ($response->createEndpointGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createListener

Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateListenerRequest();
    $request->createListenerRequest = new CreateListenerRequest();
    $request->createListenerRequest->acceleratorArn = 'ipsam';
    $request->createListenerRequest->clientAffinity = ClientAffinityEnum::SOURCE_IP;
    $request->createListenerRequest->idempotencyToken = 'possimus';
    $request->createListenerRequest->portRanges = [
        new PortRange(),
    ];
    $request->createListenerRequest->protocol = ProtocolEnum::TCP;
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzTarget = CreateListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_CREATE_LISTENER;

    $response = $sdk->sdk->createListener($request);

    if ($response->createListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccelerator

<p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAcceleratorRequest();
    $request->deleteAcceleratorRequest = new DeleteAcceleratorRequest();
    $request->deleteAcceleratorRequest->acceleratorArn = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DELETE_ACCELERATOR;

    $response = $sdk->sdk->deleteAccelerator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomRoutingAccelerator

<p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomRoutingAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomRoutingAcceleratorRequest();
    $request->deleteCustomRoutingAcceleratorRequest = new DeleteCustomRoutingAcceleratorRequest();
    $request->deleteCustomRoutingAcceleratorRequest->acceleratorArn = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = DeleteCustomRoutingAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DELETE_CUSTOM_ROUTING_ACCELERATOR;

    $response = $sdk->sdk->deleteCustomRoutingAccelerator($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomRoutingEndpointGroup

Delete an endpoint group from a listener for a custom routing accelerator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomRoutingEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCustomRoutingEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomRoutingEndpointGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomRoutingEndpointGroupRequest();
    $request->deleteCustomRoutingEndpointGroupRequest = new DeleteCustomRoutingEndpointGroupRequest();
    $request->deleteCustomRoutingEndpointGroupRequest->endpointGroupArn = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = DeleteCustomRoutingEndpointGroupXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DELETE_CUSTOM_ROUTING_ENDPOINT_GROUP;

    $response = $sdk->sdk->deleteCustomRoutingEndpointGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCustomRoutingListener

Delete a listener for a custom routing accelerator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCustomRoutingListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCustomRoutingListenerRequest();
    $request->deleteCustomRoutingListenerRequest = new DeleteCustomRoutingListenerRequest();
    $request->deleteCustomRoutingListenerRequest->listenerArn = 'quidem';
    $request->xAmzAlgorithm = 'molestias';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'rem';
    $request->xAmzSignedHeaders = 'voluptates';
    $request->xAmzTarget = DeleteCustomRoutingListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DELETE_CUSTOM_ROUTING_LISTENER;

    $response = $sdk->sdk->deleteCustomRoutingListener($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteEndpointGroup

Delete an endpoint group from a listener.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteEndpointGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteEndpointGroupRequest();
    $request->deleteEndpointGroupRequest = new DeleteEndpointGroupRequest();
    $request->deleteEndpointGroupRequest->endpointGroupArn = 'quasi';
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = DeleteEndpointGroupXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DELETE_ENDPOINT_GROUP;

    $response = $sdk->sdk->deleteEndpointGroup($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteListener

Delete a listener from an accelerator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteListenerRequest();
    $request->deleteListenerRequest = new DeleteListenerRequest();
    $request->deleteListenerRequest->listenerArn = 'est';
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = DeleteListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DELETE_LISTENER;

    $response = $sdk->sdk->deleteListener($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## denyCustomRoutingTraffic

<p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DenyCustomRoutingTrafficRequest;
use \OpenAPI\OpenAPI\Models\Shared\DenyCustomRoutingTrafficRequest;
use \OpenAPI\OpenAPI\Models\Operations\DenyCustomRoutingTrafficXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DenyCustomRoutingTrafficRequest();
    $request->denyCustomRoutingTrafficRequest = new DenyCustomRoutingTrafficRequest();
    $request->denyCustomRoutingTrafficRequest->denyAllTrafficToEndpoint = false;
    $request->denyCustomRoutingTrafficRequest->destinationAddresses = [
        'aliquid',
    ];
    $request->denyCustomRoutingTrafficRequest->destinationPorts = [
        552822,
        20107,
        164940,
    ];
    $request->denyCustomRoutingTrafficRequest->endpointGroupArn = 'assumenda';
    $request->denyCustomRoutingTrafficRequest->endpointId = 'ipsam';
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->xAmzTarget = DenyCustomRoutingTrafficXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DENY_CUSTOM_ROUTING_TRAFFIC;

    $response = $sdk->sdk->denyCustomRoutingTraffic($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deprovisionByoipCidr

<p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeprovisionByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeprovisionByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeprovisionByoipCidrXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeprovisionByoipCidrRequest();
    $request->deprovisionByoipCidrRequest = new DeprovisionByoipCidrRequest();
    $request->deprovisionByoipCidrRequest->cidr = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DeprovisionByoipCidrXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DEPROVISION_BYOIP_CIDR;

    $response = $sdk->sdk->deprovisionByoipCidr($request);

    if ($response->deprovisionByoipCidrResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccelerator

Describe an accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAcceleratorRequest();
    $request->describeAcceleratorRequest = new DescribeAcceleratorRequest();
    $request->describeAcceleratorRequest->acceleratorArn = 'necessitatibus';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DescribeAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_ACCELERATOR;

    $response = $sdk->sdk->describeAccelerator($request);

    if ($response->describeAcceleratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAcceleratorAttributes

Describe the attributes of an accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAcceleratorAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAcceleratorAttributesRequest();
    $request->describeAcceleratorAttributesRequest = new DescribeAcceleratorAttributesRequest();
    $request->describeAcceleratorAttributesRequest->acceleratorArn = 'in';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = DescribeAcceleratorAttributesXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_ACCELERATOR_ATTRIBUTES;

    $response = $sdk->sdk->describeAcceleratorAttributes($request);

    if ($response->describeAcceleratorAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomRoutingAccelerator

Describe a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomRoutingAcceleratorRequest();
    $request->describeCustomRoutingAcceleratorRequest = new DescribeCustomRoutingAcceleratorRequest();
    $request->describeCustomRoutingAcceleratorRequest->acceleratorArn = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = DescribeCustomRoutingAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ACCELERATOR;

    $response = $sdk->sdk->describeCustomRoutingAccelerator($request);

    if ($response->describeCustomRoutingAcceleratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomRoutingAcceleratorAttributes

Describe the attributes of a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCustomRoutingAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomRoutingAcceleratorAttributesRequest();
    $request->describeCustomRoutingAcceleratorAttributesRequest = new DescribeCustomRoutingAcceleratorAttributesRequest();
    $request->describeCustomRoutingAcceleratorAttributesRequest->acceleratorArn = 'delectus';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'blanditiis';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = DescribeCustomRoutingAcceleratorAttributesXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ACCELERATOR_ATTRIBUTES;

    $response = $sdk->sdk->describeCustomRoutingAcceleratorAttributes($request);

    if ($response->describeCustomRoutingAcceleratorAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomRoutingEndpointGroup

Describe an endpoint group for a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCustomRoutingEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingEndpointGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomRoutingEndpointGroupRequest();
    $request->describeCustomRoutingEndpointGroupRequest = new DescribeCustomRoutingEndpointGroupRequest();
    $request->describeCustomRoutingEndpointGroupRequest->endpointGroupArn = 'amet';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DescribeCustomRoutingEndpointGroupXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_ENDPOINT_GROUP;

    $response = $sdk->sdk->describeCustomRoutingEndpointGroup($request);

    if ($response->describeCustomRoutingEndpointGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCustomRoutingListener

The description of a listener for a custom routing accelerator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCustomRoutingListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCustomRoutingListenerRequest();
    $request->describeCustomRoutingListenerRequest = new DescribeCustomRoutingListenerRequest();
    $request->describeCustomRoutingListenerRequest->listenerArn = 'nihil';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = DescribeCustomRoutingListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_CUSTOM_ROUTING_LISTENER;

    $response = $sdk->sdk->describeCustomRoutingListener($request);

    if ($response->describeCustomRoutingListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeEndpointGroup

Describe an endpoint group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeEndpointGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeEndpointGroupRequest();
    $request->describeEndpointGroupRequest = new DescribeEndpointGroupRequest();
    $request->describeEndpointGroupRequest->endpointGroupArn = 'nobis';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = DescribeEndpointGroupXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_ENDPOINT_GROUP;

    $response = $sdk->sdk->describeEndpointGroup($request);

    if ($response->describeEndpointGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeListener

Describe a listener. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeListenerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeListenerRequest();
    $request->describeListenerRequest = new DescribeListenerRequest();
    $request->describeListenerRequest->listenerArn = 'ullam';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = DescribeListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_DESCRIBE_LISTENER;

    $response = $sdk->sdk->describeListener($request);

    if ($response->describeListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccelerators

List the accelerators for an Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAcceleratorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAcceleratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAcceleratorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAcceleratorsRequest();
    $request->listAcceleratorsRequest = new ListAcceleratorsRequest();
    $request->listAcceleratorsRequest->maxResults = 320997;
    $request->listAcceleratorsRequest->nextToken = 'eum';
    $request->maxResults = 'dolor';
    $request->nextToken = 'necessitatibus';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = ListAcceleratorsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_ACCELERATORS;

    $response = $sdk->sdk->listAccelerators($request);

    if ($response->listAcceleratorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listByoipCidrs

Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListByoipCidrsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListByoipCidrsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListByoipCidrsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListByoipCidrsRequest();
    $request->listByoipCidrsRequest = new ListByoipCidrsRequest();
    $request->listByoipCidrsRequest->maxResults = 806194;
    $request->listByoipCidrsRequest->nextToken = 'deleniti';
    $request->maxResults = 'facilis';
    $request->nextToken = 'in';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = ListByoipCidrsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_BYOIP_CIDRS;

    $response = $sdk->sdk->listByoipCidrs($request);

    if ($response->listByoipCidrsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomRoutingAccelerators

List the custom routing accelerators for an Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingAcceleratorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomRoutingAcceleratorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingAcceleratorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomRoutingAcceleratorsRequest();
    $request->listCustomRoutingAcceleratorsRequest = new ListCustomRoutingAcceleratorsRequest();
    $request->listCustomRoutingAcceleratorsRequest->maxResults = 841140;
    $request->listCustomRoutingAcceleratorsRequest->nextToken = 'sed';
    $request->maxResults = 'saepe';
    $request->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = ListCustomRoutingAcceleratorsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_ACCELERATORS;

    $response = $sdk->sdk->listCustomRoutingAccelerators($request);

    if ($response->listCustomRoutingAcceleratorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomRoutingEndpointGroups

List the endpoint groups that are associated with a listener for a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingEndpointGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomRoutingEndpointGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingEndpointGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomRoutingEndpointGroupsRequest();
    $request->listCustomRoutingEndpointGroupsRequest = new ListCustomRoutingEndpointGroupsRequest();
    $request->listCustomRoutingEndpointGroupsRequest->listenerArn = 'illum';
    $request->listCustomRoutingEndpointGroupsRequest->maxResults = 864934;
    $request->listCustomRoutingEndpointGroupsRequest->nextToken = 'maxime';
    $request->maxResults = 'ea';
    $request->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->xAmzTarget = ListCustomRoutingEndpointGroupsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_ENDPOINT_GROUPS;

    $response = $sdk->sdk->listCustomRoutingEndpointGroups($request);

    if ($response->listCustomRoutingEndpointGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomRoutingListeners

List the listeners for a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingListenersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomRoutingListenersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingListenersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomRoutingListenersRequest();
    $request->listCustomRoutingListenersRequest = new ListCustomRoutingListenersRequest();
    $request->listCustomRoutingListenersRequest->acceleratorArn = 'voluptate';
    $request->listCustomRoutingListenersRequest->maxResults = 420075;
    $request->listCustomRoutingListenersRequest->nextToken = 'nam';
    $request->maxResults = 'eaque';
    $request->nextToken = 'pariatur';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'fugiat';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'cumque';
    $request->xAmzTarget = ListCustomRoutingListenersXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_LISTENERS;

    $response = $sdk->sdk->listCustomRoutingListeners($request);

    if ($response->listCustomRoutingListenersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomRoutingPortMappings

<p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingPortMappingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomRoutingPortMappingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingPortMappingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomRoutingPortMappingsRequest();
    $request->listCustomRoutingPortMappingsRequest = new ListCustomRoutingPortMappingsRequest();
    $request->listCustomRoutingPortMappingsRequest->acceleratorArn = 'corporis';
    $request->listCustomRoutingPortMappingsRequest->endpointGroupArn = 'hic';
    $request->listCustomRoutingPortMappingsRequest->maxResults = 729991;
    $request->listCustomRoutingPortMappingsRequest->nextToken = 'nobis';
    $request->maxResults = 'dolores';
    $request->nextToken = 'quis';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'nesciunt';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListCustomRoutingPortMappingsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_PORT_MAPPINGS;

    $response = $sdk->sdk->listCustomRoutingPortMappings($request);

    if ($response->listCustomRoutingPortMappingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCustomRoutingPortMappingsByDestination

List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingPortMappingsByDestinationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCustomRoutingPortMappingsByDestinationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCustomRoutingPortMappingsByDestinationRequest();
    $request->listCustomRoutingPortMappingsByDestinationRequest = new ListCustomRoutingPortMappingsByDestinationRequest();
    $request->listCustomRoutingPortMappingsByDestinationRequest->destinationAddress = 'dolores';
    $request->listCustomRoutingPortMappingsByDestinationRequest->endpointId = 'minus';
    $request->listCustomRoutingPortMappingsByDestinationRequest->maxResults = 463451;
    $request->listCustomRoutingPortMappingsByDestinationRequest->nextToken = 'dolor';
    $request->maxResults = 'vero';
    $request->nextToken = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = ListCustomRoutingPortMappingsByDestinationXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_CUSTOM_ROUTING_PORT_MAPPINGS_BY_DESTINATION;

    $response = $sdk->sdk->listCustomRoutingPortMappingsByDestination($request);

    if ($response->listCustomRoutingPortMappingsByDestinationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEndpointGroups

List the endpoint groups that are associated with a listener. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListEndpointGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEndpointGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEndpointGroupsRequest();
    $request->listEndpointGroupsRequest = new ListEndpointGroupsRequest();
    $request->listEndpointGroupsRequest->listenerArn = 'consequuntur';
    $request->listEndpointGroupsRequest->maxResults = 500026;
    $request->listEndpointGroupsRequest->nextToken = 'error';
    $request->maxResults = 'eaque';
    $request->nextToken = 'occaecati';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'asperiores';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ListEndpointGroupsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_ENDPOINT_GROUPS;

    $response = $sdk->sdk->listEndpointGroups($request);

    if ($response->listEndpointGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listListeners

List the listeners for an accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListListenersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListListenersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListListenersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListListenersRequest();
    $request->listListenersRequest = new ListListenersRequest();
    $request->listListenersRequest->acceleratorArn = 'deleniti';
    $request->listListenersRequest->maxResults = 864282;
    $request->listListenersRequest->nextToken = 'provident';
    $request->maxResults = 'nobis';
    $request->nextToken = 'libero';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = ListListenersXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_LISTENERS;

    $response = $sdk->sdk->listListeners($request);

    if ($response->listListenersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

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
    $request->listTagsForResourceRequest->resourceArn = 'qui';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## provisionByoipCidr

<p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Shared\CidrAuthorizationContext;
use \OpenAPI\OpenAPI\Models\Operations\ProvisionByoipCidrXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProvisionByoipCidrRequest();
    $request->provisionByoipCidrRequest = new ProvisionByoipCidrRequest();
    $request->provisionByoipCidrRequest->cidr = 'amet';
    $request->provisionByoipCidrRequest->cidrAuthorizationContext = new CidrAuthorizationContext();
    $request->provisionByoipCidrRequest->cidrAuthorizationContext->message = 'dolorum';
    $request->provisionByoipCidrRequest->cidrAuthorizationContext->signature = 'numquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ProvisionByoipCidrXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_PROVISION_BYOIP_CIDR;

    $response = $sdk->sdk->provisionByoipCidr($request);

    if ($response->provisionByoipCidrResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeCustomRoutingEndpoints

Remove endpoints from a custom routing accelerator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveCustomRoutingEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveCustomRoutingEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveCustomRoutingEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveCustomRoutingEndpointsRequest();
    $request->removeCustomRoutingEndpointsRequest = new RemoveCustomRoutingEndpointsRequest();
    $request->removeCustomRoutingEndpointsRequest->endpointGroupArn = 'quidem';
    $request->removeCustomRoutingEndpointsRequest->endpointIds = [
        'voluptas',
        'natus',
        'eos',
        'atque',
    ];
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = RemoveCustomRoutingEndpointsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_REMOVE_CUSTOM_ROUTING_ENDPOINTS;

    $response = $sdk->sdk->removeCustomRoutingEndpoints($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeEndpoints

<p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\RemoveEndpointsRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\RemoveEndpointsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveEndpointsRequest();
    $request->removeEndpointsRequest = new RemoveEndpointsRequest();
    $request->removeEndpointsRequest->endpointGroupArn = 'dolorum';
    $request->removeEndpointsRequest->endpointIdentifiers = [
        new EndpointIdentifier(),
        new EndpointIdentifier(),
        new EndpointIdentifier(),
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'necessitatibus';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = RemoveEndpointsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_REMOVE_ENDPOINTS;

    $response = $sdk->sdk->removeEndpoints($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>

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
    $request->tagResourceRequest->resourceArn = 'id';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>

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
    $request->untagResourceRequest->resourceArn = 'saepe';
    $request->untagResourceRequest->tagKeys = [
        'deserunt',
        'provident',
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccelerator

<p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAcceleratorRequest();
    $request->updateAcceleratorRequest = new UpdateAcceleratorRequest();
    $request->updateAcceleratorRequest->acceleratorArn = 'tempora';
    $request->updateAcceleratorRequest->enabled = false;
    $request->updateAcceleratorRequest->ipAddressType = IpAddressTypeEnum::IPV4;
    $request->updateAcceleratorRequest->name = 'Erick Denesik';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'tenetur';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = UpdateAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UPDATE_ACCELERATOR;

    $response = $sdk->sdk->updateAccelerator($request);

    if ($response->updateAcceleratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAcceleratorAttributes

Update the attributes for an accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAcceleratorAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAcceleratorAttributesRequest();
    $request->updateAcceleratorAttributesRequest = new UpdateAcceleratorAttributesRequest();
    $request->updateAcceleratorAttributesRequest->acceleratorArn = 'tempore';
    $request->updateAcceleratorAttributesRequest->flowLogsEnabled = false;
    $request->updateAcceleratorAttributesRequest->flowLogsS3Bucket = 'accusamus';
    $request->updateAcceleratorAttributesRequest->flowLogsS3Prefix = 'numquam';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'sit';
    $request->xAmzSignedHeaders = 'expedita';
    $request->xAmzTarget = UpdateAcceleratorAttributesXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UPDATE_ACCELERATOR_ATTRIBUTES;

    $response = $sdk->sdk->updateAcceleratorAttributes($request);

    if ($response->updateAcceleratorAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomRoutingAccelerator

Update a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCustomRoutingAcceleratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\IpAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomRoutingAcceleratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomRoutingAcceleratorRequest();
    $request->updateCustomRoutingAcceleratorRequest = new UpdateCustomRoutingAcceleratorRequest();
    $request->updateCustomRoutingAcceleratorRequest->acceleratorArn = 'neque';
    $request->updateCustomRoutingAcceleratorRequest->enabled = false;
    $request->updateCustomRoutingAcceleratorRequest->ipAddressType = IpAddressTypeEnum::IPV4;
    $request->updateCustomRoutingAcceleratorRequest->name = 'Kelli Hintz';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'soluta';
    $request->xAmzTarget = UpdateCustomRoutingAcceleratorXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UPDATE_CUSTOM_ROUTING_ACCELERATOR;

    $response = $sdk->sdk->updateCustomRoutingAccelerator($request);

    if ($response->updateCustomRoutingAcceleratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomRoutingAcceleratorAttributes

Update the attributes for a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomRoutingAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCustomRoutingAcceleratorAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomRoutingAcceleratorAttributesRequest();
    $request->updateCustomRoutingAcceleratorAttributesRequest = new UpdateCustomRoutingAcceleratorAttributesRequest();
    $request->updateCustomRoutingAcceleratorAttributesRequest->acceleratorArn = 'dicta';
    $request->updateCustomRoutingAcceleratorAttributesRequest->flowLogsEnabled = false;
    $request->updateCustomRoutingAcceleratorAttributesRequest->flowLogsS3Bucket = 'laborum';
    $request->updateCustomRoutingAcceleratorAttributesRequest->flowLogsS3Prefix = 'totam';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzTarget = UpdateCustomRoutingAcceleratorAttributesXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UPDATE_CUSTOM_ROUTING_ACCELERATOR_ATTRIBUTES;

    $response = $sdk->sdk->updateCustomRoutingAcceleratorAttributes($request);

    if ($response->updateCustomRoutingAcceleratorAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCustomRoutingListener

Update a listener for a custom routing accelerator. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCustomRoutingListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCustomRoutingListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCustomRoutingListenerRequest();
    $request->updateCustomRoutingListenerRequest = new UpdateCustomRoutingListenerRequest();
    $request->updateCustomRoutingListenerRequest->listenerArn = 'molestias';
    $request->updateCustomRoutingListenerRequest->portRanges = [
        new PortRange(),
        new PortRange(),
        new PortRange(),
        new PortRange(),
    ];
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'ullam';
    $request->xAmzTarget = UpdateCustomRoutingListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UPDATE_CUSTOM_ROUTING_LISTENER;

    $response = $sdk->sdk->updateCustomRoutingListener($request);

    if ($response->updateCustomRoutingListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateEndpointGroup

Update an endpoint group. A resource must be valid and active when you add it as an endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateEndpointGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\HealthCheckProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortOverride;
use \OpenAPI\OpenAPI\Models\Operations\UpdateEndpointGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateEndpointGroupRequest();
    $request->updateEndpointGroupRequest = new UpdateEndpointGroupRequest();
    $request->updateEndpointGroupRequest->endpointConfigurations = [
        new EndpointConfiguration(),
        new EndpointConfiguration(),
        new EndpointConfiguration(),
    ];
    $request->updateEndpointGroupRequest->endpointGroupArn = 'hic';
    $request->updateEndpointGroupRequest->healthCheckIntervalSeconds = 30452;
    $request->updateEndpointGroupRequest->healthCheckPath = 'cumque';
    $request->updateEndpointGroupRequest->healthCheckPort = 746994;
    $request->updateEndpointGroupRequest->healthCheckProtocol = HealthCheckProtocolEnum::HTTPS;
    $request->updateEndpointGroupRequest->portOverrides = [
        new PortOverride(),
    ];
    $request->updateEndpointGroupRequest->thresholdCount = 903720;
    $request->updateEndpointGroupRequest->trafficDialPercentage = 2174.5;
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'aperiam';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = UpdateEndpointGroupXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UPDATE_ENDPOINT_GROUP;

    $response = $sdk->sdk->updateEndpointGroup($request);

    if ($response->updateEndpointGroupResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateListener

Update a listener. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateListenerRequest;
use \OpenAPI\OpenAPI\Models\Shared\ClientAffinityEnum;
use \OpenAPI\OpenAPI\Models\Shared\PortRange;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateListenerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateListenerRequest();
    $request->updateListenerRequest = new UpdateListenerRequest();
    $request->updateListenerRequest->clientAffinity = ClientAffinityEnum::NONE;
    $request->updateListenerRequest->listenerArn = 'dolore';
    $request->updateListenerRequest->portRanges = [
        new PortRange(),
        new PortRange(),
    ];
    $request->updateListenerRequest->protocol = ProtocolEnum::TCP;
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->xAmzTarget = UpdateListenerXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_UPDATE_LISTENER;

    $response = $sdk->sdk->updateListener($request);

    if ($response->updateListenerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## withdrawByoipCidr

<p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\WithdrawByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Shared\WithdrawByoipCidrRequest;
use \OpenAPI\OpenAPI\Models\Operations\WithdrawByoipCidrXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WithdrawByoipCidrRequest();
    $request->withdrawByoipCidrRequest = new WithdrawByoipCidrRequest();
    $request->withdrawByoipCidrRequest->cidr = 'est';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'ut';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = WithdrawByoipCidrXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_WITHDRAW_BYOIP_CIDR;

    $response = $sdk->sdk->withdrawByoipCidr($request);

    if ($response->withdrawByoipCidrResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
