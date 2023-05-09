# libreOffice

### Available Operations

* [libreConvertPost](#libreconvertpost) - Convert office document or image to PDF

## libreConvertPost

Convert an office document (Word, Excel, Powerpoint) or an image (jpg, gif, png) to a PDF using LibreOffice on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LibreConvertPostResponse;
import org.openapis.openapi.models.shared.LibreOfficeConvertRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.LibreOfficeConvertRequest req = new LibreOfficeConvertRequest("https://www.api2pdf.com/wp-content/themes/api2pdf/assets/samples/sample-word-doc.docx") {{
                fileName = "test.pdf";
                inlinePdf = true;
            }};            

            LibreConvertPostResponse res = sdk.libreOffice.libreConvertPost(req);

            if (res.apiResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
