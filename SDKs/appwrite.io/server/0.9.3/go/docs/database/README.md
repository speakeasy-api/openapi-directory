# Database

## Overview

The Database service allows you to create structured collections of documents, query and filter lists of documents

### Available Operations

* [DatabaseCreateCollection](#databasecreatecollection) - Create Collection
* [DatabaseCreateDocument](#databasecreatedocument) - Create Document
* [DatabaseDeleteCollection](#databasedeletecollection) - Delete Collection
* [DatabaseDeleteDocument](#databasedeletedocument) - Delete Document
* [DatabaseGetCollection](#databasegetcollection) - Get Collection
* [DatabaseGetDocument](#databasegetdocument) - Get Document
* [DatabaseListCollections](#databaselistcollections) - List Collections
* [DatabaseListDocuments](#databaselistdocuments) - List Documents
* [DatabaseUpdateCollection](#databaseupdatecollection) - Update Collection
* [DatabaseUpdateDocument](#databaseupdatedocument) - Update Document

## DatabaseCreateCollection

Create a new Collection.

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
    res, err := s.Database.DatabaseCreateCollection(ctx, operations.DatabaseCreateCollectionRequestBody{
        Name: "Cathy Mosciski",
        Read: []string{
            "natus",
        },
        Rules: []string{
            "hic",
            "saepe",
        },
        Write: []string{
            "in",
            "corporis",
            "iste",
        },
    }, operations.DatabaseCreateCollectionSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

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
                "saepe": "quidem",
                "architecto": "ipsa",
            },
            ParentDocument: sdk.String("reiciendis"),
            ParentProperty: sdk.String("est"),
            ParentPropertyType: sdk.String("mollitia"),
            Read: []string{
                "dolores",
                "dolorem",
                "corporis",
            },
            Write: []string{
                "nobis",
            },
        },
        CollectionID: "enim",
    }, operations.DatabaseCreateDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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

## DatabaseDeleteCollection

Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.

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
    res, err := s.Database.DatabaseDeleteCollection(ctx, operations.DatabaseDeleteCollectionRequest{
        CollectionID: "omnis",
    }, operations.DatabaseDeleteCollectionSecurity{
        Key: "YOUR_API_KEY_HERE",
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
        CollectionID: "nemo",
        DocumentID: "minima",
    }, operations.DatabaseDeleteDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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

## DatabaseGetCollection

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

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
    res, err := s.Database.DatabaseGetCollection(ctx, operations.DatabaseGetCollectionRequest{
        CollectionID: "excepturi",
    }, operations.DatabaseGetCollectionSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
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
        CollectionID: "accusantium",
        DocumentID: "iure",
    }, operations.DatabaseGetDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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

## DatabaseListCollections

Get a list of all the user collections. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's collections. [Learn more about different API modes](/docs/admin).

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
    res, err := s.Database.DatabaseListCollections(ctx, operations.DatabaseListCollectionsRequest{
        Limit: sdk.Int(634274),
        Offset: sdk.Int(988374),
        OrderType: sdk.String("sapiente"),
        Search: sdk.String("architecto"),
    }, operations.DatabaseListCollectionsSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CollectionList != nil {
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
        CollectionID: "mollitia",
        Filters: []string{
            "culpa",
        },
        Limit: sdk.Int(161309),
        Offset: sdk.Int(995300),
        OrderCast: sdk.String("mollitia"),
        OrderField: sdk.String("occaecati"),
        OrderType: sdk.String("numquam"),
        Search: sdk.String("commodi"),
    }, operations.DatabaseListDocumentsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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

## DatabaseUpdateCollection

Update a collection by its unique ID.

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
    res, err := s.Database.DatabaseUpdateCollection(ctx, operations.DatabaseUpdateCollectionRequest{
        RequestBody: &operations.DatabaseUpdateCollectionRequestBody{
            Name: "Nellie Frami",
            Read: []string{
                "vitae",
                "laborum",
            },
            Rules: []string{
                "enim",
                "odit",
                "quo",
            },
            Write: []string{
                "tenetur",
            },
        },
        CollectionID: "ipsam",
    }, operations.DatabaseUpdateCollectionSecurity{
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
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
                "possimus": "aut",
                "quasi": "error",
                "temporibus": "laborum",
            },
            Read: []string{
                "reiciendis",
            },
            Write: []string{
                "vero",
                "nihil",
                "praesentium",
                "voluptatibus",
            },
        },
        CollectionID: "ipsa",
        DocumentID: "omnis",
    }, operations.DatabaseUpdateDocumentSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
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
