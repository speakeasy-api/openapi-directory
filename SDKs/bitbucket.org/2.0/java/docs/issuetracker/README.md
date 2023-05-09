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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest req = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest("nobis", "eum", "vero");            

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse res = sdk.issueTracker.deleteRepositoriesWorkspaceRepoSlugIssuesIssueId(req, new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath

Deletes an attachment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest req = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest("aspernatur", "architecto", "magnam", "et");            

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse res = sdk.issueTracker.deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(req, new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity() {{
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

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId

Deletes the specified comment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest req = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest(569965L, "ullam", "provident", "quos");            

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse res = sdk.issueTracker.deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req, new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity() {{
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

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote

Retract your vote.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest req = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest("sint", "accusantium", "mollitia");            

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse res = sdk.issueTracker.deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req, new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity() {{
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

## deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch

Stop watching this issue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse;
import org.openapis.openapi.models.operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest req = new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest("reiciendis", "mollitia", "ad");            

            DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse res = sdk.issueTracker.deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req, new DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.error != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugComponents

Returns the components that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugComponentsRequest req = new GetRepositoriesWorkspaceRepoSlugComponentsRequest("eum", "dolor");            

            GetRepositoriesWorkspaceRepoSlugComponentsResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugComponents(req, new GetRepositoriesWorkspaceRepoSlugComponentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedComponents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugComponentsComponentId

Returns the specified issue tracker component object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest req = new GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest(896547L, "odit", "nemo");            

            GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugComponentsComponentId(req, new GetRepositoriesWorkspaceRepoSlugComponentsComponentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.component != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugIssues

Returns the issues in the issue tracker.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesRequest("quasi", "iure");            

            GetRepositoriesWorkspaceRepoSlugIssuesResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssues(req, new GetRepositoriesWorkspaceRepoSlugIssuesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedIssues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest("doloribus", "debitis", "eius", "maxime");            

            GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip(req, new GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issueJobStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesImportRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesImportRequest("deleniti", "facilis");            

            GetRepositoriesWorkspaceRepoSlugIssuesImportResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesImport(req, new GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issueJobStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueId

Returns the specified issue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest("in", "architecto", "architecto");            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueId(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments

Returns all attachments for this issue.

This returns the files' meta data. This does not return the files'
actual contents.

The files are always ordered by their upload date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest("repudiandae", "ullam", "expedita");            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedIssueAttachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest("nihil", "repellat", "quibusdam", "sed");            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity() {{
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest("saepe", "pariatur", "accusantium") {{
                q = "consequuntur";
                sort = "praesentium";
            }};            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedLogEntries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId

Returns the specified issue change object.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest("natus", "magni", "sunt", "quo");            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issueChange != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest("illum", "pariatur", "maxime") {{
                q = "ea";
            }};            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedIssueComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId

Returns the specified issue comment object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest(569101L, "odit", "ea", "accusantium");            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issueComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote

Check whether the authenticated user has voted for this issue.
A 204 status code indicates that the user has voted, while a 404
implies they haven't.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest("ab", "maiores", "quidem");            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.error != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch

Indicated whether or not the authenticated user is watching this
issue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest req = new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest("ipsam", "voluptate", "autem");            

            GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req, new GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.error != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugMilestones

Returns the milestones that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugMilestonesRequest req = new GetRepositoriesWorkspaceRepoSlugMilestonesRequest("nam", "eaque");            

            GetRepositoriesWorkspaceRepoSlugMilestonesResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugMilestones(req, new GetRepositoriesWorkspaceRepoSlugMilestonesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedMilestones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId

Returns the specified issue tracker milestone object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest req = new GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest(866383L, "nemo", "voluptatibus");            

            GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId(req, new GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.milestone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugVersions

Returns the versions that have been defined in the issue tracker.

This resource is only available on repositories that have the issue
tracker enabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugVersionsRequest req = new GetRepositoriesWorkspaceRepoSlugVersionsRequest("perferendis", "fugiat");            

            GetRepositoriesWorkspaceRepoSlugVersionsResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugVersions(req, new GetRepositoriesWorkspaceRepoSlugVersionsSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedVersions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRepositoriesWorkspaceRepoSlugVersionsVersionId

Returns the specified issue tracker version object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse;
import org.openapis.openapi.models.operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest req = new GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest("amet", 11714L, "cumque");            

            GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse res = sdk.issueTracker.getRepositoriesWorkspaceRepoSlugVersionsVersionId(req, new GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.version != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugIssues

Creates a new issue.

This call requires authentication. Private repositories or private
issue trackers require the caller to authenticate with an account that
has appropriate authorization.

The authenticated user is used for the issue's `reporter` field.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugIssuesRequest req = new PostRepositoriesWorkspaceRepoSlugIssuesRequest(                new java.util.HashMap<String, Object>() {{
                                put("hic", "libero");
                                put("nobis", "dolores");
                            }}, "quis", "totam");            

            PostRepositoriesWorkspaceRepoSlugIssuesResponse res = sdk.issueTracker.postRepositoriesWorkspaceRepoSlugIssues(req, new PostRepositoriesWorkspaceRepoSlugIssuesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugIssuesExportRequest req = new PostRepositoriesWorkspaceRepoSlugIssuesExportRequest("dignissimos", "eaque") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nesciunt", "eos");
                    put("perferendis", "dolores");
                }};
            }};            

            PostRepositoriesWorkspaceRepoSlugIssuesExportResponse res = sdk.issueTracker.postRepositoriesWorkspaceRepoSlugIssuesExport(req, new PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity() {{
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugIssuesImportRequest req = new PostRepositoriesWorkspaceRepoSlugIssuesImportRequest("minus", "quam");            

            PostRepositoriesWorkspaceRepoSlugIssuesImportResponse res = sdk.issueTracker.postRepositoriesWorkspaceRepoSlugIssuesImport(req, new PostRepositoriesWorkspaceRepoSlugIssuesImportSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issueJobStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments

Upload new issue attachments.

To upload files, perform a `multipart/form-data` POST containing one
or more file fields.

When a file is uploaded with the same name as an existing attachment,
then the existing file will be replaced.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest req = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest("dolor", "vero", "nostrum");            

            PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse res = sdk.issueTracker.postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(req, new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsSecurity() {{
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest req = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest(                new java.util.HashMap<String, Object>() {{
                                put("recusandae", "omnis");
                                put("facilis", "perspiciatis");
                                put("voluptatem", "porro");
                                put("consequuntur", "blanditiis");
                            }}, "error", "eaque", "occaecati");            

            PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse res = sdk.issueTracker.postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(req, new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issueChange != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse;
import org.openapis.openapi.models.operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest req = new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest(                new java.util.HashMap<String, Object>() {{
                                put("adipisci", "asperiores");
                                put("earum", "modi");
                                put("iste", "dolorum");
                            }}, "deleniti", "pariatur", "provident");            

            PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse res = sdk.issueTracker.postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(req, new PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity() {{
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest req = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest("nobis", "libero", "delectus");            

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse res = sdk.issueTracker.putRepositoriesWorkspaceRepoSlugIssuesIssueId(req, new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest req = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest(                new java.util.HashMap<String, Object>() {{
                                put("quos", "aliquid");
                                put("dolorem", "dolorem");
                            }}, 222443L, "qui", "ipsum", "hic");            

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse res = sdk.issueTracker.putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req, new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.issueComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote

Vote for this issue.

To cast your vote, do an empty PUT. The 204 status code indicates that
the operation was successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest req = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest("excepturi", "cum", "voluptate");            

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse res = sdk.issueTracker.putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req, new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.error != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch

Start watching this issue.

To start watching this issue, do an empty PUT. The 204 status code
indicates that the operation was successful.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse;
import org.openapis.openapi.models.operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest req = new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest("dignissimos", "reiciendis", "amet");            

            PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse res = sdk.issueTracker.putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req, new PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity() {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.error != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
