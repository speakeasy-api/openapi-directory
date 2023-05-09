# Verification

### Available Operations

* [PostCheckAccountHolder](#postcheckaccountholder) - Trigger verification
* [PostDeleteBankAccounts](#postdeletebankaccounts) - Delete bank accounts
* [PostDeleteLegalArrangements](#postdeletelegalarrangements) - Delete legal arrangements
* [PostDeletePayoutMethods](#postdeletepayoutmethods) - Delete payout methods
* [PostDeleteShareholders](#postdeleteshareholders) - Delete shareholders
* [PostDeleteSignatories](#postdeletesignatories) - Delete signatories
* [PostGetUploadedDocuments](#postgetuploadeddocuments) - Get documents
* [PostUploadDocument](#postuploaddocument) - Upload a document

## PostCheckAccountHolder

Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostCheckAccountHolder(ctx, shared.PerformVerificationRequest{
        AccountHolderCode: "iure",
        AccountStateType: shared.PerformVerificationRequestAccountStateTypeEnumProcessing,
        Tier: 667646,
    }, operations.PostCheckAccountHolderSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostDeleteBankAccounts

Deletes bank accounts associated with an account holder. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostDeleteBankAccounts(ctx, shared.DeleteBankAccountRequest{
        AccountHolderCode: "fugit",
        BankAccountUUIDs: []string{
            "necessitatibus",
        },
    }, operations.PostDeleteBankAccountsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostDeleteLegalArrangements

Deletes legal arrangements and/or legal arrangement entities associated with an account holder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostDeleteLegalArrangements(ctx, shared.DeleteLegalArrangementRequest{
        AccountHolderCode: "iste",
        LegalArrangements: []shared.LegalArrangementRequest{
            shared.LegalArrangementRequest{
                LegalArrangementCode: "ipsam",
                LegalArrangementEntityCodes: []string{
                    "cumque",
                },
            },
        },
    }, operations.PostDeleteLegalArrangementsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostDeletePayoutMethods

Deletes payout methods associated with an account holder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostDeletePayoutMethods(ctx, shared.DeletePayoutMethodRequest{
        AccountHolderCode: "quidem",
        PayoutMethodCodes: []string{
            "beatae",
        },
    }, operations.PostDeletePayoutMethodsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostDeleteShareholders

Deletes shareholders associated with an account holder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostDeleteShareholders(ctx, shared.DeleteShareholderRequest{
        AccountHolderCode: "sunt",
        ShareholderCodes: []string{
            "beatae",
            "autem",
            "ducimus",
        },
    }, operations.PostDeleteShareholdersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostDeleteSignatories

Deletes signatories associated with an account holder.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostDeleteSignatories(ctx, shared.DeleteSignatoriesRequest{
        AccountHolderCode: "libero",
        SignatoryCodes: []string{
            "necessitatibus",
            "ipsum",
            "impedit",
        },
    }, operations.PostDeleteSignatoriesSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GenericResponse != nil {
        // handle response
    }
}
```

## PostGetUploadedDocuments

Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostGetUploadedDocuments(ctx, shared.GetUploadedDocumentsRequest{
        AccountHolderCode: "quos",
        BankAccountUUID: sdk.String("illum"),
        ShareholderCode: sdk.String("distinctio"),
    }, operations.PostGetUploadedDocumentsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUploadedDocumentsResponse != nil {
        // handle response
    }
}
```

## PostUploadDocument

Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Verification.PostUploadDocument(ctx, shared.UploadDocumentRequest{
        DocumentContent: "voluptatem",
        DocumentDetail: shared.DocumentDetail{
            AccountHolderCode: sdk.String("non"),
            BankAccountUUID: sdk.String("quaerat"),
            Description: sdk.String("consequatur"),
            DocumentType: shared.DocumentDetailDocumentTypeEnumIDCard,
            Filename: sdk.String("repellendus"),
            LegalArrangementCode: sdk.String("commodi"),
            LegalArrangementEntityCode: sdk.String("quibusdam"),
            ShareholderCode: sdk.String("consectetur"),
            SignatoryCode: sdk.String("voluptas"),
        },
    }, operations.PostUploadDocumentSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccountHolderResponse != nil {
        // handle response
    }
}
```
