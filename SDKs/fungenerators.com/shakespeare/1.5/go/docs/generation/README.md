# Generation

## Overview

Generate random quotes, names, insults, lorem ipsum etc

Find out more
<http://fungenerators.com/api/shakespeare/>
### Available Operations

* [GetShakespeareGenerateInsult](#getshakespearegenerateinsult) - Generate random Shakespeare style insults.
* [GetShakespeareGenerateLoremIpsum](#getshakespearegenerateloremipsum) - Generate Shakespeare lorem ipsum.
* [GetShakespeareGenerateName](#getshakespearegeneratename) - Generate random Shakespearen names.

## GetShakespeareGenerateInsult

Generate random Shakespeare style insults.

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
    res, err := s.Generation.GetShakespeareGenerateInsult(ctx, operations.GetShakespeareGenerateInsultRequest{
        Limit: sdk.Int64(592845),
    }, operations.GetShakespeareGenerateInsultSecurity{
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

## GetShakespeareGenerateLoremIpsum

Generate Shakespeare lorem ipsum.

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
    res, err := s.Generation.GetShakespeareGenerateLoremIpsum(ctx, operations.GetShakespeareGenerateLoremIpsumRequest{
        Limit: sdk.Int64(715190),
        Type: sdk.String("quibusdam"),
    }, operations.GetShakespeareGenerateLoremIpsumSecurity{
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

## GetShakespeareGenerateName

Generate random Shakespearen names.

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
    res, err := s.Generation.GetShakespeareGenerateName(ctx, operations.GetShakespeareGenerateNameRequest{
        Limit: sdk.Int64(602763),
        Variation: sdk.String("nulla"),
    }, operations.GetShakespeareGenerateNameSecurity{
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
