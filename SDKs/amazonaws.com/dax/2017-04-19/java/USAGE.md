<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateClusterXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateClusterHeaders;
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
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest() {{
                headers = new CreateClusterHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonDAXV3.CreateCluster";
                }};
                request = new CreateClusterRequest() {{
                    availabilityZones = new String[]{{
                        add("vel"),
                        add("error"),
                        add("deserunt"),
                        add("suscipit"),
                    }};
                    clusterEndpointEncryptionType = "NONE";
                    clusterName = "magnam";
                    description = "debitis";
                    iamRoleArn = "ipsa";
                    nodeType = "delectus";
                    notificationTopicArn = "tempora";
                    parameterGroupName = "suscipit";
                    preferredMaintenanceWindow = "molestiae";
                    replicationFactor = 791725;
                    sseSpecification = new SSESpecification() {{
                        enabled = false;
                    }};
                    securityGroupIds = new String[]{{
                        add("voluptatum"),
                        add("iusto"),
                        add("excepturi"),
                        add("nisi"),
                    }};
                    subnetGroupName = "recusandae";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "ab";
                            value = "quis";
                        }}),
                        add(new Tag() {{
                            key = "veritatis";
                            value = "deserunt";
                        }}),
                        add(new Tag() {{
                            key = "perferendis";
                            value = "ipsam";
                        }}),
                        add(new Tag() {{
                            key = "repellendus";
                            value = "sapiente";
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