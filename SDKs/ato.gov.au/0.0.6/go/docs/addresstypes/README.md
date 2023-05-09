# AddressTypes

## Overview

A classification scheme for addresses.


### Available Operations

* [GetClassificationsAddressTypes](#getclassificationsaddresstypes) - Retrieve a list of address types

## GetClassificationsAddressTypes

Retrieve a list of address types

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
    res, err := s.AddressTypes.GetClassificationsAddressTypes(ctx, operations.GetClassificationsAddressTypesRequest{
        APIKey: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddressTypes != nil {
        // handle response
    }
}
```
