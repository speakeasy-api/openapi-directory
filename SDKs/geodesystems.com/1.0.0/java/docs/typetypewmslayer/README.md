# typeTypeWmsLayer

## Overview

Search API for 'WMS Layer' entry type

### Available Operations

* [searchTypeWmsLayer](#searchtypewmslayer) - Search API for 'WMS Layer' entry type

## searchTypeWmsLayer

API to search for entries of type WMS Layer

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeWmsLayerRequest;
import org.openapis.openapi.models.operations.SearchTypeWmsLayerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeWmsLayerRequest req = new SearchTypeWmsLayerRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-01T12:28:26.841Z");
                changedateTo = OffsetDateTime.parse("2022-06-10T23:32:47.792Z");
                createdateFrom = OffsetDateTime.parse("2022-01-27T21:05:50.390Z");
                createdateTo = OffsetDateTime.parse("2021-11-26T14:13:16.580Z");
                description = "sit";
                filesuffix = "magni";
                fromdate = OffsetDateTime.parse("2021-04-28T20:12:59.192Z");
                group = "ratione";
                max = 958592L;
                maxlatitude = 47.68;
                maxlongitude = 8297.66;
                minlatitude = 3011.88;
                minlongitude = 3401.07;
                name = "Gerardo Gislason";
                skip = 748266L;
                text = "ea";
                todate = OffsetDateTime.parse("2022-09-15T14:22:34.731Z");
            }};            

            SearchTypeWmsLayerResponse res = sdk.typeTypeWmsLayer.searchTypeWmsLayer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
