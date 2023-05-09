# settingsChanges

## Overview

Operations about settings_changes

### Available Operations

* [getSettingsChanges](#getsettingschanges) - List Settings Changes

## getSettingsChanges

List Settings Changes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsChangesRequest;
import org.openapis.openapi.models.operations.GetSettingsChangesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSettingsChangesRequest req = new GetSettingsChangesRequest() {{
                apiKeyId = "rem";
                cursor = "aliquam";
                filter = new java.util.HashMap<String, Object>() {{
                    put("repellat", "alias");
                    put("corporis", "perspiciatis");
                }};
                perPage = 470649;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("voluptas", "alias");
                    put("maiores", "reiciendis");
                    put("dolores", "id");
                }};
                userId = "minima";
            }};            

            GetSettingsChangesResponse res = sdk.settingsChanges.getSettingsChanges(req);

            if (res.settingsChangeEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
