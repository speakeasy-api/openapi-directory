# infoRequests1234

### Available Operations

* [getblock4](#getblock4) - getBlock
* [getblockchaininfo](#getblockchaininfo) - getBlockchaIninfo
* [getfees](#getfees) - getFees
* [getlastblocknumber4](#getlastblocknumber4) - getLastBlockNumber
* [gettransaction4](#gettransaction4) - getTransaction

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
                requestBody = "quod".getBytes();
            }};            

            Getblock4Response res = sdk.infoRequests1234.getblock4(req);

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

            GetblockchaininfoResponse res = sdk.infoRequests1234.getblockchaininfo();

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

            GetfeesResponse res = sdk.infoRequests1234.getfees();

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

            Getlastblocknumber4Response res = sdk.infoRequests1234.getlastblocknumber4();

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
                requestBody = "esse".getBytes();
            }};            

            Gettransaction4Response res = sdk.infoRequests1234.gettransaction4(req);

            if (res.gettransaction4200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
