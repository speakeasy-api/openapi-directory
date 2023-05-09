# infoRequests1

### Available Operations

* [getblock1](#getblock1) - getBlock
* [geterc201](#geterc201) - getERC20
* [geterc20balance1](#geterc20balance1) - getERC20Balance
* [getgasprice1](#getgasprice1) - getGasPrice
* [getlastblocknumber1](#getlastblocknumber1) - getLastBlockNumber
* [getnftowner1](#getnftowner1) - getNFTOwner
* [getnfturi1](#getnfturi1) - getNFTUri
* [getpolygonbalance](#getpolygonbalance) - getPolygonBalance
* [gettransaction1](#gettransaction1) - getTransaction
* [gettransactionreceipt1](#gettransactionreceipt1) - getTransactionReceipt

## getblock1

Get information of a specific block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getblock1Request;
import org.openapis.openapi.models.operations.Getblock1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getblock1Request req = new Getblock1Request("0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5");            

            Getblock1Response res = sdk.infoRequests1.getblock1(req);

            if (res.getblock1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## geterc201

Get information about an ERC20 token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Geterc201Request;
import org.openapis.openapi.models.operations.Geterc201Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Geterc201Request req = new Geterc201Request("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            Geterc201Response res = sdk.infoRequests1.geterc201(req);

            if (res.geterc201200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## geterc20balance1

Get the balance of an ERC20 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Geterc20balance1Request;
import org.openapis.openapi.models.operations.Geterc20balance1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Geterc20balance1Request req = new Geterc20balance1Request("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce", "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            Geterc20balance1Response res = sdk.infoRequests1.geterc20balance1(req);

            if (res.geterc20balance1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getgasprice1

Get gas price

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getgasprice1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getgasprice1Response res = sdk.infoRequests1.getgasprice1();

            if (res.getgasprice1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlastblocknumber1

Get the latest block number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getlastblocknumber1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "at".getBytes()            

            Getlastblocknumber1Response res = sdk.infoRequests1.getlastblocknumber1(req);

            if (res.getlastblocknumber1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnftowner1

Get the Owner of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getnftowner1Request;
import org.openapis.openapi.models.operations.Getnftowner1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getnftowner1Request req = new Getnftowner1Request("0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5", "374");            

            Getnftowner1Response res = sdk.infoRequests1.getnftowner1(req);

            if (res.getnftowner1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnfturi1

Get the URI of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getnfturi1Request;
import org.openapis.openapi.models.operations.Getnfturi1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getnfturi1Request req = new Getnfturi1Request("at", "maiores");            

            Getnfturi1Response res = sdk.infoRequests1.getnfturi1(req);

            if (res.getnfturi1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getpolygonbalance

Get the balance of an address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetpolygonbalanceRequest;
import org.openapis.openapi.models.operations.GetpolygonbalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetpolygonbalanceRequest req = new GetpolygonbalanceRequest("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            GetpolygonbalanceResponse res = sdk.infoRequests1.getpolygonbalance(req);

            if (res.getpolygonbalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransaction1

Get info about a transaction

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransaction1Request;
import org.openapis.openapi.models.operations.Gettransaction1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransaction1Request req = new Gettransaction1Request("0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037");            

            Gettransaction1Response res = sdk.infoRequests1.gettransaction1(req);

            if (res.gettransaction1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransactionreceipt1

Get info about a transaction receipt

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransactionreceipt1Request;
import org.openapis.openapi.models.operations.Gettransactionreceipt1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransactionreceipt1Request req = new Gettransactionreceipt1Request("0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037");            

            Gettransactionreceipt1Response res = sdk.infoRequests1.gettransactionreceipt1(req);

            if (res.gettransactionreceipt1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
