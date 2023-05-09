# contentproSimilarText

### Available Operations

* [postContentproSimilarText](#postcontentprosimilartext) - The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

## postContentproSimilarText

The /contentpro-similar-text endpoint accepts and arbitrary piece of text and returns similar articles and blogs written by companies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContentproSimilarTextRequestBody;
import org.openapis.openapi.models.operations.PostContentproSimilarTextResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContentproSimilarTextRequestBody req = new PostContentproSimilarTextRequestBody("distinctio");            

            PostContentproSimilarTextResponse res = sdk.contentproSimilarText.postContentproSimilarText(req);

            if (res.postContentproSimilarText200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
