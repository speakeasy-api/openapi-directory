# SDK

## Overview

Savings Plans are a pricing model that offer significant savings on AWS usage (for example, on Amazon EC2 instances). You commit to a consistent amount of usage, in USD per hour, for a term of 1 or 3 years, and receive a lower price for that usage. For more information, see the <a href="https://docs.aws.amazon.com/savingsplans/latest/userguide/">AWS Savings Plans User Guide</a>.

Amazon Web Services documentation
<https://docs.aws.amazon.com/savingsplans/>
### Available Operations

* [createSavingsPlan](#createsavingsplan) - Creates a Savings Plan.
* [deleteQueuedSavingsPlan](#deletequeuedsavingsplan) - Deletes the queued purchase for the specified Savings Plan.
* [describeSavingsPlanRates](#describesavingsplanrates) - Describes the specified Savings Plans rates.
* [describeSavingsPlans](#describesavingsplans) - Describes the specified Savings Plans.
* [describeSavingsPlansOfferingRates](#describesavingsplansofferingrates) - Describes the specified Savings Plans offering rates.
* [describeSavingsPlansOfferings](#describesavingsplansofferings) - Describes the specified Savings Plans offerings.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.

## createSavingsPlan

Creates a Savings Plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSavingsPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSavingsPlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSavingsPlanRequest();
    $request->requestBody = new CreateSavingsPlanRequestBody();
    $request->requestBody->clientToken = 'voluptatum';
    $request->requestBody->commitment = 'iusto';
    $request->requestBody->purchaseTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T06:24:36.919Z');
    $request->requestBody->savingsPlanOfferingId = 'recusandae';
    $request->requestBody->tags = [
        'ab' => 'quis',
        'veritatis' => 'deserunt',
        'perferendis' => 'ipsam',
        'repellendus' => 'sapiente',
    ];
    $request->requestBody->upfrontPaymentAmount = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->createSavingsPlan($request);

    if ($response->createSavingsPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteQueuedSavingsPlan

Deletes the queued purchase for the specified Savings Plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueuedSavingsPlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteQueuedSavingsPlanRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteQueuedSavingsPlanRequest();
    $request->requestBody = new DeleteQueuedSavingsPlanRequestBody();
    $request->requestBody->savingsPlanId = 'esse';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->deleteQueuedSavingsPlan($request);

    if ($response->deleteQueuedSavingsPlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSavingsPlanRates

Describes the specified Savings Plans rates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlanRatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlanRatesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanRateFilter;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanRateFilterNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSavingsPlanRatesRequest();
    $request->requestBody = new DescribeSavingsPlanRatesRequestBody();
    $request->requestBody->filters = [
        new SavingsPlanRateFilter(),
    ];
    $request->requestBody->maxResults = 537373;
    $request->requestBody->nextToken = 'hic';
    $request->requestBody->savingsPlanId = 'optio';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';

    $response = $sdk->sdk->describeSavingsPlanRates($request);

    if ($response->describeSavingsPlanRatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSavingsPlans

Describes the specified Savings Plans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlansRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlansRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanFilter;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlansFilterNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSavingsPlansRequest();
    $request->requestBody = new DescribeSavingsPlansRequestBody();
    $request->requestBody->filters = [
        new SavingsPlanFilter(),
        new SavingsPlanFilter(),
        new SavingsPlanFilter(),
    ];
    $request->requestBody->maxResults = 456150;
    $request->requestBody->nextToken = 'ipsum';
    $request->requestBody->savingsPlanArns = [
        'aspernatur',
        'perferendis',
        'ad',
    ];
    $request->requestBody->savingsPlanIds = [
        'sed',
        'iste',
        'dolor',
    ];
    $request->requestBody->states = [
        SavingsPlanStateEnum::ACTIVE,
        SavingsPlanStateEnum::QUEUED_DELETED,
        SavingsPlanStateEnum::QUEUED_DELETED,
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->describeSavingsPlans($request);

    if ($response->describeSavingsPlansResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSavingsPlansOfferingRates

Describes the specified Savings Plans offering rates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlansOfferingRatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlansOfferingRatesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanOfferingRateFilterElement;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanRateFilterAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanProductTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanPaymentOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanRateServiceCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSavingsPlansOfferingRatesRequest();
    $request->requestBody = new DescribeSavingsPlansOfferingRatesRequestBody();
    $request->requestBody->filters = [
        new SavingsPlanOfferingRateFilterElement(),
    ];
    $request->requestBody->maxResults = 60225;
    $request->requestBody->nextToken = 'reiciendis';
    $request->requestBody->operations = [
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->requestBody->products = [
        SavingsPlanProductTypeEnum::FARGATE,
    ];
    $request->requestBody->savingsPlanOfferingIds = [
        'nobis',
    ];
    $request->requestBody->savingsPlanPaymentOptions = [
        SavingsPlanPaymentOptionEnum::PARTIAL_UPFRONT,
        SavingsPlanPaymentOptionEnum::PARTIAL_UPFRONT,
    ];
    $request->requestBody->savingsPlanTypes = [
        SavingsPlanTypeEnum::EC2_INSTANCE,
        SavingsPlanTypeEnum::COMPUTE,
    ];
    $request->requestBody->serviceCodes = [
        SavingsPlanRateServiceCodeEnum::AWS_LAMBDA,
        SavingsPlanRateServiceCodeEnum::AMAZON_SAGE_MAKER,
    ];
    $request->requestBody->usageTypes = [
        'architecto',
        'mollitia',
        'dolorem',
        'culpa',
    ];
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->describeSavingsPlansOfferingRates($request);

    if ($response->describeSavingsPlansOfferingRatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSavingsPlansOfferings

Describes the specified Savings Plans offerings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlansOfferingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlansOfferingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyCodeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanOfferingFilterElement;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanOfferingFilterAttributeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanPaymentOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SavingsPlanTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSavingsPlansOfferingsRequest();
    $request->requestBody = new DescribeSavingsPlansOfferingsRequestBody();
    $request->requestBody->currencies = [
        CurrencyCodeEnum::CNY,
        CurrencyCodeEnum::USD,
    ];
    $request->requestBody->descriptions = [
        'quis',
    ];
    $request->requestBody->durations = [
        674752,
    ];
    $request->requestBody->filters = [
        new SavingsPlanOfferingFilterElement(),
        new SavingsPlanOfferingFilterElement(),
        new SavingsPlanOfferingFilterElement(),
    ];
    $request->requestBody->maxResults = 317202;
    $request->requestBody->nextToken = 'odit';
    $request->requestBody->offeringIds = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->requestBody->operations = [
        'aut',
        'quasi',
        'error',
        'temporibus',
    ];
    $request->requestBody->paymentOptions = [
        SavingsPlanPaymentOptionEnum::ALL_UPFRONT,
        SavingsPlanPaymentOptionEnum::NO_UPFRONT,
        SavingsPlanPaymentOptionEnum::NO_UPFRONT,
    ];
    $request->requestBody->planTypes = [
        SavingsPlanTypeEnum::EC2_INSTANCE,
        SavingsPlanTypeEnum::EC2_INSTANCE,
        SavingsPlanTypeEnum::SAGE_MAKER,
        SavingsPlanTypeEnum::COMPUTE,
    ];
    $request->requestBody->productType = DescribeSavingsPlansOfferingsRequestBodyProductTypeEnum::LAMBDA;
    $request->requestBody->serviceCodes = [
        'cum',
        'perferendis',
    ];
    $request->requestBody->usageTypes = [
        'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';

    $response = $sdk->sdk->describeSavingsPlansOfferings($request);

    if ($response->describeSavingsPlansOfferingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->requestBody = new ListTagsForResourceRequestBody();
    $request->requestBody->resourceArn = 'harum';
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds the specified tags to the specified resource.

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
    $request->requestBody->resourceArn = 'molestias';
    $request->requestBody->tags = [
        'pariatur' => 'modi',
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'veritatis';
    $request->xAmzDate = 'itaque';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'consequatur';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceArn = 'est';
    $request->requestBody->tagKeys = [
        'explicabo',
        'deserunt',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'cupiditate';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
