# typeHomepage

## Overview

Search API for 'Home Page' entry type

### Available Operations

* [searchHomepage](#searchhomepage) - Search API for 'Home Page' entry type

## searchHomepage

API to search for entries of type Home Page

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchHomepageRequest;
import org.openapis.openapi.models.operations.SearchHomepageResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchHomepageRequest req = new SearchHomepageRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-01-25T01:11:52.226Z");
                changedateTo = OffsetDateTime.parse("2021-02-26T12:16:30.063Z");
                createdateFrom = OffsetDateTime.parse("2022-06-13T08:38:01.413Z");
                createdateTo = OffsetDateTime.parse("2022-09-14T23:28:45.223Z");
                description = "modi";
                filesuffix = "itaque";
                fromdate = OffsetDateTime.parse("2022-03-15T19:59:59.350Z");
                group = "consequuntur";
                max = 828147L;
                maxlatitude = 8768.4;
                maxlongitude = 9851.09;
                minlatitude = 7737.11;
                minlongitude = 7833.97;
                name = "Ms. Jimmie Wisozk";
                skip = 458412L;
                text = "iure";
                todate = OffsetDateTime.parse("2022-10-18T23:30:23.407Z");
            }};            

            SearchHomepageResponse res = sdk.typeHomepage.searchHomepage(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
