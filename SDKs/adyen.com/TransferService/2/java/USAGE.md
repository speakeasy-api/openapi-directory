<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            PostTransfersRequest req = new PostTransfersRequest() {{
                security = new PostTransfersSecurity() {{
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = "illo";
            }};

            PostTransfersResponse res = sdk.general.postTransfers(req);

            if (res.transfer.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->