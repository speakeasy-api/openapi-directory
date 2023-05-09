# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mobile/2017-07-01/go
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
    res, err := s.CreateProject(ctx, operations.CreateProjectRequest{
        RequestBody: operations.CreateProjectRequestBody{
            Contents: sdk.String("corrupti"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
        Name: sdk.String("Sabrina Oberbrunner"),
        Region: sdk.String("magnam"),
        SnapshotID: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateProject](docs/sdk/README.md#createproject) -  Creates an AWS Mobile Hub project. 
* [DeleteProject](docs/sdk/README.md#deleteproject) -  Delets a project in AWS Mobile Hub. 
* [DescribeBundle](docs/sdk/README.md#describebundle) -  Get the bundle details for the requested bundle id. 
* [DescribeProject](docs/sdk/README.md#describeproject) -  Gets details about a project in AWS Mobile Hub. 
* [ExportBundle](docs/sdk/README.md#exportbundle) -  Generates customized software development kit (SDK) and or tool packages used to integrate mobile web or mobile app clients with backend AWS resources. 
* [ExportProject](docs/sdk/README.md#exportproject) -  Exports project configuration to a snapshot which can be downloaded and shared. Note that mobile app push credentials are encrypted in exported projects, so they can only be shared successfully within the same AWS account. 
* [ListBundles](docs/sdk/README.md#listbundles) -  List all available bundles. 
* [ListProjects](docs/sdk/README.md#listprojects) -  Lists projects in AWS Mobile Hub. 
* [UpdateProject](docs/sdk/README.md#updateproject) -  Update an existing project. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
