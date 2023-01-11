package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullsCreateReplyForReviewCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public PullsCreateReplyForReviewCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}