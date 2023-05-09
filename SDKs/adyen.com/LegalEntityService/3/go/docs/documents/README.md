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
        ID: "074f1547-1b5e-46e1-bb99-d488e1e91e45",
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
        ID: "0ad2abd4-4269-4802-9502-a94bb4f63c96",
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
                Content: "provident",
                ContentType: sdk.String("necessitatibus"),
                Filename: sdk.String("sint"),
                PageName: sdk.String("officia"),
                PageType: sdk.String("dolor"),
            },
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Content: "a",
                    ContentType: sdk.String("dolorum"),
                    Filename: sdk.String("in"),
                    PageName: sdk.String("in"),
                    PageType: sdk.String("illum"),
                },
                shared.Attachment{
                    Content: "maiores",
                    ContentType: sdk.String("rerum"),
                    Filename: sdk.String("dicta"),
                    PageName: sdk.String("magnam"),
                    PageType: sdk.String("cumque"),
                },
                shared.Attachment{
                    Content: "facere",
                    ContentType: sdk.String("ea"),
                    Filename: sdk.String("aliquid"),
                    PageName: sdk.String("laborum"),
                    PageType: sdk.String("accusamus"),
                },
                shared.Attachment{
                    Content: "non",
                    ContentType: sdk.String("occaecati"),
                    Filename: sdk.String("enim"),
                    PageName: sdk.String("accusamus"),
                    PageType: sdk.String("delectus"),
                },
            },
            Description: "quidem",
            ExpiryDate: sdk.String("provident"),
            FileName: sdk.String("nam"),
            IssuerCountry: sdk.String("id"),
            IssuerState: sdk.String("blanditiis"),
            Number: sdk.String("deleniti"),
            Owner: shared.OwnerEntity{
                ID: "f3a66997-074b-4a44-a9b6-e2141959890a",
                Type: "reiciendis",
            },
            Type: shared.DocumentTypeEnumRegistrationDocument,
        },
        ID: "563e2516-fe4c-48b7-91e5-b7fd2ed02892",
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
            Content: "sunt",
            ContentType: sdk.String("quo"),
            Filename: sdk.String("illum"),
            PageName: sdk.String("pariatur"),
            PageType: sdk.String("maxime"),
        },
        Attachments: []shared.Attachment{
            shared.Attachment{
                Content: "excepturi",
                ContentType: sdk.String("odit"),
                Filename: sdk.String("ea"),
                PageName: sdk.String("accusantium"),
                PageType: sdk.String("ab"),
            },
            shared.Attachment{
                Content: "maiores",
                ContentType: sdk.String("quidem"),
                Filename: sdk.String("ipsam"),
                PageName: sdk.String("voluptate"),
                PageType: sdk.String("autem"),
            },
        },
        Description: "nam",
        ExpiryDate: sdk.String("eaque"),
        FileName: sdk.String("pariatur"),
        IssuerCountry: sdk.String("nemo"),
        IssuerState: sdk.String("voluptatibus"),
        Number: sdk.String("perferendis"),
        Owner: shared.OwnerEntity{
            ID: "d30c5fbb-2587-4053-a02c-73d5fe9b90c2",
            Type: "blanditiis",
        },
        Type: shared.DocumentTypeEnumRegistrationDocument,
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
