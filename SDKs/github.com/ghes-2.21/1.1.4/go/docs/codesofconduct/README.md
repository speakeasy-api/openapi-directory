# CodesOfConduct

## Overview

Insight into codes of conduct for your communities.

### Available Operations

* [CodesOfConductGetAllCodesOfConduct](#codesofconductgetallcodesofconduct) - Get all codes of conduct
* [CodesOfConductGetConductCode](#codesofconductgetconductcode) - Get a code of conduct

## CodesOfConductGetAllCodesOfConduct

Get all codes of conduct

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/codes-of-conduct#get-all-codes-of-conduct>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.CodesOfConduct.CodesOfConductGetAllCodesOfConduct(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeOfConducts != nil {
        // handle response
    }
}
```

## CodesOfConductGetConductCode

Get a code of conduct

API method documentation
<https://docs.github.com/enterprise-server@2.21/rest/reference/codes-of-conduct#get-a-code-of-conduct>

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
    res, err := s.CodesOfConduct.CodesOfConductGetConductCode(ctx, operations.CodesOfConductGetConductCodeRequest{
        Key: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CodeOfConduct != nil {
        // handle response
    }
}
```
