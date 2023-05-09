<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigRequest;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigRequestBody;
import org.openapis.openapi.models.operations.AssociateEncryptionConfigResponse;
import org.openapis.openapi.models.shared.EncryptionConfig;
import org.openapis.openapi.models.shared.Provider;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateEncryptionConfigRequest req = new AssociateEncryptionConfigRequest(                new AssociateEncryptionConfigRequestBody(                new org.openapis.openapi.models.shared.EncryptionConfig[]{{
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
                                            }}) {{
                                clientRequestToken = "molestiae";
                            }};, "minus") {{
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }};            

            AssociateEncryptionConfigResponse res = sdk.associateEncryptionConfig(req);

            if (res.associateEncryptionConfigResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->