<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETPathParams;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETDataTypeEnum;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETPrecisionEnum;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETStageEnum;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETQueryParams;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETRequest;
import org.openapis.openapi.models.operations.GETAnalyticsDataUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETAnalyticsDataUsingGETRequest req = new GETAnalyticsDataUsingGETRequest() {{
                pathParams = new GETAnalyticsDataUsingGETPathParams() {{
                    apiKey = "corrupti";
                }};
                queryParams = new GETAnalyticsDataUsingGETQueryParams() {{
                    dataType = "sessionAnalytic";
                    endDate = "2021-04-24";
                    keys = "unde";
                    precision = "MONTHLY";
                    stage = "PREVIEW";
                    startDate = "2021-09-24";
                }};
            }};            

            GETAnalyticsDataUsingGETResponse res = sdk.analytics.getAnalyticsDataUsingGET(req);

            if (res.analyticsDataSwaggerModels.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->