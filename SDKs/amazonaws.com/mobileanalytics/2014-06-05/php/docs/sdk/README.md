# SDK

## Overview

Amazon Mobile Analytics is a service for collecting, visualizing, and understanding app usage data at scale.

Amazon Web Services documentation
<https://docs.aws.amazon.com/mobileanalytics/>
### Available Operations

* [putEvents](#putevents) - The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.

## putEvents

The PutEvents operation records one or more events. You can have up to 1,500 unique custom events per app, any combination of up to 40 attributes and metrics per custom event, and any number of attribute or metric values.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Event;
use \OpenAPI\OpenAPI\Models\Shared\Session;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutEventsRequest();
    $request->requestBody = new PutEventsRequestBody();
    $request->requestBody->events = [
        new Event(),
        new Event(),
        new Event(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzClientContext = 'suscipit';
    $request->xAmzClientContextEncoding = 'molestiae';

    $response = $sdk->sdk->putEvents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
