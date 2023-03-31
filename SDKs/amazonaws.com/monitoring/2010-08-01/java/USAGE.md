<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GETDeleteAlarmsActionEnum;
import org.openapis.openapi.models.operations.GETDeleteAlarmsVersionEnum;
import org.openapis.openapi.models.operations.GETDeleteAlarmsQueryParams;
import org.openapis.openapi.models.operations.GETDeleteAlarmsHeaders;
import org.openapis.openapi.models.operations.GETDeleteAlarmsRequest;
import org.openapis.openapi.models.operations.GETDeleteAlarmsResponse;

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

            GETDeleteAlarmsRequest req = new GETDeleteAlarmsRequest() {{
                queryParams = new GETDeleteAlarmsQueryParams() {{
                    action = "DeleteAlarms";
                    alarmNames = new String[]{{
                        add("provident"),
                        add("distinctio"),
                        add("quibusdam"),
                    }};
                    version = "2010-08-01";
                }};
                headers = new GETDeleteAlarmsHeaders() {{
                    xAmzAlgorithm = "unde";
                    xAmzContentSha256 = "nulla";
                    xAmzCredential = "corrupti";
                    xAmzDate = "illum";
                    xAmzSecurityToken = "vel";
                    xAmzSignature = "error";
                    xAmzSignedHeaders = "deserunt";
                }};
            }};            

            GETDeleteAlarmsResponse res = sdk.getDeleteAlarms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->