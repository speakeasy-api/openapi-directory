# headlessChrome

### Available Operations

* [chromeFromHtmlPost](#chromefromhtmlpost) - Convert raw HTML to PDF
* [chromeFromUrlGET](#chromefromurlget) - Convert URL to PDF
* [chromeFromUrlPost](#chromefromurlpost) - Convert URL to PDF

## chromeFromHtmlPost

Convert HTML to a PDF using Headless Chrome on AWS Lambda.
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

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
                .setSecurity(new Security("provident") {{
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

## chromeFromUrlGET

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromeFromUrlGETRequest;
import org.openapis.openapi.models.operations.ChromeFromUrlGETResponse;
import org.openapis.openapi.models.operations.ChromeFromUrlGETSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChromeFromUrlGETRequest req = new ChromeFromUrlGETRequest("distinctio") {{
                output = "quibusdam";
            }};            

            ChromeFromUrlGETResponse res = sdk.headlessChrome.chromeFromUrlGET(req, new ChromeFromUrlGETSecurity("unde") {{
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

## chromeFromUrlPost

Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
### Authorize via Header of Request
**Authorization: YOUR-API-KEY**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChromeFromUrlPostResponse;
import org.openapis.openapi.models.shared.ChromeAdvancedOptions;
import org.openapis.openapi.models.shared.ChromeUrlToPdfRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    headerApiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ChromeUrlToPdfRequest req = new ChromeUrlToPdfRequest("https://www.github.com") {{
                fileName = "test.pdf";
                inlinePdf = true;
                options = new ChromeAdvancedOptions() {{
                    landscape = "true";
                    printBackground = false;
                }};;
            }};            

            ChromeFromUrlPostResponse res = sdk.headlessChrome.chromeFromUrlPost(req);

            if (res.apiResponseSuccess != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
