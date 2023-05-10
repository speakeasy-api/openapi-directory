# conversions

### Available Operations

* [conversionsCount](#conversionscount) - Retrieve a count of conversions
* [conversionsDelete](#conversionsdelete) - Delete conversion specified by id
* [conversionsGet](#conversionsget) - Retrieve a list of conversions
* [conversionsGetDatapoints](#conversionsgetdatapoints) - Retrieve a list of datapoints connected to this conversion
* [conversionsGetDatapointsCount](#conversionsgetdatapointscount) - Retrieve a count of datapoints connected to this conversion
* [conversionsGetHits](#conversionsgethits) - Retrieve the list of events related to this conversion.
* [conversionsGetStatisticsAllList](#conversionsgetstatisticsalllist) - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* [conversionsGetStatisticsList](#conversionsgetstatisticslist) - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* [conversionsGetStatisticsSingle](#conversionsgetstatisticssingle) - Retrieve statistics about this conversion for a timeframe
* [conversionsPatchNotesForm](#conversionspatchnotesform) - Fast patch the "notes" field of a conversion
* [conversionsPatchNotesJson](#conversionspatchnotesjson) - Fast patch the "notes" field of a conversion
* [conversionsPatchNotesRaw](#conversionspatchnotesraw) - Fast patch the "notes" field of a conversion
* [conversionsPatchForm](#conversionspatchform) - Modify the association between a conversion and a datapoint
* [conversionsPatchJson](#conversionspatchjson) - Modify the association between a conversion and a datapoint
* [conversionsPatchRaw](#conversionspatchraw) - Modify the association between a conversion and a datapoint
* [conversionsPostForm](#conversionspostform) - Update conversion specified by id
* [conversionsPostJson](#conversionspostjson) - Update conversion specified by id
* [conversionsPostRaw](#conversionspostraw) - Update conversion specified by id
* [conversionsPutForm](#conversionsputform) - Create a conversion
* [conversionsPutJson](#conversionsputjson) - Create a conversion
* [conversionsPutRaw](#conversionsputraw) - Create a conversion
* [getConversionsConversionId](#getconversionsconversionid) - Retrieve conversion specified by id
* [putConversionsConversionIdDatapointsBatchPatch](#putconversionsconversioniddatapointsbatchpatch) - Modify the association between a conversion and multiple datapoints

## conversionsCount

Retrieve a count of conversions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsCountStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsCountRequest();
    $request->createdAfter = 'sapiente';
    $request->createdBefore = 'totam';
    $request->status = ConversionsCountStatusEnum::DELETED;
    $request->textSearch = 'sit';

    $response = $sdk->conversions->conversionsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsDelete

Delete conversion specified by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsDeleteRequest();
    $request->conversionId = 711584;

    $response = $sdk->conversions->conversionsDelete($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsGet

Retrieve a list of conversions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsGetRequest();
    $request->createdAfter = 'neque';
    $request->createdBefore = 'sed';
    $request->limit = 424685;
    $request->offset = 730442;
    $request->status = ConversionsGetStatusEnum::DELETED;
    $request->textSearch = 'deserunt';

    $response = $sdk->conversions->conversionsGet($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsGetDatapoints

Retrieve a list of datapoints connected to this conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetDatapointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetDatapointsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetDatapointsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsGetDatapointsRequest();
    $request->conversionId = 463575;
    $request->createdAfter = 'ipsum';
    $request->createdBefore = 'incidunt';
    $request->limit = 186458;
    $request->offset = 586784;
    $request->status = ConversionsGetDatapointsStatusEnum::SPAM;
    $request->tags = 'pariatur';
    $request->textSearch = 'soluta';
    $request->type = ConversionsGetDatapointsTypeEnum::TP;

    $response = $sdk->conversions->conversionsGetDatapoints($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsGetDatapointsCount

Retrieve a count of datapoints connected to this conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetDatapointsCountRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsGetDatapointsCountRequest();
    $request->conversionId = 674848;
    $request->createdAfter = 'totam';
    $request->createdBefore = 'incidunt';
    $request->status = 'aspernatur';
    $request->tags = 'dolores';
    $request->textSearch = 'distinctio';
    $request->type = 'facilis';

    $response = $sdk->conversions->conversionsGetDatapointsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsGetHits

Retrieve the list of events related to this conversion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetHitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetHitsFilterEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetHitsTimeframeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsGetHitsRequest();
    $request->conversionId = 396060;
    $request->filter = ConversionsGetHitsFilterEnum::UNIQUES;
    $request->fromDay = 'molestias';
    $request->limit = 840429;
    $request->offset = 'qui';
    $request->timeframe = ConversionsGetHitsTimeframeEnum::LAST30;
    $request->toDay = 'fugit';

    $response = $sdk->conversions->conversionsGetHits($request);

    if ($response->apiCoreDtoClickStreamHitListPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsGetStatisticsAllList

Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsAllListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsAllListGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsAllListStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsAllListTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsGetStatisticsAllListRequest();
    $request->fromDay = 'magni';
    $request->groupBy = ConversionsGetStatisticsAllListGroupByEnum::WEEK;
    $request->status = ConversionsGetStatisticsAllListStatusEnum::DELETED;
    $request->timeFrame = ConversionsGetStatisticsAllListTimeFrameEnum::CURRENTMONTH;
    $request->toDay = 'nam';

    $response = $sdk->conversions->conversionsGetStatisticsAllList($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsGetStatisticsList

Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsListGroupByEnum;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsListTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsGetStatisticsListRequest();
    $request->conversionId = 940432;
    $request->fromDay = 'voluptatem';
    $request->groupBy = ConversionsGetStatisticsListGroupByEnum::MONTH;
    $request->timeFrame = ConversionsGetStatisticsListTimeFrameEnum::LASTYEAR;
    $request->toDay = 'nobis';

    $response = $sdk->conversions->conversionsGetStatisticsList($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsGetStatisticsSingle

Retrieve statistics about this conversion for a timeframe

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsSingleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsGetStatisticsSingleTimeFrameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsGetStatisticsSingleRequest();
    $request->conversionId = 92596;
    $request->favourite = false;
    $request->fromDay = 'saepe';
    $request->hourly = false;
    $request->tag = 'ipsum';
    $request->timeFrame = ConversionsGetStatisticsSingleTimeFrameEnum::YESTERDAY;
    $request->toDay = 'nobis';

    $response = $sdk->conversions->conversionsGetStatisticsSingle($request);

    if ($response->apiCoreDtoAggregatedAggregatedResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPatchNotesForm

Fast patch the "notes" field of a conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPatchNotesFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPatchNotesFormRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'quos';
    $request->conversionId = 731694;

    $response = $sdk->conversions->conversionsPatchNotesForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPatchNotesJson

Fast patch the "notes" field of a conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPatchNotesJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPatchNotesJsonRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'cupiditate';
    $request->conversionId = 45614;

    $response = $sdk->conversions->conversionsPatchNotesJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPatchNotesRaw

Fast patch the "notes" field of a conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPatchNotesRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPatchNotesRawRequest();
    $request->requestBody = 'delectus';
    $request->conversionId = 209157;

    $response = $sdk->conversions->conversionsPatchNotesRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPatchForm

Modify the association between a conversion and a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPatchFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsConversionPatchBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPatchFormRequest();
    $request->apiCoreRequestsConversionPatchBody = new ApiCoreRequestsConversionPatchBody();
    $request->apiCoreRequestsConversionPatchBody->action = 'dolore';
    $request->apiCoreRequestsConversionPatchBody->id = 286915;
    $request->apiCoreRequestsConversionPatchBody->replaceId = 240829;
    $request->conversionId = 677263;

    $response = $sdk->conversions->conversionsPatchForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPatchJson

Modify the association between a conversion and a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPatchJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsConversionPatchBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPatchJsonRequest();
    $request->apiCoreRequestsConversionPatchBody = new ApiCoreRequestsConversionPatchBody();
    $request->apiCoreRequestsConversionPatchBody->action = 'architecto';
    $request->apiCoreRequestsConversionPatchBody->id = 63038;
    $request->apiCoreRequestsConversionPatchBody->replaceId = 16429;
    $request->conversionId = 555649;

    $response = $sdk->conversions->conversionsPatchJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPatchRaw

Modify the association between a conversion and a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPatchRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPatchRawRequest();
    $request->requestBody = 'itaque';
    $request->conversionId = 9240;

    $response = $sdk->conversions->conversionsPatchRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPostForm

Update conversion specified by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPostFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversion;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversionProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPostFormRequest();
    $request->apiCoreDtoConversionsConversion = new ApiCoreDtoConversionsConversion();
    $request->apiCoreDtoConversionsConversion->code = 'est';
    $request->apiCoreDtoConversionsConversion->creationDate = '20120203120530';
    $request->apiCoreDtoConversionsConversion->deleted = false;
    $request->apiCoreDtoConversionsConversion->description = 'repellendus';
    $request->apiCoreDtoConversionsConversion->id = 785153;
    $request->apiCoreDtoConversionsConversion->name = 'Alexander Prosacco';
    $request->apiCoreDtoConversionsConversion->protocol = ApiCoreDtoConversionsConversionProtocolEnum::HTTP;
    $request->apiCoreDtoConversionsConversion->value = 5123.93;
    $request->conversionId = 485628;

    $response = $sdk->conversions->conversionsPostForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPostJson

Update conversion specified by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPostJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversion;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversionProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPostJsonRequest();
    $request->apiCoreDtoConversionsConversion = new ApiCoreDtoConversionsConversion();
    $request->apiCoreDtoConversionsConversion->code = 'occaecati';
    $request->apiCoreDtoConversionsConversion->creationDate = '20120203120530';
    $request->apiCoreDtoConversionsConversion->deleted = false;
    $request->apiCoreDtoConversionsConversion->description = 'voluptatibus';
    $request->apiCoreDtoConversionsConversion->id = 787542;
    $request->apiCoreDtoConversionsConversion->name = 'Arturo Hauck';
    $request->apiCoreDtoConversionsConversion->protocol = ApiCoreDtoConversionsConversionProtocolEnum::HTTP;
    $request->apiCoreDtoConversionsConversion->value = 2317.01;
    $request->conversionId = 878870;

    $response = $sdk->conversions->conversionsPostJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPostRaw

Update conversion specified by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConversionsPostRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConversionsPostRawRequest();
    $request->requestBody = 'tenetur';
    $request->conversionId = 492268;

    $response = $sdk->conversions->conversionsPostRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPutForm

Create a conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversion;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversionProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoConversionsConversion();
    $request->code = 'hic';
    $request->creationDate = '20120203120530';
    $request->deleted = false;
    $request->description = 'distinctio';
    $request->id = 799203;
    $request->name = 'Harriet Quitzon';
    $request->protocol = ApiCoreDtoConversionsConversionProtocolEnum::HTTP;
    $request->value = 8445.5;

    $response = $sdk->conversions->conversionsPutForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPutJson

Create a conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversion;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoConversionsConversionProtocolEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoConversionsConversion();
    $request->code = 'illum';
    $request->creationDate = '20120203120530';
    $request->deleted = false;
    $request->description = 'sequi';
    $request->id = 617877;
    $request->name = 'Richard Wiza';
    $request->protocol = ApiCoreDtoConversionsConversionProtocolEnum::HTTP;
    $request->value = 7804.27;

    $response = $sdk->conversions->conversionsPutJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## conversionsPutRaw

Create a conversion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
'maiores'

    $response = $sdk->conversions->conversionsPutRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConversionsConversionId

Retrieve conversion specified by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConversionsConversionIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConversionsConversionIdRequest();
    $request->conversionId = 985033;

    $response = $sdk->conversions->getConversionsConversionId($request);

    if ($response->apiCoreDtoConversionsConversion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putConversionsConversionIdDatapointsBatchPatch

Modify the association between a conversion and multiple datapoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutConversionsConversionIdDatapointsBatchPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPatchBodyBatch;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPatchBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutConversionsConversionIdDatapointsBatchPatchRequest();
    $request->apiCoreRequestsPatchBodyBatch = new ApiCoreRequestsPatchBodyBatch();
    $request->apiCoreRequestsPatchBodyBatch->patchRequests = [
        new ApiCoreRequestsPatchBody(),
        new ApiCoreRequestsPatchBody(),
    ];
    $request->conversionId = 753570;

    $response = $sdk->conversions->putConversionsConversionIdDatapointsBatchPatch($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
