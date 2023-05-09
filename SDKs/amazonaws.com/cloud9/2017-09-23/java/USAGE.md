<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Request;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Response;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2XAmzTargetEnum;
import org.openapis.openapi.models.shared.ConnectionTypeEnum;
import org.openapis.openapi.models.shared.CreateEnvironmentEc2Request;
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

            CreateEnvironmentEc2Request req = new CreateEnvironmentEc2Request(                new CreateEnvironmentEc2Request("provident", "distinctio") {{
                                automaticStopTimeMinutes = 844266L;
                                clientRequestToken = "unde";
                                connectionType = ConnectionTypeEnum.CONNECT_SSM;
                                description = "corrupti";
                                dryRun = false;
                                imageId = "illum";
                                ownerArn = "vel";
                                subnetId = "error";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("magnam", "debitis") {{
                                        key = "suscipit";
                                        value = "iure";
                                    }}),
                                    add(new Tag("tempora", "suscipit") {{
                                        key = "ipsa";
                                        value = "delectus";
                                    }}),
                                    add(new Tag("placeat", "voluptatum") {{
                                        key = "molestiae";
                                        value = "minus";
                                    }}),
                                }};
                            }};, CreateEnvironmentEc2XAmzTargetEnum.AWS_CLOUD9_WORKSPACE_MANAGEMENT_SERVICE_CREATE_ENVIRONMENT_EC2) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            CreateEnvironmentEc2Response res = sdk.createEnvironmentEc2(req);

            if (res.createEnvironmentEc2Result != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->