# preprocessing

### Available Operations

* [preprocessingBinarize](#preprocessingbinarize) - Convert an image of text into a binarized (light and dark) view
* [preprocessingBinarizeAdvanced](#preprocessingbinarizeadvanced) - Convert an image of text into a binary (light and dark) view with ML
* [preprocessingGetPageAngle](#preprocessinggetpageangle) - Get the angle of the page / document / receipt
* [preprocessingUnrotate](#preprocessingunrotate) - Detect and unrotate a document image
* [preprocessingUnrotateAdvanced](#preprocessingunrotateadvanced) - Detect and unrotate a document image (advanced)
* [preprocessingUnskew](#preprocessingunskew) - Detect and unskew a photo of a document

## preprocessingBinarize

Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprocessingBinarizeRequestBody;
import org.openapis.openapi.models.operations.PreprocessingBinarizeRequestBodyImageFile;
import org.openapis.openapi.models.operations.PreprocessingBinarizeResponse;
import org.openapis.openapi.models.operations.PreprocessingBinarizeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprocessingBinarizeRequestBody req = new PreprocessingBinarizeRequestBody(                new PreprocessingBinarizeRequestBodyImageFile("perferendis".getBytes(), "ad"););            

            PreprocessingBinarizeResponse res = sdk.preprocessing.preprocessingBinarize(req, new PreprocessingBinarizeSecurity("natus") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.preprocessingBinarize200ApplicationJSONByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprocessingBinarizeAdvanced

Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprocessingBinarizeAdvancedRequestBody;
import org.openapis.openapi.models.operations.PreprocessingBinarizeAdvancedRequestBodyImageFile;
import org.openapis.openapi.models.operations.PreprocessingBinarizeAdvancedResponse;
import org.openapis.openapi.models.operations.PreprocessingBinarizeAdvancedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprocessingBinarizeAdvancedRequestBody req = new PreprocessingBinarizeAdvancedRequestBody(                new PreprocessingBinarizeAdvancedRequestBodyImageFile("sed".getBytes(), "iste"););            

            PreprocessingBinarizeAdvancedResponse res = sdk.preprocessing.preprocessingBinarizeAdvanced(req, new PreprocessingBinarizeAdvancedSecurity("dolor") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.preprocessingBinarizeAdvanced200ApplicationJSONByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprocessingGetPageAngle

Analyzes a photo or image of a document and identifies the rotation angle of the page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprocessingGetPageAngleRequestBody;
import org.openapis.openapi.models.operations.PreprocessingGetPageAngleRequestBodyImageFile;
import org.openapis.openapi.models.operations.PreprocessingGetPageAngleResponse;
import org.openapis.openapi.models.operations.PreprocessingGetPageAngleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprocessingGetPageAngleRequestBody req = new PreprocessingGetPageAngleRequestBody(                new PreprocessingGetPageAngleRequestBodyImageFile("natus".getBytes(), "laboriosam"););            

            PreprocessingGetPageAngleResponse res = sdk.preprocessing.preprocessingGetPageAngle(req, new PreprocessingGetPageAngleSecurity("hic") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPageAngleResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprocessingUnrotate

Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprocessingUnrotateRequestBody;
import org.openapis.openapi.models.operations.PreprocessingUnrotateRequestBodyImageFile;
import org.openapis.openapi.models.operations.PreprocessingUnrotateResponse;
import org.openapis.openapi.models.operations.PreprocessingUnrotateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprocessingUnrotateRequestBody req = new PreprocessingUnrotateRequestBody(                new PreprocessingUnrotateRequestBodyImageFile("saepe".getBytes(), "fuga"););            

            PreprocessingUnrotateResponse res = sdk.preprocessing.preprocessingUnrotate(req, new PreprocessingUnrotateSecurity("in") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.preprocessingUnrotate200ApplicationJSONByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprocessingUnrotateAdvanced

Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprocessingUnrotateAdvancedRequestBody;
import org.openapis.openapi.models.operations.PreprocessingUnrotateAdvancedRequestBodyImageFile;
import org.openapis.openapi.models.operations.PreprocessingUnrotateAdvancedResponse;
import org.openapis.openapi.models.operations.PreprocessingUnrotateAdvancedSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprocessingUnrotateAdvancedRequestBody req = new PreprocessingUnrotateAdvancedRequestBody(                new PreprocessingUnrotateAdvancedRequestBodyImageFile("corporis".getBytes(), "iste"););            

            PreprocessingUnrotateAdvancedResponse res = sdk.preprocessing.preprocessingUnrotateAdvanced(req, new PreprocessingUnrotateAdvancedSecurity("iure") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.preprocessingUnrotateAdvanced200ApplicationJSONByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## preprocessingUnskew

Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PreprocessingUnskewRequestBody;
import org.openapis.openapi.models.operations.PreprocessingUnskewRequestBodyImageFile;
import org.openapis.openapi.models.operations.PreprocessingUnskewResponse;
import org.openapis.openapi.models.operations.PreprocessingUnskewSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PreprocessingUnskewRequestBody req = new PreprocessingUnskewRequestBody(                new PreprocessingUnskewRequestBodyImageFile("saepe".getBytes(), "quidem"););            

            PreprocessingUnskewResponse res = sdk.preprocessing.preprocessingUnskew(req, new PreprocessingUnskewSecurity("architecto") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.preprocessingUnskew200ApplicationJSONByteString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
