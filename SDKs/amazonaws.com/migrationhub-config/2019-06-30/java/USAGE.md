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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl";
                }};
                request = new CreateHomeRegionControlRequest() {{
                    dryRun = true;
                    homeRegion = "et";
                    target = new Target() {{
                        id = "nihil";
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