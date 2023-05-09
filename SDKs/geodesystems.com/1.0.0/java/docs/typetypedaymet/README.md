# typeTypeDaymet

## Overview

Search API for 'Daymet Daily Weather' entry type

### Available Operations

* [searchTypeDaymet](#searchtypedaymet) - Search API for 'Daymet Daily Weather' entry type

## searchTypeDaymet

API to search for entries of type Daymet Daily Weather

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeDaymetRequest;
import org.openapis.openapi.models.operations.SearchTypeDaymetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeDaymetRequest req = new SearchTypeDaymetRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-10-06T19:59:53.042Z");
                changedateTo = OffsetDateTime.parse("2022-01-13T12:14:41.518Z");
                createdateFrom = OffsetDateTime.parse("2020-02-03T17:51:05.151Z");
                createdateTo = OffsetDateTime.parse("2022-11-07T17:15:50.087Z");
                description = "accusantium";
                filesuffix = "voluptates";
                fromdate = OffsetDateTime.parse("2021-01-16T17:23:13.201Z");
                group = "quaerat";
                max = 256647L;
                maxlatitude = 2482.76;
                maxlongitude = 7410.24;
                minlatitude = 2779.35;
                minlongitude = 1754.55;
                name = "Marcia Rempel";
                skip = 179588L;
                text = "quisquam";
                todate = OffsetDateTime.parse("2021-05-04T22:57:21.083Z");
            }};            

            SearchTypeDaymetResponse res = sdk.typeTypeDaymet.searchTypeDaymet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
