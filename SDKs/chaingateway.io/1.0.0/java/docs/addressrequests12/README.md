# addressRequests12

### Available Operations

* [deleteaddress2](#deleteaddress2) - deleteAddress
* [exportaddress2](#exportaddress2) - exportAddress
* [importaddress2](#importaddress2) - importAddress
* [listaddress](#listaddress) - listAddress
* [listtransactionsbyaddress2](#listtransactionsbyaddress2) - ListTransactionsByAddress
* [newaddress2](#newaddress2) - newAddress

## deleteaddress2

deleteAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Deleteaddress2Request;
import org.openapis.openapi.models.operations.Deleteaddress2RequestBody;
import org.openapis.openapi.models.operations.Deleteaddress2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Deleteaddress2Request req = new Deleteaddress2Request("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce") {{
                requestBody = new Deleteaddress2RequestBody() {{
                    password = "test123";
                }};;
            }};            

            Deleteaddress2Response res = sdk.addressRequests12.deleteaddress2(req);

            if (res.deleteaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportaddress2

exportAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Exportaddress2Request;
import org.openapis.openapi.models.operations.Exportaddress2RequestBody;
import org.openapis.openapi.models.operations.Exportaddress2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Exportaddress2Request req = new Exportaddress2Request("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce") {{
                requestBody = new Exportaddress2RequestBody() {{
                    password = "test123";
                }};;
            }};            

            Exportaddress2Response res = sdk.addressRequests12.exportaddress2(req);

            if (res.exportaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importaddress2

importAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Importaddress2RequestBody;
import org.openapis.openapi.models.operations.Importaddress2RequestBodyContent;
import org.openapis.openapi.models.operations.Importaddress2RequestBodyContentCrypto;
import org.openapis.openapi.models.operations.Importaddress2RequestBodyContentCryptoCipherparams;
import org.openapis.openapi.models.operations.Importaddress2RequestBodyContentCryptoKdfparams;
import org.openapis.openapi.models.operations.Importaddress2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Importaddress2RequestBody req = new Importaddress2RequestBody() {{
                content = new Importaddress2RequestBodyContent() {{
                    address = "4fb45889cd2d3348348e39c613c41bf1dc43760a";
                    crypto = new Importaddress2RequestBodyContentCrypto() {{
                        cipher = "aes-128-ctr";
                        cipherparams = new Importaddress2RequestBodyContentCryptoCipherparams() {{
                            iv = "a2b3022a9d7d76ade60dd70e5405cc09";
                        }};;
                        ciphertext = "027fbbe9d7b91b1a4a3afddcb27a07ac5e7fff550fd167452a6345a961f21a4d";
                        kdf = "scrypt";
                        kdfparams = new Importaddress2RequestBodyContentCryptoKdfparams() {{
                            dklen = 32;
                            n = 131056;
                            p = 1;
                            r = 6;
                            salt = "fd84f455da4ad1325cf5bc7beb06bf3052919278c76373a67507aaa68bcebab3";
                        }};;
                        mac = "d46d36b6facd1f3f5549f01cb5c87de0c01b68b6445410259128c52d515a7b6d";
                    }};;
                    id = "f0449f3f-1ef2-5fb9-bf09-20bb72c47167";
                    version = 3;
                }};;
                filename = "UTC--2020-05-01T12-30-12.020Z--4fb45889cd2d3348348e39c613c41bf1dc43760a";
                password = "padN39QkRA2hJ";
            }};            

            Importaddress2Response res = sdk.addressRequests12.importaddress2(req);

            if (res.importaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listaddress

listAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListaddressResponse res = sdk.addressRequests12.listaddress();

            if (res.listaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listtransactionsbyaddress2

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
import org.openapis.openapi.models.operations.Listtransactionsbyaddress2Request;
import org.openapis.openapi.models.operations.Listtransactionsbyaddress2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listtransactionsbyaddress2Request req = new Listtransactionsbyaddress2Request("0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5", "1");            

            Listtransactionsbyaddress2Response res = sdk.addressRequests12.listtransactionsbyaddress2(req);

            if (res.listtransactionsbyaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newaddress2

newAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Newaddress2RequestBody;
import org.openapis.openapi.models.operations.Newaddress2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Newaddress2RequestBody req = new Newaddress2RequestBody() {{
                password = "test123";
            }};            

            Newaddress2Response res = sdk.addressRequests12.newaddress2(req);

            if (res.newaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
