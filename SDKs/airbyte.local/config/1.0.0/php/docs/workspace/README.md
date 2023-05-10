# workspace

## Overview

Workspace related resources.

### Available Operations

* [createWorkspace](#createworkspace) - Creates a workspace
* [deleteWorkspace](#deleteworkspace) - Deletes a workspace
* [getWorkspace](#getworkspace) - Find workspace by ID
* [getWorkspaceByConnectionId](#getworkspacebyconnectionid) - Find workspace by connection id
* [getWorkspaceBySlug](#getworkspacebyslug) - Find workspace by slug
* [listWorkspaces](#listworkspaces) - List all workspaces registered in the current Airbyte deployment
* [updateWorkspace](#updateworkspace) - Update workspace state
* [updateWorkspaceFeedback](#updateworkspacefeedback) - Update workspace feedback state
* [updateWorkspaceName](#updateworkspacename) - Update workspace name

## createWorkspace

Creates a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceCreate;
use \OpenAPI\OpenAPI\Models\Shared\GeographyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlackNotificationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WebhookConfigWrite;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceCreate();
    $request->anonymousDataCollection = false;
    $request->defaultGeography = GeographyEnum::AUTO;
    $request->displaySetupWizard = false;
    $request->email = 'Clair.Leannon72@hotmail.com';
    $request->name = 'Dr. Emilio McDermott';
    $request->news = false;
    $request->notifications = [
        new Notification(),
    ];
    $request->securityUpdates = false;
    $request->webhookConfigs = [
        new WebhookConfigWrite(),
        new WebhookConfigWrite(),
    ];

    $response = $sdk->workspace->createWorkspace($request);

    if ($response->workspaceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkspace

Deletes a workspace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceIdRequestBody();
    $request->workspaceId = 'ef890a54-b475-4f16-b56d-385a3c4ac631';

    $response = $sdk->workspace->deleteWorkspace($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspace

Find workspace by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceIdRequestBody();
    $request->workspaceId = 'b99e26ce-d8f9-4fdb-9410-f63bbf817837';

    $response = $sdk->workspace->getWorkspace($request);

    if ($response->workspaceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceByConnectionId

Find workspace by connection id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConnectionIdRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectionIdRequestBody();
    $request->connectionId = 'b01afdd7-8862-4418-9eb4-4873f5033f19';

    $response = $sdk->workspace->getWorkspaceByConnectionId($request);

    if ($response->workspaceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWorkspaceBySlug

Find workspace by slug

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SlugRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SlugRequestBody();
    $request->slug = 'possimus';

    $response = $sdk->workspace->getWorkspaceBySlug($request);

    if ($response->workspaceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkspaces

List all workspaces registered in the current Airbyte deployment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->workspace->listWorkspaces();

    if ($response->workspaceReadList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspace

Update workspace state

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceUpdate;
use \OpenAPI\OpenAPI\Models\Shared\GeographyEnum;
use \OpenAPI\OpenAPI\Models\Shared\Notification;
use \OpenAPI\OpenAPI\Models\Shared\NotificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SlackNotificationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\WebhookConfigWrite;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceUpdate();
    $request->anonymousDataCollection = false;
    $request->defaultGeography = GeographyEnum::EU;
    $request->displaySetupWizard = false;
    $request->email = 'Ayden_Cronin@hotmail.com';
    $request->initialSetupComplete = false;
    $request->news = false;
    $request->notifications = [
        new Notification(),
        new Notification(),
        new Notification(),
        new Notification(),
    ];
    $request->securityUpdates = false;
    $request->webhookConfigs = [
        new WebhookConfigWrite(),
        new WebhookConfigWrite(),
    ];
    $request->workspaceId = '152eab9c-d7e5-4224-a6a0-e123b7847ec5';

    $response = $sdk->workspace->updateWorkspace($request);

    if ($response->workspaceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspaceFeedback

Update workspace feedback state

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceGiveFeedback;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceGiveFeedback();
    $request->workspaceId = '9e1f67f3-c4cc-4e4b-ad76-96ff3c574750';

    $response = $sdk->workspace->updateWorkspaceFeedback($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWorkspaceName

Update workspace name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\WorkspaceUpdateName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WorkspaceUpdateName();
    $request->name = 'Wendy Hessel';
    $request->workspaceId = '44f51f8b-084c-4319-be19-3a245467f948';

    $response = $sdk->workspace->updateWorkspaceName($request);

    if ($response->workspaceRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
