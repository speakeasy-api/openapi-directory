<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            GetBarcodeDecodeTypesRequest req = new GetBarcodeDecodeTypesRequest() {{
                security = new GetBarcodeDecodeTypesSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsApiSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
            }};

            GetBarcodeDecodeTypesResponse res = sdk.barcode.getBarcodeDecodeTypes(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->