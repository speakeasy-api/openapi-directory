# organizationExports

## Overview

An `organization_export` object represents a request to export the complete data of an organization in JSON format.

To export an organization using this API:

* Create an `organization_export`
  [request](/docs/create-an-organization-export-request)
  and store the ID that is returned.
* Request the `organization_export` every few minutes, until the
  `state` field contains ‘finished’.
* Download the file located at the URL in the `download_url` field. * Exports can take a long time, from several minutes to a few hours
  for large organizations.


*Note: These endpoints are only available to [Service Accounts](https://asana.com/guide/help/premium/service-accounts) of an [Enterprise](https://asana.com/enterprise) organization.*

### Available Operations

* [createOrganizationExport](#createorganizationexport) - Create an organization export request
* [getOrganizationExport](#getorganizationexport) - Get details on an org export request

## createOrganizationExport

This method creates a request to export an Organization. Asana will complete the export at some point after you create the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrganizationExportRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationExportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrganizationExportRequest();
    $request->requestBody = new CreateOrganizationExportRequestBody();
    $request->requestBody->data = new OrganizationExportRequest();
    $request->requestBody->data->organization = '1331';
    $request->limit = 978571;
    $request->offset = 'rerum';
    $request->optFields = [
        'magnam',
    ];
    $request->optPretty = false;

    $response = $sdk->organizationExports->createOrganizationExport($request);

    if ($response->createOrganizationExport201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrganizationExport

Returns details of a previously-requested Organization export.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrganizationExportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrganizationExportRequest();
    $request->optFields = [
        'facere',
        'ea',
        'aliquid',
        'laborum',
    ];
    $request->optPretty = false;
    $request->organizationExportGid = 'accusamus';

    $response = $sdk->organizationExports->getOrganizationExport($request);

    if ($response->getOrganizationExport200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
