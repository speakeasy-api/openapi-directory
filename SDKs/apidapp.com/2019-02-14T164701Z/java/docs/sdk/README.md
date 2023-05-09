# SDK

### Available Operations

* [deleteKeyKey](#deletekeykey)
* [getAccountId](#getaccountid) - Get account balance
* [getBlock](#getblock) - Access detailed block information
* [getBlockId](#getblockid) - Get information about particular block
* [getBlockIdTransaction](#getblockidtransaction) - Get transaction count within block
* [getBlockIdTransactionIndex](#getblockidtransactionindex) - Get information about particular transaction within block
* [getBlockchain](#getblockchain) - Get a list of supported blockchains
* [getBlockchainId](#getblockchainid) - Get information about blockchain woth given id
* [getContractId](#getcontractid) - Get contract balance
* [getErc20](#geterc20) - Get token information such as name, total amount in circulation, etc
* [getErc20Address](#geterc20address) - Get information amout token balance in the account
* [getKey](#getkey)
* [getTransactionHash](#gettransactionhash) - Get information about transaction by the transaction hash value
* [getTransactionHashReceipt](#gettransactionhashreceipt) - Get receipt detail information
* [getVersion](#getversion) - Get API version info
* [getWallet](#getwallet) - Get current account balance
* [getWalletAccount](#getwalletaccount)
* [getWalletAccountId](#getwalletaccountid) - Get account balance
* [options](#options)
* [optionsAccount](#optionsaccount)
* [optionsAccountId](#optionsaccountid)
* [optionsBlock](#optionsblock)
* [optionsBlockId](#optionsblockid)
* [optionsBlockIdTransaction](#optionsblockidtransaction)
* [optionsBlockIdTransactionIndex](#optionsblockidtransactionindex)
* [optionsBlockchain](#optionsblockchain)
* [optionsBlockchainId](#optionsblockchainid)
* [optionsContract](#optionscontract)
* [optionsContractId](#optionscontractid)
* [optionsEcho](#optionsecho)
* [optionsErc20](#optionserc20)
* [optionsErc20Address](#optionserc20address)
* [optionsKey](#optionskey)
* [optionsKeyKey](#optionskeykey)
* [optionsTransaction](#optionstransaction)
* [optionsTransactionHash](#optionstransactionhash)
* [optionsTransactionHashReceipt](#optionstransactionhashreceipt)
* [optionsVersion](#optionsversion)
* [optionsWallet](#optionswallet)
* [optionsWalletAccount](#optionswalletaccount)
* [optionsWalletAccountId](#optionswalletaccountid)
* [optionsWalletAccountIdPay](#optionswalletaccountidpay)
* [postAccount](#postaccount) - Create new account
* [postContract](#postcontract) - Create a new smart contract
* [postContractId](#postcontractid) - Call the contract
* [postErc20](#posterc20)
* [postErc20Address](#posterc20address) - Transfer tokens to another account
* [postKey](#postkey)
* [postTransaction](#posttransaction) - Create a new transaction. Transfer Ether between accounts
* [postWallet](#postwallet) - Create personal wallet
* [postWalletAccount](#postwalletaccount)
* [postWalletAccountIdContract](#postwalletaccountidcontract)
* [postWalletAccountIdErc20](#postwalletaccountiderc20)
* [postWalletAccountIdPay](#postwalletaccountidpay) - Send payment from the account held within the wallet

## deleteKeyKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteKeyKeyRequest;
import org.openapis.openapi.models.operations.DeleteKeyKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteKeyKeyRequest req = new DeleteKeyKeyRequest("provident");            

            DeleteKeyKeyResponse res = sdk.sdk.deleteKeyKey(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAccountId

Get account balance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountIdRequest;
import org.openapis.openapi.models.operations.GetAccountIdResponse;
import org.openapis.openapi.models.operations.GetAccountIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountIdRequest req = new GetAccountIdRequest("distinctio");            

            GetAccountIdResponse res = sdk.sdk.getAccountId(req, new GetAccountIdSecurity("quibusdam") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlock

Access detailed block information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockResponse;
import org.openapis.openapi.models.operations.GetBlockSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockResponse res = sdk.sdk.getBlock(new GetBlockSecurity("unde") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockId

Get information about particular block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockIdRequest;
import org.openapis.openapi.models.operations.GetBlockIdResponse;
import org.openapis.openapi.models.operations.GetBlockIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockIdRequest req = new GetBlockIdRequest("nulla");            

            GetBlockIdResponse res = sdk.sdk.getBlockId(req, new GetBlockIdSecurity("corrupti") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockIdTransaction

Get transaction count within block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockIdTransactionRequest;
import org.openapis.openapi.models.operations.GetBlockIdTransactionResponse;
import org.openapis.openapi.models.operations.GetBlockIdTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockIdTransactionRequest req = new GetBlockIdTransactionRequest("illum");            

            GetBlockIdTransactionResponse res = sdk.sdk.getBlockIdTransaction(req, new GetBlockIdTransactionSecurity("vel") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockIdTransactionIndex

Get information about particular transaction within block

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockIdTransactionIndexRequest;
import org.openapis.openapi.models.operations.GetBlockIdTransactionIndexResponse;
import org.openapis.openapi.models.operations.GetBlockIdTransactionIndexSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockIdTransactionIndexRequest req = new GetBlockIdTransactionIndexRequest("error", "deserunt");            

            GetBlockIdTransactionIndexResponse res = sdk.sdk.getBlockIdTransactionIndex(req, new GetBlockIdTransactionIndexSecurity("suscipit") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockchain

Get a list of supported blockchains

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockchainResponse;
import org.openapis.openapi.models.operations.GetBlockchainSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockchainResponse res = sdk.sdk.getBlockchain(new GetBlockchainSecurity("iure") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBlockchainId

Get information about blockchain woth given id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockchainIdRequest;
import org.openapis.openapi.models.operations.GetBlockchainIdResponse;
import org.openapis.openapi.models.operations.GetBlockchainIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockchainIdRequest req = new GetBlockchainIdRequest("magnam");            

            GetBlockchainIdResponse res = sdk.sdk.getBlockchainId(req, new GetBlockchainIdSecurity("debitis") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContractId

Get contract balance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContractIdRequest;
import org.openapis.openapi.models.operations.GetContractIdResponse;
import org.openapis.openapi.models.operations.GetContractIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContractIdRequest req = new GetContractIdRequest("ipsa");            

            GetContractIdResponse res = sdk.sdk.getContractId(req, new GetContractIdSecurity("delectus") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getErc20

Get token information such as name, total amount in circulation, etc

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetErc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetErc20Response res = sdk.sdk.getErc20();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getErc20Address

Get information amout token balance in the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetErc20AddressRequest;
import org.openapis.openapi.models.operations.GetErc20AddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetErc20AddressRequest req = new GetErc20AddressRequest("tempora");            

            GetErc20AddressResponse res = sdk.sdk.getErc20Address(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeyRequest;
import org.openapis.openapi.models.operations.GetKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeyRequest req = new GetKeyRequest() {{
                token = "suscipit";
            }};            

            GetKeyResponse res = sdk.sdk.getKey(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionHash

Get information about transaction by the transaction hash value

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionHashRequest;
import org.openapis.openapi.models.operations.GetTransactionHashResponse;
import org.openapis.openapi.models.operations.GetTransactionHashSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionHashRequest req = new GetTransactionHashRequest("molestiae");            

            GetTransactionHashResponse res = sdk.sdk.getTransactionHash(req, new GetTransactionHashSecurity("minus") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionHashReceipt

Get receipt detail information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionHashReceiptRequest;
import org.openapis.openapi.models.operations.GetTransactionHashReceiptResponse;
import org.openapis.openapi.models.operations.GetTransactionHashReceiptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionHashReceiptRequest req = new GetTransactionHashReceiptRequest("placeat");            

            GetTransactionHashReceiptResponse res = sdk.sdk.getTransactionHashReceipt(req, new GetTransactionHashReceiptSecurity("voluptatum") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVersion

Get API version info

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVersionResponse res = sdk.sdk.getVersion();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWallet

Get current account balance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWalletResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWalletResponse res = sdk.sdk.getWallet();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWalletAccount

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWalletAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWalletAccountResponse res = sdk.sdk.getWalletAccount();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWalletAccountId

Get account balance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWalletAccountIdRequest;
import org.openapis.openapi.models.operations.GetWalletAccountIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWalletAccountIdRequest req = new GetWalletAccountIdRequest("iusto");            

            GetWalletAccountIdResponse res = sdk.sdk.getWalletAccountId(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## options

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsResponse res = sdk.sdk.options();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsAccount

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsAccountResponse res = sdk.sdk.optionsAccount();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsAccountId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsAccountIdRequest;
import org.openapis.openapi.models.operations.OptionsAccountIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsAccountIdRequest req = new OptionsAccountIdRequest("excepturi");            

            OptionsAccountIdResponse res = sdk.sdk.optionsAccountId(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsBlock

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsBlockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsBlockResponse res = sdk.sdk.optionsBlock();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsBlockId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsBlockIdRequest;
import org.openapis.openapi.models.operations.OptionsBlockIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsBlockIdRequest req = new OptionsBlockIdRequest("nisi");            

            OptionsBlockIdResponse res = sdk.sdk.optionsBlockId(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsBlockIdTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsBlockIdTransactionRequest;
import org.openapis.openapi.models.operations.OptionsBlockIdTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsBlockIdTransactionRequest req = new OptionsBlockIdTransactionRequest("recusandae");            

            OptionsBlockIdTransactionResponse res = sdk.sdk.optionsBlockIdTransaction(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsBlockIdTransactionIndex

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsBlockIdTransactionIndexRequest;
import org.openapis.openapi.models.operations.OptionsBlockIdTransactionIndexResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsBlockIdTransactionIndexRequest req = new OptionsBlockIdTransactionIndexRequest("temporibus", "ab");            

            OptionsBlockIdTransactionIndexResponse res = sdk.sdk.optionsBlockIdTransactionIndex(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsBlockchain

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsBlockchainResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsBlockchainResponse res = sdk.sdk.optionsBlockchain();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsBlockchainId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsBlockchainIdRequest;
import org.openapis.openapi.models.operations.OptionsBlockchainIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsBlockchainIdRequest req = new OptionsBlockchainIdRequest("quis");            

            OptionsBlockchainIdResponse res = sdk.sdk.optionsBlockchainId(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsContract

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsContractResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsContractResponse res = sdk.sdk.optionsContract();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsContractId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsContractIdRequest;
import org.openapis.openapi.models.operations.OptionsContractIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsContractIdRequest req = new OptionsContractIdRequest("veritatis");            

            OptionsContractIdResponse res = sdk.sdk.optionsContractId(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsEcho

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsEchoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsEchoResponse res = sdk.sdk.optionsEcho();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsErc20

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsErc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsErc20Response res = sdk.sdk.optionsErc20();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsErc20Address

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsErc20AddressRequest;
import org.openapis.openapi.models.operations.OptionsErc20AddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsErc20AddressRequest req = new OptionsErc20AddressRequest("deserunt");            

            OptionsErc20AddressResponse res = sdk.sdk.optionsErc20Address(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsKeyResponse res = sdk.sdk.optionsKey();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsKeyKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsKeyKeyRequest;
import org.openapis.openapi.models.operations.OptionsKeyKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsKeyKeyRequest req = new OptionsKeyKeyRequest("perferendis");            

            OptionsKeyKeyResponse res = sdk.sdk.optionsKeyKey(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsTransaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsTransactionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsTransactionResponse res = sdk.sdk.optionsTransaction();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsTransactionHash

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsTransactionHashRequest;
import org.openapis.openapi.models.operations.OptionsTransactionHashResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsTransactionHashRequest req = new OptionsTransactionHashRequest("ipsam");            

            OptionsTransactionHashResponse res = sdk.sdk.optionsTransactionHash(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsTransactionHashReceipt

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsTransactionHashReceiptRequest;
import org.openapis.openapi.models.operations.OptionsTransactionHashReceiptResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsTransactionHashReceiptRequest req = new OptionsTransactionHashReceiptRequest("repellendus");            

            OptionsTransactionHashReceiptResponse res = sdk.sdk.optionsTransactionHashReceipt(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsVersion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsVersionResponse res = sdk.sdk.optionsVersion();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsWallet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsWalletResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsWalletResponse res = sdk.sdk.optionsWallet();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsWalletAccount

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsWalletAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsWalletAccountResponse res = sdk.sdk.optionsWalletAccount();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsWalletAccountId

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsWalletAccountIdRequest;
import org.openapis.openapi.models.operations.OptionsWalletAccountIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsWalletAccountIdRequest req = new OptionsWalletAccountIdRequest("sapiente");            

            OptionsWalletAccountIdResponse res = sdk.sdk.optionsWalletAccountId(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsWalletAccountIdPay

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsWalletAccountIdPayRequest;
import org.openapis.openapi.models.operations.OptionsWalletAccountIdPayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsWalletAccountIdPayRequest req = new OptionsWalletAccountIdPayRequest("quo");            

            OptionsWalletAccountIdPayResponse res = sdk.sdk.optionsWalletAccountIdPay(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccount

Create new account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountResponse;
import org.openapis.openapi.models.operations.PostAccountSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAccountResponse res = sdk.sdk.postAccount(new PostAccountSecurity("odit") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContract

Create a new smart contract

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContractResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContractResponse res = sdk.sdk.postContract();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postContractId

Call the contract

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostContractIdRequest;
import org.openapis.openapi.models.operations.PostContractIdResponse;
import org.openapis.openapi.models.operations.PostContractIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostContractIdRequest req = new PostContractIdRequest("at");            

            PostContractIdResponse res = sdk.sdk.postContractId(req, new PostContractIdSecurity("at") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postErc20

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostErc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostErc20Response res = sdk.sdk.postErc20();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postErc20Address

Transfer tokens to another account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostErc20AddressRequest;
import org.openapis.openapi.models.operations.PostErc20AddressResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostErc20AddressRequest req = new PostErc20AddressRequest("maiores");            

            PostErc20AddressResponse res = sdk.sdk.postErc20Address(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postKey

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostKeyResponse res = sdk.sdk.postKey();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransaction

Create a new transaction. Transfer Ether between accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransactionResponse;
import org.openapis.openapi.models.operations.PostTransactionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTransactionResponse res = sdk.sdk.postTransaction(new PostTransactionSecurity("molestiae") {{
                key2 = "YOUR_API_KEY_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWallet

Create personal wallet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWalletResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWalletResponse res = sdk.sdk.postWallet();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWalletAccount

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWalletAccountResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWalletAccountResponse res = sdk.sdk.postWalletAccount();

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWalletAccountIdContract

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWalletAccountIdContractRequest;
import org.openapis.openapi.models.operations.PostWalletAccountIdContractResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWalletAccountIdContractRequest req = new PostWalletAccountIdContractRequest("quod");            

            PostWalletAccountIdContractResponse res = sdk.sdk.postWalletAccountIdContract(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWalletAccountIdErc20

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWalletAccountIdErc20Request;
import org.openapis.openapi.models.operations.PostWalletAccountIdErc20Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWalletAccountIdErc20Request req = new PostWalletAccountIdErc20Request("quod");            

            PostWalletAccountIdErc20Response res = sdk.sdk.postWalletAccountIdErc20(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWalletAccountIdPay

Send payment from the account held within the wallet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWalletAccountIdPayRequest;
import org.openapis.openapi.models.operations.PostWalletAccountIdPayResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWalletAccountIdPayRequest req = new PostWalletAccountIdPayRequest("esse");            

            PostWalletAccountIdPayResponse res = sdk.sdk.postWalletAccountIdPay(req);

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
