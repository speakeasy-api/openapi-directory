# typeTripEvent

## Overview

Search API for 'Event' entry type

### Available Operations

* [searchTripEvent](#searchtripevent) - Search API for 'Event' entry type

## searchTripEvent

API to search for entries of type Event

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTripEventRequest;
import org.openapis.openapi.models.operations.SearchTripEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTripEventRequest req = new SearchTripEventRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-29T05:03:39.225Z");
                changedateTo = OffsetDateTime.parse("2022-06-19T06:43:31.808Z");
                createdateFrom = OffsetDateTime.parse("2022-11-13T23:12:40.856Z");
                createdateTo = OffsetDateTime.parse("2022-12-17T16:30:55.479Z");
                description = "odio";
                filesuffix = "sit";
                fromdate = OffsetDateTime.parse("2022-06-16T18:26:19.436Z");
                group = "delectus";
                max = 461853L;
                maxlatitude = 6759.55;
                maxlongitude = 7262.44;
                minlatitude = 1921.73;
                minlongitude = 4748.72;
                name = "Mr. Bert Wunsch";
                skip = 162251L;
                text = "quis";
                todate = OffsetDateTime.parse("2022-06-04T05:07:59.763Z");
            }};            

            SearchTripEventResponse res = sdk.typeTripEvent.searchTripEvent(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
