<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateClusterHeaders;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateClusterRequestBody;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;

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
                }};
                request = new CreateClusterRequestBody() {{
                    adminUserName = "illum";
                    adminUserPassword = "vel";
                    authType = "SECRET_ARN";
                    clientToken = "deserunt";
                    clusterName = "suscipit";
                    kmsKeyId = "iure";
                    preferredMaintenanceWindow = "magnam";
                    shardCapacity = 891773;
                    shardCount = 56713;
                    subnetIds = new String[]{{
                        add("tempora"),
                        add("suscipit"),
                        add("molestiae"),
                        add("minus"),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("voluptatum", "iusto");
                        put("excepturi", "nisi");
                        put("recusandae", "temporibus");
                        put("ab", "quis");
                    }};
                    vpcSecurityGroupIds = new String[]{{
                        add("deserunt"),
                    }};
                }};
            }};            

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->