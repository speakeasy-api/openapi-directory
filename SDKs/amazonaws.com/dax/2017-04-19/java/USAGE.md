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
                    xAmzAlgorithm = "dolor";
                    xAmzContentSha256 = "dolor";
                    xAmzCredential = "ducimus";
                    xAmzDate = "in";
                    xAmzSecurityToken = "enim";
                    xAmzSignature = "iusto";
                    xAmzSignedHeaders = "dolor";
                    xAmzTarget = "AmazonDAXV3.CreateCluster";
                }};
                request = new CreateClusterRequest() {{
                    availabilityZones = new String[]() {{
                        add("dolores"),
                    }};
                    clusterEndpointEncryptionType = "TLS";
                    clusterName = "voluptatem";
                    description = "rerum";
                    iamRoleArn = "reiciendis";
                    nodeType = "aut";
                    notificationTopicArn = "unde";
                    parameterGroupName = "saepe";
                    preferredMaintenanceWindow = "ratione";
                    replicationFactor = 2367153732642039729;
                    sseSpecification = new SseSpecification() {{
                        enabled = false;
                    }};
                    securityGroupIds = new String[]() {{
                        add("veniam"),
                        add("consequatur"),
                        add("corporis"),
                    }};
                    subnetGroupName = "est";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "adipisci";
                            value = "est";
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