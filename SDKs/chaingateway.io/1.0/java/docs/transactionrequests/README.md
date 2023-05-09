# transactionRequests

## Overview

Requests to send Tokens, Ethereum and clear addresses

### Available Operations

* [clearAddress](#clearaddress) - clearAddress
* [sendEthereum](#sendethereum) - sendEthereum
* [sendToken](#sendtoken) - sendToken

## clearAddress

Sends all available ethereum funds of an address to a specified receiver address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClearAddressRequest;
import org.openapis.openapi.models.operations.ClearAddressResponse;
import org.openapis.openapi.models.shared.ClearAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClearAddressRequest req = new ClearAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new ClearAddressRequest("quo", "odit", "at"););            

            ClearAddressResponse res = sdk.transactionRequests.clearAddress(req);

            if (res.clearAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendEthereum

Sends ethereum from an address controlled by the account to a specified receiver address.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendEthereumRequest;
import org.openapis.openapi.models.operations.SendEthereumResponse;
import org.openapis.openapi.models.shared.SendEthereumRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendEthereumRequest req = new SendEthereumRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new SendEthereumRequest(8700.88, "maiores", "molestiae", "quod"););            

            SendEthereumResponse res = sdk.transactionRequests.sendEthereum(req);

            if (res.sendEthereum != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendToken

Sends ERC20 tokens from an address controlled by the account to a specified receiver address. The token contract address is needed to specify the token. The use of the identifier parameter is recommend and awaits an unique string. Whenever a transaction is beeing sent, the identifier is checked and the transaction gets dropped if there is one with that identifier already.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendTokenRequest;
import org.openapis.openapi.models.operations.SendTokenResponse;
import org.openapis.openapi.models.shared.SendTokenRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendTokenRequest req = new SendTokenRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new SendTokenRequest(800911, "esse", "totam", "porro", "dolorum", "dicta"););            

            SendTokenResponse res = sdk.transactionRequests.sendToken(req);

            if (res.sendToken != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
