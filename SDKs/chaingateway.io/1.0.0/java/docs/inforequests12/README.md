# infoRequests12

### Available Operations

* [getbep20](#getbep20) - getBEP20
* [getbep20balance](#getbep20balance) - getBEP20Balance
* [getbinancecoinbalance](#getbinancecoinbalance) - getBinanceCoinBalance
* [getblock2](#getblock2) - getBlock
* [getgasprice2](#getgasprice2) - getGasPrice
* [getlastblocknumber2](#getlastblocknumber2) - getLastBlocknumber
* [getnftowner2](#getnftowner2) - getNFTOwner
* [getnfturi2](#getnfturi2) - getNFTUri
* [gettransaction2](#gettransaction2) - getTransaction
* [gettransactionreceipt2](#gettransactionreceipt2) - getTransactionReceipt

## getbep20

Receive information of a BEP20 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getbep20Request;
import org.openapis.openapi.models.operations.Getbep20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getbep20Request req = new Getbep20Request("0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B");            

            Getbep20Response res = sdk.infoRequests12.getbep20(req);

            if (res.getbep20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getbep20balance

Get the balance of a BEP20 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getbep20balanceRequest;
import org.openapis.openapi.models.operations.Getbep20balanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getbep20balanceRequest req = new Getbep20balanceRequest("0x1dDB2C0897daF18632662E71fdD2dbDC0eB3a9Ec", "0x9dB475371B5cC2913D3219f72e16a3F101339a05");            

            Getbep20balanceResponse res = sdk.infoRequests12.getbep20balance(req);

            if (res.getbep20balance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getbinancecoinbalance

Get the balance of an address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetbinancecoinbalanceRequest;
import org.openapis.openapi.models.operations.GetbinancecoinbalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetbinancecoinbalanceRequest req = new GetbinancecoinbalanceRequest("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            GetbinancecoinbalanceResponse res = sdk.infoRequests12.getbinancecoinbalance(req);

            if (res.getbinancecoinbalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getblock2

Get information of a specific block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getblock2Request;
import org.openapis.openapi.models.operations.Getblock2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getblock2Request req = new Getblock2Request("2000");            

            Getblock2Response res = sdk.infoRequests12.getblock2(req);

            if (res.getblock2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getgasprice2

Get gas price

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getgasprice2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getgasprice2Response res = sdk.infoRequests12.getgasprice2();

            if (res.getgasprice2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlastblocknumber2

Get the latest block number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getlastblocknumber2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getlastblocknumber2Response res = sdk.infoRequests12.getlastblocknumber2();

            if (res.getlastblocknumber2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnftowner2

Get the Owner of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getnftowner2Request;
import org.openapis.openapi.models.operations.Getnftowner2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getnftowner2Request req = new Getnftowner2Request("0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B", "403706");            

            Getnftowner2Response res = sdk.infoRequests12.getnftowner2(req);

            if (res.getnftowner2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnfturi2

Get the URI of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getnfturi2Request;
import org.openapis.openapi.models.operations.Getnfturi2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getnfturi2Request req = new Getnfturi2Request("0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B", "403706");            

            Getnfturi2Response res = sdk.infoRequests12.getnfturi2(req);

            if (res.getnfturi2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransaction2

Get info about a transaction

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransaction2Request;
import org.openapis.openapi.models.operations.Gettransaction2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransaction2Request req = new Gettransaction2Request("0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534");            

            Gettransaction2Response res = sdk.infoRequests12.gettransaction2(req);

            if (res.gettransaction2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransactionreceipt2

Get info about a transaction receipt

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransactionreceipt2Request;
import org.openapis.openapi.models.operations.Gettransactionreceipt2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransactionreceipt2Request req = new Gettransactionreceipt2Request("0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534");            

            Gettransactionreceipt2Response res = sdk.infoRequests12.gettransactionreceipt2(req);

            if (res.gettransactionreceipt2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
