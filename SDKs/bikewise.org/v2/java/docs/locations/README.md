# locations

## Overview

GeoJSON response for matching incidents

### Available Operations

* [getVersionLocationsFormat](#getversionlocationsformat) - Unpaginated geojson response
* [getVersionLocationsMarkersFormat](#getversionlocationsmarkersformat) - Unpaginated geojson response with simplestyled markers

## getVersionLocationsFormat

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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVersionLocationsFormatIncidentTypeEnum;
import org.openapis.openapi.models.operations.GETVersionLocationsFormatRequest;
import org.openapis.openapi.models.operations.GETVersionLocationsFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETVersionLocationsFormatRequest req = new GETVersionLocationsFormatRequest() {{
                all = false;
                incidentType = GETVersionLocationsFormatIncidentTypeEnum.HAZARD;
                limit = 383441;
                occurredAfter = 477665;
                occurredBefore = 791725;
                proximity = "placeat";
                proximitySquare = 528895;
                query = "iusto";
            }};            

            GETVersionLocationsFormatResponse res = sdk.locations.getVersionLocationsFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersionLocationsMarkersFormat

<p>This behaves exactly like the root <code>locations</code> endpoint, but returns <a href="https://github.com/mapbox/simplestyle-spec">simplestyled markers</a> (<a href="https://www.mapbox.com/guides/markers/#simple-style">mapbox styled markers</a>)</p>

<p><strong>Go forth and make maps!</strong></p>


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVersionLocationsMarkersFormatIncidentTypeEnum;
import org.openapis.openapi.models.operations.GETVersionLocationsMarkersFormatRequest;
import org.openapis.openapi.models.operations.GETVersionLocationsMarkersFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETVersionLocationsMarkersFormatRequest req = new GETVersionLocationsMarkersFormatRequest() {{
                all = false;
                incidentType = GETVersionLocationsMarkersFormatIncidentTypeEnum.UNCONFIRMED;
                limit = 392785;
                occurredAfter = 925597;
                occurredBefore = 836079;
                proximity = "ab";
                proximitySquare = 337396;
                query = "veritatis";
            }};            

            GETVersionLocationsMarkersFormatResponse res = sdk.locations.getVersionLocationsMarkersFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
