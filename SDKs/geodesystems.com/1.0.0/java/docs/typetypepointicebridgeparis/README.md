# typeTypePointIcebridgeParis

## Overview

Search API for 'Paris Data' entry type

### Available Operations

* [searchTypePointIcebridgeParis](#searchtypepointicebridgeparis) - Search API for 'Paris Data' entry type

## searchTypePointIcebridgeParis

API to search for entries of type Paris Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeParisRequest;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeParisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointIcebridgeParisRequest req = new SearchTypePointIcebridgeParisRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-19T21:00:17.683Z");
                changedateTo = OffsetDateTime.parse("2022-02-26T02:18:03.425Z");
                createdateFrom = OffsetDateTime.parse("2022-10-05T04:44:20.086Z");
                createdateTo = OffsetDateTime.parse("2022-05-05T07:29:58.783Z");
                description = "ducimus";
                filesuffix = "dolores";
                fromdate = OffsetDateTime.parse("2021-04-03T20:48:28.253Z");
                group = "doloremque";
                max = 503802L;
                maxlatitude = 3011.55;
                maxlongitude = 5713.81;
                minlatitude = 8518.94;
                minlongitude = 3849.39;
                name = "Dexter Shields";
                skip = 908127L;
                text = "optio";
                todate = OffsetDateTime.parse("2022-01-06T04:00:38.682Z");
            }};            

            SearchTypePointIcebridgeParisResponse res = sdk.typeTypePointIcebridgeParis.searchTypePointIcebridgeParis(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
