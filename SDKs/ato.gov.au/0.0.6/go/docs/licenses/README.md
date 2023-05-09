# Licenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [GetLicenses](#getlicenses) - Retrieve a list of licenses

## GetLicenses

Retrieve a list of licenses


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
    res, err := s.Licenses.GetLicenses(ctx, operations.GetLicensesRequest{
        APIKey: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Licenses != nil {
        // handle response
    }
}
```
