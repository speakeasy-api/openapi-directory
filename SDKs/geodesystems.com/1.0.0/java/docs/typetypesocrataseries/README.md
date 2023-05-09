# typeTypeSocrataSeries

## Overview

Search API for 'SOCRATA Series' entry type

### Available Operations

* [searchTypeSocrataSeries](#searchtypesocrataseries) - Search API for 'SOCRATA Series' entry type

## searchTypeSocrataSeries

API to search for entries of type SOCRATA Series

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeSocrataSeriesRequest;
import org.openapis.openapi.models.operations.SearchTypeSocrataSeriesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeSocrataSeriesRequest req = new SearchTypeSocrataSeriesRequest() {{
                changedateFrom = OffsetDateTime.parse("2020-02-10T07:25:38.174Z");
                changedateTo = OffsetDateTime.parse("2022-02-05T14:03:55.499Z");
                createdateFrom = OffsetDateTime.parse("2022-01-08T10:08:23.784Z");
                createdateTo = OffsetDateTime.parse("2022-08-15T14:39:56.529Z");
                description = "molestias";
                filesuffix = "odio";
                fromdate = OffsetDateTime.parse("2022-11-01T11:07:18.347Z");
                group = "sint";
                max = 10180L;
                maxlatitude = 8495.44;
                maxlongitude = 2378.75;
                minlatitude = 2106.51;
                minlongitude = 4031.87;
                name = "Natalie Bogisich";
                skip = 635677L;
                text = "architecto";
                todate = OffsetDateTime.parse("2022-02-02T02:57:48.522Z");
            }};            

            SearchTypeSocrataSeriesResponse res = sdk.typeTypeSocrataSeries.searchTypeSocrataSeries(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
