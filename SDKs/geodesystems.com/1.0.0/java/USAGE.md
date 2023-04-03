<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.MediaTabularExtractsheetRequest;
import org.openapis.openapi.models.operations.MediaTabularExtractsheetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MediaTabularExtractsheetRequest req = new MediaTabularExtractsheetRequest() {{
                arg1 = "corrupti";
                entryid = "provident";
                output = "distinctio";
            }}            

            MediaTabularExtractsheetResponse res = sdk.serviceMediaTabularExtractsheet.mediaTabularExtractsheet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->