# binanceSmartChain

### Available Operations

* [broadcasttransaction2](#broadcasttransaction2) - broadcastTransaction
* [deleteaddress2](#deleteaddress2) - deleteAddress
* [exportaddress2](#exportaddress2) - exportAddress
* [getbep20](#getbep20) - getBEP20
* [getbep20balance](#getbep20balance) - getBEP20Balance
* [getbinancecoinbalance](#getbinancecoinbalance) - getBinanceCoinBalance
* [getblock2](#getblock2) - getBlock
* [getgasprice2](#getgasprice2) - getGasPrice
* [getlastblocknumber2](#getlastblocknumber2) - getLastBlocknumber
* [getnftowner2](#getnftowner2) - getNFTOwner
* [getnfturi2](#getnfturi2) - getNFTUri
* [gettransaction2](#gettransaction2) - getTransaction
* [gettransactionreceipt2](#gettransactionreceipt2) - getTransactionReceipt
* [importaddress2](#importaddress2) - importAddress
* [listaddress](#listaddress) - listAddress
* [listfailedipns2](#listfailedipns2) - listFailedIPNs
* [listsubscribedaddresses2](#listsubscribedaddresses2) - listSubscribedAddresses
* [listtransactionsbyaddress2](#listtransactionsbyaddress2) - ListTransactionsByAddress
* [newaddress2](#newaddress2) - newAddress
* [resendfailedipn2](#resendfailedipn2) - resendFailedIPN
* [sendbep20](#sendbep20) - sendBEP20
* [sendbep721](#sendbep721) - sendBEP721
* [sendtransaction2](#sendtransaction2) - sendTransaction
* [subscribeaddress2](#subscribeaddress2) - subscribeAddress
* [unsubscribeaddress2](#unsubscribeaddress2) - unsubscribeAddress

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

            Broadcasttransaction2Response res = sdk.binanceSmartChain.broadcasttransaction2(req);

            if (res.broadcasttransaction2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            Deleteaddress2Response res = sdk.binanceSmartChain.deleteaddress2(req);

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

            Exportaddress2Response res = sdk.binanceSmartChain.exportaddress2(req);

            if (res.exportaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getbep20

Receive information of a BEP20 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getbep20Request;
import org.openapis.openapi.models.operations.Getbep20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getbep20Request req = new Getbep20Request("0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B");            

            Getbep20Response res = sdk.binanceSmartChain.getbep20(req);

            if (res.getbep20200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getbep20balance

Get the balance of a BEP20 address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getbep20balanceRequest;
import org.openapis.openapi.models.operations.Getbep20balanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getbep20balanceRequest req = new Getbep20balanceRequest("0x1dDB2C0897daF18632662E71fdD2dbDC0eB3a9Ec", "0x9dB475371B5cC2913D3219f72e16a3F101339a05");            

            Getbep20balanceResponse res = sdk.binanceSmartChain.getbep20balance(req);

            if (res.getbep20balance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getbinancecoinbalance

Get the balance of an address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetbinancecoinbalanceRequest;
import org.openapis.openapi.models.operations.GetbinancecoinbalanceResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetbinancecoinbalanceRequest req = new GetbinancecoinbalanceRequest("0xa1f36016221d48ce7f15cde7b826a4fbe09bacce");            

            GetbinancecoinbalanceResponse res = sdk.binanceSmartChain.getbinancecoinbalance(req);

            if (res.getbinancecoinbalance200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getblock2

Get information of a specific block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getblock2Request;
import org.openapis.openapi.models.operations.Getblock2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getblock2Request req = new Getblock2Request("2000");            

            Getblock2Response res = sdk.binanceSmartChain.getblock2(req);

            if (res.getblock2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getgasprice2

Get gas price

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getgasprice2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getgasprice2Response res = sdk.binanceSmartChain.getgasprice2();

            if (res.getgasprice2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getlastblocknumber2

Get the latest block number

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getlastblocknumber2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getlastblocknumber2Response res = sdk.binanceSmartChain.getlastblocknumber2();

            if (res.getlastblocknumber2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnftowner2

Get the Owner of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getnftowner2Request;
import org.openapis.openapi.models.operations.Getnftowner2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getnftowner2Request req = new Getnftowner2Request("0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B", "403706");            

            Getnftowner2Response res = sdk.binanceSmartChain.getnftowner2(req);

            if (res.getnftowner2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getnfturi2

Get the URI of an NFT

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Getnfturi2Request;
import org.openapis.openapi.models.operations.Getnfturi2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Getnfturi2Request req = new Getnfturi2Request("0xE6965B4F189DBDB2BD65e60aBAeb531B6fE9580B", "403706");            

            Getnfturi2Response res = sdk.binanceSmartChain.getnfturi2(req);

            if (res.getnfturi2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransaction2

Get info about a transaction

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransaction2Request;
import org.openapis.openapi.models.operations.Gettransaction2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransaction2Request req = new Gettransaction2Request("0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534");            

            Gettransaction2Response res = sdk.binanceSmartChain.gettransaction2(req);

            if (res.gettransaction2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## gettransactionreceipt2

Get info about a transaction receipt

You can get your transaction decoded by add /decoded to your api call. If you want to get the transaction encoded, youst remove the /decoded part

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Gettransactionreceipt2Request;
import org.openapis.openapi.models.operations.Gettransactionreceipt2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Gettransactionreceipt2Request req = new Gettransactionreceipt2Request("0x59ca89ea05be9a9e83958404924a2ae450fe8e691b1aeedecf3a3645c6f64534");            

            Gettransactionreceipt2Response res = sdk.binanceSmartChain.gettransactionreceipt2(req);

            if (res.gettransactionreceipt2200ApplicationJSONObject != null) {
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

            Importaddress2Response res = sdk.binanceSmartChain.importaddress2(req);

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

            ListaddressResponse res = sdk.binanceSmartChain.listaddress();

            if (res.listaddress200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listfailedipns2

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listfailedipns2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listfailedipns2Response res = sdk.binanceSmartChain.listfailedipns2();

            if (res.listfailedipns2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listsubscribedaddresses2

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listsubscribedaddresses2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listsubscribedaddresses2Response res = sdk.binanceSmartChain.listsubscribedaddresses2();

            if (res.listsubscribedaddresses2200ApplicationJSONObject != null) {
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

            Listtransactionsbyaddress2Response res = sdk.binanceSmartChain.listtransactionsbyaddress2(req);

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

            Newaddress2Response res = sdk.binanceSmartChain.newaddress2(req);

            if (res.newaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendfailedipn2

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Resendfailedipn2Request;
import org.openapis.openapi.models.operations.Resendfailedipn2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Resendfailedipn2Request req = new Resendfailedipn2Request("62640817eb594da78c7bee00") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "quibusdam");
                    put("unde", "nulla");
                    put("corrupti", "illum");
                }};
            }};            

            Resendfailedipn2Response res = sdk.binanceSmartChain.resendfailedipn2(req);

            if (res.resendfailedipn2200ApplicationJSONObject != null) {
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
                gas = 4236.55;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Sendbep20Response res = sdk.binanceSmartChain.sendbep20(req);

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

            Sendbep721Response res = sdk.binanceSmartChain.sendbep721(req);

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

            Sendtransaction2Response res = sdk.binanceSmartChain.sendtransaction2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeaddress2

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Subscribeaddress2RequestBody;
import org.openapis.openapi.models.operations.Subscribeaddress2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Subscribeaddress2RequestBody req = new Subscribeaddress2RequestBody() {{
                contractaddress = "0x514910771af9ca656af840dff83e8264ecf986ca";
                ethereumaddress = "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974";
                url = "https://yoururl.com/ipnreceiver.php";
            }};            

            Subscribeaddress2Response res = sdk.binanceSmartChain.subscribeaddress2(req);

            if (res.subscribeaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeaddress2

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Unsubscribeaddress2Request;
import org.openapis.openapi.models.operations.Unsubscribeaddress2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Unsubscribeaddress2Request req = new Unsubscribeaddress2Request("624d7db34b026365cc22356b");            

            Unsubscribeaddress2Response res = sdk.binanceSmartChain.unsubscribeaddress2(req);

            if (res.unsubscribeaddress2200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
