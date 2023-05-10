# stickers

### Available Operations

* [randomSticker](#randomsticker) - Random Sticker
* [searchStickers](#searchstickers) - Search Stickers
* [translateSticker](#translatesticker) - Translate phrase to Sticker
* [trendingStickers](#trendingstickers) - Trending Stickers

## randomSticker

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RandomStickerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RandomStickerRequest();
    $request->rating = 'debitis';
    $request->tag = 'ipsa';

    $response = $sdk->stickers->randomSticker($request);

    if ($response->randomSticker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchStickers

Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchStickersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchStickersRequest();
    $request->lang = 'delectus';
    $request->limit = 272656;
    $request->offset = 383441;
    $request->q = 'molestiae';
    $request->rating = 'minus';

    $response = $sdk->stickers->searchStickers($request);

    if ($response->searchStickers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateSticker

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TranslateStickerRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateStickerRequest();
    $request->s = 'placeat';

    $response = $sdk->stickers->translateSticker($request);

    if ($response->translateSticker200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trendingStickers

Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrendingStickersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrendingStickersRequest();
    $request->limit = 528895;
    $request->offset = 479977;
    $request->rating = 'excepturi';

    $response = $sdk->stickers->trendingStickers($request);

    if ($response->trendingStickers200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
