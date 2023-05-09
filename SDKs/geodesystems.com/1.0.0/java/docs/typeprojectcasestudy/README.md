# typeProjectCasestudy

## Overview

Search API for 'Case Study' entry type

### Available Operations

* [searchProjectCasestudy](#searchprojectcasestudy) - Search API for 'Case Study' entry type

## searchProjectCasestudy

API to search for entries of type Case Study

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchProjectCasestudyRequest;
import org.openapis.openapi.models.operations.SearchProjectCasestudyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchProjectCasestudyRequest req = new SearchProjectCasestudyRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-03-18T16:44:34.970Z");
                changedateTo = OffsetDateTime.parse("2022-09-07T04:48:01.873Z");
                createdateFrom = OffsetDateTime.parse("2020-01-24T16:46:41.592Z");
                createdateTo = OffsetDateTime.parse("2021-09-13T18:01:05.207Z");
                description = "impedit";
                filesuffix = "accusamus";
                fromdate = OffsetDateTime.parse("2022-06-12T01:59:08.514Z");
                group = "blanditiis";
                max = 741603L;
                maxlatitude = 1197.25;
                maxlongitude = 7705.44;
                minlatitude = 2740.4;
                minlongitude = 9082.49;
                name = "Jeremy Rutherford";
                searchProjectCasestudyIntendedUse = "vel";
                searchProjectCasestudyLocation = "eligendi";
                skip = 923159L;
                text = "ex";
                todate = OffsetDateTime.parse("2022-11-30T06:16:15.371Z");
            }};            

            SearchProjectCasestudyResponse res = sdk.typeProjectCasestudy.searchProjectCasestudy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
