<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotResponse;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.shared.ConvertRecoveryPointToSnapshotRequest;
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

            ConvertRecoveryPointToSnapshotRequest req = new ConvertRecoveryPointToSnapshotRequest(                new ConvertRecoveryPointToSnapshotRequest("provident", "distinctio") {{
                                retentionPeriod = 844266L;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("illum", "vel") {{
                                        key = "nulla";
                                        value = "corrupti";
                                    }}),
                                    add(new Tag("suscipit", "iure") {{
                                        key = "error";
                                        value = "deserunt";
                                    }}),
                                    add(new Tag("ipsa", "delectus") {{
                                        key = "magnam";
                                        value = "debitis";
                                    }}),
                                }};
                            }};, ConvertRecoveryPointToSnapshotXAmzTargetEnum.REDSHIFT_SERVERLESS_CONVERT_RECOVERY_POINT_TO_SNAPSHOT) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }};            

            ConvertRecoveryPointToSnapshotResponse res = sdk.convertRecoveryPointToSnapshot(req);

            if (res.convertRecoveryPointToSnapshotResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->