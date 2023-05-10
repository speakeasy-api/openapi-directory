# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectionsSort;
use \OpenAPI\OpenAPI\Models\Shared\CollectionsSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CollectionsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionsAllRequest();
    $request->cursor = 'corrupti';
    $request->fields = 'provident';
    $request->limit = 715190;
    $request->raw = false;
    $request->sort = new CollectionsSort();
    $request->sort->by = CollectionsSortByEnum::NAME;
    $request->sort->direction = SortDirectionEnum::DESC;
    $request->xApideckAppId = 'unde';
    $request->xApideckConsumerId = 'nulla';
    $request->xApideckServiceId = 'corrupti';

    $requestSecurity = new CollectionsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->collections->collectionsAll($request, $requestSecurity);

    if ($response->getCollectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
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
