# readinglist

### Available Operations

* [getReadinglist](#getreadinglist) - Readinglist

## getReadinglist

This endpoint allows the client to retrieve a list of articles that were saved to a Users readinglist.
        It supports pagination, each page will contain `30` articles by default

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReadinglistRequest;
import org.openapis.openapi.models.operations.GetReadinglistResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReadinglistRequest req = new GetReadinglistRequest() {{
                page = 359444;
                perPage = 296140;
            }};            

            GetReadinglistResponse res = sdk.readinglist.getReadinglist(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
