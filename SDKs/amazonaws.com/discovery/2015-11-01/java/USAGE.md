<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationRequest;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationResponse;
import org.openapis.openapi.models.shared.AssociateConfigurationItemsToApplicationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateConfigurationItemsToApplicationRequest req = new AssociateConfigurationItemsToApplicationRequest() {{
                associateConfigurationItemsToApplicationRequest = new AssociateConfigurationItemsToApplicationRequest() {{
                    applicationConfigurationId = "corrupti";
                    configurationIds = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                }};
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
                xAmzTarget = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication";
            }}            

            AssociateConfigurationItemsToApplicationResponse res = sdk.associateConfigurationItemsToApplication(req);

            if (res.associateConfigurationItemsToApplicationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->