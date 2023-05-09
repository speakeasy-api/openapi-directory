# clickStream

### Available Operations

* [clickStreamGet](#clickstreamget) - Retrieve the latest list of events of this account. Limited to last 100.

## clickStreamGet

Retrieve the latest list of events of this account. Limited to last 100.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClickStreamGetFilterEnum;
import org.openapis.openapi.models.operations.ClickStreamGetRequest;
import org.openapis.openapi.models.operations.ClickStreamGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ClickStreamGetRequest req = new ClickStreamGetRequest() {{
                conversion = 840429L;
                datapoint = 183280L;
                filter = ClickStreamGetFilterEnum.SPIDERS;
                group = 144847L;
                pageSize = 164959;
            }};            

            ClickStreamGetResponse res = sdk.clickStream.clickStreamGet(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoClickStreamHit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
