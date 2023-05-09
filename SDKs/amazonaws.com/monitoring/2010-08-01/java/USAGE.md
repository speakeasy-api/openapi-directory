<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETDeleteAlarmsActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAlarmsRequest;
import org.openapis.openapi.models.operations.GETDeleteAlarmsResponse;
import org.openapis.openapi.models.operations.GETDeleteAlarmsVersionEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETDeleteAlarmsRequest req = new GETDeleteAlarmsRequest(GETDeleteAlarmsActionEnum.DELETE_ALARMS,                 new String[]{{
                                add("distinctio"),
                                add("quibusdam"),
                                add("unde"),
                            }}, GETDeleteAlarmsVersionEnum.TWO_THOUSAND_AND_TEN0801) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
            }};            

            GETDeleteAlarmsResponse res = sdk.getDeleteAlarms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->