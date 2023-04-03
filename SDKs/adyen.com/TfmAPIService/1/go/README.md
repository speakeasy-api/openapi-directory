# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/TfmAPIService/1/go
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

    req := shared.AssignTerminalsRequest{
        CompanyAccount: "corrupti",
        MerchantAccount: "provident",
        MerchantInventory: false,
        Store: "distinctio",
        Terminals: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
    }

    ctx := context.Background()
    res, err := s.General.PostAssignTerminals(ctx, req, operations.PostAssignTerminalsSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssignTerminalsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### General

* `PostAssignTerminals` - Assign terminals
* `PostFindTerminal` - Get the account or store of a terminal
* `PostGetStoresUnderAccount` - Get the stores of an account
* `PostGetTerminalDetails` - Get the details of a terminal
* `PostGetTerminalsUnderAccount` - Get the list of terminals
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
