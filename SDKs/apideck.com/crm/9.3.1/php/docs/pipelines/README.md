# pipelines

### Available Operations

* [pipelinesAdd](#pipelinesadd) - Create pipeline
* [pipelinesAll](#pipelinesall) - List pipelines
* [pipelinesDelete](#pipelinesdelete) - Delete pipeline
* [pipelinesOne](#pipelinesone) - Get pipeline
* [pipelinesUpdate](#pipelinesupdate) - Update pipeline

## pipelinesAdd

Create pipeline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\PipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PipelineStagesInput;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PipelinesAddRequest();
    $request->pipelineInput = new PipelineInput();
    $request->pipelineInput->active = false;
    $request->pipelineInput->archived = false;
    $request->pipelineInput->currency = CurrencyEnum::USD;
    $request->pipelineInput->displayOrder = 1;
    $request->pipelineInput->id = 'default';
    $request->pipelineInput->name = 'Sales Pipeline';
    $request->pipelineInput->stages = [
        new PipelineStagesInput(),
        new PipelineStagesInput(),
        new PipelineStagesInput(),
    ];
    $request->pipelineInput->winProbabilityEnabled = true;
    $request->raw = false;
    $request->xApideckAppId = 'provident';
    $request->xApideckConsumerId = 'a';
    $request->xApideckServiceId = 'nulla';

    $requestSecurity = new PipelinesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pipelines->pipelinesAdd($request, $requestSecurity);

    if ($response->createPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pipelinesAll

List pipelines

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PipelinesAllRequest();
    $request->cursor = 'quas';
    $request->fields = 'esse';
    $request->limit = 97468;
    $request->raw = false;
    $request->xApideckAppId = 'a';
    $request->xApideckConsumerId = 'error';
    $request->xApideckServiceId = 'sint';

    $requestSecurity = new PipelinesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pipelines->pipelinesAll($request, $requestSecurity);

    if ($response->getPipelinesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pipelinesDelete

Delete pipeline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PipelinesDeleteRequest();
    $request->id = 'dd2efd12-1aa6-4f1e-a74b-db04f1575608';
    $request->raw = false;
    $request->xApideckAppId = 'qui';
    $request->xApideckConsumerId = 'quibusdam';
    $request->xApideckServiceId = 'ex';

    $requestSecurity = new PipelinesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pipelines->pipelinesDelete($request, $requestSecurity);

    if ($response->deletePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pipelinesOne

Get pipeline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PipelinesOneRequest();
    $request->fields = 'deleniti';
    $request->id = 'ea19f1d1-7051-4339-9080-86a1840394c2';
    $request->raw = false;
    $request->xApideckAppId = 'voluptas';
    $request->xApideckConsumerId = 'aut';
    $request->xApideckServiceId = 'dignissimos';

    $requestSecurity = new PipelinesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pipelines->pipelinesOne($request, $requestSecurity);

    if ($response->getPipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## pipelinesUpdate

Update pipeline

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\PipelineInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\PipelineStagesInput;
use \OpenAPI\OpenAPI\Models\Operations\PipelinesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PipelinesUpdateRequest();
    $request->pipelineInput = new PipelineInput();
    $request->pipelineInput->active = false;
    $request->pipelineInput->archived = false;
    $request->pipelineInput->currency = CurrencyEnum::USD;
    $request->pipelineInput->displayOrder = 1;
    $request->pipelineInput->id = 'default';
    $request->pipelineInput->name = 'Sales Pipeline';
    $request->pipelineInput->stages = [
        new PipelineStagesInput(),
    ];
    $request->pipelineInput->winProbabilityEnabled = true;
    $request->id = 'f93f5f06-42da-4c7a-b515-cc413aa63aae';
    $request->raw = false;
    $request->xApideckAppId = 'totam';
    $request->xApideckConsumerId = 'fugiat';
    $request->xApideckServiceId = 'vel';

    $requestSecurity = new PipelinesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pipelines->pipelinesUpdate($request, $requestSecurity);

    if ($response->updatePipelineResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
