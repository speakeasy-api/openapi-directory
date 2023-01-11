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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateHomeRegionControlRequest req = new CreateHomeRegionControlRequest() {{
                headers = new CreateHomeRegionControlHeaders() {{
                    xAmzAlgorithm = "et";
                    xAmzContentSha256 = "deleniti";
                    xAmzCredential = "laudantium";
                    xAmzDate = "fuga";
                    xAmzSecurityToken = "doloribus";
                    xAmzSignature = "quasi";
                    xAmzSignedHeaders = "et";
                    xAmzTarget = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
                }};
                request = new CreateHomeRegionControlRequest() {{
                    dryRun = false;
                    homeRegion = "doloremque";
                    target = new Target() {{
                        id = "minus";
                        type = "ACCOUNT";
                    }};
                }};
            }};

            CreateHomeRegionControlResponse res = sdk.createHomeRegionControl(req);

            if (res.createHomeRegionControlResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->