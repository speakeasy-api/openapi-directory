<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CopyBackupToRegionRequest;
import org.openapis.openapi.models.operations.CopyBackupToRegionResponse;
import org.openapis.openapi.models.operations.CopyBackupToRegionXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopyBackupToRegionRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CopyBackupToRegionRequest req = new CopyBackupToRegionRequest(                new CopyBackupToRegionRequest("provident", "distinctio") {{
                                tagList = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("corrupti", "illum") {{
                                        key = "unde";
                                        value = "nulla";
                                    }}),
                                    add(new Tag("deserunt", "suscipit") {{
                                        key = "vel";
                                        value = "error";
                                    }}),
                                    add(new Tag("debitis", "ipsa") {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("suscipit", "molestiae") {{
                                        key = "delectus";
                                        value = "tempora";
                                    }}),
                                }};
                            }};, CopyBackupToRegionXAmzTargetEnum.BALDR_API_SERVICE_COPY_BACKUP_TO_REGION) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CopyBackupToRegionResponse res = sdk.copyBackupToRegion(req);

            if (res.copyBackupToRegionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->