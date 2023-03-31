<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsHeaders;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsResponse;
import org.openapis.openapi.models.shared.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            AddCustomRoutingEndpointsRequest req = new AddCustomRoutingEndpointsRequest() {{
                headers = new AddCustomRoutingEndpointsHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints";
                }};
                request = new AddCustomRoutingEndpointsRequest() {{
                    endpointConfigurations = new org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration[]{{
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "vel";
                        }}),
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "error";
                        }}),
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "deserunt";
                        }}),
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "suscipit";
                        }}),
                    }};
                    endpointGroupArn = "iure";
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