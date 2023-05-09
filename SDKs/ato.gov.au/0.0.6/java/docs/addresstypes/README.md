# addressTypes

## Overview

A classification scheme for addresses.


### Available Operations

* [getClassificationsAddressTypes](#getclassificationsaddresstypes) - Retrieve a list of address types

## getClassificationsAddressTypes

Retrieve a list of address types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsAddressTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsAddressTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsAddressTypesRequest req = new GetClassificationsAddressTypesRequest("provident");            

            GetClassificationsAddressTypesResponse res = sdk.addressTypes.getClassificationsAddressTypes(req);

            if (res.addressTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
