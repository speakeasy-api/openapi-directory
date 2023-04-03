<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEncryptionConfigRequest req = new AssociateEncryptionConfigRequest() {{
                requestBody = new AssociateEncryptionConfigRequestBody() {{
                    clientRequestToken = "corrupti";
                    encryptionConfig = new org.openapis.openapi.models.shared.EncryptionConfig[]{{
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "distinctio";
                            }};
                            resources = new String[]{{
                                add("unde"),
                                add("nulla"),
                                add("corrupti"),
                                add("illum"),
                            }};
                        }}),
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "vel";
                            }};
                            resources = new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }};
                        }}),
                        add(new EncryptionConfig() {{
                            provider = new Provider() {{
                                keyArn = "magnam";
                            }};
                            resources = new String[]{{
                                add("ipsa"),
                                add("delectus"),
                                add("tempora"),
                                add("suscipit"),
                            }};
                        }}),
                    }};
                }};
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "minus";
                xAmzCredential = "placeat";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "iusto";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "nisi";
                name = "recusandae";
            }}            

            AssociateEncryptionConfigResponse res = sdk.associateEncryptionConfig(req);

            if (res.associateEncryptionConfigResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->