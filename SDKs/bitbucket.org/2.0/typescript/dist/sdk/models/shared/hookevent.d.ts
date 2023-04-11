import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The event identifier.
 */
export declare enum HookEventEventEnum {
    PullrequestChangesRequestCreated = "pullrequest:changes_request_created",
    PullrequestRejected = "pullrequest:rejected",
    IssueUpdated = "issue:updated",
    PullrequestUnapproved = "pullrequest:unapproved",
    PullrequestCommentDeleted = "pullrequest:comment_deleted",
    RepoCommitStatusUpdated = "repo:commit_status_updated",
    PullrequestChangesRequestRemoved = "pullrequest:changes_request_removed",
    PullrequestCommentCreated = "pullrequest:comment_created",
    RepoTransfer = "repo:transfer",
    PullrequestFulfilled = "pullrequest:fulfilled",
    RepoCommitCommentCreated = "repo:commit_comment_created",
    IssueCommentCreated = "issue:comment_created",
    ProjectUpdated = "project:updated",
    PullrequestCommentUpdated = "pullrequest:comment_updated",
    RepoCreated = "repo:created",
    RepoFork = "repo:fork",
    RepoUpdated = "repo:updated",
    RepoPush = "repo:push",
    PullrequestApproved = "pullrequest:approved",
    RepoDeleted = "repo:deleted",
    RepoCommitStatusCreated = "repo:commit_status_created",
    RepoImported = "repo:imported",
    IssueCreated = "issue:created",
    PullrequestUpdated = "pullrequest:updated",
    PullrequestCreated = "pullrequest:created"
}
/**
 * An event, associated with a resource or subject type.
 */
export declare class HookEvent extends SpeakeasyBase {
    /**
     * The category this event belongs to.
     */
    category?: string;
    /**
     * More detailed description of the webhook event type.
     */
    description?: string;
    /**
     * The event identifier.
     */
    event?: HookEventEventEnum;
    /**
     * Summary of the webhook event type.
     */
    label?: string;
}
