# typeTypeTweet

## Overview

Search API for 'Tweet' entry type

### Available Operations

* [searchTypeTweet](#searchtypetweet) - Search API for 'Tweet' entry type

## searchTypeTweet

API to search for entries of type Tweet

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTypeTweetRequest;
import org.openapis.openapi.models.operations.SearchTypeTweetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTypeTweetRequest req = new SearchTypeTweetRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-14T09:01:00.084Z");
                changedateTo = OffsetDateTime.parse("2021-08-07T07:53:49.488Z");
                createdateFrom = OffsetDateTime.parse("2022-04-19T09:35:13.784Z");
                createdateTo = OffsetDateTime.parse("2022-03-17T20:35:13.110Z");
                description = "placeat";
                filesuffix = "necessitatibus";
                fromdate = OffsetDateTime.parse("2020-09-09T04:43:18.541Z");
                group = "ducimus";
                max = 279310L;
                maxlatitude = 9758.47;
                maxlongitude = 4721.52;
                minlatitude = 4976.33;
                minlongitude = 7222;
                name = "Nina Gutmann";
                skip = 842539L;
                text = "iure";
                todate = OffsetDateTime.parse("2022-03-01T06:49:32.137Z");
            }};            

            SearchTypeTweetResponse res = sdk.typeTypeTweet.searchTypeTweet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
