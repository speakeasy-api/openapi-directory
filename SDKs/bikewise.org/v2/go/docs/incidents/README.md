# Incidents

## Overview

Incidents matching parameters

### Available Operations

* [GETVersionIncidentsFormat](#getversionincidentsformat) - Paginated incidents matching parameters
* [GETVersionIncidentsIDFormat](#getversionincidentsidformat)

## GETVersionIncidentsFormat


<p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>

<p><strong>Notes on location searching</strong>: <br />
- <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
- <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>


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
    res, err := s.Incidents.GETVersionIncidentsFormat(ctx, operations.GETVersionIncidentsFormatRequest{
        IncidentType: operations.GETVersionIncidentsFormatIncidentTypeEnumTheft.ToPointer(),
        OccurredAfter: sdk.Int(623564),
        OccurredBefore: sdk.Int(645894),
        Page: sdk.Int(384382),
        PerPage: sdk.Int(437587),
        Proximity: sdk.String("magnam"),
        ProximitySquare: sdk.Int(891773),
        Query: sdk.String("ipsa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETVersionIncidentsIDFormat

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
    res, err := s.Incidents.GETVersionIncidentsIDFormat(ctx, operations.GETVersionIncidentsIDFormatRequest{
        ID: 963663,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
