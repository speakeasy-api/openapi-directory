# issueTracker

## Overview

The issue resources provide functionality for getting information on
issues in an issue tracker, creating new issues, updating them and deleting
them.

You can access public issues without authentication, but you can't gain access
to private repositories' issues. By authenticating, you will get the ability
to create issues, as well as access to updating data or deleting issues you
have access to.


### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueId](#deleterepositoriesworkspacereposlugissuesissueid) - Delete an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath](#deleterepositoriesworkspacereposlugissuesissueidattachmentspath) - Delete an attachment for an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId](#deleterepositoriesworkspacereposlugissuesissueidcommentscommentid) - Delete a comment on an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote](#deleterepositoriesworkspacereposlugissuesissueidvote) - Remove vote for an issue
* [deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch](#deleterepositoriesworkspacereposlugissuesissueidwatch) - Stop watching an issue
* [getRepositoriesWorkspaceRepoSlugComponents](#getrepositoriesworkspacereposlugcomponents) - List components
* [getRepositoriesWorkspaceRepoSlugComponentsComponentId](#getrepositoriesworkspacereposlugcomponentscomponentid) - Get a component for issues
* [getRepositoriesWorkspaceRepoSlugIssues](#getrepositoriesworkspacereposlugissues) - List issues
* [getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip](#getrepositoriesworkspacereposlugissuesexportreponameissuestaskidzip) - Check issue export status
* [getRepositoriesWorkspaceRepoSlugIssuesImport](#getrepositoriesworkspacereposlugissuesimport) - Check issue import status
* [getRepositoriesWorkspaceRepoSlugIssuesIssueId](#getrepositoriesworkspacereposlugissuesissueid) - Get an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments](#getrepositoriesworkspacereposlugissuesissueidattachments) - List attachments for an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath](#getrepositoriesworkspacereposlugissuesissueidattachmentspath) - Get attachment for an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges](#getrepositoriesworkspacereposlugissuesissueidchanges) - List changes on an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId](#getrepositoriesworkspacereposlugissuesissueidchangeschangeid) - Get issue change object
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments](#getrepositoriesworkspacereposlugissuesissueidcomments) - List comments on an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId](#getrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Get a comment on an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote](#getrepositoriesworkspacereposlugissuesissueidvote) - Check if current user voted for an issue
* [getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch](#getrepositoriesworkspacereposlugissuesissueidwatch) - Check if current user is watching a issue
* [getRepositoriesWorkspaceRepoSlugMilestones](#getrepositoriesworkspacereposlugmilestones) - List milestones
* [getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId](#getrepositoriesworkspacereposlugmilestonesmilestoneid) - Get a milestone
* [getRepositoriesWorkspaceRepoSlugVersions](#getrepositoriesworkspacereposlugversions) - List defined versions for issues
* [getRepositoriesWorkspaceRepoSlugVersionsVersionId](#getrepositoriesworkspacereposlugversionsversionid) - Get a defined version for issues
* [postRepositoriesWorkspaceRepoSlugIssues](#postrepositoriesworkspacereposlugissues) - Create an issue
* [postRepositoriesWorkspaceRepoSlugIssuesExport](#postrepositoriesworkspacereposlugissuesexport) - Export issues
* [postRepositoriesWorkspaceRepoSlugIssuesImport](#postrepositoriesworkspacereposlugissuesimport) - Import issues
* [postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments](#postrepositoriesworkspacereposlugissuesissueidattachments) - Upload an attachment to an issue
* [postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges](#postrepositoriesworkspacereposlugissuesissueidchanges) - Modify the state of an issue
* [postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments](#postrepositoriesworkspacereposlugissuesissueidcomments) - Create a comment on an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueId](#putrepositoriesworkspacereposlugissuesissueid) - Update an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId](#putrepositoriesworkspacereposlugissuesissueidcommentscommentid) - Update a comment on an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote](#putrepositoriesworkspacereposlugissuesissueidvote) - Vote for an issue
* [putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch](#putrepositoriesworkspacereposlugissuesissueidwatch) - Watch an issue

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueId

Deletes the specified issue. This requires write access to the
repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest();
    $request->issueId = 'dolores';
    $request->repoSlug = 'minus';
    $request->workspace = 'quam';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->deleteRepositoriesWorkspaceRepoSlugIssuesIssueId($request, $requestSecurity);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath

Deletes an attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest();
    $request->issueId = 'dolor';
    $request->path = 'vero';
    $request->repoSlug = 'nostrum';
    $request->workspace = 'hic';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId

Deletes the specified comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest();
    $request->commentId = 928082;
    $request->issueId = 'omnis';
    $request->repoSlug = 'facilis';
    $request->workspace = 'perspiciatis';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote

Retract your vote.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest();
    $request->issueId = 'voluptatem';
    $request->repoSlug = 'porro';
    $request->workspace = 'consequuntur';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch

Stop watching this issue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest();
    $request->issueId = 'blanditiis';
    $request->repoSlug = 'error';
    $request->workspace = 'eaque';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch($request, $requestSecurity);

    if ($response->error !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugComponents

Returns the components that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugComponentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugComponentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugComponentsRequest();
    $request->repoSlug = 'occaecati';
    $request->workspace = 'rerum';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugComponentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugComponents($request, $requestSecurity);

    if ($response->paginatedComponents !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugComponentsComponentId

Returns the specified issue tracker component object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugComponentsComponentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest();
    $request->componentId = 237893;
    $request->repoSlug = 'asperiores';
    $request->workspace = 'earum';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugComponentsComponentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugComponentsComponentId($request, $requestSecurity);

    if ($response->component !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssues

Returns the issues in the issue tracker.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesRequest();
    $request->repoSlug = 'modi';
    $request->workspace = 'iste';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssues($request, $requestSecurity);

    if ($response->paginatedIssues !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip

This endpoint is used to poll for the progress of an issue export
job and return the zip file after the job is complete.
As long as the job is running, this will return a 200 response
with in the response body a description of the current status.

After the job has been scheduled, but before it starts executing, this
endpoint's response is:

{
 "type": "issue_job_status",
 "status": "ACCEPTED",
 "phase": "Initializing",
 "total": 0,
 "count": 0,
 "pct": 0
}


Then once it starts running, it becomes:

{
 "type": "issue_job_status",
 "status": "STARTED",
 "phase": "Attachments",
 "total": 15,
 "count": 11,
 "pct": 73
}

Once the job has successfully completed, it returns a stream of the zip file.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest();
    $request->repoName = 'dolorum';
    $request->repoSlug = 'deleniti';
    $request->taskId = 'pariatur';
    $request->workspace = 'provident';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip($request, $requestSecurity);

    if ($response->issueJobStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesImport

When using GET, this endpoint reports the status of the current import task. Request example:

```
$ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
```

After the job has been scheduled, but before it starts executing, this endpoint's response is:

```
< HTTP/1.1 202 Accepted
{
    "type": "issue_job_status",
    "status": "PENDING",
    "phase": "Attachments",
    "total": 15,
    "count": 0,
    "percent": 0
}
```

Once it starts running, it is a 202 response with status STARTED and progress filled.

After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesImportRequest();
    $request->repoSlug = 'nobis';
    $request->workspace = 'libero';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesImport($request, $requestSecurity);

    if ($response->issueJobStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueId

Returns the specified issue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest();
    $request->issueId = 'delectus';
    $request->repoSlug = 'quaerat';
    $request->workspace = 'quos';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueId($request, $requestSecurity);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments

Returns all attachments for this issue.

This returns the files' meta data. This does not return the files'
actual contents.

The files are always ordered by their upload date.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest();
    $request->issueId = 'aliquid';
    $request->repoSlug = 'dolorem';
    $request->workspace = 'dolorem';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments($request, $requestSecurity);

    if ($response->paginatedIssueAttachments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath

Returns the contents of the specified file attachment.

Note that this endpoint does not return a JSON response, but instead
returns a redirect pointing to the actual file that in turn will return
the raw contents.

The redirect URL contains a one-time token that has a limited lifetime.
As a result, the link should not be persisted, stored, or shared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest();
    $request->issueId = 'dolor';
    $request->path = 'qui';
    $request->repoSlug = 'ipsum';
    $request->workspace = 'hic';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges

Returns the list of all changes that have been made to the specified
issue. Changes are returned in chronological order with the oldest
change first.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.

Note that this operation is changing significantly, due to privacy changes.
See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api)
for details.

```
$ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .

{
  "pagelen": 20,
  "values": [
    {
      "changes": {
        "priority": {
          "new": "trivial",
          "old": "major"
        },
        "assignee": {
          "new": "",
          "old": "evzijst"
        },
        "assignee_account_id": {
          "new": "",
          "old": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
        },
        "kind": {
          "new": "enhancement",
          "old": "bug"
        }
      },
      "links": {
        "self": {
          "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2"
        },
        "html": {
          "href": "https://bitbucket.org/evzijst/dogslow/issues/1#comment-2"
        }
      },
      "issue": {
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1"
          }
        },
        "type": "issue",
        "id": 1,
        "repository": {
          "links": {
            "self": {
              "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow"
            },
            "html": {
              "href": "https://bitbucket.org/evzijst/dogslow"
            },
            "avatar": {
              "href": "https://bitbucket.org/evzijst/dogslow/avatar/32/"
            }
          },
          "type": "repository",
          "name": "dogslow",
          "full_name": "evzijst/dogslow",
          "uuid": "{988b17c6-1a47-4e70-84ee-854d5f012bf6}"
        },
        "title": "Updated title"
      },
      "created_on": "2018-03-03T00:35:28.353630+00:00",
      "user": {
        "username": "evzijst",
        "nickname": "evzijst",
        "display_name": "evzijst",
        "type": "user",
        "uuid": "{aaa7972b-38af-4fb1-802d-6e3854c95778}",
        "links": {
          "self": {
            "href": "https://api.bitbucket.org/2.0/users/evzijst"
          },
          "html": {
            "href": "https://bitbucket.org/evzijst/"
          },
          "avatar": {
            "href": "https://bitbucket.org/account/evzijst/avatar/32/"
          }
        }
      },
      "message": {
        "raw": "Removed assignee, changed kind and priority.",
        "markup": "markdown",
        "html": "<p>Removed assignee, changed kind and priority.</p>",
        "type": "rendered"
      },
      "type": "issue_change",
      "id": 2
    }
  ],
  "page": 1
}
```

Changes support [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) that
can be used to search for specific changes. For instance, to see
when an issue transitioned to "resolved":

```
$ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
   -G --data-urlencode='q=changes.state.new = "resolved"'
```

This resource is only available on repositories that have the issue
tracker enabled.

N.B.

The `changes.assignee` and `changes.assignee_account_id` fields are not
a `user` object. Instead, they contain the raw `username` and
`account_id` of the user. This is to protect the integrity of the audit
log even after a user account gets deleted.

The `changes.assignee` field is deprecated will disappear in the
future. Use `changes.assignee_account_id` instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest();
    $request->issueId = 'excepturi';
    $request->q = 'cum';
    $request->repoSlug = 'voluptate';
    $request->sort = 'dignissimos';
    $request->workspace = 'reiciendis';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges($request, $requestSecurity);

    if ($response->paginatedLogEntries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId

Returns the specified issue change object.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest();
    $request->changeId = 'amet';
    $request->issueId = 'dolorum';
    $request->repoSlug = 'numquam';
    $request->workspace = 'veritatis';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId($request, $requestSecurity);

    if ($response->issueChange !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments

Returns a paginated list of all comments that were made on the
specified issue.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest();
    $request->issueId = 'ipsa';
    $request->q = 'ipsa';
    $request->repoSlug = 'iure';
    $request->workspace = 'odio';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments($request, $requestSecurity);

    if ($response->paginatedIssueComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId

Returns the specified issue comment object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest();
    $request->commentId = 311796;
    $request->issueId = 'accusamus';
    $request->repoSlug = 'quidem';
    $request->workspace = 'voluptatibus';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId($request, $requestSecurity);

    if ($response->issueComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote

Check whether the authenticated user has voted for this issue.
A 204 status code indicates that the user has voted, while a 404
implies they haven't.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest();
    $request->issueId = 'voluptas';
    $request->repoSlug = 'natus';
    $request->workspace = 'eos';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote($request, $requestSecurity);

    if ($response->error !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch

Indicated whether or not the authenticated user is watching this
issue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest();
    $request->issueId = 'atque';
    $request->repoSlug = 'sit';
    $request->workspace = 'fugiat';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch($request, $requestSecurity);

    if ($response->error !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugMilestones

Returns the milestones that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugMilestonesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugMilestonesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugMilestonesRequest();
    $request->repoSlug = 'ab';
    $request->workspace = 'soluta';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugMilestonesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugMilestones($request, $requestSecurity);

    if ($response->paginatedMilestones !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId

Returns the specified issue tracker milestone object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest();
    $request->milestoneId = 679393;
    $request->repoSlug = 'iusto';
    $request->workspace = 'voluptate';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId($request, $requestSecurity);

    if ($response->milestone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugVersions

Returns the versions that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugVersionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugVersionsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugVersionsRequest();
    $request->repoSlug = 'dolorum';
    $request->workspace = 'deleniti';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugVersionsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugVersions($request, $requestSecurity);

    if ($response->paginatedVersions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugVersionsVersionId

Returns the specified issue tracker version object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest();
    $request->repoSlug = 'omnis';
    $request->versionId = 896672;
    $request->workspace = 'distinctio';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->getRepositoriesWorkspaceRepoSlugVersionsVersionId($request, $requestSecurity);

    if ($response->version !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugIssues

Creates a new issue.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

The authenticated user is used for the issue's `reporter` field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugIssuesRequest();
    $request->requestBody = [
        'nihil' => 'ipsum',
        'voluptate' => 'id',
        'saepe' => 'eius',
        'aspernatur' => 'perferendis',
    ];
    $request->repoSlug = 'amet';
    $request->workspace = 'optio';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugIssuesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->postRepositoriesWorkspaceRepoSlugIssues($request, $requestSecurity);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugIssuesExport

A POST request to this endpoint initiates a new background celery task that archives the repo's issues.

For example, you can run:

curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/
issues/export

When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
'Location' response header. This url is the endpoint for where the user can obtain their zip files."

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesExportRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugIssuesExportRequest();
    $request->requestBody = [
        'ad' => 'saepe',
        'suscipit' => 'deserunt',
        'provident' => 'minima',
        'repellendus' => 'totam',
    ];
    $request->repoSlug = 'similique';
    $request->workspace = 'alias';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->postRepositoriesWorkspaceRepoSlugIssuesExport($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugIssuesImport

A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
existing issues will be deleted and replaced by the contents of the imported zip file.

Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
"archive," which needs to be a file field:

```
$ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
```

When the import job is accepted, here is example output:

```
< HTTP/1.1 202 Accepted

{
    "type": "issue_job_status",
    "status": "ACCEPTED",
    "phase": "Attachments",
    "total": 15,
    "count": 0,
    "percent": 0
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesImportRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugIssuesImportRequest();
    $request->repoSlug = 'at';
    $request->workspace = 'quaerat';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->postRepositoriesWorkspaceRepoSlugIssuesImport($request, $requestSecurity);

    if ($response->issueJobStatus !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments

Upload new issue attachments.

To upload files, perform a `multipart/form-data` POST containing one
or more file fields.

When a file is uploaded with the same name as an existing attachment,
then the existing file will be replaced.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest();
    $request->issueId = 'tempora';
    $request->repoSlug = 'vel';
    $request->workspace = 'quod';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges

Makes a change to the specified issue.

For example, to change an issue's state and assignee, create a new
change object that modifies these fields:

```
curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
  -s -u evzijst -X POST -H "Content-Type: application/json" \
  -d '{
    "changes": {
      "assignee_account_id": {
        "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
      },
      "state": {
        "new": 'resolved"
      }
    }
    "message": {
      "raw": "This is now resolved."
    }
  }'
```

The above example also includes a custom comment to go alongside the
change. This comment will also be visible on the issue page in the UI.

The fields of the `changes` object are strings, not objects. This
allows for immutable change log records, even after user accounts,
milestones, or other objects recorded in a change entry, get renamed or
deleted.

The `assignee_account_id` field stores the account id. When POSTing a
new change and changing the assignee, the client should therefore use
the user's account_id in the `changes.assignee_account_id.new` field.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest();
    $request->requestBody = [
        'qui' => 'dolorum',
        'a' => 'esse',
        'harum' => 'iusto',
        'ipsum' => 'quisquam',
    ];
    $request->issueId = 'tenetur';
    $request->repoSlug = 'amet';
    $request->workspace = 'tempore';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges($request, $requestSecurity);

    if ($response->issueChange !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments

Creates a new issue comment.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
  -X POST -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "Lorem ipsum."}}'
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest();
    $request->requestBody = [
        'numquam' => 'enim',
        'dolorem' => 'sapiente',
        'totam' => 'nihil',
        'sit' => 'expedita',
    ];
    $request->issueId = 'neque';
    $request->repoSlug = 'sed';
    $request->workspace = 'vel';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugIssuesIssueId

Modifies the issue.

```
$ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
  -u evzijst -s -X PUT -H 'Content-Type: application/json' \
  -d '{
  "title": "Updated title",
  "assignee": {
    "account_id": "5d5355e8c6b9320d9ea5b28d"
  },
  "priority": "minor",
  "version": {
    "name": "1.0"
  },
  "component": null
}'
```

This example changes the `title`, `assignee`, `priority` and the
`version`. It also removes the value of the `component` from the issue
by setting the field to `null`. Any field not present keeps its existing
value.

Each time an issue is edited in the UI or through the API, an immutable
change record is created under the `/issues/123/changes` endpoint. It
also has a comment associated with the change.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest();
    $request->issueId = 'libero';
    $request->repoSlug = 'voluptas';
    $request->workspace = 'deserunt';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->putRepositoriesWorkspaceRepoSlugIssuesIssueId($request, $requestSecurity);

    if ($response->issue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId

Updates the content of the specified issue comment. Note that only
the `content.raw` field can be modified.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
  -X PUT -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "Lorem ipsum."}'
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest();
    $request->requestBody = [
        'ipsum' => 'incidunt',
        'qui' => 'cupiditate',
    ];
    $request->commentId = 807581;
    $request->issueId = 'pariatur';
    $request->repoSlug = 'soluta';
    $request->workspace = 'dicta';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId($request, $requestSecurity);

    if ($response->issueComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote

Vote for this issue.

To cast your vote, do an empty PUT. The 204 status code indicates that
the operation was successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest();
    $request->issueId = 'laborum';
    $request->repoSlug = 'totam';
    $request->workspace = 'incidunt';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote($request, $requestSecurity);

    if ($response->error !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch

Start watching this issue.

To start watching this issue, do an empty PUT. The 204 status code
indicates that the operation was successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest();
    $request->issueId = 'aspernatur';
    $request->repoSlug = 'dolores';
    $request->workspace = 'distinctio';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->issueTracker->putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch($request, $requestSecurity);

    if ($response->error !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
