# project

### Available Operations

* [getProjectAnalyses](#getprojectanalyses) - List all analyses for a project
* [getProjectUrlsAggs](#getprojecturlsaggs) - Project Query aggregator
* [getSavedFilter](#getsavedfilter) - Retrieves a specific saved filter's name, ID and filter value
* [getSavedFilters](#getsavedfilters) - List all the project's saved filters (each filter's name, ID and filter value)
* [testUrlRewritingRules](#testurlrewritingrules) - Match and replace parts of a URL based on rules passed in POST data

## getProjectAnalyses

List all analyses for a project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectAnalysesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectAnalysesRequest();
    $request->page = 298282;
    $request->projectSlug = 'et';
    $request->size = 569965;
    $request->username = 'Ferne_McLaughlin';

    $response = $sdk->project->getProjectAnalyses($request);

    if ($response->getProjectAnalyses200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectUrlsAggs

Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUrlsAggsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UrlsAggsQuery;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectUrlsAggsAreaEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectUrlsAggsRequest();
    $request->requestBody = [
        new UrlsAggsQuery(),
    ];
    $request->area = GetProjectUrlsAggsAreaEnum::DISAPPEARED;
    $request->lastAnalysisSlug = 'reiciendis';
    $request->nbAnalyses = 652103;
    $request->projectSlug = 'ad';
    $request->username = 'Holden.Ernser36';

    $response = $sdk->project->getProjectUrlsAggs($request);

    if ($response->default !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavedFilter

Retrieves a specific saved filter's name, ID and filter value

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSavedFilterRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSavedFilterRequest();
    $request->identifier = 'quasi';
    $request->projectSlug = 'iure';
    $request->username = 'Wilton80';

    $response = $sdk->project->getSavedFilter($request);

    if ($response->projectSavedFilter !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSavedFilters

List all the project's saved filters (each filter's name, ID and filter value)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSavedFiltersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSavedFiltersRequest();
    $request->page = 537023;
    $request->projectSlug = 'facilis';
    $request->size = 447926;
    $request->username = 'Barbara.Bradtke71';

    $response = $sdk->project->getSavedFilters($request);

    if ($response->getSavedFilters200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testUrlRewritingRules

Match and replace parts of a URL based on rules passed in POST data.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestUrlRewritingRulesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestUrlRewritingRulesRequest();
    $request->projectSlug = 'nihil';
    $request->username = 'Zoila90';

    $response = $sdk->project->testUrlRewritingRules($request);

    if ($response->urlRewritingRulesSerializer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
