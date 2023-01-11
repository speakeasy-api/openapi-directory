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

            GetDomainsTldZoneIdDownloadRequest req = new GetDomainsTldZoneIdDownloadRequest() {{
                pathParams = new GetDomainsTldZoneIdDownloadPathParams() {{
                    zoneId = "maxime";
                }};
                queryParams = new GetDomainsTldZoneIdDownloadQueryParams() {{
                    apiKey = "omnis";
                    date = "voluptas";
                }};
            }};

            GetDomainsTldZoneIdDownloadResponse res = sdk.domains.getDomainsTldZoneIdDownload(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->