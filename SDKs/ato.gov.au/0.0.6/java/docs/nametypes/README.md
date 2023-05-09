# nameTypes

## Overview

A classification scheme for names.


### Available Operations

* [getClassificationsNameTypes](#getclassificationsnametypes) - Retrieve a list of name types

## getClassificationsNameTypes

Retrieve a list of name types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsNameTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsNameTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsNameTypesRequest req = new GetClassificationsNameTypesRequest("quibusdam");            

            GetClassificationsNameTypesResponse res = sdk.nameTypes.getClassificationsNameTypes(req);

            if (res.nameTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
