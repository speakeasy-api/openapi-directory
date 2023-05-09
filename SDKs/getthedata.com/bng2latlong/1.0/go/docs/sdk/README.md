# SDK

## Overview

Convert an OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude.

Full documentation
<https://www.getthedata.com/bng2latlong>
### Available Operations

* [GetBng2latlongEastingNorthing](#getbng2latlongeastingnorthing) - Returns latitude and longitude for the given easting and northing.

## GetBng2latlongEastingNorthing

Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
#### A successful request returns the following fields:
* status - this will be `ok`
* easting - the easting provided in the request
* northing - the northing provided in the request
* latitude - the latitude of the converted coordinates
* longitude - the longitude of the converted coordinates
#### An unsuccessful request returns the following fields:
* status - this will be `error`
* error - an error message


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
    res, err := s.SDK.GetBng2latlongEastingNorthing(ctx, operations.GetBng2latlongEastingNorthingRequest{
        Easting: 715190,
        Northing: 844266,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBng2latlongEastingNorthing200ApplicationJSONObject != nil {
        // handle response
    }
}
```
