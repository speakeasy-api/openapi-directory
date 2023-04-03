<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.shared.CreateClusterRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.SSESpecification;
import org.openapis.openapi.models.shared.ClusterEndpointEncryptionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest() {{
                createClusterRequest = new CreateClusterRequest() {{
                    availabilityZones = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    clusterEndpointEncryptionType = "TLS";
                    clusterName = "nulla";
                    description = "corrupti";
                    iamRoleArn = "illum";
                    nodeType = "vel";
                    notificationTopicArn = "error";
                    parameterGroupName = "deserunt";
                    preferredMaintenanceWindow = "suscipit";
                    replicationFactor = 437587;
                    sseSpecification = new SSESpecification() {{
                        enabled = false;
                    }};
                    securityGroupIds = new String[]{{
                        add("debitis"),
                        add("ipsa"),
                    }};
                    subnetGroupName = "delectus";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "suscipit";
                            value = "molestiae";
                        }}),
                        add(new Tag() {{
                            key = "minus";
                            value = "placeat";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "excepturi";
                xAmzDate = "nisi";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "ab";
                xAmzTarget = "AmazonDAXV3.CreateCluster";
            }}            

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->