# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateGatewayToServerXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateGatewayToServerRequest;
import org.openapis.openapi.models.operations.AssociateGatewayToServerResponse;
import org.openapis.openapi.models.shared.AssociateGatewayToServerInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateGatewayToServerRequest req = new AssociateGatewayToServerRequest() {{
                associateGatewayToServerInput = new AssociateGatewayToServerInput() {{
                    gatewayArn = "corrupti";
                    serverArn = "provident";
                }};
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
                xAmzTarget = "BackupOnPremises_v20210101.AssociateGatewayToServer";
            }}            

            AssociateGatewayToServerResponse res = sdk.associateGatewayToServer(req);

            if (res.associateGatewayToServerOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `associateGatewayToServer` - Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.
* `createGateway` - Creates a backup gateway. After you create a gateway, you can associate it with a server using the <code>AssociateGatewayToServer</code> operation.
* `deleteGateway` - Deletes a backup gateway.
* `deleteHypervisor` - Deletes a hypervisor.
* `disassociateGatewayFromServer` - Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.
* `getBandwidthRateLimitSchedule` - Retrieves the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have bandwidth rate limit schedules, which means no bandwidth rate limiting is in effect. Use this to get a gateway's bandwidth rate limit schedule.
* `getGateway` - By providing the ARN (Amazon Resource Name), this API returns the gateway.
* `getHypervisor` - This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
* `getHypervisorPropertyMappings` - This action retrieves the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* `getVirtualMachine` - By providing the ARN (Amazon Resource Name), this API returns the virtual machine.
* `importHypervisorConfiguration` - Connect to a hypervisor by importing its configuration.
* `listGateways` - Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).
* `listHypervisors` - Lists your hypervisors.
* `listTagsForResource` - Lists the tags applied to the resource identified by its Amazon Resource Name (ARN).
* `listVirtualMachines` - Lists your virtual machines.
* `putBandwidthRateLimitSchedule` - This action sets the bandwidth rate limit schedule for a specified gateway. By default, gateways do not have a bandwidth rate limit schedule, which means no bandwidth rate limiting is in effect. Use this to initiate a gateway's bandwidth rate limit schedule.
* `putHypervisorPropertyMappings` - This action sets the property mappings for the specified hypervisor. A hypervisor property mapping displays the relationship of entity properties available from the on-premises hypervisor to the properties available in Amazon Web Services.
* `putMaintenanceStartTime` - Set the maintenance start time for a gateway.
* `startVirtualMachinesMetadataSync` - This action sends a request to sync metadata across the specified virtual machines.
* `tagResource` - Tag the resource.
* `testHypervisorConfiguration` - Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.
* `untagResource` - Removes tags from the resource.
* `updateGatewayInformation` - Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.
* `updateGatewaySoftwareNow` - <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.</p> <note> <p>When you make this request, you get a <code>200 OK</code> success response immediately. However, it might take some time for the update to complete.</p> </note>
* `updateHypervisor` - Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
