# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/apideck.com/issue-tracking/9.3.1/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Collections.CollectionsAll(ctx, operations.CollectionsAllRequest{
        Cursor: sdk.String("corrupti"),
        Fields: sdk.String("provident"),
        Limit: sdk.Int64(715190),
        Raw: sdk.Bool(false),
        Sort: &shared.CollectionsSort{
            By: shared.CollectionsSortByEnumName.ToPointer(),
            Direction: shared.SortDirectionEnumDesc.ToPointer(),
        },
        XApideckAppID: "unde",
        XApideckConsumerID: "nulla",
        XApideckServiceID: sdk.String("corrupti"),
    }, operations.CollectionsAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Collections](docs/collections/README.md)

* [CollectionsAll](docs/collections/README.md#collectionsall) - List Collections
* [CollectionsOne](docs/collections/README.md#collectionsone) - Get Collection

### [Comments](docs/comments/README.md)

* [CollectionTicketCommentsAdd](docs/comments/README.md#collectionticketcommentsadd) - Create Comment
* [CollectionTicketCommentsAll](docs/comments/README.md#collectionticketcommentsall) - List Comments
* [CollectionTicketCommentsDelete](docs/comments/README.md#collectionticketcommentsdelete) - Delete Comment
* [CollectionTicketCommentsOne](docs/comments/README.md#collectionticketcommentsone) - Get Comment
* [CollectionTicketCommentsUpdate](docs/comments/README.md#collectionticketcommentsupdate) - Update Comment

### [Tags](docs/tags/README.md)

* [CollectionTagsAll](docs/tags/README.md#collectiontagsall) - List Tags

### [Tickets](docs/tickets/README.md)

* [CollectionTicketsAdd](docs/tickets/README.md#collectionticketsadd) - Create Ticket
* [CollectionTicketsAll](docs/tickets/README.md#collectionticketsall) - List Tickets
* [CollectionTicketsDelete](docs/tickets/README.md#collectionticketsdelete) - Delete Ticket
* [CollectionTicketsOne](docs/tickets/README.md#collectionticketsone) - Get Ticket
* [CollectionTicketsUpdate](docs/tickets/README.md#collectionticketsupdate) - Update Ticket

### [Users](docs/users/README.md)

* [CollectionUsersAll](docs/users/README.md#collectionusersall) - List Users
* [CollectionUsersOne](docs/users/README.md#collectionusersone) - Get user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
