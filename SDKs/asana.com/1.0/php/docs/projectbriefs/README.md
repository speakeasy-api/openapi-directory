# projectBriefs

## Overview

A project brief object represents a rich text document that describes a project.

Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see [this post](https://forum.asana.com/t/project-brief-api-now-available-as-a-preview/150885) in the developer forum.

### Available Operations

* [createProjectBrief](#createprojectbrief) - Create a project brief
* [deleteProjectBrief](#deleteprojectbrief) - Delete a project brief
* [getProjectBrief](#getprojectbrief) - Get a project brief
* [updateProjectBrief](#updateprojectbrief) - Update a project brief

## createProjectBrief

Creates a new project brief.

Returns the full record of the newly created project brief.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectBriefRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectBriefRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectBriefRequestInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectBriefRequest();
    $request->requestBody = new CreateProjectBriefRequestBodyInput();
    $request->requestBody->data = new ProjectBriefRequestInput();
    $request->requestBody->data->htmlText = '<body>This is a <strong>project brief</strong>.</body>';
    $request->requestBody->data->text = 'This is a project brief.';
    $request->requestBody->data->title = 'Stuff to buy — Project Brief';
    $request->optFields = [
        'consequuntur',
    ];
    $request->optPretty = false;
    $request->projectGid = 'praesentium';

    $response = $sdk->projectBriefs->createProjectBrief($request);

    if ($response->createProjectBrief201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProjectBrief

Deletes a specific, existing project brief.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectBriefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectBriefRequest();
    $request->optFields = [
        'magni',
        'sunt',
        'quo',
    ];
    $request->optPretty = false;
    $request->projectBriefGid = 'illum';

    $response = $sdk->projectBriefs->deleteProjectBrief($request);

    if ($response->deleteProjectBrief200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectBrief

Get the full record for a project brief.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectBriefRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectBriefRequest();
    $request->optFields = [
        'maxime',
        'ea',
        'excepturi',
        'odit',
    ];
    $request->optPretty = false;
    $request->projectBriefGid = 'ea';

    $response = $sdk->projectBriefs->getProjectBrief($request);

    if ($response->getProjectBrief200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectBrief

An existing project brief can be updated by making a PUT request on the URL for
that project brief. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated project brief record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectBriefRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectBriefRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectBriefRequestInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectBriefRequest();
    $request->requestBody = new UpdateProjectBriefRequestBodyInput();
    $request->requestBody->data = new ProjectBriefRequestInput();
    $request->requestBody->data->htmlText = '<body>This is a <strong>project brief</strong>.</body>';
    $request->requestBody->data->text = 'This is a project brief.';
    $request->requestBody->data->title = 'Stuff to buy — Project Brief';
    $request->optFields = [
        'ab',
    ];
    $request->optPretty = false;
    $request->projectBriefGid = 'maiores';

    $response = $sdk->projectBriefs->updateProjectBrief($request);

    if ($response->updateProjectBrief200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
