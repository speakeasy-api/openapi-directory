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
                    xAmzAlgorithm = "quod";
                    xAmzContentSha256 = "impedit";
                    xAmzCredential = "nostrum";
                    xAmzDate = "repudiandae";
                    xAmzSecurityToken = "dicta";
                    xAmzSignature = "vero";
                    xAmzSignedHeaders = "ea";
                    xAmzTarget = "InspectorService.AddAttributesToFindings";
                }};
                request = new AddAttributesToFindingsRequest() {{
                    attributes = new openapisdk.models.shared.Attribute[]() {{
                        add(new Attribute() {{
                            key = "deleniti";
                            value = "omnis";
                        }}),
                        add(new Attribute() {{
                            key = "eius";
                            value = "consequuntur";
                        }}),
                    }};
                    findingArns = new String[]() {{
                        add("laudantium"),
                        add("similique"),
                        add("ullam"),
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