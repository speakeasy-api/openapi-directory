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
import org.openapis.openapi.models.operations.CancelContactRequest;
import org.openapis.openapi.models.operations.CancelContactResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CancelContactRequest req = new CancelContactRequest("provident") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "unde";
                xAmzDate = "nulla";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "illum";
                xAmzSignedHeaders = "vel";
            }};            

            CancelContactResponse res = sdk.cancelContact(req);

            if (res.contactIdResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [cancelContact](docs/sdk/README.md#cancelcontact) - Cancels a contact with a specified contact ID.
* [createConfig](docs/sdk/README.md#createconfig) - <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
* [createDataflowEndpointGroup](docs/sdk/README.md#createdataflowendpointgroup) - <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
* [createEphemeris](docs/sdk/README.md#createephemeris) - Creates an Ephemeris with the specified <code>EphemerisData</code>.
* [createMissionProfile](docs/sdk/README.md#createmissionprofile) - <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
* [deleteConfig](docs/sdk/README.md#deleteconfig) - Deletes a <code>Config</code>.
* [deleteDataflowEndpointGroup](docs/sdk/README.md#deletedataflowendpointgroup) - Deletes a dataflow endpoint group.
* [deleteEphemeris](docs/sdk/README.md#deleteephemeris) - Deletes an ephemeris
* [deleteMissionProfile](docs/sdk/README.md#deletemissionprofile) - Deletes a mission profile.
* [describeContact](docs/sdk/README.md#describecontact) - Describes an existing contact.
* [describeEphemeris](docs/sdk/README.md#describeephemeris) - Describes an existing ephemeris.
* [getAgentConfiguration](docs/sdk/README.md#getagentconfiguration) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>
* [getConfig](docs/sdk/README.md#getconfig) - <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
* [getDataflowEndpointGroup](docs/sdk/README.md#getdataflowendpointgroup) - Returns the dataflow endpoint group.
* [getMinuteUsage](docs/sdk/README.md#getminuteusage) - Returns the number of minutes used by account.
* [getMissionProfile](docs/sdk/README.md#getmissionprofile) - Returns a mission profile.
* [getSatellite](docs/sdk/README.md#getsatellite) - Returns a satellite.
* [listConfigs](docs/sdk/README.md#listconfigs) - Returns a list of <code>Config</code> objects.
* [listContacts](docs/sdk/README.md#listcontacts) - <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
* [listDataflowEndpointGroups](docs/sdk/README.md#listdataflowendpointgroups) - Returns a list of <code>DataflowEndpoint</code> groups.
* [listEphemerides](docs/sdk/README.md#listephemerides) - List existing ephemerides.
* [listGroundStations](docs/sdk/README.md#listgroundstations) - Returns a list of ground stations. 
* [listMissionProfiles](docs/sdk/README.md#listmissionprofiles) - Returns a list of mission profiles.
* [listSatellites](docs/sdk/README.md#listsatellites) - Returns a list of satellites.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of tags for a specified resource.
* [registerAgent](docs/sdk/README.md#registeragent) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>
* [reserveContact](docs/sdk/README.md#reservecontact) - Reserves a contact using specified parameters.
* [tagResource](docs/sdk/README.md#tagresource) - Assigns a tag to a resource.
* [untagResource](docs/sdk/README.md#untagresource) - Deassigns a resource tag.
* [updateAgentStatus](docs/sdk/README.md#updateagentstatus) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>
* [updateConfig](docs/sdk/README.md#updateconfig) - <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
* [updateEphemeris](docs/sdk/README.md#updateephemeris) - Updates an existing ephemeris
* [updateMissionProfile](docs/sdk/README.md#updatemissionprofile) - <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
