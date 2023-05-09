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
                                    put("reiciendis", "est");
                                }}),
                            }}, "mollitia", "laborum", "dolores", "dolorem");            

            BulkCreateOrUpdateAnnotationsResponse res = sdk.commits.bulkCreateOrUpdateAnnotations(req);

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
                                put("explicabo", "nobis");
                                put("enim", "omnis");
                            }}, "nemo", "minima", "excepturi", "accusantium", "iure");            

            CreateOrUpdateAnnotationResponse res = sdk.commits.createOrUpdateAnnotation(req);

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
                                put("doloribus", "sapiente");
                                put("architecto", "mollitia");
                                put("dolorem", "culpa");
                            }}, "consequuntur", "repellat", "mollitia", "occaecati");            

            CreateOrUpdateReportResponse res = sdk.commits.createOrUpdateReport(req);

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

            DeleteAnnotationRequest req = new DeleteAnnotationRequest("numquam", "commodi", "quam", "molestiae", "velit");            

            DeleteAnnotationResponse res = sdk.commits.deleteAnnotation(req);

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

            DeleteReportRequest req = new DeleteReportRequest("error", "quia", "quis", "vitae");            

            DeleteReportResponse res = sdk.commits.deleteReport(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove

Redact the authenticated user's approval of the specified commit.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest req = new DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest("laborum", "animi", "enim");            

            DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse res = sdk.commits.deleteRepositoriesWorkspaceRepoSlugCommitCommitApprove(req, new DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest req = new DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest(138183L, "quo", "sequi", "tenetur");            

            DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse res = sdk.commits.deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(req, new DeleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

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

            GetAnnotationRequest req = new GetAnnotationRequest("ipsam", "id", "possimus", "aut", "quasi");            

            GetAnnotationResponse res = sdk.commits.getAnnotation(req);

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

            GetAnnotationsForReportRequest req = new GetAnnotationsForReportRequest("error", "temporibus", "laborum", "quasi");            

            GetAnnotationsForReportResponse res = sdk.commits.getAnnotationsForReport(req);

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

            GetReportRequest req = new GetReportRequest("reiciendis", "voluptatibus", "vero", "nihil");            

            GetReportResponse res = sdk.commits.getReport(req);

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

            GetReportsForCommitRequest req = new GetReportsForCommitRequest("praesentium", "voluptatibus", "ipsa");            

            GetReportsForCommitResponse res = sdk.commits.getReportsForCommit(req);

            if (res.paginatedReports != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugCommitCommitRequest req = new GetRepositoriesWorkspaceRepoSlugCommitCommitRequest("omnis", "voluptate", "cum");            

            GetRepositoriesWorkspaceRepoSlugCommitCommitResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugCommitCommit(req, new GetRepositoriesWorkspaceRepoSlugCommitCommitSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.commit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugCommitCommitComments

Returns the commit's comments.

This includes both global and inline comments.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest req = new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest("perferendis", "doloremque", "reprehenderit") {{
                q = "ut";
                sort = "maiores";
            }};            

            GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugCommitCommitComments(req, new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedCommitComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId

Returns the specified commit comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest req = new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest(120196L, "corporis", "dolore", "iusto");            

            GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(req, new GetRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.commitComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugCommitsRequest req = new GetRepositoriesWorkspaceRepoSlugCommitsRequest("dicta", "harum");            

            GetRepositoriesWorkspaceRepoSlugCommitsResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugCommits(req, new GetRepositoriesWorkspaceRepoSlugCommitsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedChangeset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest req = new GetRepositoriesWorkspaceRepoSlugCommitsRevisionRequest("enim", "accusamus", "commodi");            

            GetRepositoriesWorkspaceRepoSlugCommitsRevisionResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugCommitsRevision(req, new GetRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedChangeset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDiffSpecRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDiffSpecResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDiffSpecRequest req = new GetRepositoriesWorkspaceRepoSlugDiffSpecRequest("repudiandae", "quae", "ipsum") {{
                binary = false;
                context = 692472L;
                ignoreWhitespace = false;
                merge = false;
                path = "molestias";
                renames = false;
                topic = false;
            }};            

            GetRepositoriesWorkspaceRepoSlugDiffSpecResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugDiffSpec(req, new GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest req = new GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest("excepturi", "pariatur", "modi") {{
                ignoreWhitespace = false;
                merge = false;
                path = "praesentium";
                renames = false;
                topic = false;
            }};            

            GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugDiffstatSpec(req, new GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedDiffstats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugMergeBaseRevspec

Returns the best common ancestor between two commits, specified in a revspec
of 2 commits (e.g. 3a8b42..9ff173).

If more than one best common ancestor exists, only one will be returned. It is
unspecified which will be returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest req = new GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest("rem", "voluptates", "quasi");            

            GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugMergeBaseRevspec(req, new GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.commit != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPatchSpecRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPatchSpecResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugPatchSpecRequest req = new GetRepositoriesWorkspaceRepoSlugPatchSpecRequest("repudiandae", "sint", "veritatis");            

            GetRepositoriesWorkspaceRepoSlugPatchSpecResponse res = sdk.commits.getRepositoriesWorkspaceRepoSlugPatchSpec(req, new GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugCommitCommitApprove

Approve the specified commit as the authenticated user.

This operation is only available to users that have explicit access to
the repository. In contrast, just the fact that a repository is
publicly accessible to users does not give them the ability to approve
commits.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest req = new PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest("itaque", "incidunt", "enim");            

            PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse res = sdk.commits.postRepositoriesWorkspaceRepoSlugCommitCommitApprove(req, new PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.participant != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest req = new PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsRequest(                new java.util.HashMap<String, Object>() {{
                                put("est", "quibusdam");
                            }}, "explicabo", "deserunt", "distinctio");            

            PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsResponse res = sdk.commits.postRepositoriesWorkspaceRepoSlugCommitCommitComments(req, new PostRepositoriesWorkspaceRepoSlugCommitCommitCommentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugCommits

Identical to `GET /repositories/{workspace}/{repo_slug}/commits`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugCommitsRequest req = new PostRepositoriesWorkspaceRepoSlugCommitsRequest("quibusdam", "labore");            

            PostRepositoriesWorkspaceRepoSlugCommitsResponse res = sdk.commits.postRepositoriesWorkspaceRepoSlugCommits(req, new PostRepositoriesWorkspaceRepoSlugCommitsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedChangeset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugCommitsRevision

Identical to `GET /repositories/{workspace}/{repo_slug}/commits/{revision}`,
except that POST allows clients to place the include and exclude
parameters in the request body to avoid URL length issues.

**Note that this resource does NOT support new commit creation.**

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest req = new PostRepositoriesWorkspaceRepoSlugCommitsRevisionRequest("modi", "qui", "aliquid");            

            PostRepositoriesWorkspaceRepoSlugCommitsRevisionResponse res = sdk.commits.postRepositoriesWorkspaceRepoSlugCommitsRevision(req, new PostRepositoriesWorkspaceRepoSlugCommitsRevisionSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedChangeset != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest req = new PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRequest(                new java.util.HashMap<String, Object>() {{
                                put("quos", "perferendis");
                                put("magni", "assumenda");
                                put("ipsam", "alias");
                            }}, 146441L, "dolorum", "excepturi", "tempora");            

            PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdResponse res = sdk.commits.putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentId(req, new PutRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
