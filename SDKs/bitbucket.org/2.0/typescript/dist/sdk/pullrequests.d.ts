import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pullrequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Removes a default reviewer from the repository.
    **/
    deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Redact the authenticated user's approval of the specified pull
     * request.
    **/
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Deletes a specific pull request comment.
    **/
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse>;
    /**
     * getPullrequestsForCommit - Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
    **/
    getPullrequestsForCommit(req: operations.GetPullrequestsForCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetPullrequestsForCommitResponse>;
    /**
     * getPullrequestsSelectedUser - Returns all pull requests authored by the specified user.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    getPullrequestsSelectedUser(req: operations.GetPullrequestsSelectedUserRequest, config?: AxiosRequestConfig): Promise<operations.GetPullrequestsSelectedUserResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDefaultReviewers - Returns the repository's default reviewers.
     *
     * These are the users that are automatically added as reviewers on every
     * new pull request that is created.
    **/
    getRepositoriesWorkspaceRepoSlugDefaultReviewers(req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Returns the specified reviewer.
     *
     * This can be used to test whether a user is among the repository's
     * default reviewers list. A 404 indicates that that specified user is not
     * a default reviewer.
    **/
    getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequests - Returns all pull requests on the specified repository.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../meta/filtering) for more details.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequests(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsActivity - Returns a paginated list of the pull request's activity log.
     *
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     *
     * Comments created on a file or a line of code have an inline property.
     *
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     *
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsActivity(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Returns the specified pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity - Returns a paginated list of the pull request's activity log.
     *
     * This handler serves both a v20 and internal endpoint. The v20 endpoint
     * returns reviewer comments, updates, approvals and request changes. The internal
     * endpoint includes those plus tasks and attachments.
     *
     * Comments created on a file or a line of code have an inline property.
     *
     * Comment example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "comment": {
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
     *                     }
     *                 },
     *                 "deleted": false,
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "content": {
     *                     "raw": "inline with to a dn from lines",
     *                     "markup": "markdown",
     *                     "html": "<p>inline with to a dn from lines</p>",
     *                     "type": "rendered"
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "created_on": "2019-09-27T00:33:46.039178+00:00",
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "updated_on": "2019-09-27T00:33:46.055384+00:00",
     *                 "inline": {
     *                     "context_lines": "",
     *                     "to": null,
     *                     "path": "",
     *                     "outdated": false,
     *                     "from": 211
     *                 },
     *                 "type": "pullrequest_comment",
     *                 "id": 118571088
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Updates include a state property of OPEN, MERGED, or DECLINED.
     *
     * Update example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "update": {
     *                 "description": "",
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
     *                 "destination": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "6a2c16e4a152",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "master"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "reason": "",
     *                 "source": {
     *                     "commit": {
     *                         "type": "commit",
     *                         "hash": "728c8bad1813",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
     *                             }
     *                         }
     *                     },
     *                     "branch": {
     *                         "name": "username/NONE-add-onClick-prop-for-accessibility"
     *                     },
     *                     "repository": {
     *                         "name": "Atlaskit-MK-2",
     *                         "type": "repository",
     *                         "full_name": "atlassian/atlaskit-mk-2",
     *                         "links": {
     *                             "self": {
     *                                 "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
     *                             },
     *                             "html": {
     *                                 "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
     *                             },
     *                             "avatar": {
     *                                 "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
     *                             }
     *                         },
     *                         "uuid": "{}"
     *                     }
     *                 },
     *                 "state": "OPEN",
     *                 "author": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 },
     *                 "date": "2019-05-10T06:48:25.305565+00:00"
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
     *
     * Approval example:
     * ```
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "approval": {
     *                 "date": "2019-09-27T00:37:19.849534+00:00",
     *                 "pullrequest": {
     *                     "type": "pullrequest",
     *                     "id": 5695,
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                         }
     *                     },
     *                     "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *                 },
     *                 "user": {
     *                     "display_name": "Name Lastname",
     *                     "uuid": "{}",
     *                     "links": {
     *                         "self": {
     *                             "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
     *                         },
     *                         "html": {
     *                             "href": "https://bitbucket.org/%7B%7D/"
     *                         },
     *                         "avatar": {
     *                             "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
     *                         }
     *                     },
     *                     "type": "user",
     *                     "nickname": "Name",
     *                     "account_id": ""
     *                 }
     *             },
     *             "pull_request": {
     *                 "type": "pullrequest",
     *                 "id": 5695,
     *                 "links": {
     *                     "self": {
     *                         "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
     *                     },
     *                     "html": {
     *                         "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
     *                     }
     *                 },
     *                 "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
     *             }
     *         }
     *     ]
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Returns a paginated list of the pull request's comments.
     *
     * This includes both global, inline comments and replies.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../../../meta/filtering) for more
     * details.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Returns a specific pull request comment.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits - Returns a paginated list of the pull request's commits.
     *
     * These are the commits that are being merged into the destination
     * branch when the pull requests gets accepted.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff - Redirects to the [repository diff](../../diff/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat - Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
     * with the revspec that corresponds to the pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId - When merging a pull request takes too long, the client receives a
     * task ID along with a 202 status code. The task ID can be used in a call
     * to this endpoint to check the status of a merge task.
     *
     * ```
     * curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
     * ```
     *
     * If the merge task is not yet finished, a PENDING status will be returned.
     *
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "PENDING",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     }
     * }
     * ```
     *
     * If the merge was successful, a SUCCESS status will be returned.
     *
     * ```
     * HTTP/2 200
     * {
     *     "task_status": "SUCCESS",
     *     "links": {
     *         "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
     *         }
     *     },
     *     "merge_result": <the merged pull request object>
     * }
     * ```
     *
     * If the merge task failed, an error will be returned.
     *
     * ```
     * {
     *     "type": "error",
     *     "error": {
     *         "message": "<error message>"
     *     }
     * }
     * ```
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch - Redirects to the [repository patch](../../patch/%7Bspec%7D)
     * with the revspec that corresponds to pull request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses - Returns all statuses (e.g. build results) for the given pull
     * request.
    **/
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequests - Creates a new pull request where the destination repository is
     * this repository and the author is the authenticated user.
     *
     * The minimum required fields to create a pull request are `title` and
     * `source`, specified by a branch name.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
     *     -u my-username:my-password \
     *     --request POST \
     *     --header 'Content-Type: application/json' \
     *     --data '{
     *         "title": "My Title",
     *         "source": {
     *             "branch": {
     *                 "name": "staging"
     *             }
     *         }
     *     }'
     * ```
     *
     * If the pull request's `destination` is not specified, it will default
     * to the `repository.mainbranch`. To open a pull request to a
     * different branch, say from a feature branch to a staging branch,
     * specify a `destination` (same format as the `source`):
     *
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "destination": {
     *         "branch": {
     *             "name": "staging"
     *         }
     *     }
     * }
     * ```
     *
     * Reviewers can be specified by adding an array of user objects as the
     * `reviewers` property.
     *
     * ```
     * {
     *     "title": "My Title",
     *     "source": {
     *         "branch": {
     *             "name": "my-feature-branch"
     *         }
     *     },
     *     "reviewers": [
     *         {
     *             "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
     *         }
     *     ]
     * }
     * ```
     *
     * Other fields:
     *
     * * `description` - a string
     * * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
    **/
    postRepositoriesWorkspaceRepoSlugPullrequests(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove - Approve the specified pull request as the authenticated user.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments - Creates a new pull request comment.
     *
     * Returns the newly created pull request comment.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline - Declines the pull request.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge - Merges the pull request.
    **/
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse>;
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Adds the specified user to the repository's list of default
     * reviewers.
     *
     * This method is idempotent. Adding a user a second time has no effect.
    **/
    putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId - Mutates the specified pull request.
     *
     * This can be used to change the pull request's branches or description.
     *
     * Only open pull requests can be mutated.
    **/
    putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId - Updates a specific pull request comment.
    **/
    putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
}
