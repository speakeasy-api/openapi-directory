# addressRequests1

### Available Operations

* [deleteaddress1](#deleteaddress1) - deleteAddress
* [exportaddress1](#exportaddress1) - exportAddress
* [importaddress1](#importaddress1) - importAddress
* [listaddresses1](#listaddresses1) - listAddresses
* [listtransactionsbyaddress1](#listtransactionsbyaddress1) - ListTransactionsByAddress
* [newaddress1](#newaddress1) - newAddress

## deleteaddress1

deleteAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Deleteaddress1Request;
import org.openapis.openapi.models.operations.Deleteaddress1RequestBody;
import org.openapis.openapi.models.operations.Deleteaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Deleteaddress1Request req = new Deleteaddress1Request("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0") {{
                requestBody = new Deleteaddress1RequestBody() {{
                    ethereumaddress = "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0";
                    password = "test123";
                }};;
            }};            

            Deleteaddress1Response res = sdk.addressRequests1.deleteaddress1(req);

            if (res.deleteaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportaddress1

exportAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Exportaddress1Request;
import org.openapis.openapi.models.operations.Exportaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Exportaddress1Request req = new Exportaddress1Request("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0") {{
                requestBody = "corrupti".getBytes();
            }};            

            Exportaddress1Response res = sdk.addressRequests1.exportaddress1(req);

            if (res.exportaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importaddress1

importAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Importaddress1RequestBody;
import org.openapis.openapi.models.operations.Importaddress1RequestBodyContent;
import org.openapis.openapi.models.operations.Importaddress1RequestBodyContentCrypto;
import org.openapis.openapi.models.operations.Importaddress1RequestBodyContentCryptoCipherparams;
import org.openapis.openapi.models.operations.Importaddress1RequestBodyContentCryptoKdfparams;
import org.openapis.openapi.models.operations.Importaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Importaddress1RequestBody req = new Importaddress1RequestBody() {{
                content = new Importaddress1RequestBodyContent() {{
                    address = "71892889ed4d79d88ab6ea3783b571b8ece9bef4";
                    crypto = new Importaddress1RequestBodyContentCrypto() {{
                        cipher = "aes-128-ctr";
                        cipherparams = new Importaddress1RequestBodyContentCryptoCipherparams() {{
                            iv = "76e6f2497b9f2a8e024fc752a5418a6d";
                        }};;
                        ciphertext = "9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f";
                        kdf = "scrypt";
                        kdfparams = new Importaddress1RequestBodyContentCryptoKdfparams() {{
                            dklen = 32;
                            n = 131072;
                            p = 1;
                            r = 8;
                            salt = "d11d996a7cc4bfad730d4c9b9057eff2c0fb3940b5bfc59db62ae218c14a54f4";
                        }};;
                        mac = "dcc342bbbbb8eea97c89b47bafc23de568fc1a48e0bd21ae8d776a95c4704ac9";
                    }};;
                    id = "85b790ff-408e-42b8-b123-bec9523964dc";
                    version = 3;
                }};;
                filename = "UTC--2020-09-19T10-42-26.196Z--71892889ed4d79d88ab6ea3783b571b8ece9bef4";
                password = "padN39QkRA2hJ";
            }};            

            Importaddress1Response res = sdk.addressRequests1.importaddress1(req);

            if (res.importaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listaddresses1

listAddresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listaddresses1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listaddresses1Response res = sdk.addressRequests1.listaddresses1();

            if (res.listaddresses1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listtransactionsbyaddress1

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
import org.openapis.openapi.models.operations.Listtransactionsbyaddress1Request;
import org.openapis.openapi.models.operations.Listtransactionsbyaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listtransactionsbyaddress1Request req = new Listtransactionsbyaddress1Request("0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5", "1");            

            Listtransactionsbyaddress1Response res = sdk.addressRequests1.listtransactionsbyaddress1(req);

            if (res.listtransactionsbyaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newaddress1

newAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Newaddress1RequestBody;
import org.openapis.openapi.models.operations.Newaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Newaddress1RequestBody req = new Newaddress1RequestBody() {{
                password = "test123";
            }};            

            Newaddress1Response res = sdk.addressRequests1.newaddress1(req);

            if (res.newaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
