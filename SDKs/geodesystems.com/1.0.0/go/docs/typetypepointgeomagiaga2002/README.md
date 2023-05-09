# TypeTypePointGeomagIaga2002

## Overview

Search API for 'IAGA 2002 Geomagnetism Data' entry type

### Available Operations

* [SearchTypePointGeomagIaga2002](#searchtypepointgeomagiaga2002) - Search API for 'IAGA 2002 Geomagnetism Data' entry type

## SearchTypePointGeomagIaga2002

API to search for entries of type IAGA 2002 Geomagnetism Data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.TypeTypePointGeomagIaga2002.SearchTypePointGeomagIaga2002(ctx, operations.SearchTypePointGeomagIaga2002Request{
        ChangedateFrom: types.MustTimeFromString("2020-05-27T21:37:33.522Z"),
        ChangedateTo: types.MustTimeFromString("2022-04-19T22:48:27.858Z"),
        CreatedateFrom: types.MustTimeFromString("2022-02-26T02:08:07.981Z"),
        CreatedateTo: types.MustTimeFromString("2022-04-25T19:30:06.702Z"),
        Description: sdk.String("expedita"),
        Filesuffix: sdk.String("libero"),
        Fromdate: types.MustTimeFromString("2020-03-31T05:07:12.669Z"),
        Group: sdk.String("dolores"),
        Max: sdk.Int64(281416),
        Maxlatitude: sdk.Float32(4724.44),
        Maxlongitude: sdk.Float32(6906.54),
        Minlatitude: sdk.Float32(4559.58),
        Minlongitude: sdk.Float32(4006.57),
        Name: sdk.String("Marcus VonRueden"),
        SearchTypePointGeomagIaga2002DataInterval: sdk.String("exercitationem"),
        SearchTypePointGeomagIaga2002DataType: sdk.String("voluptatem"),
        SearchTypePointGeomagIaga2002DigitalSampling: sdk.String("beatae"),
        SearchTypePointGeomagIaga2002IagaCode: sdk.String("qui"),
        SearchTypePointGeomagIaga2002SourceOfData: sdk.String("laboriosam"),
        SearchTypePointGeomagIaga2002StationName: sdk.String("temporibus"),
        Skip: sdk.Int64(447678),
        Text: sdk.String("veritatis"),
        Todate: types.MustTimeFromString("2020-01-28T19:32:23.296Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
