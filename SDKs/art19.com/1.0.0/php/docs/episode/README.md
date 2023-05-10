# episode

### Available Operations

* [getEpisodes](#getepisodes) - Get a list of episodes
* [getEpisodesId](#getepisodesid) - Get a specific episode
* [getEpisodesIdNextSibling](#getepisodesidnextsibling) - Get the episode released right after the specified one
* [getEpisodesIdPreviousSibling](#getepisodesidprevioussibling) - Get the episode released right before the specified one

## getEpisodes

One initial filter must be provided (`ids`, `series_id`, or `season_id`), otherwise a `400 Bad Request` response
will be returned. Additional filters are allowed.

This API will only return episodes that your credential has permission to access, which may not be exclusive to
your account, depending on the filter(s) being used. Be careful to filter the results as needed.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesSortEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEpisodesRequest();
    $request->ids = [
        '5d2cff7c-70a4-4562-ad43-6813f16d9f5f',
        'ce6c5561-46c3-4e25-8fb0-08c42e141aac',
        '366c8dd6-b144-4290-b474-778a7bd466d2',
        '8c10ab3c-dca4-4251-904e-523c7e0bc717',
    ];
    $request->includedInInventoryCalendar = '8e4796f2-a70c-4688-a82a-a482562f222e';
    $request->month = 'occaecati';
    $request->pageNumber = 543806;
    $request->pageSize = 92260;
    $request->published = false;
    $request->q = 'esse';
    $request->releasedAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-05-10T03:57:05.694Z');
    $request->releasedBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T14:37:45.086Z');
    $request->rss = false;
    $request->seasonId = 'cbe61e6b-7b95-4bc0-ab3c-20c4f3789fd8';
    $request->seriesId = '71f99dd2-efd1-421a-a6f1-e674bdb04f15';
    $request->sort = [
        GetEpisodesSortEnum::RELEASED_AT,
        GetEpisodesSortEnum::RELEASED_AT,
    ];
    $request->year = 'aut';

    $requestSecurity = new GetEpisodesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->episode->getEpisodes($request, $requestSecurity);

    if ($response->getEpisodes200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEpisodesId

Get a specific episode

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEpisodesIdRequest();
    $request->id = '82d68ea1-9f1d-4170-9133-9d08086a1840';

    $requestSecurity = new GetEpisodesIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->episode->getEpisodesId($request, $requestSecurity);

    if ($response->getEpisodesId200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEpisodesIdNextSibling

Get the episode released right after the specified one

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesIdNextSiblingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesIdNextSiblingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEpisodesIdNextSiblingRequest();
    $request->id = '394c2607-1f93-4f5f-8642-dac7af515cc4';
    $request->rss = false;

    $requestSecurity = new GetEpisodesIdNextSiblingSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->episode->getEpisodesIdNextSibling($request, $requestSecurity);

    if ($response->getEpisodesIdNextSibling200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEpisodesIdPreviousSibling

Get the episode released right before the specified one

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesIdPreviousSiblingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEpisodesIdPreviousSiblingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEpisodesIdPreviousSiblingRequest();
    $request->id = '13aa63aa-e8d6-4786-8dbb-675fd5e60b37';
    $request->rss = false;

    $requestSecurity = new GetEpisodesIdPreviousSiblingSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->episode->getEpisodesIdPreviousSibling($request, $requestSecurity);

    if ($response->getEpisodesIdPreviousSibling200ApplicationVndApiPlusJsonObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
