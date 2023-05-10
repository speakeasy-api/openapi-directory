# commits

## Overview

These are the repository's commits. They are paginated and returned in
reverse chronological order, similar to the output of git log.


### Available Operations

* [bulkCreateOrUpdateAnnotations](#bulkcreateorupdateannotations) - Bulk create or update annotations
* [createOrUpdateAnnotation](#createorupdateannotation) - Create or update an annotation
* [createOrUpdateReport](#createorupdatereport) - Create or update a report
* [deleteAnnotation](#deleteannotation) - Delete an annotation
* [deleteReport](#deletereport) - Delete a report
* [deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove](#deleterepositoriesworkspacereposlugcommitcommitapprove) - Unapprove a commit
* [deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId](#deleterepositoriesworkspacereposlugcommitcommitcommentscommentid) - Delete a commit comment
* [getAnnotation](#getannotation) - Get an annotation
* [getAnnotationsForReport](#getannotationsforreport) - List annotations
* [getReport](#getreport) - Get a report
* [getReportsForCommit](#getreportsforcommit) - List reports
* [getRepositoriesWorkspaceRepoSlugCommitCommit](#getrepositoriesworkspacereposlugcommitcommit) - Get a commit
* [getRepositoriesWorkspaceRepoSlugCommitCommitComments](#getrepositoriesworkspacereposlugcommitcommitcomments) - List a commit's comments
* [getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId](#getrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Get a commit comment
* [getRepositoriesWorkspaceRepoSlugCommits](#getrepositoriesworkspacereposlugcommits) - List commits
* [getRepositoriesWorkspaceRepoSlugCommitsRevision](#getrepositoriesworkspacereposlugcommitsrevision) - List commits for revision
* [getRepositoriesWorkspaceRepoSlugDiffSpec](#getrepositoriesworkspacereposlugdiffspec) - Compare two commits
* [getRepositoriesWorkspaceRepoSlugDiffstatSpec](#getrepositoriesworkspacereposlugdiffstatspec) - Compare two commit diff stats
* [getRepositoriesWorkspaceRepoSlugMergeBaseRevspec](#getrepositoriesworkspacereposlugmergebaserevspec) - Get the common ancestor between two commits
* [getRepositoriesWorkspaceRepoSlugPatchSpec](#getrepositoriesworkspacereposlugpatchspec) - Get a patch for two commits
* [postRepositoriesWorkspaceRepoSlugCommitCommitApprove](#postrepositoriesworkspacereposlugcommitcommitapprove) - Approve a commit
* [postRepositoriesWorkspaceRepoSlugCommitCommitComments](#postrepositoriesworkspacereposlugcommitcommitcomments) - Create comment for a commit
* [postRepositoriesWorkspaceRepoSlugCommits](#postrepositoriesworkspacereposlugcommits) - List commits with include/exclude
* [postRepositoriesWorkspaceRepoSlugCommitsRevision](#postrepositoriesworkspacereposlugcommitsrevision) - List commits for revision using include/exclude
* [putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId](#putrepositoriesworkspacereposlugcommitcommitcommentscommentid) - Update a commit comment

## bulkCreateOrUpdateAnnotations

Bulk upload of annotations.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Add the annotations you want to upload as objects in a JSON array and make sure each annotation has the external_id field set to a unique value. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001. The external id can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). You can upload up to 100 annotations per POST request.

### Sample cURL request:
```
curl --location 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001/annotations' \
--header 'Content-Type: application/json' \
--data-raw '[
  {
        "external_id": "mysystem-annotation001",
        "title": "Security scan report",
        "annotation_type": "VULNERABILITY",
        "summary": "This line represents a security threat.",
        "severity": "HIGH",
      "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
        "line": 42
  },
  {
        "external_id": "mySystem-annotation002",
        "title": "Bug report",
        "annotation_type": "BUG",
        "result": "FAILED",
        "summary": "This line might introduce a bug.",
        "severity": "MEDIUM",
      "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Helper.java",
        "line": 13
  }
]'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BulkCreateOrUpdateAnnotationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BulkCreateOrUpdateAnnotationsRequest();
    $request->requestBody = [
        [
            'molestias' => 'excepturi',
            'pariatur' => 'modi',
            'praesentium' => 'rem',
        ],
    ];
    $request->commit = 'voluptates';
    $request->repoSlug = 'quasi';
    $request->reportId = 'repudiandae';
    $request->workspace = 'sint';

    $response = $sdk->commits->bulkCreateOrUpdateAnnotations($request);

    if ($response->reportAnnotations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrUpdateAnnotation

Creates or updates an individual annotation for the specified report.
Annotations are individual findings that have been identified as part of a report, for example, a line of code that represents a vulnerability. These annotations can be attached to a specific file and even a specific line in that file, however, that is optional. Annotations are not mandatory and a report can contain up to 1000 annotations.

Just as reports, annotation needs to be uploaded with a unique ID that can later be used to identify the report as an alternative to the generated [UUID](https://developer.atlassian.com/bitbucket/api/2/reference/meta/uri-uuid#uuid). If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-annotation001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mySystem-001/annotations/mysystem-annotation001' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Security scan report",
    "annotation_type": "VULNERABILITY",
    "summary": "This line represents a security thread.",
    "severity": "HIGH",
    "path": "my-service/src/main/java/com/myCompany/mysystem/logic/Main.java",
    "line": 42
}'
```

### Possible field values:
annotation_type: VULNERABILITY, CODE_SMELL, BUG
result: PASSED, FAILED, IGNORED, SKIPPED
severity: HIGH, MEDIUM, LOW, CRITICAL

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateAnnotationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrUpdateAnnotationRequest();
    $request->requestBody = [
        'itaque' => 'incidunt',
    ];
    $request->annotationId = 'enim';
    $request->commit = 'consequatur';
    $request->repoSlug = 'est';
    $request->reportId = 'quibusdam';
    $request->workspace = 'explicabo';

    $response = $sdk->commits->createOrUpdateAnnotation($request);

    if ($response->reportAnnotation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrUpdateReport

Creates or updates a report for the specified commit.
To upload a report, make sure to generate an ID that is unique across all reports for that commit. If you want to use an existing id from your own system, we recommend prefixing it with your system's name to avoid collisions, for example, mySystem-001.

### Sample cURL request:
```
curl --request PUT 'https://api.bitbucket.org/2.0/repositories/<username>/<reposity-name>/commit/<commit-hash>/reports/mysystem-001' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Security scan report",
    "details": "This pull request introduces 10 new dependency vulnerabilities.",
    "report_type": "SECURITY",
    "reporter": "mySystem",
    "link": "http://www.mysystem.com/reports/001",
    "result": "FAILED",
    "data": [
        {
            "title": "Duration (seconds)",
            "type": "DURATION",
            "value": 14
        },
        {
            "title": "Safe to merge?",
            "type": "BOOLEAN",
            "value": false
        }
    ]
}'
```

### Possible field values:
report_type: SECURITY, COVERAGE, TEST, BUG
result: PASSED, FAILED, PENDING
data.type: BOOLEAN, DATE, DURATION, LINK, NUMBER, PERCENTAGE, TEXT

#### Data field formats
| Type  Field   | Value Field Type  | Value Field Display |
|:--------------|:------------------|:--------------------|
| None/ Omitted | Number, String or Boolean (not an array or object) | Plain text |
| BOOLEAN	| Boolean | The value will be read as a JSON boolean and displayed as 'Yes' or 'No'. |
| DATE  | Number | The value will be read as a JSON number in the form of a Unix timestamp (milliseconds) and will be displayed as a relative date if the date is less than one week ago, otherwise  it will be displayed as an absolute date. |
| DURATION | Number | The value will be read as a JSON number in milliseconds and will be displayed in a human readable duration format. |
| LINK | Object: `{"text": "Link text here", "href": "https://link.to.annotation/in/external/tool"}` | The value will be read as a JSON object containing the fields "text" and "href" and will be displayed as a clickable link on the report. |
| NUMBER | Number | The value will be read as a JSON number and large numbers will be  displayed in a human readable format (e.g. 14.3k). |
| PERCENTAGE | Number (between 0 and 100) | The value will be read as a JSON number between 0 and 100 and will be displayed with a percentage sign. |
| TEXT | String | The value will be read as a JSON string and will be displayed as-is |

Please refer to the [Code Insights documentation](https://confluence.atlassian.com/bitbucket/code-insights-994316785.html) for more information.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrUpdateReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrUpdateReportRequest();
    $request->requestBody = [
        'distinctio' => 'quibusdam',
        'labore' => 'modi',
        'qui' => 'aliquid',
    ];
    $request->commit = 'cupiditate';
    $request->repoSlug = 'quos';
    $request->reportId = 'perferendis';
    $request->workspace = 'magni';

    $response = $sdk->commits->createOrUpdateReport($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAnnotation

Deletes a single Annotation matching the provided ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAnnotationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAnnotationRequest();
    $request->annotationId = 'assumenda';
    $request->commit = 'ipsam';
    $request->repoSlug = 'alias';
    $request->reportId = 'fugit';
    $request->workspace = 'dolorum';

    $response = $sdk->commits->deleteAnnotation($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReport

Deletes a single Report matching the provided ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportRequest();
    $request->commit = 'excepturi';
    $request->repoSlug = 'tempora';
    $request->reportId = 'facilis';
    $request->workspace = 'tempore';

    $response = $sdk->commits->deleteReport($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove

Redact the authenticated user's approval of the specified commit.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest();
    $request->commit = 'labore';
    $request->repoSlug = 'delectus';
    $request->workspace = 'eum';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId

Deletes the specified commit comment.

Note that deleting comments that have visible replies that point to
them will not really delete the resource. This is to retain the integrity
of the original comment tree. Instead, the `deleted` element is set to
`true` and the content is blanked out. The comment will continue to be
returned by the collections and self endpoints.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest();
    $request->commentId = 248753;
    $request->commit = 'eligendi';
    $request->repoSlug = 'sint';
    $request->workspace = 'aliquid';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotation

Returns a single Annotation matching the provided ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnnotationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnnotationRequest();
    $request->annotationId = 'provident';
    $request->commit = 'necessitatibus';
    $request->repoSlug = 'sint';
    $request->reportId = 'officia';
    $request->workspace = 'dolor';

    $response = $sdk->commits->getAnnotation($request);

    if ($response->reportAnnotation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAnnotationsForReport

Returns a paginated list of Annotations for a specified report.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAnnotationsForReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAnnotationsForReportRequest();
    $request->commit = 'debitis';
    $request->repoSlug = 'a';
    $request->reportId = 'dolorum';
    $request->workspace = 'in';

    $response = $sdk->commits->getAnnotationsForReport($request);

    if ($response->paginatedAnnotations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReport

Returns a single Report matching the provided ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportRequest();
    $request->commit = 'in';
    $request->repoSlug = 'illum';
    $request->reportId = 'maiores';
    $request->workspace = 'rerum';

    $response = $sdk->commits->getReport($request);

    if ($response->report !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportsForCommit

Returns a paginated list of Reports linked to this commit.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReportsForCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportsForCommitRequest();
    $request->commit = 'dicta';
    $request->repoSlug = 'magnam';
    $request->workspace = 'cumque';

    $response = $sdk->commits->getReportsForCommit($request);

    if ($response->paginatedReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugCommitCommit

Returns the specified commit.

Example:

```
$ curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a1
{
    "rendered": {
        "message": {
        "raw": "Add a GEORDI_OUTPUT_DIR setting",
        "markup": "markdown",
        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
        "type": "rendered"
        }
    },
    "hash": "f7591a13eda445d9a9167f98eb870319f4b6c2d8",
    "repository": {
        "name": "geordi",
        "type": "repository",
        "full_name": "bitbucket/geordi",
        "links": {
            "self": {
                "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi"
            },
            "html": {
                "href": "https://bitbucket.org/bitbucket/geordi"
            },
            "avatar": {
                "href": "https://bytebucket.org/ravatar/%7B85d08b4e-571d-44e9-a507-fa476535aa98%7D?ts=1730260"
            }
        },
        "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
    },
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "comments": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/comments"
        },
        "patch": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/patch/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "html": {
            "href": "https://bitbucket.org/bitbucket/geordi/commits/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "diff": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diff/f7591a13eda445d9a9167f98eb870319f4b6c2d8"
        },
        "approve": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/approve"
        },
        "statuses": {
            "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f7591a13eda445d9a9167f98eb870319f4b6c2d8/statuses"
        }
    },
    "author": {
        "raw": "Brodie Rao <a@b.c>",
        "type": "author",
        "user": {
            "display_name": "Brodie Rao",
            "uuid": "{9484702e-c663-4afd-aefb-c93a8cd31c28}",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/users/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D"
                },
                "html": {
                    "href": "https://bitbucket.org/%7B9484702e-c663-4afd-aefb-c93a8cd31c28%7D/"
                },
                "avatar": {
                    "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca/613070db-28b0-421f-8dba-ae8a87e2a5c7/128"
                }
            },
            "type": "user",
            "nickname": "brodie",
            "account_id": "557058:3aae1e05-702a-41e5-81c8-f36f29afb6ca"
        }
    },
    "summary": {
        "raw": "Add a GEORDI_OUTPUT_DIR setting",
        "markup": "markdown",
        "html": "<p>Add a GEORDI_OUTPUT_DIR setting</p>",
        "type": "rendered"
    },
    "participants": [],
    "parents": [
        {
            "type": "commit",
            "hash": "f06941fec4ef6bcb0c2456927a0cf258fa4f899b",
            "links": {
                "self": {
                    "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/commit/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
                },
                "html": {
                    "href": "https://bitbucket.org/bitbucket/geordi/commits/f06941fec4ef6bcb0c2456927a0cf258fa4f899b"
                }
            }
        }
    ],
    "date": "2012-07-16T19:37:54+00:00",
    "message": "Add a GEORDI_OUTPUT_DIR setting",
    "type": "commit"
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugCommitCommitRequest();
    $request->commit = 'facere';
    $request->repoSlug = 'ea';
    $request->workspace = 'aliquid';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugCommitCommit($request, $requestSecurity);

    if ($response->commit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugCommitCommitComments

Returns the commit's comments.

This includes both global and inline comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest();
    $request->commit = 'laborum';
    $request->q = 'accusamus';
    $request->repoSlug = 'non';
    $request->sort = 'occaecati';
    $request->workspace = 'enim';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugCommitCommitComments($request, $requestSecurity);

    if ($response->paginatedCommitComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId

Returns the specified commit comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest();
    $request->commentId = 881736;
    $request->commit = 'delectus';
    $request->repoSlug = 'quidem';
    $request->workspace = 'provident';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId($request, $requestSecurity);

    if ($response->commitComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugCommits

These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

#### GET /repositories/{workspace}/{repo_slug}/commits/

Returns all commits in the repo in topological order (newest commit
first). All branches and tags are included (similar to
`git log --all`).

#### GET /repositories/{workspace}/{repo_slug}/commits/?exclude=master

Returns all commits in the repo that are not on master
(similar to `git log --all ^master`).

#### GET /repositories/{workspace}/{repo_slug}/commits/?include=foo&include=bar&exclude=fu&exclude=fubar

Returns all commits that are on refs `foo` or `bar`, but not on `fu` or
`fubar` (similar to `git log foo bar ^fu ^fubar`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

#### GET /repositories/{workspace}/{repo_slug}/commits/?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed the file README.md.

#### GET /repositories/{workspace}/{repo_slug}/commits/?path=src/&include=foo&include=bar&exclude=master

Returns all commits that are on refs `foo` or `bar`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugCommitsRequest();
    $request->repoSlug = 'nam';
    $request->workspace = 'id';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugCommitsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugCommits($request, $requestSecurity);

    if ($response->paginatedChangeset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugCommitsRevision

These are the repository's commits. They are paginated and returned
in reverse chronological order, similar to the output of `git log`.
Like these tools, the DAG can be filtered.

#### GET /repositories/{workspace}/{repo_slug}/commits/master

Returns all commits on ref `master` (similar to `git log master`).

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?include=foo&exclude=master

Returns all commits on ref `dev` or `foo`, except those that are reachable on
`master` (similar to `git log dev foo ^master`).

An optional `path` parameter can be specified that will limit the
results to commits that affect that path. `path` can either be a file
or a directory. If a directory is specified, commits are returned that
have modified any file in the directory tree rooted by `path`. It is
important to note that if the `path` parameter is specified, the commits
returned by this endpoint may no longer be a DAG, parent commits that
do not modify the path will be omitted from the response.

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=README.md&include=foo&include=bar&exclude=master

Returns all commits that are on refs `dev` or `foo` or `bar`, but not on `master`
that changed the file README.md.

#### GET /repositories/{workspace}/{repo_slug}/commits/dev?path=src/&include=foo&exclude=master

Returns all commits that are on refs `dev` or `foo`, but not on `master`
that changed to a file in any file in the directory src or its children.

Because the response could include a very large number of commits, it
is paginated. Follow the 'next' link in the response to navigate to the
next page of commits. As with other paginated resources, do not
construct your own links.

When the include and exclude parameters are more than can fit in a
query string, clients can use a `x-www-form-urlencoded` POST instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest();
    $request->repoSlug = 'blanditiis';
    $request->revision = 'deleniti';
    $request->workspace = 'sapiente';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugCommitsRevision($request, $requestSecurity);

    if ($response->paginatedChangeset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDiffSpec

Produces a raw git-style diff.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `topic` query
parameter is true or absent, this API produces a 2-way three dot diff.
This is the diff between source commit and the merge base of the source
commit and the destination commit. When the `topic` query param is false,
a simple git-style diff is produced.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
  compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

#### Comparison to patches

While similar to patches, diffs:

* Don't have a commit header (username, commit message, etc)
* Support the optional `path=foo/bar.py` query param to filter
  the diff to just that one file diff

#### Response

The raw diff is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDiffSpecRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDiffSpecRequest();
    $request->binary = false;
    $request->context = 230533;
    $request->ignoreWhitespace = false;
    $request->merge = false;
    $request->path = 'deserunt';
    $request->renames = false;
    $request->repoSlug = 'nisi';
    $request->spec = 'vel';
    $request->topic = false;
    $request->workspace = 'natus';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugDiffSpec($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDiffstatSpec

Produces a response in JSON format with a record for every path
modified, including information on the type of the change and the
number of lines added and removed.

#### Single commit spec

If the `spec` argument to this API is a single commit, the diff is
produced against the first parent of the specified commit.

#### Two commit spec

Two commits separated by `..` may be provided as the `spec`, e.g.,
`3a8b42..9ff173`. When two commits are provided and the `topic` query
parameter is true or absent, this API produces a 2-way three dot diff.
This is the diff between source commit and the merge base of the source
commit and the destination commit. When the `topic` query param is false,
a simple git-style diff is produced.

The two commits are interpreted as follows:

* First commit: the commit containing the changes we wish to preview
* Second commit: the commit representing the state to which we want to
  compare the first commit
* **Note**: This is the opposite of the order used in `git diff`.

#### Sample output
```
curl https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/diffstat/d222fa2..e174964
{
    "pagelen": 500,
    "values": [
        {
            "type": "diffstat",
            "status": "modified",
            "lines_removed": 1,
            "lines_added": 2,
            "old": {
                "path": "setup.py",
                "escaped_path": "setup.py",
                "type": "commit_file",
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/e1749643d655d7c7014001a6c0f58abaf42ad850/setup.py"
                    }
                }
            },
            "new": {
                "path": "setup.py",
                "escaped_path": "setup.py",
                "type": "commit_file",
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/bitbucket/geordi/src/d222fa235229c55dad20b190b0b571adf737d5a6/setup.py"
                    }
                }
            }
        }
    ],
    "page": 1,
    "size": 1
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest();
    $request->ignoreWhitespace = false;
    $request->merge = false;
    $request->path = 'omnis';
    $request->renames = false;
    $request->repoSlug = 'molestiae';
    $request->spec = 'perferendis';
    $request->topic = false;
    $request->workspace = 'nihil';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugDiffstatSpec($request, $requestSecurity);

    if ($response->paginatedDiffstats !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugMergeBaseRevspec

Returns the best common ancestor between two commits, specified in a revspec
of 2 commits (e.g. 3a8b42..9ff173).

If more than one best common ancestor exists, only one will be returned. It is
unspecified which will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest();
    $request->repoSlug = 'magnam';
    $request->revspec = 'distinctio';
    $request->workspace = 'id';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugMergeBaseRevspec($request, $requestSecurity);

    if ($response->commit !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPatchSpec

Produces a raw patch for a single commit (diffed against its first
parent), or a patch-series for a revspec of 2 commits (e.g.
`3a8b42..9ff173` where the first commit represents the source and the
second commit the destination).

In case of the latter (diffing a revspec), a patch series is returned
for the commits on the source branch (`3a8b42` and its ancestors in
our example).

While similar to diffs, patches:

* Have a commit header (username, commit message, etc)
* Do not support the `path=foo/bar.py` query parameter

The raw patch is returned as-is, in whatever encoding the files in the
repository use. It is not decoded into unicode. As such, the
content-type is `text/plain`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPatchSpecRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPatchSpecRequest();
    $request->repoSlug = 'labore';
    $request->spec = 'labore';
    $request->workspace = 'suscipit';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->getRepositoriesWorkspaceRepoSlugPatchSpec($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugCommitCommitApprove

Approve the specified commit as the authenticated user.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest();
    $request->commit = 'natus';
    $request->repoSlug = 'nobis';
    $request->workspace = 'eum';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->postRepositoriesWorkspaceRepoSlugCommitCommitApprove($request, $requestSecurity);

    if ($response->participant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugCommitCommitComments

Creates new comment on the specified commit.

To post a reply to an existing comment, include the `parent.id` field:

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/db9ba1e031d07a02603eae0e559a7adc010257fc/comments/ \
  -X POST -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "One more thing!"},
       "parent": {"id": 5728901}}'
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest();
    $request->requestBody = [
        'aspernatur' => 'architecto',
        'magnam' => 'et',
        'excepturi' => 'ullam',
        'provident' => 'quos',
    ];
    $request->commit = 'sint';
    $request->repoSlug = 'accusantium';
    $request->workspace = 'mollitia';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->postRepositoriesWorkspaceRepoSlugCommitCommitComments($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugCommits

Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugCommitsRequest();
    $request->repoSlug = 'reiciendis';
    $request->workspace = 'mollitia';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugCommitsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->postRepositoriesWorkspaceRepoSlugCommits($request, $requestSecurity);

    if ($response->paginatedChangeset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugCommitsRevision

Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest();
    $request->repoSlug = 'ad';
    $request->revision = 'eum';
    $request->workspace = 'dolor';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->postRepositoriesWorkspaceRepoSlugCommitsRevision($request, $requestSecurity);

    if ($response->paginatedChangeset !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId

Used to update the contents of a comment. Only the content of the comment can be updated.

```
$ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/commit/7f71b5/comments/5728901 \
  -X PUT -u evzijst \
  -H 'Content-Type: application/json' \
  -d '{"content": {"raw": "One more thing!"}'
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest();
    $request->requestBody = [
        'odit' => 'nemo',
        'quasi' => 'iure',
        'doloribus' => 'debitis',
        'eius' => 'maxime',
    ];
    $request->commentId = 537023;
    $request->commit = 'facilis';
    $request->repoSlug = 'in';
    $request->workspace = 'architecto';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->commits->putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
