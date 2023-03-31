<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationXAmzTargetEnum;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationHeaders;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationRequest;
import org.openapis.openapi.models.operations.AssociateConfigurationItemsToApplicationResponse;
import org.openapis.openapi.models.shared.AssociateConfigurationItemsToApplicationRequest;

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

            AssociateConfigurationItemsToApplicationRequest req = new AssociateConfigurationItemsToApplicationRequest() {{
                headers = new AssociateConfigurationItemsToApplicationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication";
                }};
                request = new AssociateConfigurationItemsToApplicationRequest() {{
                    applicationConfigurationId = "illum";
                    configurationIds = new String[]{{
                        add("error"),
                        add("deserunt"),
                    }};
                }};
            }};            

            AssociateConfigurationItemsToApplicationResponse res = sdk.associateConfigurationItemsToApplication(req);

            if (res.associateConfigurationItemsToApplicationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->