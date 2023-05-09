# nameDirections

## Overview

A classification scheme for names.


### Available Operations

* [getClassificationsNameDirections](#getclassificationsnamedirections) - Retrieve a list of name directions

## getClassificationsNameDirections

Retrieve a list of name directions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsNameDirectionsRequest;
import org.openapis.openapi.models.operations.GetClassificationsNameDirectionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsNameDirectionsRequest req = new GetClassificationsNameDirectionsRequest("deserunt");            

            GetClassificationsNameDirectionsResponse res = sdk.nameDirections.getClassificationsNameDirections(req);

            if (res.nameDirections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
