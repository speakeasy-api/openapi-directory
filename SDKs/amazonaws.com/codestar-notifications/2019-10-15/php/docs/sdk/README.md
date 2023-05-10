# SDK

## Overview

<p>This AWS CodeStar Notifications API Reference provides descriptions and usage examples of the operations and data types for the AWS CodeStar Notifications API. You can use the AWS CodeStar Notifications API to work with the following objects:</p> <p>Notification rules, by calling the following: </p> <ul> <li> <p> <a>CreateNotificationRule</a>, which creates a notification rule for a resource in your account. </p> </li> <li> <p> <a>DeleteNotificationRule</a>, which deletes a notification rule. </p> </li> <li> <p> <a>DescribeNotificationRule</a>, which provides information about a notification rule. </p> </li> <li> <p> <a>ListNotificationRules</a>, which lists the notification rules associated with your account. </p> </li> <li> <p> <a>UpdateNotificationRule</a>, which changes the name, events, or targets associated with a notification rule. </p> </li> <li> <p> <a>Subscribe</a>, which subscribes a target to a notification rule. </p> </li> <li> <p> <a>Unsubscribe</a>, which removes a target from a notification rule. </p> </li> </ul> <p>Targets, by calling the following: </p> <ul> <li> <p> <a>DeleteTarget</a>, which removes a notification rule target from a notification rule. </p> </li> <li> <p> <a>ListTargets</a>, which lists the targets associated with a notification rule. </p> </li> </ul> <p>Events, by calling the following: </p> <ul> <li> <p> <a>ListEventTypes</a>, which lists the event types you can include in a notification rule. </p> </li> </ul> <p>Tags, by calling the following: </p> <ul> <li> <p> <a>ListTagsForResource</a>, which lists the tags already associated with a notification rule in your account. </p> </li> <li> <p> <a>TagResource</a>, which associates a tag you provide with a notification rule in your account. </p> </li> <li> <p> <a>UntagResource</a>, which removes a tag from a notification rule in your account. </p> </li> </ul> <p> For information about how to use AWS CodeStar Notifications, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/what-is-dtconsole.html">Amazon Web Services Developer Tools Console User Guide</a>. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codestar-notifications/>
### Available Operations

* [createNotificationRule](#createnotificationrule) - Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.
* [deleteNotificationRule](#deletenotificationrule) - Deletes a notification rule for a resource.
* [deleteTarget](#deletetarget) - Deletes a specified target for notifications.
* [describeNotificationRule](#describenotificationrule) - Returns information about a specified notification rule.
* [listEventTypes](#listeventtypes) - Returns information about the event types available for configuring notifications.
* [listNotificationRules](#listnotificationrules) - Returns a list of the notification rules for an Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - Returns a list of the tags associated with a notification rule.
* [listTargets](#listtargets) - Returns a list of the notification rule targets for an Amazon Web Services account.
* [subscribe](#subscribe) - Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.
* [tagResource](#tagresource) - Associates a set of provided tags with a notification rule.
* [unsubscribe](#unsubscribe) - Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.
* [untagResource](#untagresource) - Removes the association between one or more provided tags and a notification rule.
* [updateNotificationRule](#updatenotificationrule) - <p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>

## createNotificationRule

Creates a notification rule for a resource. The rule specifies the events you want notifications about and the targets (such as Chatbot topics or Chatbot clients configured for Slack) where you want to receive them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequestBodyDetailTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateNotificationRuleRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Target;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNotificationRuleRequest();
    $request->requestBody = new CreateNotificationRuleRequestBody();
    $request->requestBody->clientRequestToken = 'excepturi';
    $request->requestBody->detailType = CreateNotificationRuleRequestBodyDetailTypeEnum::BASIC;
    $request->requestBody->eventTypeIds = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->requestBody->name = 'deserunt';
    $request->requestBody->resource = 'perferendis';
    $request->requestBody->status = CreateNotificationRuleRequestBodyStatusEnum::ENABLED;
    $request->requestBody->tags = [
        'sapiente' => 'quo',
        'odit' => 'at',
        'at' => 'maiores',
        'molestiae' => 'quod',
    ];
    $request->requestBody->targets = [
        new Target(),
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'porro';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->createNotificationRule($request);

    if ($response->createNotificationRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNotificationRule

Deletes a notification rule for a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNotificationRuleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNotificationRuleRequest();
    $request->requestBody = new DeleteNotificationRuleRequestBody();
    $request->requestBody->arn = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->deleteNotificationRule($request);

    if ($response->deleteNotificationRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTarget

Deletes a specified target for notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTargetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTargetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTargetRequest();
    $request->requestBody = new DeleteTargetRequestBody();
    $request->requestBody->forceUnsubscribeAll = false;
    $request->requestBody->targetAddress = 'molestiae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->deleteTarget($request);

    if ($response->deleteTargetResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeNotificationRule

Returns information about a specified notification rule.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotificationRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeNotificationRuleRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeNotificationRuleRequest();
    $request->requestBody = new DescribeNotificationRuleRequestBody();
    $request->requestBody->arn = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->describeNotificationRule($request);

    if ($response->describeNotificationRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listEventTypes

Returns information about the event types available for configuring notifications.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListEventTypesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListEventTypesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ListEventTypesFilter;
use \OpenAPI\OpenAPI\Models\Shared\ListEventTypesFilterNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListEventTypesRequest();
    $request->maxResults = 'laboriosam';
    $request->nextToken = 'hic';
    $request->requestBody = new ListEventTypesRequestBody();
    $request->requestBody->filters = [
        new ListEventTypesFilter(),
        new ListEventTypesFilter(),
        new ListEventTypesFilter(),
        new ListEventTypesFilter(),
    ];
    $request->requestBody->maxResults = 681820;
    $request->requestBody->nextToken = 'in';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->listEventTypes($request);

    if ($response->listEventTypesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNotificationRules

Returns a list of the notification rules for an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNotificationRulesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ListNotificationRulesFilter;
use \OpenAPI\OpenAPI\Models\Shared\ListNotificationRulesFilterNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNotificationRulesRequest();
    $request->maxResults = 'reiciendis';
    $request->nextToken = 'est';
    $request->requestBody = new ListNotificationRulesRequestBody();
    $request->requestBody->filters = [
        new ListNotificationRulesFilter(),
        new ListNotificationRulesFilter(),
        new ListNotificationRulesFilter(),
    ];
    $request->requestBody->maxResults = 670638;
    $request->requestBody->nextToken = 'dolores';
    $request->xAmzAlgorithm = 'dolorem';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'nemo';

    $response = $sdk->sdk->listNotificationRules($request);

    if ($response->listNotificationRulesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns a list of the tags associated with a notification rule.

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
    $request->requestBody->arn = 'minima';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'culpa';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'architecto';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTargets

Returns a list of the notification rule targets for an Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTargetsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetsFilter;
use \OpenAPI\OpenAPI\Models\Shared\ListTargetsFilterNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTargetsRequest();
    $request->maxResults = 'mollitia';
    $request->nextToken = 'dolorem';
    $request->requestBody = new ListTargetsRequestBody();
    $request->requestBody->filters = [
        new ListTargetsFilter(),
        new ListTargetsFilter(),
        new ListTargetsFilter(),
    ];
    $request->requestBody->maxResults = 161309;
    $request->requestBody->nextToken = 'repellat';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';

    $response = $sdk->sdk->listTargets($request);

    if ($response->listTargetsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribe

Creates an association between a notification rule and an Chatbot topic or Chatbot client so that the associated target can receive notifications when the events described in the rule are triggered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeRequest;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\SubscribeRequestBodyTarget;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SubscribeRequest();
    $request->requestBody = new SubscribeRequestBody();
    $request->requestBody->arn = 'error';
    $request->requestBody->clientRequestToken = 'quia';
    $request->requestBody->target = new SubscribeRequestBodyTarget();
    $request->requestBody->target->targetAddress = 'quis';
    $request->requestBody->target->targetType = 'vitae';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'animi';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'sequi';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->subscribe($request);

    if ($response->subscribeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Associates a set of provided tags with a notification rule.

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
    $request->requestBody->arn = 'ipsam';
    $request->requestBody->tags = [
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribe

Removes an association between a notification rule and an Chatbot topic so that subscribers to that topic stop receiving notifications when the events described in the rule are triggered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UnsubscribeRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnsubscribeRequest();
    $request->requestBody = new UnsubscribeRequestBody();
    $request->requestBody->arn = 'ipsa';
    $request->requestBody->targetAddress = 'omnis';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->unsubscribe($request);

    if ($response->unsubscribeResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the association between one or more provided tags and a notification rule.

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
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->resourceArn = 'accusamus';
    $request->tagKeys = [
        'repudiandae',
        'quae',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNotificationRule

<p>Updates a notification rule for a resource. You can change the events that trigger the notification rule, the status of the rule, and the targets that receive the notifications.</p> <note> <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationRuleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationRuleRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationRuleRequestBodyDetailTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNotificationRuleRequestBodyStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Target;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNotificationRuleRequest();
    $request->requestBody = new UpdateNotificationRuleRequestBody();
    $request->requestBody->arn = 'ipsum';
    $request->requestBody->detailType = UpdateNotificationRuleRequestBodyDetailTypeEnum::FULL;
    $request->requestBody->eventTypeIds = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->requestBody->name = 'praesentium';
    $request->requestBody->status = UpdateNotificationRuleRequestBodyStatusEnum::DISABLED;
    $request->requestBody->targets = [
        new Target(),
        new Target(),
        new Target(),
        new Target(),
    ];
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->updateNotificationRule($request);

    if ($response->updateNotificationRuleResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
