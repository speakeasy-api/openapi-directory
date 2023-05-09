# typeProjectVisit

## Overview

Search API for 'Site Visit' entry type

### Available Operations

* [searchProjectVisit](#searchprojectvisit) - Search API for 'Site Visit' entry type

## searchProjectVisit

API to search for entries of type Site Visit

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectVisitRequest;
import org.openapis.openapi.models.operations.SearchProjectVisitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectVisitRequest req = new SearchProjectVisitRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-13T00:18:26.818Z");
                changedateTo = OffsetDateTime.parse("2020-03-28T08:47:25.593Z");
                createdateFrom = OffsetDateTime.parse("2021-06-26T03:36:42.239Z");
                createdateTo = OffsetDateTime.parse("2022-05-05T18:49:24.442Z");
                description = "unde";
                filesuffix = "quae";
                fromdate = OffsetDateTime.parse("2022-08-29T09:17:21.956Z");
                group = "eveniet";
                max = 389630L;
                maxlatitude = 1873.61;
                maxlongitude = 5054.73;
                minlatitude = 6977.29;
                minlongitude = 8486.49;
                name = "Mrs. Guadalupe Daniel";
                skip = 693724L;
                text = "voluptas";
                todate = OffsetDateTime.parse("2021-06-19T08:10:54.315Z");
            }};            

            SearchProjectVisitResponse res = sdk.typeProjectVisit.searchProjectVisit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
