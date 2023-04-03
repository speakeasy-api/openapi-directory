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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.ChromeFromHtmlPostResponse;
import org.openapis.openapi.models.shared.ChromeHtmlToPdfRequest;
import org.openapis.openapi.models.shared.ChromeAdvancedOptions;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ChromeHtmlToPdfRequest req = new ChromeHtmlToPdfRequest() {{
                fileName = "test.pdf";
                html = "<p>Hello World</p>";
                inlinePdf = true;
                options = new ChromeAdvancedOptions() {{
                    landscape = "true";
                    printBackground = false;
                }};
            }}            

            ChromeFromHtmlPostResponse res = sdk.headlessChrome.chromeFromHtmlPost(req);

            if (res.apiResponseSuccess.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### headlessChrome

* `chromeFromHtmlPost` - Convert raw HTML to PDF
* `chromeFromUrlGET` - Convert URL to PDF
* `chromeFromUrlPost` - Convert URL to PDF

### libreOffice

* `libreConvertPost` - Convert office document or image to PDF

### mergeCombinePdfs

* `mergePost` - Merge multiple PDFs together

### zxingZebraCrossingBarCodes

* `zebraGET` - Generate bar codes and QR codes with ZXING.

### wkhtmltopdf

* `wkhtmltopdfFromHtmlPost` - Convert raw HTML to PDF
* `wkhtmltopdfFromUrlGET` - Convert URL to PDF
* `wkhtmltopdfFromUrlPost` - Convert URL to PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
