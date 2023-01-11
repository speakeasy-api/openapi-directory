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

            AddAttributesToFindingsRequest req = new AddAttributesToFindingsRequest() {{
                headers = new AddAttributesToFindingsHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "InspectorService.AddAttributesToFindings";
                }};
                request = new AddAttributesToFindingsRequest() {{
                    attributes = new openapisdk.models.shared.Attribute[]() {{
                        add(new Attribute() {{
                            key = "et";
                            value = "nihil";
                        }}),
                    }};
                    findingArns = new String[]() {{
                        add("dicta"),
                        add("debitis"),
                        add("voluptatum"),
                    }};
                }};
            }};

            AddAttributesToFindingsResponse res = sdk.addAttributesToFindings(req);

            if (res.addAttributesToFindingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->