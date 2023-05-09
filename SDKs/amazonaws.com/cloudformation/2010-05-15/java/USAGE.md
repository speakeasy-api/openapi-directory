<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETActivateTypeActionEnum;
import org.openapis.openapi.models.operations.GETActivateTypeLoggingConfig;
import org.openapis.openapi.models.operations.GETActivateTypeRequest;
import org.openapis.openapi.models.operations.GETActivateTypeResponse;
import org.openapis.openapi.models.operations.GETActivateTypeTypeEnum;
import org.openapis.openapi.models.operations.GETActivateTypeVersionBumpEnum;
import org.openapis.openapi.models.operations.GETActivateTypeVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETActivateTypeRequest req = new GETActivateTypeRequest(GETActivateTypeActionEnum.ACTIVATE_TYPE, GETActivateTypeVersionEnum.TWO_THOUSAND_AND_TEN0515) {{
                autoUpdate = false;
                executionRoleArn = "provident";
                loggingConfig = new GETActivateTypeLoggingConfig("distinctio", "quibusdam");;
                majorVersion = 602763L;
                publicTypeArn = "nulla";
                publisherId = "corrupti";
                type = GETActivateTypeTypeEnum.HOOK;
                typeName = "vel";
                typeNameAlias = "error";
                versionBump = GETActivateTypeVersionBumpEnum.MINOR;
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
            }};            

            GETActivateTypeResponse res = sdk.getActivateType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->