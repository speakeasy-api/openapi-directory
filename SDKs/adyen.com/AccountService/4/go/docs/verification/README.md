# Verification

### Available Operations

* [PostDeleteBankAccounts](#postdeletebankaccounts) - Delete bank accounts
* [PostDeleteLegalArrangements](#postdeletelegalarrangements) - Delete legal arrangements
* [PostDeleteShareholders](#postdeleteshareholders) - Delete shareholders
* [PostDeleteSignatories](#postdeletesignatories) - Delete signatories
* [PostGetUploadedDocuments](#postgetuploadeddocuments) - Get documents
* [PostUploadDocument](#postuploaddocument) - Upload a document

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
        AccountHolderCode: "eos",
        BankAccountUUIDs: []string{
            "eum",
            "dicta",
            "minima",
            "beatae",
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
        AccountHolderCode: "cupiditate",
        LegalArrangements: []shared.LegalArrangementRequestWrapper{
            shared.LegalArrangementRequestWrapper{
                LegalArrangementRequest: &shared.LegalArrangementRequest{
                    LegalArrangementCode: "earum",
                    LegalArrangementEntityCodes: []string{
                        "hic",
                        "illum",
                        "eaque",
                    },
                },
            },
            shared.LegalArrangementRequestWrapper{
                LegalArrangementRequest: &shared.LegalArrangementRequest{
                    LegalArrangementCode: "earum",
                    LegalArrangementEntityCodes: []string{
                        "maiores",
                        "debitis",
                        "aliquid",
                    },
                },
            },
            shared.LegalArrangementRequestWrapper{
                LegalArrangementRequest: &shared.LegalArrangementRequest{
                    LegalArrangementCode: "porro",
                    LegalArrangementEntityCodes: []string{
                        "dolorem",
                        "fugit",
                    },
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
        AccountHolderCode: "cumque",
        ShareholderCodes: []string{
            "ratione",
            "animi",
            "necessitatibus",
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
        AccountHolderCode: "nulla",
        SignatoryCodes: []string{
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
        AccountHolderCode: "et",
        BankAccountUUID: sdk.String("ducimus"),
        ShareholderCode: sdk.String("natus"),
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
        AccountHolderCode: sdk.String("occaecati"),
        BankAccountUUID: sdk.String("suscipit"),
        DocumentContent: "adipisci",
        DocumentDetail: shared.DocumentDetail{
            AccountHolderCode: sdk.String("quasi"),
            BankAccountUUID: sdk.String("magni"),
            Description: sdk.String("doloribus"),
            DocumentType: shared.DocumentDetailDocumentTypeEnumProofOfResidency,
            Filename: sdk.String("necessitatibus"),
            ShareholderCode: sdk.String("ipsa"),
            SignatoryCode: sdk.String("tempora"),
        },
        ShareholderCode: sdk.String("nihil"),
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
