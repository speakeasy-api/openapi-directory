# infoRequests123

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

            GetaccountresourcesResponse res = sdk.infoRequests123.getaccountresources(req);

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
                requestBody = "molestiae".getBytes();
            }};            

            Getblock3Response res = sdk.infoRequests123.getblock3(req);

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

            GetchainparametersResponse res = sdk.infoRequests123.getchainparameters();

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

            Getlastblocknumber3Response res = sdk.infoRequests123.getlastblocknumber3();

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
                requestBody = "quod".getBytes();
            }};            

            Gettransaction3Response res = sdk.infoRequests123.gettransaction3(req);

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

            Gettransactionreceipt3Response res = sdk.infoRequests123.gettransactionreceipt3(req);

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

            Gettrc10balanceResponse res = sdk.infoRequests123.gettrc10balance(req);

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

            Gettrc20balanceResponse res = sdk.infoRequests123.gettrc20balance(req);

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

            GettronbalanceResponse res = sdk.infoRequests123.gettronbalance(req);

            if (res.gettronbalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
