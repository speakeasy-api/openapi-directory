# SDK

## Overview

GeoDataSource™ Web Service is a REST API enable user to lookup for a city by using latitude and longitude coordinate. It will return the result in either JSON or XML containing the information of country, region, city, latitude and longitude. Visit https://www.geodatasource.com/web-service for further information.

### Available Operations

* [GetCity](#getcity) - Get City name by using latitude and longitude

## GetCity

Get City name by using latitude and longitude

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
    res, err := s.SDK.GetCity(ctx, operations.GetCityRequest{
        Format: operations.GetCityFormatEnumXML.ToPointer(),
        Key: "nulla",
        Lat: 5448.83,
        Lng: 8472.52,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCity200ApplicationJSONString != nil {
        // handle response
    }
}
```
