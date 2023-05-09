# typeTypePointIcebridgeAtmIcessn

## Overview

Search API for 'ATM Ice SSN Data' entry type

### Available Operations

* [searchTypePointIcebridgeAtmIcessn](#searchtypepointicebridgeatmicessn) - Search API for 'ATM Ice SSN Data' entry type

## searchTypePointIcebridgeAtmIcessn

API to search for entries of type ATM Ice SSN Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeAtmIcessnRequest;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeAtmIcessnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointIcebridgeAtmIcessnRequest req = new SearchTypePointIcebridgeAtmIcessnRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-10-03T23:06:17.189Z");
                changedateTo = OffsetDateTime.parse("2022-01-02T21:29:43.687Z");
                createdateFrom = OffsetDateTime.parse("2022-04-25T13:28:01.783Z");
                createdateTo = OffsetDateTime.parse("2022-03-14T14:52:18.325Z");
                description = "consequatur";
                filesuffix = "accusantium";
                fromdate = OffsetDateTime.parse("2022-12-05T01:37:32.821Z");
                group = "amet";
                max = 578452L;
                maxlatitude = 5525.12;
                maxlongitude = 3971.12;
                minlatitude = 1930.48;
                minlongitude = 6328.85;
                name = "Edwin Bogisich";
                skip = 760942L;
                text = "adipisci";
                todate = OffsetDateTime.parse("2022-03-13T22:56:12.922Z");
            }};            

            SearchTypePointIcebridgeAtmIcessnResponse res = sdk.typeTypePointIcebridgeAtmIcessn.searchTypePointIcebridgeAtmIcessn(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
