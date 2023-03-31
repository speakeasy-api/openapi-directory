# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/fungenerators.com/uuid/1.5/go
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
    s := sdk.New()

    req := operations.GetUUIDRequest{
        Count: 548814,
    }

    ctx := context.Background()
    res, err := s.UUIDGeneration.GetUUID(ctx, req, operations.GetUUIDSecurity{
        XFungeneratorsAPISecret: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### UUIDGeneration

* `GetUUID` - Generate a random UUID (v4).
* `GetUUIDVersionVersion` - Generate a random UUID (v4).

### UUIDParsing

* `PostUUID` - Parse a UUID string and return its version and check whether it is valid.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
