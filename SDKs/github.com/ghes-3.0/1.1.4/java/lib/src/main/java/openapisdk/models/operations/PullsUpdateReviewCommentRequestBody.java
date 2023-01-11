package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullsUpdateReviewCommentRequestBody {
    @JsonProperty("body")
    public String body;
    public PullsUpdateReviewCommentRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}