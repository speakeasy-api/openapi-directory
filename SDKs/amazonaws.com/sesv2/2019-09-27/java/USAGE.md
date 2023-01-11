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
                    xAmzAlgorithm = "nam";
                    xAmzContentSha256 = "non";
                    xAmzCredential = "doloremque";
                    xAmzDate = "qui";
                    xAmzSecurityToken = "quaerat";
                    xAmzSignature = "natus";
                    xAmzSignedHeaders = "illo";
                }};
                request = new CreateConfigurationSetRequestBody() {{
                    configurationSetName = "optio";
                    deliveryOptions = new CreateConfigurationSetRequestBodyDeliveryOptions() {{
                        sendingPoolName = "reprehenderit";
                        tlsPolicy = "REQUIRE";
                    }};
                    reputationOptions = new CreateConfigurationSetRequestBodyReputationOptions() {{
                        lastFreshStart = "2000-05-10T08:14:20Z";
                        reputationMetricsEnabled = false;
                    }};
                    sendingOptions = new CreateConfigurationSetRequestBodySendingOptions() {{
                        sendingEnabled = true;
                    }};
                    suppressionOptions = new CreateConfigurationSetRequestBodySuppressionOptions() {{
                        suppressedReasons = new openapisdk.models.shared.SuppressionListReasonEnum[]() {{
                            add("BOUNCE"),
                            add("COMPLAINT"),
                        }};
                    }};
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "iusto";
                            value = "esse";
                        }}),
                        add(new Tag() {{
                            key = "architecto";
                            value = "est";
                        }}),
                        add(new Tag() {{
                            key = "aliquam";
                            value = "aut";
                        }}),
                    }};
                    trackingOptions = new CreateConfigurationSetRequestBodyTrackingOptions() {{
                        customRedirectDomain = "corporis";
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