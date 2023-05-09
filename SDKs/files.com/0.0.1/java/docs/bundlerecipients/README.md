# bundleRecipients

## Overview

Operations about bundle_recipients

### Available Operations

* [getBundleRecipients](#getbundlerecipients) - List Bundle Recipients
* [postBundleRecipients](#postbundlerecipients) - Create Bundle Recipient

## getBundleRecipients

List Bundle Recipients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBundleRecipientsRequest;
import org.openapis.openapi.models.operations.GetBundleRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBundleRecipientsRequest req = new GetBundleRecipientsRequest(456130) {{
                cursor = "harum";
                filter = new java.util.HashMap<String, Object>() {{
                    put("ipsum", "quisquam");
                    put("tenetur", "amet");
                }};
                perPage = 730856;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("numquam", "enim");
                    put("dolorem", "sapiente");
                    put("totam", "nihil");
                    put("sit", "expedita");
                }};
                userId = 207470;
            }};            

            GetBundleRecipientsResponse res = sdk.bundleRecipients.getBundleRecipients(req);

            if (res.bundleRecipientEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBundleRecipients

Create Bundle Recipient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBundleRecipientsRequestBody;
import org.openapis.openapi.models.operations.PostBundleRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBundleRecipientsRequestBody req = new PostBundleRecipientsRequestBody(153694, "johndoe@gmail.com") {{
                company = "Acme Ltd";
                name = "John Smith";
                note = "Just a note.";
                shareAfterCreate = false;
                userId = 424685;
            }};            

            PostBundleRecipientsResponse res = sdk.bundleRecipients.postBundleRecipients(req);

            if (res.bundleRecipientEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
