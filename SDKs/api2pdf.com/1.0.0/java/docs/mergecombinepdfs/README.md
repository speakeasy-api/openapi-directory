# mergeCombinePdfs

### Available Operations

* [mergePost](#mergepost) - Merge multiple PDFs together

## mergePost

Merge two or more PDFs together on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MergePostResponse;
import org.openapis.openapi.models.shared.MergeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.MergeRequest req = new MergeRequest(                new String[]{{
                                add("error"),
                                add("deserunt"),
                            }}) {{
                fileName = "test.pdf";
                inlinePdf = true;
            }};            

            MergePostResponse res = sdk.mergeCombinePdfs.mergePost(req);

            if (res.apiResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
