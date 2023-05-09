# issues

## Overview

Interact with GitHub Issues.

### Available Operations

* [issuesAddAssignees](#issuesaddassignees) - Add assignees to an issue
* [issuesAddLabels](#issuesaddlabels) - Add labels to an issue
* [issuesCheckUserCanBeAssigned](#issuescheckusercanbeassigned) - Check if a user can be assigned
* [issuesCreate](#issuescreate) - Create an issue
* [issuesCreateComment](#issuescreatecomment) - Create an issue comment
* [issuesCreateLabel](#issuescreatelabel) - Create a label
* [issuesCreateMilestone](#issuescreatemilestone) - Create a milestone
* [issuesDeleteComment](#issuesdeletecomment) - Delete an issue comment
* [issuesDeleteLabel](#issuesdeletelabel) - Delete a label
* [issuesDeleteMilestone](#issuesdeletemilestone) - Delete a milestone
* [issuesGet](#issuesget) - Get an issue
* [issuesGetComment](#issuesgetcomment) - Get an issue comment
* [issuesGetEvent](#issuesgetevent) - Get an issue event
* [issuesGetLabel](#issuesgetlabel) - Get a label
* [issuesGetMilestone](#issuesgetmilestone) - Get a milestone
* [issuesList](#issueslist) - List issues assigned to the authenticated user
* [issuesListAssignees](#issueslistassignees) - List assignees
* [issuesListComments](#issueslistcomments) - List issue comments
* [issuesListCommentsForRepo](#issueslistcommentsforrepo) - List issue comments for a repository
* [issuesListEvents](#issueslistevents) - List issue events
* [issuesListEventsForRepo](#issueslisteventsforrepo) - List issue events for a repository
* [issuesListEventsForTimeline](#issueslisteventsfortimeline) - List timeline events for an issue
* [issuesListForAuthenticatedUser](#issueslistforauthenticateduser) - List user account issues assigned to the authenticated user
* [issuesListForOrg](#issueslistfororg) - List organization issues assigned to the authenticated user
* [issuesListForRepo](#issueslistforrepo) - List repository issues
* [issuesListLabelsForMilestone](#issueslistlabelsformilestone) - List labels for issues in a milestone
* [issuesListLabelsForRepo](#issueslistlabelsforrepo) - List labels for a repository
* [issuesListLabelsOnIssue](#issueslistlabelsonissue) - List labels for an issue
* [issuesListMilestones](#issueslistmilestones) - List milestones
* [issuesLock](#issueslock) - Lock an issue
* [issuesRemoveAllLabels](#issuesremovealllabels) - Remove all labels from an issue
* [issuesRemoveAssignees](#issuesremoveassignees) - Remove assignees from an issue
* [issuesRemoveLabel](#issuesremovelabel) - Remove a label from an issue
* [issuesSetLabels](#issuessetlabels) - Set labels for an issue
* [issuesUnlock](#issuesunlock) - Unlock an issue
* [issuesUpdate](#issuesupdate) - Update an issue
* [issuesUpdateComment](#issuesupdatecomment) - Update an issue comment
* [issuesUpdateLabel](#issuesupdatelabel) - Update a label
* [issuesUpdateMilestone](#issuesupdatemilestone) - Update a milestone

## issuesAddAssignees

Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#add-assignees-to-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesAddAssigneesRequest;
import org.openapis.openapi.models.operations.IssuesAddAssigneesRequestBody;
import org.openapis.openapi.models.operations.IssuesAddAssigneesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesAddAssigneesRequest req = new IssuesAddAssigneesRequest(967795L, "perferendis", "corrupti") {{
                requestBody = new IssuesAddAssigneesRequestBody() {{
                    assignees = new String[]{{
                        add("incidunt"),
                        add("sed"),
                        add("provident"),
                        add("eius"),
                    }};
                }};;
            }};            

            IssuesAddAssigneesResponse res = sdk.issues.issuesAddAssignees(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesAddLabels

Add labels to an issue

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#add-labels-to-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesAddLabelsRequest;
import org.openapis.openapi.models.operations.IssuesAddLabelsRequestBody1;
import org.openapis.openapi.models.operations.IssuesAddLabelsRequestBody3;
import org.openapis.openapi.models.operations.IssuesAddLabelsRequestBody3Labels;
import org.openapis.openapi.models.operations.IssuesAddLabelsRequestBody4;
import org.openapis.openapi.models.operations.IssuesAddLabelsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesAddLabelsRequest req = new IssuesAddLabelsRequest(896762L, "ipsum", "ea") {{
                requestBody = new IssuesAddLabelsRequestBody3() {{
                    labels = new org.openapis.openapi.models.operations.IssuesAddLabelsRequestBody3Labels[]{{
                        add(new IssuesAddLabelsRequestBody3Labels("ex") {{
                            name = "Eddie Goodwin";
                        }}),
                        add(new IssuesAddLabelsRequestBody3Labels("quaerat") {{
                            name = "Ethel Towne";
                        }}),
                        add(new IssuesAddLabelsRequestBody3Labels("error") {{
                            name = "Brittany Tremblay DDS";
                        }}),
                    }};
                }};;
            }};            

            IssuesAddLabelsResponse res = sdk.issues.issuesAddLabels(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesCheckUserCanBeAssigned

Checks if a user has permission to be assigned to an issue in this repository.

If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.

Otherwise a `404` status code is returned.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#check-if-a-user-can-be-assigned>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesCheckUserCanBeAssignedRequest;
import org.openapis.openapi.models.operations.IssuesCheckUserCanBeAssignedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesCheckUserCanBeAssignedRequest req = new IssuesCheckUserCanBeAssignedRequest("veniam", "minima", "recusandae");            

            IssuesCheckUserCanBeAssignedResponse res = sdk.issues.issuesCheckUserCanBeAssigned(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesCreate

Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesCreateRequest;
import org.openapis.openapi.models.operations.IssuesCreateRequestBody;
import org.openapis.openapi.models.operations.IssuesCreateRequestBodyLabels2;
import org.openapis.openapi.models.operations.IssuesCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesCreateRequest req = new IssuesCreateRequest(                new IssuesCreateRequestBody(862319L) {{
                                assignee = "magni";
                                assignees = new String[]{{
                                    add("saepe"),
                                }};
                                body = "numquam";
                                labels = new Object[]{{
                                    add("officiis"),
                                    add("laudantium"),
                                }};
                                milestone = "praesentium";
                            }};, "cum", "laboriosam");            

            IssuesCreateResponse res = sdk.issues.issuesCreate(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesCreateComment

This endpoint triggers [notifications](https://docs.github.com/enterprise-server@3.0/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/enterprise-server@3.0/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesCreateCommentRequest;
import org.openapis.openapi.models.operations.IssuesCreateCommentRequestBody;
import org.openapis.openapi.models.operations.IssuesCreateCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesCreateCommentRequest req = new IssuesCreateCommentRequest(                new IssuesCreateCommentRequestBody("dolorum");, 530089L, "error", "hic");            

            IssuesCreateCommentResponse res = sdk.issues.issuesCreateComment(req);

            if (res.issueComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesCreateLabel

Create a label

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-a-label>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesCreateLabelRequest;
import org.openapis.openapi.models.operations.IssuesCreateLabelRequestBody;
import org.openapis.openapi.models.operations.IssuesCreateLabelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesCreateLabelRequest req = new IssuesCreateLabelRequest(                new IssuesCreateLabelRequestBody("expedita") {{
                                color = "debitis";
                                description = "neque";
                            }};, "dolorum", "nostrum");            

            IssuesCreateLabelResponse res = sdk.issues.issuesCreateLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesCreateMilestone

Create a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#create-a-milestone>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesCreateMilestoneRequest;
import org.openapis.openapi.models.operations.IssuesCreateMilestoneRequestBody;
import org.openapis.openapi.models.operations.IssuesCreateMilestoneRequestBodyStateEnum;
import org.openapis.openapi.models.operations.IssuesCreateMilestoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesCreateMilestoneRequest req = new IssuesCreateMilestoneRequest(                new IssuesCreateMilestoneRequestBody("officia") {{
                                description = "dolorum";
                                dueOn = OffsetDateTime.parse("2021-03-30T03:48:24.857Z");
                                state = IssuesCreateMilestoneRequestBodyStateEnum.OPEN;
                            }};, "atque", "fugit");            

            IssuesCreateMilestoneResponse res = sdk.issues.issuesCreateMilestone(req);

            if (res.milestone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesDeleteComment

Delete an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#delete-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesDeleteCommentRequest;
import org.openapis.openapi.models.operations.IssuesDeleteCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesDeleteCommentRequest req = new IssuesDeleteCommentRequest(282699L, "fugiat", "voluptatem");            

            IssuesDeleteCommentResponse res = sdk.issues.issuesDeleteComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesDeleteLabel

Delete a label

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#delete-a-label>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesDeleteLabelRequest;
import org.openapis.openapi.models.operations.IssuesDeleteLabelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesDeleteLabelRequest req = new IssuesDeleteLabelRequest("culpa", "expedita", "magnam");            

            IssuesDeleteLabelResponse res = sdk.issues.issuesDeleteLabel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesDeleteMilestone

Delete a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#delete-a-milestone>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesDeleteMilestoneRequest;
import org.openapis.openapi.models.operations.IssuesDeleteMilestoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesDeleteMilestoneRequest req = new IssuesDeleteMilestoneRequest(7884L, "esse", "ipsam");            

            IssuesDeleteMilestoneResponse res = sdk.issues.issuesDeleteMilestone(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesGet

The API returns a [`301 Moved Permanently` status](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
[transferred](https://docs.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
to the [`issues`](https://docs.github.com/enterprise-server@3.0/webhooks/event-payloads/#issues) webhook.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesGetRequest;
import org.openapis.openapi.models.operations.IssuesGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesGetRequest req = new IssuesGetRequest(24527L, "voluptatum", "quas");            

            IssuesGetResponse res = sdk.issues.issuesGet(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesGetComment

Get an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesGetCommentRequest;
import org.openapis.openapi.models.operations.IssuesGetCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesGetCommentRequest req = new IssuesGetCommentRequest(922112L, "corporis", "et");            

            IssuesGetCommentResponse res = sdk.issues.issuesGetComment(req);

            if (res.issueComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesGetEvent

Get an issue event

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-an-issue-event>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesGetEventRequest;
import org.openapis.openapi.models.operations.IssuesGetEventResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesGetEventRequest req = new IssuesGetEventRequest(502710L, "ex", "sed");            

            IssuesGetEventResponse res = sdk.issues.issuesGetEvent(req);

            if (res.issueEvent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesGetLabel

Get a label

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-a-label>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesGetLabelRequest;
import org.openapis.openapi.models.operations.IssuesGetLabelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesGetLabelRequest req = new IssuesGetLabelRequest("sit", "vel", "nostrum");            

            IssuesGetLabelResponse res = sdk.issues.issuesGetLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesGetMilestone

Get a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#get-a-milestone>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesGetMilestoneRequest;
import org.openapis.openapi.models.operations.IssuesGetMilestoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesGetMilestoneRequest req = new IssuesGetMilestoneRequest(906172L, "error", "consequatur");            

            IssuesGetMilestoneResponse res = sdk.issues.issuesGetMilestone(req);

            if (res.milestone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesList

List issues assigned to the authenticated user across all visible repositories including owned repositories, member
repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
necessarily assigned to you.


**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issues-assigned-to-the-authenticated-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListFilterEnum;
import org.openapis.openapi.models.operations.IssuesListRequest;
import org.openapis.openapi.models.operations.IssuesListResponse;
import org.openapis.openapi.models.operations.IssuesListSortEnum;
import org.openapis.openapi.models.operations.IssuesListStateEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListRequest req = new IssuesListRequest() {{
                collab = false;
                direction = DirectionEnum.ASC;
                filter = IssuesListFilterEnum.ALL;
                labels = "dolorem";
                orgs = false;
                owned = false;
                page = 690894L;
                perPage = 115703L;
                pulls = false;
                since = OffsetDateTime.parse("2022-06-04T08:15:04.756Z");
                sort = IssuesListSortEnum.CREATED;
                state = IssuesListStateEnum.ALL;
            }};            

            IssuesListResponse res = sdk.issues.issuesList(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListAssignees

Lists the [available assignees](https://docs.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-assignees>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListAssigneesRequest;
import org.openapis.openapi.models.operations.IssuesListAssigneesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListAssigneesRequest req = new IssuesListAssigneesRequest("atque", "laborum") {{
                page = 724148L;
                perPage = 948861L;
            }};            

            IssuesListAssigneesResponse res = sdk.issues.issuesListAssignees(req);

            if (res.simpleUsers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListComments

Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-comments>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListCommentsRequest;
import org.openapis.openapi.models.operations.IssuesListCommentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListCommentsRequest req = new IssuesListCommentsRequest(388867L, "alias", "amet") {{
                page = 647197L;
                perPage = 454860L;
                since = OffsetDateTime.parse("2021-01-21T09:06:52.216Z");
            }};            

            IssuesListCommentsResponse res = sdk.issues.issuesListComments(req);

            if (res.issueComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListCommentsForRepo

By default, Issue Comments are ordered by ascending ID.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-comments-for-a-repository>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListCommentsForRepoDirectionEnum;
import org.openapis.openapi.models.operations.IssuesListCommentsForRepoRequest;
import org.openapis.openapi.models.operations.IssuesListCommentsForRepoResponse;
import org.openapis.openapi.models.shared.SortEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListCommentsForRepoRequest req = new IssuesListCommentsForRepoRequest("provident", "repellendus") {{
                direction = IssuesListCommentsForRepoDirectionEnum.DESC;
                page = 914791L;
                perPage = 16871L;
                since = OffsetDateTime.parse("2021-08-10T13:37:39.961Z");
                sort = SortEnum.CREATED;
            }};            

            IssuesListCommentsForRepoResponse res = sdk.issues.issuesListCommentsForRepo(req);

            if (res.issueComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListEvents

List issue events

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-events>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListEventsRequest;
import org.openapis.openapi.models.operations.IssuesListEventsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListEventsRequest req = new IssuesListEventsRequest(813679L, "fuga", "praesentium") {{
                page = 648598L;
                perPage = 333965L;
            }};            

            IssuesListEventsResponse res = sdk.issues.issuesListEvents(req);

            if (res.issueEventForIssues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListEventsForRepo

List issue events for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-issue-events-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListEventsForRepoRequest;
import org.openapis.openapi.models.operations.IssuesListEventsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListEventsForRepoRequest req = new IssuesListEventsForRepoRequest("voluptatem", "quisquam") {{
                page = 919532L;
                perPage = 97243L;
            }};            

            IssuesListEventsForRepoResponse res = sdk.issues.issuesListEventsForRepo(req);

            if (res.issueEvents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListEventsForTimeline

List timeline events for an issue

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-timeline-events-for-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListEventsForTimelineRequest;
import org.openapis.openapi.models.operations.IssuesListEventsForTimelineResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListEventsForTimelineRequest req = new IssuesListEventsForTimelineRequest(542457L, "reprehenderit", "asperiores") {{
                page = 519952L;
                perPage = 383103L;
            }};            

            IssuesListEventsForTimelineResponse res = sdk.issues.issuesListEventsForTimeline(req);

            if (res.timelineIssueEvents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListForAuthenticatedUser

List issues across owned and member repositories assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListForAuthenticatedUserFilterEnum;
import org.openapis.openapi.models.operations.IssuesListForAuthenticatedUserRequest;
import org.openapis.openapi.models.operations.IssuesListForAuthenticatedUserResponse;
import org.openapis.openapi.models.operations.IssuesListForAuthenticatedUserSortEnum;
import org.openapis.openapi.models.operations.IssuesListForAuthenticatedUserStateEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListForAuthenticatedUserRequest req = new IssuesListForAuthenticatedUserRequest() {{
                direction = DirectionEnum.DESC;
                filter = IssuesListForAuthenticatedUserFilterEnum.REPOS;
                labels = "et";
                page = 461007L;
                perPage = 227759L;
                since = OffsetDateTime.parse("2021-10-08T17:16:29.459Z");
                sort = IssuesListForAuthenticatedUserSortEnum.UPDATED;
                state = IssuesListForAuthenticatedUserStateEnum.CLOSED;
            }};            

            IssuesListForAuthenticatedUserResponse res = sdk.issues.issuesListForAuthenticatedUser(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListForOrg

List issues in an organization assigned to the authenticated user.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListForOrgFilterEnum;
import org.openapis.openapi.models.operations.IssuesListForOrgRequest;
import org.openapis.openapi.models.operations.IssuesListForOrgResponse;
import org.openapis.openapi.models.operations.IssuesListForOrgSortEnum;
import org.openapis.openapi.models.operations.IssuesListForOrgStateEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListForOrgRequest req = new IssuesListForOrgRequest("officiis") {{
                direction = DirectionEnum.DESC;
                filter = IssuesListForOrgFilterEnum.ALL;
                labels = "natus";
                page = 328303L;
                perPage = 133461L;
                since = OffsetDateTime.parse("2022-01-08T02:07:04.894Z");
                sort = IssuesListForOrgSortEnum.UPDATED;
                state = IssuesListForOrgStateEnum.ALL;
            }};            

            IssuesListForOrgResponse res = sdk.issues.issuesListForOrg(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListForRepo

List issues in a repository.

**Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
request id, use the "[List pull requests](https://docs.github.com/enterprise-server@3.0/rest/reference/pulls#list-pull-requests)" endpoint.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-repository-issues>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListForRepoRequest;
import org.openapis.openapi.models.operations.IssuesListForRepoResponse;
import org.openapis.openapi.models.operations.IssuesListForRepoSortEnum;
import org.openapis.openapi.models.operations.IssuesListForRepoStateEnum;
import org.openapis.openapi.models.shared.DirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListForRepoRequest req = new IssuesListForRepoRequest("error", "blanditiis") {{
                assignee = "suscipit";
                creator = "repudiandae";
                direction = DirectionEnum.DESC;
                labels = "atque";
                mentioned = "sunt";
                milestone = "recusandae";
                page = 680697L;
                perPage = 829898L;
                since = OffsetDateTime.parse("2022-01-12T13:48:39.596Z");
                sort = IssuesListForRepoSortEnum.CREATED;
                state = IssuesListForRepoStateEnum.ALL;
            }};            

            IssuesListForRepoResponse res = sdk.issues.issuesListForRepo(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListLabelsForMilestone

List labels for issues in a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-labels-for-issues-in-a-milestone>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListLabelsForMilestoneRequest;
import org.openapis.openapi.models.operations.IssuesListLabelsForMilestoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListLabelsForMilestoneRequest req = new IssuesListLabelsForMilestoneRequest(116098L, "accusantium", "beatae") {{
                page = 174772L;
                perPage = 316488L;
            }};            

            IssuesListLabelsForMilestoneResponse res = sdk.issues.issuesListLabelsForMilestone(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListLabelsForRepo

List labels for a repository

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-labels-for-a-repository>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListLabelsForRepoRequest;
import org.openapis.openapi.models.operations.IssuesListLabelsForRepoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListLabelsForRepoRequest req = new IssuesListLabelsForRepoRequest("laboriosam", "velit") {{
                page = 952143L;
                perPage = 562783L;
            }};            

            IssuesListLabelsForRepoResponse res = sdk.issues.issuesListLabelsForRepo(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListLabelsOnIssue

List labels for an issue

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-labels-for-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListLabelsOnIssueRequest;
import org.openapis.openapi.models.operations.IssuesListLabelsOnIssueResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListLabelsOnIssueRequest req = new IssuesListLabelsOnIssueRequest(300029L, "saepe", "consequuntur") {{
                page = 580107L;
                perPage = 886305L;
            }};            

            IssuesListLabelsOnIssueResponse res = sdk.issues.issuesListLabelsOnIssue(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesListMilestones

List milestones

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#list-milestones>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesListMilestonesDirectionEnum;
import org.openapis.openapi.models.operations.IssuesListMilestonesRequest;
import org.openapis.openapi.models.operations.IssuesListMilestonesResponse;
import org.openapis.openapi.models.operations.IssuesListMilestonesSortEnum;
import org.openapis.openapi.models.operations.IssuesListMilestonesStateEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesListMilestonesRequest req = new IssuesListMilestonesRequest("perspiciatis", "in") {{
                direction = IssuesListMilestonesDirectionEnum.ASC;
                page = 907876L;
                perPage = 580887L;
                sort = IssuesListMilestonesSortEnum.DUE_ON;
                state = IssuesListMilestonesStateEnum.OPEN;
            }};            

            IssuesListMilestonesResponse res = sdk.issues.issuesListMilestones(req);

            if (res.milestones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesLock

Users with push access can lock an issue or pull request's conversation.

Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/enterprise-server@3.0/rest/overview/resources-in-the-rest-api#http-verbs)."

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#lock-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesLockRequest;
import org.openapis.openapi.models.operations.IssuesLockRequestBody;
import org.openapis.openapi.models.operations.IssuesLockRequestBodyLockReasonEnum;
import org.openapis.openapi.models.operations.IssuesLockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesLockRequest req = new IssuesLockRequest(661118L, "quis", "reprehenderit") {{
                requestBody = new IssuesLockRequestBody() {{
                    lockReason = IssuesLockRequestBodyLockReasonEnum.RESOLVED;
                }};;
            }};            

            IssuesLockResponse res = sdk.issues.issuesLock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesRemoveAllLabels

Remove all labels from an issue

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#remove-all-labels-from-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesRemoveAllLabelsRequest;
import org.openapis.openapi.models.operations.IssuesRemoveAllLabelsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesRemoveAllLabelsRequest req = new IssuesRemoveAllLabelsRequest(76486L, "corporis", "quidem");            

            IssuesRemoveAllLabelsResponse res = sdk.issues.issuesRemoveAllLabels(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesRemoveAssignees

Removes one or more assignees from an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#remove-assignees-from-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesRemoveAssigneesRequest;
import org.openapis.openapi.models.operations.IssuesRemoveAssigneesRequestBody;
import org.openapis.openapi.models.operations.IssuesRemoveAssigneesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesRemoveAssigneesRequest req = new IssuesRemoveAssigneesRequest(910994L, "non", "vero") {{
                requestBody = new IssuesRemoveAssigneesRequestBody() {{
                    assignees = new String[]{{
                        add("iure"),
                    }};
                }};;
            }};            

            IssuesRemoveAssigneesResponse res = sdk.issues.issuesRemoveAssignees(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesRemoveLabel

Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#remove-a-label-from-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesRemoveLabelRequest;
import org.openapis.openapi.models.operations.IssuesRemoveLabelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesRemoveLabelRequest req = new IssuesRemoveLabelRequest(59944L, "totam", "quae", "molestiae");            

            IssuesRemoveLabelResponse res = sdk.issues.issuesRemoveLabel(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesSetLabels

Removes any previous labels and sets the new labels for an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#set-labels-for-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesSetLabelsRequest;
import org.openapis.openapi.models.operations.IssuesSetLabelsRequestBody1;
import org.openapis.openapi.models.operations.IssuesSetLabelsRequestBody3;
import org.openapis.openapi.models.operations.IssuesSetLabelsRequestBody3Labels;
import org.openapis.openapi.models.operations.IssuesSetLabelsRequestBody4;
import org.openapis.openapi.models.operations.IssuesSetLabelsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesSetLabelsRequest req = new IssuesSetLabelsRequest(907733L, "qui", "cum") {{
                requestBody = new IssuesSetLabelsRequestBody3() {{
                    labels = new org.openapis.openapi.models.operations.IssuesSetLabelsRequestBody3Labels[]{{
                        add(new IssuesSetLabelsRequestBody3Labels("aliquam") {{
                            name = "Maggie Rau";
                        }}),
                        add(new IssuesSetLabelsRequestBody3Labels("nihil") {{
                            name = "Winifred Abernathy";
                        }}),
                        add(new IssuesSetLabelsRequestBody3Labels("dolores") {{
                            name = "Shane Abshire";
                        }}),
                        add(new IssuesSetLabelsRequestBody3Labels("quae") {{
                            name = "Warren Greenholt";
                        }}),
                    }};
                }};;
            }};            

            IssuesSetLabelsResponse res = sdk.issues.issuesSetLabels(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesUnlock

Users with push access can unlock an issue's conversation.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#unlock-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesUnlockRequest;
import org.openapis.openapi.models.operations.IssuesUnlockResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesUnlockRequest req = new IssuesUnlockRequest(925703L, "omnis", "quaerat");            

            IssuesUnlockResponse res = sdk.issues.issuesUnlock(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesUpdate

Issue owners and users with push access can edit an issue.

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues/#update-an-issue>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesUpdateRequest;
import org.openapis.openapi.models.operations.IssuesUpdateRequestBody;
import org.openapis.openapi.models.operations.IssuesUpdateRequestBodyLabels2;
import org.openapis.openapi.models.operations.IssuesUpdateRequestBodyStateEnum;
import org.openapis.openapi.models.operations.IssuesUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesUpdateRequest req = new IssuesUpdateRequest(477646L, "ex", "ut") {{
                requestBody = new IssuesUpdateRequestBody() {{
                    assignee = "culpa";
                    assignees = new String[]{{
                        add("debitis"),
                    }};
                    body = "laudantium";
                    labels = new Object[]{{
                        add("recusandae"),
                        add("provident"),
                    }};
                    milestone = "eum";
                    state = IssuesUpdateRequestBodyStateEnum.CLOSED;
                    title = 133439L;
                }};;
            }};            

            IssuesUpdateResponse res = sdk.issues.issuesUpdate(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesUpdateComment

Update an issue comment

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#update-an-issue-comment>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesUpdateCommentRequest;
import org.openapis.openapi.models.operations.IssuesUpdateCommentRequestBody;
import org.openapis.openapi.models.operations.IssuesUpdateCommentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesUpdateCommentRequest req = new IssuesUpdateCommentRequest(                new IssuesUpdateCommentRequestBody("ullam");, 96804L, "animi", "nostrum");            

            IssuesUpdateCommentResponse res = sdk.issues.issuesUpdateComment(req);

            if (res.issueComment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesUpdateLabel

Update a label

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#update-a-label>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesUpdateLabelRequest;
import org.openapis.openapi.models.operations.IssuesUpdateLabelRequestBody;
import org.openapis.openapi.models.operations.IssuesUpdateLabelResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesUpdateLabelRequest req = new IssuesUpdateLabelRequest("mollitia", "provident", "possimus") {{
                requestBody = new IssuesUpdateLabelRequestBody() {{
                    color = "animi";
                    description = "ex";
                    newName = "aliquid";
                }};;
            }};            

            IssuesUpdateLabelResponse res = sdk.issues.issuesUpdateLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuesUpdateMilestone

Update a milestone

API method documentation
<https://docs.github.com/enterprise-server@3.0/rest/reference/issues#update-a-milestone>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuesUpdateMilestoneRequest;
import org.openapis.openapi.models.operations.IssuesUpdateMilestoneRequestBody;
import org.openapis.openapi.models.operations.IssuesUpdateMilestoneRequestBodyStateEnum;
import org.openapis.openapi.models.operations.IssuesUpdateMilestoneResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            IssuesUpdateMilestoneRequest req = new IssuesUpdateMilestoneRequest(37565L, "repellat", "doloribus") {{
                requestBody = new IssuesUpdateMilestoneRequestBody() {{
                    description = "ullam";
                    dueOn = OffsetDateTime.parse("2022-04-12T16:28:39.239Z");
                    state = IssuesUpdateMilestoneRequestBodyStateEnum.CLOSED;
                    title = "Miss";
                }};;
            }};            

            IssuesUpdateMilestoneResponse res = sdk.issues.issuesUpdateMilestone(req);

            if (res.milestone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
