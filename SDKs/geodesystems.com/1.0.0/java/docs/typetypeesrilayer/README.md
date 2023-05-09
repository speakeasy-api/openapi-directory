# typeTypeEsriLayer

## Overview

Search API for 'ESRI Layer' entry type

### Available Operations

* [searchTypeEsriLayer](#searchtypeesrilayer) - Search API for 'ESRI Layer' entry type

## searchTypeEsriLayer

API to search for entries of type ESRI Layer

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriLayerRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriLayerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriLayerRequest req = new SearchTypeEsriLayerRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-09T03:32:00.669Z");
                changedateTo = OffsetDateTime.parse("2022-07-12T23:23:33.737Z");
                createdateFrom = OffsetDateTime.parse("2022-02-13T06:58:07.900Z");
                createdateTo = OffsetDateTime.parse("2022-01-07T15:17:27.791Z");
                description = "ipsam";
                filesuffix = "dicta";
                fromdate = OffsetDateTime.parse("2021-06-26T09:56:08.753Z");
                group = "libero";
                max = 9912L;
                maxlatitude = 5167.39;
                maxlongitude = 2725.18;
                minlatitude = 7771.93;
                minlongitude = 2244.31;
                name = "Geneva Kohler V";
                searchTypeEsriLayerLayerType = "consectetur";
                skip = 644103L;
                text = "odit";
                todate = OffsetDateTime.parse("2022-08-21T22:37:15.505Z");
            }};            

            SearchTypeEsriLayerResponse res = sdk.typeTypeEsriLayer.searchTypeEsriLayer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
