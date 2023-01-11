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

            CreateSavingsPlanRequest req = new CreateSavingsPlanRequest() {{
                headers = new CreateSavingsPlanHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateSavingsPlanRequestBody() {{
                    clientToken = "voluptas";
                    commitment = "fugit";
                    purchaseTime = "2011-08-12T10:11:12Z";
                    savingsPlanOfferingId = "nihil";
                    tags = new java.util.HashMap<String, String>() {{
                        put("dicta", "debitis");
                        put("voluptatum", "et");
                        put("ut", "dolorem");
                    }};
                    upfrontPaymentAmount = "et";
                }};
            }};

            CreateSavingsPlanResponse res = sdk.createSavingsPlan(req);

            if (res.createSavingsPlanResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->