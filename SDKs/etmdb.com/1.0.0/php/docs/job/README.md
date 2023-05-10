# job

### Available Operations

* [jobSearchRead](#jobsearchread) - Return job details search result
* [jobSearchallRead](#jobsearchallread) - Return job details search result

## jobSearchRead

Return job details search result

### Response Class (Status 200)

* __{job_title}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobSearchReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobSearchReadRequest();
    $request->jobTitle = 'Chief Interactions Developer';

    $response = $sdk->job->jobSearchRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jobSearchallRead

Return job details search result

### Response Class (Status 200)

* __{company_name}__: Used as a key word to search jobs,

For more details on how job are listed [see here][ref].
[ref]: https://etmdb.com/en/job-list/-updated_date

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\JobSearchallReadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JobSearchallReadRequest();
    $request->companyName = 'in';

    $response = $sdk->job->jobSearchallRead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
