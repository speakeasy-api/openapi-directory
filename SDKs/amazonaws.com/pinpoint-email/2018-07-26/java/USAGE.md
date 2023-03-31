<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateConfigurationSetHeaders;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyDeliveryOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyReputationOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodySendingOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBodyTrackingOptions;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequestBody;
import org.openapis.openapi.models.operations.CreateConfigurationSetRequest;
import org.openapis.openapi.models.operations.CreateConfigurationSetResponse;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TlsPolicyEnum;

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

            CreateConfigurationSetRequest req = new CreateConfigurationSetRequest() {{
                headers = new CreateConfigurationSetHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                }};
                request = new CreateConfigurationSetRequestBody() {{
                    configurationSetName = "illum";
                    deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                        sendingPoolName = "vel";
                        tlsPolicy = "OPTIONAL";
                    }};
                    reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                        lastFreshStart = "2022-03-26T09:37:56.283Z";
                        reputationMetricsEnabled = false;
                    }};
                    sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                        sendingEnabled = false;
                    }};
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "magnam";
                            value = "debitis";
                        }}),
                        add(new Tag() {{
                            key = "ipsa";
                            value = "delectus";
                        }}),
                    }};
                    trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                        customRedirectDomain = "tempora";
                    }};
                }};
            }};            

            CreateConfigurationSetResponse res = sdk.createConfigurationSet(req);

            if (res.createConfigurationSetResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->