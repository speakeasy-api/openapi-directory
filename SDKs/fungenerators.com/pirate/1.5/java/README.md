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
import org.openapis.openapi.models.operations.GetPirateGenerateInsultRequest;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultResponse;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPirateGenerateInsultRequest req = new GetPirateGenerateInsultRequest() {{
                limit = 548814L;
            }};            

            GetPirateGenerateInsultResponse res = sdk.generation.getPirateGenerateInsult(req, new GetPirateGenerateInsultSecurity("provident") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [generation](docs/generation/README.md)

* [getPirateGenerateInsult](docs/generation/README.md#getpirategenerateinsult) - Generate random pirate insults.
* [getPirateGenerateLoremIpsum](docs/generation/README.md#getpirategenerateloremipsum) - Generate pirate lorem ipsum.
* [getPirateGenerateName](docs/generation/README.md#getpirategeneratename) - Generate random pirate names.

### [translation](docs/translation/README.md)

* [getPirateTranslate](docs/translation/README.md#getpiratetranslate) - Translate from English to pirate.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
