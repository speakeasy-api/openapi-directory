# businessNames

## Overview

A business name is a name or title under which a person or organisation conducts a business.


### Available Operations

* [getBusinessNames](#getbusinessnames) - Retrieve a list of business names

## getBusinessNames

Retrieve a list of business names


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBusinessNamesRequest;
import org.openapis.openapi.models.operations.GetBusinessNamesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBusinessNamesRequest req = new GetBusinessNamesRequest("quibusdam");            

            GetBusinessNamesResponse res = sdk.businessNames.getBusinessNames(req);

            if (res.businessNames != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
