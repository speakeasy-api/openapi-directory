<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigPathParams;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigHeaders;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigRequestBody;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigRequest;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigResponse;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.Provider;

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

            AssociateEncryptionConfigRequest req = new AssociateEncryptionConfigRequest() {{
                pathParams = new AssociateEncryptionConfigPathParams() {{
                    name = "corrupti";
                }};
                headers = new AssociateEncryptionConfigHeaders() {{
                    xAmzAlgorithm = "provident";
                    xAmzContentSha256 = "distinctio";
                    xAmzCredential = "quibusdam";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "nulla";
                    xAmzSignature = "corrupti";
                    xAmzSignedHeaders = "illum";
                }};
                request = new AssociateEncryptionConfigRequestBody() {{
                    clientRequestToken = "vel";
                    encryptionConfig = new org.openapis.openapi.models.shared.EncryptionConfig[]{{
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "deserunt";
                            }};
                            resources = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                        }}),
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "debitis";
                            }};
                            resources = new String[]{{
                                add("delectus"),
                            }};
                        }}),
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "tempora";
                            }};
                            resources = new String[]{{
                                add("molestiae"),
                                add("minus"),
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