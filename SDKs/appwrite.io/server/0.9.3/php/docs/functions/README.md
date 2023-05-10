# functions

## Overview

The Functions Service allows you view, create and manage your Cloud Functions.

### Available Operations

* [functionsCreate](#functionscreate) - Create Function
* [functionsCreateExecution](#functionscreateexecution) - Create Execution
* [functionsCreateTag](#functionscreatetag) - Create Tag
* [functionsDelete](#functionsdelete) - Delete Function
* [functionsDeleteTag](#functionsdeletetag) - Delete Tag
* [functionsGet](#functionsget) - Get Function
* [functionsGetExecution](#functionsgetexecution) - Get Execution
* [functionsGetTag](#functionsgettag) - Get Tag
* [functionsList](#functionslist) - List Functions
* [functionsListExecutions](#functionslistexecutions) - List Executions
* [functionsListTags](#functionslisttags) - List Tags
* [functionsUpdate](#functionsupdate) - Update Function
* [functionsUpdateTag](#functionsupdatetag) - Update Function Tag

## functionsCreate

Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsCreateRequestBody();
    $request->events = [
        'cum',
        'perferendis',
    ];
    $request->execute = [
        'reprehenderit',
    ];
    $request->name = 'Shawna Carter';
    $request->runtime = 'iusto';
    $request->schedule = 'dicta';
    $request->timeout = 688661;
    $request->vars = [
        'accusamus' => 'commodi',
        'repudiandae' => 'quae',
    ];

    $requestSecurity = new FunctionsCreateSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsCreate($request, $requestSecurity);

    if ($response->function !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsCreateExecution

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateExecutionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsCreateExecutionRequest();
    $request->requestBody = new FunctionsCreateExecutionRequestBody();
    $request->requestBody->data = 'ipsum';
    $request->functionId = 'quidem';

    $requestSecurity = new FunctionsCreateExecutionSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsCreateExecution($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsCreateTag

Create a new function code tag. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's tag to use your new tag UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).

Use the "command" param to set the entry point used to execute your code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsCreateTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsCreateTagRequest();
    $request->requestBody = new FunctionsCreateTagRequestBody();
    $request->requestBody->code = 'molestias';
    $request->requestBody->command = 'excepturi';
    $request->functionId = 'pariatur';

    $requestSecurity = new FunctionsCreateTagSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsCreateTag($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsDelete

Delete a function by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsDeleteRequest();
    $request->functionId = 'modi';

    $requestSecurity = new FunctionsDeleteSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsDeleteTag

Delete a code tag by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsDeleteTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsDeleteTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsDeleteTagRequest();
    $request->functionId = 'praesentium';
    $request->tagId = 'rem';

    $requestSecurity = new FunctionsDeleteTagSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsDeleteTag($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsGet

Get a function by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsGetRequest();
    $request->functionId = 'voluptates';

    $requestSecurity = new FunctionsGetSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsGet($request, $requestSecurity);

    if ($response->function !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsGetExecution

Get a function execution log by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetExecutionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsGetExecutionRequest();
    $request->executionId = 'quasi';
    $request->functionId = 'repudiandae';

    $requestSecurity = new FunctionsGetExecutionSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsGetExecution($request, $requestSecurity);

    if ($response->execution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsGetTag

Get a code tag by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsGetTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsGetTagRequest();
    $request->functionId = 'sint';
    $request->tagId = 'veritatis';

    $requestSecurity = new FunctionsGetTagSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsGetTag($request, $requestSecurity);

    if ($response->tag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsList

Get a list of all the project's functions. You can use the query params to filter your results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsListRequest();
    $request->limit = 929297;
    $request->offset = 277718;
    $request->orderType = 'enim';
    $request->search = 'consequatur';

    $requestSecurity = new FunctionsListSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsList($request, $requestSecurity);

    if ($response->functionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsListExecutions

Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListExecutionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsListExecutionsRequest();
    $request->functionId = 'est';
    $request->limit = 842342;
    $request->offset = 131797;
    $request->orderType = 'deserunt';
    $request->search = 'distinctio';

    $requestSecurity = new FunctionsListExecutionsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsListExecutions($request, $requestSecurity);

    if ($response->executionList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsListTags

Get a list of all the project's code tags. You can use the query params to filter your results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListTagsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsListTagsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsListTagsRequest();
    $request->functionId = 'quibusdam';
    $request->limit = 289406;
    $request->offset = 264730;
    $request->orderType = 'qui';
    $request->search = 'aliquid';

    $requestSecurity = new FunctionsListTagsSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsListTags($request, $requestSecurity);

    if ($response->tagList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsUpdate

Update function by its unique ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsUpdateRequest();
    $request->requestBody = new FunctionsUpdateRequestBody();
    $request->requestBody->events = [
        'quos',
        'perferendis',
        'magni',
    ];
    $request->requestBody->execute = [
        'ipsam',
        'alias',
        'fugit',
        'dolorum',
    ];
    $request->requestBody->name = 'Eddie Prosacco';
    $request->requestBody->schedule = 'delectus';
    $request->requestBody->timeout = 433288;
    $request->requestBody->vars = [
        'eligendi' => 'sint',
    ];
    $request->functionId = 'aliquid';

    $requestSecurity = new FunctionsUpdateSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsUpdate($request, $requestSecurity);

    if ($response->function !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## functionsUpdateTag

Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsUpdateTagRequest;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsUpdateTagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FunctionsUpdateTagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FunctionsUpdateTagRequest();
    $request->requestBody = new FunctionsUpdateTagRequestBody();
    $request->requestBody->tag = 'provident';
    $request->functionId = 'necessitatibus';

    $requestSecurity = new FunctionsUpdateTagSecurity();
    $requestSecurity->key = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->functions->functionsUpdateTag($request, $requestSecurity);

    if ($response->function !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
