# apps

## Overview

Operations about apps

### Available Operations

* [getApps](#getapps) - List Apps

## getApps

List Apps

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsRequest;
import org.openapis.openapi.models.operations.GetAppsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppsRequest req = new GetAppsRequest() {{
                cursor = "fugit";
                filter = new java.util.HashMap<String, Object>() {{
                    put("hic", "optio");
                    put("totam", "beatae");
                    put("commodi", "molestiae");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("qui", "impedit");
                    put("cum", "esse");
                }};
                perPage = 216550;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("aspernatur", "perferendis");
                    put("ad", "natus");
                    put("sed", "iste");
                }};
            }};            

            GetAppsResponse res = sdk.apps.getApps(req);

            if (res.appEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
