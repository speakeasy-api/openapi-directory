package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCommentForComparedCommitOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterBlobId")
    public String afterBlobId;
    public PostCommentForComparedCommitOutput withAfterBlobId(String afterBlobId) {
        this.afterBlobId = afterBlobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterCommitId")
    public String afterCommitId;
    public PostCommentForComparedCommitOutput withAfterCommitId(String afterCommitId) {
        this.afterCommitId = afterCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeBlobId")
    public String beforeBlobId;
    public PostCommentForComparedCommitOutput withBeforeBlobId(String beforeBlobId) {
        this.beforeBlobId = beforeBlobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeCommitId")
    public String beforeCommitId;
    public PostCommentForComparedCommitOutput withBeforeCommitId(String beforeCommitId) {
        this.beforeCommitId = beforeCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("comment")
    public Comment comment;
    public PostCommentForComparedCommitOutput withComment(Comment comment) {
        this.comment = comment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public PostCommentForComparedCommitOutput withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PostCommentForComparedCommitOutput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}