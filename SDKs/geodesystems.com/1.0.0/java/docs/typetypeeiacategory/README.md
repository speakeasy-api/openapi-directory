# typeTypeEiaCategory

## Overview

Search API for 'EIA Category' entry type

### Available Operations

* [searchTypeEiaCategory](#searchtypeeiacategory) - Search API for 'EIA Category' entry type

## searchTypeEiaCategory

API to search for entries of type EIA Category

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeEiaCategoryRequest;
import org.openapis.openapi.models.operations.SearchTypeEiaCategoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeEiaCategoryRequest req = new SearchTypeEiaCategoryRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-10-26T17:25:08.094Z");
                changedateTo = OffsetDateTime.parse("2022-04-27T18:27:57.430Z");
                createdateFrom = OffsetDateTime.parse("2022-09-24T03:14:43.673Z");
                createdateTo = OffsetDateTime.parse("2022-06-27T00:48:16.622Z");
                description = "odio";
                filesuffix = "nostrum";
                fromdate = OffsetDateTime.parse("2022-10-01T00:33:36.040Z");
                group = "autem";
                max = 939516L;
                maxlatitude = 3266.35;
                maxlongitude = 4051.61;
                minlatitude = 8216.72;
                minlongitude = 2005.01;
                name = "Gordon Parker";
                skip = 255839L;
                text = "laborum";
                todate = OffsetDateTime.parse("2021-09-25T11:07:50.686Z");
            }};            

            SearchTypeEiaCategoryResponse res = sdk.typeTypeEiaCategory.searchTypeEiaCategory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
