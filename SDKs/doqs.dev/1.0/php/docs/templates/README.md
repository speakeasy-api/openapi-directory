# templates

### Available Operations

* [create](#create) - Create
* [deleteTemplatesIdDelete](#deletetemplatesiddelete) - Delete 
* [fill](#fill) - Fill
* [get](#get) - Get Template
* [getFileTemplatesIdFileGet](#getfiletemplatesidfileget) - Get File
* [list](#list) - List 
* [update](#update) - Update

## create

Create

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\BodyCreate;
use \OpenAPI\OpenAPI\Models\Shared\BodyCreateFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BodyCreate();
    $request->file = new BodyCreateFile();
    $request->file->file = 'excepturi';
    $request->file->content = 'ullam';

    $response = $sdk->templates->create($request);

    if ($response->responseOkTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTemplatesIdDelete

Delete 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTemplatesIdDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTemplatesIdDeleteRequest();
    $request->id = '9890afa5-63e2-4516-be4c-8b711e5b7fd2';

    $response = $sdk->templates->deleteTemplatesIdDelete($request);

    if ($response->responseOkNoneType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fill

Fill

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\FillRequest;
use \OpenAPI\OpenAPI\Models\Shared\FillTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FillRequest();
    $request->fillTemplateRequest = new FillTemplateRequest();
    $request->fillTemplateRequest->data = [
        'pariatur' => 'accusantium',
        'consequuntur' => 'praesentium',
        'natus' => 'magni',
        'sunt' => 'quo',
    ];
    $request->id = 'ddc69260-1fb5-476b-8d5f-0d30c5fbb258';

    $response = $sdk->templates->fill($request);

    if ($response->fill200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## get

Get Template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRequest();
    $request->id = '7053202c-73d5-4fe9-b90c-28909b3fe49a';

    $response = $sdk->templates->get($request);

    if ($response->responseOkTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFileTemplatesIdFileGet

Get File

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFileTemplatesIdFileGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFileTemplatesIdFileGetRequest();
    $request->id = '8d9cbf48-6333-423f-9b77-f3a4100674eb';

    $response = $sdk->templates->getFileTemplatesIdFileGet($request);

    if ($response->responseOkHttpUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## list

List 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListRequest();
    $request->limit = 976405;
    $request->offset = 377752;

    $response = $sdk->templates->list($request);

    if ($response->responseOkListAppsApiRoutesTemplatesTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## update

Update

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateRequest();
    $request->updateTemplateRequest = new UpdateTemplateRequest();
    $request->updateTemplateRequest->fields = [
        new DateField(),
        new ImageField(),
        new DateField(),
    ];
    $request->updateTemplateRequest->name = 'Stephen Roberts';
    $request->id = '7a89ebf7-37ae-4420-bce5-e6a95d8a0d44';

    $response = $sdk->templates->update($request);

    if ($response->responseOkTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
