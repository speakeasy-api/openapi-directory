# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/circl.lu/hashlookup/1.2/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    res, err := s.Default.GetChildren(ctx, operations.GetChildrenRequest{
        Count: 548814,
        Cursor: "provident",
        Sha1: "distinctio",
    })
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


### [Default](docs/default/README.md)

* [GetChildren](docs/default/README.md#getchildren) - Return children from a given SHA1.  A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [GetInfo](docs/default/README.md#getinfo) - Info about the hashlookup database
* [GetLookupMd5](docs/default/README.md#getlookupmd5) - Lookup MD5.
* [GetLookupSha1](docs/default/README.md#getlookupsha1) - Lookup SHA-1.
* [GetLookupSha256](docs/default/README.md#getlookupsha256) - Lookup SHA-256.
* [GetParents](docs/default/README.md#getparents) - Return parents from a given SHA1. A number of element to return and an offset must be given. If not set it will be the 100 first elements. A cursor must be given to paginate over. The starting cursor is 0.
* [GetSessionCreate](docs/default/README.md#getsessioncreate) - Create a session key to keep search context. The session is attached to a name. After the session is created, the header `hashlookup_session` can be set to the session name.
* [GetSessionMatches](docs/default/README.md#getsessionmatches) - Return set of matching and non-matching hashes from a session.
* [GetStattop](docs/default/README.md#getstattop) - Return the top 100 of most queried values.
* [PostBulkmd5](docs/default/README.md#postbulkmd5) - Bulk search of MD5 hashes in a JSON array with the key 'hashes'.
* [PostBulksha1](docs/default/README.md#postbulksha1) - Bulk search of SHA1 hashes in a JSON array with the 'hashes'.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
