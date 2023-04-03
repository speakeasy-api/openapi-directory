<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETAddPermissionActionEnum;
import org.openapis.openapi.models.operations.GETAddPermissionVersionEnum;
import org.openapis.openapi.models.operations.GETAddPermissionRequest;
import org.openapis.openapi.models.operations.GETAddPermissionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETAddPermissionRequest req = new GETAddPermissionRequest() {{
                awsAccountIds = new String[]{{
                    add("provident"),
                    add("distinctio"),
                    add("quibusdam"),
                }};
                accountNumber = 602763;
                action = "AddPermission";
                actions = new String[]{{
                    add("corrupti"),
                    add("illum"),
                    add("vel"),
                    add("error"),
                }};
                label = "deserunt";
                queueName = "suscipit";
                version = "2012-11-05";
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }}            

            GETAddPermissionResponse res = sdk.getAddPermission(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->