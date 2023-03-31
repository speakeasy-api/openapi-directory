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

import org.openapis.openapi.models.operations.TranslateSecurity;
import org.openapis.openapi.models.operations.TranslateRequest;
import org.openapis.openapi.models.operations.TranslateResponse;
import org.openapis.openapi.models.shared.TranslateRequest;
import org.openapis.openapi.models.shared.SchemeAPIAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TranslateRequest req = new TranslateRequest() {{
                security = new TranslateSecurity() {{
                    apiAuth = new SchemeAPIAuth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                request = new TranslateRequest() {{
                    from = "corrupti";
                    text = new String[]{{
                        add("distinctio"),
                        add("quibusdam"),
                        add("unde"),
                    }};
                    to = "nulla";
                    translationContext = "corrupti";
                }};
            }};            

            TranslateResponse res = sdk.language.translate(req);

            if (res.translateResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### language

* `translate` - Translates input text inot a given language.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
