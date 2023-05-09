# Provinces

## Overview

Get province(s) with associated holidays

### Available Operations

* [Province](#province) - Get a province or territory by abbreviation
* [Provinces](#provinces) - Get all provinces

## Province

Returns a Canadian province or territory with its associated holidays. Returns a 404 response for invalid abbreviations.

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
    res, err := s.Provinces.Province(ctx, operations.ProvinceRequest{
        Optional: operations.ProvinceOptionalEnumFalse.ToPointer(),
        ProvinceID: operations.ProvinceProvinceIDEnumMb,
        Year: sdk.Int64(423655),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Province200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## Provinces

Returns provinces and territories in Canada. Each province or territory lists its associated holidays.

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
    res, err := s.Provinces.Provinces(ctx, operations.ProvincesRequest{
        Optional: operations.ProvincesOptionalEnumTrue.ToPointer(),
        Year: sdk.Int64(645894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Provinces200ApplicationJSONObject != nil {
        // handle response
    }
}
```
