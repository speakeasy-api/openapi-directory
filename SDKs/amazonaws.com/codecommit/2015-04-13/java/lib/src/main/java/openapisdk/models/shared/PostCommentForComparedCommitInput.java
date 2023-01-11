package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCommentForComparedCommitInput {
    @JsonProperty("afterCommitId")
    public String afterCommitId;
    public PostCommentForComparedCommitInput withAfterCommitId(String afterCommitId) {
        this.afterCommitId = afterCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeCommitId")
    public String beforeCommitId;
    public PostCommentForComparedCommitInput withBeforeCommitId(String beforeCommitId) {
        this.beforeCommitId = beforeCommitId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public PostCommentForComparedCommitInput withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("content")
    public String content;
    public PostCommentForComparedCommitInput withContent(String content) {
        this.content = content;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public PostCommentForComparedCommitInput withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonProperty("repositoryName")
    public String repositoryName;
    public PostCommentForComparedCommitInput withRepositoryName(String repositoryName) {
        this.repositoryName = repositoryName;
        return this;
    }
}