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

            GetAddRoleToDbClusterRequest req = new GetAddRoleToDbClusterRequest() {{
                queryParams = new GetAddRoleToDbClusterQueryParams() {{
                    action = "AddRoleToDBCluster";
                    dbClusterIdentifier = "voluptas";
                    featureName = "culpa";
                    roleArn = "expedita";
                    version = "2014-10-31";
                }};
                headers = new GetAddRoleToDbClusterHeaders() {{
                    xAmzAlgorithm = "dolor";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "voluptas";
                    xAmzDate = "fugit";
                    xAmzSecurityToken = "et";
                    xAmzSignature = "nihil";
                    xAmzSignedHeaders = "rerum";
                }};
            }};

            GetAddRoleToDbClusterResponse res = sdk.getAddRoleToDbCluster(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->