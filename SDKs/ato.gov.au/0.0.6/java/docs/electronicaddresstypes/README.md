# electronicAddressTypes

## Overview

A classification scheme for electronic addresses.


### Available Operations

* [getClassificationsElectronicAddressTypes](#getclassificationselectronicaddresstypes) - Retrieve a list of electronic address types

## getClassificationsElectronicAddressTypes

Retrieve a list of electronic address types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsElectronicAddressTypesRequest;
import org.openapis.openapi.models.operations.GetClassificationsElectronicAddressTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsElectronicAddressTypesRequest req = new GetClassificationsElectronicAddressTypesRequest("unde");            

            GetClassificationsElectronicAddressTypesResponse res = sdk.electronicAddressTypes.getClassificationsElectronicAddressTypes(req);

            if (res.electronicAddressTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
