<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterActionEnum;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterVersionEnum;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterRequest;
import org.openapis.openapi.models.operations.GETAddRoleToDBClusterResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddRoleToDBClusterRequest req = new GETAddRoleToDBClusterRequest() {{
                action = "AddRoleToDBCluster";
                dbClusterIdentifier = "corrupti";
                featureName = "provident";
                roleArn = "distinctio";
                version = "2014-10-31";
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "unde";
                xAmzCredential = "nulla";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "illum";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "error";
            }}            

            GETAddRoleToDBClusterResponse res = sdk.getAddRoleToDBCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->