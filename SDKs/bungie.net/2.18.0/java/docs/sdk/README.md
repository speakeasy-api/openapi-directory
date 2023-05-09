# SDK

## Overview

These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.

Our Wiki page about OAuth through Bungie.net.
<https://github.com/Bungie-net/api/wiki/OAuth-Documentation>
### Available Operations

* [dotGetAvailableLocales](#dotgetavailablelocales) - List of available localization cultures
* [dotGetCommonSettings](#dotgetcommonsettings) - Get the common settings used by the Bungie.Net environment.
* [dotGetGlobalAlerts](#dotgetglobalalerts) - Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.
* [dotGetUserSystemOverrides](#dotgetusersystemoverrides) - Get the user-specific system overrides that should be respected alongside common systems.

## dotGetAvailableLocales

List of available localization cultures

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DotGetAvailableLocalesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DotGetAvailableLocalesResponse res = sdk.sdk.dotGetAvailableLocales();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dotGetCommonSettings

Get the common settings used by the Bungie.Net environment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DotGetCommonSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DotGetCommonSettingsResponse res = sdk.sdk.dotGetCommonSettings();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dotGetGlobalAlerts

Gets any active global alert for display in the forum banners, help pages, etc. Usually used for DOC alerts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DotGetGlobalAlertsRequest;
import org.openapis.openapi.models.operations.DotGetGlobalAlertsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DotGetGlobalAlertsRequest req = new DotGetGlobalAlertsRequest() {{
                includestreaming = false;
            }};            

            DotGetGlobalAlertsResponse res = sdk.sdk.dotGetGlobalAlerts(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dotGetUserSystemOverrides

Get the user-specific system overrides that should be respected alongside common systems.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DotGetUserSystemOverridesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DotGetUserSystemOverridesResponse res = sdk.sdk.dotGetUserSystemOverrides();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
