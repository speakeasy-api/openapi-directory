# SDK

### Available Operations

* [DeleteKeyKey](#deletekeykey)
* [GetAccountID](#getaccountid) - Get account balance
* [GetBlock](#getblock) - Access detailed block information
* [GetBlockID](#getblockid) - Get information about particular block
* [GetBlockIDTransaction](#getblockidtransaction) - Get transaction count within block
* [GetBlockIDTransactionIndex](#getblockidtransactionindex) - Get information about particular transaction within block
* [GetBlockchain](#getblockchain) - Get a list of supported blockchains
* [GetBlockchainID](#getblockchainid) - Get information about blockchain woth given id
* [GetContractID](#getcontractid) - Get contract balance
* [GetErc20](#geterc20) - Get token information such as name, total amount in circulation, etc
* [GetErc20Address](#geterc20address) - Get information amout token balance in the account
* [GetKey](#getkey)
* [GetTransactionHash](#gettransactionhash) - Get information about transaction by the transaction hash value
* [GetTransactionHashReceipt](#gettransactionhashreceipt) - Get receipt detail information
* [GetVersion](#getversion) - Get API version info
* [GetWallet](#getwallet) - Get current account balance
* [GetWalletAccount](#getwalletaccount)
* [GetWalletAccountID](#getwalletaccountid) - Get account balance
* [Options](#options)
* [OptionsAccount](#optionsaccount)
* [OptionsAccountID](#optionsaccountid)
* [OptionsBlock](#optionsblock)
* [OptionsBlockID](#optionsblockid)
* [OptionsBlockIDTransaction](#optionsblockidtransaction)
* [OptionsBlockIDTransactionIndex](#optionsblockidtransactionindex)
* [OptionsBlockchain](#optionsblockchain)
* [OptionsBlockchainID](#optionsblockchainid)
* [OptionsContract](#optionscontract)
* [OptionsContractID](#optionscontractid)
* [OptionsEcho](#optionsecho)
* [OptionsErc20](#optionserc20)
* [OptionsErc20Address](#optionserc20address)
* [OptionsKey](#optionskey)
* [OptionsKeyKey](#optionskeykey)
* [OptionsTransaction](#optionstransaction)
* [OptionsTransactionHash](#optionstransactionhash)
* [OptionsTransactionHashReceipt](#optionstransactionhashreceipt)
* [OptionsVersion](#optionsversion)
* [OptionsWallet](#optionswallet)
* [OptionsWalletAccount](#optionswalletaccount)
* [OptionsWalletAccountID](#optionswalletaccountid)
* [OptionsWalletAccountIDPay](#optionswalletaccountidpay)
* [PostAccount](#postaccount) - Create new account
* [PostContract](#postcontract) - Create a new smart contract
* [PostContractID](#postcontractid) - Call the contract
* [PostErc20](#posterc20)
* [PostErc20Address](#posterc20address) - Transfer tokens to another account
* [PostKey](#postkey)
* [PostTransaction](#posttransaction) - Create a new transaction. Transfer Ether between accounts
* [PostWallet](#postwallet) - Create personal wallet
* [PostWalletAccount](#postwalletaccount)
* [PostWalletAccountIDContract](#postwalletaccountidcontract)
* [PostWalletAccountIDErc20](#postwalletaccountiderc20)
* [PostWalletAccountIDPay](#postwalletaccountidpay) - Send payment from the account held within the wallet

## DeleteKeyKey

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.DeleteKeyKey(ctx, operations.DeleteKeyKeyRequest{
        Key: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetAccountID

Get account balance

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetAccountID(ctx, operations.GetAccountIDRequest{
        ID: "bd9d8d69-a674-4e0f-867c-c8796ed151a0",
    }, operations.GetAccountIDSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetBlock

Access detailed block information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBlock(ctx, operations.GetBlockSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetBlockID

Get information about particular block

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBlockID(ctx, operations.GetBlockIDRequest{
        ID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
    }, operations.GetBlockIDSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetBlockIDTransaction

Get transaction count within block

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBlockIDTransaction(ctx, operations.GetBlockIDTransactionRequest{
        ID: "73920592-9396-4fea-b596-eb10faaa2352",
    }, operations.GetBlockIDTransactionSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetBlockIDTransactionIndex

Get information about particular transaction within block

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBlockIDTransactionIndex(ctx, operations.GetBlockIDTransactionIndexRequest{
        ID: "c5955907-aff1-4a3a-afa9-467739251aa5",
        Index: "odit",
    }, operations.GetBlockIDTransactionIndexSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetBlockchain

Get a list of supported blockchains

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBlockchain(ctx, operations.GetBlockchainSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetBlockchainID

Get information about blockchain woth given id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetBlockchainID(ctx, operations.GetBlockchainIDRequest{
        ID: "c3f5ad01-9da1-4ffe-b8f0-97b0074f1547",
    }, operations.GetBlockchainIDSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetContractID

Get contract balance

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetContractID(ctx, operations.GetContractIDRequest{
        ID: "1b5e6e13-b99d-4488-a1e9-1e450ad2abd4",
    }, operations.GetContractIDSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetErc20

Get token information such as name, total amount in circulation, etc

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetErc20(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetErc20Address

Get information amout token balance in the account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetErc20Address(ctx, operations.GetErc20AddressRequest{
        Address: "13550 Rhoda Heights",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetKey

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetKey(ctx, operations.GetKeyRequest{
        Token: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetTransactionHash

Get information about transaction by the transaction hash value

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTransactionHash(ctx, operations.GetTransactionHashRequest{
        Hash: "fugit",
    }, operations.GetTransactionHashSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetTransactionHashReceipt

Get receipt detail information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetTransactionHashReceipt(ctx, operations.GetTransactionHashReceiptRequest{
        Hash: "dolorum",
    }, operations.GetTransactionHashReceiptSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetVersion

Get API version info

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetWallet

Get current account balance

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetWallet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetWalletAccount

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetWalletAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## GetWalletAccountID

Get account balance

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.GetWalletAccountID(ctx, operations.GetWalletAccountIDRequest{
        ID: "94bb4f63-c969-4e9a-befa-77dfb14cd66a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## Options

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.Options(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsAccount

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsAccountID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsAccountID(ctx, operations.OptionsAccountIDRequest{
        ID: "e395efb9-ba88-4f3a-a699-7074ba4469b6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsBlock

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsBlock(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsBlockID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsBlockID(ctx, operations.OptionsBlockIDRequest{
        ID: "e2141959-890a-4fa5-a3e2-516fe4c8b711",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsBlockIDTransaction

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsBlockIDTransaction(ctx, operations.OptionsBlockIDTransactionRequest{
        ID: "e5b7fd2e-d028-4921-8ddc-692601fb576b",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsBlockIDTransactionIndex

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsBlockIDTransactionIndex(ctx, operations.OptionsBlockIDTransactionIndexRequest{
        ID: "0d5f0d30-c5fb-4b25-8705-3202c73d5fe9",
        Index: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsBlockchain

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsBlockchain(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsBlockchainID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsBlockchainID(ctx, operations.OptionsBlockchainIDRequest{
        ID: "90c28909-b3fe-449a-8d9c-bf48633323f9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsContract

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsContract(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsContractID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsContractID(ctx, operations.OptionsContractIDRequest{
        ID: "b77f3a41-0067-44eb-b692-80d1ba77a89e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsEcho

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsEcho(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsErc20

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsErc20(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsErc20Address

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsErc20Address(ctx, operations.OptionsErc20AddressRequest{
        Address: "942 Makenzie Union",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsKey

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsKey(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsKeyKey

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsKeyKey(ctx, operations.OptionsKeyKeyRequest{
        Key: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsTransaction

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsTransaction(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsTransactionHash

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsTransactionHash(ctx, operations.OptionsTransactionHashRequest{
        Hash: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsTransactionHashReceipt

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsTransactionHashReceipt(ctx, operations.OptionsTransactionHashReceiptRequest{
        Hash: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsVersion

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsWallet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsWallet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsWalletAccount

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsWalletAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsWalletAccountID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsWalletAccountID(ctx, operations.OptionsWalletAccountIDRequest{
        ID: "3ce5e6a9-5d8a-40d4-86ce-2af7a73cf3be",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## OptionsWalletAccountIDPay

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.OptionsWalletAccountIDPay(ctx, operations.OptionsWalletAccountIDPayRequest{
        ID: "453f870b-326b-45a7-b429-cdb1a8422bb6",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostAccount

Create new account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostAccount(ctx, operations.PostAccountSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostContract

Create a new smart contract

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostContract(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostContractID

Call the contract

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostContractID(ctx, operations.PostContractIDRequest{
        ID: "79d23227-15bf-40cb-b1e3-1b8b90f3443a",
    }, operations.PostContractIDSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostErc20

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostErc20(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostErc20Address

Transfer tokens to another account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostErc20Address(ctx, operations.PostErc20AddressRequest{
        Address: "00590 Skiles Shores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostKey

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostKey(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostTransaction

Create a new transaction. Transfer Ether between accounts

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostTransaction(ctx, operations.PostTransactionSecurity{
        Key2: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostWallet

Create personal wallet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostWallet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostWalletAccount

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostWalletAccount(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostWalletAccountIDContract

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostWalletAccountIDContract(ctx, operations.PostWalletAccountIDContractRequest{
        ID: "f4b92187-9fce-4953-b73e-f7fbc7abd74d",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostWalletAccountIDErc20

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostWalletAccountIDErc20(ctx, operations.PostWalletAccountIDErc20Request{
        ID: "d39c0f5d-2cff-47c7-8a45-626d436813f1",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## PostWalletAccountIDPay

Send payment from the account held within the wallet

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostWalletAccountIDPay(ctx, operations.PostWalletAccountIDPayRequest{
        ID: "6d9f5fce-6c55-4614-ac3e-250fb008c42e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```
