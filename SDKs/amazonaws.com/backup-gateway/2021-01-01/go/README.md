# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/backup-gateway/2021-01-01/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.AssociateGatewayToServer(ctx, operations.AssociateGatewayToServerRequest{
        AssociateGatewayToServerInput: shared.AssociateGatewayToServerInput{
            GatewayArn: "corrupti",
            ServerArn: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.AssociateGatewayToServerXAmzTargetEnumBackupOnPremisesV20210101AssociateGatewayToServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateGatewayToServerOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateGatewayToServer](docs/sdk/README.md#associategatewaytoserver) - Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
* [CreateGateway](docs/sdk/README.md#creategateway) - Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
* [DeleteGateway](docs/sdk/README.md#deletegateway) - Deletes a backup gateway.
* [DeleteHypervisor](docs/sdk/README.md#deletehypervisor) - Deletes a hypervisor.
* [DisassociateGatewayFromServer](docs/sdk/README.md#disassociategatewayfromserver) - Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
* [GetBandwidthRateLimitSchedule](docs/sdk/README.md#getbandwidthratelimitschedule) - Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
* [GetGateway](docs/sdk/README.md#getgateway) - By providing the ARN (Amazon Resource Name), this API returns the gateway.
* [GetHypervisor](docs/sdk/README.md#gethypervisor) - This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
* [GetHypervisorPropertyMappings](docs/sdk/README.md#gethypervisorpropertymappings) - This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [GetVirtualMachine](docs/sdk/README.md#getvirtualmachine) - By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
* [ImportHypervisorConfiguration](docs/sdk/README.md#importhypervisorconfiguration) - Connect to a hypervisor by importing its configuration.
* [ListGateways](docs/sdk/README.md#listgateways) - Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
* [ListHypervisors](docs/sdk/README.md#listhypervisors) - Lists your hypervisors.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
* [ListVirtualMachines](docs/sdk/README.md#listvirtualmachines) - Lists your virtual machines.
* [PutBandwidthRateLimitSchedule](docs/sdk/README.md#putbandwidthratelimitschedule) - This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
* [PutHypervisorPropertyMappings](docs/sdk/README.md#puthypervisorpropertymappings) - This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* [PutMaintenanceStartTime](docs/sdk/README.md#putmaintenancestarttime) - Set the maintenance start time for a gateway.
* [StartVirtualMachinesMetadataSync](docs/sdk/README.md#startvirtualmachinesmetadatasync) - This action sends a request to sync metadata across the specified virtual machines.
* [TagResource](docs/sdk/README.md#tagresource) - Tag the resource.
* [TestHypervisorConfiguration](docs/sdk/README.md#testhypervisorconfiguration) - Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from the resource.
* [UpdateGatewayInformation](docs/sdk/README.md#updategatewayinformation) - Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
* [UpdateGatewaySoftwareNow](docs/sdk/README.md#updategatewaysoftwarenow) - <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
* [UpdateHypervisor](docs/sdk/README.md#updatehypervisor) - Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
