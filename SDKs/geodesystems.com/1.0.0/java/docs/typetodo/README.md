# typeTodo

## Overview

Search API for 'Todo' entry type

### Available Operations

* [searchTodo](#searchtodo) - Search API for 'Todo' entry type

## searchTodo

API to search for entries of type Todo

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchTodoRequest;
import org.openapis.openapi.models.operations.SearchTodoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchTodoRequest req = new SearchTodoRequest() {{
                changedateFrom = OffsetDateTime.parse("2022-07-21T21:21:59.349Z");
                changedateTo = OffsetDateTime.parse("2022-09-09T12:06:32.096Z");
                createdateFrom = OffsetDateTime.parse("2022-12-06T10:01:19.877Z");
                createdateTo = OffsetDateTime.parse("2022-09-13T15:13:55.874Z");
                description = "blanditiis";
                filesuffix = "sint";
                fromdate = OffsetDateTime.parse("2021-12-06T04:33:53.232Z");
                group = "molestiae";
                max = 933840L;
                maxlatitude = 5231.56;
                maxlongitude = 3663.27;
                minlatitude = 2505.2;
                minlongitude = 9261.42;
                name = "Jeffrey Gutmann";
                searchDbTodoCategory = "quibusdam";
                searchDbTodoChecked = false;
                searchDbTodoTitle = "magni";
                skip = 163673L;
                text = "consequuntur";
                todate = OffsetDateTime.parse("2022-08-01T18:49:09.447Z");
            }};            

            SearchTodoResponse res = sdk.typeTodo.searchTodo(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
