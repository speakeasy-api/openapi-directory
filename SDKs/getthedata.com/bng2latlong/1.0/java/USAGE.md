<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetBng2latlongEastingNorthingPathParams;
import org.openapis.openapi.models.operations.GetBng2latlongEastingNorthingRequest;
import org.openapis.openapi.models.operations.GetBng2latlongEastingNorthingResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBng2latlongEastingNorthingRequest req = new GetBng2latlongEastingNorthingRequest() {{
                pathParams = new GetBng2latlongEastingNorthingPathParams() {{
                    easting = 548814;
                    northing = 592845;
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