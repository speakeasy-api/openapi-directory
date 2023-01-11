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
                    dbClusterIdentifier = "aut";
                    featureName = "corrupti";
                    roleArn = "molestiae";
                    version = "2014-10-31";
                }};
                headers = new GetAddRoleToDbClusterHeaders() {{
                    xAmzAlgorithm = "nemo";
                    xAmzContentSha256 = "beatae";
                    xAmzCredential = "iste";
                    xAmzDate = "fuga";
                    xAmzSecurityToken = "suscipit";
                    xAmzSignature = "voluptatem";
                    xAmzSignedHeaders = "veniam";
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