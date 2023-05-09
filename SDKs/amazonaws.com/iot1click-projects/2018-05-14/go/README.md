# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iot1click-projects/2018-05-14/go
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
    res, err := s.AssociateDeviceWithPlacement(ctx, operations.AssociateDeviceWithPlacementRequest{
        RequestBody: operations.AssociateDeviceWithPlacementRequestBody{
            DeviceID: "corrupti",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        DeviceTemplateName: "vel",
        PlacementName: "error",
        ProjectName: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateDeviceWithPlacementResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateDeviceWithPlacement](docs/sdk/README.md#associatedevicewithplacement) - Associates a physical device with a placement.
* [CreatePlacement](docs/sdk/README.md#createplacement) - Creates an empty placement.
* [CreateProject](docs/sdk/README.md#createproject) - Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
* [DeletePlacement](docs/sdk/README.md#deleteplacement) - <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
* [DeleteProject](docs/sdk/README.md#deleteproject) - <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
* [DescribePlacement](docs/sdk/README.md#describeplacement) - Describes a placement in a project.
* [DescribeProject](docs/sdk/README.md#describeproject) - Returns an object describing a project.
* [DisassociateDeviceFromPlacement](docs/sdk/README.md#disassociatedevicefromplacement) - Removes a physical device from a placement.
* [GetDevicesInPlacement](docs/sdk/README.md#getdevicesinplacement) - Returns an object enumerating the devices in a placement.
* [ListPlacements](docs/sdk/README.md#listplacements) - Lists the placement(s) of a project.
* [ListProjects](docs/sdk/README.md#listprojects) - Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags (metadata key/value pairs) which you have assigned to the resource.
* [TagResource](docs/sdk/README.md#tagresource) - Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes one or more tags (metadata key/value pairs) from a resource.
* [UpdatePlacement](docs/sdk/README.md#updateplacement) - Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
* [UpdateProject](docs/sdk/README.md#updateproject) - Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
