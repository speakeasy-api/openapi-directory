# configuration

## Overview

Expressively configure preferences for any given sync for commerce company.

### Available Operations

* [getConfiguration](#getconfiguration) - Retrieve config preferences set for a company.
* [getSyncStatus](#getsyncstatus) - Get status for a company's syncs
* [setConfiguration](#setconfiguration) - Create or update configuration.

## getConfiguration

Retrieve current config preferences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigurationRequest;
import org.openapis.openapi.models.operations.GetConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigurationRequest req = new GetConfigurationRequest("8f097b00-74f1-4547-9b5e-6e13b99d488e");            

            GetConfigurationResponse res = sdk.configuration.getConfiguration(req);

            if (res.configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyncStatus

Check the sync history and sync status for a company.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyncStatusRequest;
import org.openapis.openapi.models.operations.GetSyncStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSyncStatusRequest req = new GetSyncStatusRequest("e91e450a-d2ab-4d44-a698-02d502a94bb4");            

            GetSyncStatusResponse res = sdk.configuration.getSyncStatus(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## setConfiguration

Make changes to configuration preferences.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SetConfigurationRequest;
import org.openapis.openapi.models.operations.SetConfigurationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            SetConfigurationRequest req = new SetConfigurationRequest("63c969e9-a3ef-4a77-9fb1-4cd66ae395ef");            

            SetConfigurationResponse res = sdk.configuration.setConfiguration(req);

            if (res.configuration != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
