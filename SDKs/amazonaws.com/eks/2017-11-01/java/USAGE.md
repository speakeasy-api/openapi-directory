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
                    name = "sint";
                }};
                headers = new AssociateEncryptionConfigHeaders() {{
                    xAmzAlgorithm = "ratione";
                    xAmzContentSha256 = "sed";
                    xAmzCredential = "placeat";
                    xAmzDate = "ut";
                    xAmzSecurityToken = "ipsam";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "cum";
                }};
                request = new AssociateEncryptionConfigRequestBody() {{
                    clientRequestToken = "aut";
                    encryptionConfig = new openapisdk.models.shared.EncryptionConfig[]() {{
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "dolore";
                            }};
                            resources = new String[]() {{
                                add("quis"),
                                add("in"),
                                add("velit"),
                            }};
                        }}),
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "eligendi";
                            }};
                            resources = new String[]() {{
                                add("quaerat"),
                                add("dolorem"),
                                add("deserunt"),
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