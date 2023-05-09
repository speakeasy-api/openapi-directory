# Document

### Available Operations

* [GetDocumentIDAspectIDCivixIndexIDCivixDocumentID](#getdocumentidaspectidcivixindexidcivixdocumentid) - Retrieves a specific document from the BCLaws legislative repository (HTML format)
* [GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchString](#getdocumentidaspectidcivixindexidcivixdocumentidsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
* [GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXML](#getdocumentidaspectidcivixindexidcivixdocumentidxml) - Retrieves a specific document from the BCLaws legislative repository (XML format)
* [GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchString](#getdocumentidaspectidcivixindexidcivixdocumentidxmlsearchsearchstring) - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)

## GetDocumentIDAspectIDCivixIndexIDCivixDocumentID

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

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
    res, err := s.Document.GetDocumentIDAspectIDCivixIndexIDCivixDocumentID(ctx, operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDRequest{
        AspectID: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDAspectIDEnumPsl,
        CivixDocumentID: "nulla",
        CivixIndexID: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchString

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

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
    res, err := s.Document.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchString(ctx, operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringRequest{
        AspectID: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringAspectIDEnumHscr,
        CivixDocumentID: "vel",
        CivixIndexID: "error",
        SearchString: "deserunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXML

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

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
    res, err := s.Document.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXML(ctx, operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLRequest{
        AspectID: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLAspectIDEnumBcgaz2,
        CivixDocumentID: "iure",
        CivixIndexID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchString

The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.

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
    res, err := s.Document.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchString(ctx, operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringRequest{
        AspectID: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringAspectIDEnumArchOic,
        CivixDocumentID: "ipsa",
        CivixIndexID: "delectus",
        SearchString: "tempora",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
