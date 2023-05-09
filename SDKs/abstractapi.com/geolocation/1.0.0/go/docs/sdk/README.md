# SDK

## Overview

Abstract IP geolocation API allows developers to retrieve the region, country and city behind any IP worldwide. The API covers the geolocation of IPv4 and IPv6 addresses in 180+ countries worldwide. Extra information can be retrieved like the currency, flag or language associated to an IP.

API Documentation
<https://www.abstractapi.com/ip-geolocation-api#docs>
### Available Operations

* [GetV1](#getv1) - Retrieve the location of an IP address

## GetV1

Retrieve the location of an IP address

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
    res, err := s.SDK.GetV1(ctx, operations.GetV1Request{
        APIKey: "provident",
        Fields: sdk.String("country,city,timezone"),
        IPAddress: sdk.String("195.154.25.40"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InlineResponse200 != nil {
        // handle response
    }
}
```
