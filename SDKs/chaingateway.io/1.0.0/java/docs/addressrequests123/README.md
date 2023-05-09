# addressRequests123

### Available Operations

* [listtransactionsbyaddress3](#listtransactionsbyaddress3) - ListTransactionsByAddress
* [newaddress3](#newaddress3) - newAddress

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

            Listtransactionsbyaddress3Response res = sdk.addressRequests123.listtransactionsbyaddress3(req);

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

            Newaddress3Response res = sdk.addressRequests123.newaddress3(req);

            if (res.newaddress3200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
