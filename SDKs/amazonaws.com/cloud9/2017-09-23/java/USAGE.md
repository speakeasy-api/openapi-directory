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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AWSCloud9WorkspaceManagementService.CreateEnvironmentEC2";
                }};
                request = new CreateEnvironmentEc2Request() {{
                    automaticStopTimeMinutes = 8274930044578894929;
                    clientRequestToken = "et";
                    connectionType = "CONNECT_SSH";
                    description = "rerum";
                    dryRun = false;
                    imageId = "debitis";
                    instanceType = "voluptatum";
                    name = "et";
                    ownerArn = "ut";
                    subnetId = "dolorem";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "voluptate";
                            value = "iste";
                        }}),
                        add(new Tag() {{
                            key = "vitae";
                            value = "totam";
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