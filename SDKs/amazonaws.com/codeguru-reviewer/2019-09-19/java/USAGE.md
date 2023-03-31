<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateRepositoryHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AssociateRepositoryRequest req = new AssociateRepositoryRequest() {{
                headers = new AssociateRepositoryHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new AssociateRepositoryRequestBody() {{
                    clientRequestToken = "illum";
                    kmsKeyDetails = new AssociateRepositoryRequestBodyKMSKeyDetails() {{
                        encryptionOption = "AWS_OWNED_CMK";
                        kmsKeyId = "error";
                    }};
                    repository = new AssociateRepositoryRequestBodyRepository() {{
                        bitbucket = new ThirdPartySourceRepository() {{
                            connectionArn = "deserunt";
                            name = "suscipit";
                            owner = "iure";
                        }};
                        codeCommit = new CodeCommitRepository() {{
                            name = "magnam";
                        }};
                        gitHubEnterpriseServer = new ThirdPartySourceRepository() {{
                            connectionArn = "debitis";
                            name = "ipsa";
                            owner = "delectus";
                        }};
                        s3Bucket = new S3Repository() {{
                            bucketName = "tempora";
                            name = "suscipit";
                        }};
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("minus", "placeat");
                        put("voluptatum", "iusto");
                    }};
                }};
            }};            

            AssociateRepositoryResponse res = sdk.associateRepository(req);

            if (res.associateRepositoryResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->