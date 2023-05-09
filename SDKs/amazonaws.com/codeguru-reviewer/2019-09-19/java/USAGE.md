<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateRepositoryRequest;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBody;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBodyKMSKeyDetails;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBodyRepository;
import org.openapis.openapi.models.operations.AssociateRepositoryResponse;
import org.openapis.openapi.models.shared.CodeCommitRepository;
import org.openapis.openapi.models.shared.EncryptionOptionEnum;
import org.openapis.openapi.models.shared.S3Repository;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ThirdPartySourceRepository;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRepositoryRequest req = new AssociateRepositoryRequest(                new AssociateRepositoryRequestBody(                new AssociateRepositoryRequestBodyRepository() {{
                                                bitbucket = new ThirdPartySourceRepository("provident", "distinctio", "quibusdam");;
                                                codeCommit = new CodeCommitRepository("unde");;
                                                gitHubEnterpriseServer = new ThirdPartySourceRepository("nulla", "corrupti", "illum");;
                                                s3Bucket = new S3Repository("vel", "error");;
                                            }};) {{
                                clientRequestToken = "deserunt";
                                kmsKeyDetails = new AssociateRepositoryRequestBodyKMSKeyDetails() {{
                                    encryptionOption = EncryptionOptionEnum.AWS_OWNED_CMK;
                                    kmsKeyId = "iure";
                                }};;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("debitis", "ipsa");
                                    put("delectus", "tempora");
                                }};
                            }};) {{
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "minus";
                xAmzDate = "placeat";
                xAmzSecurityToken = "voluptatum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "excepturi";
            }};            

            AssociateRepositoryResponse res = sdk.associateRepository(req);

            if (res.associateRepositoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->