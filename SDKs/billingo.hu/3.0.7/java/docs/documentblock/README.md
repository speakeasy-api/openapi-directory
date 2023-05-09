# documentBlock

## Overview

DocumentBlock object represents your invoice pad.

### Available Operations

* [listDocumentBlock](#listdocumentblock) - List all document blocks

## listDocumentBlock

Returns a list of your document blocks. The document blocks are returned sorted by creation date, with the most recent document blocks appearing first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDocumentBlockRequest;
import org.openapis.openapi.models.operations.ListDocumentBlockResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDocumentBlockRequest req = new ListDocumentBlockRequest() {{
                page = 673660L;
                perPage = 96098L;
            }};            

            ListDocumentBlockResponse res = sdk.documentBlock.listDocumentBlock(req);

            if (res.documentBlockList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
