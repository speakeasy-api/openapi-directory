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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider";
                }};
                request = new CreateCapacityProviderRequest() {{
                    autoScalingGroupProvider = new AutoScalingGroupProvider() {{
                        autoScalingGroupArn = "fugit";
                        managedScaling = new ManagedScaling() {{
                            instanceWarmupPeriod = 1543572285742637646;
                            maximumScalingStepSize = 2661732831099943416;
                            minimumScalingStepSize = 8325060299420976708;
                            status = "DISABLED";
                            targetCapacity = 2518412263346885298;
                        }};
                        managedTerminationProtection = "ENABLED";
                    }};
                    name = "et";
                    tags = new openapisdk.models.shared.Tag[]() {{
                        add(new Tag() {{
                            key = "dolorem";
                            value = "et";
                        }}),
                        add(new Tag() {{
                            key = "voluptate";
                            value = "iste";
                        }}),
                        add(new Tag() {{
                            key = "vitae";
                            value = "totam";
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