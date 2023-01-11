<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetDailyReportAllCountriesRequest req = new GetDailyReportAllCountriesRequest() {{
                queryParams = new GetDailyReportAllCountriesQueryParams() {{
                    date = "sit";
                    dateFormat = "DD-MM-YYYY";
                    format = "xml";
                }};
            }};

            GetDailyReportAllCountriesResponse res = sdk.country.getDailyReportAllCountries(req);

            if (res.getDailyReportAllCountries200ApplicationJSONObjects.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->