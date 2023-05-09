# receipts

### Available Operations

* [~~receiptsPhotoToCSV~~](#receiptsphototocsv) - Convert a photo of a receipt into a CSV file containing structured information from the receipt :warning: **Deprecated**

## ~~receiptsPhotoToCSV~~

Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReceiptsPhotoToCSVRequestBody;
import org.openapis.openapi.models.operations.ReceiptsPhotoToCSVRequestBodyImageFile;
import org.openapis.openapi.models.operations.ReceiptsPhotoToCSVResponse;
import org.openapis.openapi.models.operations.ReceiptsPhotoToCSVSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReceiptsPhotoToCSVRequestBody req = new ReceiptsPhotoToCSVRequestBody(                new ReceiptsPhotoToCSVRequestBodyImageFile("ipsa".getBytes(), "reiciendis"););            

            ReceiptsPhotoToCSVResponse res = sdk.receipts.receiptsPhotoToCSV(req, new ReceiptsPhotoToCSVSecurity("est") {{
                apikey = "YOUR_API_KEY_HERE";
            }});

            if (res.receiptsPhotoToCSV200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
