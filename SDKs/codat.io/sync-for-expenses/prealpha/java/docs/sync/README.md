# sync

## Overview

Triggering a new sync of expenses to accounting software.

### Available Operations

* [intiateSync](#intiatesync) - Initiate sync

## intiateSync

Initiate sync of pending transactions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IntiateSyncRequest;
import org.openapis.openapi.models.operations.IntiateSyncResponse;
import org.openapis.openapi.models.shared.PostSync;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            IntiateSyncRequest req = new IntiateSyncRequest("8a210b68-6988-11ed-a1eb-0242ac120002") {{
                postSync = new PostSync() {{
                    datasetIds = new String[]{{
                        add("05dfc2dd-f7cc-478c-a1ba-928fc816742c"),
                        add("b7392059-2939-46fe-a759-6eb10faaa235"),
                        add("2c595590-7aff-41a3-a2fa-9467739251aa"),
                    }};
                }};;
            }};            

            IntiateSyncResponse res = sdk.sync.intiateSync(req);

            if (res.syncInitiated != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
