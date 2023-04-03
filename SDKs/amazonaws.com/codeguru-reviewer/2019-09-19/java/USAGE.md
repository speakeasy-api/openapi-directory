<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBodyKMSKeyDetails;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBodyRepository;
import org.openapis.openapi.models.operations.AssociateRepositoryRequestBody;
import org.openapis.openapi.models.operations.AssociateRepositoryRequest;
import org.openapis.openapi.models.operations.AssociateRepositoryResponse;
import org.openapis.openapi.models.shared.S3Repository;
import org.openapis.openapi.models.shared.ThirdPartySourceRepository;
import org.openapis.openapi.models.shared.CodeCommitRepository;
import org.openapis.openapi.models.shared.EncryptionOptionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateRepositoryRequest req = new AssociateRepositoryRequest() {{
                requestBody = new AssociateRepositoryRequestBody() {{
                    clientRequestToken = "corrupti";
                    kmsKeyDetails = new AssociateRepositoryRequestBodyKMSKeyDetails() {{
                        encryptionOption = "CUSTOMER_MANAGED_CMK";
                        kmsKeyId = "distinctio";
                    }};
                    repository = new AssociateRepositoryRequestBodyRepository() {{
                        bitbucket = new ThirdPartySourceRepository() {{
                            connectionArn = "quibusdam";
                            name = "unde";
                            owner = "nulla";
                        }};
                        codeCommit = new CodeCommitRepository() {{
                            name = "corrupti";
                        }};
                        gitHubEnterpriseServer = new ThirdPartySourceRepository() {{
                            connectionArn = "illum";
                            name = "vel";
                            owner = "error";
                        }};
                        s3Bucket = new S3Repository() {{
                            bucketName = "deserunt";
                            name = "suscipit";
                        }};
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("magnam", "debitis");
                        put("ipsa", "delectus");
                    }};
                }};
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "molestiae";
                xAmzDate = "minus";
                xAmzSecurityToken = "placeat";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "iusto";
            }}            

            AssociateRepositoryResponse res = sdk.associateRepository(req);

            if (res.associateRepositoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->