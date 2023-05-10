# podcastEpisodes

### Available Operations

* [getPodcastEpisodes](#getpodcastepisodes) - Podcast Episodes

## getPodcastEpisodes

This endpoint allows the client to retrieve a list of podcast episodes.
        "Podcast episodes" are episodes belonging to podcasts.
        It will only return active (reachable) podcast episodes that belong to published podcasts available on the platform, ordered by descending publication date.
        It supports pagination, each page will contain 30 articles by default.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPodcastEpisodesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPodcastEpisodesRequest();
    $request->page = 466311;
    $request->perPage = 474697;
    $request->username = 'Deion33';

    $response = $sdk->podcastEpisodes->getPodcastEpisodes($request);

    if ($response->podcastEpisodeIndices !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
