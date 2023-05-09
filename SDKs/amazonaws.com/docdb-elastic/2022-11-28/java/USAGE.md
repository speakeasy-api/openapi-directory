<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClusterRequest;
import org.openapis.openapi.models.operations.CreateClusterRequestBody;
import org.openapis.openapi.models.operations.CreateClusterRequestBodyAuthTypeEnum;
import org.openapis.openapi.models.operations.CreateClusterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateClusterRequest req = new CreateClusterRequest(                new CreateClusterRequestBody("provident", "distinctio", CreateClusterRequestBodyAuthTypeEnum.SECRET_ARN, "unde", 857946L, 544883L) {{
                                clientToken = "illum";
                                kmsKeyId = "vel";
                                preferredMaintenanceWindow = "error";
                                subnetIds = new String[]{{
                                    add("suscipit"),
                                    add("iure"),
                                    add("magnam"),
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("ipsa", "delectus");
                                    put("tempora", "suscipit");
                                    put("molestiae", "minus");
                                    put("placeat", "voluptatum");
                                }};
                                vpcSecurityGroupIds = new String[]{{
                                    add("excepturi"),
                                    add("nisi"),
                                }};
                            }};) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "temporibus";
                xAmzCredential = "ab";
                xAmzDate = "quis";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateClusterResponse res = sdk.createCluster(req);

            if (res.createClusterOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->