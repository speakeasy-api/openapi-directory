# metrics

### Available Operations

* [getPrometheusMetrics](#getprometheusmetrics) - Query server for exposed Prometheus metrics

## getPrometheusMetrics

See Prometheus documentation for a complete data model.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->metrics->getPrometheusMetrics();

    if ($response->getPrometheusMetrics200TextPlainString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
