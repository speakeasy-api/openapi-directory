# walletRequests

### Available Operations

* [createwallet](#createwallet) - createWallet
* [createwalletaddress](#createwalletaddress) - createWalletAddress
* [deletewallet](#deletewallet) - deleteWallet
* [exportaddressprivatekey](#exportaddressprivatekey) - exportAddressPrivateKey
* [getwallet](#getwallet) - getWallet
* [getwalletaddresses](#getwalletaddresses) - getWalletAddresses

## createwallet

createWallet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatewalletRequestBody;
import org.openapis.openapi.models.operations.CreatewalletResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatewalletRequestBody req = new CreatewalletRequestBody() {{
                password = "test123";
            }};            

            CreatewalletResponse res = sdk.walletRequests.createwallet(req);

            if (res.createwallet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createwalletaddress

createWalletAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatewalletaddressRequest;
import org.openapis.openapi.models.operations.CreatewalletaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatewalletaddressRequest req = new CreatewalletaddressRequest("Evolo_2163532") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("dolor", "natus");
                    put("laboriosam", "hic");
                    put("saepe", "fuga");
                }};
            }};            

            CreatewalletaddressResponse res = sdk.walletRequests.createwalletaddress(req);

            if (res.createwalletaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deletewallet

deleteWallet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletewalletRequest;
import org.openapis.openapi.models.operations.DeletewalletRequestBody;
import org.openapis.openapi.models.operations.DeletewalletResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletewalletRequest req = new DeletewalletRequest("Evolo_4215179") {{
                requestBody = new DeletewalletRequestBody() {{
                    password = "test123";
                }};;
            }};            

            DeletewalletResponse res = sdk.walletRequests.deletewallet(req);

            if (res.deletewallet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportaddressprivatekey

exportAddressPrivateKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportaddressprivatekeyRequest;
import org.openapis.openapi.models.operations.ExportaddressprivatekeyRequestBody;
import org.openapis.openapi.models.operations.ExportaddressprivatekeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportaddressprivatekeyRequest req = new ExportaddressprivatekeyRequest("bc1qz3hdws5lt5ug7qwfv4m4ttanaq67ts77ekv95x", "Evolo_4215179") {{
                requestBody = new ExportaddressprivatekeyRequestBody() {{
                    password = "test123";
                }};;
            }};            

            ExportaddressprivatekeyResponse res = sdk.walletRequests.exportaddressprivatekey(req);

            if (res.exportaddressprivatekey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getwallet

getWallet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetwalletResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "in".getBytes()            

            GetwalletResponse res = sdk.walletRequests.getwallet(req);

            if (res.getwallet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getwalletaddresses

getWalletAddresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetwalletaddressesRequest;
import org.openapis.openapi.models.operations.GetwalletaddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetwalletaddressesRequest req = new GetwalletaddressesRequest("Evolo_2163532");            

            GetwalletaddressesResponse res = sdk.walletRequests.getwalletaddresses(req);

            if (res.getwalletaddresses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
