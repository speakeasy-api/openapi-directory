# Generation

## Overview

Generate names, insults, lorem ipsum etc

Find out more
<http://fungenerators.com/api/pirate/>
### Available Operations

* [GetPirateGenerateInsult](#getpirategenerateinsult) - Generate random pirate insults.
* [GetPirateGenerateLoremIpsum](#getpirategenerateloremipsum) - Generate pirate lorem ipsum.
* [GetPirateGenerateName](#getpirategeneratename) - Generate random pirate names.

## GetPirateGenerateInsult

Generate random pirate insults.

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
    res, err := s.Generation.GetPirateGenerateInsult(ctx, operations.GetPirateGenerateInsultRequest{
        Limit: sdk.Int64(592845),
    }, operations.GetPirateGenerateInsultSecurity{
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

## GetPirateGenerateLoremIpsum

Generate pirate lorem ipsum.

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
    res, err := s.Generation.GetPirateGenerateLoremIpsum(ctx, operations.GetPirateGenerateLoremIpsumRequest{
        Limit: sdk.Int64(715190),
        Type: sdk.String("quibusdam"),
    }, operations.GetPirateGenerateLoremIpsumSecurity{
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

## GetPirateGenerateName

Generate random pirate names.

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
    res, err := s.Generation.GetPirateGenerateName(ctx, operations.GetPirateGenerateNameRequest{
        Limit: sdk.Int64(602763),
        Variation: sdk.String("nulla"),
    }, operations.GetPirateGenerateNameSecurity{
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
