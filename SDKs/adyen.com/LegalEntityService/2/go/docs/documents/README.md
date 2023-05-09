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
        ID: "7b0074f1-5471-4b5e-ae13-b99d488e1e91",
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
        ID: "e450ad2a-bd44-4269-802d-502a94bb4f63",
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
                Content: "eligendi",
                ContentType: sdk.String("sint"),
                Filename: sdk.String("aliquid"),
                PageName: sdk.String("provident"),
                PageType: sdk.String("necessitatibus"),
            },
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Content: "officia",
                    ContentType: sdk.String("dolor"),
                    Filename: sdk.String("debitis"),
                    PageName: sdk.String("a"),
                    PageType: sdk.String("dolorum"),
                },
                shared.Attachment{
                    Content: "in",
                    ContentType: sdk.String("in"),
                    Filename: sdk.String("illum"),
                    PageName: sdk.String("maiores"),
                    PageType: sdk.String("rerum"),
                },
                shared.Attachment{
                    Content: "dicta",
                    ContentType: sdk.String("magnam"),
                    Filename: sdk.String("cumque"),
                    PageName: sdk.String("facere"),
                    PageType: sdk.String("ea"),
                },
            },
            Description: "aliquid",
            ExpiryDate: sdk.String("laborum"),
            FileName: sdk.String("accusamus"),
            IssuerCountry: sdk.String("non"),
            IssuerState: sdk.String("occaecati"),
            Number: sdk.String("enim"),
            Owner: shared.OwnerEntity{
                ID: "efb9ba88-f3a6-4699-b074-ba4469b6e214",
                Type: "et",
            },
            Type: shared.DocumentTypeEnumProofOfResidency,
        },
        ID: "59890afa-563e-4251-afe4-c8b711e5b7fd",
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
            Content: "sed",
            ContentType: sdk.String("saepe"),
            Filename: sdk.String("pariatur"),
            PageName: sdk.String("accusantium"),
            PageType: sdk.String("consequuntur"),
        },
        Attachments: []shared.Attachment{
            shared.Attachment{
                Content: "natus",
                ContentType: sdk.String("magni"),
                Filename: sdk.String("sunt"),
                PageName: sdk.String("quo"),
                PageType: sdk.String("illum"),
            },
            shared.Attachment{
                Content: "pariatur",
                ContentType: sdk.String("maxime"),
                Filename: sdk.String("ea"),
                PageName: sdk.String("excepturi"),
                PageType: sdk.String("odit"),
            },
            shared.Attachment{
                Content: "ea",
                ContentType: sdk.String("accusantium"),
                Filename: sdk.String("ab"),
                PageName: sdk.String("maiores"),
                PageType: sdk.String("quidem"),
            },
        },
        Description: "ipsam",
        ExpiryDate: sdk.String("voluptate"),
        FileName: sdk.String("autem"),
        IssuerCountry: sdk.String("nam"),
        IssuerState: sdk.String("eaque"),
        Number: sdk.String("pariatur"),
        Owner: shared.OwnerEntity{
            ID: "5f0d30c5-fbb2-4587-8532-02c73d5fe9b9",
            Type: "voluptatem",
        },
        Type: shared.DocumentTypeEnumProofOfOrganizationTaxInfo,
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
