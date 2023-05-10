# content

## Overview

content

### Available Operations

* [contentGetContentById](#contentgetcontentbyid) - Returns a content item referenced by id
* [contentGetContentByTagAndType](#contentgetcontentbytagandtype) - Returns the newest item that matches a given tag and Content Type.
* [contentGetContentType](#contentgetcontenttype) - Gets an object describing a particular variant of content.
* [contentRssNewsArticles](#contentrssnewsarticles) - Returns a JSON string response that is the RSS feed for news articles.
* [contentSearchContentByTagAndType](#contentsearchcontentbytagandtype) - Searches for Content Items that match the given Tag and Content Type.
* [contentSearchContentWithText](#contentsearchcontentwithtext) - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
* [contentSearchHelpArticles](#contentsearchhelparticles) - Search for Help Articles.

## contentGetContentById

Returns a content item referenced by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentGetContentByIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentGetContentByIdRequest();
    $request->head = false;
    $request->id = 423655;
    $request->locale = 'error';

    $response = $sdk->content->contentGetContentById($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentGetContentByTagAndType

Returns the newest item that matches a given tag and Content Type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentGetContentByTagAndTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentGetContentByTagAndTypeRequest();
    $request->head = false;
    $request->locale = 'deserunt';
    $request->tag = 'suscipit';
    $request->type = 'iure';

    $response = $sdk->content->contentGetContentByTagAndType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentGetContentType

Gets an object describing a particular variant of content.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentGetContentTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentGetContentTypeRequest();
    $request->type = 'magnam';

    $response = $sdk->content->contentGetContentType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentRssNewsArticles

Returns a JSON string response that is the RSS feed for news articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentRssNewsArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentRssNewsArticlesRequest();
    $request->categoryfilter = 'debitis';
    $request->includebody = false;
    $request->pageToken = 'ipsa';

    $response = $sdk->content->contentRssNewsArticles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentSearchContentByTagAndType

Searches for Content Items that match the given Tag and Content Type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentSearchContentByTagAndTypeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentSearchContentByTagAndTypeRequest();
    $request->currentpage = 963663;
    $request->head = false;
    $request->itemsperpage = 272656;
    $request->locale = 'suscipit';
    $request->tag = 'molestiae';
    $request->type = 'minus';

    $response = $sdk->content->contentSearchContentByTagAndType($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentSearchContentWithText

Gets content based on querystring information passed in. Provides basic search and text search capabilities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentSearchContentWithTextRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentSearchContentWithTextRequest();
    $request->ctype = 'placeat';
    $request->currentpage = 528895;
    $request->head = false;
    $request->locale = 'iusto';
    $request->searchtext = 'excepturi';
    $request->source = 'nisi';
    $request->tag = 'recusandae';

    $response = $sdk->content->contentSearchContentWithText($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## contentSearchHelpArticles

Search for Help Articles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ContentSearchHelpArticlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContentSearchHelpArticlesRequest();
    $request->searchtext = 'temporibus';
    $request->size = 'ab';

    $response = $sdk->content->contentSearchHelpArticles($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
