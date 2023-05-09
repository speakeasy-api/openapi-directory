<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddressV2Request;
import org.openapis.openapi.models.operations.GetAddressV2Response;
import org.openapis.openapi.models.shared.DetailsEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("corrupti") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetAddressV2Request req = new GetAddressV2Request("321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL", "bitcoin") {{
                contract = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
                details = DetailsEnum.BASIC;
                fromBlock = 10L;
                page = 1L;
                pageSize = 1000L;
                secondary = "usd";
                toBlock = 100L;
            }};            

            GetAddressV2Response res = sdk.addresses.getAddressV2(req);

            if (res.getAddressV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->