# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/fungenerators.com/riddle/1.5/go
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

    req := operations.DeleteRiddleRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.PrivateRiddles.DeleteRiddle(ctx, req, operations.DeleteRiddleSecurity{
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


### PrivateRiddles

* `DeleteRiddle` - Create a random Riddle entry.
* `GetRiddle` - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* `PostRiddle` - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* `PutRiddle` - Create a random Riddle entry.

### RandomRiddle

* `GetRiddleRandom` - Get a random riddle for a given category(optional)
* `GetRiddleSearch` - Search for random riddle which has the text in the query, for a given category(optional).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
