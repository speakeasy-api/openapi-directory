<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddAttributesToFindingsXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddAttributesToFindingsHeaders;
import org.openapis.openapi.models.operations.AddAttributesToFindingsRequest;
import org.openapis.openapi.models.operations.AddAttributesToFindingsResponse;
import org.openapis.openapi.models.shared.AddAttributesToFindingsRequest;
import org.openapis.openapi.models.shared.Attribute;

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

            AddAttributesToFindingsRequest req = new AddAttributesToFindingsRequest() {{
                headers = new AddAttributesToFindingsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "InspectorService.AddAttributesToFindings";
                }};
                request = new AddAttributesToFindingsRequest() {{
                    attributes = new org.openapis.openapi.models.shared.Attribute[]{{
                        add(new Attribute() {{
                            key = "vel";
                            value = "error";
                        }}),
                        add(new Attribute() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new Attribute() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Attribute() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                    findingArns = new String[]{{
                        add("tempora"),
                        add("suscipit"),
                        add("molestiae"),
                        add("minus"),
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