# namePrefixes

## Overview

A classification scheme for names.


### Available Operations

* [getClassificationsNamePrefixes](#getclassificationsnameprefixes) - Retrieve a list of name prefixes

## getClassificationsNamePrefixes

Retrieve a list of name prefixes

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClassificationsNamePrefixesRequest;
import org.openapis.openapi.models.operations.GetClassificationsNamePrefixesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClassificationsNamePrefixesRequest req = new GetClassificationsNamePrefixesRequest("distinctio");            

            GetClassificationsNamePrefixesResponse res = sdk.namePrefixes.getClassificationsNamePrefixes(req);

            if (res.namePrefixes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
