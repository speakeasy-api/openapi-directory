# SDK

## Overview

Operations for Amazon Web Services Account Management

Amazon Web Services documentation
<https://docs.aws.amazon.com/account/>
### Available Operations

* [deleteAlternateContact](#deletealternatecontact) - <p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [disableRegion](#disableregion) - Disables (opts-out) a particular Region for an account.
* [enableRegion](#enableregion) - Enables (opts-in) a particular Region for an account.
* [getAlternateContact](#getalternatecontact) - <p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [getContactInformation](#getcontactinformation) - <p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>
* [getRegionOptStatus](#getregionoptstatus) - Retrieves the opt-in status of a particular Region.
* [listRegions](#listregions) - Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the <code>region-opt-status-contains</code> parameter. 
* [putAlternateContact](#putalternatecontact) - <p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>
* [putContactInformation](#putcontactinformation) - <p>Updates the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>

## deleteAlternateContact

<p>Deletes the specified alternate contact from an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlternateContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlternateContactRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAlternateContactRequestBodyAlternateContactTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAlternateContactRequest();
    $request->requestBody = new DeleteAlternateContactRequestBody();
    $request->requestBody->accountId = 'error';
    $request->requestBody->alternateContactType = DeleteAlternateContactRequestBodyAlternateContactTypeEnum::OPERATIONS;
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';

    $response = $sdk->sdk->deleteAlternateContact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableRegion

Disables (opts-out) a particular Region for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableRegionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisableRegionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableRegionRequest();
    $request->requestBody = new DisableRegionRequestBody();
    $request->requestBody->accountId = 'suscipit';
    $request->requestBody->regionName = 'molestiae';
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->disableRegion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableRegion

Enables (opts-in) a particular Region for an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableRegionRequest;
use \OpenAPI\OpenAPI\Models\Operations\EnableRegionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableRegionRequest();
    $request->requestBody = new EnableRegionRequestBody();
    $request->requestBody->accountId = 'temporibus';
    $request->requestBody->regionName = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->enableRegion($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAlternateContact

<p>Retrieves the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAlternateContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAlternateContactRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetAlternateContactRequestBodyAlternateContactTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAlternateContactRequest();
    $request->requestBody = new GetAlternateContactRequestBody();
    $request->requestBody->accountId = 'quo';
    $request->requestBody->alternateContactType = GetAlternateContactRequestBodyAlternateContactTypeEnum::BILLING;
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'esse';

    $response = $sdk->sdk->getAlternateContact($request);

    if ($response->getAlternateContactResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContactInformation

<p>Retrieves the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetContactInformationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContactInformationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContactInformationRequest();
    $request->requestBody = new GetContactInformationRequestBody();
    $request->requestBody->accountId = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->getContactInformation($request);

    if ($response->getContactInformationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRegionOptStatus

Retrieves the opt-in status of a particular Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRegionOptStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRegionOptStatusRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRegionOptStatusRequest();
    $request->requestBody = new GetRegionOptStatusRequestBody();
    $request->requestBody->accountId = 'deleniti';
    $request->requestBody->regionName = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->getRegionOptStatus($request);

    if ($response->getRegionOptStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRegions

Lists all the Regions for a given account and their respective opt-in statuses. Optionally, this list can be filtered by the <code>region-opt-status-contains</code> parameter. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRegionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListRegionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RegionOptStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRegionsRequest();
    $request->maxResults = 'impedit';
    $request->nextToken = 'cum';
    $request->requestBody = new ListRegionsRequestBody();
    $request->requestBody->accountId = 'esse';
    $request->requestBody->maxResults = 216550;
    $request->requestBody->nextToken = 'excepturi';
    $request->requestBody->regionOptStatusContains = [
        RegionOptStatusEnum::ENABLED,
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->listRegions($request);

    if ($response->listRegionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putAlternateContact

<p>Modifies the specified alternate contact attached to an Amazon Web Services account.</p> <p>For complete details about how to use the alternate contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Access or updating the alternate contacts</a>.</p> <note> <p>Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/using-orgs-trusted-access.html">Enabling trusted access for Amazon Web Services Account Management</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutAlternateContactRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutAlternateContactRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutAlternateContactRequestBodyAlternateContactTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutAlternateContactRequest();
    $request->requestBody = new PutAlternateContactRequestBody();
    $request->requestBody->accountId = 'hic';
    $request->requestBody->alternateContactType = PutAlternateContactRequestBodyAlternateContactTypeEnum::SECURITY;
    $request->requestBody->emailAddress = 'fuga';
    $request->requestBody->name = 'in';
    $request->requestBody->phoneNumber = 'corporis';
    $request->requestBody->title = 'iste';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'quidem';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->putAlternateContact($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putContactInformation

<p>Updates the primary contact information of an Amazon Web Services account.</p> <p>For complete details about how to use the primary contact operations, see <a href="https://docs.aws.amazon.com/accounts/latest/reference/manage-acct-update-contact.html">Update the primary and alternate contact information</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutContactInformationRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutContactInformationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutContactInformationRequestBodyContactInformation;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutContactInformationRequest();
    $request->requestBody = new PutContactInformationRequestBody();
    $request->requestBody->accountId = 'mollitia';
    $request->requestBody->contactInformation = new PutContactInformationRequestBodyContactInformation();
    $request->requestBody->contactInformation->addressLine1 = 'laborum';
    $request->requestBody->contactInformation->addressLine2 = 'dolores';
    $request->requestBody->contactInformation->addressLine3 = 'dolorem';
    $request->requestBody->contactInformation->city = 'corporis';
    $request->requestBody->contactInformation->companyName = 'explicabo';
    $request->requestBody->contactInformation->countryCode = 'nobis';
    $request->requestBody->contactInformation->districtOrCounty = 'enim';
    $request->requestBody->contactInformation->fullName = 'omnis';
    $request->requestBody->contactInformation->phoneNumber = 'nemo';
    $request->requestBody->contactInformation->postalCode = 'minima';
    $request->requestBody->contactInformation->stateOrRegion = 'excepturi';
    $request->requestBody->contactInformation->websiteUrl = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->putContactInformation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
