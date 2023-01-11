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

            AddCustomRoutingEndpointsRequest req = new AddCustomRoutingEndpointsRequest() {{
                headers = new AddCustomRoutingEndpointsHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints";
                }};
                request = new AddCustomRoutingEndpointsRequest() {{
                    endpointConfigurations = new openapisdk.models.shared.CustomRoutingEndpointConfiguration[]() {{
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "et";
                        }}),
                    }};
                    endpointGroupArn = "nihil";
                }};
            }};

            AddCustomRoutingEndpointsResponse res = sdk.addCustomRoutingEndpoints(req);

            if (res.addCustomRoutingEndpointsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->