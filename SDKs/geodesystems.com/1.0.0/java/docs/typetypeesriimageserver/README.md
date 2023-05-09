# typeTypeEsriImageserver

## Overview

Search API for 'ESRI Image Server' entry type

### Available Operations

* [searchTypeEsriImageserver](#searchtypeesriimageserver) - Search API for 'ESRI Image Server' entry type

## searchTypeEsriImageserver

API to search for entries of type ESRI Image Server

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriImageserverRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriImageserverResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriImageserverRequest req = new SearchTypeEsriImageserverRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-20T19:12:46.314Z");
                changedateTo = OffsetDateTime.parse("2022-04-27T07:03:16.483Z");
                createdateFrom = OffsetDateTime.parse("2022-02-15T15:00:49.838Z");
                createdateTo = OffsetDateTime.parse("2020-09-02T21:57:03.450Z");
                description = "repudiandae";
                filesuffix = "tempora";
                fromdate = OffsetDateTime.parse("2022-03-29T04:11:17.016Z");
                group = "illum";
                max = 478576L;
                maxlatitude = 4010.83;
                maxlongitude = 5751.11;
                minlatitude = 4001.45;
                minlongitude = 9961.01;
                name = "Glenn Rosenbaum";
                skip = 262891L;
                text = "dignissimos";
                todate = OffsetDateTime.parse("2022-12-25T22:39:52.866Z");
            }};            

            SearchTypeEsriImageserverResponse res = sdk.typeTypeEsriImageserver.searchTypeEsriImageserver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
