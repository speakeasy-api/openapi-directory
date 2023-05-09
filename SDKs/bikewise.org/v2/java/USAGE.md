<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatIncidentTypeEnum;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatRequest;
import org.openapis.openapi.models.operations.GETVersionIncidentsFormatResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETVersionIncidentsFormatRequest req = new GETVersionIncidentsFormatRequest() {{
                incidentType = GETVersionIncidentsFormatIncidentTypeEnum.UNCONFIRMED;
                occurredAfter = 592845;
                occurredBefore = 715190;
                page = 844266;
                perPage = 602763;
                proximity = "nulla";
                proximitySquare = 544883;
                query = "illum";
            }};            

            GETVersionIncidentsFormatResponse res = sdk.incidents.getVersionIncidentsFormat(req);

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