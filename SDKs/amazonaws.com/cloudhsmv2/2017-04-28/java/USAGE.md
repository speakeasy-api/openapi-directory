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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "BaldrApiService.CopyBackupToRegion";
                }};
                request = new CopyBackupToRegionRequest() {{
                    backupId = "fugit";
                    destinationRegion = "et";
                    tagList = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "rerum";
                            value = "dicta";
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