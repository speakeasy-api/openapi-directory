# lookup

## Overview

Authorized users with API Key can call this service

### Available Operations

* [binLookup](#binlookup) - Lookup for bin

## binLookup

By passing in the appropriate BIN, you can lookup for
card meta data in bintable.com API


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BinLookupRequest;
import org.openapis.openapi.models.operations.BinLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BinLookupRequest req = new BinLookupRequest("distinctio", "quibusdam");            

            BinLookupResponse res = sdk.lookup.binLookup(req);

            if (res.responseItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
