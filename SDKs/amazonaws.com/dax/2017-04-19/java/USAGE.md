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

            CreateClusterRequest req = new CreateClusterRequest() {{
                headers = new CreateClusterHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AmazonDAXV3.CreateCluster";
                }};
                request = new CreateClusterRequest() {{
                    availabilityZones = new String[]() {{
                        add("et"),
                    }};
                    clusterEndpointEncryptionType = "NONE";
                    clusterName = "rerum";
                    description = "dicta";
                    iamRoleArn = "debitis";
                    nodeType = "voluptatum";
                    notificationTopicArn = "et";
                    parameterGroupName = "ut";
                    preferredMaintenanceWindow = "dolorem";
                    replicationFactor = 7259475919510918339;
                    sseSpecification = new SseSpecification() {{
                        enabled = false;
                    }};
                    securityGroupIds = new String[]() {{
                        add("vitae"),
                        add("totam"),
                        add("dolores"),
                    }};
                    subnetGroupName = "illum";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "vel";
                            value = "odio";
                        }}),
                    }};
                }};
            }};

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->