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

            AssociateEntityToThingRequest req = new AssociateEntityToThingRequest() {{
                headers = new AssociateEntityToThingHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "IotThingsGraphFrontEndService.AssociateEntityToThing";
                }};
                request = new AssociateEntityToThingRequest() {{
                    entityId = "fugit";
                    namespaceVersion = 1543572285742637646;
                    thingName = "nihil";
                }};
            }};

            AssociateEntityToThingResponse res = sdk.associateEntityToThing(req);

            if (res.associateEntityToThingResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->