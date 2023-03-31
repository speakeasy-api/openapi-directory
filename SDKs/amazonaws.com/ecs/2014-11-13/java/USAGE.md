<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCapacityProviderXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateCapacityProviderHeaders;
import org.openapis.openapi.models.operations.CreateCapacityProviderRequest;
import org.openapis.openapi.models.operations.CreateCapacityProviderResponse;
import org.openapis.openapi.models.shared.CreateCapacityProviderRequest;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.AutoScalingGroupProvider;
import org.openapis.openapi.models.shared.ManagedTerminationProtectionEnum;
import org.openapis.openapi.models.shared.ManagedScaling;
import org.openapis.openapi.models.shared.ManagedScalingStatusEnum;

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

            CreateCapacityProviderRequest req = new CreateCapacityProviderRequest() {{
                headers = new CreateCapacityProviderHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider";
                }};
                request = new CreateCapacityProviderRequest() {{
                    autoScalingGroupProvider = new AutoScalingGroupProvider() {{
                        autoScalingGroupArn = "illum";
                        managedScaling = new ManagedScaling() {{
                            instanceWarmupPeriod = 423655;
                            maximumScalingStepSize = 623564;
                            minimumScalingStepSize = 645894;
                            status = "ENABLED";
                            targetCapacity = 437587;
                        }};
                        managedTerminationProtection = "ENABLED";
                    }};
                    name = "debitis";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "delectus";
                            value = "tempora";
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