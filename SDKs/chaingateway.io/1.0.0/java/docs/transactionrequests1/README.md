# transactionRequests1

### Available Operations

* [broadcasttransaction1](#broadcasttransaction1) - broadcastTransaction
* [senderc201](#senderc201) - sendERC20
* [senderc7211](#senderc7211) - sendERC721
* [sendtransaction1](#sendtransaction1) - sendTransaction

## broadcasttransaction1

Broadcast raw transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Broadcasttransaction1RequestBody;
import org.openapis.openapi.models.operations.Broadcasttransaction1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Broadcasttransaction1RequestBody req = new Broadcasttransaction1RequestBody() {{
                data = "0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85";
            }};            

            Broadcasttransaction1Response res = sdk.transactionRequests1.broadcasttransaction1(req);

            if (res.broadcasttransaction1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## senderc201

sendERC20

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Senderc201RequestBody;
import org.openapis.openapi.models.operations.Senderc201Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Senderc201RequestBody req = new Senderc201RequestBody() {{
                amount = 0.1;
                contractaddress = "0x55d398326f99059fF775485246999027B3197955";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                gas = 2645.55;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Senderc201Response res = sdk.transactionRequests1.senderc201(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## senderc7211

sendERC721

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Senderc7211RequestBody;
import org.openapis.openapi.models.operations.Senderc7211Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Senderc7211RequestBody req = new Senderc7211RequestBody() {{
                contractaddress = "0x55d398326f99059fF775485246999027B3197955";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
                tokenid = 123;
            }};            

            Senderc7211Response res = sdk.transactionRequests1.senderc7211(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendtransaction1

sendTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Sendtransaction1RequestBody;
import org.openapis.openapi.models.operations.Sendtransaction1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Sendtransaction1RequestBody req = new Sendtransaction1RequestBody() {{
                amount = "0.1";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                gas = 1863.32;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Sendtransaction1Response res = sdk.transactionRequests1.sendtransaction1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
