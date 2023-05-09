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
        ID: "aff1a3a2-fa94-4677-b925-1aa52c3f5ad0",
    }, operations.DeleteDocumentsIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Void != nil {
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
        ID: "19da1ffe-78f0-497b-8074-f15471b5e6e1",
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
                Content: "ipsum",
                ContentType: sdk.String("quidem"),
                Filename: sdk.String("molestias"),
                PageType: sdk.String("excepturi"),
            },
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Content: "modi",
                    ContentType: sdk.String("praesentium"),
                    Filename: sdk.String("rem"),
                    PageType: sdk.String("voluptates"),
                },
                shared.Attachment{
                    Content: "quasi",
                    ContentType: sdk.String("repudiandae"),
                    Filename: sdk.String("sint"),
                    PageType: sdk.String("veritatis"),
                },
                shared.Attachment{
                    Content: "itaque",
                    ContentType: sdk.String("incidunt"),
                    Filename: sdk.String("enim"),
                    PageType: sdk.String("consequatur"),
                },
                shared.Attachment{
                    Content: "est",
                    ContentType: sdk.String("quibusdam"),
                    Filename: sdk.String("explicabo"),
                    PageType: sdk.String("deserunt"),
                },
            },
            Description: "distinctio",
            ExpiryDate: sdk.String("quibusdam"),
            FileName: sdk.String("labore"),
            IssuerCountry: sdk.String("modi"),
            IssuerState: sdk.String("qui"),
            Number: sdk.String("aliquid"),
            Owner: shared.OwnerEntity{
                ID: "9802d502-a94b-4b4f-a3c9-69e9a3efa77d",
                Type: "maiores",
            },
            Type: shared.DocumentTypeEnumProofOfResidency,
        },
        ID: "14cd66ae-395e-4fb9-ba88-f3a66997074b",
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
            Content: "id",
            ContentType: sdk.String("labore"),
            Filename: sdk.String("labore"),
            PageType: sdk.String("suscipit"),
        },
        Attachments: []shared.Attachment{
            shared.Attachment{
                Content: "nobis",
                ContentType: sdk.String("eum"),
                Filename: sdk.String("vero"),
                PageType: sdk.String("aspernatur"),
            },
            shared.Attachment{
                Content: "architecto",
                ContentType: sdk.String("magnam"),
                Filename: sdk.String("et"),
                PageType: sdk.String("excepturi"),
            },
            shared.Attachment{
                Content: "ullam",
                ContentType: sdk.String("provident"),
                Filename: sdk.String("quos"),
                PageType: sdk.String("sint"),
            },
        },
        Description: "accusantium",
        ExpiryDate: sdk.String("mollitia"),
        FileName: sdk.String("reiciendis"),
        IssuerCountry: sdk.String("mollitia"),
        IssuerState: sdk.String("ad"),
        Number: sdk.String("eum"),
        Owner: shared.OwnerEntity{
            ID: "3e2516fe-4c8b-4711-a5b7-fd2ed028921c",
            Type: "illum",
        },
        Type: shared.DocumentTypeEnumTaxDocument,
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
