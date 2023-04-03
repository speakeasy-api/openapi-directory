# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/mediastore-data/2017-09-01/go
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

    req := operations.DeleteObjectRequest{
        Path: "corrupti",
        XAmzAlgorithm: "provident",
        XAmzContentSha256: "distinctio",
        XAmzCredential: "quibusdam",
        XAmzDate: "unde",
        XAmzSecurityToken: "nulla",
        XAmzSignature: "corrupti",
        XAmzSignedHeaders: "illum",
    }

    ctx := context.Background()
    res, err := s.DeleteObject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteObjectResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `DeleteObject` - Deletes an object at the specified path.
* `DescribeObject` - Gets the headers for an object at the specified path.
* `GetObject` - Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
* `ListItems` - Provides a list of metadata entries about folders and objects in the specified folder.
* `PutObject` - Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
