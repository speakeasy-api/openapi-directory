# StromkontoLedger

## Overview

Managing accounts and balances for market partners (eq. households, grid operators, traders,..) Stromkonto is based on distributed ledger technology (AKA Blockchain). Instead of using the REST Api to access any energy ledger, you might act as a blockchain node and use the published ABI definitions to get the same results and/or run transactions directly.


### Available Operations

* [PrepareTransaction](#preparetransaction) - Prepare Transaction
* [StromkontoBalances](#stromkontobalances) - Balances
* [StromkontoChoices](#stromkontochoices) - Selectable Choices for customer
* [StromkontoLogin](#stromkontologin) - Login (via Mail)
* [StromkontoRegister](#stromkontoregister) - Register (new Stromkonto)

## PrepareTransaction

Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.


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
    res, err := s.StromkontoLedger.PrepareTransaction(ctx, operations.PrepareTransactionRequestBody{
        Account: sdk.String("sapiente"),
        Signature: sdk.String("quo"),
        To: sdk.String("odit"),
        Value: sdk.Int64(870013),
        Variation: operations.PrepareTransactionRequestBodyVariationEnumBaeume.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StromkontoBalances

Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).


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
    res, err := s.StromkontoLedger.StromkontoBalances(ctx, operations.StromkontoBalancesRequest{
        Account: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Balances != nil {
        // handle response
    }
}
```

## StromkontoChoices

Signable choices (contract changes) for customer.


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
    res, err := s.StromkontoLedger.StromkontoChoices(ctx, operations.StromkontoChoicesRequest{
        Account: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Balances != nil {
        // handle response
    }
}
```

## StromkontoLogin

Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.


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
    res, err := s.StromkontoLedger.StromkontoLogin(ctx, operations.StromkontoLoginRequestBody{
        Email: sdk.String("Presley_Koepp@hotmail.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StromkontoLogin200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## StromkontoRegister

Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.


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
    res, err := s.StromkontoLedger.StromkontoRegister(ctx, operations.StromkontoRegisterRequestBody{
        Email: sdk.String("Billy_Reichel@hotmail.com"),
        FirstName: sdk.String("Buck"),
        LastName: sdk.String("Lind"),
        Zipcode: sdk.String("75144-2177"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
