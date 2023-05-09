# polygon

### Available Operations

* [broadcasttransaction1](#broadcasttransaction1) - broadcastTransaction
* [deleteaddress1](#deleteaddress1) - deleteAddress
* [exportaddress1](#exportaddress1) - exportAddress
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
* [importaddress1](#importaddress1) - importAddress
* [listaddresses1](#listaddresses1) - listAddresses
* [listfailedipns1](#listfailedipns1) - listFailedIPNs
* [listipnsbywebhookid1](#listipnsbywebhookid1) - listIPNsByWebhookId
* [listsubscribedaddresses1](#listsubscribedaddresses1) - listSubscribedAddresses
* [listtransactionsbyaddress1](#listtransactionsbyaddress1) - ListTransactionsByAddress
* [newaddress1](#newaddress1) - newAddress
* [resendfailedipn1](#resendfailedipn1) - resendFailedIPN
* [senderc201](#senderc201) - sendERC20
* [senderc7211](#senderc7211) - sendERC721
* [sendtransaction1](#sendtransaction1) - sendTransaction
* [subscribeaddress1](#subscribeaddress1) - subscribeAddress
* [unsubscribeaddress1](#unsubscribeaddress1) - unsubscribeAddress

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

            Broadcasttransaction1Response res = sdk.polygon.broadcasttransaction1(req);

            if (res.broadcasttransaction1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            Deleteaddress1Response res = sdk.polygon.deleteaddress1(req);

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
                requestBody = "totam".getBytes();
            }};            

            Exportaddress1Response res = sdk.polygon.exportaddress1(req);

            if (res.exportaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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

            Getblock1Response res = sdk.polygon.getblock1(req);

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

            Geterc201Response res = sdk.polygon.geterc201(req);

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

            Geterc20balance1Response res = sdk.polygon.geterc20balance1(req);

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

            Getgasprice1Response res = sdk.polygon.getgasprice1();

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

            org.openapis.openapi.models.. req = "porro".getBytes()            

            Getlastblocknumber1Response res = sdk.polygon.getlastblocknumber1(req);

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

            Getnftowner1Response res = sdk.polygon.getnftowner1(req);

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

            Getnfturi1Request req = new Getnfturi1Request("dolorum", "dicta");            

            Getnfturi1Response res = sdk.polygon.getnfturi1(req);

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

            GetpolygonbalanceResponse res = sdk.polygon.getpolygonbalance(req);

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

            Gettransaction1Response res = sdk.polygon.gettransaction1(req);

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

            Gettransactionreceipt1Response res = sdk.polygon.gettransactionreceipt1(req);

            if (res.gettransactionreceipt1200ApplicationJSONObject != null) {
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

            Importaddress1Response res = sdk.polygon.importaddress1(req);

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

            Listaddresses1Response res = sdk.polygon.listaddresses1();

            if (res.listaddresses1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listfailedipns1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listfailedipns1Request;
import org.openapis.openapi.models.operations.Listfailedipns1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listfailedipns1Request req = new Listfailedipns1Request("626407c62e5e8235ca561dce");            

            Listfailedipns1Response res = sdk.polygon.listfailedipns1(req);

            if (res.listfailedipns1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listipnsbywebhookid1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listipnsbywebhookid1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listipnsbywebhookid1Response res = sdk.polygon.listipnsbywebhookid1();

            if (res.listipnsbywebhookid1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listsubscribedaddresses1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Listsubscribedaddresses1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Listsubscribedaddresses1Response res = sdk.polygon.listsubscribedaddresses1();

            if (res.listsubscribedaddresses1200ApplicationJSONObject != null) {
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

            Listtransactionsbyaddress1Response res = sdk.polygon.listtransactionsbyaddress1(req);

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

            Newaddress1Response res = sdk.polygon.newaddress1(req);

            if (res.newaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## resendfailedipn1

Returns all subscriptions/IPNs created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Resendfailedipn1Request;
import org.openapis.openapi.models.operations.Resendfailedipn1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Resendfailedipn1Request req = new Resendfailedipn1Request("626407c62e5e8235ca561dce") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("officia", "occaecati");
                    put("fugit", "deleniti");
                    put("hic", "optio");
                }};
            }};            

            Resendfailedipn1Response res = sdk.polygon.resendfailedipn1(req);

            if (res.resendfailedipn1200ApplicationJSONObject != null) {
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
                gas = 5218.48;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Senderc201Response res = sdk.polygon.senderc201(req);

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

            Senderc7211Response res = sdk.polygon.senderc7211(req);

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
                gas = 1059.07;
                password = "test123";
                to = "0xef4943d727e34280a2efa0b3352dfd61f508ee48";
            }};            

            Sendtransaction1Response res = sdk.polygon.sendtransaction1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## subscribeaddress1

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
import org.openapis.openapi.models.operations.Subscribeaddress1RequestBody;
import org.openapis.openapi.models.operations.Subscribeaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Subscribeaddress1RequestBody req = new Subscribeaddress1RequestBody() {{
                to = "0x2fE7dF4DAd91Ef6531Cd14fC1C109D2bA1755203";
                type = "ETH";
                url = "https://example.com/ipnreceiver.php";
            }};            

            Subscribeaddress1Response res = sdk.polygon.subscribeaddress1(req);

            if (res.subscribeaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unsubscribeaddress1

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Unsubscribeaddress1Request;
import org.openapis.openapi.models.operations.Unsubscribeaddress1Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            Unsubscribeaddress1Request req = new Unsubscribeaddress1Request("626407c62e5e8235ca561dce");            

            Unsubscribeaddress1Response res = sdk.polygon.unsubscribeaddress1(req);

            if (res.unsubscribeaddress1200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
