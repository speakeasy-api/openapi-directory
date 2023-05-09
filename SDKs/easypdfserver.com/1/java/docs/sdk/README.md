# SDK

## Overview

API for converting HTML to PDF.

### Available Operations

* [postMakePdf](#postmakepdf) - Generate a PDF from HTML or URL.

## postMakePdf

Generate a PDF from HTML or URL.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMakePdfRequestBody;
import org.openapis.openapi.models.operations.PostMakePdfResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMakePdfRequestBody req = new PostMakePdfRequestBody("quibusdam") {{
                html = "unde";
                url = "nulla";
            }};            

            PostMakePdfResponse res = sdk.sdk.postMakePdf(req);

            if (res.postMakePdf200ApplicationPdfBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
