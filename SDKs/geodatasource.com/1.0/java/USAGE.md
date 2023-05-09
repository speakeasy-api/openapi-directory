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

            GetCityRequest req = new GetCityRequest("corrupti", 5928.45, 7151.9) {{
                format = GetCityFormatEnum.XML;
            }};            

            GetCityResponse res = sdk.getCity(req);

            if (res.getCity200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->