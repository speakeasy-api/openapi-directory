# hostedOnboardingPage

### Available Operations

* [postGetOnboardingUrl](#postgetonboardingurl) - Get a link to a Adyen-hosted onboarding page

## postGetOnboardingUrl

Returns a link to an Adyen-hosted onboarding page (HOP) that you can send to your account holder. For more information on how to use HOP, refer to [Hosted onboarding](https://docs.adyen.com/marketplaces-and-platforms/classic/collect-verification-details/hosted-onboarding-page). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetOnboardingUrlResponse;
import org.openapis.openapi.models.operations.PostGetOnboardingUrlSecurity;
import org.openapis.openapi.models.shared.CollectInformation;
import org.openapis.openapi.models.shared.GetOnboardingUrlRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.ShowPages;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetOnboardingUrlRequest req = new GetOnboardingUrlRequest("nulla") {{
                collectInformation = new CollectInformation() {{
                    bankDetails = false;
                    businessDetails = false;
                    individualDetails = false;
                    legalArrangementDetails = false;
                    pciQuestionnaire = false;
                    shareholderDetails = false;
                }};;
                editMode = false;
                mobileOAuthCallbackUrl = "corrupti";
                platformName = "illum";
                returnUrl = "vel";
                shopperLocale = "error";
                showPages = new ShowPages() {{
                    bankDetailsSummaryPage = false;
                    bankVerificationPage = false;
                    businessDetailsSummaryPage = false;
                    checksOverviewPage = false;
                    individualDetailsSummaryPage = false;
                    legalArrangementsDetailsSummaryPage = false;
                    manualBankAccountPage = false;
                    shareholderDetailsSummaryPage = false;
                    welcomePage = false;
                }};;
            }};            

            PostGetOnboardingUrlResponse res = sdk.hostedOnboardingPage.postGetOnboardingUrl(req, new PostGetOnboardingUrlSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getOnboardingUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
