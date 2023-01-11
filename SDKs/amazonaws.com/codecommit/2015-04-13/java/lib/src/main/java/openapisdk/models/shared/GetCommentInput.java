package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetCommentInput {
    @JsonProperty("commentId")
    public String commentId;
    public GetCommentInput withCommentId(String commentId) {
        this.commentId = commentId;
        return this;
    }
}