# tickers

## Overview

 

### Available Operations

* [getTickersListV2](#gettickerslistv2) - Get Tickers list V2
* [getTickersV2](#gettickersv2) - Get Tickers V2

## getTickersListV2

Returns a list of available currency rate tickers (secondary currencies) for the specified date, along with an actual data timestamp.

Trailing slash '/' is mandatory

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTickersListV2Request;
import org.openapis.openapi.models.operations.GetTickersListV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("iure") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetTickersListV2Request req = new GetTickersListV2Request("bitcoin") {{
                timestamp = "1519053802";
            }};            

            GetTickersListV2Response res = sdk.tickers.getTickersListV2(req);

            if (res.getTickersListV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTickersV2

Returns currency rate for the specified currency and date. If the currency is not available for that specific timestamp, the next closest rate will be returned. All responses contain an actual rate timestamp.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTickersV2Request;
import org.openapis.openapi.models.operations.GetTickersV2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    option1 = new SecurityOption1("magnam") {{
                        xAPIKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            GetTickersV2Request req = new GetTickersV2Request("bitcoin") {{
                currency = "usd";
                timestamp = "1519053802";
            }};            

            GetTickersV2Response res = sdk.tickers.getTickersV2(req);

            if (res.getTickersV2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
