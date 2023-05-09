# SDK

## Overview

Analyzes a password and calculates its entropy.

### Available Operations

* [GetAbout](#getabout) - Metadata about this API&#58; version number, release date and available languages.

Metadata requests are NOT billed.

* [GetEc](#getec) - The entropy calculator - alias ec -, analyzes a password and calculates its entropy.

Entropy calculator requests are billed.


## GetAbout

Metadata about this API&#58; version number, release date and available languages.

Metadata requests are NOT billed.


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
    res, err := s.SDK.GetAbout(ctx, operations.GetAboutRequest{
        OutputFormat: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.About != nil {
        // handle response
    }
}
```

## GetEc

The entropy calculator - alias ec -, analyzes a password and calculates its entropy.

Entropy calculator requests are billed.


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
    res, err := s.SDK.GetEc(ctx, operations.GetEcRequest{
        OutputFormat: sdk.String("distinctio"),
        Password: "quibusdam",
        Penalty: sdk.Float64(6027.63),
        ReqID: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Ec != nil {
        // handle response
    }
}
```
