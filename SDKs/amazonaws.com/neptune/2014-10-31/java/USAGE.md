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
                    dbClusterIdentifier = "qui";
                    featureName = "consequatur";
                    roleArn = "laborum";
                    version = "2014-10-31";
                }};
                headers = new GetAddRoleToDbClusterHeaders() {{
                    xAmzAlgorithm = "laboriosam";
                    xAmzContentSha256 = "fugiat";
                    xAmzCredential = "et";
                    xAmzDate = "nesciunt";
                    xAmzSecurityToken = "tempore";
                    xAmzSignature = "libero";
                    xAmzSignedHeaders = "modi";
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