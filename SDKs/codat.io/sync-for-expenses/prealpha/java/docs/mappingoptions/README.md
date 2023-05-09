# mappingOptions

## Overview

Mapping options for a companies expenses.

### Available Operations

* [getMappingOptions](#getmappingoptions) - Mapping options

## getMappingOptions

Gets the expense mapping options for a companies accounting software

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMappingOptionsRequest;
import org.openapis.openapi.models.operations.GetMappingOptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMappingOptionsRequest req = new GetMappingOptionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002");            

            GetMappingOptionsResponse res = sdk.mappingOptions.getMappingOptions(req);

            if (res.mappingOptions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
