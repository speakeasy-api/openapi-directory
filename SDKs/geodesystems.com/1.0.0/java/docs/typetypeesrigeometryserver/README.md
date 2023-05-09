# typeTypeEsriGeometryserver

## Overview

Search API for 'ESRI Geometry Server' entry type

### Available Operations

* [searchTypeEsriGeometryserver](#searchtypeesrigeometryserver) - Search API for 'ESRI Geometry Server' entry type

## searchTypeEsriGeometryserver

API to search for entries of type ESRI Geometry Server

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEsriGeometryserverRequest;
import org.openapis.openapi.models.operations.SearchTypeEsriGeometryserverResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEsriGeometryserverRequest req = new SearchTypeEsriGeometryserverRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-07T09:20:33.609Z");
                changedateTo = OffsetDateTime.parse("2021-12-27T19:43:15.619Z");
                createdateFrom = OffsetDateTime.parse("2022-10-23T13:19:03.770Z");
                createdateTo = OffsetDateTime.parse("2022-01-04T10:52:35.870Z");
                description = "architecto";
                filesuffix = "sint";
                fromdate = OffsetDateTime.parse("2020-10-20T13:37:06.781Z");
                group = "asperiores";
                max = 98250L;
                maxlatitude = 1597.29;
                maxlongitude = 3661.17;
                minlatitude = 7519.01;
                minlongitude = 8926.4;
                name = "Christine Harber";
                skip = 625418L;
                text = "expedita";
                todate = OffsetDateTime.parse("2021-05-18T04:27:16.690Z");
            }};            

            SearchTypeEsriGeometryserverResponse res = sdk.typeTypeEsriGeometryserver.searchTypeEsriGeometryserver(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
