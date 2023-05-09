# uuidParsing

## Overview

Parse UUID string and check for its validity and return version details

Find out more
<https://fungenerators.com/api/uuid/>
### Available Operations

* [postUuid](#postuuid) - Parse a UUID string and return its version and check whether it is valid.

## postUuid

Parse a UUID string and return its version and check whether it is valid.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostUuidRequest;
import org.openapis.openapi.models.operations.PostUuidResponse;
import org.openapis.openapi.models.operations.PostUuidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostUuidRequest req = new PostUuidRequest("error");            

            PostUuidResponse res = sdk.uuidParsing.postUuid(req, new PostUuidSecurity("deserunt") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
