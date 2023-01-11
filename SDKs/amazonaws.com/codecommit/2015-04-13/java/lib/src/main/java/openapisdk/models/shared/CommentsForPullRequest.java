package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommentsForPullRequest
 * Returns information about comments on a pull request.
**/
public class CommentsForPullRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterBlobId")
    public String afterBlobId;
    public CommentsForPullRequest withAfterBlobId(String afterBlobId) {
        this.afterBlobId = afterBlobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterCommitId")
    public String afterCommitId;
    public CommentsForPullRequest withAfterCommitId(String afterCommitId) {
        this.afterCommitId = afterCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeBlobId")
    public String beforeBlobId;
    public CommentsForPullRequest withBeforeBlobId(String beforeBlobId) {
        this.beforeBlobId = beforeBlobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeCommitId")
    public String beforeCommitId;
    public CommentsForPullRequest withBeforeCommitId(String beforeCommitId) {
        this.beforeCommitId = beforeCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comments")
    public Comment[] comments;
    public CommentsForPullRequest withComments(Comment[] comments) {
        this.comments = comments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public CommentsForPullRequest withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pullRequestId")
    public String pullRequestId;
    public CommentsForPullRequest withPullRequestId(String pullRequestId) {
        this.pullRequestId = pullRequestId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public CommentsForPullRequest withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}