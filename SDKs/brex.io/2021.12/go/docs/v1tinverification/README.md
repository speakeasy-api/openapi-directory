# V1TinVerification

## Overview

TIN Verification methods

### Available Operations

* [TinVerificationBasicCheck](#tinverificationbasiccheck) - Verifies a TIN number
* [TinVerificationComprehensiveCheck](#tinverificationcomprehensivecheck) - EIN Name Lookup with TIN number and retrieves company data
* [TinVerificationNameLookup](#tinverificationnamelookup) - EIN Name Lookup with TIN number

## TinVerificationBasicCheck

Performs a basic verification check of a given TIN number and name.

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
    res, err := s.V1TinVerification.TinVerificationBasicCheck(ctx, operations.TinVerificationBasicCheckRequest{
        Name: "aut",
        Tin: "quasi",
    }, operations.TinVerificationBasicCheckSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TinVerificationBasicCheck200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TinVerificationComprehensiveCheck

Performs an EIN name match using provided TIN Number. Additionally to the name lookup it will lookup company details

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
    res, err := s.V1TinVerification.TinVerificationComprehensiveCheck(ctx, operations.TinVerificationComprehensiveCheckRequest{
        Name: "error",
        Threshold: sdk.Int64(837945),
        Tin: "laborum",
    }, operations.TinVerificationComprehensiveCheckSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TinVerificationComprehensiveCheck200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TinVerificationNameLookup

Performs an EIN name match using provided TIN Number

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
    res, err := s.V1TinVerification.TinVerificationNameLookup(ctx, operations.TinVerificationNameLookupRequest{
        Tin: "quasi",
    }, operations.TinVerificationNameLookupSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TinVerificationNameLookup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
