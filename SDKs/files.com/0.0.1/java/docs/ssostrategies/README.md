# ssoStrategies

## Overview

Operations about sso_strategies

### Available Operations

* [getSsoStrategies](#getssostrategies) - List Sso Strategies
* [getSsoStrategiesId](#getssostrategiesid) - Show Sso Strategy
* [postSsoStrategiesIdSync](#postssostrategiesidsync) - Synchronize provisioning data with the SSO remote server.

## getSsoStrategies

List Sso Strategies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSsoStrategiesRequest;
import org.openapis.openapi.models.operations.GetSsoStrategiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSsoStrategiesRequest req = new GetSsoStrategiesRequest() {{
                cursor = "omnis";
                perPage = 85233;
            }};            

            GetSsoStrategiesResponse res = sdk.ssoStrategies.getSsoStrategies(req);

            if (res.ssoStrategyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSsoStrategiesId

Show Sso Strategy

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSsoStrategiesIdRequest;
import org.openapis.openapi.models.operations.GetSsoStrategiesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSsoStrategiesIdRequest req = new GetSsoStrategiesIdRequest(703218);            

            GetSsoStrategiesIdResponse res = sdk.ssoStrategies.getSsoStrategiesId(req);

            if (res.ssoStrategyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSsoStrategiesIdSync

Synchronize provisioning data with the SSO remote server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSsoStrategiesIdSyncRequest;
import org.openapis.openapi.models.operations.PostSsoStrategiesIdSyncResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostSsoStrategiesIdSyncRequest req = new PostSsoStrategiesIdSyncRequest(665678);            

            PostSsoStrategiesIdSyncResponse res = sdk.ssoStrategies.postSsoStrategiesIdSync(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
