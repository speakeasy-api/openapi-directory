# SDK

## Overview

The CloudTrail Data Service lets you ingest events into CloudTrail from any source in your hybrid environments, such as in-house or SaaS applications hosted on-premises or in the cloud, virtual machines, or containers. You can store, access, analyze, troubleshoot and take action on this data without maintaining multiple log aggregators and reporting tools. After you run <code>PutAuditEvents</code> to ingest your application activity into CloudTrail, you can use CloudTrail Lake to search, query, and analyze the data that is logged from your applications.

Amazon Web Services documentation
<https://docs.aws.amazon.com/cloudtrail-data/>
### Available Operations

* [putAuditEvents](#putauditevents) - Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.

## putAuditEvents

Ingests your application events into CloudTrail Lake. A required parameter, <code>auditEvents</code>, accepts the JSON records (also called <i>payload</i>) of events that you want CloudTrail to ingest. You can add up to 100 of these events (or up to 1 MB) per <code>PutAuditEvents</code> request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAuditEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAuditEventsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AuditEvent;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAuditEventsRequest();
    $request->requestBody = new PutAuditEventsRequestBody();
    $request->requestBody->auditEvents = [
        new AuditEvent(),
        new AuditEvent(),
        new AuditEvent(),
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->channelArn = 'suscipit';
    $request->externalId = 'molestiae';

    $response = $sdk->sdk->putAuditEvents($request);

    if ($response->putAuditEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
