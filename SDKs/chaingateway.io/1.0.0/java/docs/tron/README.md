# tron

### Available Operations

* [getaccountresources](#getaccountresources) - getAccountResources
* [getblock3](#getblock3) - getBlock
* [getchainparameters](#getchainparameters) - getChainParameters
* [getlastblocknumber3](#getlastblocknumber3) - getLastBlockNumber
* [gettransaction3](#gettransaction3) - getTransaction
* [gettransactionreceipt3](#gettransactionreceipt3) - getTransactionReceipt
* [gettrc10balance](#gettrc10balance) - getTRC10Balance
* [gettrc20balance](#gettrc20balance) - getTRC20Balance
* [gettronbalance](#gettronbalance) - getTronBalance
* [listfailedipns3](#listfailedipns3) - listFailedIPNs
* [listsubscribedaddresses3](#listsubscribedaddresses3) - listSubscribedAddresses
* [listtransactionsbyaddress3](#listtransactionsbyaddress3) - ListTransactionsByAddress
* [newaddress3](#newaddress3) - newAddress
* [resendfailedipn3](#resendfailedipn3) - resendFailedIPN
* [sendtransaction3](#sendtransaction3) - sendTransaction
* [sendtrc10](#sendtrc10) - sendTRC10
* [sendtrc20](#sendtrc20) - sendTRC20
* [sendtrc721](#sendtrc721) - sendTRC721
* [subscribeaddress3](#subscribeaddress3) - subscribeAddress
* [unsubscribeaddress3](#unsubscribeaddress3) - unsubscribeAddress

## getaccountresources

getAccountResources

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetaccountresourcesRequest;
import org.openapis.openapi.models.operations.GetaccountresourcesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetaccountresourcesRequest req = new GetaccountresourcesRequest("TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt");            

            GetaccountresourcesResponse res = sdk.tron.getaccountresources(req);

            if (res.getaccountresources200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getblock3

getBlock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getblock3Request;
import org.openapis.openapi.models.operations.Getblock3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getblock3Request req = new Getblock3Request("300") {{
                requestBody = "esse".getBytes();
            }};            

            Getblock3Response res = sdk.tron.getblock3(req);

            if (res.getblock3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getchainparameters

getChainParameters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetchainparametersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetchainparametersResponse res = sdk.tron.getchainparameters();

            if (res.getchainparameters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlastblocknumber3

Get the latest block number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getlastblocknumber3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getlastblocknumber3Response res = sdk.tron.getlastblocknumber3();

            if (res.getlastblocknumber3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransaction3

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransaction3Request;
import org.openapis.openapi.models.operations.Gettransaction3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransaction3Request req = new Gettransaction3Request("dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9") {{
                requestBody = "ipsum".getBytes();
            }};            

            Gettransaction3Response res = sdk.tron.gettransaction3(req);

            if (res.gettransaction3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransactionreceipt3

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransactionreceipt3Request;
import org.openapis.openapi.models.operations.Gettransactionreceipt3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransactionreceipt3Request req = new Gettransactionreceipt3Request("dab6bb52e098232a2f115d56419124df1463ae60ac4f2effdb59984c550d8fa9");            

            Gettransactionreceipt3Response res = sdk.tron.gettransactionreceipt3(req);

            if (res.gettransactionreceipt3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettrc10balance

getTRC10Balance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettrc10balanceRequest;
import org.openapis.openapi.models.operations.Gettrc10balanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettrc10balanceRequest req = new Gettrc10balanceRequest("TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt", "10020000");            

            Gettrc10balanceResponse res = sdk.tron.gettrc10balance(req);

            if (res.gettrc10balance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettrc20balance

getTRC20Balance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettrc20balanceRequest;
import org.openapis.openapi.models.operations.Gettrc20balanceRequestBody;
import org.openapis.openapi.models.operations.Gettrc20balanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettrc20balanceRequest req = new Gettrc20balanceRequest("TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt", "TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ") {{
                requestBody = new Gettrc20balanceRequestBody() {{
                    contractaddress = "TGTE9Eo4hrkotStM1iGHSKA7gobxZxPuwQ";
                    tronaddress = "TK84ZqTuFHUbfGs5BY5rMAbkMJAxdgbYB5";
                }};;
            }};            

            Gettrc20balanceResponse res = sdk.tron.gettrc20balance(req);

            if (res.gettrc20balance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettronbalance

getTronBalance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GettronbalanceRequest;
import org.openapis.openapi.models.operations.GettronbalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GettronbalanceRequest req = new GettronbalanceRequest("TSU2h3XdoW53hNkts2dQoXbJSNP1uL4r7A");            

            GettronbalanceResponse res = sdk.tron.gettronbalance(req);

            if (res.gettronbalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listfailedipns3

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listfailedipns3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "excepturi".getBytes()            

            Listfailedipns3Response res = sdk.tron.listfailedipns3(req);

            if (res.listfailedipns3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listsubscribedaddresses3

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listsubscribedaddresses3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "aspernatur".getBytes()            

            Listsubscribedaddresses3Response res = sdk.tron.listsubscribedaddresses3(req);

            if (res.listsubscribedaddresses3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listtransactionsbyaddress3

Our API provides an endpoint for retrieving all transactions associated with a particular blockchain address. To use this endpoint, you will need to provide the wallet address as a parameter in the request.

Each page of results returned by this endpoint contains up to 100 entries, and you can use a paginator to navigate through the pages of results.

To use the paginator, you can include parameter in your request: "page" . The "page" parameter specifies which page of results to retrieve,

For example, to retrieve the first 100 transactions associated with a particular blockchain address, you would make a request to the following URL:

```
/addresses//transactions/1

```

If there are more than 100 transactions associated with the blockchain address, you can retrieve additional pages of results by incrementing the "page" parameter in your request. For example, to retrieve the next 100 transactions, you would make a request to the following URL:

```
/addresses//transactions/2
```

By using the paginator, you can retrieve all transactions associated with a particular blockchain address, regardless of the total number of transactions in the blockchain.

each request tells you the max pages within the Request in the **max_pages** field

`"max_pages": 515`

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listtransactionsbyaddress3Request;
import org.openapis.openapi.models.operations.Listtransactionsbyaddress3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listtransactionsbyaddress3Request req = new Listtransactionsbyaddress3Request("0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5", "1");            

            Listtransactionsbyaddress3Response res = sdk.tron.listtransactionsbyaddress3(req);

            if (res.listtransactionsbyaddress3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newaddress3

newAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Newaddress3RequestBody;
import org.openapis.openapi.models.operations.Newaddress3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Newaddress3RequestBody req = new Newaddress3RequestBody() {{
                password = "test123";
            }};            

            Newaddress3Response res = sdk.tron.newaddress3(req);

            if (res.newaddress3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendfailedipn3

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Resendfailedipn3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("ad", "natus");
            }}            

            Resendfailedipn3Response res = sdk.tron.resendfailedipn3(req);

            if (res.resendfailedipn3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            Sendtransaction3Response res = sdk.tron.sendtransaction3(req);

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

            Sendtrc10Response res = sdk.tron.sendtrc10(req);

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

            Sendtrc20Response res = sdk.tron.sendtrc20(req);

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

            org.openapis.openapi.models.. req = "sed".getBytes()            

            Sendtrc721Response res = sdk.tron.sendtrc721(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeaddress3

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Subscribeaddress3RequestBody;
import org.openapis.openapi.models.operations.Subscribeaddress3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Subscribeaddress3RequestBody req = new Subscribeaddress3RequestBody() {{
                from = "TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt";
                url = "https://yoururl.com/ipnreceiver.php";
            }};            

            Subscribeaddress3Response res = sdk.tron.subscribeaddress3(req);

            if (res.subscribeaddress3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeaddress3

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Unsubscribeaddress3Request;
import org.openapis.openapi.models.operations.Unsubscribeaddress3RequestBody;
import org.openapis.openapi.models.operations.Unsubscribeaddress3Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Unsubscribeaddress3Request req = new Unsubscribeaddress3Request("624d7db34b026365cc22356b") {{
                requestBody = new Unsubscribeaddress3RequestBody() {{
                    id = "624d80774b026365cc22356e";
                }};;
            }};            

            Unsubscribeaddress3Response res = sdk.tron.unsubscribeaddress3(req);

            if (res.unsubscribeaddress3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
