# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->addCustomRoutingEndpointsRequest->endpointGroupArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AddCustomRoutingEndpointsXAmzTargetEnum::GLOBAL_ACCELERATOR_V20180706_ADD_CUSTOM_ROUTING_ENDPOINTS;

    $response = $sdk->addCustomRoutingEndpoints($request);

    if ($response->addCustomRoutingEndpointsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [addCustomRoutingEndpoints](docs/sdk/README.md#addcustomroutingendpoints) - <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p> <p>The listener port range must be large enough to support the number of IP addresses that can be specified in your subnet. The number of ports required is: subnet size times the number of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener port range of at least 255 ports. </p> <p>Note: You must have enough remaining listener ports available to map to the subnet ports, or the call will fail with a LimitExceededException.</p> <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p>
* [addEndpoints](docs/sdk/README.md#addendpoints) - <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The alternative options are to add endpoints when you create an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API) or when you update an endpoint group (with the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p> <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p> <ul> <li> <p>It's faster, because Global Accelerator only has to resolve the new endpoints that you're adding.</p> </li> <li> <p>It's more convenient, because you don't need to specify all of the current endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p> </li> </ul>
* [advertiseByoipCidr](docs/sdk/README.md#advertisebyoipcidr) - <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to the specified addresses starts routing to Amazon Web Services because of propagation delays. </p> <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html"> WithdrawByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [allowCustomRoutingTraffic](docs/sdk/README.md#allowcustomroutingtraffic) - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* [createAccelerator](docs/sdk/README.md#createaccelerator) - <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [createCustomRoutingAccelerator](docs/sdk/README.md#createcustomroutingaccelerator) - <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p> <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive traffic. To enable all destinations to receive traffic, or to specify individual port mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html"> AllowCustomRoutingTraffic</a> operation.</p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [createCustomRoutingEndpointGroup](docs/sdk/README.md#createcustomroutingendpointgroup) - Create an endpoint group for the specified listener for a custom routing accelerator. An endpoint group is a collection of endpoints in one Amazon Web Services Region. 
* [createCustomRoutingListener](docs/sdk/README.md#createcustomroutinglistener) - Create a listener to process inbound connections from clients to a custom routing accelerator. Connections arrive to assigned static IP addresses on the port range that you specify. 
* [createEndpointGroup](docs/sdk/README.md#createendpointgroup) - Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services Region. A resource must be valid and active when you add it as an endpoint.
* [createListener](docs/sdk/README.md#createlistener) - Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify. 
* [deleteAccelerator](docs/sdk/README.md#deleteaccelerator) - <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
* [deleteCustomRoutingAccelerator](docs/sdk/README.md#deletecustomroutingaccelerator) - <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources (listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p> <important> <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses. </p> <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them. As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in the <i>Global Accelerator Developer Guide</i>.</p> </important>
* [deleteCustomRoutingEndpointGroup](docs/sdk/README.md#deletecustomroutingendpointgroup) - Delete an endpoint group from a listener for a custom routing accelerator.
* [deleteCustomRoutingListener](docs/sdk/README.md#deletecustomroutinglistener) - Delete a listener for a custom routing accelerator.
* [deleteEndpointGroup](docs/sdk/README.md#deleteendpointgroup) - Delete an endpoint group from a listener.
* [deleteListener](docs/sdk/README.md#deletelistener) - Delete a listener from an accelerator.
* [denyCustomRoutingTraffic](docs/sdk/README.md#denycustomroutingtraffic) - <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a specified list of destination IP addresses and ports. Note that you cannot specify IP addresses or ports outside of the range that you configured for the endpoint group.</p> <p>After you make changes, you can verify that the updates are complete by checking the status of your accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
* [deprovisionByoipCidr](docs/sdk/README.md#deprovisionbyoipcidr) - <p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p> <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have any accelerators that are using static IP addresses allocated from its address range. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [describeAccelerator](docs/sdk/README.md#describeaccelerator) - Describe an accelerator. 
* [describeAcceleratorAttributes](docs/sdk/README.md#describeacceleratorattributes) - Describe the attributes of an accelerator. 
* [describeCustomRoutingAccelerator](docs/sdk/README.md#describecustomroutingaccelerator) - Describe a custom routing accelerator. 
* [describeCustomRoutingAcceleratorAttributes](docs/sdk/README.md#describecustomroutingacceleratorattributes) - Describe the attributes of a custom routing accelerator. 
* [describeCustomRoutingEndpointGroup](docs/sdk/README.md#describecustomroutingendpointgroup) - Describe an endpoint group for a custom routing accelerator. 
* [describeCustomRoutingListener](docs/sdk/README.md#describecustomroutinglistener) - The description of a listener for a custom routing accelerator.
* [describeEndpointGroup](docs/sdk/README.md#describeendpointgroup) - Describe an endpoint group. 
* [describeListener](docs/sdk/README.md#describelistener) - Describe a listener. 
* [listAccelerators](docs/sdk/README.md#listaccelerators) - List the accelerators for an Amazon Web Services account. 
* [listByoipCidrs](docs/sdk/README.md#listbyoipcidrs) - Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including the current state and a history of state changes.
* [listCustomRoutingAccelerators](docs/sdk/README.md#listcustomroutingaccelerators) - List the custom routing accelerators for an Amazon Web Services account. 
* [listCustomRoutingEndpointGroups](docs/sdk/README.md#listcustomroutingendpointgroups) - List the endpoint groups that are associated with a listener for a custom routing accelerator. 
* [listCustomRoutingListeners](docs/sdk/README.md#listcustomroutinglisteners) - List the listeners for a custom routing accelerator. 
* [listCustomRoutingPortMappings](docs/sdk/README.md#listcustomroutingportmappings) - <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator. For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p> <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p> <p>The mappings also include a flag for each destination denoting which destination IP addresses and ports are allowed or denied traffic.</p>
* [listCustomRoutingPortMappingsByDestination](docs/sdk/README.md#listcustomroutingportmappingsbydestination) - List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that span multiple custom routing accelerators in your account, or for scenarios where you only want to list the port mappings for a specific destination instance.
* [listEndpointGroups](docs/sdk/README.md#listendpointgroups) - List the endpoint groups that are associated with a listener. 
* [listListeners](docs/sdk/README.md#listlisteners) - List the listeners for an accelerator. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - <p>List all tags for an accelerator. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
* [provisionByoipCidr](docs/sdk/README.md#provisionbyoipcidr) - <p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned, it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html"> AdvertiseByoipCidr</a>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [removeCustomRoutingEndpoints](docs/sdk/README.md#removecustomroutingendpoints) - Remove endpoints from a custom routing accelerator.
* [removeEndpoints](docs/sdk/README.md#removeendpoints) - <p>Remove endpoints from an endpoint group. </p> <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove endpoints by updating an endpoint group by using the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p> <ul> <li> <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the <code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the endpoint group except the ones that you want to remove from the group.</p> </li> <li> <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the <code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that remain in the group.</p> </li> </ul>
* [tagResource](docs/sdk/README.md#tagresource) - <p>Add tags to an accelerator resource. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
* [untagResource](docs/sdk/README.md#untagresource) - <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
* [updateAccelerator](docs/sdk/README.md#updateaccelerator) - <p>Update an accelerator. </p> <important> <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the US West (Oregon) Region to create, update, or otherwise work with accelerators. That is, for example, specify <code>--region us-west-2</code> on AWS CLI commands.</p> </important>
* [updateAcceleratorAttributes](docs/sdk/README.md#updateacceleratorattributes) - Update the attributes for an accelerator. 
* [updateCustomRoutingAccelerator](docs/sdk/README.md#updatecustomroutingaccelerator) - Update a custom routing accelerator. 
* [updateCustomRoutingAcceleratorAttributes](docs/sdk/README.md#updatecustomroutingacceleratorattributes) - Update the attributes for a custom routing accelerator. 
* [updateCustomRoutingListener](docs/sdk/README.md#updatecustomroutinglistener) - Update a listener for a custom routing accelerator. 
* [updateEndpointGroup](docs/sdk/README.md#updateendpointgroup) - Update an endpoint group. A resource must be valid and active when you add it as an endpoint.
* [updateListener](docs/sdk/README.md#updatelistener) - Update a listener. 
* [withdrawByoipCidr](docs/sdk/README.md#withdrawbyoipcidr) - <p>Stops advertising an address range that is provisioned as an address pool. You can perform this operation at most once every 10 seconds, even if you specify different address ranges each time.</p> <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of propagation delays.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
