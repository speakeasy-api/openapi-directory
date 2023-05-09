<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterRequest;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterResponse;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddRoleToDBClusterRequest req = new GETAddRoleToDBClusterRequest(GETAddRoleToDBClusterActionEnum.ADD_ROLE_TO_DB_CLUSTER, "provident", "distinctio", GETAddRoleToDBClusterVersionEnum.TWO_THOUSAND_AND_FOURTEEN1031) {{
                featureName = "quibusdam";
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "corrupti";
                xAmzDate = "illum";
                xAmzSecurityToken = "vel";
                xAmzSignature = "error";
                xAmzSignedHeaders = "deserunt";
            }};            

            GETAddRoleToDBClusterResponse res = sdk.getAddRoleToDBCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->