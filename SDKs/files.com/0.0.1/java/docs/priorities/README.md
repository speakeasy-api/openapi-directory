# priorities

## Overview

Operations about priorities

### Available Operations

* [getPriorities](#getpriorities) - List Priorities

## getPriorities

List Priorities

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPrioritiesRequest;
import org.openapis.openapi.models.operations.GetPrioritiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPrioritiesRequest req = new GetPrioritiesRequest("dicta") {{
                cursor = "architecto";
                perPage = 577140;
            }};            

            GetPrioritiesResponse res = sdk.priorities.getPriorities(req);

            if (res.priorityEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
