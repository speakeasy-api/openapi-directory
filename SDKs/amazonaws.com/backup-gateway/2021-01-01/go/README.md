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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AssociateGatewayToServerRequest{
        Headers: operations.AssociateGatewayToServerHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "BackupOnPremises_v20210101.AssociateGatewayToServer",
        },
        Request: shared.AssociateGatewayToServerInput{
            GatewayArn: "nihil",
            ServerArn: "fuga",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateGatewayToServer(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AssociateGatewayToServer` - Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
* `CreateGateway` - Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
* `DeleteGateway` - Deletes a backup gateway.
* `DeleteHypervisor` - Deletes a hypervisor.
* `DisassociateGatewayFromServer` - Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
* `GetBandwidthRateLimitSchedule` - Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
* `GetGateway` - By providing the ARN (Amazon Resource Name), this API returns the gateway.
* `GetHypervisor` - This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
* `GetHypervisorPropertyMappings` - This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* `GetVirtualMachine` - By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
* `ImportHypervisorConfiguration` - Connect to a hypervisor by importing its configuration.
* `ListGateways` - Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
* `ListHypervisors` - Lists your hypervisors.
* `ListTagsForResource` - Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
* `ListVirtualMachines` - Lists your virtual machines.
* `PutBandwidthRateLimitSchedule` - This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
* `PutHypervisorPropertyMappings` - This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* `PutMaintenanceStartTime` - Set the maintenance start time for a gateway.
* `StartVirtualMachinesMetadataSync` - This action sends a request to sync metadata across the specified virtual machines.
* `TagResource` - Tag the resource.
* `TestHypervisorConfiguration` - Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
* `UntagResource` - Removes tags from the resource.
* `UpdateGatewayInformation` - Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
* `UpdateGatewaySoftwareNow` - <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
* `UpdateHypervisor` - Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
