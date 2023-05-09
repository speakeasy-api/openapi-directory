# syncFlowPreferences

## Overview

Configure preferences for any given sync for commerce company using sync flow.

### Available Operations

* [getConfigTextSyncFlow](#getconfigtextsyncflow) - Retrieve preferences for text fields on Sync Flow
* [getSyncFlowUrl](#getsyncflowurl) - Retrieve sync flow url
* [getVisibleAccounts](#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [updateVisibleAccountsSyncFlow](#updatevisibleaccountssyncflow) - Update the visible accounts on Sync Flow

## getConfigTextSyncFlow

To enable retrieval of preferences set for the text fields on Sync Flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigTextSyncFlowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConfigTextSyncFlowResponse res = sdk.syncFlowPreferences.getConfigTextSyncFlow();

            if (res.localizationInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSyncFlowUrl

Get a URL for Sync Flow including a one time passcode.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSyncFlowUrlRequest;
import org.openapis.openapi.models.operations.GetSyncFlowUrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSyncFlowUrlRequest req = new GetSyncFlowUrlRequest("excepturi", "odit") {{
                merchantIdentifier = "ea";
            }};            

            GetSyncFlowUrlResponse res = sdk.syncFlowPreferences.getSyncFlowUrl(req);

            if (res.syncFlowUrl != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVisibleAccounts

Enable retrieval for accounts which are visible on sync flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVisibleAccountsRequest;
import org.openapis.openapi.models.operations.GetVisibleAccountsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetVisibleAccountsRequest req = new GetVisibleAccountsRequest("1fb576b0-d5f0-4d30-85fb-b2587053202c", "73d5fe9b-90c2-4890-9b3f-e49a8d9cbf48");            

            GetVisibleAccountsResponse res = sdk.syncFlowPreferences.getVisibleAccounts(req);

            if (res.visibleAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConfigTextSyncFlow

To enable update of preferences set for the text fields on sync flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConfigTextSyncFlowResponse;
import org.openapis.openapi.models.shared.Localization;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, org.openapis.openapi.models.shared.Localization>() {{
                put("dolorem", new Localization() {{
                    required = false;
                    text = "dolor";
                }});
            }}            

            UpdateConfigTextSyncFlowResponse res = sdk.syncFlowPreferences.updateConfigTextSyncFlow(req);

            if (res.localizationInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateVisibleAccountsSyncFlow

To enable update of accounts visible preferences set on Sync Flow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateVisibleAccountsSyncFlowRequest;
import org.openapis.openapi.models.operations.UpdateVisibleAccountsSyncFlowResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.VisibleAccounts;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateVisibleAccountsSyncFlowRequest req = new UpdateVisibleAccountsSyncFlowRequest("3f9b77f3-a410-4067-8ebf-69280d1ba77a") {{
                visibleAccounts = new VisibleAccounts() {{
                    visibleAccounts = new String[]{{
                        add("omnis"),
                        add("necessitatibus"),
                        add("distinctio"),
                    }};
                }};;
            }};            

            UpdateVisibleAccountsSyncFlowResponse res = sdk.syncFlowPreferences.updateVisibleAccountsSyncFlow(req);

            if (res.visibleAccounts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
