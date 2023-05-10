# reports

## Overview

Code insights provides reports, annotations, and metrics to help you
and your team improve code quality in pull requests throughout the code
review process. Some of the available code insights are static analysis
reports, security scan results, artifact links, unit tests, and build
status.


### Available Operations

* [bulkCreateOrUpdateAnnotations](#bulkcreateorupdateannotations) - Bulk create or update annotations
* [createOrUpdateAnnotation](#createorupdateannotation) - Create or update an annotation
* [createOrUpdateReport](#createorupdatereport) - Create or update a report
* [deleteAnnotation](#deleteannotation) - Delete an annotation
* [deleteReport](#deletereport) - Delete a report
* [getAnnotation](#getannotation) - Get an annotation
* [getAnnotationsForReport](#getannotationsforreport) - List annotations
* [getReport](#getreport) - Get a report
* [getReportsForCommit](#getreportsforcommit) - List reports

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
            'quidem' => 'explicabo',
            'voluptas' => 'unde',
        ],
        [
            'suscipit' => 'sapiente',
        ],
    ];
    $request->commit = 'debitis';
    $request->repoSlug = 'illo';
    $request->reportId = 'reiciendis';
    $request->workspace = 'perferendis';

    $response = $sdk->reports->bulkCreateOrUpdateAnnotations($request);

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
        'maiores' => 'incidunt',
        'sed' => 'provident',
        'eius' => 'necessitatibus',
    ];
    $request->annotationId = 'ipsum';
    $request->commit = 'ea';
    $request->repoSlug = 'occaecati';
    $request->reportId = 'quos';
    $request->workspace = 'voluptatibus';

    $response = $sdk->reports->createOrUpdateAnnotation($request);

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
        'tempora' => 'voluptate',
        'reiciendis' => 'ex',
    ];
    $request->commit = 'sit';
    $request->repoSlug = 'non';
    $request->reportId = 'officiis';
    $request->workspace = 'praesentium';

    $response = $sdk->reports->createOrUpdateReport($request);

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
    $request->annotationId = 'facilis';
    $request->commit = 'quaerat';
    $request->repoSlug = 'incidunt';
    $request->reportId = 'ipsam';
    $request->workspace = 'debitis';

    $response = $sdk->reports->deleteAnnotation($request);

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
    $request->commit = 'rem';
    $request->repoSlug = 'sit';
    $request->reportId = 'nobis';
    $request->workspace = 'error';

    $response = $sdk->reports->deleteReport($request);

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
    $request->annotationId = 'veniam';
    $request->commit = 'minima';
    $request->repoSlug = 'recusandae';
    $request->reportId = 'reiciendis';
    $request->workspace = 'nulla';

    $response = $sdk->reports->getAnnotation($request);

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
    $request->commit = 'magni';
    $request->repoSlug = 'aperiam';
    $request->reportId = 'saepe';
    $request->workspace = 'numquam';

    $response = $sdk->reports->getAnnotationsForReport($request);

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
    $request->commit = 'veniam';
    $request->repoSlug = 'in';
    $request->reportId = 'officiis';
    $request->workspace = 'beatae';

    $response = $sdk->reports->getReport($request);

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
    $request->commit = 'laudantium';
    $request->repoSlug = 'exercitationem';
    $request->workspace = 'praesentium';

    $response = $sdk->reports->getReportsForCommit($request);

    if ($response->paginatedReports !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
