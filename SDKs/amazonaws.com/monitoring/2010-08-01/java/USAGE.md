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

            GetDeleteAlarmsRequest req = new GetDeleteAlarmsRequest() {{
                queryParams = new GetDeleteAlarmsQueryParams() {{
                    action = "DeleteAlarms";
                    alarmNames = new String[]() {{
                        add("culpa"),
                    }};
                    version = "2010-08-01";
                }};
                headers = new GetDeleteAlarmsHeaders() {{
                    xAmzAlgorithm = "consequuntur";
                    xAmzContentSha256 = "dolor";
                    xAmzCredential = "expedita";
                    xAmzDate = "voluptas";
                    xAmzSecurityToken = "fugit";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "nihil";
                }};
            }};

            GetDeleteAlarmsResponse res = sdk.getDeleteAlarms(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->