# hostedOnboarding

### Available Operations

* [getThemes](#getthemes) - Get a list of hosted onboarding page themes
* [getThemesId](#getthemesid) - Get an onboarding link theme
* [postLegalEntitiesIdOnboardingLinks](#postlegalentitiesidonboardinglinks) - Get a link to an Adyen-hosted onboarding page

## getThemes

Returns a list of hosted onboarding page themes.

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThemesResponse;
import org.openapis.openapi.models.operations.GetThemesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThemesResponse res = sdk.hostedOnboarding.getThemes(new GetThemesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.onboardingThemes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getThemesId

Returns the details of the theme identified in the path.>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetThemesIdRequest;
import org.openapis.openapi.models.operations.GetThemesIdResponse;
import org.openapis.openapi.models.operations.GetThemesIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetThemesIdRequest req = new GetThemesIdRequest("mollitia");            

            GetThemesIdResponse res = sdk.hostedOnboarding.getThemesId(req, new GetThemesIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.onboardingTheme != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLegalEntitiesIdOnboardingLinks

Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.

>If you are using hosted onboarding, [only use v2](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-01-legal-entity-management-api-3) for your API requests.



### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdOnboardingLinksRequest;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdOnboardingLinksResponse;
import org.openapis.openapi.models.operations.PostLegalEntitiesIdOnboardingLinksSecurity;
import org.openapis.openapi.models.shared.OnboardingLinkInfo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostLegalEntitiesIdOnboardingLinksRequest req = new PostLegalEntitiesIdOnboardingLinksRequest("dolorem") {{
                onboardingLinkInfo = new OnboardingLinkInfo() {{
                    locale = "culpa";
                    redirectUrl = "consequuntur";
                    settings = new java.util.HashMap<String, Boolean>() {{
                        put("mollitia", false);
                        put("occaecati", false);
                        put("numquam", false);
                        put("commodi", false);
                    }};
                    themeId = "quam";
                }};;
            }};            

            PostLegalEntitiesIdOnboardingLinksResponse res = sdk.hostedOnboarding.postLegalEntitiesIdOnboardingLinks(req, new PostLegalEntitiesIdOnboardingLinksSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.onboardingLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
