# typeTypeEsriGpserver

## Overview

Search API for 'ESRI GP Server' entry type

### Available Operations

* [searchTypeEsriGpserver](#searchtypeesrigpserver) - Search API for 'ESRI GP Server' entry type

## searchTypeEsriGpserver

API to search for entries of type ESRI GP Server

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriGpserverRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriGpserverResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriGpserverRequest req = new SearchTypeEsriGpserverRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-08-21T00:52:09.696Z");
                changedateTo = OffsetDateTime.parse("2022-01-07T15:32:11.672Z");
                createdateFrom = OffsetDateTime.parse("2022-11-11T12:25:57.456Z");
                createdateTo = OffsetDateTime.parse("2022-05-17T17:41:13.405Z");
                description = "vel";
                filesuffix = "dolorum";
                fromdate = OffsetDateTime.parse("2022-01-26T09:43:06.454Z");
                group = "ab";
                max = 125154L;
                maxlatitude = 2264.91;
                maxlongitude = 7370.61;
                minlatitude = 4811.02;
                minlongitude = 5465.4;
                name = "Tamara Terry";
                skip = 607276L;
                text = "recusandae";
                todate = OffsetDateTime.parse("2022-01-10T04:51:48.901Z");
            }};            

            SearchTypeEsriGpserverResponse res = sdk.typeTypeEsriGpserver.searchTypeEsriGpserver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
