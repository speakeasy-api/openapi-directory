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

            AssociateEncryptionConfigRequest req = new AssociateEncryptionConfigRequest() {{
                pathParams = new AssociateEncryptionConfigPathParams() {{
                    name = "sit";
                }};
                headers = new AssociateEncryptionConfigHeaders() {{
                    xAmzAlgorithm = "voluptas";
                    xAmzContentSha256 = "culpa";
                    xAmzCredential = "expedita";
                    xAmzDate = "consequuntur";
                    xAmzSecurityToken = "dolor";
                    xAmzSignature = "expedita";
                    xAmzSignedHeaders = "voluptas";
                }};
                request = new AssociateEncryptionConfigRequestBody() {{
                    clientRequestToken = "fugit";
                    encryptionConfig = new openapisdk.models.shared.EncryptionConfig[]() {{
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "nihil";
                            }};
                            resources = new String[]() {{
                                add("dicta"),
                                add("debitis"),
                                add("voluptatum"),
                            }};
                        }}),
                    }};
                }};
            }};

            AssociateEncryptionConfigResponse res = sdk.associateEncryptionConfig(req);

            if (res.associateEncryptionConfigResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->