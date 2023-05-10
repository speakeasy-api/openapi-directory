# tasks

## Overview

The task is the basic object around which many operations in Asana are centered. In the Asana application, multiple tasks populate the middle pane according to some view parameters, and the set of selected tasks determines the more detailed information presented in the details pane.

Sections are unique in that they will be included in the `memberships` field of task objects returned in the API when the task is within a section. They can also be used to manipulate the ordering of a task within a project.

[Queries](/docs/get-multiple-tasks) return a [compact representation of each task object](/docs/task-compact). To retrieve *all* fields or *specific set* of the fields, use [field selectors](/docs/input-output-options) to manipulate what data is included in a response.

### Available Operations

* [addDependenciesForTask](#adddependenciesfortask) - Set dependencies for a task
* [addDependentsForTask](#adddependentsfortask) - Set dependents for a task
* [addFollowersForTask](#addfollowersfortask) - Add followers to a task
* [addProjectForTask](#addprojectfortask) - Add a project to a task
* [addTagForTask](#addtagfortask) - Add a tag to a task
* [createSubtaskForTask](#createsubtaskfortask) - Create a subtask
* [createTask](#createtask) - Create a task
* [deleteTask](#deletetask) - Delete a task
* [duplicateTask](#duplicatetask) - Duplicate a task
* [getDependenciesForTask](#getdependenciesfortask) - Get dependencies from a task
* [getDependentsForTask](#getdependentsfortask) - Get dependents from a task
* [getSubtasksForTask](#getsubtasksfortask) - Get subtasks from a task
* [getTask](#gettask) - Get a task
* [getTasks](#gettasks) - Get multiple tasks
* [getTasksForProject](#gettasksforproject) - Get tasks from a project
* [getTasksForSection](#gettasksforsection) - Get tasks from a section
* [getTasksForTag](#gettasksfortag) - Get tasks from a tag
* [getTasksForUserTaskList](#gettasksforusertasklist) - Get tasks from a user task list
* [removeDependenciesForTask](#removedependenciesfortask) - Unlink dependencies from a task
* [removeDependentsForTask](#removedependentsfortask) - Unlink dependents from a task
* [removeFollowerForTask](#removefollowerfortask) - Remove followers from a task
* [removeProjectForTask](#removeprojectfortask) - Remove a project from a task
* [removeTagForTask](#removetagfortask) - Remove a tag from a task
* [searchTasksForWorkspace](#searchtasksforworkspace) - Search tasks in a workspace
* [setParentForTask](#setparentfortask) - Set the parent of a task
* [updateTask](#updatetask) - Update a task

## addDependenciesForTask

Marks a set of tasks as dependencies of this task, if they are not already dependencies. *A task can have at most 30 dependents and dependencies combined*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddDependenciesForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddDependenciesForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ModifyDependenciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddDependenciesForTaskRequest();
    $request->requestBody = new AddDependenciesForTaskRequestBody();
    $request->requestBody->data = new ModifyDependenciesRequest();
    $request->requestBody->data->dependencies = [
        'nobis',
        'quas',
    ];
    $request->optFields = [
        'nulla',
        'voluptas',
        'libero',
        'quasi',
    ];
    $request->optPretty = false;
    $request->taskGid = 'tempora';

    $response = $sdk->tasks->addDependenciesForTask($request);

    if ($response->addDependenciesForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addDependentsForTask

Marks a set of tasks as dependents of this task, if they are not already dependents. *A task can have at most 30 dependents and dependencies combined*.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddDependentsForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddDependentsForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ModifyDependentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddDependentsForTaskRequest();
    $request->requestBody = new AddDependentsForTaskRequestBody();
    $request->requestBody->data = new ModifyDependentsRequest();
    $request->requestBody->data->dependents = [
        'explicabo',
        'provident',
    ];
    $request->optFields = [
        'molestiae',
    ];
    $request->optPretty = false;
    $request->taskGid = 'magnam';

    $response = $sdk->tasks->addDependentsForTask($request);

    if ($response->addDependentsForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addFollowersForTask

Adds followers to a task. Returns an empty data block.
Each task can be associated with zero or more followers in the system.
Requests to add/remove followers, if successful, will return the complete updated task record, described above.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFollowersForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddFollowersForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddFollowersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFollowersForTaskRequest();
    $request->requestBody = new AddFollowersForTaskRequestBody();
    $request->requestBody->data = new TaskAddFollowersRequest();
    $request->requestBody->data->followers = [
        'eius',
        'esse',
    ];
    $request->optFields = [
        'rem',
        'fuga',
    ];
    $request->optPretty = false;
    $request->taskGid = 'reprehenderit';

    $response = $sdk->tasks->addFollowersForTask($request);

    if ($response->addFollowersForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addProjectForTask

Adds the task to the specified project, in the optional location
specified. If no location arguments are given, the task will be added to
the end of the project.

`addProject` can also be used to reorder a task within a project or
section that already contains it.

At most one of `insert_before`, `insert_after`, or `section` should be
specified. Inserting into a section in an non-order-dependent way can be
done by specifying section, otherwise, to insert within a section in a
particular place, specify `insert_before` or `insert_after` and a task
within the section to anchor the position of this task.

Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddProjectForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddProjectForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddProjectForTaskRequest();
    $request->requestBody = new AddProjectForTaskRequestBody();
    $request->requestBody->data = new TaskAddProjectRequest();
    $request->requestBody->data->insertAfter = '124816';
    $request->requestBody->data->insertBefore = '432134';
    $request->requestBody->data->project = '13579';
    $request->requestBody->data->section = '987654';
    $request->optFields = [
        'fugiat',
        'ut',
        'eum',
    ];
    $request->optPretty = false;
    $request->taskGid = 'suscipit';

    $response = $sdk->tasks->addProjectForTask($request);

    if ($response->addProjectForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addTagForTask

Adds a tag to a task. Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddTagForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddTagForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskAddTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddTagForTaskRequest();
    $request->requestBody = new AddTagForTaskRequestBody();
    $request->requestBody->data = new TaskAddTagRequest();
    $request->requestBody->data->tag = '13579';
    $request->optFields = [
        'eos',
        'praesentium',
        'quisquam',
        'veritatis',
    ];
    $request->optPretty = false;
    $request->taskGid = 'ipsa';

    $response = $sdk->tasks->addTagForTask($request);

    if ($response->addTagForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSubtaskForTask

Creates a new subtask and adds it to the parent task. Returns the full record for the newly created subtask.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubtaskForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSubtaskForTaskRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestAssigneeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserCompactInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestExternal;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestResourceSubtypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSubtaskForTaskRequest();
    $request->requestBody = new CreateSubtaskForTaskRequestBodyInput();
    $request->requestBody->data = new TaskRequestInput();
    $request->requestBody->data->approvalStatus = TaskRequestApprovalStatusEnum::PENDING;
    $request->requestBody->data->assignee = '12345';
    $request->requestBody->data->assigneeSection = '12345';
    $request->requestBody->data->assigneeStatus = TaskRequestAssigneeStatusEnum::UPCOMING;
    $request->requestBody->data->completed = false;
    $request->requestBody->data->completedBy = new UserCompactInput();
    $request->requestBody->data->completedBy->name = 'Greg Sanchez';
    $request->requestBody->data->customFields = [
        'quidem' => 'neque',
        'quo' => 'illum',
        'quo' => 'fuga',
    ];
    $request->requestBody->data->dueAt = DateTime::createFromFormat('Y-m-d', '2019-09-15T02:06:58.147Z');
    $request->requestBody->data->dueOn = DateTime::createFromFormat('Y-m-d', '2019-09-15');
    $request->requestBody->data->external = new TaskRequestExternal();
    $request->requestBody->data->external->data = 'A blob of information.';
    $request->requestBody->data->external->gid = '1234';
    $request->requestBody->data->followers = [
        'eos',
        'voluptas',
    ];
    $request->requestBody->data->htmlNotes = '<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>';
    $request->requestBody->data->liked = true;
    $request->requestBody->data->name = 'Bug Task';
    $request->requestBody->data->notes = 'Mittens really likes the stuff from Humboldt.';
    $request->requestBody->data->parent = '12345';
    $request->requestBody->data->projects = [
        'cupiditate',
    ];
    $request->requestBody->data->resourceSubtype = TaskRequestResourceSubtypeEnum::DEFAULT_TASK;
    $request->requestBody->data->startAt = DateTime::createFromFormat('Y-m-d', '2019-09-14T02:06:58.147Z');
    $request->requestBody->data->startOn = DateTime::createFromFormat('Y-m-d', '2019-09-14');
    $request->requestBody->data->tags = [
        'tempora',
    ];
    $request->requestBody->data->workspace = '12345';
    $request->optFields = [
        'ipsam',
        'aspernatur',
        'sequi',
        'quo',
    ];
    $request->optPretty = false;
    $request->taskGid = 'esse';

    $response = $sdk->tasks->createSubtaskForTask($request);

    if ($response->createSubtaskForTask201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTask

Creating a new task is as easy as POSTing to the `/tasks` endpoint with a
data block containing the fields you’d like to set on the task. Any
unspecified fields will take on default values.

Every task is required to be created in a specific workspace, and this
workspace cannot be changed once set. The workspace need not be set
explicitly if you specify `projects` or a `parent` task instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTaskRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestAssigneeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserCompactInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestExternal;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestResourceSubtypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTaskRequest();
    $request->requestBody = new CreateTaskRequestBodyInput();
    $request->requestBody->data = new TaskRequestInput();
    $request->requestBody->data->approvalStatus = TaskRequestApprovalStatusEnum::PENDING;
    $request->requestBody->data->assignee = '12345';
    $request->requestBody->data->assigneeSection = '12345';
    $request->requestBody->data->assigneeStatus = TaskRequestAssigneeStatusEnum::UPCOMING;
    $request->requestBody->data->completed = false;
    $request->requestBody->data->completedBy = new UserCompactInput();
    $request->requestBody->data->completedBy->name = 'Greg Sanchez';
    $request->requestBody->data->customFields = [
        'aperiam' => 'distinctio',
        'quod' => 'dignissimos',
        'inventore' => 'nihil',
        'totam' => 'accusamus',
    ];
    $request->requestBody->data->dueAt = DateTime::createFromFormat('Y-m-d', '2019-09-15T02:06:58.147Z');
    $request->requestBody->data->dueOn = DateTime::createFromFormat('Y-m-d', '2019-09-15');
    $request->requestBody->data->external = new TaskRequestExternal();
    $request->requestBody->data->external->data = 'A blob of information.';
    $request->requestBody->data->external->gid = '1234';
    $request->requestBody->data->followers = [
        'odio',
        'occaecati',
    ];
    $request->requestBody->data->htmlNotes = '<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>';
    $request->requestBody->data->liked = true;
    $request->requestBody->data->name = 'Bug Task';
    $request->requestBody->data->notes = 'Mittens really likes the stuff from Humboldt.';
    $request->requestBody->data->parent = '12345';
    $request->requestBody->data->projects = [
        'sapiente',
        'dolores',
    ];
    $request->requestBody->data->resourceSubtype = TaskRequestResourceSubtypeEnum::DEFAULT_TASK;
    $request->requestBody->data->startAt = DateTime::createFromFormat('Y-m-d', '2019-09-14T02:06:58.147Z');
    $request->requestBody->data->startOn = DateTime::createFromFormat('Y-m-d', '2019-09-14');
    $request->requestBody->data->tags = [
        'molestiae',
        'accusantium',
        'porro',
    ];
    $request->requestBody->data->workspace = '12345';
    $request->optFields = [
        'quas',
        'praesentium',
    ];
    $request->optPretty = false;

    $response = $sdk->tasks->createTask($request);

    if ($response->createTask201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTask

A specific, existing task can be deleted by making a DELETE request on
the URL for that task. Deleted tasks go into the “trash” of the user
making the delete request. Tasks can be recovered from the trash within a
period of 30 days; afterward they are completely removed from the system.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTaskRequest();
    $request->optFields = [
        'deleniti',
    ];
    $request->optPretty = false;
    $request->taskGid = 'fugit';

    $response = $sdk->tasks->deleteTask($request);

    if ($response->deleteTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## duplicateTask

Creates and returns a job that will asynchronously handle the duplication.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DuplicateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DuplicateTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskDuplicateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TaskDuplicateRequestIncludeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DuplicateTaskRequest();
    $request->requestBody = new DuplicateTaskRequestBody();
    $request->requestBody->data = new TaskDuplicateRequest();
    $request->requestBody->data->include = TaskDuplicateRequestIncludeEnum::PROJECTS;
    $request->requestBody->data->name = 'New Task Name';
    $request->optFields = [
        'incidunt',
        'atque',
        'explicabo',
    ];
    $request->optPretty = false;
    $request->taskGid = 'minima';

    $response = $sdk->tasks->duplicateTask($request);

    if ($response->duplicateTask201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDependenciesForTask

Returns the compact representations of all of the dependencies of a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDependenciesForTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDependenciesForTaskRequest();
    $request->limit = 392676;
    $request->offset = 'fugit';
    $request->optFields = [
        'consequuntur',
        'ratione',
        'explicabo',
        'saepe',
    ];
    $request->optPretty = false;
    $request->taskGid = 'occaecati';

    $response = $sdk->tasks->getDependenciesForTask($request);

    if ($response->getDependenciesForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDependentsForTask

Returns the compact representations of all of the dependents of a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDependentsForTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDependentsForTaskRequest();
    $request->limit = 543806;
    $request->offset = 'et';
    $request->optFields = [
        'eveniet',
        'accusamus',
    ];
    $request->optPretty = false;
    $request->taskGid = 'veritatis';

    $response = $sdk->tasks->getDependentsForTask($request);

    if ($response->getDependentsForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubtasksForTask

Returns a compact representation of all of the subtasks of a task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubtasksForTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubtasksForTaskRequest();
    $request->limit = 458604;
    $request->offset = 'quod';
    $request->optFields = [
        'vero',
        'aliquid',
        'quasi',
    ];
    $request->optPretty = false;
    $request->taskGid = 'saepe';

    $response = $sdk->tasks->getSubtasksForTask($request);

    if ($response->getSubtasksForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTask

Returns the complete task record for a single task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTaskRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTaskRequest();
    $request->optFields = [
        'harum',
        'molestiae',
    ];
    $request->optPretty = false;
    $request->taskGid = 'rerum';

    $response = $sdk->tasks->getTask($request);

    if ($response->getTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTasks

Returns the compact task records for some filtered set of tasks. Use one or more of the parameters provided to filter the tasks returned. You must specify a `project` or `tag` if you do not specify `assignee` and `workspace`.

For more complex task retrieval, use [workspaces/{workspace_gid}/tasks/search](/docs/search-tasks-in-a-workspace).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTasksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTasksRequest();
    $request->assignee = 'occaecati';
    $request->completedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2012-02-22T02:06:58.158Z');
    $request->limit = 327720;
    $request->modifiedSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-27T13:14:16.980Z');
    $request->offset = 'sit';
    $request->optFields = [
        'tempore',
        'adipisci',
        'cumque',
    ];
    $request->optPretty = false;
    $request->project = 'consequuntur';
    $request->section = 'consequatur';
    $request->workspace = 'minus';

    $response = $sdk->tasks->getTasks($request);

    if ($response->getTasks200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTasksForProject

Returns the compact task records for all tasks within the given project, ordered by their priority within the project. Tasks can exist in more than one project at a time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTasksForProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTasksForProjectRequest();
    $request->completedSince = 'quaerat';
    $request->limit = 959167;
    $request->offset = 'consectetur';
    $request->optFields = [
        'blanditiis',
        'provident',
    ];
    $request->optPretty = false;
    $request->projectGid = 'a';

    $response = $sdk->tasks->getTasksForProject($request);

    if ($response->getTasksForProject200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTasksForSection

*Board view only*: Returns the compact section records for all tasks within the given section.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTasksForSectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTasksForSectionRequest();
    $request->limit = 857723;
    $request->offset = 'quas';
    $request->optFields = [
        'quasi',
        'a',
    ];
    $request->optPretty = false;
    $request->sectionGid = 'error';

    $response = $sdk->tasks->getTasksForSection($request);

    if ($response->getTasksForSection200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTasksForTag

Returns the compact task records for all tasks with the given tag. Tasks can have more than one tag at a time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTasksForTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTasksForTagRequest();
    $request->limit = 575751;
    $request->offset = 'pariatur';
    $request->optFields = [
        'quia',
        'eveniet',
        'asperiores',
        'facere',
    ];
    $request->optPretty = false;
    $request->tagGid = 'veritatis';

    $response = $sdk->tasks->getTasksForTag($request);

    if ($response->getTasksForTag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTasksForUserTaskList

Returns the compact list of tasks in a user’s My Tasks list.
*Note: Access control is enforced for this endpoint as with all Asana API endpoints, meaning a user’s private tasks will be filtered out if the API-authenticated user does not have access to them.*
*Note: Both complete and incomplete tasks are returned by default unless they are filtered out (for example, setting `completed_since=now` will return only incomplete tasks, which is the default view for “My Tasks” in Asana.)*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTasksForUserTaskListRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTasksForUserTaskListRequest();
    $request->completedSince = 'consequuntur';
    $request->limit = 94458;
    $request->offset = 'similique';
    $request->optFields = [
        'aliquid',
        'tenetur',
        'quae',
    ];
    $request->optPretty = false;
    $request->userTaskListGid = 'earum';

    $response = $sdk->tasks->getTasksForUserTaskList($request);

    if ($response->getTasksForUserTaskList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeDependenciesForTask

Unlinks a set of dependencies from this task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveDependenciesForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveDependenciesForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ModifyDependenciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveDependenciesForTaskRequest();
    $request->requestBody = new RemoveDependenciesForTaskRequestBody();
    $request->requestBody->data = new ModifyDependenciesRequest();
    $request->requestBody->data->dependencies = [
        'in',
        'eius',
    ];
    $request->optFields = [
        'illum',
        'soluta',
        'accusantium',
    ];
    $request->optPretty = false;
    $request->taskGid = 'aliquam';

    $response = $sdk->tasks->removeDependenciesForTask($request);

    if ($response->removeDependenciesForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeDependentsForTask

Unlinks a set of dependents from this task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveDependentsForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveDependentsForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ModifyDependentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveDependentsForTaskRequest();
    $request->requestBody = new RemoveDependentsForTaskRequestBody();
    $request->requestBody->data = new ModifyDependentsRequest();
    $request->requestBody->data->dependents = [
        'dicta',
        'ullam',
        'reprehenderit',
        'ullam',
    ];
    $request->optFields = [
        'aut',
        'voluptatum',
    ];
    $request->optPretty = false;
    $request->taskGid = 'qui';

    $response = $sdk->tasks->removeDependentsForTask($request);

    if ($response->removeDependentsForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeFollowerForTask

Removes each of the specified followers from the task if they are following. Returns the complete, updated record for the affected task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFollowerForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFollowerForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskRemoveFollowersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveFollowerForTaskRequest();
    $request->requestBody = new RemoveFollowerForTaskRequestBody();
    $request->requestBody->data = new TaskRemoveFollowersRequest();
    $request->requestBody->data->followers = [
        'ex',
        'deleniti',
        'itaque',
        'dolorum',
    ];
    $request->optFields = [
        'omnis',
    ];
    $request->optPretty = false;
    $request->taskGid = 'tenetur';

    $response = $sdk->tasks->removeFollowerForTask($request);

    if ($response->removeFollowerForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeProjectForTask

Removes the task from the specified project. The task will still exist in
the system, but it will not be in the project anymore.

Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveProjectForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveProjectForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskRemoveProjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveProjectForTaskRequest();
    $request->requestBody = new RemoveProjectForTaskRequestBody();
    $request->requestBody->data = new TaskRemoveProjectRequest();
    $request->requestBody->data->project = '13579';
    $request->optFields = [
        'at',
    ];
    $request->optPretty = false;
    $request->taskGid = 'et';

    $response = $sdk->tasks->removeProjectForTask($request);

    if ($response->removeProjectForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeTagForTask

Removes a tag from a task. Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveTagForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskRemoveTagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveTagForTaskRequest();
    $request->requestBody = new RemoveTagForTaskRequestBody();
    $request->requestBody->data = new TaskRemoveTagRequest();
    $request->requestBody->data->tag = '13579';
    $request->optFields = [
        'ipsa',
        'minima',
    ];
    $request->optPretty = false;
    $request->taskGid = 'veritatis';

    $response = $sdk->tasks->removeTagForTask($request);

    if ($response->removeTagForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchTasksForWorkspace

To mirror the functionality of the Asana web app's advanced search feature, the Asana API has a task search endpoint that allows you to build complex filters to find and retrieve the exact data you need.
#### Premium access
Like the Asana web product's advance search feature, this search endpoint will only be available to premium Asana users. A user is premium if any of the following is true:

- The workspace in which the search is being performed is a premium workspace - The user is a member of a premium team inside the workspace

Even if a user is only a member of a premium team inside a non-premium workspace, search will allow them to find data anywhere in the workspace, not just inside the premium team. Making a search request using credentials of a non-premium user will result in a `402 Payment Required` error.
#### Pagination
Search results are not stable; repeating the same query multiple times may return the data in a different order, even if the data do not change. Because of this, the traditional [pagination](https://developers.asana.com/docs/#pagination) available elsewhere in the Asana API is not available here. However, you can paginate manually by sorting the search results by their creation time and then modifying each subsequent query to exclude data you have already seen. Page sizes are limited to a maximum of 100 items, and can be specified by the `limit` query parameter.
#### Eventual consistency
Changes in Asana (regardless of whether they’re made though the web product or the API) are forwarded to our search infrastructure to be indexed. This process can take between 10 and 60 seconds to complete under normal operation, and longer during some production incidents. Making a change to a task that would alter its presence in a particular search query will not be reflected immediately. This is also true of the advanced search feature in the web product.
#### Rate limits
You may receive a `429 Too Many Requests` response if you hit any of our [rate limits](https://developers.asana.com/docs/#rate-limits).
#### Custom field parameters
| Parameter name | Custom field type | Accepted type |
|---|---|---|
| custom_fields.{gid}.is_set | All | Boolean |
| custom_fields.{gid}.value | Text | String |
| custom_fields.{gid}.value | Number | Number |
| custom_fields.{gid}.value | Enum | Enum option ID |
| custom_fields.{gid}.starts_with | Text only | String |
| custom_fields.{gid}.ends_with | Text only | String |
| custom_fields.{gid}.contains | Text only | String |
| custom_fields.{gid}.less_than | Number only | Number |
| custom_fields.{gid}.greater_than | Number only | Number |


For example, if the gid of the custom field is 12345, these query parameter to find tasks where it is set would be `custom_fields.12345.is_set=true`. To match an exact value for an enum custom field, use the gid of the desired enum option and not the name of the enum option: `custom_fields.12345.value=67890`.

**Not Supported**: searching for multiple exact matches of a custom field, searching for multi-enum custom field

*Note: If you specify `projects.any` and `sections.any`, you will receive tasks for the project **and** tasks for the section. If you're looking for only tasks in a section, omit the `projects.any` from the request.*

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SearchTasksForWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\SearchTasksForWorkspaceResourceSubtypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SearchTasksForWorkspaceSortByEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SearchTasksForWorkspaceRequest();
    $request->assignedByAny = 'consectetur';
    $request->assignedByNot = 'adipisci';
    $request->assigneeAny = 'iste';
    $request->assigneeNot = 'temporibus';
    $request->commentedOnByNot = 'accusantium';
    $request->completed = false;
    $request->completedAtAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T14:34:53.149Z');
    $request->completedAtBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-21T23:29:55.837Z');
    $request->completedOn = DateTime::createFromFormat('Y-m-d', '2022-11-12');
    $request->completedOnAfter = DateTime::createFromFormat('Y-m-d', '2022-07-01');
    $request->completedOnBefore = DateTime::createFromFormat('Y-m-d', '2022-10-12');
    $request->createdAtAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-30T04:05:24.454Z');
    $request->createdAtBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-10T11:52:05.487Z');
    $request->createdByAny = 'voluptas';
    $request->createdByNot = 'aut';
    $request->createdOn = DateTime::createFromFormat('Y-m-d', '2022-11-19');
    $request->createdOnAfter = DateTime::createFromFormat('Y-m-d', '2021-02-22');
    $request->createdOnBefore = DateTime::createFromFormat('Y-m-d', '2022-01-10');
    $request->dueAtAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-04T12:34:39.877Z');
    $request->dueAtBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-04T16:41:09.494Z');
    $request->dueOn = DateTime::createFromFormat('Y-m-d', '2022-11-02');
    $request->dueOnAfter = DateTime::createFromFormat('Y-m-d', '2021-01-31');
    $request->dueOnBefore = DateTime::createFromFormat('Y-m-d', '2021-07-13');
    $request->followersNot = 'officia';
    $request->hasAttachment = false;
    $request->isBlocked = false;
    $request->isBlocking = false;
    $request->isSubtask = false;
    $request->likedByNot = 'asperiores';
    $request->modifiedAtAfter = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-08T03:56:05.618Z');
    $request->modifiedAtBefore = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-21T02:51:58.534Z');
    $request->modifiedOn = DateTime::createFromFormat('Y-m-d', '2022-02-19');
    $request->modifiedOnAfter = DateTime::createFromFormat('Y-m-d', '2022-10-04');
    $request->modifiedOnBefore = DateTime::createFromFormat('Y-m-d', '2021-09-04');
    $request->optFields = [
        'velit',
        'culpa',
    ];
    $request->optPretty = false;
    $request->portfoliosAny = 'est';
    $request->projectsAll = 'recusandae';
    $request->projectsAny = 'totam';
    $request->projectsNot = 'fugiat';
    $request->resourceSubtype = SearchTasksForWorkspaceResourceSubtypeEnum::DEFAULT_TASK;
    $request->sectionsAll = 'ducimus';
    $request->sectionsAny = 'quos';
    $request->sectionsNot = 'vel';
    $request->sortAscending = false;
    $request->sortBy = SearchTasksForWorkspaceSortByEnum::CREATED_AT;
    $request->startOn = DateTime::createFromFormat('Y-m-d', '2020-11-18');
    $request->startOnAfter = DateTime::createFromFormat('Y-m-d', '2022-03-04');
    $request->startOnBefore = DateTime::createFromFormat('Y-m-d', '2022-08-22');
    $request->tagsAll = 'reiciendis';
    $request->tagsAny = 'assumenda';
    $request->tagsNot = 'nemo';
    $request->teamsAny = 'recusandae';
    $request->text = 'aliquid';
    $request->workspaceGid = 'aperiam';

    $response = $sdk->tasks->searchTasksForWorkspace($request);

    if ($response->searchTasksForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setParentForTask

parent, or no parent task at all. Returns an empty data block. When using `insert_before` and `insert_after`, at most one of those two options can be specified, and they must already be subtasks of the parent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetParentForTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\SetParentForTaskRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TaskSetParentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetParentForTaskRequest();
    $request->requestBody = new SetParentForTaskRequestBody();
    $request->requestBody->data = new TaskSetParentRequest();
    $request->requestBody->data->insertAfter = 'null';
    $request->requestBody->data->insertBefore = '124816';
    $request->requestBody->data->parent = '987654';
    $request->optFields = [
        'consectetur',
        'in',
        'exercitationem',
    ];
    $request->optPretty = false;
    $request->taskGid = 'earum';

    $response = $sdk->tasks->setParentForTask($request);

    if ($response->setParentForTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTask

A specific, existing task can be updated by making a PUT request on the
URL for that task. Only the fields provided in the `data` block will be
updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the task.

Returns the complete updated task record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTaskRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestApprovalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestAssigneeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserCompactInput;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestExternal;
use \OpenAPI\OpenAPI\Models\Shared\TaskRequestResourceSubtypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTaskRequest();
    $request->requestBody = new UpdateTaskRequestBodyInput();
    $request->requestBody->data = new TaskRequestInput();
    $request->requestBody->data->approvalStatus = TaskRequestApprovalStatusEnum::PENDING;
    $request->requestBody->data->assignee = '12345';
    $request->requestBody->data->assigneeSection = '12345';
    $request->requestBody->data->assigneeStatus = TaskRequestAssigneeStatusEnum::UPCOMING;
    $request->requestBody->data->completed = false;
    $request->requestBody->data->completedBy = new UserCompactInput();
    $request->requestBody->data->completedBy->name = 'Greg Sanchez';
    $request->requestBody->data->customFields = [
        'numquam' => 'doloribus',
        'suscipit' => 'reiciendis',
        'quidem' => 'saepe',
        'necessitatibus' => 'dolore',
    ];
    $request->requestBody->data->dueAt = DateTime::createFromFormat('Y-m-d', '2019-09-15T02:06:58.147Z');
    $request->requestBody->data->dueOn = DateTime::createFromFormat('Y-m-d', '2019-09-15');
    $request->requestBody->data->external = new TaskRequestExternal();
    $request->requestBody->data->external->data = 'A blob of information.';
    $request->requestBody->data->external->gid = '1234';
    $request->requestBody->data->followers = [
        'asperiores',
    ];
    $request->requestBody->data->htmlNotes = '<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>';
    $request->requestBody->data->liked = true;
    $request->requestBody->data->name = 'Bug Task';
    $request->requestBody->data->notes = 'Mittens really likes the stuff from Humboldt.';
    $request->requestBody->data->parent = '12345';
    $request->requestBody->data->projects = [
        'non',
    ];
    $request->requestBody->data->resourceSubtype = TaskRequestResourceSubtypeEnum::DEFAULT_TASK;
    $request->requestBody->data->startAt = DateTime::createFromFormat('Y-m-d', '2019-09-14T02:06:58.147Z');
    $request->requestBody->data->startOn = DateTime::createFromFormat('Y-m-d', '2019-09-14');
    $request->requestBody->data->tags = [
        'beatae',
    ];
    $request->requestBody->data->workspace = '12345';
    $request->optFields = [
        'a',
        'debitis',
    ];
    $request->optPretty = false;
    $request->taskGid = 'consectetur';

    $response = $sdk->tasks->updateTask($request);

    if ($response->updateTask200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
