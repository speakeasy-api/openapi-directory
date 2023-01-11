package openapisdk.models.shared;


public enum HookEventEventEnum {
    PULLREQUEST_UNAPPROVED("pullrequest:unapproved"),
    ISSUE_COMMENT_CREATED("issue:comment_created"),
    REPO_IMPORTED("repo:imported"),
    REPO_CREATED("repo:created"),
    REPO_COMMIT_COMMENT_CREATED("repo:commit_comment_created"),
    PULLREQUEST_APPROVED("pullrequest:approved"),
    PULLREQUEST_COMMENT_UPDATED("pullrequest:comment_updated"),
    ISSUE_UPDATED("issue:updated"),
    PROJECT_UPDATED("project:updated"),
    REPO_DELETED("repo:deleted"),
    PULLREQUEST_CHANGES_REQUEST_CREATED("pullrequest:changes_request_created"),
    PULLREQUEST_COMMENT_CREATED("pullrequest:comment_created"),
    REPO_COMMIT_STATUS_UPDATED("repo:commit_status_updated"),
    PULLREQUEST_UPDATED("pullrequest:updated"),
    ISSUE_CREATED("issue:created"),
    REPO_FORK("repo:fork"),
    PULLREQUEST_COMMENT_DELETED("pullrequest:comment_deleted"),
    REPO_COMMIT_STATUS_CREATED("repo:commit_status_created"),
    REPO_UPDATED("repo:updated"),
    PULLREQUEST_REJECTED("pullrequest:rejected"),
    PULLREQUEST_FULFILLED("pullrequest:fulfilled"),
    PULLREQUEST_CREATED("pullrequest:created"),
    PULLREQUEST_CHANGES_REQUEST_REMOVED("pullrequest:changes_request_removed"),
    REPO_TRANSFER("repo:transfer"),
    REPO_PUSH("repo:push");

    public final String value;

    private HookEventEventEnum(String value) {
        this.value = value;
    }
}
