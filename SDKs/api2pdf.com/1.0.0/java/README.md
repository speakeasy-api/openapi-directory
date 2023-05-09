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
import org.openapis.openapi.models.operations.ChromeFromHtmlPostResponse;
import org.openapis.openapi.models.shared.ChromeAdvancedOptions;
import org.openapis.openapi.models.shared.ChromeHtmlToPdfRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ChromeHtmlToPdfRequest req = new ChromeHtmlToPdfRequest("<p>Hello World</p>") {{
                fileName = "test.pdf";
                inlinePdf = true;
                options = new ChromeAdvancedOptions() {{
                    landscape = "true";
                    printBackground = false;
                }};;
            }};            

            ChromeFromHtmlPostResponse res = sdk.headlessChrome.chromeFromHtmlPost(req);

            if (res.apiResponseSuccess != null) {
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


### [headlessChrome](docs/headlesschrome/README.md)

* [chromeFromHtmlPost](docs/headlesschrome/README.md#chromefromhtmlpost) - Convert raw HTML to PDF
* [chromeFromUrlGET](docs/headlesschrome/README.md#chromefromurlget) - Convert URL to PDF
* [chromeFromUrlPost](docs/headlesschrome/README.md#chromefromurlpost) - Convert URL to PDF

### [libreOffice](docs/libreoffice/README.md)

* [libreConvertPost](docs/libreoffice/README.md#libreconvertpost) - Convert office document or image to PDF

### [mergeCombinePdfs](docs/mergecombinepdfs/README.md)

* [mergePost](docs/mergecombinepdfs/README.md#mergepost) - Merge multiple PDFs together

### [zxingZebraCrossingBarCodes](docs/zxingzebracrossingbarcodes/README.md)

* [zebraGET](docs/zxingzebracrossingbarcodes/README.md#zebraget) - Generate bar codes and QR codes with ZXING.

### [wkhtmltopdf](docs/wkhtmltopdf/README.md)

* [wkhtmltopdfFromHtmlPost](docs/wkhtmltopdf/README.md#wkhtmltopdffromhtmlpost) - Convert raw HTML to PDF
* [wkhtmltopdfFromUrlGET](docs/wkhtmltopdf/README.md#wkhtmltopdffromurlget) - Convert URL to PDF
* [wkhtmltopdfFromUrlPost](docs/wkhtmltopdf/README.md#wkhtmltopdffromurlpost) - Convert URL to PDF
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
