# uuidGeneration

## Overview

Generate different versions of UUID easily.

Find out more
<https://fungenerators.com/api/uuid/>
### Available Operations

* [getUuid](#getuuid) - Generate a random UUID (v4).
* [getUuidVersionVersion](#getuuidversionversion) - Generate a random UUID (v4).

## getUuid

Generate a random UUID (v4).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUuidRequest;
import org.openapis.openapi.models.operations.GetUuidResponse;
import org.openapis.openapi.models.operations.GetUuidSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUuidRequest req = new GetUuidRequest() {{
                count = 715190L;
            }};            

            GetUuidResponse res = sdk.uuidGeneration.getUuid(req, new GetUuidSecurity("quibusdam") {{
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

## getUuidVersionVersion

Generate a random UUID (v4).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUuidVersionVersionRequest;
import org.openapis.openapi.models.operations.GetUuidVersionVersionResponse;
import org.openapis.openapi.models.operations.GetUuidVersionVersionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUuidVersionVersionRequest req = new GetUuidVersionVersionRequest(602763L) {{
                count = 857946L;
                text = "corrupti";
                type = "illum";
            }};            

            GetUuidVersionVersionResponse res = sdk.uuidGeneration.getUuidVersionVersion(req, new GetUuidVersionVersionSecurity("vel") {{
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
