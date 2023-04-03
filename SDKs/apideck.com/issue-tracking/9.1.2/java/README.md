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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CollectionsAllSecurity;
import org.openapis.openapi.models.operations.CollectionsAllRequest;
import org.openapis.openapi.models.operations.CollectionsAllResponse;
import org.openapis.openapi.models.shared.CollectionsSortByEnum;
import org.openapis.openapi.models.shared.CollectionsSort;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionsAllRequest req = new CollectionsAllRequest() {{
                cursor = "corrupti";
                fields = "provident";
                limit = 715190;
                raw = false;
                sort = new CollectionsSort() {{
                    by = "name";
                    direction = "desc";
                }};
                xApideckAppId = "unde";
                xApideckConsumerId = "nulla";
                xApideckServiceId = "corrupti";
            }}            

            CollectionsAllResponse res = sdk.collections.collectionsAll(req, new CollectionsAllSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCollectionsResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### collections

* `collectionsAll` - List Collections
* `collectionsOne` - Get Collection

### comments

* `collectionTicketCommentsAdd` - Create Comment
* `collectionTicketCommentsAll` - List Comments
* `collectionTicketCommentsDelete` - Delete Comment
* `collectionTicketCommentsOne` - Get Comment
* `collectionTicketCommentsUpdate` - Update Comment

### tags

* `collectionTagsAll` - List Tags

### tickets

* `collectionTicketsAdd` - Create Ticket
* `collectionTicketsAll` - List Tickets
* `collectionTicketsDelete` - Delete Ticket
* `collectionTicketsOne` - Get Ticket
* `collectionTicketsUpdate` - Update Ticket

### users

* `collectionUsersAll` - List Users
* `collectionUsersOne` - Get user
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
