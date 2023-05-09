# registeredIdentifierTypes

## Overview

A classification scheme for registered identifiers.


### Available Operations

* [getClassificationsRegisteredIdentifierTypes](#getclassificationsregisteredidentifiertypes) - Retrieve a list of registered identifier types

## getClassificationsRegisteredIdentifierTypes

Retrieve a list of registered identifier types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsRegisteredIdentifierTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsRegisteredIdentifierTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsRegisteredIdentifierTypesRequest req = new GetClassificationsRegisteredIdentifierTypesRequest("error");            

            GetClassificationsRegisteredIdentifierTypesResponse res = sdk.registeredIdentifierTypes.getClassificationsRegisteredIdentifierTypes(req);

            if (res.registeredIdentifierTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
