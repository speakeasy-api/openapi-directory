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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AssociateDeviceWithPlacementRequest{
        RequestBody: operations.AssociateDeviceWithPlacementRequestBody{
            DeviceID: "corrupti",
        },
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
        DeviceTemplateName: "vel",
        PlacementName: "error",
        ProjectName: "deserunt",
    }

    ctx := context.Background()
    res, err := s.AssociateDeviceWithPlacement(ctx, req)
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

### SDK SDK

* `AssociateDeviceWithPlacement` - Associates a physical device with a placement.
* `CreatePlacement` - Creates an empty placement.
* `CreateProject` - Creates an empty project with a placement template. A project contains zero or more placements that adhere to the placement template defined in the project.
* `DeletePlacement` - <p>Deletes a placement. To delete a placement, it must not have any devices associated with it.</p> <note> <p>When you delete a placement, all associated data becomes irretrievable.</p> </note>
* `DeleteProject` - <p>Deletes a project. To delete a project, it must not have any placements associated with it.</p> <note> <p>When you delete a project, all associated data becomes irretrievable.</p> </note>
* `DescribePlacement` - Describes a placement in a project.
* `DescribeProject` - Returns an object describing a project.
* `DisassociateDeviceFromPlacement` - Removes a physical device from a placement.
* `GetDevicesInPlacement` - Returns an object enumerating the devices in a placement.
* `ListPlacements` - Lists the placement(s) of a project.
* `ListProjects` - Lists the AWS IoT 1-Click project(s) associated with your AWS account and region.
* `ListTagsForResource` - Lists the tags (metadata key/value pairs) which you have assigned to the resource.
* `TagResource` - Creates or modifies tags for a resource. Tags are key/value pairs (metadata) that can be used to manage a resource. For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>.
* `UntagResource` - Removes one or more tags (metadata key/value pairs) from a resource.
* `UpdatePlacement` - Updates a placement with the given attributes. To clear an attribute, pass an empty value (i.e., "").
* `UpdateProject` - Updates a project associated with your AWS account and region. With the exception of device template names, you can pass just the values that need to be updated because the update request will change only the values that are provided. To clear a value, pass the empty string (i.e., <code>""</code>).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
