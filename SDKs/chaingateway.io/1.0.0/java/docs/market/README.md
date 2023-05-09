# market

### Available Operations

* [getalltimehigh](#getalltimehigh) - getAllTimeHigh
* [getalltimelow](#getalltimelow) - getAllTimeLow
* [getcurrencies](#getcurrencies) - getCurrencies
* [getpricedatabycurrency](#getpricedatabycurrency) - getPriceDataByCurrency
* [getratebycurrency](#getratebycurrency) - getRateByCurrency

## getalltimehigh

getAllTimeHigh

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetalltimehighRequest;
import org.openapis.openapi.models.operations.GetalltimehighResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetalltimehighRequest req = new GetalltimehighRequest("btc", "eur");            

            GetalltimehighResponse res = sdk.market.getalltimehigh(req);

            if (res.getalltimehigh200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getalltimelow

getAllTimeLow

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetalltimelowRequest;
import org.openapis.openapi.models.operations.GetalltimelowResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetalltimelowRequest req = new GetalltimelowRequest("btc", "eur");            

            GetalltimelowResponse res = sdk.market.getalltimelow(req);

            if (res.getalltimelow200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getcurrencies

getCurrencies

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetcurrenciesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetcurrenciesResponse res = sdk.market.getcurrencies();

            if (res.getcurrencies200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getpricedatabycurrency

getPriceDataByCurrency

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpricedatabycurrencyRequest;
import org.openapis.openapi.models.operations.GetpricedatabycurrencyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetpricedatabycurrencyRequest req = new GetpricedatabycurrencyRequest("btc", "usd");            

            GetpricedatabycurrencyResponse res = sdk.market.getpricedatabycurrency(req);

            if (res.getpricedatabycurrency200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getratebycurrency

getRateByCurrency

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetratebycurrencyRequest;
import org.openapis.openapi.models.operations.GetratebycurrencyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetratebycurrencyRequest req = new GetratebycurrencyRequest("btc", "eur");            

            GetratebycurrencyResponse res = sdk.market.getratebycurrency(req);

            if (res.getratebycurrency200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
