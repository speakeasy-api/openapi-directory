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

            AddTagsToCertificateRequest req = new AddTagsToCertificateRequest() {{
                headers = new AddTagsToCertificateHeaders() {{
                    xAmzAlgorithm = "mollitia";
                    xAmzContentSha256 = "inventore";
                    xAmzCredential = "delectus";
                    xAmzDate = "ipsa";
                    xAmzSecurityToken = "animi";
                    xAmzSignature = "animi";
                    xAmzSignedHeaders = "ut";
                    xAmzTarget = "CertificateManager.AddTagsToCertificate";
                }};
                request = new AddTagsToCertificateRequest() {{
                    certificateArn = "fuga";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "sed";
                            value = "et";
                        }}),
                        add(new Tag() {{
                            key = "consequuntur";
                            value = "non";
                        }}),
                        add(new Tag() {{
                            key = "cupiditate";
                            value = "provident";
                        }}),
                    }};
                }};
            }};

            AddTagsToCertificateResponse res = sdk.addTagsToCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->