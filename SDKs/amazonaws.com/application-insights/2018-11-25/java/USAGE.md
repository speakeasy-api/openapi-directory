<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateApplicationRequest;
import org.openapis.openapi.models.operations.CreateApplicationResponse;
import org.openapis.openapi.models.operations.CreateApplicationXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateApplicationRequest;
import org.openapis.openapi.models.shared.GroupingTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateApplicationRequest req = new CreateApplicationRequest(                new CreateApplicationRequest() {{
                                autoConfigEnabled = false;
                                autoCreate = false;
                                cweMonitorEnabled = false;
                                groupingType = GroupingTypeEnum.ACCOUNT_BASED;
                                opsCenterEnabled = false;
                                opsItemSNSTopicArn = "provident";
                                resourceGroupName = "distinctio";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("corrupti", "illum") {{
                                        key = "unde";
                                        value = "nulla";
                                    }}),
                                    add(new Tag("deserunt", "suscipit") {{
                                        key = "vel";
                                        value = "error";
                                    }}),
                                    add(new Tag("debitis", "ipsa") {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag("suscipit", "molestiae") {{
                                        key = "delectus";
                                        value = "tempora";
                                    }}),
                                }};
                            }};, CreateApplicationXAmzTargetEnum.EC2_WINDOWS_BARLEY_SERVICE_CREATE_APPLICATION) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CreateApplicationResponse res = sdk.createApplication(req);

            if (res.createApplicationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->