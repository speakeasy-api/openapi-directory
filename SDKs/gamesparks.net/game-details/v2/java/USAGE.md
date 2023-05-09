<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETDataTypeEnum;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETPrecisionEnum;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETResponse;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETStageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnalyticsDataUsingGETRequest req = new GETAnalyticsDataUsingGETRequest("corrupti", GETAnalyticsDataUsingGETDataTypeEnum.SESSION_ANALYTIC, LocalDate.parse("2021-04-24"), GETAnalyticsDataUsingGETPrecisionEnum.DAILY, GETAnalyticsDataUsingGETStageEnum.PREVIEW, LocalDate.parse("2021-04-22")) {{
                keys = "vel";
            }};            

            GETAnalyticsDataUsingGETResponse res = sdk.analytics.getAnalyticsDataUsingGET(req);

            if (res.analyticsDataSwaggerModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->