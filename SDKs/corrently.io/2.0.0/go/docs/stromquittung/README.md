# StromQuittung

## Overview

Self-Service to create a full receipt (Quittung) for energy delivery in case of submetering. Please refer to [Strom-Quittung](http://strom-quittung.de) for a sample usage.


### Available Operations

* [QuittungComit](#quittungcomit) - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
* [QuittungCreate](#quittungcreate) - Create a receipt for an energy delivery (only valid in Germany).
* [QuittungPrepare](#quittungprepare) - Allows to collect data with several requests (or a single) for a receipt.
* [QuittungTSE](#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [QuittungTSEData](#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [QuittungTSEsignature](#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [QuittungZugferd](#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

## QuittungComit

Uses collected fields or provided fields to create a final receipt (Strom-Quittung).


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
    res, err := s.StromQuittung.QuittungComit(ctx, operations.QuittungComitRequestBody{
        Account: sdk.String("excepturi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuittungComit200ApplicationJSONString != nil {
        // handle response
    }
}
```

## QuittungCreate

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.


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
    res, err := s.StromQuittung.QuittungCreate(ctx, operations.QuittungCreateRequestBody{
        Email: sdk.String("Tianna33@yahoo.com"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuittungCreate200ApplicationJSONString != nil {
        // handle response
    }
}
```

## QuittungPrepare

During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.


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
    res, err := s.StromQuittung.QuittungPrepare(ctx, operations.QuittungPrepareRequestBody{
        Account: sdk.String("veritatis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.QuittungPrepare200ApplicationJSONString != nil {
        // handle response
    }
}
```

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
    res, err := s.StromQuittung.QuittungTSE(ctx, operations.QuittungTSERequest{
        Account: sdk.String("deserunt"),
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
    res, err := s.StromQuittung.QuittungTSEData(ctx, operations.QuittungTSEDataRequest{
        Account: sdk.String("perferendis"),
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
    res, err := s.StromQuittung.QuittungTSEsignature(ctx, operations.QuittungTSEsignatureRequest{
        Account: sdk.String("ipsam"),
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
    res, err := s.StromQuittung.QuittungZugferd(ctx, operations.QuittungZugferdRequest{
        Account: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
