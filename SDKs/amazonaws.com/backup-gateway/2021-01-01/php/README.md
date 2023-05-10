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
use \OpenAPI\OpenAPI\Models\Operations\AssociateGatewayToServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateGatewayToServerInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateGatewayToServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateGatewayToServerRequest();
    $request->associateGatewayToServerInput = new AssociateGatewayToServerInput();
    $request->associateGatewayToServerInput->gatewayArn = 'corrupti';
    $request->associateGatewayToServerInput->serverArn = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateGatewayToServerXAmzTargetEnum::BACKUP_ON_PREMISES_V20210101_ASSOCIATE_GATEWAY_TO_SERVER;

    $response = $sdk->associateGatewayToServer($request);

    if ($response->associateGatewayToServerOutput !== null) {
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

* [associateGatewayToServer](docs/sdk/README.md#associategatewaytoserver) - Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
* [createGateway](docs/sdk/README.md#creategateway) - Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
* [deleteGateway](docs/sdk/README.md#deletegateway) - Deletes a backup gateway.
* [deleteHypervisor](docs/sdk/README.md#deletehypervisor) - Deletes a hypervisor.
* [disassociateGatewayFromServer](docs/sdk/README.md#disassociategatewayfromserver) - Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
* [getBandwidthRateLimitSchedule](docs/sdk/README.md#getbandwidthratelimitschedule) - Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
* [getGateway](docs/sdk/README.md#getgateway) - By providing the ARN (Amazon Resource Name), this API returns the gateway.
* [getHypervisor](docs/sdk/README.md#gethypervisor) - This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
* [getHypervisorPropertyMappings](docs/sdk/README.md#gethypervisorpropertymappings) - This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [getVirtualMachine](docs/sdk/README.md#getvirtualmachine) - By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
* [importHypervisorConfiguration](docs/sdk/README.md#importhypervisorconfiguration) - Connect to a hypervisor by importing its configuration.
* [listGateways](docs/sdk/README.md#listgateways) - Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
* [listHypervisors](docs/sdk/README.md#listhypervisors) - Lists your hypervisors.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
* [listVirtualMachines](docs/sdk/README.md#listvirtualmachines) - Lists your virtual machines.
* [putBandwidthRateLimitSchedule](docs/sdk/README.md#putbandwidthratelimitschedule) - This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
* [putHypervisorPropertyMappings](docs/sdk/README.md#puthypervisorpropertymappings) - This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [putMaintenanceStartTime](docs/sdk/README.md#putmaintenancestarttime) - Set the maintenance start time for a gateway.
* [startVirtualMachinesMetadataSync](docs/sdk/README.md#startvirtualmachinesmetadatasync) - This action sends a request to sync metadata across the specified virtual machines.
* [tagResource](docs/sdk/README.md#tagresource) - Tag the resource.
* [testHypervisorConfiguration](docs/sdk/README.md#testhypervisorconfiguration) - Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the resource.
* [updateGatewayInformation](docs/sdk/README.md#updategatewayinformation) - Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
* [updateGatewaySoftwareNow](docs/sdk/README.md#updategatewaysoftwarenow) - <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
* [updateHypervisor](docs/sdk/README.md#updatehypervisor) - Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
