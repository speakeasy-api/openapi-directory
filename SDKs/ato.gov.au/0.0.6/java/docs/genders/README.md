# genders

## Overview

A classification scheme for the representation of human sexes.


### Available Operations

* [getClassificationsGenders](#getclassificationsgenders) - Retrieve a list of genders

## getClassificationsGenders

Retrieve a list of genders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsGendersRequest;
import org.openapis.openapi.models.operations.GetClassificationsGendersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsGendersRequest req = new GetClassificationsGendersRequest("nulla");            

            GetClassificationsGendersResponse res = sdk.genders.getClassificationsGenders(req);

            if (res.genders != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
