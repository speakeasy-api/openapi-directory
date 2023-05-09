# pdfOcr

### Available Operations

* [pdfOcrGetAsyncJobStatus](#pdfocrgetasyncjobstatus) - Returns the result of the Async Job - possible states can be STARTED or COMPLETED
* [pdfOcrPdfToLinesWithLocation](#pdfocrpdftolineswithlocation) - Convert a PDF into text lines with location
* [pdfOcrPdfToWordsWithLocation](#pdfocrpdftowordswithlocation) - Convert a PDF into words with location
* [pdfOcrPost](#pdfocrpost) - Converts an uploaded PDF file into text via Optical Character Recognition.

## pdfOcrGetAsyncJobStatus

Returns the result of the Async Job - possible states can be STARTED or COMPLETED

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PdfOcrGetAsyncJobStatusRequest;
import org.openapis.openapi.models.operations.PdfOcrGetAsyncJobStatusResponse;
import org.openapis.openapi.models.operations.PdfOcrGetAsyncJobStatusSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PdfOcrGetAsyncJobStatusRequest req = new PdfOcrGetAsyncJobStatusRequest("officia");            

            PdfOcrGetAsyncJobStatusResponse res = sdk.pdfOcr.pdfOcrGetAsyncJobStatus(req, new PdfOcrGetAsyncJobStatusSecurity("occaecati") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.pdfToTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pdfOcrPdfToLinesWithLocation

Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PdfOcrPdfToLinesWithLocationRequest;
import org.openapis.openapi.models.operations.PdfOcrPdfToLinesWithLocationRequestBody;
import org.openapis.openapi.models.operations.PdfOcrPdfToLinesWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.PdfOcrPdfToLinesWithLocationResponse;
import org.openapis.openapi.models.operations.PdfOcrPdfToLinesWithLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PdfOcrPdfToLinesWithLocationRequest req = new PdfOcrPdfToLinesWithLocationRequest(                new PdfOcrPdfToLinesWithLocationRequestBody(                new PdfOcrPdfToLinesWithLocationRequestBodyImageFile("fugit".getBytes(), "deleniti"););) {{
                language = "hic";
                preprocessing = "optio";
            }};            

            PdfOcrPdfToLinesWithLocationResponse res = sdk.pdfOcr.pdfOcrPdfToLinesWithLocation(req, new PdfOcrPdfToLinesWithLocationSecurity("totam") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.pdfToLinesWithLocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pdfOcrPdfToWordsWithLocation

Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PdfOcrPdfToWordsWithLocationRequest;
import org.openapis.openapi.models.operations.PdfOcrPdfToWordsWithLocationRequestBody;
import org.openapis.openapi.models.operations.PdfOcrPdfToWordsWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.PdfOcrPdfToWordsWithLocationResponse;
import org.openapis.openapi.models.operations.PdfOcrPdfToWordsWithLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PdfOcrPdfToWordsWithLocationRequest req = new PdfOcrPdfToWordsWithLocationRequest(                new PdfOcrPdfToWordsWithLocationRequestBody(                new PdfOcrPdfToWordsWithLocationRequestBodyImageFile("beatae".getBytes(), "commodi"););) {{
                language = "molestiae";
                preprocessing = "modi";
            }};            

            PdfOcrPdfToWordsWithLocationResponse res = sdk.pdfOcr.pdfOcrPdfToWordsWithLocation(req, new PdfOcrPdfToWordsWithLocationSecurity("qui") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.pdfToWordsWithLocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pdfOcrPost

Converts an uploaded PDF file into text via Optical Character Recognition.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PdfOcrPostRequest;
import org.openapis.openapi.models.operations.PdfOcrPostRequestBody;
import org.openapis.openapi.models.operations.PdfOcrPostRequestBodyImageFile;
import org.openapis.openapi.models.operations.PdfOcrPostResponse;
import org.openapis.openapi.models.operations.PdfOcrPostSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PdfOcrPostRequest req = new PdfOcrPostRequest(                new PdfOcrPostRequestBody(                new PdfOcrPostRequestBodyImageFile("impedit".getBytes(), "cum"););) {{
                language = "esse";
                preprocessing = "ipsum";
                recognitionMode = "excepturi";
            }};            

            PdfOcrPostResponse res = sdk.pdfOcr.pdfOcrPost(req, new PdfOcrPostSecurity("aspernatur") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.pdfToTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
