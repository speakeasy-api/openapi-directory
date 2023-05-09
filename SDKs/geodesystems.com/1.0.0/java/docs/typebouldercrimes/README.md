# typeBoulderCrimes

## Overview

Search API for 'Boulder Crime Reports' entry type

### Available Operations

* [searchBoulderCrimes](#searchbouldercrimes) - Search API for 'Boulder Crime Reports' entry type

## searchBoulderCrimes

API to search for entries of type Boulder Crime Reports

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchBoulderCrimesRequest;
import org.openapis.openapi.models.operations.SearchBoulderCrimesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchBoulderCrimesRequest req = new SearchBoulderCrimesRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-13T04:07:51.208Z");
                changedateTo = OffsetDateTime.parse("2022-06-16T02:54:19.259Z");
                createdateFrom = OffsetDateTime.parse("2022-08-15T15:27:41.112Z");
                createdateTo = OffsetDateTime.parse("2022-08-17T09:09:54.947Z");
                description = "minima";
                filesuffix = "nobis";
                fromdate = OffsetDateTime.parse("2022-07-11T09:37:00.887Z");
                group = "minus";
                max = 171853L;
                maxlatitude = 5039.34;
                maxlongitude = 4492.92;
                minlatitude = 2962.42;
                minlongitude = 3044.68;
                name = "Lionel Herman";
                searchDbBoulderCrimesBlockadd = "blanditiis";
                searchDbBoulderCrimesLocation = "quas";
                searchDbBoulderCrimesOffense = "hic";
                searchDbBoulderCrimesReportdate = "nesciunt";
                skip = 633998L;
                text = "corrupti";
                todate = OffsetDateTime.parse("2021-06-10T23:47:11.065Z");
            }};            

            SearchBoulderCrimesResponse res = sdk.typeBoulderCrimes.searchBoulderCrimes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
