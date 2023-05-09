# typeFaq

## Overview

Search API for 'FAQ' entry type

### Available Operations

* [searchFaq](#searchfaq) - Search API for 'FAQ' entry type

## searchFaq

API to search for entries of type FAQ

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchFaqRequest;
import org.openapis.openapi.models.operations.SearchFaqResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchFaqRequest req = new SearchFaqRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-02-06T01:23:27.992Z");
                changedateTo = OffsetDateTime.parse("2021-05-09T07:07:29.255Z");
                createdateFrom = OffsetDateTime.parse("2022-01-26T06:01:40.776Z");
                createdateTo = OffsetDateTime.parse("2022-06-24T22:07:46.946Z");
                description = "earum";
                filesuffix = "modi";
                fromdate = OffsetDateTime.parse("2021-03-31T11:58:23.065Z");
                group = "voluptatem";
                max = 371919L;
                maxlatitude = 4259.46;
                maxlongitude = 13.83;
                minlatitude = 938.94;
                minlongitude = 2476.85;
                name = "Lloyd Mayer";
                skip = 458503L;
                text = "nemo";
                todate = OffsetDateTime.parse("2022-05-02T06:49:02.857Z");
            }};            

            SearchFaqResponse res = sdk.typeFaq.searchFaq(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
