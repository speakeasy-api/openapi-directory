# V1VatVerification

## Overview

VAT Verification methods

### Available Operations

* [VatBasic](#vatbasic) - Returns a verification result
* [VatComprehensive](#vatcomprehensive) - Returns a verification result and company data
* [VatLevelTwo](#vatleveltwo) - Returns a level two verification result
* [VatLookup](#vatlookup) - Returns a list of vat numbers with additional data

## VatBasic

Basic verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1VatVerification.VatBasic(ctx, operations.VatBasicRequest{
        RequestBody: operations.VatBasicRequestBody{
            CompanyAddress: sdk.String("reiciendis"),
            CompanyName: sdk.String("voluptatibus"),
            CompanyNumber: sdk.String("vero"),
            VatNumber: "nihil",
        },
        Country: "praesentium",
    }, operations.VatBasicSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VatBasic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## VatComprehensive

Extended verification of given VAT number against VIES. Optional parameters may help to build a better confidence score.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1VatVerification.VatComprehensive(ctx, operations.VatComprehensiveRequest{
        RequestBody: operations.VatComprehensiveRequestBody{
            CompanyAddress: sdk.String("voluptatibus"),
            CompanyName: sdk.String("ipsa"),
            CompanyNumber: sdk.String("omnis"),
            VatNumber: "voluptate",
        },
        Country: "cum",
    }, operations.VatComprehensiveSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VatComprehensive200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## VatLevelTwo

Second Level Verification of VAT number against BMF Austria. Optional confirmation parameter can be provided to order a Confirmation Report.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1VatVerification.VatLevelTwo(ctx, operations.VatLevelTwoRequest{
        RequestBody: operations.VatLevelTwoRequestBody{
            Confirmation: sdk.Bool(false),
            VatNumber: "perferendis",
        },
        Country: "doloremque",
    }, operations.VatLevelTwoSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VatLevelTwo200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## VatLookup

Reverse VAT Lookup: Search for companies and their VAT numbers by company name. Search is forwarded to a provider.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1VatVerification.VatLookup(ctx, operations.VatLookupRequest{
        RequestBody: operations.VatLookupRequestBody{
            Address: sdk.String("null"),
            Name: "null",
        },
        Country: "reprehenderit",
    }, operations.VatLookupSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VatLookup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
