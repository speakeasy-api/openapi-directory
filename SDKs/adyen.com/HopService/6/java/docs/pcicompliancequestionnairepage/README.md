# pciComplianceQuestionnairePage

### Available Operations

* [postGetPciQuestionnaireUrl](#postgetpciquestionnaireurl) - Get a link to a PCI compliance questionnaire

## postGetPciQuestionnaireUrl

Returns a link to a PCI compliance questionnaire that you can send to your account holder.
 > You should only use this endpoint if you have a [partner platform setup](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetPciQuestionnaireUrlResponse;
import org.openapis.openapi.models.operations.PostGetPciQuestionnaireUrlSecurity;
import org.openapis.openapi.models.shared.GetPciUrlRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetPciUrlRequest req = new GetPciUrlRequest("deserunt") {{
                returnUrl = "suscipit";
            }};            

            PostGetPciQuestionnaireUrlResponse res = sdk.pciComplianceQuestionnairePage.postGetPciQuestionnaireUrl(req, new PostGetPciQuestionnaireUrlSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getPciUrlResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
