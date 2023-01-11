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
                    xAmzAlgorithm = "dolor";
                    xAmzContentSha256 = "sit";
                    xAmzCredential = "non";
                    xAmzDate = "sed";
                    xAmzSecurityToken = "cumque";
                    xAmzSignature = "architecto";
                    xAmzSignedHeaders = "accusantium";
                }};
                request = new CreateConfigurationSetRequestBody() {{
                    configurationSetName = "non";
                    deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                        sendingPoolName = "et";
                        tlsPolicy = "REQUIRE";
                    }};
                    reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                        lastFreshStart = "2018-09-28T20:49:02Z";
                        reputationMetricsEnabled = true;
                    }};
                    sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                        sendingEnabled = true;
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "reiciendis";
                            value = "et";
                        }}),
                        add(new Tag() {{
                            key = "dolorem";
                            value = "minus";
                        }}),
                        add(new Tag() {{
                            key = "ea";
                            value = "quaerat";
                        }}),
                    }};
                    trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                        customRedirectDomain = "dolorem";
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