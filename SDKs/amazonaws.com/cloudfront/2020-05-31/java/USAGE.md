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

            AssociateAlias20200531Request req = new AssociateAlias20200531Request() {{
                pathParams = new AssociateAlias20200531PathParams() {{
                    targetDistributionId = "sit";
                }};
                queryParams = new AssociateAlias20200531QueryParams() {{
                    alias = "voluptas";
                }};
                headers = new AssociateAlias20200531Headers() {{
                    xAmzAlgorithm = "culpa";
                    xAmzContentSha256 = "expedita";
                    xAmzCredential = "consequuntur";
                    xAmzDate = "dolor";
                    xAmzSecurityToken = "expedita";
                    xAmzSignature = "voluptas";
                    xAmzSignedHeaders = "fugit";
                }};
            }};

            AssociateAlias20200531Response res = sdk.associateAlias20200531(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->