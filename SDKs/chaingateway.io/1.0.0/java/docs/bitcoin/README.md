# bitcoin

### Available Operations

* [createwallet](#createwallet) - createWallet
* [createwalletaddress](#createwalletaddress) - createWalletAddress
* [deletewallet](#deletewallet) - deleteWallet
* [exportaddressprivatekey](#exportaddressprivatekey) - exportAddressPrivateKey
* [getblock4](#getblock4) - getBlock
* [getblockchaininfo](#getblockchaininfo) - getBlockchaIninfo
* [getfees](#getfees) - getFees
* [getlastblocknumber4](#getlastblocknumber4) - getLastBlockNumber
* [gettransaction4](#gettransaction4) - getTransaction
* [getwallet](#getwallet) - getWallet
* [getwalletaddresses](#getwalletaddresses) - getWalletAddresses
* [listfailedipns4](#listfailedipns4) - listFailedIPNs
* [listsubscribedaddresses4](#listsubscribedaddresses4) - listSubscribedAddresses
* [resendfailedipn4](#resendfailedipn4) - resendFailedIPN
* [sendtransaction4](#sendtransaction4) - sendTransaction
* [subscribeaddress4](#subscribeaddress4) - subscribeAddress
* [unsubscribeaddress4](#unsubscribeaddress4) - unsubscribeAddress

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

            CreatewalletResponse res = sdk.bitcoin.createwallet(req);

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
                    put("deserunt", "suscipit");
                    put("iure", "magnam");
                    put("debitis", "ipsa");
                }};
            }};            

            CreatewalletaddressResponse res = sdk.bitcoin.createwalletaddress(req);

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

            DeletewalletResponse res = sdk.bitcoin.deletewallet(req);

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

            ExportaddressprivatekeyResponse res = sdk.bitcoin.exportaddressprivatekey(req);

            if (res.exportaddressprivatekey200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getblock4

getBlock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getblock4Request;
import org.openapis.openapi.models.operations.Getblock4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getblock4Request req = new Getblock4Request("737832") {{
                requestBody = "delectus".getBytes();
            }};            

            Getblock4Response res = sdk.bitcoin.getblock4(req);

            if (res.getblock4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getblockchaininfo

getBlockchaIninfo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetblockchaininfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetblockchaininfoResponse res = sdk.bitcoin.getblockchaininfo();

            if (res.getblockchaininfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getfees

The fees are parted into three categroies

fast (10min / 1 block)  
medium (30 min / 3 blocks)  
slow (60 min / 6 blocks)

this tells you in wich block distance your transaction get confirmed. A block is around \~10 minutes.

Please note that fees are dynamic by transaction size. This is only an estimation!

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetfeesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetfeesResponse res = sdk.bitcoin.getfees();

            if (res.getfees200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlastblocknumber4

Get the latest block number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getlastblocknumber4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getlastblocknumber4Response res = sdk.bitcoin.getlastblocknumber4();

            if (res.getlastblocknumber4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransaction4

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransaction4Request;
import org.openapis.openapi.models.operations.Gettransaction4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransaction4Request req = new Gettransaction4Request("abf9fdf4144c999034075815455285c5a475d6e0203e4af7050844c8264f16e3") {{
                requestBody = "tempora".getBytes();
            }};            

            Gettransaction4Response res = sdk.bitcoin.gettransaction4(req);

            if (res.gettransaction4200ApplicationJSONObject != null) {
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

            org.openapis.openapi.models.. req = "suscipit".getBytes()            

            GetwalletResponse res = sdk.bitcoin.getwallet(req);

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

            GetwalletaddressesResponse res = sdk.bitcoin.getwalletaddresses(req);

            if (res.getwalletaddresses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listfailedipns4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listfailedipns4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "molestiae".getBytes()            

            Listfailedipns4Response res = sdk.bitcoin.listfailedipns4(req);

            if (res.listfailedipns4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listsubscribedaddresses4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listsubscribedaddresses4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "minus".getBytes()            

            Listsubscribedaddresses4Response res = sdk.bitcoin.listsubscribedaddresses4(req);

            if (res.listsubscribedaddresses4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendfailedipn4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Resendfailedipn4Request;
import org.openapis.openapi.models.operations.Resendfailedipn4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Resendfailedipn4Request req = new Resendfailedipn4Request("62640817eb594da78c7bee00") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("voluptatum", "iusto");
                    put("excepturi", "nisi");
                    put("recusandae", "temporibus");
                    put("ab", "quis");
                }};
            }};            

            Resendfailedipn4Response res = sdk.bitcoin.resendfailedipn4(req);

            if (res.resendfailedipn4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendtransaction4

sendTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtransaction4RequestBody;
import org.openapis.openapi.models.operations.Sendtransaction4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendtransaction4RequestBody req = new Sendtransaction4RequestBody() {{
                amount = "1";
                password = "Test123";
                speed = "fast";
                subtractfee = false;
                to = "bc1qzq8m9ukvvgvj7kmlejnfr2q4ndmk2e4ndtr9rn";
                walletname = "Evolo_6928232";
            }};            

            Sendtransaction4Response res = sdk.bitcoin.sendtransaction4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeaddress4

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Subscribeaddress4RequestBody;
import org.openapis.openapi.models.operations.Subscribeaddress4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Subscribeaddress4RequestBody req = new Subscribeaddress4RequestBody() {{
                from = "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt";
                url = "https://yoururl.com/ipnreceiver.php";
            }};            

            Subscribeaddress4Response res = sdk.bitcoin.subscribeaddress4(req);

            if (res.subscribeaddress4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeaddress4

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Unsubscribeaddress4Request;
import org.openapis.openapi.models.operations.Unsubscribeaddress4Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Unsubscribeaddress4Request req = new Unsubscribeaddress4Request("63ef470294d74b0f290b4b64") {{
                requestBody = "veritatis".getBytes();
            }};            

            Unsubscribeaddress4Response res = sdk.bitcoin.unsubscribeaddress4(req);

            if (res.unsubscribeaddress4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
