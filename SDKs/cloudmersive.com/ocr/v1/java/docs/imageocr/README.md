# imageOcr

### Available Operations

* [imageOcrImageLinesWithLocation](#imageocrimagelineswithlocation) - Convert a scanned image into words with location
* [imageOcrImageWordsWithLocation](#imageocrimagewordswithlocation) - Convert a scanned image into words with location
* [imageOcrPhotoRecognizeBusinessCard](#imageocrphotorecognizebusinesscard) - Recognize a photo of a business card, extract key business information
* [imageOcrPhotoRecognizeFormAdvanced](#imageocrphotorecognizeformadvanced) - Recognize a photo of a form, extract key fields using stored templates
* [imageOcrPhotoRecognizeReceipt](#imageocrphotorecognizereceipt) - Recognize a photo of a receipt, extract key business information
* [imageOcrPhotoToText](#imageocrphotototext) - Convert a photo of a document into text
* [imageOcrPhotoWordsWithLocation](#imageocrphotowordswithlocation) - Convert a photo of a document or receipt into words with location
* [imageOcrPost](#imageocrpost) - Convert a scanned image into text

## imageOcrImageLinesWithLocation

Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequest;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBody;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationResponse;
import org.openapis.openapi.models.operations.ImageOcrImageLinesWithLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrImageLinesWithLocationRequest req = new ImageOcrImageLinesWithLocationRequest(                new ImageOcrImageLinesWithLocationRequestBody(                new ImageOcrImageLinesWithLocationRequestBodyImageFile("nulla".getBytes(), "corrupti"););) {{
                language = "illum";
                preprocessing = "vel";
            }};            

            ImageOcrImageLinesWithLocationResponse res = sdk.imageOcr.imageOcrImageLinesWithLocation(req, new ImageOcrImageLinesWithLocationSecurity("error") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.imageToLinesWithLocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageOcrImageWordsWithLocation

Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrImageWordsWithLocationRequest;
import org.openapis.openapi.models.operations.ImageOcrImageWordsWithLocationRequestBody;
import org.openapis.openapi.models.operations.ImageOcrImageWordsWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrImageWordsWithLocationResponse;
import org.openapis.openapi.models.operations.ImageOcrImageWordsWithLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrImageWordsWithLocationRequest req = new ImageOcrImageWordsWithLocationRequest(                new ImageOcrImageWordsWithLocationRequestBody(                new ImageOcrImageWordsWithLocationRequestBodyImageFile("deserunt".getBytes(), "suscipit"););) {{
                language = "iure";
                preprocessing = "magnam";
            }};            

            ImageOcrImageWordsWithLocationResponse res = sdk.imageOcr.imageOcrImageWordsWithLocation(req, new ImageOcrImageWordsWithLocationSecurity("debitis") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.imageToWordsWithLocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageOcrPhotoRecognizeBusinessCard

Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeBusinessCardRequestBody;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeBusinessCardResponse;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeBusinessCardSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrPhotoRecognizeBusinessCardRequestBody req = new ImageOcrPhotoRecognizeBusinessCardRequestBody(                new ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile("ipsa".getBytes(), "delectus"););            

            ImageOcrPhotoRecognizeBusinessCardResponse res = sdk.imageOcr.imageOcrPhotoRecognizeBusinessCard(req, new ImageOcrPhotoRecognizeBusinessCardSecurity("tempora") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.businessCardRecognitionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageOcrPhotoRecognizeFormAdvanced

Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeFormAdvancedRequest;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeFormAdvancedRequestBody;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeFormAdvancedResponse;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeFormAdvancedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrPhotoRecognizeFormAdvancedRequest req = new ImageOcrPhotoRecognizeFormAdvancedRequest(                new ImageOcrPhotoRecognizeFormAdvancedRequestBody(                new ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile("suscipit".getBytes(), "molestiae"););) {{
                bucketID = "minus";
                bucketSecretKey = "placeat";
                diagnostics = "voluptatum";
                preprocessing = "iusto";
                recognitionMode = "excepturi";
            }};            

            ImageOcrPhotoRecognizeFormAdvancedResponse res = sdk.imageOcr.imageOcrPhotoRecognizeFormAdvanced(req, new ImageOcrPhotoRecognizeFormAdvancedSecurity("nisi") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.formRecognitionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageOcrPhotoRecognizeReceipt

Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeReceiptRequest;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeReceiptRequestBody;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeReceiptResponse;
import org.openapis.openapi.models.operations.ImageOcrPhotoRecognizeReceiptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrPhotoRecognizeReceiptRequest req = new ImageOcrPhotoRecognizeReceiptRequest(                new ImageOcrPhotoRecognizeReceiptRequestBody(                new ImageOcrPhotoRecognizeReceiptRequestBodyImageFile("recusandae".getBytes(), "temporibus"););) {{
                language = "ab";
                preprocessing = "quis";
                recognitionMode = "veritatis";
            }};            

            ImageOcrPhotoRecognizeReceiptResponse res = sdk.imageOcr.imageOcrPhotoRecognizeReceipt(req, new ImageOcrPhotoRecognizeReceiptSecurity("deserunt") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.receiptRecognitionResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageOcrPhotoToText

Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrPhotoToTextRequest;
import org.openapis.openapi.models.operations.ImageOcrPhotoToTextRequestBody;
import org.openapis.openapi.models.operations.ImageOcrPhotoToTextRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrPhotoToTextResponse;
import org.openapis.openapi.models.operations.ImageOcrPhotoToTextSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrPhotoToTextRequest req = new ImageOcrPhotoToTextRequest(                new ImageOcrPhotoToTextRequestBody(                new ImageOcrPhotoToTextRequestBodyImageFile("perferendis".getBytes(), "ipsam"););) {{
                language = "repellendus";
                recognitionMode = "sapiente";
            }};            

            ImageOcrPhotoToTextResponse res = sdk.imageOcr.imageOcrPhotoToText(req, new ImageOcrPhotoToTextSecurity("quo") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.imageToTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageOcrPhotoWordsWithLocation

Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrPhotoWordsWithLocationRequest;
import org.openapis.openapi.models.operations.ImageOcrPhotoWordsWithLocationRequestBody;
import org.openapis.openapi.models.operations.ImageOcrPhotoWordsWithLocationRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrPhotoWordsWithLocationResponse;
import org.openapis.openapi.models.operations.ImageOcrPhotoWordsWithLocationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrPhotoWordsWithLocationRequest req = new ImageOcrPhotoWordsWithLocationRequest(                new ImageOcrPhotoWordsWithLocationRequestBody(                new ImageOcrPhotoWordsWithLocationRequestBodyImageFile("odit".getBytes(), "at"););) {{
                diagnostics = "at";
                language = "maiores";
                preprocessing = "molestiae";
                recognitionMode = "quod";
            }};            

            ImageOcrPhotoWordsWithLocationResponse res = sdk.imageOcr.imageOcrPhotoWordsWithLocation(req, new ImageOcrPhotoWordsWithLocationSecurity("quod") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.photoToWordsWithLocationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## imageOcrPost

Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImageOcrPostRequest;
import org.openapis.openapi.models.operations.ImageOcrPostRequestBody;
import org.openapis.openapi.models.operations.ImageOcrPostRequestBodyImageFile;
import org.openapis.openapi.models.operations.ImageOcrPostResponse;
import org.openapis.openapi.models.operations.ImageOcrPostSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImageOcrPostRequest req = new ImageOcrPostRequest(                new ImageOcrPostRequestBody(                new ImageOcrPostRequestBodyImageFile("esse".getBytes(), "totam"););) {{
                language = "porro";
                preprocessing = "dolorum";
                recognitionMode = "dicta";
            }};            

            ImageOcrPostResponse res = sdk.imageOcr.imageOcrPost(req, new ImageOcrPostSecurity("nam") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.imageToTextResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
