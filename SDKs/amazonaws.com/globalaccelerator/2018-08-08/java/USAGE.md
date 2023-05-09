<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsResponse;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCustomRoutingEndpointsRequest req = new AddCustomRoutingEndpointsRequest(                new AddCustomRoutingEndpointsRequest(                new org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration[]{{
                                                add(new CustomRoutingEndpointConfiguration() {{
                                                    endpointId = "distinctio";
                                                }}),
                                                add(new CustomRoutingEndpointConfiguration() {{
                                                    endpointId = "quibusdam";
                                                }}),
                                                add(new CustomRoutingEndpointConfiguration() {{
                                                    endpointId = "unde";
                                                }}),
                                            }}, "nulla");, AddCustomRoutingEndpointsXAmzTargetEnum.GLOBAL_ACCELERATOR_V20180706_ADD_CUSTOM_ROUTING_ENDPOINTS) {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "illum";
                xAmzCredential = "vel";
                xAmzDate = "error";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "iure";
            }};            

            AddCustomRoutingEndpointsResponse res = sdk.addCustomRoutingEndpoints(req);

            if (res.addCustomRoutingEndpointsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->