# apiKey

## Overview

Operations about api_keys

### Available Operations

* [apiKeyDeleteCurrent](#apikeydeletecurrent) - Delete current API key.  (Requires current API connection to be using an API key.)
* [apiKeyFindCurrent](#apikeyfindcurrent) - Show information about current API key.  (Requires current API connection to be using an API key.)
* [apiKeyUpdateCurrent](#apikeyupdatecurrent) - Update current API key.  (Requires current API connection to be using an API key.)

## apiKeyDeleteCurrent

Delete current API key.  (Requires current API connection to be using an API key.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyDeleteCurrentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyDeleteCurrentResponse res = sdk.apiKey.apiKeyDeleteCurrent();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeyFindCurrent

Show information about current API key.  (Requires current API connection to be using an API key.)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyFindCurrentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyFindCurrentResponse res = sdk.apiKey.apiKeyFindCurrent();

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiKeyUpdateCurrent

Update current API key.  (Requires current API connection to be using an API key.)

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiKeyUpdateCurrentRequestBody;
import org.openapis.openapi.models.operations.ApiKeyUpdateCurrentRequestBodyPermissionSetEnum;
import org.openapis.openapi.models.operations.ApiKeyUpdateCurrentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiKeyUpdateCurrentRequestBody req = new ApiKeyUpdateCurrentRequestBody() {{
                expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                name = "My Main API Key";
                permissionSet = ApiKeyUpdateCurrentRequestBodyPermissionSetEnum.FULL;
            }};            

            ApiKeyUpdateCurrentResponse res = sdk.apiKey.apiKeyUpdateCurrent(req);

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
