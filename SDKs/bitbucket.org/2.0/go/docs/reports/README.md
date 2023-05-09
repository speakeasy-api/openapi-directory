# Reports

## Overview

Code insights provides reports, annotations, and metrics to help you
and your team improve code quality in pull requests throughout the code
review process. Some of the available code insights are static analysis
reports, security scan results, artifact links, unit tests, and build
status.


### Available Operations

* [BulkCreateOrUpdateAnnotations](#bulkcreateorupdateannotations) - Bulk create or update annotations
* [CreateOrUpdateAnnotation](#createorupdateannotation) - Create or update an annotation
* [CreateOrUpdateReport](#createorupdatereport) - Create or update a report
* [DeleteAnnotation](#deleteannotation) - Delete an annotation
* [DeleteReport](#deletereport) - Delete a report
* [GetAnnotation](#getannotation) - Get an annotation
* [GetAnnotationsForReport](#getannotationsforreport) - List annotations
* [GetReport](#getreport) - Get a report
* [GetReportsForCommit](#getreportsforcommit) - List reports

## BulkCreateOrUpdateAnnotations

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.BulkCreateOrUpdateAnnotations(ctx, operations.BulkCreateOrUpdateAnnotationsRequest{
        RequestBody: []map[string]interface{}{
            map[string]interface{}{
                "quidem": "explicabo",
                "voluptas": "unde",
            },
            map[string]interface{}{
                "suscipit": "sapiente",
            },
        },
        Commit: "debitis",
        RepoSlug: "illo",
        ReportID: "reiciendis",
        Workspace: "perferendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAnnotations != nil {
        // handle response
    }
}
```

## CreateOrUpdateAnnotation

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.CreateOrUpdateAnnotation(ctx, operations.CreateOrUpdateAnnotationRequest{
        RequestBody: map[string]interface{}{
            "maiores": "incidunt",
            "sed": "provident",
            "eius": "necessitatibus",
        },
        AnnotationID: "ipsum",
        Commit: "ea",
        RepoSlug: "occaecati",
        ReportID: "quos",
        Workspace: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAnnotation != nil {
        // handle response
    }
}
```

## CreateOrUpdateReport

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

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.CreateOrUpdateReport(ctx, operations.CreateOrUpdateReportRequest{
        RequestBody: map[string]interface{}{
            "tempora": "voluptate",
            "reiciendis": "ex",
        },
        Commit: "sit",
        RepoSlug: "non",
        ReportID: "officiis",
        Workspace: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## DeleteAnnotation

Deletes a single Annotation matching the provided ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.DeleteAnnotation(ctx, operations.DeleteAnnotationRequest{
        AnnotationID: "facilis",
        Commit: "quaerat",
        RepoSlug: "incidunt",
        ReportID: "ipsam",
        Workspace: "debitis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteReport

Deletes a single Report matching the provided ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.DeleteReport(ctx, operations.DeleteReportRequest{
        Commit: "rem",
        RepoSlug: "sit",
        ReportID: "nobis",
        Workspace: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetAnnotation

Returns a single Annotation matching the provided ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.GetAnnotation(ctx, operations.GetAnnotationRequest{
        AnnotationID: "veniam",
        Commit: "minima",
        RepoSlug: "recusandae",
        ReportID: "reiciendis",
        Workspace: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ReportAnnotation != nil {
        // handle response
    }
}
```

## GetAnnotationsForReport

Returns a paginated list of Annotations for a specified report.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.GetAnnotationsForReport(ctx, operations.GetAnnotationsForReportRequest{
        Commit: "magni",
        RepoSlug: "aperiam",
        ReportID: "saepe",
        Workspace: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedAnnotations != nil {
        // handle response
    }
}
```

## GetReport

Returns a single Report matching the provided ID.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.GetReport(ctx, operations.GetReportRequest{
        Commit: "veniam",
        RepoSlug: "in",
        ReportID: "officiis",
        Workspace: "beatae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Report != nil {
        // handle response
    }
}
```

## GetReportsForCommit

Returns a paginated list of Reports linked to this commit.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Reports.GetReportsForCommit(ctx, operations.GetReportsForCommitRequest{
        Commit: "laudantium",
        RepoSlug: "exercitationem",
        Workspace: "praesentium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedReports != nil {
        // handle response
    }
}
```
