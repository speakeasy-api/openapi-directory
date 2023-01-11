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
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "nulla";
                    xAmzCredential = "numquam";
                    xAmzDate = "et";
                    xAmzSecurityToken = "officiis";
                    xAmzSignature = "sequi";
                    xAmzSignedHeaders = "vel";
                }};
                request = new AssociateRepositoryRequestBody() {{
                    clientRequestToken = "et";
                    kmsKeyDetails = new AssociateRepositoryRequestBodyKmsKeyDetails() {{
                        encryptionOption = "AWS_OWNED_CMK";
                        kmsKeyId = "aliquid";
                    }};
                    repository = new AssociateRepositoryRequestBodyRepository() {{
                        bitbucket = new ThirdPartySourceRepository() {{
                            connectionArn = "autem";
                            name = "asperiores";
                            owner = "tempora";
                        }};
                        codeCommit = new CodeCommitRepository() {{
                            name = "voluptate";
                        }};
                        gitHubEnterpriseServer = new ThirdPartySourceRepository() {{
                            connectionArn = "est";
                            name = "nostrum";
                            owner = "mollitia";
                        }};
                        s3Bucket = new S3Repository() {{
                            bucketName = "aut";
                            name = "recusandae";
                        }};
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("quas", "repellendus");
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