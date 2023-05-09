<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequest;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBody;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyDeliveryOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyReputationOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodySendingOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyTrackingOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TlsPolicyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConfigurationSetRequest req = new CreateConfigurationSetRequest(                new CreateConfigurationSetRequestBody("provident") {{
                                deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                                    sendingPoolName = "distinctio";
                                    tlsPolicy = TlsPolicyEnum.OPTIONAL;
                                }};;
                                reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                                    lastFreshStart = OffsetDateTime.parse("2021-04-14T16:47:33.722Z");
                                    reputationMetricsEnabled = false;
                                }};;
                                sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                                    sendingEnabled = false;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("error", "deserunt") {{
                                        key = "illum";
                                        value = "vel";
                                    }}),
                                    add(new Tag("magnam", "debitis") {{
                                        key = "suscipit";
                                        value = "iure";
                                    }}),
                                    add(new Tag("tempora", "suscipit") {{
                                        key = "ipsa";
                                        value = "delectus";
                                    }}),
                                }};
                                trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                                    customRedirectDomain = "molestiae";
                                }};;
                            }};) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "voluptatum";
                xAmzDate = "iusto";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "recusandae";
            }};            

            CreateConfigurationSetResponse res = sdk.createConfigurationSet(req);

            if (res.createConfigurationSetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->