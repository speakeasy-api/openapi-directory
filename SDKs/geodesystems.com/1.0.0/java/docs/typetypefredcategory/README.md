# typeTypeFredCategory

## Overview

Search API for 'FRED Category' entry type

### Available Operations

* [searchTypeFredCategory](#searchtypefredcategory) - Search API for 'FRED Category' entry type

## searchTypeFredCategory

API to search for entries of type FRED Category

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeFredCategoryRequest;
import org.openapis.openapi.models.operations.SearchTypeFredCategoryResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeFredCategoryRequest req = new SearchTypeFredCategoryRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-06-25T09:45:59.184Z");
                changedateTo = OffsetDateTime.parse("2022-11-26T08:22:25.392Z");
                createdateFrom = OffsetDateTime.parse("2021-07-19T02:34:49.174Z");
                createdateTo = OffsetDateTime.parse("2022-11-09T05:06:53.566Z");
                description = "inventore";
                filesuffix = "optio";
                fromdate = OffsetDateTime.parse("2021-02-25T01:43:39.041Z");
                group = "commodi";
                max = 820322L;
                maxlatitude = 5890.98;
                maxlongitude = 3304.59;
                minlatitude = 263.89;
                minlongitude = 1460.04;
                name = "Michael Thiel";
                skip = 187612L;
                text = "perferendis";
                todate = OffsetDateTime.parse("2022-03-31T01:51:07.320Z");
            }};            

            SearchTypeFredCategoryResponse res = sdk.typeTypeFredCategory.searchTypeFredCategory(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
