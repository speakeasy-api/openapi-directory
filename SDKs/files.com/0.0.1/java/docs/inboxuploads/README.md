# inboxUploads

## Overview

Operations about inbox_uploads

### Available Operations

* [getInboxUploads](#getinboxuploads) - List Inbox Uploads

## getInboxUploads

List Inbox Uploads

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInboxUploadsRequest;
import org.openapis.openapi.models.operations.GetInboxUploadsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInboxUploadsRequest req = new GetInboxUploadsRequest() {{
                cursor = "nemo";
                filter = new java.util.HashMap<String, Object>() {{
                    put("aliquid", "aperiam");
                    put("cum", "consectetur");
                    put("in", "exercitationem");
                    put("earum", "facere");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("doloribus", "suscipit");
                    put("reiciendis", "quidem");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("necessitatibus", "dolore");
                    put("sunt", "asperiores");
                    put("adipisci", "non");
                    put("amet", "beatae");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("a", "debitis");
                    put("consectetur", "corporis");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("laboriosam", "ipsa");
                    put("voluptates", "libero");
                    put("vitae", "accusamus");
                }};
                inboxId = 631126;
                inboxRegistrationId = 272437;
                perPage = 132815;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("voluptas", "voluptas");
                    put("minima", "nobis");
                }};
            }};            

            GetInboxUploadsResponse res = sdk.inboxUploads.getInboxUploads(req);

            if (res.inboxUploadEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
