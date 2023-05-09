# issue

### Available Operations

* [issueAddLabel](#issueaddlabel) - Add a label to an issue
* [issueAddSubscription](#issueaddsubscription) - Subscribe user to issue
* [issueAddTime](#issueaddtime) - Add tracked time to a issue
* [issueCheckSubscription](#issuechecksubscription) - Check if user is subscribed to an issue
* [issueClearLabels](#issueclearlabels) - Remove all labels from an issue
* [issueCreateComment](#issuecreatecomment) - Add a comment to an issue
* [issueCreateIssue](#issuecreateissue) - Create an issue. If using deadline only the date will be taken into account, and time of day ignored.
* [issueCreateIssueAttachment](#issuecreateissueattachment) - Create an issue attachment
* [issueCreateIssueBlockingJson](#issuecreateissueblockingjson) - Block the issue given in the body by the issue in path
* [issueCreateIssueBlockingRaw](#issuecreateissueblockingraw) - Block the issue given in the body by the issue in path
* [issueCreateIssueCommentAttachment](#issuecreateissuecommentattachment) - Create a comment attachment
* [issueCreateIssueDependenciesJson](#issuecreateissuedependenciesjson) - Make the issue in the url depend on the issue in the form.
* [issueCreateIssueDependenciesRaw](#issuecreateissuedependenciesraw) - Make the issue in the url depend on the issue in the form.
* [issueCreateLabel](#issuecreatelabel) - Create a label
* [issueCreateMilestone](#issuecreatemilestone) - Create a milestone
* [issueDelete](#issuedelete) - Delete an issue
* [issueDeleteComment](#issuedeletecomment) - Delete a comment
* [~~issueDeleteCommentDeprecated~~](#issuedeletecommentdeprecated) - Delete a comment :warning: **Deprecated**
* [issueDeleteCommentReaction](#issuedeletecommentreaction) - Remove a reaction from a comment of an issue
* [issueDeleteIssueAttachment](#issuedeleteissueattachment) - Delete an issue attachment
* [issueDeleteIssueCommentAttachment](#issuedeleteissuecommentattachment) - Delete a comment attachment
* [issueDeleteIssueReaction](#issuedeleteissuereaction) - Remove a reaction from an issue
* [issueDeleteLabel](#issuedeletelabel) - Delete a label
* [issueDeleteMilestone](#issuedeletemilestone) - Delete a milestone
* [issueDeleteStopWatch](#issuedeletestopwatch) - Delete an issue's existing stopwatch.
* [issueDeleteSubscription](#issuedeletesubscription) - Unsubscribe user from issue
* [issueDeleteTime](#issuedeletetime) - Delete specific tracked time
* [issueEditComment](#issueeditcomment) - Edit a comment
* [~~issueEditCommentDeprecated~~](#issueeditcommentdeprecated) - Edit a comment :warning: **Deprecated**
* [issueEditIssue](#issueeditissue) - Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.
* [issueEditIssueAttachment](#issueeditissueattachment) - Edit an issue attachment
* [issueEditIssueCommentAttachment](#issueeditissuecommentattachment) - Edit a comment attachment
* [issueEditIssueDeadline](#issueeditissuedeadline) - Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.
* [issueEditLabel](#issueeditlabel) - Update a label
* [issueEditMilestone](#issueeditmilestone) - Update a milestone
* [issueGetComment](#issuegetcomment) - Get a comment
* [issueGetCommentReactions](#issuegetcommentreactions) - Get a list of reactions from a comment of an issue
* [issueGetComments](#issuegetcomments) - List all comments on an issue
* [issueGetCommentsAndTimeline](#issuegetcommentsandtimeline) - List all comments and events on an issue
* [issueGetIssue](#issuegetissue) - Get an issue
* [issueGetIssueAttachment](#issuegetissueattachment) - Get an issue attachment
* [issueGetIssueCommentAttachment](#issuegetissuecommentattachment) - Get a comment attachment
* [issueGetIssueReactions](#issuegetissuereactions) - Get a list reactions of an issue
* [issueGetLabel](#issuegetlabel) - Get a single label
* [issueGetLabels](#issuegetlabels) - Get an issue's labels
* [issueGetMilestone](#issuegetmilestone) - Get a milestone
* [issueGetMilestonesList](#issuegetmilestoneslist) - Get all of a repository's opened milestones
* [issueGetRepoComments](#issuegetrepocomments) - List all comments in a repository
* [issueListBlocks](#issuelistblocks) - List issues that are blocked by this issue
* [issueListIssueAttachments](#issuelistissueattachments) - List issue's attachments
* [issueListIssueCommentAttachments](#issuelistissuecommentattachments) - List comment's attachments
* [issueListIssueDependencies](#issuelistissuedependencies) - List an issue's dependencies, i.e all issues that block this issue.
* [issueListIssues](#issuelistissues) - List a repository's issues
* [issueListLabels](#issuelistlabels) - Get all of a repository's labels
* [issuePostCommentReaction](#issuepostcommentreaction) - Add a reaction to a comment of an issue
* [issuePostIssueReaction](#issuepostissuereaction) - Add a reaction to an issue
* [issueRemoveIssueBlockingJson](#issueremoveissueblockingjson) - Unblock the issue given in the body by the issue in path
* [issueRemoveIssueBlockingRaw](#issueremoveissueblockingraw) - Unblock the issue given in the body by the issue in path
* [issueRemoveIssueDependenciesJson](#issueremoveissuedependenciesjson) - Remove an issue dependency
* [issueRemoveIssueDependenciesRaw](#issueremoveissuedependenciesraw) - Remove an issue dependency
* [issueRemoveLabel](#issueremovelabel) - Remove a label from an issue
* [issueReplaceLabels](#issuereplacelabels) - Replace an issue's labels
* [issueResetTime](#issueresettime) - Reset a tracked time of an issue
* [issueSearchIssues](#issuesearchissues) - Search for issues across the repositories that the user has access to
* [issueStartStopWatch](#issuestartstopwatch) - Start stopwatch on an issue.
* [issueStopStopWatch](#issuestopstopwatch) - Stop an issue's existing stopwatch.
* [issueSubscriptions](#issuesubscriptions) - Get users who subscribed on an issue.
* [issueTrackedTimes](#issuetrackedtimes) - List an issue's tracked times

## issueAddLabel

Add a label to an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueAddLabelRequest;
import org.openapis.openapi.models.operations.IssueAddLabelResponse;
import org.openapis.openapi.models.shared.IssueLabelsOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueAddLabelRequest req = new IssueAddLabelRequest(652790L, "dolorem", "culpa") {{
                issueLabelsOption = new IssueLabelsOption() {{
                    labels = new Long[]{{
                        add(995300L),
                    }};
                }};;
            }};            

            IssueAddLabelResponse res = sdk.issue.issueAddLabel(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueAddSubscription

Subscribe user to issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueAddSubscriptionRequest;
import org.openapis.openapi.models.operations.IssueAddSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueAddSubscriptionRequest req = new IssueAddSubscriptionRequest(653108L, "occaecati", "numquam", "commodi");            

            IssueAddSubscriptionResponse res = sdk.issue.issueAddSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueAddTime

Add tracked time to a issue

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueAddTimeRequest;
import org.openapis.openapi.models.operations.IssueAddTimeResponse;
import org.openapis.openapi.models.shared.AddTimeOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueAddTimeRequest req = new IssueAddTimeRequest(466311L, "molestiae", "velit") {{
                addTimeOption = new AddTimeOption(623510L) {{
                    created = OffsetDateTime.parse("2022-08-30T15:03:11.112Z");
                    userName = "Bernie.Padberg";
                }};;
            }};            

            IssueAddTimeResponse res = sdk.issue.issueAddTime(req);

            if (res.trackedTime != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCheckSubscription

Check if user is subscribed to an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCheckSubscriptionRequest;
import org.openapis.openapi.models.operations.IssueCheckSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCheckSubscriptionRequest req = new IssueCheckSubscriptionRequest(138183L, "quo", "sequi");            

            IssueCheckSubscriptionResponse res = sdk.issue.issueCheckSubscription(req);

            if (res.watchInfo != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueClearLabels

Remove all labels from an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueClearLabelsRequest;
import org.openapis.openapi.models.operations.IssueClearLabelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueClearLabelsRequest req = new IssueClearLabelsRequest(949572L, "ipsam", "id");            

            IssueClearLabelsResponse res = sdk.issue.issueClearLabels(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateComment

Add a comment to an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateCommentRequest;
import org.openapis.openapi.models.operations.IssueCreateCommentResponse;
import org.openapis.openapi.models.shared.CreateIssueCommentOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateCommentRequest req = new IssueCreateCommentRequest(820994L, "aut", "quasi") {{
                createIssueCommentOption = new CreateIssueCommentOption("error");;
            }};            

            IssueCreateCommentResponse res = sdk.issue.issueCreateComment(req);

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateIssue

Create an issue. If using deadline only the date will be taken into account, and time of day ignored.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateIssueRequest;
import org.openapis.openapi.models.operations.IssueCreateIssueResponse;
import org.openapis.openapi.models.shared.CreateIssueOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateIssueRequest req = new IssueCreateIssueRequest("temporibus", "laborum") {{
                createIssueOption = new CreateIssueOption("quasi") {{
                    assignee = "reiciendis";
                    assignees = new String[]{{
                        add("vero"),
                        add("nihil"),
                        add("praesentium"),
                        add("voluptatibus"),
                    }};
                    body = "ipsa";
                    closed = false;
                    dueDate = OffsetDateTime.parse("2022-02-05T15:41:25.512Z");
                    labels = new Long[]{{
                        add(19987L),
                        add(39187L),
                        add(441711L),
                    }};
                    milestone = 282807L;
                    ref = "maiores";
                }};;
            }};            

            IssueCreateIssueResponse res = sdk.issue.issueCreateIssue(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateIssueAttachment

Create an issue attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateIssueAttachmentRequest;
import org.openapis.openapi.models.operations.IssueCreateIssueAttachmentRequestBody;
import org.openapis.openapi.models.operations.IssueCreateIssueAttachmentRequestBodyAttachment;
import org.openapis.openapi.models.operations.IssueCreateIssueAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateIssueAttachmentRequest req = new IssueCreateIssueAttachmentRequest(                new IssueCreateIssueAttachmentRequestBody(                new IssueCreateIssueAttachmentRequestBodyAttachment("dicta", "corporis".getBytes()););, 296140L, "iusto", "dicta") {{
                name = "Bill Thompson";
            }};            

            IssueCreateIssueAttachmentResponse res = sdk.issue.issueCreateIssueAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateIssueBlockingJson

Block the issue given in the body by the issue in path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateIssueBlockingJsonRequest;
import org.openapis.openapi.models.operations.IssueCreateIssueBlockingJsonResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateIssueBlockingJsonRequest req = new IssueCreateIssueBlockingJsonRequest("quae", "ipsum", "quidem") {{
                issueMeta = new IssueMeta() {{
                    index = 565189L;
                    owner = "excepturi";
                    repo = "pariatur";
                }};;
            }};            

            IssueCreateIssueBlockingJsonResponse res = sdk.issue.issueCreateIssueBlockingJson(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateIssueBlockingRaw

Block the issue given in the body by the issue in path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateIssueBlockingRawRequest;
import org.openapis.openapi.models.operations.IssueCreateIssueBlockingRawResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateIssueBlockingRawRequest req = new IssueCreateIssueBlockingRawRequest("modi", "praesentium", "rem") {{
                requestBody = "voluptates".getBytes();
            }};            

            IssueCreateIssueBlockingRawResponse res = sdk.issue.issueCreateIssueBlockingRaw(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateIssueCommentAttachment

Create a comment attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateIssueCommentAttachmentRequest;
import org.openapis.openapi.models.operations.IssueCreateIssueCommentAttachmentRequestBody;
import org.openapis.openapi.models.operations.IssueCreateIssueCommentAttachmentRequestBodyAttachment;
import org.openapis.openapi.models.operations.IssueCreateIssueCommentAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateIssueCommentAttachmentRequest req = new IssueCreateIssueCommentAttachmentRequest(                new IssueCreateIssueCommentAttachmentRequestBody(                new IssueCreateIssueCommentAttachmentRequestBodyAttachment("quasi", "repudiandae".getBytes()););, 575947L, "veritatis", "itaque") {{
                name = "Erin Altenwerth";
            }};            

            IssueCreateIssueCommentAttachmentResponse res = sdk.issue.issueCreateIssueCommentAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateIssueDependenciesJson

Make the issue in the url depend on the issue in the form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateIssueDependenciesJsonRequest;
import org.openapis.openapi.models.operations.IssueCreateIssueDependenciesJsonResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateIssueDependenciesJsonRequest req = new IssueCreateIssueDependenciesJsonRequest("explicabo", "deserunt", "distinctio") {{
                issueMeta = new IssueMeta() {{
                    index = 841386L;
                    owner = "labore";
                    repo = "modi";
                }};;
            }};            

            IssueCreateIssueDependenciesJsonResponse res = sdk.issue.issueCreateIssueDependenciesJson(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateIssueDependenciesRaw

Make the issue in the url depend on the issue in the form.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateIssueDependenciesRawRequest;
import org.openapis.openapi.models.operations.IssueCreateIssueDependenciesRawResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateIssueDependenciesRawRequest req = new IssueCreateIssueDependenciesRawRequest("qui", "aliquid", "cupiditate") {{
                requestBody = "quos".getBytes();
            }};            

            IssueCreateIssueDependenciesRawResponse res = sdk.issue.issueCreateIssueDependenciesRaw(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateLabel

Create a label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateLabelRequest;
import org.openapis.openapi.models.operations.IssueCreateLabelResponse;
import org.openapis.openapi.models.shared.CreateLabelOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateLabelRequest req = new IssueCreateLabelRequest("perferendis", "magni") {{
                createLabelOption = new CreateLabelOption("#00aabb", "assumenda") {{
                    description = "ipsam";
                    exclusive = false;
                }};;
            }};            

            IssueCreateLabelResponse res = sdk.issue.issueCreateLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueCreateMilestone

Create a milestone

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueCreateMilestoneRequest;
import org.openapis.openapi.models.operations.IssueCreateMilestoneResponse;
import org.openapis.openapi.models.shared.CreateMilestoneOption;
import org.openapis.openapi.models.shared.CreateMilestoneOptionStateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueCreateMilestoneRequest req = new IssueCreateMilestoneRequest("alias", "fugit") {{
                createMilestoneOption = new CreateMilestoneOption() {{
                    description = "dolorum";
                    dueOn = OffsetDateTime.parse("2022-06-17T21:27:36.672Z");
                    state = CreateMilestoneOptionStateEnum.CLOSED;
                    title = "Miss";
                }};;
            }};            

            IssueCreateMilestoneResponse res = sdk.issue.issueCreateMilestone(req);

            if (res.milestone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDelete

Delete an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteRequest;
import org.openapis.openapi.models.operations.IssueDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteRequest req = new IssueDeleteRequest(288476L, "delectus", "eum");            

            IssueDeleteResponse res = sdk.issue.issueDelete(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteComment

Delete a comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteCommentRequest;
import org.openapis.openapi.models.operations.IssueDeleteCommentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteCommentRequest req = new IssueDeleteCommentRequest(248753L, "eligendi", "sint");            

            IssueDeleteCommentResponse res = sdk.issue.issueDeleteComment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~issueDeleteCommentDeprecated~~

Delete a comment

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteCommentDeprecatedRequest;
import org.openapis.openapi.models.operations.IssueDeleteCommentDeprecatedResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteCommentDeprecatedRequest req = new IssueDeleteCommentDeprecatedRequest(396098L, 592042L, "necessitatibus", "sint");            

            IssueDeleteCommentDeprecatedResponse res = sdk.issue.issueDeleteCommentDeprecated(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteCommentReaction

Remove a reaction from a comment of an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteCommentReactionRequest;
import org.openapis.openapi.models.operations.IssueDeleteCommentReactionResponse;
import org.openapis.openapi.models.shared.EditReactionOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteCommentReactionRequest req = new IssueDeleteCommentReactionRequest(638921L, "dolor", "debitis") {{
                editReactionOption = new EditReactionOption() {{
                    content = "a";
                }};;
            }};            

            IssueDeleteCommentReactionResponse res = sdk.issue.issueDeleteCommentReaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteIssueAttachment

Delete an issue attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteIssueAttachmentRequest;
import org.openapis.openapi.models.operations.IssueDeleteIssueAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteIssueAttachmentRequest req = new IssueDeleteIssueAttachmentRequest(680056L, 447125L, "in", "illum");            

            IssueDeleteIssueAttachmentResponse res = sdk.issue.issueDeleteIssueAttachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteIssueCommentAttachment

Delete a comment attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteIssueCommentAttachmentRequest;
import org.openapis.openapi.models.operations.IssueDeleteIssueCommentAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteIssueCommentAttachmentRequest req = new IssueDeleteIssueCommentAttachmentRequest(978571L, 699479L, "dicta", "magnam");            

            IssueDeleteIssueCommentAttachmentResponse res = sdk.issue.issueDeleteIssueCommentAttachment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteIssueReaction

Remove a reaction from an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteIssueReactionRequest;
import org.openapis.openapi.models.operations.IssueDeleteIssueReactionResponse;
import org.openapis.openapi.models.shared.EditReactionOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteIssueReactionRequest req = new IssueDeleteIssueReactionRequest(767024L, "facere", "ea") {{
                editReactionOption = new EditReactionOption() {{
                    content = "aliquid";
                }};;
            }};            

            IssueDeleteIssueReactionResponse res = sdk.issue.issueDeleteIssueReaction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteLabel

Delete a label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteLabelRequest;
import org.openapis.openapi.models.operations.IssueDeleteLabelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteLabelRequest req = new IssueDeleteLabelRequest(675439L, "accusamus", "non");            

            IssueDeleteLabelResponse res = sdk.issue.issueDeleteLabel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteMilestone

Delete a milestone

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteMilestoneRequest;
import org.openapis.openapi.models.operations.IssueDeleteMilestoneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteMilestoneRequest req = new IssueDeleteMilestoneRequest("occaecati", "enim", "accusamus");            

            IssueDeleteMilestoneResponse res = sdk.issue.issueDeleteMilestone(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteStopWatch

Delete an issue's existing stopwatch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteStopWatchRequest;
import org.openapis.openapi.models.operations.IssueDeleteStopWatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteStopWatchRequest req = new IssueDeleteStopWatchRequest(965417L, "quidem", "provident");            

            IssueDeleteStopWatchResponse res = sdk.issue.issueDeleteStopWatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteSubscription

Unsubscribe user from issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteSubscriptionRequest;
import org.openapis.openapi.models.operations.IssueDeleteSubscriptionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteSubscriptionRequest req = new IssueDeleteSubscriptionRequest(725255L, "id", "blanditiis", "deleniti");            

            IssueDeleteSubscriptionResponse res = sdk.issue.issueDeleteSubscription(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueDeleteTime

Delete specific tracked time

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueDeleteTimeRequest;
import org.openapis.openapi.models.operations.IssueDeleteTimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueDeleteTimeRequest req = new IssueDeleteTimeRequest(956084L, 230533L, "deserunt", "nisi");            

            IssueDeleteTimeResponse res = sdk.issue.issueDeleteTime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueEditComment

Edit a comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditCommentRequest;
import org.openapis.openapi.models.operations.IssueEditCommentResponse;
import org.openapis.openapi.models.shared.EditIssueCommentOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditCommentRequest req = new IssueEditCommentRequest(423855L, "natus", "omnis") {{
                editIssueCommentOption = new EditIssueCommentOption("molestiae");;
            }};            

            IssueEditCommentResponse res = sdk.issue.issueEditComment(req);

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~issueEditCommentDeprecated~~

Edit a comment

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditCommentDeprecatedRequest;
import org.openapis.openapi.models.operations.IssueEditCommentDeprecatedResponse;
import org.openapis.openapi.models.shared.EditIssueCommentOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditCommentDeprecatedRequest req = new IssueEditCommentDeprecatedRequest(19193L, 470132L, "magnam", "distinctio") {{
                editIssueCommentOption = new EditIssueCommentOption("id");;
            }};            

            IssueEditCommentDeprecatedResponse res = sdk.issue.issueEditCommentDeprecated(req);

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueEditIssue

Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditIssueRequest;
import org.openapis.openapi.models.operations.IssueEditIssueResponse;
import org.openapis.openapi.models.shared.EditIssueOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditIssueRequest req = new IssueEditIssueRequest(287991L, "labore", "suscipit") {{
                editIssueOption = new EditIssueOption() {{
                    assignee = "natus";
                    assignees = new String[]{{
                        add("eum"),
                        add("vero"),
                        add("aspernatur"),
                    }};
                    body = "architecto";
                    dueDate = OffsetDateTime.parse("2022-11-28T06:48:16.205Z");
                    milestone = 569965L;
                    ref = "ullam";
                    state = "provident";
                    title = "Ms.";
                    unsetDueDate = false;
                }};;
            }};            

            IssueEditIssueResponse res = sdk.issue.issueEditIssue(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueEditIssueAttachment

Edit an issue attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditIssueAttachmentRequest;
import org.openapis.openapi.models.operations.IssueEditIssueAttachmentResponse;
import org.openapis.openapi.models.shared.EditAttachmentOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditIssueAttachmentRequest req = new IssueEditIssueAttachmentRequest(574325L, 33625L, "mollitia", "reiciendis") {{
                editAttachmentOptions = new EditAttachmentOptions() {{
                    name = "Tommy Kemmer";
                }};;
            }};            

            IssueEditIssueAttachmentResponse res = sdk.issue.issueEditIssueAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueEditIssueCommentAttachment

Edit a comment attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditIssueCommentAttachmentRequest;
import org.openapis.openapi.models.operations.IssueEditIssueCommentAttachmentResponse;
import org.openapis.openapi.models.shared.EditAttachmentOptions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditIssueCommentAttachmentRequest req = new IssueEditIssueCommentAttachmentRequest(141264L, 367562L, "quasi", "iure") {{
                editAttachmentOptions = new EditAttachmentOptions() {{
                    name = "Doyle Gibson";
                }};;
            }};            

            IssueEditIssueCommentAttachmentResponse res = sdk.issue.issueEditIssueCommentAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueEditIssueDeadline

Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditIssueDeadlineRequest;
import org.openapis.openapi.models.operations.IssueEditIssueDeadlineResponse;
import org.openapis.openapi.models.shared.EditDeadlineOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditIssueDeadlineRequest req = new IssueEditIssueDeadlineRequest(703889L, "in", "architecto") {{
                editDeadlineOption = new EditDeadlineOption(OffsetDateTime.parse("2022-01-30T09:19:56.236Z"));;
            }};            

            IssueEditIssueDeadlineResponse res = sdk.issue.issueEditIssueDeadline(req);

            if (res.issueDeadline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueEditLabel

Update a label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditLabelRequest;
import org.openapis.openapi.models.operations.IssueEditLabelResponse;
import org.openapis.openapi.models.shared.EditLabelOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditLabelRequest req = new IssueEditLabelRequest(352312L, "expedita", "nihil") {{
                editLabelOption = new EditLabelOption() {{
                    color = "#00aabb";
                    description = "repellat";
                    exclusive = false;
                    name = "Louis Turner Sr.";
                }};;
            }};            

            IssueEditLabelResponse res = sdk.issue.issueEditLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueEditMilestone

Update a milestone

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueEditMilestoneRequest;
import org.openapis.openapi.models.operations.IssueEditMilestoneResponse;
import org.openapis.openapi.models.shared.EditMilestoneOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueEditMilestoneRequest req = new IssueEditMilestoneRequest("praesentium", "natus", "magni") {{
                editMilestoneOption = new EditMilestoneOption() {{
                    description = "sunt";
                    dueOn = OffsetDateTime.parse("2020-06-16T10:20:37.479Z");
                    state = "pariatur";
                    title = "Dr.";
                }};;
            }};            

            IssueEditMilestoneResponse res = sdk.issue.issueEditMilestone(req);

            if (res.milestone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetComment

Get a comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetCommentRequest;
import org.openapis.openapi.models.operations.IssueGetCommentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetCommentRequest req = new IssueGetCommentRequest(411397L, "excepturi", "odit");            

            IssueGetCommentResponse res = sdk.issue.issueGetComment(req);

            if (res.comment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetCommentReactions

Get a list of reactions from a comment of an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetCommentReactionsRequest;
import org.openapis.openapi.models.operations.IssueGetCommentReactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetCommentReactionsRequest req = new IssueGetCommentReactionsRequest(407183L, "accusantium", "ab");            

            IssueGetCommentReactionsResponse res = sdk.issue.issueGetCommentReactions(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetComments

List all comments on an issue

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetCommentsRequest;
import org.openapis.openapi.models.operations.IssueGetCommentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetCommentsRequest req = new IssueGetCommentsRequest(982575L, "quidem", "ipsam") {{
                before = OffsetDateTime.parse("2022-07-31T16:08:22.625Z");
                since = OffsetDateTime.parse("2022-11-25T01:41:45.601Z");
            }};            

            IssueGetCommentsResponse res = sdk.issue.issueGetComments(req);

            if (res.comments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetCommentsAndTimeline

List all comments and events on an issue

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetCommentsAndTimelineRequest;
import org.openapis.openapi.models.operations.IssueGetCommentsAndTimelineResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetCommentsAndTimelineRequest req = new IssueGetCommentsAndTimelineRequest(866383L, "nemo", "voluptatibus") {{
                before = OffsetDateTime.parse("2022-02-22T15:09:45.631Z");
                limit = 230742L;
                page = 11714L;
                since = OffsetDateTime.parse("2021-12-02T19:46:35.147Z");
            }};            

            IssueGetCommentsAndTimelineResponse res = sdk.issue.issueGetCommentsAndTimeline(req);

            if (res.timelineComments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetIssue

Get an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetIssueRequest;
import org.openapis.openapi.models.operations.IssueGetIssueResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetIssueRequest req = new IssueGetIssueRequest(944124L, "libero", "nobis");            

            IssueGetIssueResponse res = sdk.issue.issueGetIssue(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetIssueAttachment

Get an issue attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetIssueAttachmentRequest;
import org.openapis.openapi.models.operations.IssueGetIssueAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetIssueAttachmentRequest req = new IssueGetIssueAttachmentRequest(171629L, 339404L, "totam", "dignissimos");            

            IssueGetIssueAttachmentResponse res = sdk.issue.issueGetIssueAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetIssueCommentAttachment

Get a comment attachment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetIssueCommentAttachmentRequest;
import org.openapis.openapi.models.operations.IssueGetIssueCommentAttachmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetIssueCommentAttachmentRequest req = new IssueGetIssueCommentAttachmentRequest(54338L, 338985L, "nesciunt", "eos");            

            IssueGetIssueCommentAttachmentResponse res = sdk.issue.issueGetIssueCommentAttachment(req);

            if (res.attachment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetIssueReactions

Get a list reactions of an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetIssueReactionsRequest;
import org.openapis.openapi.models.operations.IssueGetIssueReactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetIssueReactionsRequest req = new IssueGetIssueReactionsRequest(18521L, "dolores", "minus") {{
                limit = 463451L;
                page = 223924L;
            }};            

            IssueGetIssueReactionsResponse res = sdk.issue.issueGetIssueReactions(req);

            if (res.reactions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetLabel

Get a single label

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetLabelRequest;
import org.openapis.openapi.models.operations.IssueGetLabelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetLabelRequest req = new IssueGetLabelRequest(874573L, "nostrum", "hic");            

            IssueGetLabelResponse res = sdk.issue.issueGetLabel(req);

            if (res.label != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetLabels

Get an issue's labels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetLabelsRequest;
import org.openapis.openapi.models.operations.IssueGetLabelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetLabelsRequest req = new IssueGetLabelsRequest(928082L, "omnis", "facilis");            

            IssueGetLabelsResponse res = sdk.issue.issueGetLabels(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetMilestone

Get a milestone

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetMilestoneRequest;
import org.openapis.openapi.models.operations.IssueGetMilestoneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetMilestoneRequest req = new IssueGetMilestoneRequest("perspiciatis", "voluptatem", "porro");            

            IssueGetMilestoneResponse res = sdk.issue.issueGetMilestone(req);

            if (res.milestone != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetMilestonesList

Get all of a repository's opened milestones

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetMilestonesListRequest;
import org.openapis.openapi.models.operations.IssueGetMilestonesListResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetMilestonesListRequest req = new IssueGetMilestonesListRequest("consequuntur", "blanditiis") {{
                limit = 621479L;
                name = "Violet Price";
                page = 934214L;
                state = "modi";
            }};            

            IssueGetMilestonesListResponse res = sdk.issue.issueGetMilestonesList(req);

            if (res.milestones != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueGetRepoComments

List all comments in a repository

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueGetRepoCommentsRequest;
import org.openapis.openapi.models.operations.IssueGetRepoCommentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueGetRepoCommentsRequest req = new IssueGetRepoCommentsRequest("iste", "dolorum") {{
                before = OffsetDateTime.parse("2021-04-10T01:47:20.724Z");
                limit = 589910L;
                page = 750844L;
                since = OffsetDateTime.parse("2021-01-26T22:08:21.462Z");
            }};            

            IssueGetRepoCommentsResponse res = sdk.issue.issueGetRepoComments(req);

            if (res.comments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueListBlocks

List issues that are blocked by this issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueListBlocksRequest;
import org.openapis.openapi.models.operations.IssueListBlocksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueListBlocksRequest req = new IssueListBlocksRequest("quaerat", "quos", "aliquid") {{
                limit = 212390L;
                page = 209843L;
            }};            

            IssueListBlocksResponse res = sdk.issue.issueListBlocks(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueListIssueAttachments

List issue's attachments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueListIssueAttachmentsRequest;
import org.openapis.openapi.models.operations.IssueListIssueAttachmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueListIssueAttachmentsRequest req = new IssueListIssueAttachmentsRequest(222443L, "qui", "ipsum");            

            IssueListIssueAttachmentsResponse res = sdk.issue.issueListIssueAttachments(req);

            if (res.attachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueListIssueCommentAttachments

List comment's attachments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueListIssueCommentAttachmentsRequest;
import org.openapis.openapi.models.operations.IssueListIssueCommentAttachmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueListIssueCommentAttachmentsRequest req = new IssueListIssueCommentAttachmentsRequest(944373L, "excepturi", "cum");            

            IssueListIssueCommentAttachmentsResponse res = sdk.issue.issueListIssueCommentAttachments(req);

            if (res.attachments != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueListIssueDependencies

List an issue's dependencies, i.e all issues that block this issue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueListIssueDependenciesRequest;
import org.openapis.openapi.models.operations.IssueListIssueDependenciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueListIssueDependenciesRequest req = new IssueListIssueDependenciesRequest("voluptate", "dignissimos", "reiciendis") {{
                limit = 227414L;
                page = 680545L;
            }};            

            IssueListIssueDependenciesResponse res = sdk.issue.issueListIssueDependencies(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueListIssues

List a repository's issues

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueListIssuesRequest;
import org.openapis.openapi.models.operations.IssueListIssuesResponse;
import org.openapis.openapi.models.operations.IssueListIssuesStateEnum;
import org.openapis.openapi.models.operations.IssueListIssuesTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueListIssuesRequest req = new IssueListIssuesRequest("numquam", "veritatis") {{
                assignedBy = "ipsa";
                before = OffsetDateTime.parse("2022-07-26T10:30:36.625Z");
                createdBy = "odio";
                labels = "quaerat";
                limit = 881005L;
                mentionedBy = "quidem";
                milestones = "voluptatibus";
                page = 377752L;
                q = "natus";
                since = OffsetDateTime.parse("2022-06-16T23:42:38.113Z");
                state = IssueListIssuesStateEnum.CLOSED;
                type = IssueListIssuesTypeEnum.PULLS;
            }};            

            IssueListIssuesResponse res = sdk.issue.issueListIssues(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueListLabels

Get all of a repository's labels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueListLabelsRequest;
import org.openapis.openapi.models.operations.IssueListLabelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueListLabelsRequest req = new IssueListLabelsRequest("ab", "soluta") {{
                limit = 679393L;
                page = 478596L;
            }};            

            IssueListLabelsResponse res = sdk.issue.issueListLabels(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuePostCommentReaction

Add a reaction to a comment of an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuePostCommentReactionRequest;
import org.openapis.openapi.models.operations.IssuePostCommentReactionResponse;
import org.openapis.openapi.models.shared.EditReactionOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssuePostCommentReactionRequest req = new IssuePostCommentReactionRequest(453697L, "dolorum", "deleniti") {{
                editReactionOption = new EditReactionOption() {{
                    content = "omnis";
                }};;
            }};            

            IssuePostCommentReactionResponse res = sdk.issue.issuePostCommentReaction(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issuePostIssueReaction

Add a reaction to an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssuePostIssueReactionRequest;
import org.openapis.openapi.models.operations.IssuePostIssueReactionResponse;
import org.openapis.openapi.models.shared.EditReactionOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssuePostIssueReactionRequest req = new IssuePostIssueReactionRequest(896672L, "distinctio", "asperiores") {{
                editReactionOption = new EditReactionOption() {{
                    content = "nihil";
                }};;
            }};            

            IssuePostIssueReactionResponse res = sdk.issue.issuePostIssueReaction(req);

            if (res.reaction != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueRemoveIssueBlockingJson

Unblock the issue given in the body by the issue in path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueRemoveIssueBlockingJsonRequest;
import org.openapis.openapi.models.operations.IssueRemoveIssueBlockingJsonResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueRemoveIssueBlockingJsonRequest req = new IssueRemoveIssueBlockingJsonRequest("ipsum", "voluptate", "id") {{
                issueMeta = new IssueMeta() {{
                    index = 906418L;
                    owner = "eius";
                    repo = "aspernatur";
                }};;
            }};            

            IssueRemoveIssueBlockingJsonResponse res = sdk.issue.issueRemoveIssueBlockingJson(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueRemoveIssueBlockingRaw

Unblock the issue given in the body by the issue in path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueRemoveIssueBlockingRawRequest;
import org.openapis.openapi.models.operations.IssueRemoveIssueBlockingRawResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueRemoveIssueBlockingRawRequest req = new IssueRemoveIssueBlockingRawRequest("perferendis", "amet", "optio") {{
                requestBody = "accusamus".getBytes();
            }};            

            IssueRemoveIssueBlockingRawResponse res = sdk.issue.issueRemoveIssueBlockingRaw(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueRemoveIssueDependenciesJson

Remove an issue dependency

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueRemoveIssueDependenciesJsonRequest;
import org.openapis.openapi.models.operations.IssueRemoveIssueDependenciesJsonResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueRemoveIssueDependenciesJsonRequest req = new IssueRemoveIssueDependenciesJsonRequest("ad", "saepe", "suscipit") {{
                issueMeta = new IssueMeta() {{
                    index = 645785L;
                    owner = "provident";
                    repo = "minima";
                }};;
            }};            

            IssueRemoveIssueDependenciesJsonResponse res = sdk.issue.issueRemoveIssueDependenciesJson(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueRemoveIssueDependenciesRaw

Remove an issue dependency

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueRemoveIssueDependenciesRawRequest;
import org.openapis.openapi.models.operations.IssueRemoveIssueDependenciesRawResponse;
import org.openapis.openapi.models.shared.IssueMeta;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueRemoveIssueDependenciesRawRequest req = new IssueRemoveIssueDependenciesRawRequest("repellendus", "totam", "similique") {{
                requestBody = "alias".getBytes();
            }};            

            IssueRemoveIssueDependenciesRawResponse res = sdk.issue.issueRemoveIssueDependenciesRaw(req);

            if (res.issue != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueRemoveLabel

Remove a label from an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueRemoveLabelRequest;
import org.openapis.openapi.models.operations.IssueRemoveLabelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueRemoveLabelRequest req = new IssueRemoveLabelRequest(872651L, 311860L, "tempora", "vel");            

            IssueRemoveLabelResponse res = sdk.issue.issueRemoveLabel(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueReplaceLabels

Replace an issue's labels

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueReplaceLabelsRequest;
import org.openapis.openapi.models.operations.IssueReplaceLabelsResponse;
import org.openapis.openapi.models.shared.IssueLabelsOption;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueReplaceLabelsRequest req = new IssueReplaceLabelsRequest(798047L, "officiis", "qui") {{
                issueLabelsOption = new IssueLabelsOption() {{
                    labels = new Long[]{{
                        add(952792L),
                        add(456130L),
                        add(687488L),
                    }};
                }};;
            }};            

            IssueReplaceLabelsResponse res = sdk.issue.issueReplaceLabels(req);

            if (res.labels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueResetTime

Reset a tracked time of an issue

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueResetTimeRequest;
import org.openapis.openapi.models.operations.IssueResetTimeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueResetTimeRequest req = new IssueResetTimeRequest(483409L, "ipsum", "quisquam");            

            IssueResetTimeResponse res = sdk.issue.issueResetTime(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueSearchIssues

Search for issues across the repositories that the user has access to

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueSearchIssuesRequest;
import org.openapis.openapi.models.operations.IssueSearchIssuesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueSearchIssuesRequest req = new IssueSearchIssuesRequest() {{
                assigned = false;
                before = OffsetDateTime.parse("2022-04-24T18:16:06.669Z");
                created = false;
                labels = "tempore";
                limit = 880298L;
                mentioned = false;
                milestones = "numquam";
                owner = "enim";
                page = 213312L;
                priorityRepoId = 957451L;
                q = "totam";
                reviewRequested = false;
                reviewed = false;
                since = OffsetDateTime.parse("2022-12-22T15:11:39.695Z");
                state = "expedita";
                team = "neque";
                type = "sed";
            }};            

            IssueSearchIssuesResponse res = sdk.issue.issueSearchIssues(req);

            if (res.issues != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueStartStopWatch

Start stopwatch on an issue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueStartStopWatchRequest;
import org.openapis.openapi.models.operations.IssueStartStopWatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueStartStopWatchRequest req = new IssueStartStopWatchRequest(424685L, "libero", "voluptas");            

            IssueStartStopWatchResponse res = sdk.issue.issueStartStopWatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueStopStopWatch

Stop an issue's existing stopwatch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueStopStopWatchRequest;
import org.openapis.openapi.models.operations.IssueStopStopWatchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueStopStopWatchRequest req = new IssueStopStopWatchRequest(646265L, "quam", "ipsum");            

            IssueStopStopWatchResponse res = sdk.issue.issueStopStopWatch(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueSubscriptions

Get users who subscribed on an issue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueSubscriptionsRequest;
import org.openapis.openapi.models.operations.IssueSubscriptionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueSubscriptionsRequest req = new IssueSubscriptionsRequest(277628L, "qui", "cupiditate") {{
                limit = 807581L;
                page = 863856L;
            }};            

            IssueSubscriptionsResponse res = sdk.issue.issueSubscriptions(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## issueTrackedTimes

List an issue's tracked times

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IssueTrackedTimesRequest;
import org.openapis.openapi.models.operations.IssueTrackedTimesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            IssueTrackedTimesRequest req = new IssueTrackedTimesRequest(747080L, "dicta", "laborum") {{
                before = OffsetDateTime.parse("2022-06-12T20:49:16.541Z");
                limit = 132068L;
                page = 174909L;
                since = OffsetDateTime.parse("2021-08-04T17:36:39.068Z");
                user = "aliquid";
            }};            

            IssueTrackedTimesResponse res = sdk.issue.issueTrackedTimes(req);

            if (res.trackedTimes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
