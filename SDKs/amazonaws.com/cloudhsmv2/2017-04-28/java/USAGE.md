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

            CopyBackupToRegionRequest req = new CopyBackupToRegionRequest() {{
                headers = new CopyBackupToRegionHeaders() {{
                    xAmzAlgorithm = "sunt";
                    xAmzContentSha256 = "asperiores";
                    xAmzCredential = "reprehenderit";
                    xAmzDate = "consectetur";
                    xAmzSecurityToken = "sequi";
                    xAmzSignature = "reprehenderit";
                    xAmzSignedHeaders = "qui";
                    xAmzTarget = "BaldrApiService.CopyBackupToRegion";
                }};
                request = new CopyBackupToRegionRequest() {{
                    backupId = "enim";
                    destinationRegion = "sint";
                    tagList = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "rem";
                            value = "aliquid";
                        }}),
                        add(new Tag() {{
                            key = "quo";
                            value = "quo";
                        }}),
                    }};
                }};
            }};

            CopyBackupToRegionResponse res = sdk.copyBackupToRegion(req);

            if (res.copyBackupToRegionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->