# orgSettings

## Overview

The Org Settings API endpoints allow you to manage your organization's
settings.


### Available Operations

* [getV2OrgsNameSettings](#getv2orgsnamesettings) - Get organization settings
* [putV2OrgsNameSettings](#putv2orgsnamesettings) - Update organization settings

## getV2OrgsNameSettings

Returns organization settings by name.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2OrgsNameSettingsRequest;
import org.openapis.openapi.models.operations.GetV2OrgsNameSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2OrgsNameSettingsRequest req = new GetV2OrgsNameSettingsRequest("dolorum");            

            GetV2OrgsNameSettingsResponse res = sdk.orgSettings.getV2OrgsNameSettings(req);

            if (res.orgSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2OrgsNameSettings

Updates an organization's settings. Some settings are only used when the
organization is on a business plan.

***Only users in the "owners" group of the organization can use this endpoint.***

The following settings are only used on a business plan:
- `restricted_images`


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2OrgsNameSettingsRequest;
import org.openapis.openapi.models.operations.PutV2OrgsNameSettingsRequestBody;
import org.openapis.openapi.models.operations.PutV2OrgsNameSettingsRequestBodyRestrictedImages;
import org.openapis.openapi.models.operations.PutV2OrgsNameSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2OrgsNameSettingsRequest req = new PutV2OrgsNameSettingsRequest(                new PutV2OrgsNameSettingsRequestBody(                new PutV2OrgsNameSettingsRequestBodyRestrictedImages(true, true, true););, "dicta");            

            PutV2OrgsNameSettingsResponse res = sdk.orgSettings.putV2OrgsNameSettings(req);

            if (res.orgSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
