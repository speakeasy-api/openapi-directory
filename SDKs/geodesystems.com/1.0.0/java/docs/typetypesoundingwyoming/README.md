# typeTypeSoundingWyoming

## Overview

Search API for 'UW Sounding' entry type

### Available Operations

* [searchTypeSoundingWyoming](#searchtypesoundingwyoming) - Search API for 'UW Sounding' entry type

## searchTypeSoundingWyoming

API to search for entries of type UW Sounding

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeSoundingWyomingRequest;
import org.openapis.openapi.models.operations.SearchTypeSoundingWyomingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeSoundingWyomingRequest req = new SearchTypeSoundingWyomingRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-02-21T11:05:43.092Z");
                changedateTo = OffsetDateTime.parse("2021-11-17T23:25:34.923Z");
                createdateFrom = OffsetDateTime.parse("2020-11-16T17:27:52.094Z");
                createdateTo = OffsetDateTime.parse("2022-12-04T07:57:15.879Z");
                description = "reiciendis";
                filesuffix = "debitis";
                fromdate = OffsetDateTime.parse("2022-11-26T20:47:27.046Z");
                group = "accusamus";
                max = 372925L;
                maxlatitude = 1344.12;
                maxlongitude = 5425.06;
                minlatitude = 6556.94;
                minlongitude = 2635.77;
                name = "Iris Schimmel MD";
                skip = 507946L;
                text = "ullam";
                todate = OffsetDateTime.parse("2021-05-13T02:45:17.589Z");
            }};            

            SearchTypeSoundingWyomingResponse res = sdk.typeTypeSoundingWyoming.searchTypeSoundingWyoming(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
