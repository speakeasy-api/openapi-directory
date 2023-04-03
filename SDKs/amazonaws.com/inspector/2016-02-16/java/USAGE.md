<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddAttributesToFindingsXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddAttributesToFindingsRequest;
import org.openapis.openapi.models.operations.AddAttributesToFindingsResponse;
import org.openapis.openapi.models.shared.AddAttributesToFindingsRequest;
import org.openapis.openapi.models.shared.Attribute;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddAttributesToFindingsRequest req = new AddAttributesToFindingsRequest() {{
                addAttributesToFindingsRequest = new AddAttributesToFindingsRequest() {{
                    attributes = new org.openapis.openapi.models.shared.Attribute[]{{
                        add(new Attribute() {{
                            key = "provident";
                            value = "distinctio";
                        }}),
                        add(new Attribute() {{
                            key = "quibusdam";
                            value = "unde";
                        }}),
                        add(new Attribute() {{
                            key = "nulla";
                            value = "corrupti";
                        }}),
                    }};
                    findingArns = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                }};
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
                xAmzTarget = "InspectorService.AddAttributesToFindings";
            }}            

            AddAttributesToFindingsResponse res = sdk.addAttributesToFindings(req);

            if (res.addAttributesToFindingsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->