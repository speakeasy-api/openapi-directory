# typeOwlClass

## Overview

Search API for 'OWL Class' entry type

### Available Operations

* [searchOwlClass](#searchowlclass) - Search API for 'OWL Class' entry type

## searchOwlClass

API to search for entries of type OWL Class

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchOwlClassRequest;
import org.openapis.openapi.models.operations.SearchOwlClassResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchOwlClassRequest req = new SearchOwlClassRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-08-09T03:00:23.242Z");
                changedateTo = OffsetDateTime.parse("2022-10-22T11:14:59.383Z");
                createdateFrom = OffsetDateTime.parse("2022-04-25T19:18:27.795Z");
                createdateTo = OffsetDateTime.parse("2022-11-07T19:08:46.997Z");
                description = "dolorem";
                filesuffix = "architecto";
                fromdate = OffsetDateTime.parse("2022-11-13T00:38:19.332Z");
                group = "nulla";
                max = 316541L;
                maxlatitude = 735.74;
                maxlongitude = 2987.5;
                minlatitude = 9618.42;
                minlongitude = 2550.64;
                name = "Loren Jakubowski IV";
                skip = 711615L;
                text = "hic";
                todate = OffsetDateTime.parse("2022-03-17T11:23:26.153Z");
            }};            

            SearchOwlClassResponse res = sdk.typeOwlClass.searchOwlClass(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
