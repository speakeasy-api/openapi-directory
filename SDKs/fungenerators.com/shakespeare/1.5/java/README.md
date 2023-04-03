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

import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultSecurity;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultRequest;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShakespeareGenerateInsultRequest req = new GetShakespeareGenerateInsultRequest() {{
                limit = 548814;
            }}            

            GetShakespeareGenerateInsultResponse res = sdk.generation.getShakespeareGenerateInsult(req, new GetShakespeareGenerateInsultSecurity() {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### generation

* `getShakespeareGenerateInsult` - Generate random Shakespeare style insults.
* `getShakespeareGenerateLoremIpsum` - Generate Shakespeare lorem ipsum.
* `getShakespeareGenerateName` - Generate random Shakespearen names.

### translation

* `getShakespeareTranslate` - Translate from English to Shakespeare English.

### works

* `getShakespeareQuote` - Get a random Shakespeare quote.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
