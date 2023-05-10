# marketplacesChannelCatalogsPublications

### Available Operations

* [getPublications](#getpublications) - Fetch the publication history for an account, sorted by descending start date
* [publishCatalogToMarketplace](#publishcatalogtomarketplace) - [PREVIEW] Launch a publication of the catalog to the marketplace

## getPublications

Fetch the publication history for an account, sorted by descending start date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPublicationsPublicationTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPublicationsRequest();
    $request->accountId = 311796;
    $request->channelCatalogId = 'accusamus';
    $request->count = 696344;
    $request->marketplaceTechnicalCode = 'voluptatibus';
    $request->publicationTypes = [
        GetPublicationsPublicationTypesEnum::PUBLISH_PRODUCT_IMAGES_ENUM,
        GetPublicationsPublicationTypesEnum::PUBLISH_OFFERS,
    ];

    $response = $sdk->marketplacesChannelCatalogsPublications->getPublications($request);

    if ($response->accountPublications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishCatalogToMarketplace

[PREVIEW] Launch a publication of the catalog to the marketplace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PublishCatalogToMarketplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\PublishCatalogToMarketplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeedTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublicationStrategyKindEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishCatalogToMarketplaceRequest();
    $request->accountId = 542499;
    $request->marketplaceTechnicalCode = 'sit';
    $request->publishCatalogToMarketplaceRequest = new PublishCatalogToMarketplaceRequest();
    $request->publishCatalogToMarketplaceRequest->feedType = FeedTypeEnum::OFFERS;
    $request->publishCatalogToMarketplaceRequest->publicationStrategyKind = PublicationStrategyKindEnum::FULL;
    $request->publishCatalogToMarketplaceRequest->withUnpublish = false;

    $response = $sdk->marketplacesChannelCatalogsPublications->publishCatalogToMarketplace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
