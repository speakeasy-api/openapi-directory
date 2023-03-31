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
import org.openapis.openapi.models.operations.CancelContactPathParams;
import org.openapis.openapi.models.operations.CancelContactHeaders;
import org.openapis.openapi.models.operations.CancelContactRequest;
import org.openapis.openapi.models.operations.CancelContactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CancelContactRequest req = new CancelContactRequest() {{
                pathParams = new CancelContactPathParams() {{
                    contactId = "corrupti";
                }};
                headers = new CancelContactHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
            }};            

            CancelContactResponse res = sdk.cancelContact(req);

            if (res.contactIdResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancelContact` - Cancels a contact with a specified contact ID.
* `createConfig` - <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
* `createDataflowEndpointGroup` - <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
* `createEphemeris` - Creates an Ephemeris with the specified <code>EphemerisData</code>.
* `createMissionProfile` - <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
* `deleteConfig` - Deletes a <code>Config</code>.
* `deleteDataflowEndpointGroup` - Deletes a dataflow endpoint group.
* `deleteEphemeris` - Deletes an ephemeris
* `deleteMissionProfile` - Deletes a mission profile.
* `describeContact` - Describes an existing contact.
* `describeEphemeris` - Describes an existing ephemeris.
* `getAgentConfiguration` - Gets the latest configuration information for a registered agent.
* `getConfig` - <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
* `getDataflowEndpointGroup` - Returns the dataflow endpoint group.
* `getMinuteUsage` - Returns the number of minutes used by account.
* `getMissionProfile` - Returns a mission profile.
* `getSatellite` - Returns a satellite.
* `listConfigs` - Returns a list of <code>Config</code> objects.
* `listContacts` - <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
* `listDataflowEndpointGroups` - Returns a list of <code>DataflowEndpoint</code> groups.
* `listEphemerides` - List existing ephemerides.
* `listGroundStations` - Returns a list of ground stations. 
* `listMissionProfiles` - Returns a list of mission profiles.
* `listSatellites` - Returns a list of satellites.
* `listTagsForResource` - Returns a list of tags for a specified resource.
* `registerAgent` - Registers a new agent with AWS Groundstation.
* `reserveContact` - Reserves a contact using specified parameters.
* `tagResource` - Assigns a tag to a resource.
* `untagResource` - Deassigns a resource tag.
* `updateAgentStatus` - Update the status of the agent.
* `updateConfig` - <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
* `updateEphemeris` - Updates an existing ephemeris
* `updateMissionProfile` - <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
