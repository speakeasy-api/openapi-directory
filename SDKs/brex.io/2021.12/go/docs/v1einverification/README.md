# V1EinVerification

## Overview

US EIN tax number methods

### Available Operations

* [EinVerificationBasic](#einverificationbasic) - Verifies an EIN number
* [EinVerificationComprehensive](#einverificationcomprehensive) - Verifies EIN number and retrieves company data
* [EinVerificationLookup](#einverificationlookup) - Retrieves a list of EIN numbers

## EinVerificationBasic

Performs a basic verification check of a given EIN tax number.

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
    res, err := s.V1EinVerification.EinVerificationBasic(ctx, operations.EinVerificationBasicRequest{
        Ein: "omnis",
    }, operations.EinVerificationBasicSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EinVerificationBasic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EinVerificationComprehensive

Comprehensive verification of a given EIN number. Additionally to the basic verification it will lookup company details

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
    res, err := s.V1EinVerification.EinVerificationComprehensive(ctx, operations.EinVerificationComprehensiveRequest{
        Ein: "nemo",
    }, operations.EinVerificationComprehensiveSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EinVerificationComprehensive200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## EinVerificationLookup

Lookup EIN number for a company by its company name

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
    res, err := s.V1EinVerification.EinVerificationLookup(ctx, operations.EinVerificationLookupRequest{
        Name: "minima",
        State: sdk.String("excepturi"),
        Tight: sdk.Bool(false),
        Zip: sdk.String("accusantium"),
    }, operations.EinVerificationLookupSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EinVerificationLookup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
