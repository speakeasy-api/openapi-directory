# typeahead

## Overview

The typeahead search API provides search for objects from a single workspace.

### Available Operations

* [typeaheadForWorkspace](#typeaheadforworkspace) - Get objects via typeahead

## typeaheadForWorkspace

Retrieves objects in the workspace based via an auto-completion/typeahead
search algorithm. This feature is meant to provide results quickly, so do
not rely on this API to provide extremely accurate search results. The
result set is limited to a single page of results with a maximum size, so
you won’t be able to fetch large numbers of results.

The typeahead search API provides search for objects from a single
workspace. This endpoint should be used to query for objects when
creating an auto-completion/typeahead search feature. This API is meant
to provide results quickly and should not be relied upon for accurate or
exhaustive search results. The results sets are limited in size and
cannot be paginated.

Queries return a compact representation of each object which is typically
the gid and name fields. Interested in a specific set of fields or all of
the fields?! Of course you are. Use field selectors to manipulate what
data is included in a response.

Resources with type `user` are returned in order of most contacted to
least contacted. This is determined by task assignments, adding the user
to projects, and adding the user as a follower to tasks, messages,
etc.

Resources with type `project` are returned in order of recency. This is
determined when the user visits the project, is added to the project, and
completes tasks in the project.

Resources with type `task` are returned with priority placed on tasks
the user is following, but no guarantee on the order of those tasks.

Resources with type `project_template` are returned with priority
placed on favorited project templates.

Leaving the `query` string empty or omitted will give you results, still
following the resource ordering above. This could be used to list users or
projects that are relevant for the requesting user's api token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TypeaheadForWorkspaceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TypeaheadForWorkspaceResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TypeaheadForWorkspaceTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TypeaheadForWorkspaceRequest();
    $request->count = 888044;
    $request->optFields = [
        'facilis',
        'quaerat',
        'incidunt',
    ];
    $request->optPretty = false;
    $request->query = 'ipsam';
    $request->resourceType = TypeaheadForWorkspaceResourceTypeEnum::USER;
    $request->type = TypeaheadForWorkspaceTypeEnum::TAG;
    $request->workspaceGid = 'sit';

    $response = $sdk->typeahead->typeaheadForWorkspace($request);

    if ($response->typeaheadForWorkspace200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
