# typeTypeHazarddata

## Overview

Search API for 'Hazard Data' entry type

### Available Operations

* [searchTypeHazarddata](#searchtypehazarddata) - Search API for 'Hazard Data' entry type

## searchTypeHazarddata

API to search for entries of type Hazard Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeHazarddataRequest;
import org.openapis.openapi.models.operations.SearchTypeHazarddataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeHazarddataRequest req = new SearchTypeHazarddataRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-09T08:14:07.846Z");
                changedateTo = OffsetDateTime.parse("2022-06-08T15:55:59.943Z");
                createdateFrom = OffsetDateTime.parse("2022-05-08T04:50:58.280Z");
                createdateTo = OffsetDateTime.parse("2020-11-29T23:58:11.356Z");
                description = "odit";
                filesuffix = "molestiae";
                fromdate = OffsetDateTime.parse("2022-07-10T21:13:18.872Z");
                group = "inventore";
                max = 988407L;
                maxlatitude = 5076.35;
                maxlongitude = 3977.3;
                minlatitude = 1639.1;
                minlongitude = 3894.4;
                name = "Delores Roberts";
                searchTypeHazarddataSource = "delectus";
                skip = 806952L;
                text = "vel";
                todate = OffsetDateTime.parse("2021-10-30T02:25:02.152Z");
            }};            

            SearchTypeHazarddataResponse res = sdk.typeTypeHazarddata.searchTypeHazarddata(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
