<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetDomainsTldZoneIdDownloadRequest;
import org.openapis.openapi.models.operations.GetDomainsTldZoneIdDownloadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetDomainsTldZoneIdDownloadRequest req = new GetDomainsTldZoneIdDownloadRequest() {{
                apiKey = "corrupti";
                date = "provident";
                zoneId = "distinctio";
            }}            

            GetDomainsTldZoneIdDownloadResponse res = sdk.domains.getDomainsTldZoneIdDownload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->