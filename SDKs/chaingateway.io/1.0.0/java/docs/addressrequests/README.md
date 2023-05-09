# addressRequests

### Available Operations

* [deleteaddress](#deleteaddress) - deleteAddress
* [exportaddress](#exportaddress) - exportAddress
* [importaddress](#importaddress) - importAddress
* [listaddresses](#listaddresses) - listAddresses
* [listtransactionsbyaddress](#listtransactionsbyaddress) - ListTransactionsByAddress
* [newaddress](#newaddress) - newAddress

## deleteaddress

deleteAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteaddressRequest;
import org.openapis.openapi.models.operations.DeleteaddressRequestBody;
import org.openapis.openapi.models.operations.DeleteaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteaddressRequest req = new DeleteaddressRequest("0xfa343ee01667869cfb409b24ae33f7ce8b110eb0") {{
                requestBody = new DeleteaddressRequestBody() {{
                    ethereumaddress = "0xfa343ee01667869cfb409b24ae33f7ce8b110eb0";
                    password = "test123";
                }};;
            }};            

            DeleteaddressResponse res = sdk.addressRequests.deleteaddress(req);

            if (res.deleteaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportaddress

exportAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportaddressRequest;
import org.openapis.openapi.models.operations.ExportaddressRequestBody;
import org.openapis.openapi.models.operations.ExportaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportaddressRequest req = new ExportaddressRequest("0xacc767f4042360c5f08c7b98bac8e66a5c679cef") {{
                requestBody = new ExportaddressRequestBody() {{
                    password = "test123";
                }};;
            }};            

            ExportaddressResponse res = sdk.addressRequests.exportaddress(req);

            if (res.exportaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importaddress

importAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportaddressRequestBody;
import org.openapis.openapi.models.operations.ImportaddressRequestBodyContent;
import org.openapis.openapi.models.operations.ImportaddressRequestBodyContentCrypto;
import org.openapis.openapi.models.operations.ImportaddressRequestBodyContentCryptoCipherparams;
import org.openapis.openapi.models.operations.ImportaddressRequestBodyContentCryptoKdfparams;
import org.openapis.openapi.models.operations.ImportaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportaddressRequestBody req = new ImportaddressRequestBody() {{
                content = new ImportaddressRequestBodyContent() {{
                    address = "71892889ed4d79d88ab6ea3783b571b8ece9bef4";
                    crypto = new ImportaddressRequestBodyContentCrypto() {{
                        cipher = "aes-128-ctr";
                        cipherparams = new ImportaddressRequestBodyContentCryptoCipherparams() {{
                            iv = "76e6f2497b9f2a8e024fc752a5418a6d";
                        }};;
                        ciphertext = "9d74262517b984f9b0560b8f23b5e3340f7be0f56b70cd91ff445dcaf5b1968f";
                        kdf = "scrypt";
                        kdfparams = new ImportaddressRequestBodyContentCryptoKdfparams() {{
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

            ImportaddressResponse res = sdk.addressRequests.importaddress(req);

            if (res.importaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listaddresses

listAddresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListaddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListaddressesResponse res = sdk.addressRequests.listaddresses();

            if (res.listaddresses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listtransactionsbyaddress

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
import org.openapis.openapi.models.operations.ListtransactionsbyaddressRequest;
import org.openapis.openapi.models.operations.ListtransactionsbyaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListtransactionsbyaddressRequest req = new ListtransactionsbyaddressRequest("0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5", "1");            

            ListtransactionsbyaddressResponse res = sdk.addressRequests.listtransactionsbyaddress(req);

            if (res.listtransactionsbyaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newaddress

newAddress

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewaddressRequestBody;
import org.openapis.openapi.models.operations.NewaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewaddressRequestBody req = new NewaddressRequestBody() {{
                password = "test123";
            }};            

            NewaddressResponse res = sdk.addressRequests.newaddress(req);

            if (res.newaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
