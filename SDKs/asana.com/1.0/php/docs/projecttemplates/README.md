# projectTemplates

## Overview

A project template is an object that allows new projects to be created
with a predefined setup, which may include tasks, sections, rules, etc.
It simplifies the process of running a workflow that involves a similar
set of work every time.


Project templates in organizations are shared with a single team. Currently, the
team of a project template cannot be changed via the API.

### Available Operations

* [getProjectTemplate](#getprojecttemplate) - Get a project template
* [getProjectTemplates](#getprojecttemplates) - Get multiple project templates
* [getProjectTemplatesForTeam](#getprojecttemplatesforteam) - Get a team's project templates
* [instantiateProject](#instantiateproject) - Instantiate a project from a project template

## getProjectTemplate

Returns the complete project template record for a single project template.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectTemplateRequest();
    $request->optFields = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->optPretty = false;
    $request->projectTemplateGid = 'voluptatem';

    $response = $sdk->projectTemplates->getProjectTemplate($request);

    if ($response->getProjectTemplate200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectTemplates

Returns the compact project template records for all project templates in the given team or workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectTemplatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectTemplatesRequest();
    $request->limit = 783645;
    $request->offset = 'consequuntur';
    $request->optFields = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->optPretty = false;
    $request->team = 'rerum';
    $request->workspace = 'adipisci';

    $response = $sdk->projectTemplates->getProjectTemplates($request);

    if ($response->getProjectTemplates200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectTemplatesForTeam

Returns the compact project template records for all project templates in the team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectTemplatesForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectTemplatesForTeamRequest();
    $request->limit = 992397;
    $request->offset = 'earum';
    $request->optFields = [
        'iste',
        'dolorum',
    ];
    $request->optPretty = false;
    $request->teamGid = 'deleniti';

    $response = $sdk->projectTemplates->getProjectTemplatesForTeam($request);

    if ($response->getProjectTemplatesForTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## instantiateProject

Creates and returns a job that will asynchronously handle the project instantiation.

To form this request, it is recommended to first make a request to [get a project template](/docs/get-a-project-template). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.

_Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/docs/workspace) parameter._

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InstantiateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\InstantiateProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ProjectTemplateInstantiateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DateVariableRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InstantiateProjectRequest();
    $request->requestBody = new InstantiateProjectRequestBody();
    $request->requestBody->data = new ProjectTemplateInstantiateProjectRequest();
    $request->requestBody->data->isStrict = true;
    $request->requestBody->data->name = 'New Project Name';
    $request->requestBody->data->public = true;
    $request->requestBody->data->requestedDates = [
        new DateVariableRequest(),
        new DateVariableRequest(),
        new DateVariableRequest(),
        new DateVariableRequest(),
    ];
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->workspace = '12345';
    $request->optFields = [
        'nobis',
        'libero',
        'delectus',
    ];
    $request->optPretty = false;
    $request->projectTemplateGid = 'quaerat';

    $response = $sdk->projectTemplates->instantiateProject($request);

    if ($response->instantiateProject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
