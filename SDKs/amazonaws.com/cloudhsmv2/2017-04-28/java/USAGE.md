<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CopyBackupToRegionXAmzTargetEnum;
import org.openapis.openapi.models.operations.CopyBackupToRegionHeaders;
import org.openapis.openapi.models.operations.CopyBackupToRegionRequest;
import org.openapis.openapi.models.operations.CopyBackupToRegionResponse;
import org.openapis.openapi.models.shared.CopyBackupToRegionRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CopyBackupToRegionRequest req = new CopyBackupToRegionRequest() {{
                headers = new CopyBackupToRegionHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "BaldrApiService.CopyBackupToRegion";
                }};
                request = new CopyBackupToRegionRequest() {{
                    backupId = "illum";
                    destinationRegion = "vel";
                    tagList = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
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