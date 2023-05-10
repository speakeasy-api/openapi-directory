# SDK

## Overview

With License Manager, you can discover and track your commercial Linux subscriptions on running Amazon EC2 instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager-linux-subscriptions/>
### Available Operations

* [getServiceSettings](#getservicesettings) - Lists the Linux subscriptions service settings.
* [listLinuxSubscriptionInstances](#listlinuxsubscriptioninstances) - Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.
* [listLinuxSubscriptions](#listlinuxsubscriptions) - Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.
* [updateServiceSettings](#updateservicesettings) - Updates the service settings for Linux subscriptions.

## getServiceSettings

Lists the Linux subscriptions service settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceSettingsRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'magnam';

    $response = $sdk->sdk->getServiceSettings($request);

    if ($response->getServiceSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLinuxSubscriptionInstances

Lists the running Amazon EC2 instances that were discovered with commercial Linux subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLinuxSubscriptionInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLinuxSubscriptionInstancesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLinuxSubscriptionInstancesRequest();
    $request->maxResults = 'debitis';
    $request->nextToken = 'ipsa';
    $request->requestBody = new ListLinuxSubscriptionInstancesRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 272656;
    $request->requestBody->nextToken = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->listLinuxSubscriptionInstances($request);

    if ($response->listLinuxSubscriptionInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLinuxSubscriptions

Lists the Linux subscriptions that have been discovered. If you have linked your organization, the returned results will include data aggregated across your accounts in Organizations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLinuxSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLinuxSubscriptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Shared\OperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLinuxSubscriptionsRequest();
    $request->maxResults = 'recusandae';
    $request->nextToken = 'temporibus';
    $request->requestBody = new ListLinuxSubscriptionsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->maxResults = 337396;
    $request->requestBody->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->listLinuxSubscriptions($request);

    if ($response->listLinuxSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceSettings

Updates the service settings for Linux subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoveryEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoverySettings;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationIntegrationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceSettingsRequest();
    $request->requestBody = new UpdateServiceSettingsRequestBody();
    $request->requestBody->allowUpdate = false;
    $request->requestBody->linuxSubscriptionsDiscovery = UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoveryEnum::DISABLED;
    $request->requestBody->linuxSubscriptionsDiscoverySettings = new UpdateServiceSettingsRequestBodyLinuxSubscriptionsDiscoverySettings();
    $request->requestBody->linuxSubscriptionsDiscoverySettings->organizationIntegration = OrganizationIntegrationEnum::DISABLED;
    $request->requestBody->linuxSubscriptionsDiscoverySettings->sourceRegions = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->updateServiceSettings($request);

    if ($response->updateServiceSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
