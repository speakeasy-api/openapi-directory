# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.PostGetOnboardingUrlSecurity;
import org.openapis.openapi.models.operations.PostGetOnboardingUrlRequest;
import org.openapis.openapi.models.operations.PostGetOnboardingUrlResponse;
import org.openapis.openapi.models.shared.GetOnboardingUrlRequest;
import org.openapis.openapi.models.shared.ShowPages;
import org.openapis.openapi.models.shared.CollectInformation;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostGetOnboardingUrlRequest req = new PostGetOnboardingUrlRequest() {{
                security = new PostGetOnboardingUrlSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                request = new GetOnboardingUrlRequest() {{
                    accountHolderCode = "corrupti";
                    collectInformation = new CollectInformation() {{
                        bankDetails = false;
                        businessDetails = false;
                        individualDetails = false;
                        legalArrangementDetails = false;
                        pciQuestionnaire = false;
                        shareholderDetails = false;
                    }};
                    editMode = false;
                    mobileOAuthCallbackUrl = "provident";
                    platformName = "distinctio";
                    returnUrl = "quibusdam";
                    shopperLocale = "unde";
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
                    }};
                }};
            }};            

            PostGetOnboardingUrlResponse res = sdk.hostedOnboardingPage.postGetOnboardingUrl(req);

            if (res.getOnboardingUrlResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### hostedOnboardingPage

* `postGetOnboardingUrl` - Get a link to a Adyen-hosted onboarding page

### pciComplianceQuestionnairePage

* `postGetPciQuestionnaireUrl` - Get a link to a PCI compliance questionnaire
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
