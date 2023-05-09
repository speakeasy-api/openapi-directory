# balance

## Overview

Authorized users with API Key can call endpoints under this tag.

### Available Operations

* [balanceLookup](#balancelookup) - Check Balance

## balanceLookup

Get Account balance and expiry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BalanceLookupRequest;
import org.openapis.openapi.models.operations.BalanceLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BalanceLookupRequest req = new BalanceLookupRequest("provident");            

            BalanceLookupResponse res = sdk.balance.balanceLookup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
