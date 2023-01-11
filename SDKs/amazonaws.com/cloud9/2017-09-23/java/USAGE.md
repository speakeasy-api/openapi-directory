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

            CreateEnvironmentEc2Request req = new CreateEnvironmentEc2Request() {{
                headers = new CreateEnvironmentEc2Headers() {{
                    xAmzAlgorithm = "cupiditate";
                    xAmzContentSha256 = "omnis";
                    xAmzCredential = "iste";
                    xAmzDate = "unde";
                    xAmzSecurityToken = "adipisci";
                    xAmzSignature = "impedit";
                    xAmzSignedHeaders = "tempora";
                    xAmzTarget = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2";
                }};
                request = new CreateEnvironmentEc2Request() {{
                    automaticStopTimeMinutes = 3876518618080918046;
                    clientRequestToken = "corrupti";
                    connectionType = "CONNECT_SSM";
                    description = "cum";
                    dryRun = false;
                    imageId = "ea";
                    instanceType = "architecto";
                    name = "esse";
                    ownerArn = "explicabo";
                    subnetId = "distinctio";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "non";
                            value = "accusantium";
                        }}),
                        add(new Tag() {{
                            key = "ut";
                            value = "consequatur";
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