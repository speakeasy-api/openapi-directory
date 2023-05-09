# typeJeopardy

## Overview

Search API for 'Jeopardy' entry type

### Available Operations

* [searchJeopardy](#searchjeopardy) - Search API for 'Jeopardy' entry type

## searchJeopardy

API to search for entries of type Jeopardy

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchJeopardyRequest;
import org.openapis.openapi.models.operations.SearchJeopardyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchJeopardyRequest req = new SearchJeopardyRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-05T10:05:27.153Z");
                changedateTo = OffsetDateTime.parse("2021-03-11T08:40:17.658Z");
                createdateFrom = OffsetDateTime.parse("2022-11-15T06:32:12.898Z");
                createdateTo = OffsetDateTime.parse("2022-06-02T03:13:50.504Z");
                description = "optio";
                filesuffix = "alias";
                fromdate = OffsetDateTime.parse("2022-08-08T19:04:23.267Z");
                group = "commodi";
                max = 956124L;
                maxlatitude = 1643.19;
                maxlongitude = 3304.4;
                minlatitude = 8937.73;
                minlongitude = 6383.9;
                name = "Alexander Gerhold";
                searchDbJeopardyAirDate = "libero";
                searchDbJeopardyAnswer = "in";
                searchDbJeopardyCategory = "minima";
                searchDbJeopardyQuestion = "ex";
                searchDbJeopardyRound = "minus";
                skip = 68880L;
                text = "beatae";
                todate = OffsetDateTime.parse("2021-10-28T09:51:29.423Z");
            }};            

            SearchJeopardyResponse res = sdk.typeJeopardy.searchJeopardy(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
