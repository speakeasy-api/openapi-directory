# SDK

## Overview

<fullname>Amazon Cognito Sync</fullname> <p>Amazon Cognito Sync provides an AWS service and client library that enable cross-device syncing of application-related user data. High-level client libraries are available for both iOS and Android. You can use these libraries to persist data locally so that it's available even if the device is offline. Developer credentials don't need to be stored on the mobile device to access the service. You can use Amazon Cognito to obtain a normalized user ID and credentials. User data is persisted in a dataset that can store up to 1 MB of key-value pairs, and you can have up to 20 datasets per user identity.</p> <p>With Amazon Cognito Sync, the data stored for each identity is accessible only to credentials assigned to that identity. In order to use the Cognito Sync service, you need to make API calls using credentials retrieved with <a href="http://docs.aws.amazon.com/cognitoidentity/latest/APIReference/Welcome.html">Amazon Cognito Identity service</a>.</p> <p>If you want to use Cognito Sync in an Android or iOS application, you will probably want to make API calls via the AWS Mobile SDK. To learn more, see the <a href="http://docs.aws.amazon.com/mobile/sdkforandroid/developerguide/cognito-sync.html">Developer Guide for Android</a> and the <a href="http://docs.aws.amazon.com/mobile/sdkforios/developerguide/cognito-sync.html">Developer Guide for iOS</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-sync/>
### Available Operations

* [bulkPublish](#bulkpublish) - <p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [deleteDataset](#deletedataset) - <p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* [describeDataset](#describedataset) - <p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* [describeIdentityPoolUsage](#describeidentitypoolusage) - <p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [describeIdentityUsage](#describeidentityusage) - <p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>
* [getBulkPublishDetails](#getbulkpublishdetails) - <p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [getCognitoEvents](#getcognitoevents) - <p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [getIdentityPoolConfiguration](#getidentitypoolconfiguration) - <p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [listDatasets](#listdatasets) - <p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>
* [listIdentityPoolUsage](#listidentitypoolusage) - <p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>
* [listRecords](#listrecords) - <p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>
* [registerDevice](#registerdevice) - <p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [setCognitoEvents](#setcognitoevents) - <p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [setIdentityPoolConfiguration](#setidentitypoolconfiguration) - <p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>
* [subscribeToDataset](#subscribetodataset) - <p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [unsubscribeFromDataset](#unsubscribefromdataset) - <p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>
* [updateRecords](#updaterecords) - <p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

## bulkPublish

<p>Initiates a bulk publish of all existing datasets for an Identity Pool to the configured stream. Customers are limited to one successful bulk publish per 24 hours. Bulk publish is an asynchronous request, customers can see the status of the request via the GetBulkPublishDetails operation.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BulkPublishRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkPublishRequest();
    $request->identityPoolId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->bulkPublish($request);

    if ($response->bulkPublishResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDataset

<p>Deletes the specific dataset. The dataset will be deleted permanently, and the action can't be undone. Datasets that this dataset was merged with will no longer report the merge. Any subsequent operation on this dataset will result in a ResourceNotFoundException.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDatasetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDatasetRequest();
    $request->datasetName = 'delectus';
    $request->identityId = 'tempora';
    $request->identityPoolId = 'suscipit';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'minus';
    $request->xAmzCredential = 'placeat';
    $request->xAmzDate = 'voluptatum';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'nisi';

    $response = $sdk->sdk->deleteDataset($request);

    if ($response->deleteDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeDataset

<p>Gets meta data about a dataset by identity and dataset name. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDatasetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDatasetRequest();
    $request->datasetName = 'recusandae';
    $request->identityId = 'temporibus';
    $request->identityPoolId = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->describeDataset($request);

    if ($response->describeDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIdentityPoolUsage

<p>Gets usage details (for example, data storage) about a particular identity pool.</p> <p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityPoolUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIdentityPoolUsageRequest();
    $request->identityPoolId = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->describeIdentityPoolUsage($request);

    if ($response->describeIdentityPoolUsageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIdentityUsage

<p>Gets usage information for an identity, including number of datasets and data usage.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIdentityUsageRequest();
    $request->identityId = 'esse';
    $request->identityPoolId = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->describeIdentityUsage($request);

    if ($response->describeIdentityUsageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBulkPublishDetails

<p>Get the status of the last BulkPublish operation for an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBulkPublishDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBulkPublishDetailsRequest();
    $request->identityPoolId = 'deleniti';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'optio';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'beatae';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getBulkPublishDetails($request);

    if ($response->getBulkPublishDetailsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCognitoEvents

<p>Gets the events and the corresponding Lambda functions associated with an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCognitoEventsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCognitoEventsRequest();
    $request->identityPoolId = 'qui';
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getCognitoEvents($request);

    if ($response->getCognitoEventsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIdentityPoolConfiguration

<p>Gets the configuration settings of an identity pool.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentityPoolConfigurationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdentityPoolConfigurationRequest();
    $request->identityPoolId = 'ad';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->getIdentityPoolConfiguration($request);

    if ($response->getIdentityPoolConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDatasets

<p>Lists datasets for an identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListDatasets can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use the Cognito Identity credentials to make this API call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDatasetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDatasetsRequest();
    $request->identityId = 'saepe';
    $request->identityPoolId = 'fuga';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'architecto';
    $request->maxResults = 60225;
    $request->nextToken = 'reiciendis';

    $response = $sdk->sdk->listDatasets($request);

    if ($response->listDatasetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentityPoolUsage

<p>Gets a list of identity pools registered with Cognito.</p> <p>ListIdentityPoolUsage can only be called with developer credentials. You cannot make this API call with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityPoolUsageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentityPoolUsageRequest();
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->maxResults = 750686;
    $request->nextToken = 'enim';

    $response = $sdk->sdk->listIdentityPoolUsage($request);

    if ($response->listIdentityPoolUsageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listRecords

<p>Gets paginated records, optionally changed after a particular sync count for a dataset and identity. With Amazon Cognito Sync, each identity has access only to its own data. Thus, the credentials used to make this API call need to have access to the identity data.</p> <p>ListRecords can be called with temporary user credentials provided by Cognito Identity or with developer credentials. You should use Cognito Identity credentials to make this API call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRecordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRecordsRequest();
    $request->datasetName = 'omnis';
    $request->identityId = 'nemo';
    $request->identityPoolId = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';
    $request->lastSyncCount = 652790;
    $request->maxResults = 208876;
    $request->nextToken = 'culpa';
    $request->syncSessionToken = 'consequuntur';

    $response = $sdk->sdk->listRecords($request);

    if ($response->listRecordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerDevice

<p>Registers a device to receive push sync notifications.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDeviceRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterDeviceRequestBodyPlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDeviceRequest();
    $request->identityId = 'repellat';
    $request->identityPoolId = 'mollitia';
    $request->requestBody = new RegisterDeviceRequestBody();
    $request->requestBody->platform = RegisterDeviceRequestBodyPlatformEnum::GCM;
    $request->requestBody->token = 'numquam';
    $request->xAmzAlgorithm = 'commodi';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'velit';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'quia';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->registerDevice($request);

    if ($response->registerDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setCognitoEvents

<p>Sets the AWS Lambda function for a given event type for an identity pool. This request only updates the key/value pair specified. Other key/values pairs are not updated. To remove a key value pair, pass a empty value for the particular key.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetCognitoEventsRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetCognitoEventsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetCognitoEventsRequest();
    $request->identityPoolId = 'vitae';
    $request->requestBody = new SetCognitoEventsRequestBody();
    $request->requestBody->events = [
        'animi' => 'enim',
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->setCognitoEvents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setIdentityPoolConfiguration

<p>Sets the necessary configuration for push sync.</p><p>This API can only be called with developer credentials. You cannot call this API with the temporary user credentials provided by Cognito Identity.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetIdentityPoolConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetIdentityPoolConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SetIdentityPoolConfigurationRequestBodyCognitoStreams;
use \OpenAPI\OpenAPI\Models\Shared\StreamingStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetIdentityPoolConfigurationRequestBodyPushSync;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetIdentityPoolConfigurationRequest();
    $request->identityPoolId = 'laborum';
    $request->requestBody = new SetIdentityPoolConfigurationRequestBody();
    $request->requestBody->cognitoStreams = new SetIdentityPoolConfigurationRequestBodyCognitoStreams();
    $request->requestBody->cognitoStreams->roleArn = 'quasi';
    $request->requestBody->cognitoStreams->streamName = 'reiciendis';
    $request->requestBody->cognitoStreams->streamingStatus = StreamingStatusEnum::DISABLED;
    $request->requestBody->pushSync = new SetIdentityPoolConfigurationRequestBodyPushSync();
    $request->requestBody->pushSync->applicationArns = [
        'nihil',
        'praesentium',
        'voluptatibus',
        'ipsa',
    ];
    $request->requestBody->pushSync->roleArn = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->setIdentityPoolConfiguration($request);

    if ($response->setIdentityPoolConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeToDataset

<p>Subscribes to receive notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeToDatasetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribeToDatasetRequest();
    $request->datasetName = 'dicta';
    $request->deviceId = 'corporis';
    $request->identityId = 'dolore';
    $request->identityPoolId = 'iusto';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'harum';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'quae';

    $response = $sdk->sdk->subscribeToDataset($request);

    if ($response->subscribeToDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeFromDataset

<p>Unsubscribes from receiving notifications when a dataset is modified by another device.</p><p>This API can only be called with temporary credentials provided by Cognito Identity. You cannot call this API with developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeFromDatasetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsubscribeFromDatasetRequest();
    $request->datasetName = 'ipsum';
    $request->deviceId = 'quidem';
    $request->identityId = 'molestias';
    $request->identityPoolId = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->unsubscribeFromDataset($request);

    if ($response->unsubscribeFromDatasetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateRecords

<p>Posts updates to records and adds and deletes records for a dataset and user.</p> <p>The sync count in the record patch is your last known sync count for that record. The server will reject an UpdateRecords request with a ResourceConflictException if you try to patch a record with a new value but a stale sync count.</p><p>For example, if the sync count on the server is 5 for a key called highScore and you try and submit a new highScore with sync count of 4, the request will be rejected. To obtain the current sync count for a record, call ListRecords. On a successful update of the record, the response returns the new sync count for that record. You should present that sync count the next time you try to update that same record. When the record does not exist, specify the sync count as 0.</p> <p>This API can be called with temporary user credentials provided by Cognito Identity or with developer credentials.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRecordsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RecordPatch;
use \OpenAPI\OpenAPI\Models\Shared\OperationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRecordsRequest();
    $request->datasetName = 'sint';
    $request->identityId = 'veritatis';
    $request->identityPoolId = 'itaque';
    $request->requestBody = new UpdateRecordsRequestBody();
    $request->requestBody->deviceId = 'incidunt';
    $request->requestBody->recordPatches = [
        new RecordPatch(),
        new RecordPatch(),
    ];
    $request->requestBody->syncSessionToken = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzClientContext = 'modi';

    $response = $sdk->sdk->updateRecords($request);

    if ($response->updateRecordsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
