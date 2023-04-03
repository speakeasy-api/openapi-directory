<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetCityFormatEnum;
import org.openapis.openapi.models.operations.GetCityRequest;
import org.openapis.openapi.models.operations.GetCityResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCityRequest req = new GetCityRequest() {{
                format = "xml";
                key = "provident";
                lat = 7151.9;
                lng = 8442.66;
            }}            

            GetCityResponse res = sdk.getCity(req);

            if (res.getCity200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->