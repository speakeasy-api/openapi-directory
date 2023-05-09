# typeAny

## Overview

Search API for 'Any file type' entry type

### Available Operations

* [searchAny](#searchany) - Search API for 'Any file type' entry type

## searchAny

API to search for entries of type Any file type

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchAnyRequest;
import org.openapis.openapi.models.operations.SearchAnyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchAnyRequest req = new SearchAnyRequest() {{
                changedateFrom = OffsetDateTime.parse("2021-08-13T16:19:19.906Z");
                changedateTo = OffsetDateTime.parse("2021-06-10T05:07:43.614Z");
                createdateFrom = OffsetDateTime.parse("2022-10-06T15:49:54.663Z");
                createdateTo = OffsetDateTime.parse("2021-09-20T20:35:01.256Z");
                description = "occaecati";
                filesuffix = "fugit";
                fromdate = OffsetDateTime.parse("2021-02-10T09:24:01.909Z");
                group = "optio";
                max = 521848L;
                maxlatitude = 1059.07;
                maxlongitude = 4146.62;
                minlatitude = 4736;
                minlongitude = 2645.55;
                name = "Krista Rippin";
                skip = 568434L;
                text = "aspernatur";
                todate = OffsetDateTime.parse("2022-09-04T16:31:28.618Z");
            }};            

            SearchAnyResponse res = sdk.typeAny.searchAny(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
