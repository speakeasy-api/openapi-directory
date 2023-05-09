# Tse

## Overview

Technische Sicherheitseinrichtung - use in context of strom-quittungen to get digitaly signed receipts.

### Available Operations

* [QuittungTSE](#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [QuittungTSEData](#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [QuittungTSEsignature](#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [QuittungZugferd](#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

## QuittungTSE

Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.


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
    res, err := s.Tse.QuittungTSE(ctx, operations.QuittungTSERequest{
        Account: sdk.String("esse"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuittungTSE200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## QuittungTSEData

Allows to retrieve input string for a signing process.


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
    res, err := s.Tse.QuittungTSEData(ctx, operations.QuittungTSEDataRequest{
        Account: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## QuittungTSEsignature

Allows to retrieve digital signature for a given receipt.


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
    res, err := s.Tse.QuittungTSEsignature(ctx, operations.QuittungTSEsignatureRequest{
        Account: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## QuittungZugferd

Allows to retrieve XML of the zugferd invoice.


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
    res, err := s.Tse.QuittungZugferd(ctx, operations.QuittungZugferdRequest{
        Account: sdk.String("aspernatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
