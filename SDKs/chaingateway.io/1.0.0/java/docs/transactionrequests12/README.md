# transactionRequests12

### Available Operations

* [broadcasttransaction2](#broadcasttransaction2) - broadcastTransaction
* [sendbep20](#sendbep20) - sendBEP20
* [sendbep721](#sendbep721) - sendBEP721
* [sendtransaction2](#sendtransaction2) - sendTransaction

## broadcasttransaction2

Broadcast raw transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Broadcasttransaction2RequestBody;
import org.openapis.openapi.models.operations.Broadcasttransaction2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Broadcasttransaction2RequestBody req = new Broadcasttransaction2RequestBody() {{
                data = "0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85";
            }};            

            Broadcasttransaction2Response res = sdk.transactionRequests12.broadcasttransaction2(req);

            if (res.broadcasttransaction2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendbep20

sendBEP20

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendbep20RequestBody;
import org.openapis.openapi.models.operations.Sendbep20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendbep20RequestBody req = new Sendbep20RequestBody() {{
                amount = "0.1";
                contractaddress = "0x55d398326f99059fF775485246999027B3197955";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                gas = 7742.34;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Sendbep20Response res = sdk.transactionRequests12.sendbep20(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendbep721

sendBEP721

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendbep721RequestBody;
import org.openapis.openapi.models.operations.Sendbep721Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendbep721RequestBody req = new Sendbep721RequestBody() {{
                contractaddress = "0x55d398326f99059fF775485246999027B3197955";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
                tokenid = 123;
            }};            

            Sendbep721Response res = sdk.transactionRequests12.sendbep721(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendtransaction2

sendTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtransaction2RequestBody;
import org.openapis.openapi.models.operations.Sendtransaction2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendtransaction2RequestBody req = new Sendtransaction2RequestBody() {{
                amount = "0.1";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Sendtransaction2Response res = sdk.transactionRequests12.sendtransaction2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
