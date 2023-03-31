<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotXAmzTargetEnum;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotHeaders;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotRequest;
import org.openapis.openapi.models.operations.ConvertRecoveryPointToSnapshotResponse;
import org.openapis.openapi.models.shared.ConvertRecoveryPointToSnapshotRequest;
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

            ConvertRecoveryPointToSnapshotRequest req = new ConvertRecoveryPointToSnapshotRequest() {{
                headers = new ConvertRecoveryPointToSnapshotHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "RedshiftServerless.ConvertRecoveryPointToSnapshot";
                }};
                request = new ConvertRecoveryPointToSnapshotRequest() {{
                    recoveryPointId = "illum";
                    retentionPeriod = 423655;
                    snapshotName = "error";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "suscipit";
                            value = "iure";
                        }}),
                        add(new Tag() {{
                            key = "magnam";
                            value = "debitis";
                        }}),
                        add(new Tag() {{
                            key = "ipsa";
                            value = "delectus";
                        }}),
                    }};
                }};
            }};            

            ConvertRecoveryPointToSnapshotResponse res = sdk.convertRecoveryPointToSnapshot(req);

            if (res.convertRecoveryPointToSnapshotResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->