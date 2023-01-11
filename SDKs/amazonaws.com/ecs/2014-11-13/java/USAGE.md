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

            CreateCapacityProviderRequest req = new CreateCapacityProviderRequest() {{
                headers = new CreateCapacityProviderHeaders() {{
                    xAmzAlgorithm = "praesentium";
                    xAmzContentSha256 = "voluptates";
                    xAmzCredential = "inventore";
                    xAmzDate = "voluptatem";
                    xAmzSecurityToken = "deleniti";
                    xAmzSignature = "facere";
                    xAmzSignedHeaders = "numquam";
                    xAmzTarget = "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider";
                }};
                request = new CreateCapacityProviderRequest() {{
                    autoScalingGroupProvider = new AutoScalingGroupProvider() {{
                        autoScalingGroupArn = "explicabo";
                        managedScaling = new ManagedScaling() {{
                            instanceWarmupPeriod = 6635728551378606624;
                            maximumScalingStepSize = 5973617793068578508;
                            minimumScalingStepSize = 8160591596675653275;
                            status = "DISABLED";
                            targetCapacity = 7028752311702887101;
                        }};
                        managedTerminationProtection = "ENABLED";
                    }};
                    name = "qui";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "qui";
                            value = "et";
                        }}),
                        add(new Tag() {{
                            key = "aliquid";
                            value = "repellendus";
                        }}),
                    }};
                }};
            }};

            CreateCapacityProviderResponse res = sdk.createCapacityProvider(req);

            if (res.createCapacityProviderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->