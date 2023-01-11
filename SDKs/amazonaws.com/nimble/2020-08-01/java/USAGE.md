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

            AcceptEulasRequest req = new AcceptEulasRequest() {{
                pathParams = new AcceptEulasPathParams() {{
                    studioId = "asperiores";
                }};
                headers = new AcceptEulasHeaders() {{
                    xAmzAlgorithm = "tempore";
                    xAmzClientToken = "tempore";
                    xAmzContentSha256 = "assumenda";
                    xAmzCredential = "deleniti";
                    xAmzDate = "ea";
                    xAmzSecurityToken = "aut";
                    xAmzSignature = "dignissimos";
                    xAmzSignedHeaders = "voluptatem";
                }};
                request = new AcceptEulasRequestBody() {{
                    eulaIds = new String[]() {{
                        add("quo"),
                        add("atque"),
                    }};
                }};
            }};

            AcceptEulasResponse res = sdk.acceptEulas(req);

            if (res.acceptEulasResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->