# typeTasks

## Overview

Search API for 'Tasks' entry type

### Available Operations

* [searchTasks](#searchtasks) - Search API for 'Tasks' entry type

## searchTasks

API to search for entries of type Tasks

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTasksRequest;
import org.openapis.openapi.models.operations.SearchTasksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTasksRequest req = new SearchTasksRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-11-09T20:34:50.690Z");
                changedateTo = OffsetDateTime.parse("2021-05-26T13:45:22.454Z");
                createdateFrom = OffsetDateTime.parse("2022-09-14T19:22:57.784Z");
                createdateTo = OffsetDateTime.parse("2021-05-16T15:40:19.045Z");
                description = "magnam";
                filesuffix = "perspiciatis";
                fromdate = OffsetDateTime.parse("2022-06-15T16:15:25.092Z");
                group = "sunt";
                max = 364284L;
                maxlatitude = 9642.1;
                maxlongitude = 8484.39;
                minlatitude = 7808.85;
                minlongitude = 3096.34;
                name = "Jacquelyn Lueilwitz";
                searchDbTasksAssignedto = "maxime";
                searchDbTasksComplete = 1514.86;
                searchDbTasksEnddate = "minus";
                searchDbTasksPriority = "consequuntur";
                searchDbTasksStartdate = "possimus";
                searchDbTasksStatus = "delectus";
                searchDbTasksTitle = "harum";
                skip = 304964L;
                text = "eligendi";
                todate = OffsetDateTime.parse("2020-08-30T04:13:05.248Z");
            }};            

            SearchTasksResponse res = sdk.typeTasks.searchTasks(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
