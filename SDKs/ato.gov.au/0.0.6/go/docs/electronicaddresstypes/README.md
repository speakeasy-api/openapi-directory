# ElectronicAddressTypes

## Overview

A classification scheme for electronic addresses.


### Available Operations

* [GetClassificationsElectronicAddressTypes](#getclassificationselectronicaddresstypes) - Retrieve a list of electronic address types

## GetClassificationsElectronicAddressTypes

Retrieve a list of electronic address types

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
    res, err := s.ElectronicAddressTypes.GetClassificationsElectronicAddressTypes(ctx, operations.GetClassificationsElectronicAddressTypesRequest{
        APIKey: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ElectronicAddressTypes != nil {
        // handle response
    }
}
```
