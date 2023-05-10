# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionActionEnum;
use \OpenAPI\OpenAPI\Models\Operations\GETAddSourceIdentifierToSubscriptionVersionEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GETAddSourceIdentifierToSubscriptionRequest();
    $request->action = GETAddSourceIdentifierToSubscriptionActionEnum::ADD_SOURCE_IDENTIFIER_TO_SUBSCRIPTION;
    $request->sourceIdentifier = 'corrupti';
    $request->subscriptionName = 'provident';
    $request->version = GETAddSourceIdentifierToSubscriptionVersionEnum::TWO_THOUSAND_AND_THIRTEEN0909;
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->getAddSourceIdentifierToSubscription($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [getAddSourceIdentifierToSubscription](docs/sdk/README.md#getaddsourceidentifiertosubscription)
* [getAuthorizeDBSecurityGroupIngress](docs/sdk/README.md#getauthorizedbsecuritygroupingress)
* [getDeleteDBInstance](docs/sdk/README.md#getdeletedbinstance)
* [getDeleteDBParameterGroup](docs/sdk/README.md#getdeletedbparametergroup)
* [getDeleteDBSecurityGroup](docs/sdk/README.md#getdeletedbsecuritygroup)
* [getDeleteDBSnapshot](docs/sdk/README.md#getdeletedbsnapshot)
* [getDeleteDBSubnetGroup](docs/sdk/README.md#getdeletedbsubnetgroup)
* [getDeleteEventSubscription](docs/sdk/README.md#getdeleteeventsubscription)
* [getDeleteOptionGroup](docs/sdk/README.md#getdeleteoptiongroup)
* [getDownloadDBLogFilePortion](docs/sdk/README.md#getdownloaddblogfileportion)
* [getModifyDBInstance](docs/sdk/README.md#getmodifydbinstance)
* [getModifyDBSubnetGroup](docs/sdk/README.md#getmodifydbsubnetgroup)
* [getModifyEventSubscription](docs/sdk/README.md#getmodifyeventsubscription)
* [getPromoteReadReplica](docs/sdk/README.md#getpromotereadreplica)
* [getRebootDBInstance](docs/sdk/README.md#getrebootdbinstance)
* [getRemoveSourceIdentifierFromSubscription](docs/sdk/README.md#getremovesourceidentifierfromsubscription)
* [getRemoveTagsFromResource](docs/sdk/README.md#getremovetagsfromresource)
* [getRevokeDBSecurityGroupIngress](docs/sdk/README.md#getrevokedbsecuritygroupingress)
* [postAddSourceIdentifierToSubscription](docs/sdk/README.md#postaddsourceidentifiertosubscription)
* [postAddTagsToResource](docs/sdk/README.md#postaddtagstoresource)
* [postAuthorizeDBSecurityGroupIngress](docs/sdk/README.md#postauthorizedbsecuritygroupingress)
* [postCopyDBSnapshot](docs/sdk/README.md#postcopydbsnapshot)
* [postCreateDBInstance](docs/sdk/README.md#postcreatedbinstance)
* [postCreateDBInstanceReadReplica](docs/sdk/README.md#postcreatedbinstancereadreplica)
* [postCreateDBParameterGroup](docs/sdk/README.md#postcreatedbparametergroup)
* [postCreateDBSecurityGroup](docs/sdk/README.md#postcreatedbsecuritygroup)
* [postCreateDBSnapshot](docs/sdk/README.md#postcreatedbsnapshot)
* [postCreateDBSubnetGroup](docs/sdk/README.md#postcreatedbsubnetgroup)
* [postCreateEventSubscription](docs/sdk/README.md#postcreateeventsubscription)
* [postCreateOptionGroup](docs/sdk/README.md#postcreateoptiongroup)
* [postDeleteDBInstance](docs/sdk/README.md#postdeletedbinstance)
* [postDeleteDBParameterGroup](docs/sdk/README.md#postdeletedbparametergroup)
* [postDeleteDBSecurityGroup](docs/sdk/README.md#postdeletedbsecuritygroup)
* [postDeleteDBSnapshot](docs/sdk/README.md#postdeletedbsnapshot)
* [postDeleteDBSubnetGroup](docs/sdk/README.md#postdeletedbsubnetgroup)
* [postDeleteEventSubscription](docs/sdk/README.md#postdeleteeventsubscription)
* [postDeleteOptionGroup](docs/sdk/README.md#postdeleteoptiongroup)
* [postDescribeDBEngineVersions](docs/sdk/README.md#postdescribedbengineversions)
* [postDescribeDBInstances](docs/sdk/README.md#postdescribedbinstances)
* [postDescribeDBLogFiles](docs/sdk/README.md#postdescribedblogfiles)
* [postDescribeDBParameterGroups](docs/sdk/README.md#postdescribedbparametergroups)
* [postDescribeDBParameters](docs/sdk/README.md#postdescribedbparameters)
* [postDescribeDBSecurityGroups](docs/sdk/README.md#postdescribedbsecuritygroups)
* [postDescribeDBSnapshots](docs/sdk/README.md#postdescribedbsnapshots)
* [postDescribeDBSubnetGroups](docs/sdk/README.md#postdescribedbsubnetgroups)
* [postDescribeEngineDefaultParameters](docs/sdk/README.md#postdescribeenginedefaultparameters)
* [postDescribeEventCategories](docs/sdk/README.md#postdescribeeventcategories)
* [postDescribeEventSubscriptions](docs/sdk/README.md#postdescribeeventsubscriptions)
* [postDescribeEvents](docs/sdk/README.md#postdescribeevents)
* [postDescribeOptionGroupOptions](docs/sdk/README.md#postdescribeoptiongroupoptions)
* [postDescribeOptionGroups](docs/sdk/README.md#postdescribeoptiongroups)
* [postDescribeOrderableDBInstanceOptions](docs/sdk/README.md#postdescribeorderabledbinstanceoptions)
* [postDescribeReservedDBInstances](docs/sdk/README.md#postdescribereserveddbinstances)
* [postDescribeReservedDBInstancesOfferings](docs/sdk/README.md#postdescribereserveddbinstancesofferings)
* [postDownloadDBLogFilePortion](docs/sdk/README.md#postdownloaddblogfileportion)
* [postListTagsForResource](docs/sdk/README.md#postlisttagsforresource)
* [postModifyDBInstance](docs/sdk/README.md#postmodifydbinstance)
* [postModifyDBParameterGroup](docs/sdk/README.md#postmodifydbparametergroup)
* [postModifyDBSubnetGroup](docs/sdk/README.md#postmodifydbsubnetgroup)
* [postModifyEventSubscription](docs/sdk/README.md#postmodifyeventsubscription)
* [postModifyOptionGroup](docs/sdk/README.md#postmodifyoptiongroup)
* [postPromoteReadReplica](docs/sdk/README.md#postpromotereadreplica)
* [postPurchaseReservedDBInstancesOffering](docs/sdk/README.md#postpurchasereserveddbinstancesoffering)
* [postRebootDBInstance](docs/sdk/README.md#postrebootdbinstance)
* [postRemoveSourceIdentifierFromSubscription](docs/sdk/README.md#postremovesourceidentifierfromsubscription)
* [postRemoveTagsFromResource](docs/sdk/README.md#postremovetagsfromresource)
* [postResetDBParameterGroup](docs/sdk/README.md#postresetdbparametergroup)
* [postRestoreDBInstanceFromDBSnapshot](docs/sdk/README.md#postrestoredbinstancefromdbsnapshot)
* [postRestoreDBInstanceToPointInTime](docs/sdk/README.md#postrestoredbinstancetopointintime)
* [postRevokeDBSecurityGroupIngress](docs/sdk/README.md#postrevokedbsecuritygroupingress)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
