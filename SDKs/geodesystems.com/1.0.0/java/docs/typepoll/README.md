# typePoll

## Overview

Search API for 'Poll' entry type

### Available Operations

* [searchPoll](#searchpoll) - Search API for 'Poll' entry type

## searchPoll

API to search for entries of type Poll

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchPollRequest;
import org.openapis.openapi.models.operations.SearchPollResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchPollRequest req = new SearchPollRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-29T14:29:34.691Z");
                changedateTo = OffsetDateTime.parse("2022-01-05T14:38:05.371Z");
                createdateFrom = OffsetDateTime.parse("2021-02-24T00:35:46.114Z");
                createdateTo = OffsetDateTime.parse("2022-09-30T19:30:44.770Z");
                description = "necessitatibus";
                filesuffix = "distinctio";
                fromdate = OffsetDateTime.parse("2021-11-03T17:46:09.057Z");
                group = "voluptatem";
                max = 759490L;
                maxlatitude = 1936.23;
                maxlongitude = 1257.07;
                minlatitude = 1122.5;
                minlongitude = 9730.96;
                name = "Tammy Farrell";
                skip = 345514L;
                text = "temporibus";
                todate = OffsetDateTime.parse("2022-10-12T00:49:16.585Z");
            }};            

            SearchPollResponse res = sdk.typePoll.searchPoll(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
