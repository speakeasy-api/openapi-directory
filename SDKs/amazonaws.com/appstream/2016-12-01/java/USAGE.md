<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            AssociateFleetRequest req = new AssociateFleetRequest() {{
                headers = new AssociateFleetHeaders() {{
                    xAmzAlgorithm = "sapiente";
                    xAmzContentSha256 = "ipsam";
                    xAmzCredential = "autem";
                    xAmzDate = "placeat";
                    xAmzSecurityToken = "velit";
                    xAmzSignature = "minus";
                    xAmzSignedHeaders = "praesentium";
                    xAmzTarget = "PhotonAdminProxyService.AssociateFleet";
                }};
                request = new AssociateFleetRequest() {{
                    fleetName = "voluptas";
                    stackName = "consequatur";
                }};
            }};

            AssociateFleetResponse res = sdk.associateFleet(req);

            if (res.associateFleetResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->