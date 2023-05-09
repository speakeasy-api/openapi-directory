# onboarding

### Available Operations

* [getPaymentsProgramOnboarding](#getpaymentsprogramonboarding) - <span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

## getPaymentsProgramOnboarding

<span class="tablenote"><b>Note:</b> This method is no longer applicable, as all seller accounts globally have been enabled for the new eBay payment and checkout flow.</span><br/><br/>This method retrieves a seller's onboarding status for a payments program for a specified marketplace. The overall onboarding status of the seller and the status of each onboarding step is returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentsProgramOnboardingRequest;
import org.openapis.openapi.models.operations.GetPaymentsProgramOnboardingResponse;
import org.openapis.openapi.models.operations.GetPaymentsProgramOnboardingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentsProgramOnboardingRequest req = new GetPaymentsProgramOnboardingRequest("magnam", "et");            

            GetPaymentsProgramOnboardingResponse res = sdk.onboarding.getPaymentsProgramOnboarding(req, new GetPaymentsProgramOnboardingSecurity("excepturi") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.paymentsProgramOnboardingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
