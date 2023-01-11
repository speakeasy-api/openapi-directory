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
                    xAmzAlgorithm = "dolores";
                    xAmzContentSha256 = "fuga";
                    xAmzCredential = "et";
                    xAmzDate = "qui";
                    xAmzSecurityToken = "voluptatum";
                    xAmzSignature = "aut";
                    xAmzSignedHeaders = "distinctio";
                }};
                request = new CreateSavingsPlanRequestBody() {{
                    clientToken = "dicta";
                    commitment = "tenetur";
                    purchaseTime = "2000-01-09T02:09:05Z";
                    savingsPlanOfferingId = "cupiditate";
                    tags = new java.util.HashMap<String, String>() {{
                        put("facere", "sequi");
                        put("rerum", "enim");
                        put("qui", "unde");
                    }};
                    upfrontPaymentAmount = "assumenda";
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