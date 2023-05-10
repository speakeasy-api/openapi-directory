# tags

### Available Operations

* [tagsCount](#tagscount) - List of all the groups associated to the user filtered by this tag.
* [tagsDelete](#tagsdelete) - Delete a tag
* [tagsDeleteRelatedDatapoints](#tagsdeleterelateddatapoints) - Delete the association of this tag with all datapoints
* [tagsDeleteRelatedGroups](#tagsdeleterelatedgroups) - Delete the association of this tag with all groups
* [tagsGet](#tagsget) - List of all the groups associated to the user filtered by this tag.
* [tagsGetDatapoints](#tagsgetdatapoints) - List of all the datapoints associated to the user filtered by this tag
* [tagsGetDatapointsCount](#tagsgetdatapointscount) - Count the datapoints associated to the user filtered by this tag
* [tagsGetGroups](#tagsgetgroups) - List of all the groups associated to the user filtered by this tag.
* [tagsGetGroupsCount](#tagsgetgroupscount) - Count the groups associated to the user filtered by this tag
* [tagsPatchDataPointForm](#tagspatchdatapointform) - Associate/Deassociate a tag with a datapoint
* [tagsPatchDataPointJson](#tagspatchdatapointjson) - Associate/Deassociate a tag with a datapoint
* [tagsPatchDataPointRaw](#tagspatchdatapointraw) - Associate/Deassociate a tag with a datapoint
* [tagsPatchGroupForm](#tagspatchgroupform) - Associate/Deassociate a tag with a group
* [tagsPatchGroupJson](#tagspatchgroupjson) - Associate/Deassociate a tag with a group
* [tagsPatchGroupRaw](#tagspatchgroupraw) - Associate/Deassociate a tag with a group
* [tagsPatchTagNameForm](#tagspatchtagnameform) - Fast patch a tag name
* [tagsPatchTagNameJson](#tagspatchtagnamejson) - Fast patch a tag name
* [tagsPatchTagNameRaw](#tagspatchtagnameraw) - Fast patch a tag name
* [tagsPut](#tagsput) - Create a tag
* [getTagsTagId](#gettagstagid) - Retrieve a tag

## tagsCount

List of all the groups associated to the user filtered by this tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagsCountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsCountRequest();
    $request->datapoints = 'sit';
    $request->groups = 'non';
    $request->name = 'Clayton Quitzon';
    $request->type = TagsCountTypeEnum::TL;

    $response = $sdk->tags->tagsCount($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsDelete

Delete a tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsDeleteRequest();
    $request->tagId = 894864;

    $response = $sdk->tags->tagsDelete($request);

    if ($response->systemObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsDeleteRelatedDatapoints

Delete the association of this tag with all datapoints

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsDeleteRelatedDatapointsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsDeleteRelatedDatapointsRequest();
    $request->tagId = 524970;

    $response = $sdk->tags->tagsDeleteRelatedDatapoints($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsDeleteRelatedGroups

Delete the association of this tag with all groups

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsDeleteRelatedGroupsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsDeleteRelatedGroupsRequest();
    $request->tagId = 26522;

    $response = $sdk->tags->tagsDeleteRelatedGroups($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsGet

List of all the groups associated to the user filtered by this tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsGetRequest();
    $request->datapoints = 'nobis';
    $request->groups = 'error';
    $request->limit = 333507;
    $request->name = 'Sophie Wisoky';
    $request->offset = 48690;
    $request->type = TagsGetTypeEnum::GR;

    $response = $sdk->tags->tagsGet($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsGetDatapoints

List of all the datapoints associated to the user filtered by this tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetDatapointsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetDatapointsStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetDatapointsTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsGetDatapointsRequest();
    $request->createdAfter = 'numquam';
    $request->createdBefore = 'veniam';
    $request->limit = 446135;
    $request->offset = 889234;
    $request->status = TagsGetDatapointsStatusEnum::DELETED;
    $request->tagId = 512452;
    $request->textSearch = 'exercitationem';
    $request->type = TagsGetDatapointsTypeEnum::TL;

    $response = $sdk->tags->tagsGetDatapoints($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsGetDatapointsCount

Count the datapoints associated to the user filtered by this tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetDatapointsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetDatapointsCountStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetDatapointsCountTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsGetDatapointsCountRequest();
    $request->createdAfter = 'cum';
    $request->createdBefore = 'laboriosam';
    $request->status = TagsGetDatapointsCountStatusEnum::PAUSED;
    $request->tagId = 530089;
    $request->textSearch = 'error';
    $request->type = TagsGetDatapointsCountTypeEnum::TL;

    $response = $sdk->tags->tagsGetDatapointsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsGetGroups

List of all the groups associated to the user filtered by this tag.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetGroupsStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsGetGroupsRequest();
    $request->createdAfter = 'expedita';
    $request->createdBefore = 'debitis';
    $request->limit = 204923;
    $request->offset = 677115;
    $request->status = TagsGetGroupsStatusEnum::DELETED;
    $request->tagId = 639028;
    $request->textSearch = 'dolorum';

    $response = $sdk->tags->tagsGetGroups($request);

    if ($response->apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsGetGroupsCount

Count the groups associated to the user filtered by this tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetGroupsCountRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagsGetGroupsCountStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsGetGroupsCountRequest();
    $request->createdAfter = 'corrupti';
    $request->createdBefore = 'accusamus';
    $request->status = TagsGetGroupsCountStatusEnum::DELETED;
    $request->tagId = 543678;
    $request->textSearch = 'fugit';

    $response = $sdk->tags->tagsGetGroupsCount($request);

    if ($response->apiCoreResponsesCountResponce !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchDataPointForm

Associate/Deassociate a tag with a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchDataPointFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPatchBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchDataPointFormRequest();
    $request->apiCoreRequestsPatchBody = new ApiCoreRequestsPatchBody();
    $request->apiCoreRequestsPatchBody->action = 'ut';
    $request->apiCoreRequestsPatchBody->id = 856303;
    $request->tagId = 30235;

    $response = $sdk->tags->tagsPatchDataPointForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchDataPointJson

Associate/Deassociate a tag with a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchDataPointJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPatchBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchDataPointJsonRequest();
    $request->apiCoreRequestsPatchBody = new ApiCoreRequestsPatchBody();
    $request->apiCoreRequestsPatchBody->action = 'culpa';
    $request->apiCoreRequestsPatchBody->id = 710337;
    $request->tagId = 299643;

    $response = $sdk->tags->tagsPatchDataPointJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchDataPointRaw

Associate/Deassociate a tag with a datapoint

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchDataPointRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchDataPointRawRequest();
    $request->requestBody = 'consequatur';
    $request->tagId = 460220;

    $response = $sdk->tags->tagsPatchDataPointRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchGroupForm

Associate/Deassociate a tag with a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchGroupFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPatchBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchGroupFormRequest();
    $request->apiCoreRequestsPatchBody = new ApiCoreRequestsPatchBody();
    $request->apiCoreRequestsPatchBody->action = 'ipsam';
    $request->apiCoreRequestsPatchBody->id = 24527;
    $request->tagId = 530537;

    $response = $sdk->tags->tagsPatchGroupForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchGroupJson

Associate/Deassociate a tag with a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchGroupJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsPatchBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchGroupJsonRequest();
    $request->apiCoreRequestsPatchBody = new ApiCoreRequestsPatchBody();
    $request->apiCoreRequestsPatchBody->action = 'quas';
    $request->apiCoreRequestsPatchBody->id = 922112;
    $request->tagId = 361151;

    $response = $sdk->tags->tagsPatchGroupJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchGroupRaw

Associate/Deassociate a tag with a group

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchGroupRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchGroupRawRequest();
    $request->requestBody = 'et';
    $request->tagId = 502710;

    $response = $sdk->tags->tagsPatchGroupRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchTagNameForm

Fast patch a tag name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchTagNameFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchTagNameFormRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'ex';
    $request->tagId = 153627;

    $response = $sdk->tags->tagsPatchTagNameForm($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchTagNameJson

Fast patch a tag name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchTagNameJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreRequestsGenericTextPatch;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchTagNameJsonRequest();
    $request->apiCoreRequestsGenericTextPatch = new ApiCoreRequestsGenericTextPatch();
    $request->apiCoreRequestsGenericTextPatch->text = 'sit';
    $request->tagId = 425508;

    $response = $sdk->tags->tagsPatchTagNameJson($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPatchTagNameRaw

Fast patch a tag name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagsPatchTagNameRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagsPatchTagNameRawRequest();
    $request->requestBody = 'nostrum';
    $request->tagId = 906172;

    $response = $sdk->tags->tagsPatchTagNameRaw($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagsPut

Create a tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ApiCoreDtoTagsTag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApiCoreDtoTagsTag();
    $request->datapoints = [
        8511,
        279068,
        968865,
    ];
    $request->groups = [
        690894,
    ];
    $request->id = 115703;
    $request->name = 'Violet Greenfelder';

    $response = $sdk->tags->tagsPut($request);

    if ($response->apiCoreResponsesEntityUriSystemInt64 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTagsTagId

Retrieve a tag

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTagsTagIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTagsTagIdRequest();
    $request->tagId = 671957;

    $response = $sdk->tags->getTagsTagId($request);

    if ($response->apiCoreDtoTagsTag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
