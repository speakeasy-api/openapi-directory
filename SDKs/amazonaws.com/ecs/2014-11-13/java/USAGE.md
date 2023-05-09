<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCapacityProviderRequest;
import org.openapis.openapi.models.operations.CreateCapacityProviderResponse;
import org.openapis.openapi.models.operations.CreateCapacityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.AutoScalingGroupProvider;
import org.openapis.openapi.models.shared.CreateCapacityProviderRequest;
import org.openapis.openapi.models.shared.ManagedScaling;
import org.openapis.openapi.models.shared.ManagedScalingStatusEnum;
import org.openapis.openapi.models.shared.ManagedTerminationProtectionEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCapacityProviderRequest req = new CreateCapacityProviderRequest(                new CreateCapacityProviderRequest(                new AutoScalingGroupProvider("provident") {{
                                                managedScaling = new ManagedScaling() {{
                                                    instanceWarmupPeriod = 715190L;
                                                    maximumScalingStepSize = 844266L;
                                                    minimumScalingStepSize = 602763L;
                                                    status = ManagedScalingStatusEnum.DISABLED;
                                                    targetCapacity = 544883L;
                                                }};;
                                                managedTerminationProtection = ManagedTerminationProtectionEnum.DISABLED;
                                            }};, "vel") {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "deserunt";
                                        value = "suscipit";
                                    }}),
                                    add(new Tag() {{
                                        key = "iure";
                                        value = "magnam";
                                    }}),
                                    add(new Tag() {{
                                        key = "debitis";
                                        value = "ipsa";
                                    }}),
                                }};
                            }};, CreateCapacityProviderXAmzTargetEnum.AMAZON_EC2_CONTAINER_SERVICE_V20141113_CREATE_CAPACITY_PROVIDER) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            CreateCapacityProviderResponse res = sdk.createCapacityProvider(req);

            if (res.createCapacityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->