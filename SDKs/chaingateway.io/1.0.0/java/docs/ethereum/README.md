# ethereum

### Available Operations

* [broadcasttransaction](#broadcasttransaction) - broadcastTransaction
* [deleteaddress](#deleteaddress) - deleteAddress
* [exportaddress](#exportaddress) - exportAddress
* [getallerc20balance](#getallerc20balance) - getAllERC20Balance
* [getblock](#getblock) - getBlock
* [geterc20](#geterc20) - getERC20
* [getethereumbalance](#getethereumbalance) - getEthereumBalance
* [getgasprice](#getgasprice) - getGasPrice
* [getlastblocknumber](#getlastblocknumber) - getLastBlockNumber
* [getnftowner](#getnftowner) - getNFTOwner
* [getnfturi](#getnfturi) - getNFTUri
* [gettransaction](#gettransaction) - getTransaction
* [gettransactionreceipt](#gettransactionreceipt) - getTransactionReceipt
* [importaddress](#importaddress) - importAddress
* [listaddresses](#listaddresses) - listAddresses
* [listfailedipns](#listfailedipns) - listFailedIPNs
* [listipnsbywebhookid](#listipnsbywebhookid) - listIPNsByWebhookId
* [listsubscribedaddresses](#listsubscribedaddresses) - listSubscribedAddresses
* [listtransactionsbyaddress](#listtransactionsbyaddress) - ListTransactionsByAddress
* [newaddress](#newaddress) - newAddress
* [resendfailedipn](#resendfailedipn) - resendFailedIPN
* [senderc20](#senderc20) - sendERC20
* [senderc721](#senderc721) - sendERC721
* [sendtransaction](#sendtransaction) - sendTransaction
* [subscribeaddress](#subscribeaddress) - subscribeAddress
* [unsubscribeaddress](#unsubscribeaddress) - unsubscribeAddress

## broadcasttransaction

Broadcast raw transactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BroadcasttransactionRequestBody;
import org.openapis.openapi.models.operations.BroadcasttransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BroadcasttransactionRequestBody req = new BroadcasttransactionRequestBody() {{
                data = "0xf86b0685012a05f20082520894dfa04096652804362e4b7ae31835416974271e298609184e72a000808194a086277b0f2d7df91c9ce580171cd7f7be6e2c298727944a13fb40e5e9406ccb61a076105cefee8def061024dfb333a1bd47f629b52aae6621d2f2f39a0dccc3ac85";
            }};            

            BroadcasttransactionResponse res = sdk.ethereum.broadcasttransaction(req);

            if (res.broadcasttransaction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            DeleteaddressResponse res = sdk.ethereum.deleteaddress(req);

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

            ExportaddressResponse res = sdk.ethereum.exportaddress(req);

            if (res.exportaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getallerc20balance

Get the balance of an ERC20 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getallerc20balanceRequest;
import org.openapis.openapi.models.operations.Getallerc20balanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getallerc20balanceRequest req = new Getallerc20balanceRequest("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce", "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            Getallerc20balanceResponse res = sdk.ethereum.getallerc20balance(req);

            if (res.getallerc20balance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getblock

Get information of a specific block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetblockRequest;
import org.openapis.openapi.models.operations.GetblockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetblockRequest req = new GetblockRequest("0xd9186b67ae0d3ee0777a607eeb195c5a9fb0affcd78ddcd7481efae4b258c9f5");            

            GetblockResponse res = sdk.ethereum.getblock(req);

            if (res.getblock200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## geterc20

Get information about an ERC20 token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Geterc20Request;
import org.openapis.openapi.models.operations.Geterc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Geterc20Request req = new Geterc20Request("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            Geterc20Response res = sdk.ethereum.geterc20(req);

            if (res.geterc20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getethereumbalance

Get the balance of an address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetethereumbalanceRequest;
import org.openapis.openapi.models.operations.GetethereumbalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetethereumbalanceRequest req = new GetethereumbalanceRequest("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            GetethereumbalanceResponse res = sdk.ethereum.getethereumbalance(req);

            if (res.getethereumbalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getgasprice

Get gas price

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetgaspriceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetgaspriceResponse res = sdk.ethereum.getgasprice();

            if (res.getgasprice200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlastblocknumber

Get the latest block number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetlastblocknumberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "deserunt".getBytes()            

            GetlastblocknumberResponse res = sdk.ethereum.getlastblocknumber(req);

            if (res.getlastblocknumber200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnftowner

Get the Owner of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetnftownerRequest;
import org.openapis.openapi.models.operations.GetnftownerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetnftownerRequest req = new GetnftownerRequest("0x9db475371b5cc2913d3219f72e16a3f101339a05", "374");            

            GetnftownerResponse res = sdk.ethereum.getnftowner(req);

            if (res.getnftowner200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnfturi

Get the URI of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetnfturiRequest;
import org.openapis.openapi.models.operations.GetnfturiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetnfturiRequest req = new GetnfturiRequest("0x9db475371b5cc2913d3219f72e16a3f101339a05", "374");            

            GetnfturiResponse res = sdk.ethereum.getnfturi(req);

            if (res.getnfturi200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransaction

Get info about a transaction

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GettransactionRequest;
import org.openapis.openapi.models.operations.GettransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GettransactionRequest req = new GettransactionRequest("0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037");            

            GettransactionResponse res = sdk.ethereum.gettransaction(req);

            if (res.gettransaction200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransactionreceipt

Get info about a transaction receipt

You can choose if you want to get the Transaction encoded or decoded by add /decoded to your request. See examlpes for details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GettransactionreceiptRequest;
import org.openapis.openapi.models.operations.GettransactionreceiptResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GettransactionreceiptRequest req = new GettransactionreceiptRequest("0x0b361c13214a0d498b69d6ea86039fdf8e578f4b6e3b28db52a422f8ed3ea037");            

            GettransactionreceiptResponse res = sdk.ethereum.gettransactionreceipt(req);

            if (res.gettransactionreceipt200ApplicationJSONObject != null) {
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

            ImportaddressResponse res = sdk.ethereum.importaddress(req);

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

            ListaddressesResponse res = sdk.ethereum.listaddresses();

            if (res.listaddresses200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listfailedipns

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListfailedipnsRequest;
import org.openapis.openapi.models.operations.ListfailedipnsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListfailedipnsRequest req = new ListfailedipnsRequest("626407c62e5e8235ca561dce");            

            ListfailedipnsResponse res = sdk.ethereum.listfailedipns(req);

            if (res.listfailedipns200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listipnsbywebhookid

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListipnsbywebhookidResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListipnsbywebhookidResponse res = sdk.ethereum.listipnsbywebhookid();

            if (res.listipnsbywebhookid200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listsubscribedaddresses

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListsubscribedaddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListsubscribedaddressesResponse res = sdk.ethereum.listsubscribedaddresses();

            if (res.listsubscribedaddresses200ApplicationJSONObject != null) {
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

            ListtransactionsbyaddressResponse res = sdk.ethereum.listtransactionsbyaddress(req);

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

            NewaddressResponse res = sdk.ethereum.newaddress(req);

            if (res.newaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendfailedipn

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResendfailedipnRequest;
import org.openapis.openapi.models.operations.ResendfailedipnResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResendfailedipnRequest req = new ResendfailedipnRequest("62640817eb594da78c7bee00") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "repellendus");
                }};
            }};            

            ResendfailedipnResponse res = sdk.ethereum.resendfailedipn(req);

            if (res.resendfailedipn200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## senderc20

sendERC20

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Senderc20RequestBody;
import org.openapis.openapi.models.operations.Senderc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Senderc20RequestBody req = new Senderc20RequestBody() {{
                amount = 0.1;
                contractaddress = "0x55d398326f99059fF775485246999027B3197955";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                gas = 9571.56;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Senderc20Response res = sdk.ethereum.senderc20(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## senderc721

sendERC721

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Senderc721RequestBody;
import org.openapis.openapi.models.operations.Senderc721Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Senderc721RequestBody req = new Senderc721RequestBody() {{
                contractaddress = "0x55d398326f99059fF775485246999027B3197955";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
                tokenid = 123;
            }};            

            Senderc721Response res = sdk.ethereum.senderc721(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendtransaction

sendTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendtransactionRequestBody;
import org.openapis.openapi.models.operations.SendtransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SendtransactionRequestBody req = new SendtransactionRequestBody() {{
                amount = "0.1";
                from = "0xa1f36016221d48ce7f15cde7b826a4fbe09bacce";
                gas = 7781.57;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            SendtransactionResponse res = sdk.ethereum.sendtransaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeaddress

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.

You can choose one or more from following filter criterias

| **Parameter** | **Description** |
| --- | --- |
| from | ethereum address |
| to | ethereum address |
| contractaddress | contract address |
| tokenid | token id |

You also need to dpecify the parameter "type". you can choose between \['ETH', 'ERC20', 'ERC721', null\]

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SubscribeaddressRequestBody;
import org.openapis.openapi.models.operations.SubscribeaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SubscribeaddressRequestBody req = new SubscribeaddressRequestBody() {{
                to = "0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203";
                type = "ETH";
                url = "https://example.com/ipnreceiver.php";
            }};            

            SubscribeaddressResponse res = sdk.ethereum.subscribeaddress(req);

            if (res.subscribeaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeaddress

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnsubscribeaddressRequest;
import org.openapis.openapi.models.operations.UnsubscribeaddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UnsubscribeaddressRequest req = new UnsubscribeaddressRequest("626407c62e5e8235ca561dce");            

            UnsubscribeaddressResponse res = sdk.ethereum.unsubscribeaddress(req);

            if (res.unsubscribeaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
