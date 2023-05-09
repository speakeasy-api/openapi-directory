# transactionRequests123

### Available Operations

* [sendtransaction3](#sendtransaction3) - sendTransaction
* [sendtrc10](#sendtrc10) - sendTRC10
* [sendtrc20](#sendtrc20) - sendTRC20
* [sendtrc721](#sendtrc721) - sendTRC721

## sendtransaction3

sendTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtransaction3RequestBody;
import org.openapis.openapi.models.operations.Sendtransaction3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendtransaction3RequestBody req = new Sendtransaction3RequestBody() {{
                amount = "1";
                privatekey = "92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c";
                to = "TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M";
            }};            

            Sendtransaction3Response res = sdk.transactionRequests123.sendtransaction3(req);

            if (res.sendtransaction3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendtrc10

sendTRC10

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtrc10RequestBody;
import org.openapis.openapi.models.operations.Sendtrc10Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendtrc10RequestBody req = new Sendtrc10RequestBody() {{
                amount = "0.000001";
                privatekey = "92a5a62fdf7290244b564450f4ab10a5ea796f234aa6aded322c826ad40efb9c";
                to = "TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M";
                tokenId = 1002000;
            }};            

            Sendtrc10Response res = sdk.transactionRequests123.sendtrc10(req);

            if (res.sendtrc10200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendtrc20

sendTRC20

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtrc20RequestBody;
import org.openapis.openapi.models.operations.Sendtrc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendtrc20RequestBody req = new Sendtrc20RequestBody() {{
                amount = "0.1";
                contractaddress = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";
                from = "TPbJ4q2wZP2UpsE7ME3bxewS5pKAdWZwCj";
                privatekey = "privatekey";
                to = "TEZU8f2twTLYJ8XPfLrRAXNCNqVt5xtV1M";
            }};            

            Sendtrc20Response res = sdk.transactionRequests123.sendtrc20(req);

            if (res.sendtrc20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendtrc721

sendTRC721

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtrc721Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "cum".getBytes()            

            Sendtrc721Response res = sdk.transactionRequests123.sendtrc721(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
