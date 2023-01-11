<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKey = new SchemeApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AppendTextUsingGetRequest req = new AppendTextUsingGetRequest() {{
                queryParams = new AppendTextUsingGetQueryParams() {{
                    padID = "sit";
                    text = "voluptas";
                }};
            }};

            AppendTextUsingGetResponse res = sdk.appendTextUsingGet(req);

            if (res.appendTextUsingGET200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->