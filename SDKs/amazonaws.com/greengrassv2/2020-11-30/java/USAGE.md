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

            BatchAssociateClientDeviceWithCoreDeviceRequest req = new BatchAssociateClientDeviceWithCoreDeviceRequest() {{
                pathParams = new BatchAssociateClientDeviceWithCoreDevicePathParams() {{
                    coreDeviceThingName = "libero";
                }};
                headers = new BatchAssociateClientDeviceWithCoreDeviceHeaders() {{
                    xAmzAlgorithm = "saepe";
                    xAmzContentSha256 = "et";
                    xAmzCredential = "corporis";
                    xAmzDate = "a";
                    xAmzSecurityToken = "illum";
                    xAmzSignature = "numquam";
                    xAmzSignedHeaders = "dolores";
                }};
                request = new BatchAssociateClientDeviceWithCoreDeviceRequestBody() {{
                    entries = new openapisdk.models.shared.AssociateClientDeviceWithCoreDeviceEntry[]() {{
                        add(new AssociateClientDeviceWithCoreDeviceEntry() {{
                            thingName = "voluptatibus";
                        }}),
                        add(new AssociateClientDeviceWithCoreDeviceEntry() {{
                            thingName = "sint";
                        }}),
                        add(new AssociateClientDeviceWithCoreDeviceEntry() {{
                            thingName = "expedita";
                        }}),
                    }};
                }};
            }};

            BatchAssociateClientDeviceWithCoreDeviceResponse res = sdk.batchAssociateClientDeviceWithCoreDevice(req);

            if (res.batchAssociateClientDeviceWithCoreDeviceResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->