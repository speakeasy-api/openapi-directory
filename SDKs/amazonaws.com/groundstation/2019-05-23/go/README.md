# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/groundstation/2019-05-23/go
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
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CancelContact(ctx, operations.CancelContactRequest{
        XAmzAlgorithm: sdk.String("corrupti"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("distinctio"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("nulla"),
        XAmzSignedHeaders: sdk.String("corrupti"),
        ContactID: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ContactIDResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CancelContact](docs/sdk/README.md#cancelcontact) - Cancels a contact with a specified contact ID.
* [CreateConfig](docs/sdk/README.md#createconfig) - <p>Creates a <code>Config</code> with the specified <code>configData</code> parameters.</p> <p>Only one type of <code>configData</code> can be specified.</p>
* [CreateDataflowEndpointGroup](docs/sdk/README.md#createdataflowendpointgroup) - <p>Creates a <code>DataflowEndpoint</code> group containing the specified list of <code>DataflowEndpoint</code> objects.</p> <p>The <code>name</code> field in each endpoint is used in your mission profile <code>DataflowEndpointConfig</code> to specify which endpoints to use during a contact.</p> <p>When a contact uses multiple <code>DataflowEndpointConfig</code> objects, each <code>Config</code> must match a <code>DataflowEndpoint</code> in the same group.</p>
* [CreateEphemeris](docs/sdk/README.md#createephemeris) - Creates an Ephemeris with the specified <code>EphemerisData</code>.
* [CreateMissionProfile](docs/sdk/README.md#createmissionprofile) - <p>Creates a mission profile.</p> <p> <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
* [DeleteConfig](docs/sdk/README.md#deleteconfig) - Deletes a <code>Config</code>.
* [DeleteDataflowEndpointGroup](docs/sdk/README.md#deletedataflowendpointgroup) - Deletes a dataflow endpoint group.
* [DeleteEphemeris](docs/sdk/README.md#deleteephemeris) - Deletes an ephemeris
* [DeleteMissionProfile](docs/sdk/README.md#deletemissionprofile) - Deletes a mission profile.
* [DescribeContact](docs/sdk/README.md#describecontact) - Describes an existing contact.
* [DescribeEphemeris](docs/sdk/README.md#describeephemeris) - Describes an existing ephemeris.
* [GetAgentConfiguration](docs/sdk/README.md#getagentconfiguration) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Gets the latest configuration information for a registered agent.</p>
* [GetConfig](docs/sdk/README.md#getconfig) - <p>Returns <code>Config</code> information.</p> <p>Only one <code>Config</code> response can be returned.</p>
* [GetDataflowEndpointGroup](docs/sdk/README.md#getdataflowendpointgroup) - Returns the dataflow endpoint group.
* [GetMinuteUsage](docs/sdk/README.md#getminuteusage) - Returns the number of minutes used by account.
* [GetMissionProfile](docs/sdk/README.md#getmissionprofile) - Returns a mission profile.
* [GetSatellite](docs/sdk/README.md#getsatellite) - Returns a satellite.
* [ListConfigs](docs/sdk/README.md#listconfigs) - Returns a list of <code>Config</code> objects.
* [ListContacts](docs/sdk/README.md#listcontacts) - <p>Returns a list of contacts.</p> <p>If <code>statusList</code> contains AVAILABLE, the request must include <code>groundStation</code>, <code>missionprofileArn</code>, and <code>satelliteArn</code>. </p>
* [ListDataflowEndpointGroups](docs/sdk/README.md#listdataflowendpointgroups) - Returns a list of <code>DataflowEndpoint</code> groups.
* [ListEphemerides](docs/sdk/README.md#listephemerides) - List existing ephemerides.
* [ListGroundStations](docs/sdk/README.md#listgroundstations) - Returns a list of ground stations. 
* [ListMissionProfiles](docs/sdk/README.md#listmissionprofiles) - Returns a list of mission profiles.
* [ListSatellites](docs/sdk/README.md#listsatellites) - Returns a list of satellites.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns a list of tags for a specified resource.
* [RegisterAgent](docs/sdk/README.md#registeragent) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p> Registers a new agent with AWS Ground Station. </p>
* [ReserveContact](docs/sdk/README.md#reservecontact) - Reserves a contact using specified parameters.
* [TagResource](docs/sdk/README.md#tagresource) - Assigns a tag to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Deassigns a resource tag.
* [UpdateAgentStatus](docs/sdk/README.md#updateagentstatus) - <note> <p> For use by AWS Ground Station Agent and shouldn't be called directly.</p> </note> <p>Update the status of the agent.</p>
* [UpdateConfig](docs/sdk/README.md#updateconfig) - <p>Updates the <code>Config</code> used when scheduling contacts.</p> <p>Updating a <code>Config</code> will not update the execution parameters for existing future contacts scheduled with this <code>Config</code>.</p>
* [UpdateEphemeris](docs/sdk/README.md#updateephemeris) - Updates an existing ephemeris
* [UpdateMissionProfile](docs/sdk/README.md#updatemissionprofile) - <p>Updates a mission profile.</p> <p>Updating a mission profile will not update the execution parameters for existing future contacts.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
