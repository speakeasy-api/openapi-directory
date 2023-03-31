<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2XAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Headers;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Request;
import org.openapis.openapi.models.operations.CreateEnvironmentEc2Response;
import org.openapis.openapi.models.shared.CreateEnvironmentEc2Request;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.ConnectionTypeEnum;

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

            CreateEnvironmentEc2Request req = new CreateEnvironmentEc2Request() {{
                headers = new CreateEnvironmentEc2Headers() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2";
                }};
                request = new CreateEnvironmentEc2Request() {{
                    automaticStopTimeMinutes = 847252;
                    clientRequestToken = "vel";
                    connectionType = "CONNECT_SSM";
                    description = "deserunt";
                    dryRun = false;
                    imageId = "suscipit";
                    instanceType = "iure";
                    name = "magnam";
                    ownerArn = "debitis";
                    subnetId = "ipsa";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "tempora";
                            value = "suscipit";
                        }}),
                        add(new Tag() {{
                            key = "molestiae";
                            value = "minus";
                        }}),
                        add(new Tag() {{
                            key = "placeat";
                            value = "voluptatum";
                        }}),
                        add(new Tag() {{
                            key = "iusto";
                            value = "excepturi";
                        }}),
                    }};
                }};
            }};            

            CreateEnvironmentEc2Response res = sdk.createEnvironmentEc2(req);

            if (res.createEnvironmentEc2Result.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->