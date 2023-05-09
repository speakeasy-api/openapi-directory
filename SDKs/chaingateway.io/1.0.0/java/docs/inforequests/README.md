# infoRequests

### Available Operations

* [getallerc20balance](#getallerc20balance) - getAllERC20Balance
* [getblock](#getblock) - getBlock
* [geterc20](#geterc20) - getERC20
* [getethereumbalance](#getethereumbalance) - getEthereumBalance
* [getgasprice](#getgasprice) - getGasPrice
* [getlastblocknumber](#getlastblocknumber) - getLastBlockNumber
* [getnftowner](#getnftowner) - getNFTOwner
* [getnfturi](#getnfturi) - getNFTUri
* [gettransaction](#gettransaction) - getTransaction
* [gettransactionreceipt](#gettransactionreceipt) - getTransactionReceipt

## getallerc20balance

Get the balance of an ERC20 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getallerc20balanceRequest;
import org.openapis.openapi.models.operations.Getallerc20balanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getallerc20balanceRequest req = new Getallerc20balanceRequest("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce", "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            Getallerc20balanceResponse res = sdk.infoRequests.getallerc20balance(req);

            if (res.getallerc20balance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getblock

Get information of a specific block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetblockRequest;
import org.openapis.openapi.models.operations.GetblockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetblockRequest req = new GetblockRequest("0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5");            

            GetblockResponse res = sdk.infoRequests.getblock(req);

            if (res.getblock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## geterc20

Get information about an ERC20 token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Geterc20Request;
import org.openapis.openapi.models.operations.Geterc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Geterc20Request req = new Geterc20Request("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            Geterc20Response res = sdk.infoRequests.geterc20(req);

            if (res.geterc20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getethereumbalance

Get the balance of an address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetethereumbalanceRequest;
import org.openapis.openapi.models.operations.GetethereumbalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetethereumbalanceRequest req = new GetethereumbalanceRequest("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            GetethereumbalanceResponse res = sdk.infoRequests.getethereumbalance(req);

            if (res.getethereumbalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getgasprice

Get gas price

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetgaspriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetgaspriceResponse res = sdk.infoRequests.getgasprice();

            if (res.getgasprice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlastblocknumber

Get the latest block number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetlastblocknumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "odit".getBytes()            

            GetlastblocknumberResponse res = sdk.infoRequests.getlastblocknumber(req);

            if (res.getlastblocknumber200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnftowner

Get the Owner of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetnftownerRequest;
import org.openapis.openapi.models.operations.GetnftownerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetnftownerRequest req = new GetnftownerRequest("0x9db475371b5cc2913d3219f72e16a3f101339a05", "374");            

            GetnftownerResponse res = sdk.infoRequests.getnftowner(req);

            if (res.getnftowner200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnfturi

Get the URI of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetnfturiRequest;
import org.openapis.openapi.models.operations.GetnfturiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetnfturiRequest req = new GetnfturiRequest("0x9db475371b5cc2913d3219f72e16a3f101339a05", "374");            

            GetnfturiResponse res = sdk.infoRequests.getnfturi(req);

            if (res.getnfturi200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransaction

Get info about a transaction

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GettransactionRequest;
import org.openapis.openapi.models.operations.GettransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GettransactionRequest req = new GettransactionRequest("0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037");            

            GettransactionResponse res = sdk.infoRequests.gettransaction(req);

            if (res.gettransaction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransactionreceipt

Get info about a transaction receipt

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GettransactionreceiptRequest;
import org.openapis.openapi.models.operations.GettransactionreceiptResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GettransactionreceiptRequest req = new GettransactionreceiptRequest("0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037");            

            GettransactionreceiptResponse res = sdk.infoRequests.gettransactionreceipt(req);

            if (res.gettransactionreceipt200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
