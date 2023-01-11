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

            AssociateConfigurationItemsToApplicationRequest req = new AssociateConfigurationItemsToApplicationRequest() {{
                headers = new AssociateConfigurationItemsToApplicationHeaders() {{
                    xAmzAlgorithm = "enim";
                    xAmzContentSha256 = "sed";
                    xAmzCredential = "aut";
                    xAmzDate = "ea";
                    xAmzSecurityToken = "magnam";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "et";
                    xAmzTarget = "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication";
                }};
                request = new AssociateConfigurationItemsToApplicationRequest() {{
                    applicationConfigurationId = "eum";
                    configurationIds = new String[]() {{
                        add("modi"),
                        add("officiis"),
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