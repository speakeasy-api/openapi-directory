<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotResponse;
import org.openapis.openapi.models.shared.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConvertRecoveryPointToSnapshotRequest req = new ConvertRecoveryPointToSnapshotRequest() {{
                convertRecoveryPointToSnapshotRequest = new ConvertRecoveryPointToSnapshotRequest() {{
                    recoveryPointId = "corrupti";
                    retentionPeriod = 592845;
                    snapshotName = "distinctio";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "unde";
                            value = "nulla";
                        }}),
                        add(new Tag() {{
                            key = "corrupti";
                            value = "illum";
                        }}),
                        add(new Tag() {{
                            key = "vel";
                            value = "error";
                        }}),
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
                xAmzTarget = "RedshiftServerless.ConvertRecoveryPointToSnapshot";
            }}            

            ConvertRecoveryPointToSnapshotResponse res = sdk.convertRecoveryPointToSnapshot(req);

            if (res.convertRecoveryPointToSnapshotResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->