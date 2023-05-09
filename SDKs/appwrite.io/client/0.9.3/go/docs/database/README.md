# Database

## Overview

The Database service allows you to create structured collections of documents, query and filter lists of documents

### Available Operations

* [DatabaseCreateDocument](#databasecreatedocument) - Create Document
* [DatabaseDeleteDocument](#databasedeletedocument) - Delete Document
* [DatabaseGetDocument](#databasegetdocument) - Get Document
* [DatabaseListDocuments](#databaselistdocuments) - List Documents
* [DatabaseUpdateDocument](#databaseupdatedocument) - Update Document

## DatabaseCreateDocument

Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](/docs/server/database#databaseCreateCollection) API or directly from your database console.

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
    res, err := s.Database.DatabaseCreateDocument(ctx, operations.DatabaseCreateDocumentRequest{
        RequestBody: &operations.DatabaseCreateDocumentRequestBody{
            Data: map[string]interface{}{
                "nemo": "minima",
                "excepturi": "accusantium",
                "iure": "culpa",
            },
            ParentDocument: sdk.String("doloribus"),
            ParentProperty: sdk.String("sapiente"),
            ParentPropertyType: sdk.String("architecto"),
            Read: []string{
                "dolorem",
                "culpa",
                "consequuntur",
            },
            Write: []string{
                "mollitia",
                "occaecati",
                "numquam",
                "commodi",
            },
        },
        CollectionID: "quam",
    }, operations.DatabaseCreateDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## DatabaseDeleteDocument

Delete a document by its unique ID. This endpoint deletes only the parent documents, its attributes and relations to other documents. Child documents **will not** be deleted.

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
    res, err := s.Database.DatabaseDeleteDocument(ctx, operations.DatabaseDeleteDocumentRequest{
        CollectionID: "molestiae",
        DocumentID: "velit",
    }, operations.DatabaseDeleteDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DatabaseGetDocument

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

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
    res, err := s.Database.DatabaseGetDocument(ctx, operations.DatabaseGetDocumentRequest{
        CollectionID: "error",
        DocumentID: "quia",
    }, operations.DatabaseGetDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```

## DatabaseListDocuments

Get a list of all the user documents. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's documents. [Learn more about different API modes](/docs/admin).

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
    res, err := s.Database.DatabaseListDocuments(ctx, operations.DatabaseListDocumentsRequest{
        CollectionID: "quis",
        Filters: []string{
            "laborum",
        },
        Limit: sdk.Int(656330),
        Offset: sdk.Int(317202),
        OrderCast: sdk.String("odit"),
        OrderField: sdk.String("quo"),
        OrderType: sdk.String("sequi"),
        Search: sdk.String("tenetur"),
    }, operations.DatabaseListDocumentsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DocumentList != nil {
        // handle response
    }
}
```

## DatabaseUpdateDocument

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

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
    res, err := s.Database.DatabaseUpdateDocument(ctx, operations.DatabaseUpdateDocumentRequest{
        RequestBody: &operations.DatabaseUpdateDocumentRequestBody{
            Data: map[string]interface{}{
                "id": "possimus",
                "aut": "quasi",
            },
            Read: []string{
                "temporibus",
                "laborum",
                "quasi",
            },
            Write: []string{
                "voluptatibus",
                "vero",
                "nihil",
                "praesentium",
            },
        },
        CollectionID: "voluptatibus",
        DocumentID: "ipsa",
    }, operations.DatabaseUpdateDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Document != nil {
        // handle response
    }
}
```
