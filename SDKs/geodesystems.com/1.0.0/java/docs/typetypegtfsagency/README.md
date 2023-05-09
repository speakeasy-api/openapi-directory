# typeTypeGtfsAgency

## Overview

Search API for 'Transit Agency' entry type

### Available Operations

* [searchTypeGtfsAgency](#searchtypegtfsagency) - Search API for 'Transit Agency' entry type

## searchTypeGtfsAgency

API to search for entries of type Transit Agency

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeGtfsAgencyRequest;
import org.openapis.openapi.models.operations.SearchTypeGtfsAgencyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeGtfsAgencyRequest req = new SearchTypeGtfsAgencyRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-12-23T19:43:14.990Z");
                changedateTo = OffsetDateTime.parse("2020-08-14T16:05:15.385Z");
                createdateFrom = OffsetDateTime.parse("2022-07-30T09:42:12.301Z");
                createdateTo = OffsetDateTime.parse("2022-06-12T23:46:26.725Z");
                description = "consectetur";
                filesuffix = "soluta";
                fromdate = OffsetDateTime.parse("2020-04-23T15:00:23.547Z");
                group = "perspiciatis";
                max = 380034L;
                maxlatitude = 3553.42;
                maxlongitude = 6016.34;
                minlatitude = 8927.12;
                minlongitude = 6946.11;
                name = "Laura Thompson III";
                skip = 938230L;
                text = "est";
                todate = OffsetDateTime.parse("2021-08-02T12:40:05.211Z");
            }};            

            SearchTypeGtfsAgencyResponse res = sdk.typeTypeGtfsAgency.searchTypeGtfsAgency(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
