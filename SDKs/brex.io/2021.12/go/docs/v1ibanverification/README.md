# V1IbanVerification

## Overview

IBAN Verification methods

### Available Operations

* [IbanBasic](#ibanbasic) - Checks validity of an IBAN number
* [IbanComprehensive](#ibancomprehensive) - Checks validity of an IBAN number

## IbanBasic

Basic verification of an IBAN number validating its structure

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
    res, err := s.V1IbanVerification.IbanBasic(ctx, operations.IbanBasicRequestBody{
        IbanNumber: "AT483200000012345864",
    }, operations.IbanBasicSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IbanBasic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## IbanComprehensive

Comprehensive verification of IBAN number using a service provider for verification

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
    res, err := s.V1IbanVerification.IbanComprehensive(ctx, operations.IbanComprehensiveRequestBody{
        IbanNumber: "AT483200000012345864",
    }, operations.IbanComprehensiveSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema != nil {
        // handle response
    }
}
```
