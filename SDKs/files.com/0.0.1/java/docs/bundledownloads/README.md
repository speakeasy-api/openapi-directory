# bundleDownloads

## Overview

Operations about bundle_downloads

### Available Operations

* [getBundleDownloads](#getbundledownloads) - List Bundle Downloads

## getBundleDownloads

List Bundle Downloads

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundleDownloadsRequest;
import org.openapis.openapi.models.operations.GetBundleDownloadsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBundleDownloadsRequest req = new GetBundleDownloadsRequest() {{
                bundleId = 739551;
                bundleRegistrationId = 452109;
                cursor = "dignissimos";
                filter = new java.util.HashMap<String, Object>() {{
                    put("amet", "dolorum");
                    put("numquam", "veritatis");
                    put("ipsa", "ipsa");
                    put("iure", "odio");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("accusamus", "quidem");
                    put("voluptatibus", "voluptas");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("eos", "atque");
                    put("sit", "fugiat");
                    put("ab", "soluta");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("iusto", "voluptate");
                    put("dolorum", "deleniti");
                    put("omnis", "necessitatibus");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("asperiores", "nihil");
                    put("ipsum", "voluptate");
                    put("id", "saepe");
                }};
                perPage = 263322;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("perferendis", "amet");
                }};
            }};            

            GetBundleDownloadsResponse res = sdk.bundleDownloads.getBundleDownloads(req);

            if (res.bundleDownloadEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
