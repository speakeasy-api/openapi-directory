# Documents

### Available Operations

* [DeleteDocumentsID](#deletedocumentsid) - Delete a document
* [GetDocumentsID](#getdocumentsid) - Get a document
* [PatchDocumentsID](#patchdocumentsid) - Update a document
* [PostDocuments](#postdocuments) - Upload a document for verification checks

## DeleteDocumentsID

Deletes a document.

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
    res, err := s.Documents.DeleteDocumentsID(ctx, operations.DeleteDocumentsIDRequest{
        ID: "f0cbb1e3-1b8b-490f-b443-a1108e0adcf4",
    }, operations.DeleteDocumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VoidResponse != nil {
        // handle response
    }
}
```

## GetDocumentsID

Returns a document.

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
    res, err := s.Documents.GetDocumentsID(ctx, operations.GetDocumentsIDRequest{
        ID: "b921879f-ce95-43f7-bef7-fbc7abd74dd3",
    }, operations.GetDocumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## PatchDocumentsID

Updates a document.

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
    res, err := s.Documents.PatchDocumentsID(ctx, operations.PatchDocumentsIDRequest{
        DocumentInput: &shared.DocumentInput{
            Attachment: &shared.Attachment{
                Content: "natus",
                ContentType: sdk.String("impedit"),
                Filename: sdk.String("aut"),
                PageType: sdk.String("voluptatibus"),
            },
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Content: "nulla",
                    ContentType: sdk.String("fugit"),
                    Filename: sdk.String("porro"),
                    PageType: sdk.String("maiores"),
                },
                shared.Attachment{
                    Content: "doloribus",
                    ContentType: sdk.String("iusto"),
                    Filename: sdk.String("eligendi"),
                    PageType: sdk.String("ducimus"),
                },
            },
            Description: "alias",
            ExpiryDate: sdk.String("officia"),
            FileName: sdk.String("tempora"),
            IssuerCountry: sdk.String("ipsam"),
            IssuerState: sdk.String("ea"),
            Number: sdk.String("aspernatur"),
            Owner: shared.OwnerEntity{
                ID: "6d436813-f16d-49f5-bce6-c556146c3e25",
                Type: "eaque",
            },
            Type: shared.DocumentTypeEnumProofOfIndustry,
        },
        ID: "b008c42e-141a-4ac3-a6c8-dd6b14429074",
    }, operations.PatchDocumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## PostDocuments

Uploads a document for verification checks.

 Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.

 You should only upload documents when Adyen requests additional information for the legal entity. 

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
    res, err := s.Documents.PostDocuments(ctx, shared.DocumentInput{
        Attachment: &shared.Attachment{
            Content: "odio",
            ContentType: sdk.String("eius"),
            Filename: sdk.String("esse"),
            PageType: sdk.String("esse"),
        },
        Attachments: []shared.Attachment{
            shared.Attachment{
                Content: "fuga",
                ContentType: sdk.String("reprehenderit"),
                Filename: sdk.String("quidem"),
                PageType: sdk.String("fugiat"),
            },
            shared.Attachment{
                Content: "ut",
                ContentType: sdk.String("eum"),
                Filename: sdk.String("suscipit"),
                PageType: sdk.String("assumenda"),
            },
            shared.Attachment{
                Content: "eos",
                ContentType: sdk.String("praesentium"),
                Filename: sdk.String("quisquam"),
                PageType: sdk.String("veritatis"),
            },
        },
        Description: "ipsa",
        ExpiryDate: sdk.String("id"),
        FileName: sdk.String("quidem"),
        IssuerCountry: sdk.String("neque"),
        IssuerState: sdk.String("quo"),
        Number: sdk.String("illum"),
        Owner: shared.OwnerEntity{
            ID: "ca425190-4e52-43c7-a0bc-7178e4796f2a",
            Type: "molestiae",
        },
        Type: shared.DocumentTypeEnumBankStatement,
    }, operations.PostDocumentsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```
