# typeGroup

## Overview

Search API for 'Folder' entry type

### Available Operations

* [searchGroup](#searchgroup) - Search API for 'Folder' entry type

## searchGroup

API to search for entries of type Folder

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGroupRequest;
import org.openapis.openapi.models.operations.SearchGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchGroupRequest req = new SearchGroupRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-12-20T23:22:33.052Z");
                changedateTo = OffsetDateTime.parse("2022-02-02T19:45:49.999Z");
                createdateFrom = OffsetDateTime.parse("2022-12-01T08:37:58.653Z");
                createdateTo = OffsetDateTime.parse("2022-10-25T07:28:31.947Z");
                description = "qui";
                filesuffix = "necessitatibus";
                fromdate = OffsetDateTime.parse("2022-09-30T11:43:51.351Z");
                group = "beatae";
                max = 397988L;
                maxlatitude = 2646.49;
                maxlongitude = 7600.49;
                minlatitude = 9750.95;
                minlongitude = 5629.48;
                name = "Randolph Lebsack";
                skip = 412052L;
                text = "impedit";
                todate = OffsetDateTime.parse("2022-11-10T13:12:44.057Z");
            }};            

            SearchGroupResponse res = sdk.typeGroup.searchGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
