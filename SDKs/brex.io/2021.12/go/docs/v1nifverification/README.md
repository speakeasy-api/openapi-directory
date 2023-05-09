# V1NifVerification

## Overview

NIF Verification methods

### Available Operations

* [NifBasic](#nifbasic) - Verifies a NIF number
* [NifComprehensive](#nifcomprehensive) - Verifies a NIF number and retrieves company data

## NifBasic

Performs a basic verification check of a given NIF tax number against NIF.com. Optional parameters may be added to improve calculation of confidence score.

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
    res, err := s.V1NifVerification.NifBasic(ctx, operations.NifBasicRequest{
        RequestBody: operations.NifBasicRequestBody{
            CompanyAddress: sdk.String("iure"),
            CompanyName: sdk.String("culpa"),
            NifNumber: "doloribus",
        },
        Country: "sapiente",
    }, operations.NifBasicSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NifBasic200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## NifComprehensive

Comprehensive verification of given portuguese NIF number against NIF.com. Optional parameters may help to build a better confidence score. Additional company data will be provided.

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
    res, err := s.V1NifVerification.NifComprehensive(ctx, operations.NifComprehensiveRequest{
        RequestBody: operations.NifComprehensiveRequestBody{
            CompanyAddress: sdk.String("architecto"),
            CompanyName: sdk.String("mollitia"),
            NifNumber: "dolorem",
        },
        Country: "culpa",
    }, operations.NifComprehensiveSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NifComprehensive200ApplicationJSONObject != nil {
        // handle response
    }
}
```
