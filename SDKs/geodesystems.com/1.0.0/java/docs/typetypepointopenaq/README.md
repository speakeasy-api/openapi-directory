# typeTypePointOpenaq

## Overview

Search API for 'Open AQ Air Quality' entry type

### Available Operations

* [searchTypePointOpenaq](#searchtypepointopenaq) - Search API for 'Open AQ Air Quality' entry type

## searchTypePointOpenaq

API to search for entries of type Open AQ Air Quality

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypePointOpenaqRequest;
import org.openapis.openapi.models.operations.SearchTypePointOpenaqResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypePointOpenaqRequest req = new SearchTypePointOpenaqRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-10-27T11:00:09.773Z");
                changedateTo = OffsetDateTime.parse("2022-06-06T12:40:02.823Z");
                createdateFrom = OffsetDateTime.parse("2021-01-03T16:10:13.814Z");
                createdateTo = OffsetDateTime.parse("2020-09-24T01:48:30.387Z");
                description = "quaerat";
                filesuffix = "veniam";
                fromdate = OffsetDateTime.parse("2022-03-03T11:28:17.933Z");
                group = "dolores";
                max = 118158L;
                maxlatitude = 4765.4;
                maxlongitude = 8046.85;
                minlatitude = 1730.72;
                minlongitude = 5658.09;
                name = "Tanya Hyatt";
                searchTypePointOpenaqCity = "consectetur";
                searchTypePointOpenaqCountry = "velit";
                searchTypePointOpenaqHoursOffset = 273839L;
                searchTypePointOpenaqLocation = "aspernatur";
                skip = 323569L;
                text = "incidunt";
                todate = OffsetDateTime.parse("2022-10-05T13:16:43.183Z");
            }};            

            SearchTypePointOpenaqResponse res = sdk.typeTypePointOpenaq.searchTypePointOpenaq(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
