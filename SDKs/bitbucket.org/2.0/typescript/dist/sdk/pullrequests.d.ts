import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Pull requests are a feature that makes it easier for developers
 *
 * @remarks
 * to collaborate using Bitbucket. They provide a user-friendly web
 * interface for discussing proposed changes before integrating them
 * into the official project.
 *
 */
export declare class Pullrequests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a user from the default reviewers
     *
     * @remarks
     * Removes a default reviewer from the repository.
     */
    deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, security: operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * Unapprove a pull request
     *
     * @remarks
     * Redact the authenticated user's approval of the specified pull
     * request.
     */
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest, security: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse>;
    /**
     * Delete a comment on a pull request
     *
     * @remarks
     * Deletes a specific pull request comment.
     */
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, security: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
    /**
     * Remove change request for a pull request
     */
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest, security: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse>;
    /**
     * List pull requests that contain a commit
     *
     * @remarks
     * Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
     */
    getPullrequestsForCommit(req: operations.GetPullrequestsForCommitRequest, config?: AxiosRequestConfig): Promise<operations.GetPullrequestsForCommitResponse>;
    /**
     * List pull requests for a user
     *
     * @remarks
     * Returns all pull requests authored by the specified user.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     */
    getPullrequestsSelectedUser(req: operations.GetPullrequestsSelectedUserRequest, security: operations.GetPullrequestsSelectedUserSecurity, config?: AxiosRequestConfig): Promise<operations.GetPullrequestsSelectedUserResponse>;
    /**
     * List default reviewers
     *
     * @remarks
     * Returns the repository's default reviewers.
     *
     * These are the users that are automatically added as reviewers on every
     * new pull request that is created. To obtain the repository's default reviewers
     * as well as the default reviewers inherited from the project, use the
     * [effective-default-reveiwers](#api-repositories-workspace-repo-slug-effective-default-reviewers-get) endpoint.
     */
    getRepositoriesWorkspaceRepoSlugDefaultReviewers(req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest, security: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse>;
    /**
     * Get a default reviewer
     *
     * @remarks
     * Returns the specified reviewer.
     *
     * This can be used to test whether a user is among the repository's
     * default reviewers list. A 404 indicates that that specified user is not
     * a default reviewer.
     */
    getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, security: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * List effective default reviewers
     *
     * @remarks
     * Returns the repository's effective default reviewers. This includes both default
     * reviewers defined at the repository level as well as those inherited from its project.
     *
     * These are the users that are automatically added as reviewers on every
     * new pull request that is created.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/{workspace_slug}/{repo_slug}/effective-default-reviewers?page=1&pagelen=20
     * {
     *     "pagelen": 20,
     *     "values": [
     *         {
     *             "user": {
     *                 "display_name": "Patrick Wolf",
     *                 "uuid": "{9565301a-a3cf-4b5d-88f4-dd6af8078d7e}"
     *             },
     *             "reviewer_type": "project",
     *             "type": "default_reviewer",
     *         },
     *         {
     *             "user": {
     *                 "display_name": "Davis Lee",
     *                 "uuid": "{f0e0e8e9-66c1-4b85-a784-44a9eb9ef1a6}"
     *             },
     *             "reviewer_type": "repository",
     *             "type": "default_reviewer",
     *         }
     *     ],
     *     "page": 1,
     *     "size": 2
     * }
     * ```
     */
    getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewers(req: operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRequest, security: operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersResponse>;
    /**
     * List pull requests
     *
     * @remarks
     * Returns all pull requests on the specified repository.
     *
     * By default only open pull requests are returned. This can be controlled
     * using the `state` query parameter. To retrieve pull requests that are
     * in one of multiple states, repeat the `state` parameter for each
     * individual state.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more details.
     */
    getRepositoriesWorkspaceRepoSlugPullrequests(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse>;
    /**
     * List a pull request activity log
     *
     * @remarks
     * Returns a paginated list of the pull request's activity log.
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
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
     *                             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsActivity(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivitySecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse>;
    /**
     * Get a pull request
     *
     * @remarks
     * Returns the specified pull request.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse>;
    /**
     * List a pull request activity log
     *
     * @remarks
     * Returns a paginated list of the pull request's activity log.
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
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
     *                             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
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
     *                                 "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                             "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     *                             "href": "https://api.bitbucket.org/2.0/users/%7B%7D"
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
     *                         "href": "https://api.bitbucket.org/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
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
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivity(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivitySecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse>;
    /**
     * List comments on a pull request
     *
     * @remarks
     * Returns a paginated list of the pull request's comments.
     *
     * This includes both global, inline comments and replies.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](/cloud/bitbucket/rest/intro/#filtering) for more
     * details.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse>;
    /**
     * Get a comment on a pull request
     *
     * @remarks
     * Returns a specific pull request comment.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
    /**
     * List commits on a pull request
     *
     * @remarks
     * Returns a paginated list of the pull request's commits.
     *
     * These are the commits that are being merged into the destination
     * branch when the pull requests gets accepted.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommits(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsResponse>;
    /**
     * List changes in a pull request
     *
     * @remarks
     * Redirects to the [repository diff](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diff-spec-get)
     * with the revspec that corresponds to the pull request.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiff(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse>;
    /**
     * Get the diff stat for a pull request
     *
     * @remarks
     * Redirects to the [repository diffstat](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-diffstat-spec-get)
     * with the revspec that corresponds to the pull request.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstat(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatResponse>;
    /**
     * Get the merge task status for a pull request
     *
     * @remarks
     * When merging a pull request takes too long, the client receives a
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
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskId(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdResponse>;
    /**
     * Get the patch for a pull request
     *
     * @remarks
     * Redirects to the [repository patch](/cloud/bitbucket/rest/api-group-commits/#api-repositories-workspace-repo-slug-patch-spec-get)
     * with the revspec that corresponds to pull request.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatch(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse>;
    /**
     * List commit statuses for a pull request
     *
     * @remarks
     * Returns all statuses (e.g. build results) for the given pull
     * request.
     */
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest, security: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesSecurity, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse>;
    /**
     * Create a pull request
     *
     * @remarks
     * Creates a new pull request where the destination repository is
     * this repository and the author is the authenticated user.
     *
     * The minimum required fields to create a pull request are `title` and
     * `source`, specified by a branch name.
     *
     * ```
     * curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repository/pullrequests \
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
     */
    postRepositoriesWorkspaceRepoSlugPullrequests(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest, security: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse>;
    /**
     * Approve a pull request
     *
     * @remarks
     * Approve the specified pull request as the authenticated user.
     */
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprove(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest, security: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse>;
    /**
     * Create a comment on a pull request
     *
     * @remarks
     * Creates a new pull request comment.
     *
     * Returns the newly created pull request comment.
     */
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdComments(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRequest, security: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsResponse>;
    /**
     * Decline a pull request
     *
     * @remarks
     * Declines the pull request.
     */
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDecline(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest, security: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse>;
    /**
     * Merge a pull request
     *
     * @remarks
     * Merges the pull request.
     */
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMerge(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRequest, security: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeResponse>;
    /**
     * Request changes for a pull request
     */
    postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChanges(req: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest, security: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse>;
    /**
     * Add a user to the default reviewers
     *
     * @remarks
     * Adds the specified user to the repository's list of default
     * reviewers.
     *
     * This method is idempotent. Adding a user a second time has no effect.
     */
    putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(req: operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest, security: operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameSecurity, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse>;
    /**
     * Update a pull request
     *
     * @remarks
     * Mutates the specified pull request.
     *
     * This can be used to change the pull request's branches or description.
     *
     * Only open pull requests can be mutated.
     */
    putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestId(req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest, security: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse>;
    /**
     * Update a comment on a pull request
     *
     * @remarks
     * Updates a specific pull request comment.
     */
    putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentId(req: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRequest, security: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdSecurity, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdResponse>;
}
