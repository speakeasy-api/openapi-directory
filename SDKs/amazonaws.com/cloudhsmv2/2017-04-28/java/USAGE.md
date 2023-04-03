<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CopyBackupToRegionXAmzTargetEnum;
import org.openapis.openapi.models.operations.CopyBackupToRegionRequest;
import org.openapis.openapi.models.operations.CopyBackupToRegionResponse;
import org.openapis.openapi.models.shared.CopyBackupToRegionRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyBackupToRegionRequest req = new CopyBackupToRegionRequest() {{
                copyBackupToRegionRequest = new CopyBackupToRegionRequest() {{
                    backupId = "corrupti";
                    destinationRegion = "provident";
                    tagList = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "quibusdam";
                            value = "unde";
                        }}),
                        add(new Tag() {{
                            key = "nulla";
                            value = "corrupti";
                        }}),
                        add(new Tag() {{
                            key = "illum";
                            value = "vel";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "deserunt";
                xAmzCredential = "suscipit";
                xAmzDate = "iure";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsa";
                xAmzTarget = "BaldrApiService.CopyBackupToRegion";
            }}            

            CopyBackupToRegionResponse res = sdk.copyBackupToRegion(req);

            if (res.copyBackupToRegionResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->