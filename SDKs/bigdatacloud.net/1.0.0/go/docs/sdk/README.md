# SDK

## Overview

BigDataCloud's IP Geolocation API returns detailed information about the geographical location, ownership and connectivity of the provided IPv4 IP address.

This API is powered by patent-pending ‘Next Generation IP Geolocation Technology'. As a result, the API has sub-millisecond response time.

You can authenticate the API with the use of API keys provided in your BigDataCloud account.

BigDataCloud provides 10K Free queries per month. You can upgrade your package with $2/month per 10K additional queries.

The API has Unprecedented Update Rate
- Geolocation data re-evaluated every 2 hours or at least once a day
- BGP data updated every 2 hours
- Registry data updated at least once a day
- Country object data usually updates at least once in a month 

You can learn more about the API at [bigdatacloud.com](https://www.bigdatacloud.com/ip-geolocation-apis).

### Available Operations

* [IPGeolocationWithConfidenceAreaAndHazardReportAPI](#ipgeolocationwithconfidenceareaandhazardreportapi) - IP Geolocation with Confidence Area and Hazard Report API
* [IPGeolocationWithConfidenceAreaAPI](#ipgeolocationwithconfidenceareaapi) - IP Geolocation with Confidence Area API

## IPGeolocationWithConfidenceAreaAndHazardReportAPI

This API returns additional security hazard report in addition to confidence area and locality information.

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
    res, err := s.SDK.IPGeolocationWithConfidenceAreaAndHazardReportAPI(ctx, operations.IPGeolocationWithConfidenceAreaAndHazardReportAPIRequest{
        IP: sdk.String("193.114.112.122"),
        Key: sdk.String("{{API KEY}}"),
        LocalityLanguage: sdk.String("en"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## IPGeolocationWithConfidenceAreaAPI

Returns list of geocoordinates which represents estimated geolocation confidence area.

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
    res, err := s.SDK.IPGeolocationWithConfidenceAreaAPI(ctx, operations.IPGeolocationWithConfidenceAreaAPIRequest{
        IP: sdk.String("193.114.112.122"),
        Key: sdk.String("{{API KEY}}"),
        LocalityLanguage: sdk.String("en"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
