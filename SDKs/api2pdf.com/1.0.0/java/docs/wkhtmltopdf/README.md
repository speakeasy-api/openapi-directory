# wkhtmltopdf

### Available Operations

* [wkhtmltopdfFromHtmlPost](#wkhtmltopdffromhtmlpost) - Convert raw HTML to PDF
* [wkhtmltopdfFromUrlGET](#wkhtmltopdffromurlget) - Convert URL to PDF
* [wkhtmltopdfFromUrlPost](#wkhtmltopdffromurlpost) - Convert URL to PDF

## wkhtmltopdfFromHtmlPost

Convert HTML to a PDF using WkHtmlToPdf on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WkhtmltopdfFromHtmlPostResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WkHtmlToPdfAdvancedOptions;
import org.openapis.openapi.models.shared.WkHtmlToPdfHtmlToPdfRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WkHtmlToPdfHtmlToPdfRequest req = new WkHtmlToPdfHtmlToPdfRequest("<p>Hello World</p>") {{
                fileName = "test.pdf";
                inlinePdf = true;
                options = new WkHtmlToPdfAdvancedOptions() {{
                    orientation = "landscape";
                    pageSize = "A4";
                }};;
            }};            

            WkhtmltopdfFromHtmlPostResponse res = sdk.wkhtmltopdf.wkhtmltopdfFromHtmlPost(req);

            if (res.apiResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## wkhtmltopdfFromUrlGET

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/wkhtmltopdf/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WkhtmltopdfFromUrlGETRequest;
import org.openapis.openapi.models.operations.WkhtmltopdfFromUrlGETResponse;
import org.openapis.openapi.models.operations.WkhtmltopdfFromUrlGETSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WkhtmltopdfFromUrlGETRequest req = new WkhtmltopdfFromUrlGETRequest("tempora") {{
                output = "suscipit";
            }};            

            WkhtmltopdfFromUrlGETResponse res = sdk.wkhtmltopdf.wkhtmltopdfFromUrlGET(req, new WkhtmltopdfFromUrlGETSecurity("molestiae") {{
                queryApiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.apiResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## wkhtmltopdfFromUrlPost

Convert a URL or Web Page to PDF using WkHtmlToPdf on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WkhtmltopdfFromUrlPostResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WkHtmlToPdfAdvancedOptions;
import org.openapis.openapi.models.shared.WkHtmlToPdfUrlToPdfRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minus") {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.WkHtmlToPdfUrlToPdfRequest req = new WkHtmlToPdfUrlToPdfRequest("https://www.github.com") {{
                fileName = "test.pdf";
                inlinePdf = true;
                options = new WkHtmlToPdfAdvancedOptions() {{
                    orientation = "landscape";
                    pageSize = "A4";
                }};;
            }};            

            WkhtmltopdfFromUrlPostResponse res = sdk.wkhtmltopdf.wkhtmltopdfFromUrlPost(req);

            if (res.apiResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
