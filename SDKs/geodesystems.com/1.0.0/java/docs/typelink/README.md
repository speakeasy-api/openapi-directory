# typeLink

## Overview

Search API for 'Link' entry type

### Available Operations

* [searchLink](#searchlink) - Search API for 'Link' entry type

## searchLink

API to search for entries of type Link

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchLinkRequest;
import org.openapis.openapi.models.operations.SearchLinkResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchLinkRequest req = new SearchLinkRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-06-05T16:43:24.726Z");
                changedateTo = OffsetDateTime.parse("2022-12-10T16:31:33.706Z");
                createdateFrom = OffsetDateTime.parse("2022-08-08T06:48:42.276Z");
                createdateTo = OffsetDateTime.parse("2022-09-10T09:17:41.732Z");
                description = "eligendi";
                filesuffix = "hic";
                fromdate = OffsetDateTime.parse("2022-02-10T18:47:53.557Z");
                group = "unde";
                max = 860311L;
                maxlatitude = 6213.93;
                maxlongitude = 6530;
                minlatitude = 2986.13;
                minlongitude = 3442.89;
                name = "Carole Paucek";
                skip = 98610L;
                text = "deserunt";
                todate = OffsetDateTime.parse("2021-11-04T14:46:37.615Z");
            }};            

            SearchLinkResponse res = sdk.typeLink.searchLink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
