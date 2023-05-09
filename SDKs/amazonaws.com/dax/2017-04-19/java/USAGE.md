<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.shared.ClusterEndpointEncryptionTypeEnum;
import org.openapis.openapi.models.shared.CreateClusterRequest;
import org.openapis.openapi.models.shared.SSESpecification;
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

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequest("provident", "distinctio", "quibusdam", 602763L) {{
                                availabilityZones = new String[]{{
                                    add("corrupti"),
                                    add("illum"),
                                    add("vel"),
                                    add("error"),
                                }};
                                clusterEndpointEncryptionType = ClusterEndpointEncryptionTypeEnum.TLS;
                                description = "suscipit";
                                notificationTopicArn = "iure";
                                parameterGroupName = "magnam";
                                preferredMaintenanceWindow = "debitis";
                                sseSpecification = new SSESpecification(false);;
                                securityGroupIds = new String[]{{
                                    add("delectus"),
                                }};
                                subnetGroupName = "tempora";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "molestiae";
                                        value = "minus";
                                    }}),
                                    add(new Tag() {{
                                        key = "placeat";
                                        value = "voluptatum";
                                    }}),
                                }};
                            }};, CreateClusterXAmzTargetEnum.AMAZON_DAXV3_CREATE_CLUSTER) {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "nisi";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quis";
            }};            

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->