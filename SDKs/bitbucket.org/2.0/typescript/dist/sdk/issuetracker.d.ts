import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class IssueTracker {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueId - Deletes the specified issue. This requires write access to the
     * repository.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueId(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Deletes an attachment.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Deletes the specified comment.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Retract your vote.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse>;
    /**
     * deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Stop watching this issue.
    **/
    deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req: operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugComponents - Returns the components that have been defined in the issue tracker.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugComponents(req: operations.GetRepositoriesWorkspaceRepoSlugComponentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugComponentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugComponentsComponentId - Returns the specified issue tracker component object.
    **/
    getRepositoriesWorkspaceRepoSlugComponentsComponentId(req: operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugComponentsComponentIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssues - Returns the issues in the issue tracker.
    **/
    getRepositoriesWorkspaceRepoSlugIssues(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip - This endpoint is used to poll for the progress of an issue export
     * job and return the zip file after the job is complete.
     * As long as the job is running, this will return a 200 response
     * with in the response body a description of the current status.
     *
     * After the job has been scheduled, but before it starts executing, this
     * endpoint's response is:
     *
     * {
     *  "type": "issue_job_status",
     *  "status": "ACCEPTED",
     *  "phase": "Initializing",
     *  "total": 0,
     *  "count": 0,
     *  "pct": 0
     * }
     *
     *
     * Then once it starts running, it becomes:
     *
     * {
     *  "type": "issue_job_status",
     *  "status": "STARTED",
     *  "phase": "Attachments",
     *  "total": 15,
     *  "count": 11,
     *  "pct": 73
     * }
     *
     * Once the job has successfully completed, it returns a stream of the zip file.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZip(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesImport - When using GET, this endpoint reports the status of the current import task. Request example:
     *
     * ```
     * $ curl -u <username> -X GET https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
     * ```
     *
     * After the job has been scheduled, but before it starts executing, this endpoint's response is:
     *
     * ```
     * < HTTP/1.1 202 Accepted
     * {
     *     "type": "issue_job_status",
     *     "status": "PENDING",
     *     "phase": "Attachments",
     *     "total": 15,
     *     "count": 0,
     *     "percent": 0
     * }
     * ```
     *
     * Once it starts running, it is a 202 response with status STARTED and progress filled.
     *
     * After it is finished, it becomes a 200 response with status SUCCESS or FAILURE.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesImport(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesImportRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesImportResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueId - Returns the specified issue.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueId(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Returns all attachments for this issue.
     *
     * This returns the files' meta data. This does not return the files'
     * actual contents.
     *
     * The files are always ordered by their upload date.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath - Returns the contents of the specified file attachment.
     *
     * Note that this endpoint does not return a JSON response, but instead
     * returns a redirect pointing to the actual file that in turn will return
     * the raw contents.
     *
     * The redirect URL contains a one-time token that has a limited lifetime.
     * As a result, the link should not be persisted, stored, or shared.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPath(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Returns the list of all changes that have been made to the specified
     * issue. Changes are returned in chronological order with the oldest
     * change first.
     *
     * Each time an issue is edited in the UI or through the API, an immutable
     * change record is created under the `/issues/123/changes` endpoint. It
     * also has a comment associated with the change.
     *
     * Note that this operation is changing significantly, due to privacy changes.
     * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-the-issue-changes-api)
     * for details.
     *
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes - | jq .
     *
     * {
     *   "pagelen": 20,
     *   "values": [
     *     {
     *       "changes": {
     *         "priority": {
     *           "new": "trivial",
     *           "old": "major"
     *         },
     *         "assignee": {
     *           "new": "",
     *           "old": "evzijst"
     *         },
     *         "assignee_account_id": {
     *           "new": "",
     *           "old": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
     *         },
     *         "kind": {
     *           "new": "enhancement",
     *           "old": "bug"
     *         }
     *       },
     *       "links": {
     *         "self": {
     *           "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1/changes/2"
     *         },
     *         "html": {
     *           "href": "https://bitbucket.org/evzijst/dogslow/issues/1#comment-2"
     *         }
     *       },
     *       "issue": {
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow/issues/1"
     *           }
     *         },
     *         "type": "issue",
     *         "id": 1,
     *         "repository": {
     *           "links": {
     *             "self": {
     *               "href": "https://api.bitbucket.org/2.0/repositories/evzijst/dogslow"
     *             },
     *             "html": {
     *               "href": "https://bitbucket.org/evzijst/dogslow"
     *             },
     *             "avatar": {
     *               "href": "https://bitbucket.org/evzijst/dogslow/avatar/32/"
     *             }
     *           },
     *           "type": "repository",
     *           "name": "dogslow",
     *           "full_name": "evzijst/dogslow",
     *           "uuid": "{988b17c6-1a47-4e70-84ee-854d5f012bf6}"
     *         },
     *         "title": "Updated title"
     *       },
     *       "created_on": "2018-03-03T00:35:28.353630+00:00",
     *       "user": {
     *         "username": "evzijst",
     *         "nickname": "evzijst",
     *         "display_name": "evzijst",
     *         "type": "user",
     *         "uuid": "{aaa7972b-38af-4fb1-802d-6e3854c95778}",
     *         "links": {
     *           "self": {
     *             "href": "https://api.bitbucket.org/2.0/users/evzijst"
     *           },
     *           "html": {
     *             "href": "https://bitbucket.org/evzijst/"
     *           },
     *           "avatar": {
     *             "href": "https://bitbucket.org/account/evzijst/avatar/32/"
     *           }
     *         }
     *       },
     *       "message": {
     *         "raw": "Removed assignee, changed kind and priority.",
     *         "markup": "markdown",
     *         "html": "<p>Removed assignee, changed kind and priority.</p>",
     *         "type": "rendered"
     *       },
     *       "type": "issue_change",
     *       "id": 2
     *     }
     *   ],
     *   "page": 1
     * }
     * ```
     *
     * Changes support [filtering and sorting](../../../meta/filtering) that
     * can be used to search for specific changes. For instance, to see
     * when an issue transitioned to "resolved":
     *
     * ```
     * $ curl -s https://api.bitbucket.org/2.0/repositories/site/master/issues/1/changes \
     *    -G --data-urlencode='q=changes.state.new = "resolved"'
     * ```
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
     *
     * N.B.
     *
     * The `changes.assignee` and `changes.assignee_account_id` fields are not
     * a `user` object. Instead, they contain the raw `username` and
     * `account_id` of the user. This is to protect the integrity of the audit
     * log even after a user account gets deleted.
     *
     * The `changes.assignee` field is deprecated will disappear in the
     * future. Use `changes.assignee_account_id` instead.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId - Returns the specified issue change object.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeId(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Returns a paginated list of all comments that were made on the
     * specified issue.
     *
     * The default sorting is oldest to newest and can be overridden with
     * the `sort` query parameter.
     *
     * This endpoint also supports filtering and sorting of the results. See
     * [filtering and sorting](../../../../../../meta/filtering) for more details.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Returns the specified issue comment object.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Check whether the authenticated user has voted for this issue.
     * A 204 status code indicates that the user has voted, while a 404
     * implies they haven't.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Indicated whether or not the authenticated user is watching this
     * issue.
    **/
    getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req: operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugMilestones - Returns the milestones that have been defined in the issue tracker.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugMilestones(req: operations.GetRepositoriesWorkspaceRepoSlugMilestonesRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugMilestonesResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId - Returns the specified issue tracker milestone object.
    **/
    getRepositoriesWorkspaceRepoSlugMilestonesMilestoneId(req: operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugVersions - Returns the versions that have been defined in the issue tracker.
     *
     * This resource is only available on repositories that have the issue
     * tracker enabled.
    **/
    getRepositoriesWorkspaceRepoSlugVersions(req: operations.GetRepositoriesWorkspaceRepoSlugVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugVersionsResponse>;
    /**
     * getRepositoriesWorkspaceRepoSlugVersionsVersionId - Returns the specified issue tracker version object.
    **/
    getRepositoriesWorkspaceRepoSlugVersionsVersionId(req: operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssues - Creates a new issue.
     *
     * This call requires authentication. Private repositories or private
     * issue trackers require the caller to authenticate with an account that
     * has appropriate authorization.
     *
     * The authenticated user is used for the issue's `reporter` field.
    **/
    postRepositoriesWorkspaceRepoSlugIssues(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesExport - A POST request to this endpoint initiates a new background celery task that archives the repo's issues.
     *
     * For example, you can run:
     *
     * curl -u <username> -X POST http://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/
     * issues/export
     *
     * When the job has been accepted, it will return a 202 (Accepted) along with a unique url to this job in the
     * 'Location' response header. This url is the endpoint for where the user can obtain their zip files."
    **/
    postRepositoriesWorkspaceRepoSlugIssuesExport(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesExportRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesExportResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesImport - A POST request to this endpoint will import the zip file given by the archive parameter into the repository. All
     * existing issues will be deleted and replaced by the contents of the imported zip file.
     *
     * Imports are done through a multipart/form-data POST. There is one valid and required form field, with the name
     * "archive," which needs to be a file field:
     *
     * ```
     * $ curl -u <username> -X POST -F archive=@/path/to/file.zip https://api.bitbucket.org/2.0/repositories/<owner_username>/<repo_slug>/issues/import
     * ```
     *
     * When the import job is accepted, here is example output:
     *
     * ```
     * < HTTP/1.1 202 Accepted
     *
     * {
     *     "type": "issue_job_status",
     *     "status": "ACCEPTED",
     *     "phase": "Attachments",
     *     "total": 15,
     *     "count": 0,
     *     "percent": 0
     * }
     * ```
    **/
    postRepositoriesWorkspaceRepoSlugIssuesImport(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesImportRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesImportResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments - Upload new issue attachments.
     *
     * To upload files, perform a `multipart/form-data` POST containing one
     * or more file fields.
     *
     * When a file is uploaded with the same name as an existing attachment,
     * then the existing file will be replaced.
    **/
    postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachments(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges - Makes a change to the specified issue.
     *
     * For example, to change an issue's state and assignee, create a new
     * change object that modifies these fields:
     *
     * ```
     * curl https://api.bitbucket.org/2.0/site/master/issues/1234/changes \
     *   -s -u evzijst -X POST -H "Content-Type: application/json" \
     *   -d '{
     *     "changes": {
     *       "assignee_account_id": {
     *         "new": "557058:c0b72ad0-1cb5-4018-9cdc-0cde8492c443"
     *       },
     *       "state": {
     *         "new": 'resolved"
     *       }
     *     }
     *     "message": {
     *       "raw": "This is now resolved."
     *     }
     *   }'
     * ```
     *
     * The above example also includes a custom comment to go alongside the
     * change. This comment will also be visible on the issue page in the UI.
     *
     * The fields of the `changes` object are strings, not objects. This
     * allows for immutable change log records, even after user accounts,
     * milestones, or other objects recorded in a change entry, get renamed or
     * deleted.
     *
     * The `assignee_account_id` field stores the account id. When POSTing a
     * new change and changing the assignee, the client should therefore use
     * the user's account_id in the `changes.assignee_account_id.new` field.
     *
     * This call requires authentication. Private repositories or private
     * issue trackers require the caller to authenticate with an account that
     * has appropriate authorization.
    **/
    postRepositoriesWorkspaceRepoSlugIssuesIssueIdChanges(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse>;
    /**
     * postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments - Creates a new issue comment.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/ \
     *   -X POST -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "Lorem ipsum."}}'
     * ```
    **/
    postRepositoriesWorkspaceRepoSlugIssuesIssueIdComments(req: operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueId - Modifies the issue.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repostories/evzijst/dogslow/issues/123 \
     *   -u evzijst -s -X PUT -H 'Content-Type: application/json' \
     *   -d '{
     *   "title": "Updated title",
     *   "assignee": {
     *     "username": "evzijst"
     *   },
     *   "priority": "minor",
     *   "version": {
     *     "name": "1.0"
     *   },
     *   "component": null
     * }'
     * ```
     *
     * This example changes the `title`, `assignee`, `priority` and the
     * `version`. It also removes the value of the `component` from the issue
     * by setting the field to `null`. Any field not present keeps its existing
     * value.
     *
     * Each time an issue is edited in the UI or through the API, an immutable
     * change record is created under the `/issues/123/changes` endpoint. It
     * also has a comment associated with the change.
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueId(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId - Updates the content of the specified issue comment. Note that only
     * the `content.raw` field can be modified.
     *
     * ```
     * $ curl https://api.bitbucket.org/2.0/repositories/atlassian/prlinks/issues/42/comments/5728901 \
     *   -X PUT -u evzijst \
     *   -H 'Content-Type: application/json' \
     *   -d '{"content": {"raw": "Lorem ipsum."}'
     * ```
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentId(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote - Vote for this issue.
     *
     * To cast your vote, do an empty PUT. The 204 status code indicates that
     * the operation was successful.
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueIdVote(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse>;
    /**
     * putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch - Start watching this issue.
     *
     * To start watching this issue, do an empty PUT. The 204 status code
     * indicates that the operation was successful.
    **/
    putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatch(req: operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse>;
}
