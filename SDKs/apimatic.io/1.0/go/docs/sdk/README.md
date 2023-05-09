# SDK

## Overview

Transform API Descriptions from/to various formats

API Transformer Website
<https://apimatic.io/transformer>
### Available Operations

* [ConvertAPI](#convertapi) - Transform API Descriptions from/to various formats

## ConvertAPI

Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.

### INPUTS
* API Blueprint
* Swagger 1.0 - 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* Google Discovery
* RAML 0.8
* I/O Docs - Mashery
* HAR 1.2
* Postman Collection 1.0 - 2.0
* APIMATIC Format
* Mashape

### OUTPUTS
* API Blueprint
* Swagger 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* RAML 0.8 - 1.0
* APIMATIC Format

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
    res, err := s.SDK.ConvertAPI(ctx, operations.ConvertAPIRequest{
        RequestBody: &operations.ConvertAPIRequestBody{
            URL: sdk.String("distinctio"),
        },
        Format: operations.ConvertAPIFormatEnumRaml,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ConvertAPI200ApplicationJSONObject != nil {
        // handle response
    }
}
```
