# typeStatusboard

## Overview

Search API for 'Status Board' entry type

### Available Operations

* [searchStatusboard](#searchstatusboard) - Search API for 'Status Board' entry type

## searchStatusboard

API to search for entries of type Status Board

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchStatusboardRequest;
import org.openapis.openapi.models.operations.SearchStatusboardResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchStatusboardRequest req = new SearchStatusboardRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-04-16T16:10:02.604Z");
                changedateTo = OffsetDateTime.parse("2021-05-05T11:34:17.742Z");
                createdateFrom = OffsetDateTime.parse("2020-11-29T03:17:42.952Z");
                createdateTo = OffsetDateTime.parse("2022-05-14T02:39:00.347Z");
                description = "doloremque";
                filesuffix = "fuga";
                fromdate = OffsetDateTime.parse("2022-11-24T01:49:22.777Z");
                group = "suscipit";
                max = 757438L;
                maxlatitude = 8855.23;
                maxlongitude = 4909.56;
                minlatitude = 1480.38;
                minlongitude = 1887.82;
                name = "Alex Armstrong";
                searchDbStatusboardStatus = "delectus";
                searchDbStatusboardWhat = "deserunt";
                skip = 188081L;
                text = "ipsa";
                todate = OffsetDateTime.parse("2021-02-26T20:02:05.121Z");
            }};            

            SearchStatusboardResponse res = sdk.typeStatusboard.searchStatusboard(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
