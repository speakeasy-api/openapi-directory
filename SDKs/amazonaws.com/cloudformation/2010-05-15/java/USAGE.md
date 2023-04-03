<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETActivateTypeActionEnum;
import org.openapis.openapi.models.operations.GETActivateTypeLoggingConfig;
import org.openapis.openapi.models.operations.GETActivateTypeTypeEnum;
import org.openapis.openapi.models.operations.GETActivateTypeVersionEnum;
import org.openapis.openapi.models.operations.GETActivateTypeVersionBumpEnum;
import org.openapis.openapi.models.operations.GETActivateTypeRequest;
import org.openapis.openapi.models.operations.GETActivateTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETActivateTypeRequest req = new GETActivateTypeRequest() {{
                action = "ActivateType";
                autoUpdate = false;
                executionRoleArn = "corrupti";
                loggingConfig = new GETActivateTypeLoggingConfig() {{
                    logGroupName = "provident";
                    logRoleArn = "distinctio";
                }};
                majorVersion = 844266;
                publicTypeArn = "unde";
                publisherId = "nulla";
                type = "MODULE";
                typeName = "illum";
                typeNameAlias = "vel";
                version = "2010-05-15";
                versionBump = "MINOR";
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "iure";
                xAmzDate = "magnam";
                xAmzSecurityToken = "debitis";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "delectus";
            }}            

            GETActivateTypeResponse res = sdk.getActivateType(req);

            if (res.body.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->