# SDK

## Overview

Fetch the latest currency exchange rates via API. ExchangeRate-API is free and unlimited.

API Documentation
<https://www.exchangerate-api.com/docs/documentation>
### Available Operations

* [getLatestBaseCurrency](#getlatestbasecurrency) - Returns latest exchange rates in parameter-supplied base currency.

## getLatestBaseCurrency

Returns latest exchange rates in parameter-supplied base currency.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestBaseCurrencyRequest;
import org.openapis.openapi.models.operations.GetLatestBaseCurrencyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLatestBaseCurrencyRequest req = new GetLatestBaseCurrencyRequest("provident");            

            GetLatestBaseCurrencyResponse res = sdk.sdk.getLatestBaseCurrency(req);

            if (res.getLatestBaseCurrency200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
