# SDK

## Overview

Provide APIs to create and manage Amazon Connect Campaigns.

Amazon Web Services documentation
<https://docs.aws.amazon.com/connect-campaigns/>
### Available Operations

* [createCampaign](#createcampaign) - Creates a campaign for the specified Amazon Connect account. This API is idempotent.
* [deleteCampaign](#deletecampaign) - Deletes a campaign from the specified Amazon Connect account.
* [deleteConnectInstanceConfig](#deleteconnectinstanceconfig) - Deletes a connect instance config from the specified AWS account.
* [deleteInstanceOnboardingJob](#deleteinstanceonboardingjob) - Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.
* [describeCampaign](#describecampaign) - Describes the specific campaign.
* [getCampaignState](#getcampaignstate) - Get state of a campaign for the specified Amazon Connect account.
* [getCampaignStateBatch](#getcampaignstatebatch) - Get state of campaigns for the specified Amazon Connect account.
* [getConnectInstanceConfig](#getconnectinstanceconfig) - Get the specific Connect instance config.
* [getInstanceOnboardingJobStatus](#getinstanceonboardingjobstatus) - Get the specific instance onboarding job status.
* [listCampaigns](#listcampaigns) - Provides summary information about the campaigns under the specified Amazon Connect account.
* [listTagsForResource](#listtagsforresource) - List tags for a resource.
* [pauseCampaign](#pausecampaign) - Pauses a campaign for the specified Amazon Connect account.
* [putDialRequestBatch](#putdialrequestbatch) - Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.
* [resumeCampaign](#resumecampaign) - Stops a campaign for the specified Amazon Connect account.
* [startCampaign](#startcampaign) - Starts a campaign for the specified Amazon Connect account.
* [startInstanceOnboardingJob](#startinstanceonboardingjob) - Onboard the specific Amazon Connect instance to Connect Campaigns.
* [stopCampaign](#stopcampaign) - Stops a campaign for the specified Amazon Connect account.
* [tagResource](#tagresource) - Tag a resource.
* [untagResource](#untagresource) - Untag a resource.
* [updateCampaignDialerConfig](#updatecampaigndialerconfig) - Updates the dialer config of a campaign. This API is idempotent.
* [updateCampaignName](#updatecampaignname) - Updates the name of a campaign. This API is idempotent.
* [updateCampaignOutboundCallConfig](#updatecampaignoutboundcallconfig) - Updates the outbound call config of a campaign. This API is idempotent.

## createCampaign

Creates a campaign for the specified Amazon Connect account. This API is idempotent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBodyDialerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PredictiveDialerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProgressiveDialerConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateCampaignRequestBodyOutboundCallConfig;
use \OpenAPI\OpenAPI\Models\Shared\AnswerMachineDetectionConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCampaignRequest();
    $request->requestBody = new CreateCampaignRequestBody();
    $request->requestBody->connectInstanceId = 'iusto';
    $request->requestBody->dialerConfig = new CreateCampaignRequestBodyDialerConfig();
    $request->requestBody->dialerConfig->predictiveDialerConfig = new PredictiveDialerConfig();
    $request->requestBody->dialerConfig->predictiveDialerConfig->bandwidthAllocation = 5680.45;
    $request->requestBody->dialerConfig->progressiveDialerConfig = new ProgressiveDialerConfig();
    $request->requestBody->dialerConfig->progressiveDialerConfig->bandwidthAllocation = 3927.85;
    $request->requestBody->name = 'Jake Bernier MD';
    $request->requestBody->outboundCallConfig = new CreateCampaignRequestBodyOutboundCallConfig();
    $request->requestBody->outboundCallConfig->answerMachineDetectionConfig = new AnswerMachineDetectionConfig();
    $request->requestBody->outboundCallConfig->answerMachineDetectionConfig->enableAnswerMachineDetection = false;
    $request->requestBody->outboundCallConfig->connectContactFlowId = 'perferendis';
    $request->requestBody->outboundCallConfig->connectQueueId = 'ipsam';
    $request->requestBody->outboundCallConfig->connectSourcePhoneNumber = 'repellendus';
    $request->requestBody->tags = [
        'quo' => 'odit',
        'at' => 'at',
        'maiores' => 'molestiae',
        'quod' => 'quod',
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->createCampaign($request);

    if ($response->createCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCampaign

Deletes a campaign from the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCampaignRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'beatae';
    $request->id = '6742cb73-9205-4929-b96f-ea7596eb10fa';

    $response = $sdk->sdk->deleteCampaign($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnectInstanceConfig

Deletes a connect instance config from the specified AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectInstanceConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectInstanceConfigRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'nobis';
    $request->connectInstanceId = 'enim';

    $response = $sdk->sdk->deleteConnectInstanceConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteInstanceOnboardingJob

Delete the Connect Campaigns onboarding job for the specified Amazon Connect instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteInstanceOnboardingJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteInstanceOnboardingJobRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';
    $request->connectInstanceId = 'doloribus';

    $response = $sdk->sdk->deleteInstanceOnboardingJob($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCampaign

Describes the specific campaign.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCampaignRequest();
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->id = 'a9467739-251a-4a52-83f5-ad019da1ffe7';

    $response = $sdk->sdk->describeCampaign($request);

    if ($response->describeCampaignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignState

Get state of a campaign for the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignStateRequest();
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->id = '074f1547-1b5e-46e1-bb99-d488e1e91e45';

    $response = $sdk->sdk->getCampaignState($request);

    if ($response->getCampaignStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCampaignStateBatch

Get state of campaigns for the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignStateBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCampaignStateBatchRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCampaignStateBatchRequest();
    $request->requestBody = new GetCampaignStateBatchRequestBody();
    $request->requestBody->campaignIds = [
        'est',
    ];
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';

    $response = $sdk->sdk->getCampaignStateBatch($request);

    if ($response->getCampaignStateBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnectInstanceConfig

Get the specific Connect instance config.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectInstanceConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectInstanceConfigRequest();
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->connectInstanceId = 'ipsam';

    $response = $sdk->sdk->getConnectInstanceConfig($request);

    if ($response->getConnectInstanceConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getInstanceOnboardingJobStatus

Get the specific instance onboarding job status.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetInstanceOnboardingJobStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInstanceOnboardingJobStatusRequest();
    $request->xAmzAlgorithm = 'alias';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'tempora';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'tempore';
    $request->connectInstanceId = 'labore';

    $response = $sdk->sdk->getInstanceOnboardingJobStatus($request);

    if ($response->getInstanceOnboardingJobStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCampaigns

Provides summary information about the campaigns under the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCampaignsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCampaignsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListCampaignsRequestBodyFilters;
use \OpenAPI\OpenAPI\Models\Shared\InstanceIdFilter;
use \OpenAPI\OpenAPI\Models\Shared\InstanceIdFilterOperatorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCampaignsRequest();
    $request->requestBody = new ListCampaignsRequestBody();
    $request->requestBody->filters = new ListCampaignsRequestBodyFilters();
    $request->requestBody->filters->instanceIdFilter = new InstanceIdFilter();
    $request->requestBody->filters->instanceIdFilter->operator = InstanceIdFilterOperatorEnum::EQ;
    $request->requestBody->filters->instanceIdFilter->value = 'delectus';
    $request->requestBody->maxResults = 433288;
    $request->requestBody->nextToken = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->maxResults = 'dolor';
    $request->nextToken = 'debitis';

    $response = $sdk->sdk->listCampaigns($request);

    if ($response->listCampaignsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

List tags for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->arn = 'dicta';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pauseCampaign

Pauses a campaign for the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PauseCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PauseCampaignRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->id = '395efb9b-a88f-43a6-a997-074ba4469b6e';

    $response = $sdk->sdk->pauseCampaign($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putDialRequestBatch

Creates dials requests for the specified campaign Amazon Connect account. This API is idempotent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutDialRequestBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutDialRequestBatchRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\DialRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutDialRequestBatchRequest();
    $request->requestBody = new PutDialRequestBatchRequestBody();
    $request->requestBody->dialRequests = [
        new DialRequest(),
    ];
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';
    $request->id = '90afa563-e251-46fe-8c8b-711e5b7fd2ed';

    $response = $sdk->sdk->putDialRequestBatch($request);

    if ($response->putDialRequestBatchResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resumeCampaign

Stops a campaign for the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ResumeCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResumeCampaignRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'consequuntur';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'sunt';
    $request->xAmzSignedHeaders = 'quo';
    $request->id = 'ddc69260-1fb5-476b-8d5f-0d30c5fbb258';

    $response = $sdk->sdk->resumeCampaign($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startCampaign

Starts a campaign for the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartCampaignRequest();
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->id = 'c73d5fe9-b90c-4289-89b3-fe49a8d9cbf4';

    $response = $sdk->sdk->startCampaign($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startInstanceOnboardingJob

Onboard the specific Amazon Connect instance to Connect Campaigns.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartInstanceOnboardingJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartInstanceOnboardingJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartInstanceOnboardingJobRequestBodyEncryptionConfig;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartInstanceOnboardingJobRequest();
    $request->requestBody = new StartInstanceOnboardingJobRequestBody();
    $request->requestBody->encryptionConfig = new StartInstanceOnboardingJobRequestBodyEncryptionConfig();
    $request->requestBody->encryptionConfig->enabled = false;
    $request->requestBody->encryptionConfig->encryptionType = EncryptionTypeEnum::KMS;
    $request->requestBody->encryptionConfig->keyArn = 'quos';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->connectInstanceId = 'excepturi';

    $response = $sdk->sdk->startInstanceOnboardingJob($request);

    if ($response->startInstanceOnboardingJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopCampaign

Stops a campaign for the specified Amazon Connect account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopCampaignRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopCampaignRequest();
    $request->xAmzAlgorithm = 'cum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'numquam';
    $request->id = '100674eb-f692-480d-9ba7-7a89ebf737ae';

    $response = $sdk->sdk->stopCampaign($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Tag a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'aspernatur' => 'perferendis',
        'amet' => 'optio',
    ];
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->arn = 'repellendus';

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Untag a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->arn = 'quod';
    $request->tagKeys = [
        'qui',
        'dolorum',
        'a',
        'esse',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCampaignDialerConfig

Updates the dialer config of a campaign. This API is idempotent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignDialerConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignDialerConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignDialerConfigRequestBodyDialerConfig;
use \OpenAPI\OpenAPI\Models\Shared\PredictiveDialerConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProgressiveDialerConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCampaignDialerConfigRequest();
    $request->requestBody = new UpdateCampaignDialerConfigRequestBody();
    $request->requestBody->dialerConfig = new UpdateCampaignDialerConfigRequestBodyDialerConfig();
    $request->requestBody->dialerConfig->predictiveDialerConfig = new PredictiveDialerConfig();
    $request->requestBody->dialerConfig->predictiveDialerConfig->bandwidthAllocation = 6874.88;
    $request->requestBody->dialerConfig->progressiveDialerConfig = new ProgressiveDialerConfig();
    $request->requestBody->dialerConfig->progressiveDialerConfig->bandwidthAllocation = 4834.09;
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';
    $request->id = '53f870b3-26b5-4a73-829c-db1a8422bb67';

    $response = $sdk->sdk->updateCampaignDialerConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCampaignName

Updates the name of a campaign. This API is idempotent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignNameRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCampaignNameRequest();
    $request->requestBody = new UpdateCampaignNameRequestBody();
    $request->requestBody->name = 'Marty Deckow';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->id = 'cbb1e31b-8b90-4f34-83a1-108e0adcf4b9';

    $response = $sdk->sdk->updateCampaignName($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCampaignOutboundCallConfig

Updates the outbound call config of a campaign. This API is idempotent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignOutboundCallConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignOutboundCallConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCampaignOutboundCallConfigRequestBodyAnswerMachineDetectionConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCampaignOutboundCallConfigRequest();
    $request->requestBody = new UpdateCampaignOutboundCallConfigRequestBody();
    $request->requestBody->answerMachineDetectionConfig = new UpdateCampaignOutboundCallConfigRequestBodyAnswerMachineDetectionConfig();
    $request->requestBody->answerMachineDetectionConfig->enableAnswerMachineDetection = false;
    $request->requestBody->connectContactFlowId = 'qui';
    $request->requestBody->connectSourcePhoneNumber = 'quae';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'omnis';
    $request->id = '53f73ef7-fbc7-4abd-b4dd-39c0f5d2cff7';

    $response = $sdk->sdk->updateCampaignOutboundCallConfig($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
