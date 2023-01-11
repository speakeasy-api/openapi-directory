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

            CreateConfigurationSetRequest req = new CreateConfigurationSetRequest() {{
                headers = new CreateConfigurationSetHeaders() {{
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                }};
                request = new CreateConfigurationSetRequestBody() {{
                    configurationSetName = "voluptas";
                    deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                        sendingPoolName = "fugit";
                        tlsPolicy = "REQUIRE";
                    }};
                    reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                        lastFreshStart = "2003-05-13T04:57:12Z";
                        reputationMetricsEnabled = true;
                    }};
                    sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                        sendingEnabled = false;
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "voluptatum";
                            value = "et";
                        }}),
                    }};
                    trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                        customRedirectDomain = "ut";
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