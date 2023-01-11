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

            AssociateRepositoryRequest req = new AssociateRepositoryRequest() {{
                headers = new AssociateRepositoryHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new AssociateRepositoryRequestBody() {{
                    clientRequestToken = "voluptas";
                    kmsKeyDetails = new AssociateRepositoryRequestBodyKmsKeyDetails() {{
                        encryptionOption = "AWS_OWNED_CMK";
                        kmsKeyId = "et";
                    }};
                    repository = new AssociateRepositoryRequestBodyRepository() {{
                        bitbucket = new ThirdPartySourceRepository() {{
                            connectionArn = "nihil";
                            name = "rerum";
                            owner = "dicta";
                        }};
                        codeCommit = new CodeCommitRepository() {{
                            name = "debitis";
                        }};
                        gitHubEnterpriseServer = new ThirdPartySourceRepository() {{
                            connectionArn = "voluptatum";
                            name = "et";
                            owner = "ut";
                        }};
                        s3Bucket = new S3Repository() {{
                            bucketName = "dolorem";
                            name = "et";
                        }};
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("iste", "vitae");
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