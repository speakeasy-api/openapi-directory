# media

## Overview

Submit media

### Available Operations

* [postMedia](#postmedia) - Submit a new media file

## postMedia

Submit a new media file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMediaResponse;
import org.openapis.openapi.models.operations.PostMediaSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "placeat"            

            PostMediaResponse res = sdk.media.postMedia(req, new PostMediaSecurity("perspiciatis") {{
                oauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.media != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
