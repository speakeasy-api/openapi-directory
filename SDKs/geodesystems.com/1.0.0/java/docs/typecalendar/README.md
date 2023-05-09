# typeCalendar

## Overview

Search API for 'Calendar' entry type

### Available Operations

* [searchCalendar](#searchcalendar) - Search API for 'Calendar' entry type

## searchCalendar

API to search for entries of type Calendar

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchCalendarRequest;
import org.openapis.openapi.models.operations.SearchCalendarResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchCalendarRequest req = new SearchCalendarRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-09-02T13:45:48.565Z");
                changedateTo = OffsetDateTime.parse("2022-02-10T10:18:57.740Z");
                createdateFrom = OffsetDateTime.parse("2022-06-27T22:55:23.952Z");
                createdateTo = OffsetDateTime.parse("2022-06-28T14:53:26.431Z");
                description = "cum";
                filesuffix = "laboriosam";
                fromdate = OffsetDateTime.parse("2021-12-10T00:50:30.454Z");
                group = "error";
                max = 944708L;
                maxlatitude = 7105.29;
                maxlongitude = 8928.63;
                minlatitude = 2049.23;
                minlongitude = 6771.15;
                name = "Brandi Padberg";
                skip = 272683L;
                text = "atque";
                todate = OffsetDateTime.parse("2022-09-19T19:33:03.218Z");
            }};            

            SearchCalendarResponse res = sdk.typeCalendar.searchCalendar(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
