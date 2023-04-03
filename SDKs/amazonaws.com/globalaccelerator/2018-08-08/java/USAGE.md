<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsXAmzTargetEnum;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.operations.AddCustomRoutingEndpointsResponse;
import org.openapis.openapi.models.shared.AddCustomRoutingEndpointsRequest;
import org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddCustomRoutingEndpointsRequest req = new AddCustomRoutingEndpointsRequest() {{
                addCustomRoutingEndpointsRequest = new AddCustomRoutingEndpointsRequest() {{
                    endpointConfigurations = new org.openapis.openapi.models.shared.CustomRoutingEndpointConfiguration[]{{
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "provident";
                        }}),
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "distinctio";
                        }}),
                        add(new CustomRoutingEndpointConfiguration() {{
                            endpointId = "quibusdam";
                        }}),
                    }};
                    endpointGroupArn = "unde";
                }};
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "corrupti";
                xAmzCredential = "illum";
                xAmzDate = "vel";
                xAmzSecurityToken = "error";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "suscipit";
                xAmzTarget = "GlobalAccelerator_V20180706.AddCustomRoutingEndpoints";
            }}            

            AddCustomRoutingEndpointsResponse res = sdk.addCustomRoutingEndpoints(req);

            if (res.addCustomRoutingEndpointsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->