# projects

## Overview

A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.

Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.

Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.

**Note:** You can use certain project endpoints to operate on [user task lists](/docs/user-task-lists) ([My Tasks](https://asana.com/guide/help/fundamentals/my-tasks)) by substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform operations on the custom fields of a [user task list](/docs/user-task-lists) by using the following projects endpoints: [Add a custom field to a project](/docs/add-a-custom-field-to-a-project), [Remove a custom field from a project](/docs/remove-a-custom-field-from-a-project) and [Get a project's custom fields](/docs/get-a-projects-custom-fields)

### Available Operations

* [addCustomFieldSettingForProject](#addcustomfieldsettingforproject) - Add a custom field to a project
* [addFollowersForProject](#addfollowersforproject) - Add followers to a project
* [addMembersForProject](#addmembersforproject) - Add users to a project
* [createProject](#createproject) - Create a project
* [createProjectForTeam](#createprojectforteam) - Create a project in a team
* [createProjectForWorkspace](#createprojectforworkspace) - Create a project in a workspace
* [deleteProject](#deleteproject) - Delete a project
* [duplicateProject](#duplicateproject) - Duplicate a project
* [getProject](#getproject) - Get a project
* [getProjects](#getprojects) - Get multiple projects
* [getProjectsForTask](#getprojectsfortask) - Get projects a task is in
* [getProjectsForTeam](#getprojectsforteam) - Get a team's projects
* [getProjectsForWorkspace](#getprojectsforworkspace) - Get all projects in a workspace
* [getTaskCountsForProject](#gettaskcountsforproject) - Get task count of a project
* [projectSaveAsTemplate](#projectsaveastemplate) - Create a project template from a project
* [removeCustomFieldSettingForProject](#removecustomfieldsettingforproject) - Remove a custom field from a project
* [removeFollowersForProject](#removefollowersforproject) - Remove followers from a project
* [removeMembersForProject](#removemembersforproject) - Remove users from a project
* [updateProject](#updateproject) - Update a project

## addCustomFieldSettingForProject

Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomFieldSettingForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomFieldSettingForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AddCustomFieldSettingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCustomFieldSettingForProjectRequest();
    $request->requestBody = new AddCustomFieldSettingForProjectRequestBody();
    $request->requestBody->data = new AddCustomFieldSettingRequest();
    $request->requestBody->data->customField = '14916';
    $request->requestBody->data->insertAfter = '1331';
    $request->requestBody->data->insertBefore = '1331';
    $request->requestBody->data->isImportant = true;
    $request->optPretty = false;
    $request->projectGid = 'quos';

    $response = $sdk->projects->addCustomFieldSettingForProject($request);

    if ($response->addCustomFieldSettingForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addFollowersForProject

Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
Returns the updated project record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFollowersForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddFollowersForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AddFollowersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFollowersForProjectRequest();
    $request->requestBody = new AddFollowersForProjectRequestBody();
    $request->requestBody->data = new AddFollowersRequest();
    $request->requestBody->data->followers = '521621,621373';
    $request->optFields = [
        'dolorem',
        'dolorem',
    ];
    $request->optPretty = false;
    $request->projectGid = 'dolor';

    $response = $sdk->projects->addFollowersForProject($request);

    if ($response->addFollowersForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addMembersForProject

Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
Returns the updated project record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddMembersForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddMembersForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AddMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddMembersForProjectRequest();
    $request->requestBody = new AddMembersForProjectRequestBody();
    $request->requestBody->data = new AddMembersRequest();
    $request->requestBody->data->members = '521621,621373';
    $request->optFields = [
        'ipsum',
    ];
    $request->optPretty = false;
    $request->projectGid = 'hic';

    $response = $sdk->projects->addMembersForProject($request);

    if ($response->addMembersForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

Create a new project in a workspace or team.

Every project is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the `workspace` parameter regardless of whether or not it is an
organization.

If the workspace for your project is an organization, you must also
supply a `team` to share the project with.

Returns the full record of the newly created project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\UserCompactInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusUpdateInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestDefaultViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestWorkspaceInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->requestBody = new CreateProjectRequestBodyInput();
    $request->requestBody->data = new ProjectRequestInput();
    $request->requestBody->data->archived = false;
    $request->requestBody->data->color = ProjectRequestColorEnum::LIGHT_GREEN;
    $request->requestBody->data->currentStatus = new ProjectRequestCurrentStatusInput();
    $request->requestBody->data->currentStatus->author = new UserCompactInput();
    $request->requestBody->data->currentStatus->author->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->color = ProjectRequestCurrentStatusColorEnum::RED;
    $request->requestBody->data->currentStatus->createdBy = new UserCompactInput();
    $request->requestBody->data->currentStatus->createdBy->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->htmlText = '<body>The project <strong>is</strong> moving forward according to plan...</body>';
    $request->requestBody->data->currentStatus->text = 'The project is moving forward according to plan...';
    $request->requestBody->data->currentStatus->title = 'Status Update - Jun 15';
    $request->requestBody->data->currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput();
    $request->requestBody->data->currentStatusUpdate->title = 'Status Update - Jun 15';
    $request->requestBody->data->customFields = [
        'voluptate' => 'dignissimos',
        'reiciendis' => 'amet',
        'dolorum' => 'numquam',
    ];
    $request->requestBody->data->defaultView = ProjectRequestDefaultViewEnum::CALENDAR;
    $request->requestBody->data->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->dueOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->followers = '12345,23456';
    $request->requestBody->data->htmlNotes = '<body>These are things we need to purchase.</body>';
    $request->requestBody->data->isTemplate = false;
    $request->requestBody->data->name = 'Stuff to buy';
    $request->requestBody->data->notes = 'These are things we need to purchase.';
    $request->requestBody->data->owner = '12345';
    $request->requestBody->data->public = false;
    $request->requestBody->data->startOn = DateTime::createFromFormat('Y-m-d', '2019-09-14');
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->workspace = new ProjectRequestWorkspaceInput();
    $request->requestBody->data->workspace->name = 'My Company Workspace';
    $request->optFields = [
        'ipsa',
    ];
    $request->optPretty = false;

    $response = $sdk->projects->createProject($request);

    if ($response->createProject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProjectForTeam

Creates a project shared with the given team.

Returns the full record of the newly created project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectForTeamRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectForTeamRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\UserCompactInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusUpdateInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestDefaultViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestWorkspaceInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectForTeamRequest();
    $request->requestBody = new CreateProjectForTeamRequestBodyInput();
    $request->requestBody->data = new ProjectRequestInput();
    $request->requestBody->data->archived = false;
    $request->requestBody->data->color = ProjectRequestColorEnum::LIGHT_GREEN;
    $request->requestBody->data->currentStatus = new ProjectRequestCurrentStatusInput();
    $request->requestBody->data->currentStatus->author = new UserCompactInput();
    $request->requestBody->data->currentStatus->author->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->color = ProjectRequestCurrentStatusColorEnum::GREEN;
    $request->requestBody->data->currentStatus->createdBy = new UserCompactInput();
    $request->requestBody->data->currentStatus->createdBy->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->htmlText = '<body>The project <strong>is</strong> moving forward according to plan...</body>';
    $request->requestBody->data->currentStatus->text = 'The project is moving forward according to plan...';
    $request->requestBody->data->currentStatus->title = 'Status Update - Jun 15';
    $request->requestBody->data->currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput();
    $request->requestBody->data->currentStatusUpdate->title = 'Status Update - Jun 15';
    $request->requestBody->data->customFields = [
        'odio' => 'quaerat',
        'accusamus' => 'quidem',
    ];
    $request->requestBody->data->defaultView = ProjectRequestDefaultViewEnum::CALENDAR;
    $request->requestBody->data->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->dueOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->followers = '12345,23456';
    $request->requestBody->data->htmlNotes = '<body>These are things we need to purchase.</body>';
    $request->requestBody->data->isTemplate = false;
    $request->requestBody->data->name = 'Stuff to buy';
    $request->requestBody->data->notes = 'These are things we need to purchase.';
    $request->requestBody->data->owner = '12345';
    $request->requestBody->data->public = false;
    $request->requestBody->data->startOn = DateTime::createFromFormat('Y-m-d', '2019-09-14');
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->workspace = new ProjectRequestWorkspaceInput();
    $request->requestBody->data->workspace->name = 'My Company Workspace';
    $request->optFields = [
        'voluptas',
        'natus',
        'eos',
        'atque',
    ];
    $request->optPretty = false;
    $request->teamGid = 'sit';

    $response = $sdk->projects->createProjectForTeam($request);

    if ($response->createProjectForTeam201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProjectForWorkspace

Returns the compact project records for all projects in the workspace.

If the workspace for your project is an organization, you must also
supply a team to share the project with.

Returns the full record of the newly created project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectForWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectForWorkspaceRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\UserCompactInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusUpdateInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestDefaultViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestWorkspaceInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectForWorkspaceRequest();
    $request->requestBody = new CreateProjectForWorkspaceRequestBodyInput();
    $request->requestBody->data = new ProjectRequestInput();
    $request->requestBody->data->archived = false;
    $request->requestBody->data->color = ProjectRequestColorEnum::LIGHT_GREEN;
    $request->requestBody->data->currentStatus = new ProjectRequestCurrentStatusInput();
    $request->requestBody->data->currentStatus->author = new UserCompactInput();
    $request->requestBody->data->currentStatus->author->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->color = ProjectRequestCurrentStatusColorEnum::BLUE;
    $request->requestBody->data->currentStatus->createdBy = new UserCompactInput();
    $request->requestBody->data->currentStatus->createdBy->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->htmlText = '<body>The project <strong>is</strong> moving forward according to plan...</body>';
    $request->requestBody->data->currentStatus->text = 'The project is moving forward according to plan...';
    $request->requestBody->data->currentStatus->title = 'Status Update - Jun 15';
    $request->requestBody->data->currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput();
    $request->requestBody->data->currentStatusUpdate->title = 'Status Update - Jun 15';
    $request->requestBody->data->customFields = [
        'soluta' => 'dolorum',
    ];
    $request->requestBody->data->defaultView = ProjectRequestDefaultViewEnum::CALENDAR;
    $request->requestBody->data->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->dueOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->followers = '12345,23456';
    $request->requestBody->data->htmlNotes = '<body>These are things we need to purchase.</body>';
    $request->requestBody->data->isTemplate = false;
    $request->requestBody->data->name = 'Stuff to buy';
    $request->requestBody->data->notes = 'These are things we need to purchase.';
    $request->requestBody->data->owner = '12345';
    $request->requestBody->data->public = false;
    $request->requestBody->data->startOn = DateTime::createFromFormat('Y-m-d', '2019-09-14');
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->workspace = new ProjectRequestWorkspaceInput();
    $request->requestBody->data->workspace->name = 'My Company Workspace';
    $request->optFields = [
        'voluptate',
        'dolorum',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'deleniti';

    $response = $sdk->projects->createProjectForWorkspace($request);

    if ($response->createProjectForWorkspace201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

A specific, existing project can be deleted by making a DELETE request on
the URL for that project.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->optFields = [
        'necessitatibus',
        'distinctio',
        'asperiores',
    ];
    $request->optPretty = false;
    $request->projectGid = 'nihil';

    $response = $sdk->projects->deleteProject($request);

    if ($response->deleteProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## duplicateProject

Creates and returns a job that will asynchronously handle the duplication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DuplicateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DuplicateProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDuplicateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDuplicateRequestIncludeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectDuplicateRequestScheduleDates;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DuplicateProjectRequest();
    $request->requestBody = new DuplicateProjectRequestBody();
    $request->requestBody->data = new ProjectDuplicateRequest();
    $request->requestBody->data->include = ProjectDuplicateRequestIncludeEnum::FORMS;
    $request->requestBody->data->name = 'New Project Name';
    $request->requestBody->data->scheduleDates = new ProjectDuplicateRequestScheduleDates();
    $request->requestBody->data->scheduleDates->dueOn = '2019-05-21';
    $request->requestBody->data->scheduleDates->shouldSkipWeekends = true;
    $request->requestBody->data->scheduleDates->startOn = '2019-05-21';
    $request->requestBody->data->team = '12345';
    $request->optFields = [
        'id',
        'saepe',
    ];
    $request->optPretty = false;
    $request->projectGid = 'eius';

    $response = $sdk->projects->duplicateProject($request);

    if ($response->duplicateProject201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProject

Returns the complete project record for a single project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectRequest();
    $request->optFields = [
        'perferendis',
    ];
    $request->optPretty = false;
    $request->projectGid = 'amet';

    $response = $sdk->projects->getProject($request);

    if ($response->getProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjects

Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
*Note: This endpoint may timeout for large domains. Try filtering by team!*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsRequest();
    $request->archived = false;
    $request->limit = 758379;
    $request->offset = 'accusamus';
    $request->optFields = [
        'saepe',
        'suscipit',
    ];
    $request->optPretty = false;
    $request->team = 'deserunt';
    $request->workspace = 'provident';

    $response = $sdk->projects->getProjects($request);

    if ($response->getProjects200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectsForTask

Returns a compact representation of all of the projects the task is in.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsForTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsForTaskRequest();
    $request->limit = 324683;
    $request->offset = 'repellendus';
    $request->optFields = [
        'similique',
        'alias',
        'at',
    ];
    $request->optPretty = false;
    $request->taskGid = 'quaerat';

    $response = $sdk->projects->getProjectsForTask($request);

    if ($response->getProjectsForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectsForTeam

Returns the compact project records for all projects in the team.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsForTeamRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsForTeamRequest();
    $request->archived = false;
    $request->limit = 273542;
    $request->offset = 'vel';
    $request->optFields = [
        'officiis',
        'qui',
        'dolorum',
        'a',
    ];
    $request->optPretty = false;
    $request->teamGid = 'esse';

    $response = $sdk->projects->getProjectsForTeam($request);

    if ($response->getProjectsForTeam200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProjectsForWorkspace

Returns the compact project records for all projects in the workspace.
*Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProjectsForWorkspaceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProjectsForWorkspaceRequest();
    $request->archived = false;
    $request->limit = 687488;
    $request->offset = 'iusto';
    $request->optFields = [
        'quisquam',
    ];
    $request->optPretty = false;
    $request->workspaceGid = 'tenetur';

    $response = $sdk->projects->getProjectsForWorkspace($request);

    if ($response->getProjectsForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTaskCountsForProject

Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output-options) using `opt_fields` to get any information from this endpoint.

This endpoint has an additional [rate limit](/docs/standard-rate-limits) and each field counts especially high against our [cost limits](/docs/cost-limits).

Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskCountsForProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskCountsForProjectRequest();
    $request->limit = 229442;
    $request->offset = 'tempore';
    $request->optFields = [
        'numquam',
        'enim',
        'dolorem',
        'sapiente',
    ];
    $request->optPretty = false;
    $request->projectGid = 'totam';

    $response = $sdk->projects->getTaskCountsForProject($request);

    if ($response->getTaskCountsForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## projectSaveAsTemplate

Creates and returns a job that will asynchronously handle the project template creation. Note that
while the resulting project template can be accessed with the API, it won't be visible in the Asana
UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ProjectSaveAsTemplateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProjectSaveAsTemplateRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSaveAsTemplateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProjectSaveAsTemplateRequest();
    $request->requestBody = new ProjectSaveAsTemplateRequestBody();
    $request->requestBody->data = new ProjectSaveAsTemplateRequest();
    $request->requestBody->data->name = 'New Project Template';
    $request->requestBody->data->public = true;
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->workspace = '12345';
    $request->optFields = [
        'sit',
        'expedita',
    ];
    $request->optPretty = false;
    $request->projectGid = 'neque';

    $response = $sdk->projects->projectSaveAsTemplate($request);

    if ($response->projectSaveAsTemplate201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeCustomFieldSettingForProject

Removes a custom field setting from a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveCustomFieldSettingForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveCustomFieldSettingForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RemoveCustomFieldSettingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveCustomFieldSettingForProjectRequest();
    $request->requestBody = new RemoveCustomFieldSettingForProjectRequestBody();
    $request->requestBody->data = new RemoveCustomFieldSettingRequest();
    $request->requestBody->data->customField = '14916';
    $request->optPretty = false;
    $request->projectGid = 'sed';

    $response = $sdk->projects->removeCustomFieldSettingForProject($request);

    if ($response->removeCustomFieldSettingForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeFollowersForProject

Removes the specified list of users from following the project, this will not affect project membership status.
Returns the updated project record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFollowersForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFollowersForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RemoveFollowersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveFollowersForProjectRequest();
    $request->requestBody = new RemoveFollowersForProjectRequestBody();
    $request->requestBody->data = new RemoveFollowersRequest();
    $request->requestBody->data->followers = '521621,621373';
    $request->optFields = [
        'libero',
        'voluptas',
    ];
    $request->optPretty = false;
    $request->projectGid = 'deserunt';

    $response = $sdk->projects->removeFollowersForProject($request);

    if ($response->removeFollowersForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeMembersForProject

Removes the specified list of users from members of the project.
Returns the updated project record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveMembersForProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveMembersForProjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RemoveMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveMembersForProjectRequest();
    $request->requestBody = new RemoveMembersForProjectRequestBody();
    $request->requestBody->data = new RemoveMembersRequest();
    $request->requestBody->data->members = '521621,621373';
    $request->optFields = [
        'ipsum',
        'incidunt',
    ];
    $request->optPretty = false;
    $request->projectGid = 'qui';

    $response = $sdk->projects->removeMembersForProject($request);

    if ($response->removeMembersForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

A specific, existing project can be updated by making a PUT request on
the URL for that project. Only the fields provided in the `data` block
will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated project record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusInput;
use \OpenAPI\OpenAPI\Models\Shared\UserCompactInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusColorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestCurrentStatusUpdateInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestDefaultViewEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectRequestWorkspaceInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->requestBody = new UpdateProjectRequestBodyInput();
    $request->requestBody->data = new ProjectRequestInput();
    $request->requestBody->data->archived = false;
    $request->requestBody->data->color = ProjectRequestColorEnum::LIGHT_GREEN;
    $request->requestBody->data->currentStatus = new ProjectRequestCurrentStatusInput();
    $request->requestBody->data->currentStatus->author = new UserCompactInput();
    $request->requestBody->data->currentStatus->author->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->color = ProjectRequestCurrentStatusColorEnum::RED;
    $request->requestBody->data->currentStatus->createdBy = new UserCompactInput();
    $request->requestBody->data->currentStatus->createdBy->name = 'Greg Sanchez';
    $request->requestBody->data->currentStatus->htmlText = '<body>The project <strong>is</strong> moving forward according to plan...</body>';
    $request->requestBody->data->currentStatus->text = 'The project is moving forward according to plan...';
    $request->requestBody->data->currentStatus->title = 'Status Update - Jun 15';
    $request->requestBody->data->currentStatusUpdate = new ProjectRequestCurrentStatusUpdateInput();
    $request->requestBody->data->currentStatusUpdate->title = 'Status Update - Jun 15';
    $request->requestBody->data->customFields = [
        'pariatur' => 'soluta',
        'dicta' => 'laborum',
        'totam' => 'incidunt',
        'aspernatur' => 'dolores',
    ];
    $request->requestBody->data->defaultView = ProjectRequestDefaultViewEnum::CALENDAR;
    $request->requestBody->data->dueDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->dueOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-09-15');
    $request->requestBody->data->followers = '12345,23456';
    $request->requestBody->data->htmlNotes = '<body>These are things we need to purchase.</body>';
    $request->requestBody->data->isTemplate = false;
    $request->requestBody->data->name = 'Stuff to buy';
    $request->requestBody->data->notes = 'These are things we need to purchase.';
    $request->requestBody->data->owner = '12345';
    $request->requestBody->data->public = false;
    $request->requestBody->data->startOn = DateTime::createFromFormat('Y-m-d', '2019-09-14');
    $request->requestBody->data->team = '12345';
    $request->requestBody->data->workspace = new ProjectRequestWorkspaceInput();
    $request->requestBody->data->workspace->name = 'My Company Workspace';
    $request->optFields = [
        'facilis',
        'aliquid',
        'quam',
    ];
    $request->optPretty = false;
    $request->projectGid = 'molestias';

    $response = $sdk->projects->updateProject($request);

    if ($response->updateProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
