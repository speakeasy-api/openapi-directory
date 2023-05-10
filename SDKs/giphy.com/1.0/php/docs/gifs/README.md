# gifs

### Available Operations

* [getGifById](#getgifbyid) - Get GIF by Id
* [getGifsById](#getgifsbyid) - Get GIFs by ID
* [randomGif](#randomgif) - Random GIF
* [searchGifs](#searchgifs) - Search GIFs
* [translateGif](#translategif) - Translate phrase to GIF
* [trendingGifs](#trendinggifs) - Trending GIFs

## getGifById

Returns a GIF given that GIF's unique ID


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGifByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGifByIdRequest();
    $request->gifId = 592845;

    $response = $sdk->gifs->getGifById($request);

    if ($response->getGifById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGifsById

A multiget version of the get GIF by ID endpoint.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGifsByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGifsByIdRequest();
    $request->ids = 'distinctio';

    $response = $sdk->gifs->getGifsById($request);

    if ($response->getGifsById200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## randomGif

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RandomGifRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RandomGifRequest();
    $request->rating = 'quibusdam';
    $request->tag = 'unde';

    $response = $sdk->gifs->randomGif($request);

    if ($response->randomGif200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchGifs

Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchGifsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchGifsRequest();
    $request->lang = 'nulla';
    $request->limit = 544883;
    $request->offset = 847252;
    $request->q = 'vel';
    $request->rating = 'error';

    $response = $sdk->gifs->searchGifs($request);

    if ($response->searchGifs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## translateGif

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TranslateGifRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TranslateGifRequest();
    $request->s = 'deserunt';

    $response = $sdk->gifs->translateGif($request);

    if ($response->translateGif200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## trendingGifs

Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TrendingGifsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TrendingGifsRequest();
    $request->limit = 384382;
    $request->offset = 437587;
    $request->rating = 'magnam';

    $response = $sdk->gifs->trendingGifs($request);

    if ($response->trendingGifs200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
