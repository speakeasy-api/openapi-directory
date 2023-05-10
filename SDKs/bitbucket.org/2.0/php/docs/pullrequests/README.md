# pullrequests

## Overview

Pull requests are a feature that makes it easier for developers
to collaborate using Bitbucket. They provide a user-friendly web
interface for discussing proposed changes before integrating them
into the official project.


### Available Operations

* [deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#deleterepositoriesworkspacereposlugdefaultreviewerstargetusername) - Remove a user from the default reviewers
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove](#deleterepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Unapprove a pull request
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Delete a comment on a pull request
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve](#deleterepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Reopen a comment thread
* [deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges](#deleterepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Remove change request for a pull request
* [getPullrequestsForCommit](#getpullrequestsforcommit) - List pull requests that contain a commit
* [getPullrequestsSelectedUser](#getpullrequestsselecteduser) - List pull requests for a user
* [getRepositoriesWorkspaceRepoSlugDefaultReviewers](#getrepositoriesworkspacereposlugdefaultreviewers) - List default reviewers
* [getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#getrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Get a default reviewer
* [getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers](#getrepositoriesworkspacereposlugeffectivedefaultreviewers) - List effective default reviewers
* [getRepositoriesWorkspaceRepoSlugPullrequests](#getrepositoriesworkspacereposlugpullrequests) - List pull requests
* [getRepositoriesWorkspaceRepoSlugPullrequestsActivity](#getrepositoriesworkspacereposlugpullrequestsactivity) - List a pull request activity log
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId](#getrepositoriesworkspacereposlugpullrequestspullrequestid) - Get a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity](#getrepositoriesworkspacereposlugpullrequestspullrequestidactivity) - List a pull request activity log
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments](#getrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - List comments on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](#getrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Get a comment on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits](#getrepositoriesworkspacereposlugpullrequestspullrequestidcommits) - List commits on a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff](#getrepositoriesworkspacereposlugpullrequestspullrequestiddiff) - List changes in a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat](#getrepositoriesworkspacereposlugpullrequestspullrequestiddiffstat) - Get the diff stat for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId](#getrepositoriesworkspacereposlugpullrequestspullrequestidmergetaskstatustaskid) - Get the merge task status for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch](#getrepositoriesworkspacereposlugpullrequestspullrequestidpatch) - Get the patch for a pull request
* [getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses](#getrepositoriesworkspacereposlugpullrequestspullrequestidstatuses) - List commit statuses for a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequests](#postrepositoriesworkspacereposlugpullrequests) - Create a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove](#postrepositoriesworkspacereposlugpullrequestspullrequestidapprove) - Approve a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments](#postrepositoriesworkspacereposlugpullrequestspullrequestidcomments) - Create a comment on a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve](#postrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentidresolve) - Resolve a comment thread
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline](#postrepositoriesworkspacereposlugpullrequestspullrequestiddecline) - Decline a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge](#postrepositoriesworkspacereposlugpullrequestspullrequestidmerge) - Merge a pull request
* [postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges](#postrepositoriesworkspacereposlugpullrequestspullrequestidrequestchanges) - Request changes for a pull request
* [putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername](#putrepositoriesworkspacereposlugdefaultreviewerstargetusername) - Add a user to the default reviewers
* [putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId](#putrepositoriesworkspacereposlugpullrequestspullrequestid) - Update a pull request
* [putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId](#putrepositoriesworkspacereposlugpullrequestspullrequestidcommentscommentid) - Update a comment on a pull request

## deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Removes a default reviewer from the repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest();
    $request->repoSlug = 'earum';
    $request->targetUsername = 'vel';
    $request->workspace = 'in';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove

Redact the authenticated user's approval of the specified pull
request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest();
    $request->pullRequestId = 258684;
    $request->repoSlug = 'libero';
    $request->workspace = 'illum';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId

Deletes a specific pull request comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest();
    $request->commentId = 742238;
    $request->pullRequestId = 33304;
    $request->repoSlug = 'aliquam';
    $request->workspace = 'sapiente';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve

Reopen a comment thread

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest();
    $request->commentId = 119771;
    $request->pullRequestId = 355369;
    $request->repoSlug = 'reprehenderit';
    $request->workspace = 'ullam';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges

Remove change request for a pull request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest();
    $request->pullRequestId = 391774;
    $request->repoSlug = 'aut';
    $request->workspace = 'voluptatum';

    $requestSecurity = new DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPullrequestsForCommit

Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPullrequestsForCommitRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPullrequestsForCommitRequest();
    $request->commit = 'qui';
    $request->page = 845358;
    $request->pagelen = 401259;
    $request->repoSlug = 'deleniti';
    $request->workspace = 'itaque';

    $response = $sdk->pullrequests->getPullrequestsForCommit($request);

    if ($response->paginatedPullrequests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPullrequestsSelectedUser

Returns all pull requests authored by the specified user.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetPullrequestsSelectedUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetPullrequestsSelectedUserStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetPullrequestsSelectedUserSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPullrequestsSelectedUserRequest();
    $request->selectedUser = 'dolorum';
    $request->state = GetPullrequestsSelectedUserStateEnum::OPEN;

    $requestSecurity = new GetPullrequestsSelectedUserSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getPullrequestsSelectedUser($request, $requestSecurity);

    if ($response->paginatedPullrequests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDefaultReviewers

Returns the repository's default reviewers.

These are the users that are automatically added as reviewers on every
new pull request that is created. To obtain the repository's default reviewers
as well as the default reviewers inherited from the project, use the
[effective-default-reveiwers](#api-repositories-workspace-repo-slug-effective-default-reviewers-get) endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest();
    $request->repoSlug = 'omnis';
    $request->workspace = 'tenetur';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugDefaultReviewers($request, $requestSecurity);

    if ($response->paginatedAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Returns the specified reviewer.

This can be used to test whether a user is among the repository's
default reviewers list. A 404 indicates that that specified user is not
a default reviewer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest();
    $request->repoSlug = 'quasi';
    $request->targetUsername = 'at';
    $request->workspace = 'et';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers

Returns the repository's effective default reviewers. This includes both default
reviewers defined at the repository level as well as those inherited from its project.

These are the users that are automatically added as reviewers on every
new pull request that is created.

```
$ curl https://api.bitbucket.org/2.0/repositories/{workspace_slug}/{repo_slug}/effective-default-reviewers?page=1&pagelen=20
{
    "pagelen": 20,
    "values": [
        {
            "user": {
                "display_name": "Patrick Wolf",
                "uuid": "{9565301a-a3cf-4b5d-88f4-dd6af8078d7e}"
            },
            "reviewer_type": "project",
            "type": "default_reviewer",
        },
        {
            "user": {
                "display_name": "Davis Lee",
                "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
            },
            "reviewer_type": "repository",
            "type": "default_reviewer",
        }
    ],
    "page": 1,
    "size": 2
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest();
    $request->repoSlug = 'voluptate';
    $request->workspace = 'ipsa';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers($request, $requestSecurity);

    if ($response->paginatedDefaultReviewerAndType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequests

Returns all pull requests on the specified repository.

By default only open pull requests are returned. This can be controlled
using the `state` query parameter. To retrieve pull requests that are
in one of multiple states, repeat the `state` parameter for each
individual state.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsRequest();
    $request->repoSlug = 'minima';
    $request->state = GetRepositoriesWorkspaceRepoSlugPullrequestsStateEnum::OPEN;
    $request->workspace = 'consectetur';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequests($request, $requestSecurity);

    if ($response->paginatedPullrequests !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsActivity

Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest();
    $request->repoSlug = 'adipisci';
    $request->workspace = 'iste';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsActivity($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId

Returns the specified pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest();
    $request->pullRequestId = 839513;
    $request->repoSlug = 'accusantium';
    $request->workspace = 'rem';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId($request, $requestSecurity);

    if ($response->pullrequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity

Returns a paginated list of the pull request's activity log.

This handler serves both a v20 and internal endpoint. The v20 endpoint
returns reviewer comments, updates, approvals and request changes. The internal
endpoint includes those plus tasks and attachments.

Comments created on a file or a line of code have an inline property.

Comment example:
```
{
    "pagelen": 20,
    "values": [
        {
            "comment": {
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
                    }
                },
                "deleted": false,
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "content": {
                    "raw": "inline with to a dn from lines",
                    "markup": "markdown",
                    "html": "<p>inline with to a dn from lines</p>",
                    "type": "rendered"
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "created_on": "2019-09-27T00:33:46.039178+00:00",
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "updated_on": "2019-09-27T00:33:46.055384+00:00",
                "inline": {
                    "context_lines": "",
                    "to": null,
                    "path": "",
                    "outdated": false,
                    "from": 211
                },
                "type": "pullrequest_comment",
                "id": 118571088
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Updates include a state property of OPEN, MERGED, or DECLINED.

Update example:
```
{
    "pagelen": 20,
    "values": [
        {
            "update": {
                "description": "",
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
                "destination": {
                    "commit": {
                        "type": "commit",
                        "hash": "6a2c16e4a152",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
                            }
                        }
                    },
                    "branch": {
                        "name": "master"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "reason": "",
                "source": {
                    "commit": {
                        "type": "commit",
                        "hash": "728c8bad1813",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
                            }
                        }
                    },
                    "branch": {
                        "name": "username/NONE-add-onClick-prop-for-accessibility"
                    },
                    "repository": {
                        "name": "Atlaskit-MK-2",
                        "type": "repository",
                        "full_name": "atlassian/atlaskit-mk-2",
                        "links": {
                            "self": {
                                "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
                            },
                            "html": {
                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
                            },
                            "avatar": {
                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
                            }
                        },
                        "uuid": "{}"
                    }
                },
                "state": "OPEN",
                "author": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                },
                "date": "2019-05-10T06:48:25.305565+00:00"
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

Approval example:
```
{
    "pagelen": 20,
    "values": [
        {
            "approval": {
                "date": "2019-09-27T00:37:19.849534+00:00",
                "pullrequest": {
                    "type": "pullrequest",
                    "id": 5695,
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                        },
                        "html": {
                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                        }
                    },
                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
                },
                "user": {
                    "display_name": "Name Lastname",
                    "uuid": "{}",
                    "links": {
                        "self": {
                            "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
                        },
                        "html": {
                            "href": "https://bitbucket.org/%7B%7D/"
                        },
                        "avatar": {
                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
                        }
                    },
                    "type": "user",
                    "nickname": "Name",
                    "account_id": ""
                }
            },
            "pull_request": {
                "type": "pullrequest",
                "id": 5695,
                "links": {
                    "self": {
                        "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
                    },
                    "html": {
                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
                    }
                },
                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
            }
        }
    ]
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivitySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest();
    $request->pullRequestId = 15606;
    $request->repoSlug = 'laudantium';
    $request->workspace = 'eum';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivitySecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments

Returns a paginated list of the pull request's comments.

This includes both global, inline comments and replies.

The default sorting is oldest to newest and can be overridden with
the `sort` query parameter.

This endpoint also supports filtering and sorting of the results. See
[filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more
details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest();
    $request->pullRequestId = 649832;
    $request->repoSlug = 'ab';
    $request->workspace = 'corrupti';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments($request, $requestSecurity);

    if ($response->paginatedPullrequestComments !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId

Returns a specific pull request comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest();
    $request->commentId = 251941;
    $request->pullRequestId = 32465;
    $request->repoSlug = 'dolor';
    $request->workspace = 'occaecati';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId($request, $requestSecurity);

    if ($response->pullrequestComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits

Returns a paginated list of the pull request's commits.

These are the commits that are being merged into the destination
branch when the pull requests gets accepted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest();
    $request->pullRequestId = 253191;
    $request->repoSlug = 'impedit';
    $request->workspace = 'explicabo';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff

Redirects to the [repository diff](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diff-spec-get)
with the revspec that corresponds to the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest();
    $request->pullRequestId = 376226;
    $request->repoSlug = 'aut';
    $request->workspace = 'dignissimos';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat

Redirects to the [repository diffstat](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diffstat-spec-get)
with the revspec that corresponds to the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest();
    $request->pullRequestId = 115484;
    $request->repoSlug = 'maiores';
    $request->workspace = 'natus';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId

When merging a pull request takes too long, the client receives a
task ID along with a 202 status code. The task ID can be used in a call
to this endpoint to check the status of a merge task.

```
curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
```

If the merge task is not yet finished, a PENDING status will be returned.

```
HTTP/2 200
{
    "task_status": "PENDING",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    }
}
```

If the merge was successful, a SUCCESS status will be returned.

```
HTTP/2 200
{
    "task_status": "SUCCESS",
    "links": {
        "self": {
            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
        }
    },
    "merge_result": <the merged pull request object>
}
```

If the merge task failed, an error will be returned.

```
{
    "type": "error",
    "error": {
        "message": "<error message>"
    }
}
```

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest();
    $request->pullRequestId = 244651;
    $request->repoSlug = 'voluptatibus';
    $request->taskId = 'voluptas';
    $request->workspace = 'asperiores';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch

Redirects to the [repository patch](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-patch-spec-get)
with the revspec that corresponds to pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest();
    $request->pullRequestId = 45659;
    $request->repoSlug = 'ea';
    $request->workspace = 'quaerat';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses

Returns all statuses (e.g. build results) for the given pull
request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest();
    $request->pullRequestId = 162954;
    $request->q = 'repellendus';
    $request->repoSlug = 'officia';
    $request->sort = 'maxime';
    $request->workspace = 'dignissimos';

    $requestSecurity = new GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses($request, $requestSecurity);

    if ($response->paginatedCommitstatuses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugPullrequests

Creates a new pull request where the destination repository is
this repository and the author is the authenticated user.

The minimum required fields to create a pull request are `title` and
`source`, specified by a branch name.

```
curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \
    -u my-username:my-password \
    --request POST \
    --header 'Content-Type: application/json' \
    --data '{
        "title": "My Title",
        "source": {
            "branch": {
                "name": "staging"
            }
        }
    }'
```

If the pull request's `destination` is not specified, it will default
to the `repository.mainbranch`. To open a pull request to a
different branch, say from a feature branch to a staging branch,
specify a `destination` (same format as the `source`):

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "destination": {
        "branch": {
            "name": "staging"
        }
    }
}
```

Reviewers can be specified by adding an array of user objects as the
`reviewers` property.

```
{
    "title": "My Title",
    "source": {
        "branch": {
            "name": "my-feature-branch"
        }
    },
    "reviewers": [
        {
            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
        }
    ]
}
```

Other fields:

* `description` - a string
* `close_source_branch` - boolean that specifies if the source branch should be closed upon merging

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugPullrequestsRequest();
    $request->requestBody = [
        'asperiores' => 'nemo',
        'quae' => 'quaerat',
        'porro' => 'quod',
    ];
    $request->repoSlug = 'labore';
    $request->workspace = 'ab';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->postRepositoriesWorkspaceRepoSlugPullrequests($request, $requestSecurity);

    if ($response->pullrequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove

Approve the specified pull request as the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest();
    $request->pullRequestId = 241418;
    $request->repoSlug = 'fuga';
    $request->workspace = 'id';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove($request, $requestSecurity);

    if ($response->participant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments

Creates a new pull request comment.

Returns the newly created pull request comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest();
    $request->requestBody = [
        'velit' => 'culpa',
        'est' => 'recusandae',
    ];
    $request->pullRequestId = 517309;
    $request->repoSlug = 'fugiat';
    $request->workspace = 'vel';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments($request, $requestSecurity);

    if ($response->pullrequestComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve

Resolve a comment thread

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveRequest();
    $request->commentId = 497678;
    $request->pullRequestId = 554688;
    $request->repoSlug = 'vel';
    $request->workspace = 'labore';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolveSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResolve($request, $requestSecurity);

    if ($response->commentResolution !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline

Declines the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest();
    $request->pullRequestId = 822560;
    $request->repoSlug = 'facilis';
    $request->workspace = 'cum';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline($request, $requestSecurity);

    if ($response->pullrequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge

Merges the pull request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest();
    $request->requestBody = [
        'in' => 'corporis',
        'reiciendis' => 'assumenda',
    ];
    $request->async = false;
    $request->pullRequestId = 363161;
    $request->repoSlug = 'recusandae';
    $request->workspace = 'aliquid';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge($request, $requestSecurity);

    if ($response->pullrequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges

Request changes for a pull request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest();
    $request->pullRequestId = 46007;
    $request->repoSlug = 'cum';
    $request->workspace = 'consectetur';

    $requestSecurity = new PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges($request, $requestSecurity);

    if ($response->participant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername

Adds the specified user to the repository's list of default
reviewers.

This method is idempotent. Adding a user a second time has no effect.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest();
    $request->repoSlug = 'in';
    $request->targetUsername = 'exercitationem';
    $request->workspace = 'earum';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername($request, $requestSecurity);

    if ($response->account !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId

Mutates the specified pull request.

This can be used to change the pull request's branches or description.

Only open pull requests can be mutated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest();
    $request->requestBody = [
        'numquam' => 'doloribus',
        'suscipit' => 'reiciendis',
        'quidem' => 'saepe',
        'necessitatibus' => 'dolore',
    ];
    $request->pullRequestId = 121059;
    $request->repoSlug = 'asperiores';
    $request->workspace = 'adipisci';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId($request, $requestSecurity);

    if ($response->pullrequest !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId

Updates a specific pull request comment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasic;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest();
    $request->requestBody = [
        'amet' => 'beatae',
    ];
    $request->commentId = 489509;
    $request->pullRequestId = 950953;
    $request->repoSlug = 'debitis';
    $request->workspace = 'consectetur';

    $requestSecurity = new PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->pullrequests->putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId($request, $requestSecurity);

    if ($response->pullrequestComment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
