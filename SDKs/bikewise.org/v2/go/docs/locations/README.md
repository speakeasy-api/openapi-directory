# Locations

## Overview

GeoJSON response for matching incidents

### Available Operations

* [GETVersionLocationsFormat](#getversionlocationsformat) - Unpaginated geojson response
* [GETVersionLocationsMarkersFormat](#getversionlocationsmarkersformat) - Unpaginated geojson response with simplestyled markers

## GETVersionLocationsFormat

<p><strong>This endpoint behaves exactly like</strong> <code>incidents</code>, but returns a valid geojson <code>FeatureCollection</code> that looks like this:</p>

<pre><code>{
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
      id: 4474199,
      type: "Theft",
      occurred_at: 1428536937
    },
      geometry: {
      type: "Point",
      coordinates: [ -122.6244177, 45.5164386 ]
    }
  }
}
</code></pre>

<p>It doesn’t paginate. If you pass the <code>all</code> parameter it returns all matches (which can be big, &gt; 4mb), otherwise it returns the 100 most recent.</p>

<p><strong>Go forth and make maps!</strong></p>


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
    res, err := s.Locations.GETVersionLocationsFormat(ctx, operations.GETVersionLocationsFormatRequest{
        All: sdk.Bool(false),
        IncidentType: operations.GETVersionLocationsFormatIncidentTypeEnumHazard.ToPointer(),
        Limit: sdk.Int(383441),
        OccurredAfter: sdk.Int(477665),
        OccurredBefore: sdk.Int(791725),
        Proximity: sdk.String("placeat"),
        ProximitySquare: sdk.Int(528895),
        Query: sdk.String("iusto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETVersionLocationsMarkersFormat

<p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>

<p><strong>Go forth and make maps!</strong></p>


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
    res, err := s.Locations.GETVersionLocationsMarkersFormat(ctx, operations.GETVersionLocationsMarkersFormatRequest{
        All: sdk.Bool(false),
        IncidentType: operations.GETVersionLocationsMarkersFormatIncidentTypeEnumUnconfirmed.ToPointer(),
        Limit: sdk.Int(392785),
        OccurredAfter: sdk.Int(925597),
        OccurredBefore: sdk.Int(836079),
        Proximity: sdk.String("ab"),
        ProximitySquare: sdk.Int(337396),
        Query: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
