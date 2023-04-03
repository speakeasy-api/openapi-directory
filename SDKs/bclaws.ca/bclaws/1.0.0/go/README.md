# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/bclaws.ca/bclaws/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetContentAspectIDRequest{
        AspectID: "oic",
    }

    ctx := context.Background()
    res, err := s.Content.GetContentAspectID(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Content

* `GetContentAspectID` - Describes the documents and directories available within a specific 'aspect' (content group) of the BCLaws library
* `GetContentAspectIDCivixDocumentID` - Lists the metadata available for the specified index or directory from the BCLaws legislative respository

### Document

* `GetDocumentIDAspectIDCivixIndexIDCivixDocumentID` - Retrieves a specific document from the BCLaws legislative repository (HTML format)
* `GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchString` - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
* `GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXML` - Retrieves a specific document from the BCLaws legislative repository (XML format)
* `GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchString` - Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)

### Search

* `GetSearchAspectIDFullsearch` - A listing of metadata available for the specified aspect and search term from the BCLaws legislative repository
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
