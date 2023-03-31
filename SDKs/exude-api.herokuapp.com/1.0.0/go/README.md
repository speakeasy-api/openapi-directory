# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/exude-api.herokuapp.com/1.0.0/go
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

    req := operations.FilterFileDataStoppingsRequest{
        RequestBody: operations.FilterFileDataStoppingsRequestBody{
            File: &operations.FilterFileDataStoppingsRequestBodyFile{
                Content: []byte("corrupti"),
                File: "provident",
            },
        },
        Type: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Exude.FilterFileDataStoppings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ExudeResponseBean != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Exude

* `FilterFileDataStoppings` - Filter the stopping words from the provided input file
* `FilterStoppings` - Filter the stopping words from the provided input data or links
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
