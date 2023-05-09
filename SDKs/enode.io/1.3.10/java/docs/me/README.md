# me

## Overview

The `Me` endpoint returns metadata about the authenticated User.

### Available Operations

* [disconnectVendor](#disconnectvendor) - Disconnect Vendor
* [getMe](#getme) - Get My User

## disconnectVendor

Disconnect a single Vendor from the User's account.

All stored data about their Vendor account will be deleted, and any vehicles that were provided by that Vendor will disappear from the system.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisconnectVendorRequest;
import org.openapis.openapi.models.operations.DisconnectVendorResponse;
import org.openapis.openapi.models.operations.DisconnectVendorSecurity;
import org.openapis.openapi.models.operations.DisconnectVendorVendorEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DisconnectVendorRequest req = new DisconnectVendorRequest(DisconnectVendorVendorEnum.TESLA);            

            DisconnectVendorResponse res = sdk.me.disconnectVendor(req, new DisconnectVendorSecurity("debitis") {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMe

Returns metadata about the authenticated User, including a list of vendors for which the user has provided credentials.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.operations.GetMeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMeResponse res = sdk.me.getMe(new GetMeSecurity("ipsa") {{
                userAccessToken = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.getMe200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
