<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateCapacityProviderXAmzTargetEnum;
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
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateCapacityProviderRequest req = new CreateCapacityProviderRequest() {{
                createCapacityProviderRequest = new CreateCapacityProviderRequest() {{
                    autoScalingGroupProvider = new AutoScalingGroupProvider() {{
                        autoScalingGroupArn = "corrupti";
                        managedScaling = new ManagedScaling() {{
                            instanceWarmupPeriod = 592845;
                            maximumScalingStepSize = 715190;
                            minimumScalingStepSize = 844266;
                            status = "DISABLED";
                            targetCapacity = 857946;
                        }};
                        managedTerminationProtection = "DISABLED";
                    }};
                    name = "illum";
                    tags = new org.openapis.openapi.models.shared.Tag[]{{
                        add(new Tag() {{
                            key = "error";
                            value = "deserunt";
                        }}),
                        add(new Tag() {{
                            key = "suscipit";
                            value = "iure";
                        }}),
                    }};
                }};
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "ipsa";
                xAmzDate = "delectus";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "molestiae";
                xAmzTarget = "AmazonEC2ContainerServiceV20141113.CreateCapacityProvider";
            }}            

            CreateCapacityProviderResponse res = sdk.createCapacityProvider(req);

            if (res.createCapacityProviderResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->