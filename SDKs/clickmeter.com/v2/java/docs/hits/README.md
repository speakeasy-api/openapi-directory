# hits

### Available Operations

* [hitsGetHits](#hitsgethits) - Retrieve the list of events related to this account.

## hitsGetHits

Retrieve the list of events related to this account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HitsGetHitsFilterEnum;
import org.openapis.openapi.models.operations.HitsGetHitsRequest;
import org.openapis.openapi.models.operations.HitsGetHitsResponse;
import org.openapis.openapi.models.operations.HitsGetHitsTimeframeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            HitsGetHitsRequest req = new HitsGetHitsRequest(HitsGetHitsTimeframeEnum.LAST120) {{
                filter = HitsGetHitsFilterEnum.NONUNIQUES;
                fromDay = "consectetur";
                limit = 753240;
                offset = "dignissimos";
                toDay = "consectetur";
            }};            

            HitsGetHitsResponse res = sdk.hits.hitsGetHits(req);

            if (res.apiCoreDtoClickStreamHitListPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
