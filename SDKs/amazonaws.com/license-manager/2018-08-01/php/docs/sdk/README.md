# SDK

## Overview

License Manager makes it easier to manage licenses from software vendors across multiple Amazon Web Services accounts and on-premises servers.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager/>
### Available Operations

* [acceptGrant](#acceptgrant) - Accepts the specified grant.
* [checkInLicense](#checkinlicense) - Checks in the specified license. Check in a license when it is no longer in use.
* [checkoutBorrowLicense](#checkoutborrowlicense) - Checks out the specified license for offline use.
* [checkoutLicense](#checkoutlicense) - <p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>
* [createGrant](#creategrant) - Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [createGrantVersion](#creategrantversion) - Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.
* [createLicense](#createlicense) - Creates a license.
* [createLicenseConfiguration](#createlicenseconfiguration) - <p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>
* [createLicenseConversionTaskForResource](#createlicenseconversiontaskforresource) - Creates a new license conversion task.
* [createLicenseManagerReportGenerator](#createlicensemanagerreportgenerator) - Creates a report generator.
* [createLicenseVersion](#createlicenseversion) - Creates a new version of the specified license.
* [createToken](#createtoken) - <p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>
* [deleteGrant](#deletegrant) - Deletes the specified grant.
* [deleteLicense](#deletelicense) - Deletes the specified license.
* [deleteLicenseConfiguration](#deletelicenseconfiguration) - <p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>
* [deleteLicenseManagerReportGenerator](#deletelicensemanagerreportgenerator) - <p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>
* [deleteToken](#deletetoken) - Deletes the specified token. Must be called in the license home Region.
* [extendLicenseConsumption](#extendlicenseconsumption) - Extends the expiration date for license consumption.
* [getAccessToken](#getaccesstoken) - Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.
* [getGrant](#getgrant) - Gets detailed information about the specified grant.
* [getLicense](#getlicense) - Gets detailed information about the specified license.
* [getLicenseConfiguration](#getlicenseconfiguration) - Gets detailed information about the specified license configuration.
* [getLicenseConversionTask](#getlicenseconversiontask) - Gets information about the specified license type conversion task.
* [getLicenseManagerReportGenerator](#getlicensemanagerreportgenerator) - Gets information about the specified report generator.
* [getLicenseUsage](#getlicenseusage) - Gets detailed information about the usage of the specified license.
* [getServiceSettings](#getservicesettings) - Gets the License Manager settings for the current Region.
* [listAssociationsForLicenseConfiguration](#listassociationsforlicenseconfiguration) - <p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>
* [listDistributedGrants](#listdistributedgrants) - Lists the grants distributed for the specified license.
* [listFailuresForLicenseConfigurationOperations](#listfailuresforlicenseconfigurationoperations) - Lists the license configuration operations that failed.
* [listLicenseConfigurations](#listlicenseconfigurations) - Lists the license configurations for your account.
* [listLicenseConversionTasks](#listlicenseconversiontasks) - Lists the license type conversion tasks for your account.
* [listLicenseManagerReportGenerators](#listlicensemanagerreportgenerators) - Lists the report generators for your account.
* [listLicenseSpecificationsForResource](#listlicensespecificationsforresource) - Describes the license configurations for the specified resource.
* [listLicenseVersions](#listlicenseversions) - Lists all versions of the specified license.
* [listLicenses](#listlicenses) - Lists the licenses for your account.
* [listReceivedGrants](#listreceivedgrants) - Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.
* [listReceivedGrantsForOrganization](#listreceivedgrantsfororganization) - Lists the grants received for all accounts in the organization.
* [listReceivedLicenses](#listreceivedlicenses) - Lists received licenses.
* [listReceivedLicensesForOrganization](#listreceivedlicensesfororganization) - Lists the licenses received for all accounts in the organization.
* [listResourceInventory](#listresourceinventory) - Lists resources managed using Systems Manager inventory.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified license configuration.
* [listTokens](#listtokens) - Lists your tokens.
* [listUsageForLicenseConfiguration](#listusageforlicenseconfiguration) - Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.
* [rejectGrant](#rejectgrant) - Rejects the specified grant.
* [tagResource](#tagresource) - Adds the specified tags to the specified license configuration.
* [untagResource](#untagresource) - Removes the specified tags from the specified license configuration.
* [updateLicenseConfiguration](#updatelicenseconfiguration) - Modifies the attributes of an existing license configuration.
* [updateLicenseManagerReportGenerator](#updatelicensemanagerreportgenerator) - <p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>
* [updateLicenseSpecificationsForResource](#updatelicensespecificationsforresource) - <p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>
* [updateServiceSettings](#updateservicesettings) - Updates License Manager settings for the current Region.

## acceptGrant

Accepts the specified grant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptGrantRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcceptGrantXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptGrantRequest();
    $request->acceptGrantRequest = new AcceptGrantRequest();
    $request->acceptGrantRequest->grantArn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = AcceptGrantXAmzTargetEnum::AWS_LICENSE_MANAGER_ACCEPT_GRANT;

    $response = $sdk->sdk->acceptGrant($request);

    if ($response->acceptGrantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkInLicense

Checks in the specified license. Check in a license when it is no longer in use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckInLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckInLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckInLicenseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckInLicenseRequest();
    $request->checkInLicenseRequest = new CheckInLicenseRequest();
    $request->checkInLicenseRequest->beneficiary = 'delectus';
    $request->checkInLicenseRequest->licenseConsumptionToken = 'tempora';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = CheckInLicenseXAmzTargetEnum::AWS_LICENSE_MANAGER_CHECK_IN_LICENSE;

    $response = $sdk->sdk->checkInLicense($request);

    if ($response->checkInLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkoutBorrowLicense

Checks out the specified license for offline use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckoutBorrowLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutBorrowLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\DigitalSignatureMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementData;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementDataUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\CheckoutBorrowLicenseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckoutBorrowLicenseRequest();
    $request->checkoutBorrowLicenseRequest = new CheckoutBorrowLicenseRequest();
    $request->checkoutBorrowLicenseRequest->checkoutMetadata = [
        new Metadata(),
        new Metadata(),
    ];
    $request->checkoutBorrowLicenseRequest->clientToken = 'recusandae';
    $request->checkoutBorrowLicenseRequest->digitalSignatureMethod = DigitalSignatureMethodEnum::JWT_PS384;
    $request->checkoutBorrowLicenseRequest->entitlements = [
        new EntitlementData(),
        new EntitlementData(),
        new EntitlementData(),
        new EntitlementData(),
    ];
    $request->checkoutBorrowLicenseRequest->licenseArn = 'ab';
    $request->checkoutBorrowLicenseRequest->nodeId = 'quis';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = CheckoutBorrowLicenseXAmzTargetEnum::AWS_LICENSE_MANAGER_CHECKOUT_BORROW_LICENSE;

    $response = $sdk->sdk->checkoutBorrowLicense($request);

    if ($response->checkoutBorrowLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkoutLicense

<p>Checks out the specified license.</p> <note> <p>If the account that created the license is the same that is performing the check out, you must specify the account as the beneficiary.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CheckoutLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CheckoutTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementData;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementDataUnitEnum;
use \OpenAPI\OpenAPI\Models\Operations\CheckoutLicenseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckoutLicenseRequest();
    $request->checkoutLicenseRequest = new CheckoutLicenseRequest();
    $request->checkoutLicenseRequest->beneficiary = 'odit';
    $request->checkoutLicenseRequest->checkoutType = CheckoutTypeEnum::PERPETUAL;
    $request->checkoutLicenseRequest->clientToken = 'at';
    $request->checkoutLicenseRequest->entitlements = [
        new EntitlementData(),
        new EntitlementData(),
        new EntitlementData(),
        new EntitlementData(),
    ];
    $request->checkoutLicenseRequest->keyFingerprint = 'molestiae';
    $request->checkoutLicenseRequest->nodeId = 'quod';
    $request->checkoutLicenseRequest->productSKU = 'quod';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = CheckoutLicenseXAmzTargetEnum::AWS_LICENSE_MANAGER_CHECKOUT_LICENSE;

    $response = $sdk->sdk->checkoutLicense($request);

    if ($response->checkoutLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGrant

Creates a grant for the specified license. A grant shares the use of license entitlements with a specific Amazon Web Services account, an organization, or an organizational unit (OU). For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGrantRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGrantRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllowedOperationEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateGrantXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGrantRequest();
    $request->createGrantRequest = new CreateGrantRequest();
    $request->createGrantRequest->allowedOperations = [
        AllowedOperationEnum::CHECKOUT_LICENSE,
        AllowedOperationEnum::CHECK_IN_LICENSE,
        AllowedOperationEnum::CREATE_TOKEN,
    ];
    $request->createGrantRequest->clientToken = 'optio';
    $request->createGrantRequest->grantName = 'totam';
    $request->createGrantRequest->homeRegion = 'beatae';
    $request->createGrantRequest->licenseArn = 'commodi';
    $request->createGrantRequest->principals = [
        'modi',
        'qui',
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = CreateGrantXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_GRANT;

    $response = $sdk->sdk->createGrant($request);

    if ($response->createGrantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createGrantVersion

Creates a new version of the specified grant. For more information, see <a href="https://docs.aws.amazon.com/license-manager/latest/userguide/granted-licenses.html">Granted licenses in License Manager</a> in the <i>License Manager User Guide</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateGrantVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateGrantVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AllowedOperationEnum;
use \OpenAPI\OpenAPI\Models\Shared\Options;
use \OpenAPI\OpenAPI\Models\Shared\ActivationOverrideBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\GrantStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateGrantVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateGrantVersionRequest();
    $request->createGrantVersionRequest = new CreateGrantVersionRequest();
    $request->createGrantVersionRequest->allowedOperations = [
        AllowedOperationEnum::EXTEND_CONSUMPTION_LICENSE,
        AllowedOperationEnum::CHECKOUT_LICENSE,
    ];
    $request->createGrantVersionRequest->clientToken = 'iste';
    $request->createGrantVersionRequest->grantArn = 'dolor';
    $request->createGrantVersionRequest->grantName = 'natus';
    $request->createGrantVersionRequest->options = new Options();
    $request->createGrantVersionRequest->options->activationOverrideBehavior = ActivationOverrideBehaviorEnum::DISTRIBUTED_GRANTS_ONLY;
    $request->createGrantVersionRequest->sourceVersion = 'hic';
    $request->createGrantVersionRequest->status = GrantStatusEnum::WORKFLOW_COMPLETED;
    $request->createGrantVersionRequest->statusReason = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = CreateGrantVersionXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_GRANT_VERSION;

    $response = $sdk->sdk->createGrantVersion($request);

    if ($response->createGrantVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLicense

Creates a license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BorrowConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionalConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RenewTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Entitlement;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\Issuer;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\DatetimeRange;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseRequest();
    $request->createLicenseRequest = new CreateLicenseRequest();
    $request->createLicenseRequest->beneficiary = 'ipsa';
    $request->createLicenseRequest->clientToken = 'reiciendis';
    $request->createLicenseRequest->consumptionConfiguration = new ConsumptionConfiguration();
    $request->createLicenseRequest->consumptionConfiguration->borrowConfiguration = new BorrowConfiguration();
    $request->createLicenseRequest->consumptionConfiguration->borrowConfiguration->allowEarlyCheckIn = false;
    $request->createLicenseRequest->consumptionConfiguration->borrowConfiguration->maxTimeToLiveInMinutes = 666767;
    $request->createLicenseRequest->consumptionConfiguration->provisionalConfiguration = new ProvisionalConfiguration();
    $request->createLicenseRequest->consumptionConfiguration->provisionalConfiguration->maxTimeToLiveInMinutes = 653140;
    $request->createLicenseRequest->consumptionConfiguration->renewType = RenewTypeEnum::MONTHLY;
    $request->createLicenseRequest->entitlements = [
        new Entitlement(),
    ];
    $request->createLicenseRequest->homeRegion = 'dolorem';
    $request->createLicenseRequest->issuer = new Issuer();
    $request->createLicenseRequest->issuer->name = 'Rose Rolfson';
    $request->createLicenseRequest->issuer->signKey = 'nemo';
    $request->createLicenseRequest->licenseMetadata = [
        new Metadata(),
        new Metadata(),
    ];
    $request->createLicenseRequest->licenseName = 'excepturi';
    $request->createLicenseRequest->productName = 'accusantium';
    $request->createLicenseRequest->productSKU = 'iure';
    $request->createLicenseRequest->validity = new DatetimeRange();
    $request->createLicenseRequest->validity->begin = 'culpa';
    $request->createLicenseRequest->validity->end = 'doloribus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = CreateLicenseXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_LICENSE;

    $response = $sdk->sdk->createLicense($request);

    if ($response->createLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLicenseConfiguration

<p>Creates a license configuration.</p> <p>A license configuration is an abstraction of a customer license agreement that can be consumed and enforced by License Manager. Components include specifications for the license type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy, Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a license must be associated with a host), and the number of licenses purchased and used.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseCountingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductInformation;
use \OpenAPI\OpenAPI\Models\Shared\ProductInformationFilter;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseConfigurationRequest();
    $request->createLicenseConfigurationRequest = new CreateLicenseConfigurationRequest();
    $request->createLicenseConfigurationRequest->description = 'mollitia';
    $request->createLicenseConfigurationRequest->disassociateWhenNotFound = false;
    $request->createLicenseConfigurationRequest->licenseCount = 581850;
    $request->createLicenseConfigurationRequest->licenseCountHardLimit = false;
    $request->createLicenseConfigurationRequest->licenseCountingType = LicenseCountingTypeEnum::INSTANCE;
    $request->createLicenseConfigurationRequest->licenseRules = [
        'quam',
        'molestiae',
    ];
    $request->createLicenseConfigurationRequest->name = 'Sabrina Cronin MD';
    $request->createLicenseConfigurationRequest->productInformationList = [
        new ProductInformation(),
        new ProductInformation(),
        new ProductInformation(),
    ];
    $request->createLicenseConfigurationRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';
    $request->xAmzTarget = CreateLicenseConfigurationXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_LICENSE_CONFIGURATION;

    $response = $sdk->sdk->createLicenseConfiguration($request);

    if ($response->createLicenseConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLicenseConversionTaskForResource

Creates a new license conversion task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseConversionTaskForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLicenseConversionTaskForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseConversionContext;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseConversionTaskForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseConversionTaskForResourceRequest();
    $request->createLicenseConversionTaskForResourceRequest = new CreateLicenseConversionTaskForResourceRequest();
    $request->createLicenseConversionTaskForResourceRequest->destinationLicenseContext = new LicenseConversionContext();
    $request->createLicenseConversionTaskForResourceRequest->destinationLicenseContext->usageOperation = 'aut';
    $request->createLicenseConversionTaskForResourceRequest->resourceArn = 'quasi';
    $request->createLicenseConversionTaskForResourceRequest->sourceLicenseContext = new LicenseConversionContext();
    $request->createLicenseConversionTaskForResourceRequest->sourceLicenseContext->usageOperation = 'error';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = CreateLicenseConversionTaskForResourceXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_LICENSE_CONVERSION_TASK_FOR_RESOURCE;

    $response = $sdk->sdk->createLicenseConversionTaskForResource($request);

    if ($response->createLicenseConversionTaskForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLicenseManagerReportGenerator

Creates a report generator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportContext;
use \OpenAPI\OpenAPI\Models\Shared\ReportFrequency;
use \OpenAPI\OpenAPI\Models\Shared\ReportFrequencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseManagerReportGeneratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseManagerReportGeneratorRequest();
    $request->createLicenseManagerReportGeneratorRequest = new CreateLicenseManagerReportGeneratorRequest();
    $request->createLicenseManagerReportGeneratorRequest->clientToken = 'praesentium';
    $request->createLicenseManagerReportGeneratorRequest->description = 'voluptatibus';
    $request->createLicenseManagerReportGeneratorRequest->reportContext = new ReportContext();
    $request->createLicenseManagerReportGeneratorRequest->reportContext->licenseConfigurationArns = [
        'omnis',
    ];
    $request->createLicenseManagerReportGeneratorRequest->reportFrequency = new ReportFrequency();
    $request->createLicenseManagerReportGeneratorRequest->reportFrequency->period = ReportFrequencyTypeEnum::WEEK;
    $request->createLicenseManagerReportGeneratorRequest->reportFrequency->value = 739264;
    $request->createLicenseManagerReportGeneratorRequest->reportGeneratorName = 'perferendis';
    $request->createLicenseManagerReportGeneratorRequest->tags = [
        new Tag(),
    ];
    $request->createLicenseManagerReportGeneratorRequest->type = [
        ReportTypeEnum::LICENSE_CONFIGURATION_SUMMARY_REPORT,
        ReportTypeEnum::LICENSE_CONFIGURATION_USAGE_REPORT,
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = CreateLicenseManagerReportGeneratorXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_LICENSE_MANAGER_REPORT_GENERATOR;

    $response = $sdk->sdk->createLicenseManagerReportGenerator($request);

    if ($response->createLicenseManagerReportGeneratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createLicenseVersion

Creates a new version of the specified license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateLicenseVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConsumptionConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\BorrowConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\ProvisionalConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\RenewTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Entitlement;
use \OpenAPI\OpenAPI\Models\Shared\EntitlementUnitEnum;
use \OpenAPI\OpenAPI\Models\Shared\Issuer;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\LicenseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\DatetimeRange;
use \OpenAPI\OpenAPI\Models\Operations\CreateLicenseVersionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateLicenseVersionRequest();
    $request->createLicenseVersionRequest = new CreateLicenseVersionRequest();
    $request->createLicenseVersionRequest->clientToken = 'accusamus';
    $request->createLicenseVersionRequest->consumptionConfiguration = new ConsumptionConfiguration();
    $request->createLicenseVersionRequest->consumptionConfiguration->borrowConfiguration = new BorrowConfiguration();
    $request->createLicenseVersionRequest->consumptionConfiguration->borrowConfiguration->allowEarlyCheckIn = false;
    $request->createLicenseVersionRequest->consumptionConfiguration->borrowConfiguration->maxTimeToLiveInMinutes = 414263;
    $request->createLicenseVersionRequest->consumptionConfiguration->provisionalConfiguration = new ProvisionalConfiguration();
    $request->createLicenseVersionRequest->consumptionConfiguration->provisionalConfiguration->maxTimeToLiveInMinutes = 918236;
    $request->createLicenseVersionRequest->consumptionConfiguration->renewType = RenewTypeEnum::NONE;
    $request->createLicenseVersionRequest->entitlements = [
        new Entitlement(),
    ];
    $request->createLicenseVersionRequest->homeRegion = 'quidem';
    $request->createLicenseVersionRequest->issuer = new Issuer();
    $request->createLicenseVersionRequest->issuer->name = 'Andy Streich';
    $request->createLicenseVersionRequest->issuer->signKey = 'rem';
    $request->createLicenseVersionRequest->licenseArn = 'voluptates';
    $request->createLicenseVersionRequest->licenseMetadata = [
        new Metadata(),
    ];
    $request->createLicenseVersionRequest->licenseName = 'repudiandae';
    $request->createLicenseVersionRequest->productName = 'sint';
    $request->createLicenseVersionRequest->sourceVersion = 'veritatis';
    $request->createLicenseVersionRequest->status = LicenseStatusEnum::DELETED;
    $request->createLicenseVersionRequest->validity = new DatetimeRange();
    $request->createLicenseVersionRequest->validity->begin = 'incidunt';
    $request->createLicenseVersionRequest->validity->end = 'enim';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = CreateLicenseVersionXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_LICENSE_VERSION;

    $response = $sdk->sdk->createLicenseVersion($request);

    if ($response->createLicenseVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createToken

<p>Creates a long-lived token.</p> <p>A refresh token is a JWT token used to get an access token. With an access token, you can call AssumeRoleWithWebIdentity to get role credentials that you can use to call License Manager to manage the specified license.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequest();
    $request->createTokenRequest = new CreateTokenRequest();
    $request->createTokenRequest->clientToken = 'labore';
    $request->createTokenRequest->expirationInDays = 264730;
    $request->createTokenRequest->licenseArn = 'qui';
    $request->createTokenRequest->roleArns = [
        'cupiditate',
        'quos',
    ];
    $request->createTokenRequest->tokenProperties = [
        'magni',
    ];
    $request->xAmzAlgorithm = 'assumenda';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = CreateTokenXAmzTargetEnum::AWS_LICENSE_MANAGER_CREATE_TOKEN;

    $response = $sdk->sdk->createToken($request);

    if ($response->createTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteGrant

Deletes the specified grant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGrantRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteGrantXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteGrantRequest();
    $request->deleteGrantRequest = new DeleteGrantRequest();
    $request->deleteGrantRequest->grantArn = 'facilis';
    $request->deleteGrantRequest->statusReason = 'tempore';
    $request->deleteGrantRequest->version = 'labore';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = DeleteGrantXAmzTargetEnum::AWS_LICENSE_MANAGER_DELETE_GRANT;

    $response = $sdk->sdk->deleteGrant($request);

    if ($response->deleteGrantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLicense

Deletes the specified license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLicenseRequest();
    $request->deleteLicenseRequest = new DeleteLicenseRequest();
    $request->deleteLicenseRequest->licenseArn = 'necessitatibus';
    $request->deleteLicenseRequest->sourceVersion = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteLicenseXAmzTargetEnum::AWS_LICENSE_MANAGER_DELETE_LICENSE;

    $response = $sdk->sdk->deleteLicense($request);

    if ($response->deleteLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLicenseConfiguration

<p>Deletes the specified license configuration.</p> <p>You cannot delete a license configuration that is in use.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLicenseConfigurationRequest();
    $request->deleteLicenseConfigurationRequest = new DeleteLicenseConfigurationRequest();
    $request->deleteLicenseConfigurationRequest->licenseConfigurationArn = 'illum';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzTarget = DeleteLicenseConfigurationXAmzTargetEnum::AWS_LICENSE_MANAGER_DELETE_LICENSE_CONFIGURATION;

    $response = $sdk->sdk->deleteLicenseConfiguration($request);

    if ($response->deleteLicenseConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteLicenseManagerReportGenerator

<p>Deletes the specified report generator.</p> <p>This action deletes the report generator, which stops it from generating future reports. The action cannot be reversed. It has no effect on the previous reports from this generator.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteLicenseManagerReportGeneratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteLicenseManagerReportGeneratorRequest();
    $request->deleteLicenseManagerReportGeneratorRequest = new DeleteLicenseManagerReportGeneratorRequest();
    $request->deleteLicenseManagerReportGeneratorRequest->licenseManagerReportGeneratorArn = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->xAmzTarget = DeleteLicenseManagerReportGeneratorXAmzTargetEnum::AWS_LICENSE_MANAGER_DELETE_LICENSE_MANAGER_REPORT_GENERATOR;

    $response = $sdk->sdk->deleteLicenseManagerReportGenerator($request);

    if ($response->deleteLicenseManagerReportGeneratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteToken

Deletes the specified token. Must be called in the license home Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTokenRequest();
    $request->deleteTokenRequest = new DeleteTokenRequest();
    $request->deleteTokenRequest->tokenId = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DeleteTokenXAmzTargetEnum::AWS_LICENSE_MANAGER_DELETE_TOKEN;

    $response = $sdk->sdk->deleteToken($request);

    if ($response->deleteTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## extendLicenseConsumption

Extends the expiration date for license consumption.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExtendLicenseConsumptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExtendLicenseConsumptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExtendLicenseConsumptionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExtendLicenseConsumptionRequest();
    $request->extendLicenseConsumptionRequest = new ExtendLicenseConsumptionRequest();
    $request->extendLicenseConsumptionRequest->dryRun = false;
    $request->extendLicenseConsumptionRequest->licenseConsumptionToken = 'deserunt';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'nihil';
    $request->xAmzTarget = ExtendLicenseConsumptionXAmzTargetEnum::AWS_LICENSE_MANAGER_EXTEND_LICENSE_CONSUMPTION;

    $response = $sdk->sdk->extendLicenseConsumption($request);

    if ($response->extendLicenseConsumptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccessToken

Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens are valid for one hour.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetAccessTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccessTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccessTokenRequest();
    $request->getAccessTokenRequest = new GetAccessTokenRequest();
    $request->getAccessTokenRequest->token = 'magnam';
    $request->getAccessTokenRequest->tokenProperties = [
        'id',
        'labore',
        'labore',
    ];
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = GetAccessTokenXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_ACCESS_TOKEN;

    $response = $sdk->sdk->getAccessToken($request);

    if ($response->getAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getGrant

Gets detailed information about the specified grant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetGrantRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetGrantXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetGrantRequest();
    $request->getGrantRequest = new GetGrantRequest();
    $request->getGrantRequest->grantArn = 'magnam';
    $request->getGrantRequest->version = 'et';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = GetGrantXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_GRANT;

    $response = $sdk->sdk->getGrant($request);

    if ($response->getGrantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicense

Gets detailed information about the specified license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLicenseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseRequest();
    $request->getLicenseRequest = new GetLicenseRequest();
    $request->getLicenseRequest->licenseArn = 'reiciendis';
    $request->getLicenseRequest->version = 'mollitia';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = GetLicenseXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_LICENSE;

    $response = $sdk->sdk->getLicense($request);

    if ($response->getLicenseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicenseConfiguration

Gets detailed information about the specified license configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseConfigurationRequest();
    $request->getLicenseConfigurationRequest = new GetLicenseConfigurationRequest();
    $request->getLicenseConfigurationRequest->licenseConfigurationArn = 'iure';
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = GetLicenseConfigurationXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_LICENSE_CONFIGURATION;

    $response = $sdk->sdk->getLicenseConfiguration($request);

    if ($response->getLicenseConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicenseConversionTask

Gets information about the specified license type conversion task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseConversionTaskRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLicenseConversionTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseConversionTaskXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseConversionTaskRequest();
    $request->getLicenseConversionTaskRequest = new GetLicenseConversionTaskRequest();
    $request->getLicenseConversionTaskRequest->licenseConversionTaskId = 'architecto';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'expedita';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'repellat';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = GetLicenseConversionTaskXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_LICENSE_CONVERSION_TASK;

    $response = $sdk->sdk->getLicenseConversionTask($request);

    if ($response->getLicenseConversionTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicenseManagerReportGenerator

Gets information about the specified report generator.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseManagerReportGeneratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseManagerReportGeneratorRequest();
    $request->getLicenseManagerReportGeneratorRequest = new GetLicenseManagerReportGeneratorRequest();
    $request->getLicenseManagerReportGeneratorRequest->licenseManagerReportGeneratorArn = 'sed';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = GetLicenseManagerReportGeneratorXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_LICENSE_MANAGER_REPORT_GENERATOR;

    $response = $sdk->sdk->getLicenseManagerReportGenerator($request);

    if ($response->getLicenseManagerReportGeneratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLicenseUsage

Gets detailed information about the usage of the specified license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseUsageRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetLicenseUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLicenseUsageXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLicenseUsageRequest();
    $request->getLicenseUsageRequest = new GetLicenseUsageRequest();
    $request->getLicenseUsageRequest->licenseArn = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = GetLicenseUsageXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_LICENSE_USAGE;

    $response = $sdk->sdk->getLicenseUsage($request);

    if ($response->getLicenseUsageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getServiceSettings

Gets the License Manager settings for the current Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetServiceSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetServiceSettingsRequest();
    $request->requestBody = [
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->xAmzTarget = GetServiceSettingsXAmzTargetEnum::AWS_LICENSE_MANAGER_GET_SERVICE_SETTINGS;

    $response = $sdk->sdk->getServiceSettings($request);

    if ($response->getServiceSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssociationsForLicenseConfiguration

<p>Lists the resource associations for the specified license configuration.</p> <p>Resource associations need not consume licenses from a license configuration. For example, an AMI or a stopped instance might not consume a license (depending on the license rules).</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationsForLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAssociationsForLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAssociationsForLicenseConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssociationsForLicenseConfigurationRequest();
    $request->listAssociationsForLicenseConfigurationRequest = new ListAssociationsForLicenseConfigurationRequest();
    $request->listAssociationsForLicenseConfigurationRequest->licenseConfigurationArn = 'voluptatibus';
    $request->listAssociationsForLicenseConfigurationRequest->maxResults = 16627;
    $request->listAssociationsForLicenseConfigurationRequest->nextToken = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListAssociationsForLicenseConfigurationXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_ASSOCIATIONS_FOR_LICENSE_CONFIGURATION;

    $response = $sdk->sdk->listAssociationsForLicenseConfiguration($request);

    if ($response->listAssociationsForLicenseConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDistributedGrants

Lists the grants distributed for the specified license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributedGrantsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListDistributedGrantsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListDistributedGrantsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDistributedGrantsRequest();
    $request->listDistributedGrantsRequest = new ListDistributedGrantsRequest();
    $request->listDistributedGrantsRequest->filters = [
        new Filter(),
    ];
    $request->listDistributedGrantsRequest->grantArns = [
        'totam',
        'dignissimos',
    ];
    $request->listDistributedGrantsRequest->maxResults = 54338;
    $request->listDistributedGrantsRequest->nextToken = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = ListDistributedGrantsXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_DISTRIBUTED_GRANTS;

    $response = $sdk->sdk->listDistributedGrants($request);

    if ($response->listDistributedGrantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFailuresForLicenseConfigurationOperations

Lists the license configuration operations that failed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFailuresForLicenseConfigurationOperationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListFailuresForLicenseConfigurationOperationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFailuresForLicenseConfigurationOperationsRequest();
    $request->listFailuresForLicenseConfigurationOperationsRequest = new ListFailuresForLicenseConfigurationOperationsRequest();
    $request->listFailuresForLicenseConfigurationOperationsRequest->licenseConfigurationArn = 'vero';
    $request->listFailuresForLicenseConfigurationOperationsRequest->maxResults = 345352;
    $request->listFailuresForLicenseConfigurationOperationsRequest->nextToken = 'hic';
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'perspiciatis';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = ListFailuresForLicenseConfigurationOperationsXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_FAILURES_FOR_LICENSE_CONFIGURATION_OPERATIONS;

    $response = $sdk->sdk->listFailuresForLicenseConfigurationOperations($request);

    if ($response->listFailuresForLicenseConfigurationOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenseConfigurations

Lists the license configurations for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLicenseConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseConfigurationsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLicenseConfigurationsRequest();
    $request->listLicenseConfigurationsRequest = new ListLicenseConfigurationsRequest();
    $request->listLicenseConfigurationsRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listLicenseConfigurationsRequest->licenseConfigurationArns = [
        'eaque',
        'occaecati',
        'rerum',
    ];
    $request->listLicenseConfigurationsRequest->maxResults = 237893;
    $request->listLicenseConfigurationsRequest->nextToken = 'asperiores';
    $request->xAmzAlgorithm = 'earum';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzTarget = ListLicenseConfigurationsXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_LICENSE_CONFIGURATIONS;

    $response = $sdk->sdk->listLicenseConfigurations($request);

    if ($response->listLicenseConfigurationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenseConversionTasks

Lists the license type conversion tasks for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseConversionTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLicenseConversionTasksRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseConversionTasksXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLicenseConversionTasksRequest();
    $request->listLicenseConversionTasksRequest = new ListLicenseConversionTasksRequest();
    $request->listLicenseConversionTasksRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listLicenseConversionTasksRequest->maxResults = 730122;
    $request->listLicenseConversionTasksRequest->nextToken = 'delectus';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = ListLicenseConversionTasksXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_LICENSE_CONVERSION_TASKS;

    $response = $sdk->sdk->listLicenseConversionTasks($request);

    if ($response->listLicenseConversionTasksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenseManagerReportGenerators

Lists the report generators for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseManagerReportGeneratorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLicenseManagerReportGeneratorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseManagerReportGeneratorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLicenseManagerReportGeneratorsRequest();
    $request->listLicenseManagerReportGeneratorsRequest = new ListLicenseManagerReportGeneratorsRequest();
    $request->listLicenseManagerReportGeneratorsRequest->filters = [
        new Filter(),
    ];
    $request->listLicenseManagerReportGeneratorsRequest->maxResults = 944373;
    $request->listLicenseManagerReportGeneratorsRequest->nextToken = 'excepturi';
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzTarget = ListLicenseManagerReportGeneratorsXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_LICENSE_MANAGER_REPORT_GENERATORS;

    $response = $sdk->sdk->listLicenseManagerReportGenerators($request);

    if ($response->listLicenseManagerReportGeneratorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenseSpecificationsForResource

Describes the license configurations for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseSpecificationsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLicenseSpecificationsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseSpecificationsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLicenseSpecificationsForResourceRequest();
    $request->listLicenseSpecificationsForResourceRequest = new ListLicenseSpecificationsForResourceRequest();
    $request->listLicenseSpecificationsForResourceRequest->maxResults = 85295;
    $request->listLicenseSpecificationsForResourceRequest->nextToken = 'ipsa';
    $request->listLicenseSpecificationsForResourceRequest->resourceArn = 'ipsa';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'quaerat';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = ListLicenseSpecificationsForResourceXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_LICENSE_SPECIFICATIONS_FOR_RESOURCE;

    $response = $sdk->sdk->listLicenseSpecificationsForResource($request);

    if ($response->listLicenseSpecificationsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenseVersions

Lists all versions of the specified license.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseVersionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLicenseVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListLicenseVersionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLicenseVersionsRequest();
    $request->listLicenseVersionsRequest = new ListLicenseVersionsRequest();
    $request->listLicenseVersionsRequest->licenseArn = 'natus';
    $request->listLicenseVersionsRequest->maxResults = 179603;
    $request->listLicenseVersionsRequest->nextToken = 'atque';
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = ListLicenseVersionsXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_LICENSE_VERSIONS;

    $response = $sdk->sdk->listLicenseVersions($request);

    if ($response->listLicenseVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listLicenses

Lists the licenses for your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListLicensesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListLicensesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListLicensesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListLicensesRequest();
    $request->listLicensesRequest = new ListLicensesRequest();
    $request->listLicensesRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listLicensesRequest->licenseArns = [
        'omnis',
        'necessitatibus',
        'distinctio',
    ];
    $request->listLicensesRequest->maxResults = 990339;
    $request->listLicensesRequest->nextToken = 'nihil';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListLicensesXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_LICENSES;

    $response = $sdk->sdk->listLicenses($request);

    if ($response->listLicensesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReceivedGrants

Lists grants that are received. Received grants are grants created while specifying the recipient as this Amazon Web Services account, your organization, or an organizational unit (OU) to which this member account belongs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedGrantsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReceivedGrantsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedGrantsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReceivedGrantsRequest();
    $request->listReceivedGrantsRequest = new ListReceivedGrantsRequest();
    $request->listReceivedGrantsRequest->filters = [
        new Filter(),
    ];
    $request->listReceivedGrantsRequest->grantArns = [
        'accusamus',
        'ad',
        'saepe',
        'suscipit',
    ];
    $request->listReceivedGrantsRequest->maxResults = 645785;
    $request->listReceivedGrantsRequest->nextToken = 'provident';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzTarget = ListReceivedGrantsXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_RECEIVED_GRANTS;

    $response = $sdk->sdk->listReceivedGrants($request);

    if ($response->listReceivedGrantsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReceivedGrantsForOrganization

Lists the grants received for all accounts in the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedGrantsForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReceivedGrantsForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedGrantsForOrganizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReceivedGrantsForOrganizationRequest();
    $request->listReceivedGrantsForOrganizationRequest = new ListReceivedGrantsForOrganizationRequest();
    $request->listReceivedGrantsForOrganizationRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listReceivedGrantsForOrganizationRequest->licenseArn = 'vel';
    $request->listReceivedGrantsForOrganizationRequest->maxResults = 798047;
    $request->listReceivedGrantsForOrganizationRequest->nextToken = 'officiis';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzTarget = ListReceivedGrantsForOrganizationXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_RECEIVED_GRANTS_FOR_ORGANIZATION;

    $response = $sdk->sdk->listReceivedGrantsForOrganization($request);

    if ($response->listReceivedGrantsForOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReceivedLicenses

Lists received licenses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedLicensesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReceivedLicensesRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedLicensesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReceivedLicensesRequest();
    $request->listReceivedLicensesRequest = new ListReceivedLicensesRequest();
    $request->listReceivedLicensesRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listReceivedLicensesRequest->licenseArns = [
        'amet',
        'tempore',
        'accusamus',
        'numquam',
    ];
    $request->listReceivedLicensesRequest->maxResults = 313692;
    $request->listReceivedLicensesRequest->nextToken = 'dolorem';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'sed';
    $request->xAmzTarget = ListReceivedLicensesXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_RECEIVED_LICENSES;

    $response = $sdk->sdk->listReceivedLicenses($request);

    if ($response->listReceivedLicensesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReceivedLicensesForOrganization

Lists the licenses received for all accounts in the organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedLicensesForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReceivedLicensesForOrganizationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListReceivedLicensesForOrganizationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReceivedLicensesForOrganizationRequest();
    $request->listReceivedLicensesForOrganizationRequest = new ListReceivedLicensesForOrganizationRequest();
    $request->listReceivedLicensesForOrganizationRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listReceivedLicensesForOrganizationRequest->maxResults = 730442;
    $request->listReceivedLicensesForOrganizationRequest->nextToken = 'voluptas';
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'maxime';
    $request->xAmzTarget = ListReceivedLicensesForOrganizationXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_RECEIVED_LICENSES_FOR_ORGANIZATION;

    $response = $sdk->sdk->listReceivedLicensesForOrganization($request);

    if ($response->listReceivedLicensesForOrganizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listResourceInventory

Lists resources managed using Systems Manager inventory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListResourceInventoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\InventoryFilter;
use \OpenAPI\OpenAPI\Models\Shared\InventoryFilterConditionEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListResourceInventoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListResourceInventoryRequest();
    $request->listResourceInventoryRequest = new ListResourceInventoryRequest();
    $request->listResourceInventoryRequest->filters = [
        new InventoryFilter(),
        new InventoryFilter(),
        new InventoryFilter(),
        new InventoryFilter(),
    ];
    $request->listResourceInventoryRequest->maxResults = 747080;
    $request->listResourceInventoryRequest->nextToken = 'dicta';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzTarget = ListResourceInventoryXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_RESOURCE_INVENTORY;

    $response = $sdk->sdk->listResourceInventory($request);

    if ($response->listResourceInventoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified license configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->resourceArn = 'aliquid';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'neque';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTokens

Lists your tokens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTokensRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTokensRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListTokensXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTokensRequest();
    $request->listTokensRequest = new ListTokensRequest();
    $request->listTokensRequest->filters = [
        new Filter(),
        new Filter(),
    ];
    $request->listTokensRequest->maxResults = 124833;
    $request->listTokensRequest->nextToken = 'ullam';
    $request->listTokensRequest->tokenIds = [
        'hic',
        'voluptatem',
        'cumque',
    ];
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListTokensXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_TOKENS;

    $response = $sdk->sdk->listTokens($request);

    if ($response->listTokensResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsageForLicenseConfiguration

Lists all license usage records for a license configuration, displaying license consumption details by resource at a selected point in time. Use this action to audit the current license consumption for any license inventory and configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageForLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUsageForLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListUsageForLicenseConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsageForLicenseConfigurationRequest();
    $request->listUsageForLicenseConfigurationRequest = new ListUsageForLicenseConfigurationRequest();
    $request->listUsageForLicenseConfigurationRequest->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->listUsageForLicenseConfigurationRequest->licenseConfigurationArn = 'tempore';
    $request->listUsageForLicenseConfigurationRequest->maxResults = 584476;
    $request->listUsageForLicenseConfigurationRequest->nextToken = 'aperiam';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'architecto';
    $request->xAmzTarget = ListUsageForLicenseConfigurationXAmzTargetEnum::AWS_LICENSE_MANAGER_LIST_USAGE_FOR_LICENSE_CONFIGURATION;

    $response = $sdk->sdk->listUsageForLicenseConfiguration($request);

    if ($response->listUsageForLicenseConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## rejectGrant

Rejects the specified grant.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RejectGrantRequest;
use \OpenAPI\OpenAPI\Models\Shared\RejectGrantRequest;
use \OpenAPI\OpenAPI\Models\Operations\RejectGrantXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RejectGrantRequest();
    $request->rejectGrantRequest = new RejectGrantRequest();
    $request->rejectGrantRequest->grantArn = 'quae';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = RejectGrantXAmzTargetEnum::AWS_LICENSE_MANAGER_REJECT_GRANT;

    $response = $sdk->sdk->rejectGrant($request);

    if ($response->rejectGrantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds the specified tags to the specified license configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->resourceArn = 'doloribus';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'quae';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'odio';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_LICENSE_MANAGER_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from the specified license configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->resourceArn = 'voluptatibus';
    $request->untagResourceRequest->tagKeys = [
        'vero',
        'omnis',
        'quis',
        'ipsum',
    ];
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'consectetur';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'tenetur';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_LICENSE_MANAGER_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLicenseConfiguration

Modifies the attributes of an existing license configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLicenseConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseConfigurationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProductInformation;
use \OpenAPI\OpenAPI\Models\Shared\ProductInformationFilter;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseConfigurationXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLicenseConfigurationRequest();
    $request->updateLicenseConfigurationRequest = new UpdateLicenseConfigurationRequest();
    $request->updateLicenseConfigurationRequest->description = 'distinctio';
    $request->updateLicenseConfigurationRequest->disassociateWhenNotFound = false;
    $request->updateLicenseConfigurationRequest->licenseConfigurationArn = 'quod';
    $request->updateLicenseConfigurationRequest->licenseConfigurationStatus = LicenseConfigurationStatusEnum::AVAILABLE;
    $request->updateLicenseConfigurationRequest->licenseCount = 630448;
    $request->updateLicenseConfigurationRequest->licenseCountHardLimit = false;
    $request->updateLicenseConfigurationRequest->licenseRules = [
        'vero',
        'ducimus',
        'dolore',
    ];
    $request->updateLicenseConfigurationRequest->name = 'Gilberto Dickinson';
    $request->updateLicenseConfigurationRequest->productInformationList = [
        new ProductInformation(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'exercitationem';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = UpdateLicenseConfigurationXAmzTargetEnum::AWS_LICENSE_MANAGER_UPDATE_LICENSE_CONFIGURATION;

    $response = $sdk->sdk->updateLicenseConfiguration($request);

    if ($response->updateLicenseConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLicenseManagerReportGenerator

<p>Updates a report generator.</p> <p>After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLicenseManagerReportGeneratorRequest;
use \OpenAPI\OpenAPI\Models\Shared\ReportContext;
use \OpenAPI\OpenAPI\Models\Shared\ReportFrequency;
use \OpenAPI\OpenAPI\Models\Shared\ReportFrequencyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseManagerReportGeneratorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLicenseManagerReportGeneratorRequest();
    $request->updateLicenseManagerReportGeneratorRequest = new UpdateLicenseManagerReportGeneratorRequest();
    $request->updateLicenseManagerReportGeneratorRequest->clientToken = 'iusto';
    $request->updateLicenseManagerReportGeneratorRequest->description = 'eligendi';
    $request->updateLicenseManagerReportGeneratorRequest->licenseManagerReportGeneratorArn = 'ducimus';
    $request->updateLicenseManagerReportGeneratorRequest->reportContext = new ReportContext();
    $request->updateLicenseManagerReportGeneratorRequest->reportContext->licenseConfigurationArns = [
        'officia',
    ];
    $request->updateLicenseManagerReportGeneratorRequest->reportFrequency = new ReportFrequency();
    $request->updateLicenseManagerReportGeneratorRequest->reportFrequency->period = ReportFrequencyTypeEnum::DAY;
    $request->updateLicenseManagerReportGeneratorRequest->reportFrequency->value = 368584;
    $request->updateLicenseManagerReportGeneratorRequest->reportGeneratorName = 'ea';
    $request->updateLicenseManagerReportGeneratorRequest->type = [
        ReportTypeEnum::LICENSE_CONFIGURATION_SUMMARY_REPORT,
    ];
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'ratione';
    $request->xAmzDate = 'ex';
    $request->xAmzSecurityToken = 'laudantium';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = UpdateLicenseManagerReportGeneratorXAmzTargetEnum::AWS_LICENSE_MANAGER_UPDATE_LICENSE_MANAGER_REPORT_GENERATOR;

    $response = $sdk->sdk->updateLicenseManagerReportGenerator($request);

    if ($response->updateLicenseManagerReportGeneratorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLicenseSpecificationsForResource

<p>Adds or removes the specified license configurations for the specified Amazon Web Services resource.</p> <p>You can update the license specifications of AMIs, instances, and hosts. You cannot update the license specifications for launch templates and CloudFormation templates, as they send license configurations to the operation that creates the resource.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseSpecificationsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateLicenseSpecificationsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\LicenseSpecification;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLicenseSpecificationsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLicenseSpecificationsForResourceRequest();
    $request->updateLicenseSpecificationsForResourceRequest = new UpdateLicenseSpecificationsForResourceRequest();
    $request->updateLicenseSpecificationsForResourceRequest->addLicenseSpecifications = [
        new LicenseSpecification(),
        new LicenseSpecification(),
        new LicenseSpecification(),
        new LicenseSpecification(),
    ];
    $request->updateLicenseSpecificationsForResourceRequest->removeLicenseSpecifications = [
        new LicenseSpecification(),
    ];
    $request->updateLicenseSpecificationsForResourceRequest->resourceArn = 'ex';
    $request->xAmzAlgorithm = 'nulla';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'nostrum';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quisquam';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = UpdateLicenseSpecificationsForResourceXAmzTargetEnum::AWS_LICENSE_MANAGER_UPDATE_LICENSE_SPECIFICATIONS_FOR_RESOURCE;

    $response = $sdk->sdk->updateLicenseSpecificationsForResource($request);

    if ($response->updateLicenseSpecificationsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServiceSettings

Updates License Manager settings for the current Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServiceSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\OrganizationConfiguration;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServiceSettingsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServiceSettingsRequest();
    $request->updateServiceSettingsRequest = new UpdateServiceSettingsRequest();
    $request->updateServiceSettingsRequest->enableCrossAccountsDiscovery = false;
    $request->updateServiceSettingsRequest->organizationConfiguration = new OrganizationConfiguration();
    $request->updateServiceSettingsRequest->organizationConfiguration->enableIntegration = false;
    $request->updateServiceSettingsRequest->s3BucketArn = 'ea';
    $request->updateServiceSettingsRequest->snsTopicArn = 'impedit';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'veniam';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzTarget = UpdateServiceSettingsXAmzTargetEnum::AWS_LICENSE_MANAGER_UPDATE_SERVICE_SETTINGS;

    $response = $sdk->sdk->updateServiceSettings($request);

    if ($response->updateServiceSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
