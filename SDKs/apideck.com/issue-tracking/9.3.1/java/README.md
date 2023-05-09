# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionsAllRequest;
import org.openapis.openapi.models.operations.CollectionsAllResponse;
import org.openapis.openapi.models.operations.CollectionsAllSecurity;
import org.openapis.openapi.models.shared.CollectionsSort;
import org.openapis.openapi.models.shared.CollectionsSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsAllRequest req = new CollectionsAllRequest("corrupti", "provident") {{
                cursor = "distinctio";
                fields = "quibusdam";
                limit = 602763L;
                raw = false;
                sort = new CollectionsSort() {{
                    by = CollectionsSortByEnum.NAME;
                    direction = SortDirectionEnum.DESC;
                }};;
                xApideckServiceId = "corrupti";
            }};            

            CollectionsAllResponse res = sdk.collections.collectionsAll(req, new CollectionsAllSecurity("illum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCollectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [collections](docs/collections/README.md)

* [collectionsAll](docs/collections/README.md#collectionsall) - List Collections
* [collectionsOne](docs/collections/README.md#collectionsone) - Get Collection

### [comments](docs/comments/README.md)

* [collectionTicketCommentsAdd](docs/comments/README.md#collectionticketcommentsadd) - Create Comment
* [collectionTicketCommentsAll](docs/comments/README.md#collectionticketcommentsall) - List Comments
* [collectionTicketCommentsDelete](docs/comments/README.md#collectionticketcommentsdelete) - Delete Comment
* [collectionTicketCommentsOne](docs/comments/README.md#collectionticketcommentsone) - Get Comment
* [collectionTicketCommentsUpdate](docs/comments/README.md#collectionticketcommentsupdate) - Update Comment

### [tags](docs/tags/README.md)

* [collectionTagsAll](docs/tags/README.md#collectiontagsall) - List Tags

### [tickets](docs/tickets/README.md)

* [collectionTicketsAdd](docs/tickets/README.md#collectionticketsadd) - Create Ticket
* [collectionTicketsAll](docs/tickets/README.md#collectionticketsall) - List Tickets
* [collectionTicketsDelete](docs/tickets/README.md#collectionticketsdelete) - Delete Ticket
* [collectionTicketsOne](docs/tickets/README.md#collectionticketsone) - Get Ticket
* [collectionTicketsUpdate](docs/tickets/README.md#collectionticketsupdate) - Update Ticket

### [users](docs/users/README.md)

* [collectionUsersAll](docs/users/README.md#collectionusersall) - List Users
* [collectionUsersOne](docs/users/README.md#collectionusersone) - Get user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
