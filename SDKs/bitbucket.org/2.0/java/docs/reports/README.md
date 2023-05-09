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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BulkCreateOrUpdateAnnotationsRequest;
import org.openapis.openapi.models.operations.BulkCreateOrUpdateAnnotationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BulkCreateOrUpdateAnnotationsRequest req = new BulkCreateOrUpdateAnnotationsRequest(                new java.util.HashMap<String, Object>[]{{
                                add(new java.util.HashMap<String, Object>() {{
                                    put("adipisci", "fuga");
                                }}),
                                add(new java.util.HashMap<String, Object>() {{
                                    put("suscipit", "velit");
                                    put("culpa", "est");
                                    put("recusandae", "totam");
                                }}),
                            }}, "fugiat", "vel", "ducimus", "quos");            

            BulkCreateOrUpdateAnnotationsResponse res = sdk.reports.bulkCreateOrUpdateAnnotations(req);

            if (res.reportAnnotations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrUpdateAnnotationRequest;
import org.openapis.openapi.models.operations.CreateOrUpdateAnnotationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateOrUpdateAnnotationRequest req = new CreateOrUpdateAnnotationRequest(                new java.util.HashMap<String, Object>() {{
                                put("labore", "possimus");
                                put("facilis", "cum");
                            }}, "commodi", "in", "corporis", "reiciendis", "assumenda");            

            CreateOrUpdateAnnotationResponse res = sdk.reports.createOrUpdateAnnotation(req);

            if (res.reportAnnotation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrUpdateReportRequest;
import org.openapis.openapi.models.operations.CreateOrUpdateReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateOrUpdateReportRequest req = new CreateOrUpdateReportRequest(                new java.util.HashMap<String, Object>() {{
                                put("recusandae", "aliquid");
                                put("aperiam", "cum");
                            }}, "consectetur", "in", "exercitationem", "earum");            

            CreateOrUpdateReportResponse res = sdk.reports.createOrUpdateReport(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAnnotation

Deletes a single Annotation matching the provided ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAnnotationRequest;
import org.openapis.openapi.models.operations.DeleteAnnotationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAnnotationRequest req = new DeleteAnnotationRequest("facere", "numquam", "doloribus", "suscipit", "reiciendis");            

            DeleteAnnotationResponse res = sdk.reports.deleteAnnotation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReport

Deletes a single Report matching the provided ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportRequest;
import org.openapis.openapi.models.operations.DeleteReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteReportRequest req = new DeleteReportRequest("quidem", "saepe", "necessitatibus", "dolore");            

            DeleteReportResponse res = sdk.reports.deleteReport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotation

Returns a single Annotation matching the provided ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotationRequest;
import org.openapis.openapi.models.operations.GetAnnotationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnnotationRequest req = new GetAnnotationRequest("sunt", "asperiores", "adipisci", "non", "amet");            

            GetAnnotationResponse res = sdk.reports.getAnnotation(req);

            if (res.reportAnnotation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAnnotationsForReport

Returns a paginated list of Annotations for a specified report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAnnotationsForReportRequest;
import org.openapis.openapi.models.operations.GetAnnotationsForReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAnnotationsForReportRequest req = new GetAnnotationsForReportRequest("beatae", "dignissimos", "a", "debitis");            

            GetAnnotationsForReportResponse res = sdk.reports.getAnnotationsForReport(req);

            if (res.paginatedAnnotations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReport

Returns a single Report matching the provided ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportRequest;
import org.openapis.openapi.models.operations.GetReportResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportRequest req = new GetReportRequest("consectetur", "corporis", "harum", "laboriosam");            

            GetReportResponse res = sdk.reports.getReport(req);

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsForCommit

Returns a paginated list of Reports linked to this commit.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsForCommitRequest;
import org.openapis.openapi.models.operations.GetReportsForCommitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetReportsForCommitRequest req = new GetReportsForCommitRequest("ipsa", "voluptates", "libero");            

            GetReportsForCommitResponse res = sdk.reports.getReportsForCommit(req);

            if (res.paginatedReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
