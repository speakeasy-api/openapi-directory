<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IpGeolocationWithConfidenceAreaAndHazardReportApiRequest;
import org.openapis.openapi.models.operations.IpGeolocationWithConfidenceAreaAndHazardReportApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IpGeolocationWithConfidenceAreaAndHazardReportApiRequest req = new IpGeolocationWithConfidenceAreaAndHazardReportApiRequest() {{
                ip = "193.114.112.122";
                key = "{{API KEY}}";
                localityLanguage = "en";
            }};            

            IpGeolocationWithConfidenceAreaAndHazardReportApiResponse res = sdk.ipGeolocationWithConfidenceAreaAndHazardReportApi(req);

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