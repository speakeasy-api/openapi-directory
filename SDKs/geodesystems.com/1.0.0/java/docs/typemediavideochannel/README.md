# typeMediaVideoChannel

## Overview

Search API for 'Video Channel' entry type

### Available Operations

* [searchMediaVideoChannel](#searchmediavideochannel) - Search API for 'Video Channel' entry type

## searchMediaVideoChannel

API to search for entries of type Video Channel

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchMediaVideoChannelRequest;
import org.openapis.openapi.models.operations.SearchMediaVideoChannelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchMediaVideoChannelRequest req = new SearchMediaVideoChannelRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-04T21:04:08.252Z");
                changedateTo = OffsetDateTime.parse("2021-05-04T08:20:05.226Z");
                createdateFrom = OffsetDateTime.parse("2022-05-04T21:42:10.988Z");
                createdateTo = OffsetDateTime.parse("2022-07-18T03:51:40.510Z");
                description = "possimus";
                filesuffix = "repellat";
                fromdate = OffsetDateTime.parse("2022-09-13T05:51:54.156Z");
                group = "adipisci";
                max = 867115L;
                maxlatitude = 6884.63;
                maxlongitude = 2942.66;
                minlatitude = 9767.62;
                minlongitude = 4353.53;
                name = "Bethany Rogahn";
                skip = 937865L;
                text = "praesentium";
                todate = OffsetDateTime.parse("2022-06-30T16:40:09.613Z");
            }};            

            SearchMediaVideoChannelResponse res = sdk.typeMediaVideoChannel.searchMediaVideoChannel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
