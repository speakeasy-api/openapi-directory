# OrganisationsLicenses

## Overview

If you carry on a business you may need to hold a licence.

  For example, if you provide financial services, you are required to hold an Australian Financial
  Services (AFS) licence.


### Available Operations

* [DeleteOrganisationsPartyIDLicensesProductID](#deleteorganisationspartyidlicensesproductid) - Delete a license
* [GetOrganisationsPartyIDLicenses](#getorganisationspartyidlicenses) - Retrieve a list of licenses
* [GetOrganisationsPartyIDLicensesProductID](#getorganisationspartyidlicensesproductid) - Retrieve a license
* [PostOrganisationsPartyIDLicenses](#postorganisationspartyidlicenses) - Create a license
* [PutOrganisationsPartyIDLicensesProductID](#putorganisationspartyidlicensesproductid) - Update a license

## DeleteOrganisationsPartyIDLicensesProductID

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
    res, err := s.OrganisationsLicenses.DeleteOrganisationsPartyIDLicensesProductID(ctx, operations.DeleteOrganisationsPartyIDLicensesProductIDRequest{
        APIKey: "nobis",
        PartyID: "dolores",
        ProductID: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganisationsPartyIDLicenses

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
    res, err := s.OrganisationsLicenses.GetOrganisationsPartyIDLicenses(ctx, operations.GetOrganisationsPartyIDLicensesRequest{
        APIKey: "totam",
        PartyID: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Licenses != nil {
        // handle response
    }
}
```

## GetOrganisationsPartyIDLicensesProductID

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
    res, err := s.OrganisationsLicenses.GetOrganisationsPartyIDLicensesProductID(ctx, operations.GetOrganisationsPartyIDLicensesProductIDRequest{
        APIKey: "eaque",
        PartyID: "quis",
        ProductID: "nesciunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.License != nil {
        // handle response
    }
}
```

## PostOrganisationsPartyIDLicenses

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
    res, err := s.OrganisationsLicenses.PostOrganisationsPartyIDLicenses(ctx, operations.PostOrganisationsPartyIDLicensesRequest{
        APIKey: "eos",
        LicenseInput: shared.LicenseInput{
            LicenseType: shared.LicenseLicenseTypeEnumAustralianFinancialServicesLicense.ToPointer(),
            LifecycleState: shared.LicenseLifecycleStateEnumApproved.ToPointer(),
        },
        PartyID: "minus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.License != nil {
        // handle response
    }
}
```

## PutOrganisationsPartyIDLicensesProductID

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
    res, err := s.OrganisationsLicenses.PutOrganisationsPartyIDLicensesProductID(ctx, operations.PutOrganisationsPartyIDLicensesProductIDRequest{
        APIKey: "quam",
        LicenseInput: shared.LicenseInput{
            LicenseType: shared.LicenseLicenseTypeEnumAustralianFinancialServicesLicense.ToPointer(),
            LifecycleState: shared.LicenseLifecycleStateEnumSuspended.ToPointer(),
        },
        PartyID: "nostrum",
        ProductID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.License != nil {
        // handle response
    }
}
```
