# zxingZebraCrossingBarCodes

### Available Operations

* [zebraGET](#zebraget) - Generate bar codes and QR codes with ZXING.

## zebraGET

See full list of options and documentation [here](https://www.api2pdf.com/documentation/advanced-options-zxing-zebra-crossing-barcodes/)
### Authorize via Query String Parameter
**apikey=YOUR-API-KEY**
### Example
``` https://v2018.api2pdf.com/zebra?format={format}&apikey={YourApiKey}&value={YourText} ``` 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ZebraGETRequest;
import org.openapis.openapi.models.operations.ZebraGETResponse;
import org.openapis.openapi.models.operations.ZebraGETSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ZebraGETRequest req = new ZebraGETRequest("suscipit", "iure") {{
                height = 297534L;
                showlabel = false;
                width = 891773L;
            }};            

            ZebraGETResponse res = sdk.zxingZebraCrossingBarCodes.zebraGET(req, new ZebraGETSecurity("ipsa") {{
                queryApiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.zebraGET200ImagePngBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
