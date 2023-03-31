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

import org.openapis.openapi.models.operations.GetAboutQueryParams;
import org.openapis.openapi.models.operations.GetAboutRequest;
import org.openapis.openapi.models.operations.GetAboutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAboutRequest req = new GetAboutRequest() {{
                queryParams = new GetAboutQueryParams() {{
                    outputFormat = "corrupti";
                }};
            }};            

            GetAboutResponse res = sdk.getAbout(req);

            if (res.about.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getAbout` - Metadata about this API&#58; version number, release date and available languages.

Metadata requests are NOT billed.

* `getEc` - The entropy calculator - alias ec -, analyzes a password and calculates its entropy.

Entropy calculator requests are billed.

<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
