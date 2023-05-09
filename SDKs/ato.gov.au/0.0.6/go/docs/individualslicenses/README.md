# IndividualsLicenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [DeleteIndividualsPartyIDLicensesProductID](#deleteindividualspartyidlicensesproductid) - Delete a license
* [GetIndividualsPartyIDLicenses](#getindividualspartyidlicenses) - Retrieve a list of licenses
* [GetIndividualsPartyIDLicensesProductID](#getindividualspartyidlicensesproductid) - Retrieve a license
* [PostIndividualsPartyIDLicenses](#postindividualspartyidlicenses) - Create a license
* [PutIndividualsPartyIDLicensesProductID](#putindividualspartyidlicensesproductid) - Update a license

## DeleteIndividualsPartyIDLicensesProductID

Delete a license


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
    res, err := s.IndividualsLicenses.DeleteIndividualsPartyIDLicensesProductID(ctx, operations.DeleteIndividualsPartyIDLicensesProductIDRequest{
        APIKey: "ipsa",
        PartyID: "omnis",
        ProductID: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndividualsPartyIDLicenses

Retrieve a list of licenses

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
    res, err := s.IndividualsLicenses.GetIndividualsPartyIDLicenses(ctx, operations.GetIndividualsPartyIDLicensesRequest{
        APIKey: "cum",
        PartyID: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Licenses != nil {
        // handle response
    }
}
```

## GetIndividualsPartyIDLicensesProductID

Retrieve a license


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
    res, err := s.IndividualsLicenses.GetIndividualsPartyIDLicensesProductID(ctx, operations.GetIndividualsPartyIDLicensesProductIDRequest{
        APIKey: "doloremque",
        PartyID: "reprehenderit",
        ProductID: "ut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.License != nil {
        // handle response
    }
}
```

## PostIndividualsPartyIDLicenses

Create a license


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.IndividualsLicenses.PostIndividualsPartyIDLicenses(ctx, operations.PostIndividualsPartyIDLicensesRequest{
        APIKey: "maiores",
        LicenseInput: shared.LicenseInput{
            LicenseType: shared.LicenseLicenseTypeEnumAustralianFinancialServicesLicense.ToPointer(),
            LifecycleState: shared.LicenseLifecycleStateEnumExpired.ToPointer(),
        },
        PartyID: "dolore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.License != nil {
        // handle response
    }
}
```

## PutIndividualsPartyIDLicensesProductID

Update a license


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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.IndividualsLicenses.PutIndividualsPartyIDLicensesProductID(ctx, operations.PutIndividualsPartyIDLicensesProductIDRequest{
        APIKey: "iusto",
        LicenseInput: shared.LicenseInput{
            LicenseType: shared.LicenseLicenseTypeEnumAustralianFinancialServicesLicense.ToPointer(),
            LifecycleState: shared.LicenseLifecycleStateEnumPendingApproval.ToPointer(),
        },
        PartyID: "enim",
        ProductID: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.License != nil {
        // handle response
    }
}
```
