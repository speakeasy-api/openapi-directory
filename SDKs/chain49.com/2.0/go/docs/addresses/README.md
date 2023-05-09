# Addresses

## Overview

 

### Available Operations

* [GetAddressV2](#getaddressv2) - Get address V2
* [GetBalanceHistoryV2](#getbalancehistoryv2) - Get Balance History V2
* [GetUtxov2](#getutxov2) - Get UTXO V2
* [GetXpubV2](#getxpubv2) - Get xpub V2

## GetAddressV2

Returns balances and transactions of an address. The returned transactions are sorted by block height, newest blocks first.

The **details** query parameter can specify the level of details returned by the request (default: "txids").
Possible values are:

**basic**: return only xpub balances, without any derived addresses and transactions

**tokens**: basic + tokens (addresses) derived from the xpub, subject to tokens parameter

**tokenBalances**: basic + tokens (addresses) derived from the xpub with balances, subject to tokens parameter

**txids**: tokenBalances + list of txids, subject to from, to filter and paging

**txs**: tokenBalances + list of transaction with details, subject to from, to filter and paging


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.GetAddressV2(ctx, operations.GetAddressV2Request{
        Address: "321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL",
        Blockchain: "bitcoin",
        Contract: sdk.String("0xdAC17F958D2ee523a2206206994597C13D831ec7"),
        Details: shared.DetailsEnumBasic.ToPointer(),
        FromBlock: sdk.Int64(10),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(1000),
        Secondary: sdk.String("usd"),
        ToBlock: sdk.Int64(100),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAddressV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetBalanceHistoryV2

Returns a balance history for the specified XPUB or address

The value of sentToSelf is the amount sent from the same address to the same address or within addresses of xpub.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.GetBalanceHistoryV2(ctx, operations.GetBalanceHistoryV2Request{
        AddressOrXpub: "321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL",
        Blockchain: "bitcoin",
        Fiatcurrency: sdk.String("usd"),
        FromDate: sdk.String("1578391200"),
        GroupBy: sdk.Float64(172800),
        ToDate: sdk.String("1599053802"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetBalanceHistoryV2200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## GetUtxov2

Returns array of unspent transaction outputs of address or xpub, applicable only for Bitcoin-type coins. By default, the list contains both confirmed and unconfirmed transactions. The query parameter confirmed=true disables return of unconfirmed transactions. The returned utxos are sorted by block height, newest blocks first. For xpubs or output descriptors, the response also contains address and derivation path of the utxo.



Unconfirmed utxos do not have field height, the field confirmations has value 0 and may contain field lockTime, if not zero.

Coinbase utxos have field coinbase set to true, however due to performance reasons only up to minimum coinbase confirmations limit (100). After this limit, utxos are not detected as coinbase.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.GetUtxov2(ctx, operations.GetUtxov2Request{
        AddressOrXpub: "321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL",
        Blockchain: "bitcoin",
        Confirmed: sdk.Bool(true),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUtxov2200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## GetXpubV2

Returns balances and transactions of an xpub or output descriptor, applicable only for Bitcoin-type coins.

Blockbook supports BIP44, BIP49, BIP84 and BIP86 (Taproot) derivation schemes, using either xpubs or output descriptors (see https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md)

Note: usedTokens always returns total number of used addresses of xpub.

Detailed documentation found here: https://github.com/trezor/blockbook/blob/master/docs/api.md#get-xpub

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Option1: &shared.SecurityOption1{
                XAPIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Addresses.GetXpubV2(ctx, operations.GetXpubV2Request{
        Blockchain: "bitcoin",
        Details: shared.DetailsEnumBasic.ToPointer(),
        FromBlock: sdk.Int64(10),
        Page: sdk.Int64(1),
        PageSize: sdk.Int64(1000),
        Secondary: sdk.String("usd"),
        ToBlock: sdk.Int64(100),
        Tokens: shared.TokensEnumUsed.ToPointer(),
        Xpub: "tpubDC88gkaZi5HvJGxGDNLADkvtdpni3mLmx6vr2KnXmWMG8zfkBRggsxHVBkUpgcwPe2KKpkyvTJCdXHb1UHEWE64vczyyPQfHr1skBcsRedN",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetXpubV2200ApplicationJSONObject != nil {
        // handle response
    }
}
```
