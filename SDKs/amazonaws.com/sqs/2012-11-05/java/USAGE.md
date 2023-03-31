<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAddPermissionPathParams;
import org.openapis.openapi.models.operations.GETAddPermissionActionEnum;
import org.openapis.openapi.models.operations.GETAddPermissionVersionEnum;
import org.openapis.openapi.models.operations.GETAddPermissionQueryParams;
import org.openapis.openapi.models.operations.GETAddPermissionHeaders;
import org.openapis.openapi.models.operations.GETAddPermissionRequest;
import org.openapis.openapi.models.operations.GETAddPermissionResponse;

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

            GETAddPermissionRequest req = new GETAddPermissionRequest() {{
                pathParams = new GETAddPermissionPathParams() {{
                    accountNumber = 548814;
                    queueName = "provident";
                }};
                queryParams = new GETAddPermissionQueryParams() {{
                    awsAccountIds = new String[]{{
                        add("quibusdam"),
                        add("unde"),
                        add("nulla"),
                    }};
                    action = "AddPermission";
                    actions = new String[]{{
                        add("illum"),
                        add("vel"),
                        add("error"),
                    }};
                    label = "deserunt";
                    version = "2012-11-05";
                }};
                headers = new GETAddPermissionHeaders() {{
                    xAmzAlgorithm = "suscipit";
                    xAmzContentSha256 = "iure";
                    xAmzCredential = "magnam";
                    xAmzDate = "debitis";
                    xAmzSecurityToken = "ipsa";
                    xAmzSignature = "delectus";
                    xAmzSignedHeaders = "tempora";
                }};
            }};            

            GETAddPermissionResponse res = sdk.getAddPermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->