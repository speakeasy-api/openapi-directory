# typeHipchatGroup

## Overview

Search API for 'HipChat Group' entry type

### Available Operations

* [searchHipchatGroup](#searchhipchatgroup) - Search API for 'HipChat Group' entry type

## searchHipchatGroup

API to search for entries of type HipChat Group

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchHipchatGroupRequest;
import org.openapis.openapi.models.operations.SearchHipchatGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchHipchatGroupRequest req = new SearchHipchatGroupRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-01-12T22:07:15.196Z");
                changedateTo = OffsetDateTime.parse("2020-06-02T01:41:14.280Z");
                createdateFrom = OffsetDateTime.parse("2021-10-07T02:38:58.799Z");
                createdateTo = OffsetDateTime.parse("2022-11-15T00:25:29.820Z");
                description = "nisi";
                filesuffix = "rerum";
                fromdate = OffsetDateTime.parse("2020-04-05T22:53:14.639Z");
                group = "non";
                max = 524577L;
                maxlatitude = 1578.84;
                maxlongitude = 3542.25;
                minlatitude = 7868.6;
                minlongitude = 1202.77;
                name = "Colin Berge Sr.";
                skip = 317898L;
                text = "optio";
                todate = OffsetDateTime.parse("2022-12-19T13:06:00.021Z");
            }};            

            SearchHipchatGroupResponse res = sdk.typeHipchatGroup.searchHipchatGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
