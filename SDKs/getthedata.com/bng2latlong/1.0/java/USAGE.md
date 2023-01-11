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

            GetBng2latlongEastingNorthingRequest req = new GetBng2latlongEastingNorthingRequest() {{
                pathParams = new GetBng2latlongEastingNorthingPathParams() {{
                    easting = 8717895732742165505;
                    northing = 2259404117704393152;
                }};
            }};

            GetBng2latlongEastingNorthingResponse res = sdk.getBng2latlongEastingNorthing(req);

            if (res.getBng2latlongEastingNorthing200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->