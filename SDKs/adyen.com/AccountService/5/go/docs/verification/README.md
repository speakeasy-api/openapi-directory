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
        AccountHolderCode: "porro",
        AccountStateType: shared.PerformVerificationRequestAccountStateTypeEnumLimitlessPayout,
        Tier: 751022,
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
        AccountHolderCode: "laboriosam",
        BankAccountUUIDs: []string{
            "consequuntur",
            "voluptatem",
            "exercitationem",
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
        AccountHolderCode: "quasi",
        LegalArrangements: []shared.LegalArrangementRequest{
            shared.LegalArrangementRequest{
                LegalArrangementCode: "at",
                LegalArrangementEntityCodes: []string{
                    "est",
                    "harum",
                    "sequi",
                    "doloribus",
                },
            },
            shared.LegalArrangementRequest{
                LegalArrangementCode: "repudiandae",
                LegalArrangementEntityCodes: []string{
                    "occaecati",
                    "nemo",
                    "voluptate",
                    "blanditiis",
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
        AccountHolderCode: "officia",
        PayoutMethodCodes: []string{
            "numquam",
            "nemo",
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
        AccountHolderCode: "quos",
        ShareholderCodes: []string{
            "aspernatur",
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
        AccountHolderCode: "nesciunt",
        SignatoryCodes: []string{
            "laudantium",
            "incidunt",
            "quasi",
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
        AccountHolderCode: "rem",
        BankAccountUUID: sdk.String("fugiat"),
        ShareholderCode: sdk.String("dicta"),
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
        DocumentContent: "nisi",
        DocumentDetail: shared.DocumentDetail{
            AccountHolderCode: sdk.String("consequuntur"),
            BankAccountUUID: sdk.String("consectetur"),
            Description: sdk.String("aperiam"),
            DocumentType: shared.DocumentDetailDocumentTypeEnumIDCardBack,
            Filename: sdk.String("reiciendis"),
            ShareholderCode: sdk.String("soluta"),
            SignatoryCode: sdk.String("alias"),
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
