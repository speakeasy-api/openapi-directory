<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateClusterRequestBody;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest() {{
                requestBody = new CreateClusterRequestBody() {{
                    adminUserName = "corrupti";
                    adminUserPassword = "provident";
                    authType = "SECRET_ARN";
                    clientToken = "quibusdam";
                    clusterName = "unde";
                    kmsKeyId = "nulla";
                    preferredMaintenanceWindow = "corrupti";
                    shardCapacity = 847252;
                    shardCount = 423655;
                    subnetIds = new String[]{{
                        add("deserunt"),
                        add("suscipit"),
                        add("iure"),
                    }};
                    tags = new java.util.HashMap<String, String>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    vpcSecurityGroupIds = new String[]{{
                        add("molestiae"),
                        add("minus"),
                    }};
                }};
                xAmzAlgorithm = "placeat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "iusto";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "nisi";
                xAmzSignature = "recusandae";
                xAmzSignedHeaders = "temporibus";
            }}            

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterOutput.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->