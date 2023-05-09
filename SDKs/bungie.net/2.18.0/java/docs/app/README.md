# app

## Overview

application

### Available Operations

* [appGetApplicationApiUsage](#appgetapplicationapiusage) - Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.
* [appGetBungieApplications](#appgetbungieapplications) - Get list of applications created by Bungie.

## appGetApplicationApiUsage

Get API usage by application for time frame specified. You can go as far back as 30 days ago, and can ask for up to a 48 hour window of time in a single request. You must be authenticated with at least the ReadUserData permission to access this endpoint.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppGetApplicationApiUsageRequest;
import org.openapis.openapi.models.operations.AppGetApplicationApiUsageResponse;
import org.openapis.openapi.models.operations.AppGetApplicationApiUsageSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppGetApplicationApiUsageRequest req = new AppGetApplicationApiUsageRequest(548814) {{
                end = OffsetDateTime.parse("2021-07-27T21:52:56.087Z");
                start = OffsetDateTime.parse("2021-03-11T23:22:42.658Z");
            }};            

            AppGetApplicationApiUsageResponse res = sdk.app.appGetApplicationApiUsage(req, new AppGetApplicationApiUsageSecurity("nulla") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appGetBungieApplications

Get list of applications created by Bungie.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppGetBungieApplicationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppGetBungieApplicationsResponse res = sdk.app.appGetBungieApplications();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
