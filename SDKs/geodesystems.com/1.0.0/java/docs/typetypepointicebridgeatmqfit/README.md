# typeTypePointIcebridgeAtmQfit

## Overview

Search API for 'ATM QFIT Data' entry type

### Available Operations

* [searchTypePointIcebridgeAtmQfit](#searchtypepointicebridgeatmqfit) - Search API for 'ATM QFIT Data' entry type

## searchTypePointIcebridgeAtmQfit

API to search for entries of type ATM QFIT Data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeAtmQfitRequest;
import org.openapis.openapi.models.operations.SearchTypePointIcebridgeAtmQfitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointIcebridgeAtmQfitRequest req = new SearchTypePointIcebridgeAtmQfitRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-13T21:23:51.890Z");
                changedateTo = OffsetDateTime.parse("2022-08-21T22:37:08.105Z");
                createdateFrom = OffsetDateTime.parse("2020-08-28T05:38:13.948Z");
                createdateTo = OffsetDateTime.parse("2022-04-19T04:42:02.526Z");
                description = "sunt";
                filesuffix = "quisquam";
                fromdate = OffsetDateTime.parse("2021-09-02T18:33:54.350Z");
                group = "ut";
                max = 88210L;
                maxlatitude = 9702.13;
                maxlongitude = 9710.5;
                minlatitude = 7174.86;
                minlongitude = 9304.68;
                name = "Forrest Powlowski";
                skip = 620520L;
                text = "ipsam";
                todate = OffsetDateTime.parse("2020-03-12T07:11:13.000Z");
            }};            

            SearchTypePointIcebridgeAtmQfitResponse res = sdk.typeTypePointIcebridgeAtmQfit.searchTypePointIcebridgeAtmQfit(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
