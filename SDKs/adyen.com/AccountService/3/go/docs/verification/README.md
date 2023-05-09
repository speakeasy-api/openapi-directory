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
        AccountHolderCode: "id",
        BankAccountUUIDs: []string{
            "dolore",
            "dolorum",
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
        AccountHolderCode: "nesciunt",
        LegalArrangements: []shared.LegalArrangementRequestWrapper{
            shared.LegalArrangementRequestWrapper{
                LegalArrangementRequest: &shared.LegalArrangementRequest{
                    LegalArrangementCode: "recusandae",
                    LegalArrangementEntityCodes: []string{
                        "quaerat",
                        "molestiae",
                        "ex",
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
        AccountHolderCode: "ut",
        ShareholderCodes: []string{
            "adipisci",
            "debitis",
            "laudantium",
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
        AccountHolderCode: "eum",
        SignatoryCodes: []string{
            "recusandae",
            "esse",
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
        AccountHolderCode: "provident",
        BankAccountUUID: sdk.String("quis"),
        ShareholderCode: sdk.String("eum"),
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
        AccountHolderCode: sdk.String("reiciendis"),
        BankAccountUUID: sdk.String("provident"),
        DocumentContent: "aspernatur",
        DocumentDetail: shared.DocumentDetail{
            AccountHolderCode: sdk.String("ullam"),
            BankAccountUUID: sdk.String("quasi"),
            Description: sdk.String("animi"),
            DocumentType: shared.DocumentDetailDocumentTypeEnumDrivingLicenceBack,
            Filename: sdk.String("mollitia"),
            ShareholderCode: sdk.String("provident"),
            SignatoryCode: sdk.String("possimus"),
        },
        ShareholderCode: sdk.String("animi"),
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
