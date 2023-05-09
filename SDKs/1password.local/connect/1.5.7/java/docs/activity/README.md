# activity

## Overview

Access API Request Activity

### Available Operations

* [getApiActivity](#getapiactivity) - Retrieve a list of API Requests that have been made.

## getApiActivity

Retrieve a list of API Requests that have been made.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiActivityRequest;
import org.openapis.openapi.models.operations.GetApiActivityResponse;
import org.openapis.openapi.models.operations.GetApiActivitySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiActivityRequest req = new GetApiActivityRequest() {{
                limit = 10L;
                offset = 50L;
            }};            

            GetApiActivityResponse res = sdk.activity.getApiActivity(req, new GetApiActivitySecurity("provident") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.apiRequests != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
