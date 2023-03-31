<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateApplicationHeaders;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.GroupingTypeEnum;

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

            CreateApplicationRequest req = new CreateApplicationRequest() {{
                headers = new CreateApplicationHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "EC2WindowsBarleyService.CreateApplication";
                }};
                request = new CreateApplicationRequest() {{
                    autoConfigEnabled = false;
                    autoCreate = false;
                    cweMonitorEnabled = false;
                    groupingType = "ACCOUNT_BASED";
                    opsCenterEnabled = false;
                    opsItemSNSTopicArn = "illum";
                    resourceGroupName = "vel";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "deserunt";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "iure";
                            value = "magnam";
                        }}),
                        add(new Tag() {{
                            key = "debitis";
                            value = "ipsa";
                        }}),
                    }};
                }};
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->