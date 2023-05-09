<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationRequest;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationResponse;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateConfigurationItemsToApplicationRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConfigurationItemsToApplicationRequest req = new AssociateConfigurationItemsToApplicationRequest(                new AssociateConfigurationItemsToApplicationRequest("provident",                 new String[]{{
                                                add("quibusdam"),
                                                add("unde"),
                                                add("nulla"),
                                            }});, AssociateConfigurationItemsToApplicationXAmzTargetEnum.AWS_POSEIDON_SERVICE_V20151101_ASSOCIATE_CONFIGURATION_ITEMS_TO_APPLICATION) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            AssociateConfigurationItemsToApplicationResponse res = sdk.associateConfigurationItemsToApplication(req);

            if (res.associateConfigurationItemsToApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->