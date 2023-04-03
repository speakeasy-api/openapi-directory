# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iotfleethub/2020-11-03/go
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

    req := operations.CreateApplicationRequest{
        RequestBody: operations.CreateApplicationRequestBody{
            ApplicationDescription: "corrupti",
            ApplicationName: "provident",
            ClientToken: "distinctio",
            RoleArn: "quibusdam",
            Tags: map[string]string{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `CreateApplication` - <p>Creates a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* `DeleteApplication` - <p>Deletes a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* `DescribeApplication` - <p>Gets information about a Fleet Hub for AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* `ListApplications` - <p>Gets a list of Fleet Hub for AWS IoT Device Management web applications for the current account.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* `ListTagsForResource` - <p>Lists the tags for the specified resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* `TagResource` - <p>Adds to or modifies the tags of the specified resource. Tags are metadata which can be used to manage a resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* `UntagResource` - <p>Removes the specified tags (metadata) from the resource.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
* `UpdateApplication` - <p>Updates information about a Fleet Hub for a AWS IoT Device Management web application.</p> <note> <p>Fleet Hub for AWS IoT Device Management is in public preview and is subject to change.</p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
