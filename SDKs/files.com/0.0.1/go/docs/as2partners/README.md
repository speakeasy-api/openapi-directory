# As2Partners

## Overview

Operations about as2_partners

### Available Operations

* [DeleteAs2PartnersID](#deleteas2partnersid) - Delete As2 Partner
* [GetAs2Partners](#getas2partners) - List As2 Partners
* [GetAs2PartnersID](#getas2partnersid) - Show As2 Partner
* [PatchAs2PartnersID](#patchas2partnersid) - Update As2 Partner
* [PostAs2Partners](#postas2partners) - Create As2 Partner

## DeleteAs2PartnersID

Delete As2 Partner

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
    res, err := s.As2Partners.DeleteAs2PartnersID(ctx, operations.DeleteAs2PartnersIDRequest{
        ID: 451159,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAs2Partners

List As2 Partners

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
    res, err := s.As2Partners.GetAs2Partners(ctx, operations.GetAs2PartnersRequest{
        Cursor: sdk.String("cum"),
        PerPage: sdk.Int(19987),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2PartnerEntities != nil {
        // handle response
    }
}
```

## GetAs2PartnersID

Show As2 Partner

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
    res, err := s.As2Partners.GetAs2PartnersID(ctx, operations.GetAs2PartnersIDRequest{
        ID: 39187,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2PartnerEntity != nil {
        // handle response
    }
}
```

## PatchAs2PartnersID

Update As2 Partner

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
    res, err := s.As2Partners.PatchAs2PartnersID(ctx, operations.PatchAs2PartnersIDRequest{
        RequestBody: &operations.PatchAs2PartnersIDRequestBody{
            EnableDedicatedIps: sdk.Bool(false),
            Name: sdk.String("Mrs. April Wuckert"),
            PublicCertificate: sdk.String("iusto"),
            ServerCertificate: sdk.String("dicta"),
            URI: sdk.String("https://frugal-sympathy.info"),
        },
        ID: 918236,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2PartnerEntity != nil {
        // handle response
    }
}
```

## PostAs2Partners

Create As2 Partner

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
    res, err := s.As2Partners.PostAs2Partners(ctx, operations.PostAs2PartnersRequestBody{
        As2StationID: 64147,
        EnableDedicatedIps: sdk.Bool(false),
        Name: "Alison Mann",
        PublicCertificate: "modi",
        ServerCertificate: sdk.String("praesentium"),
        URI: "https://useful-bonnet.org",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.As2PartnerEntity != nil {
        // handle response
    }
}
```
