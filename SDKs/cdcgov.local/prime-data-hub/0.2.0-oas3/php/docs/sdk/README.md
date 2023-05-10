# SDK

## Overview

A router of public health data from multiple senders and receivers

### Available Operations

* [deleteSettingsOrganizationsOrganizationName](#deletesettingsorganizationsorganizationname) - Delete an organization (and the associated receivers and senders)
* [deleteSettingsOrganizationsOrganizationNameReceiversReceiverName](#deletesettingsorganizationsorganizationnamereceiversreceivername) - Delete a receiver
* [deleteSettingsOrganizationsOrganizationNameSendersSenderName](#deletesettingsorganizationsorganizationnamesenderssendername) - Delete a sender
* [getSettingsOrganizations](#getsettingsorganizations) - The settings for all organizations of the system. Must have admin access.
* [getSettingsOrganizationsOrganizationName](#getsettingsorganizationsorganizationname) - A single organization settings
* [getSettingsOrganizationsOrganizationNameReceivers](#getsettingsorganizationsorganizationnamereceivers) - A list of receivers and their current settings
* [getSettingsOrganizationsOrganizationNameReceiversReceiverName](#getsettingsorganizationsorganizationnamereceiversreceivername) - The settings of a single of receiver
* [getSettingsOrganizationsOrganizationNameSenders](#getsettingsorganizationsorganizationnamesenders) - A list of senders
* [getSettingsOrganizationsOrganizationNameSendersSenderName](#getsettingsorganizationsorganizationnamesenderssendername) - The settings of a single of sender
* [headSettingsOrganizations](#headsettingsorganizations) - Retrived the last modified for all settings of the system. Must have admin access.
* [postReports](#postreports) - Post a report to the data hub
* [putSettingsOrganizationsOrganizationName](#putsettingsorganizationsorganizationname) - Create or update the direct settings associated with an organization
* [putSettingsOrganizationsOrganizationNameReceiversReceiverName](#putsettingsorganizationsorganizationnamereceiversreceivername) - Update a single reciever
* [putSettingsOrganizationsOrganizationNameSendersSenderName](#putsettingsorganizationsorganizationnamesenderssendername) - Update a single sender

## deleteSettingsOrganizationsOrganizationName

Delete an organization (and the associated receivers and senders)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSettingsOrganizationsOrganizationNameRequest();
    $request->organizationName = 'provident';

    $requestSecurity = new DeleteSettingsOrganizationsOrganizationNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->deleteSettingsOrganizationsOrganizationName($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSettingsOrganizationsOrganizationNameReceiversReceiverName

Delete a receiver

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest();
    $request->organizationName = 'distinctio';
    $request->receiverName = 'quibusdam';

    $requestSecurity = new DeleteSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->deleteSettingsOrganizationsOrganizationNameReceiversReceiverName($request, $requestSecurity);

    if ($response->receiver !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSettingsOrganizationsOrganizationNameSendersSenderName

Delete a sender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSettingsOrganizationsOrganizationNameSendersSenderNameRequest();
    $request->organizationName = 'unde';
    $request->senderName = 'nulla';

    $requestSecurity = new DeleteSettingsOrganizationsOrganizationNameSendersSenderNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->deleteSettingsOrganizationsOrganizationNameSendersSenderName($request, $requestSecurity);

    if ($response->sender !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingsOrganizations

The settings for all organizations of the system. Must have admin access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetSettingsOrganizationsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getSettingsOrganizations($requestSecurity);

    if ($response->organizations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingsOrganizationsOrganizationName

A single organization settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsOrganizationsOrganizationNameRequest();
    $request->organizationName = 'corrupti';

    $requestSecurity = new GetSettingsOrganizationsOrganizationNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getSettingsOrganizationsOrganizationName($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingsOrganizationsOrganizationNameReceivers

A list of receivers and their current settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameReceiversRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameReceiversSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsOrganizationsOrganizationNameReceiversRequest();
    $request->organizationName = 'illum';

    $requestSecurity = new GetSettingsOrganizationsOrganizationNameReceiversSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getSettingsOrganizationsOrganizationNameReceivers($request, $requestSecurity);

    if ($response->receivers !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingsOrganizationsOrganizationNameReceiversReceiverName

The settings of a single of receiver

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest();
    $request->organizationName = 'vel';
    $request->receiverName = 'error';

    $requestSecurity = new GetSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getSettingsOrganizationsOrganizationNameReceiversReceiverName($request, $requestSecurity);

    if ($response->receiver !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingsOrganizationsOrganizationNameSenders

A list of senders

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameSendersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameSendersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsOrganizationsOrganizationNameSendersRequest();
    $request->organizationName = 'deserunt';

    $requestSecurity = new GetSettingsOrganizationsOrganizationNameSendersSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getSettingsOrganizationsOrganizationNameSenders($request, $requestSecurity);

    if ($response->senders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSettingsOrganizationsOrganizationNameSendersSenderName

The settings of a single of sender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSettingsOrganizationsOrganizationNameSendersSenderNameRequest();
    $request->organizationName = 'suscipit';
    $request->senderName = 'iure';

    $requestSecurity = new GetSettingsOrganizationsOrganizationNameSendersSenderNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->getSettingsOrganizationsOrganizationNameSendersSenderName($request, $requestSecurity);

    if ($response->sender !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## headSettingsOrganizations

Retrived the last modified for all settings of the system. Must have admin access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadSettingsOrganizationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new HeadSettingsOrganizationsSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->headSettingsOrganizations($requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postReports

Post a report to the data hub

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostReportsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostReportsRequest();
    $request->requestBody = 'magnam';
    $request->client = 'debitis';
    $request->default = [
        'delectus',
    ];
    $request->option = PostReportsOptionEnum::CHECK_CONNECTIONS;
    $request->routeTo = [
        'molestiae',
        'minus',
    ];

    $requestSecurity = new PostReportsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->postReports($request, $requestSecurity);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSettingsOrganizationsOrganizationName

Create or update the direct settings associated with an organization

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSettingsOrganizationsOrganizationNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationInput;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationJurisdictionEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutSettingsOrganizationsOrganizationNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSettingsOrganizationsOrganizationNameRequest();
    $request->organizationInput = new OrganizationInput();
    $request->organizationInput->countyName = 'Pima';
    $request->organizationInput->description = 'Arizona PHD';
    $request->organizationInput->jurisdiction = OrganizationJurisdictionEnum::COUNTY;
    $request->organizationInput->name = 'az-phd';
    $request->organizationInput->stateCode = 'AZ';
    $request->organizationName = 'voluptatum';

    $requestSecurity = new PutSettingsOrganizationsOrganizationNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->putSettingsOrganizationsOrganizationName($request, $requestSecurity);

    if ($response->organization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSettingsOrganizationsOrganizationNameReceiversReceiverName

Update a single reciever

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReceiverInput;
use \OpenAPI\OpenAPI\Models\Shared\ReceiverJurisdictionalFilters;
use \OpenAPI\OpenAPI\Models\Shared\ReceiverJurisdictionalFiltersMatchFieldsEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReceiverTiming;
use \OpenAPI\OpenAPI\Models\Shared\ReceiverTimingFrequencyEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSettingsOrganizationsOrganizationNameReceiversReceiverNameRequest();
    $request->receiverInput = new ReceiverInput();
    $request->receiverInput->description = 'Arizona PHD ELR feed';
    $request->receiverInput->jurisdictionalFilters = [
        new ReceiverJurisdictionalFilters(),
        new ReceiverJurisdictionalFilters(),
    ];
    $request->receiverInput->name = 'az-phd.elr';
    $request->receiverInput->timing = new ReceiverTiming();
    $request->receiverInput->timing->dailyAt = 5680.45;
    $request->receiverInput->timing->frequency = ReceiverTimingFrequencyEnum::HOURLY;
    $request->receiverInput->topic = 'covid-19';
    $request->receiverInput->translations = [
        'ab',
        new StandardHl7Configuration(),
        new CustomConfiguration(),
        new StandardHl7Configuration(),
    ];
    $request->organizationName = 'perferendis';
    $request->receiverName = 'ipsam';

    $requestSecurity = new PutSettingsOrganizationsOrganizationNameReceiversReceiverNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->putSettingsOrganizationsOrganizationNameReceiversReceiverName($request, $requestSecurity);

    if ($response->receiver !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSettingsOrganizationsOrganizationNameSendersSenderName

Update a single sender

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest;
use \OpenAPI\OpenAPI\Models\Shared\SenderInput;
use \OpenAPI\OpenAPI\Models\Shared\SenderFormatEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSettingsOrganizationsOrganizationNameSendersSenderNameRequest();
    $request->senderInput = new SenderInput();
    $request->senderInput->description = 'repellendus';
    $request->senderInput->format = SenderFormatEnum::CSV;
    $request->senderInput->name = 'simple_report.default';
    $request->senderInput->schema = 'az-phd-covid-19';
    $request->senderInput->topic = 'covid-19';
    $request->organizationName = 'sapiente';
    $request->senderName = 'quo';

    $requestSecurity = new PutSettingsOrganizationsOrganizationNameSendersSenderNameSecurity();
    $requestSecurity->oAuth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sdk->putSettingsOrganizationsOrganizationNameSendersSenderName($request, $requestSecurity);

    if ($response->senders !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
