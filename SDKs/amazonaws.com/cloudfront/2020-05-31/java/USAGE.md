<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AssociateAlias20200531PathParams;
import org.openapis.openapi.models.operations.AssociateAlias20200531QueryParams;
import org.openapis.openapi.models.operations.AssociateAlias20200531Headers;
import org.openapis.openapi.models.operations.AssociateAlias20200531Request;
import org.openapis.openapi.models.operations.AssociateAlias20200531Response;

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

            AssociateAlias20200531Request req = new AssociateAlias20200531Request() {{
                pathParams = new AssociateAlias20200531PathParams() {{
                    targetDistributionId = "corrupti";
                }};
                queryParams = new AssociateAlias20200531QueryParams() {{
                    alias = "provident";
                }};
                headers = new AssociateAlias20200531Headers() {{
                    xAmzAlgorithm = "distinctio";
                    xAmzContentSha256 = "quibusdam";
                    xAmzCredential = "unde";
                    xAmzDate = "nulla";
                    xAmzSecurityToken = "corrupti";
                    xAmzSignature = "illum";
                    xAmzSignedHeaders = "vel";
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