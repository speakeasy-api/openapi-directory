package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsCreateReviewCommentAlternativeRequestBody {
    @JsonProperty("body")
    public String body;
    public PullsCreateReviewCommentAlternativeRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_reply_to")
    public Long inReplyTo;
    public PullsCreateReviewCommentAlternativeRequestBody withInReplyTo(Long inReplyTo) {
        this.inReplyTo = inReplyTo;
        return this;
    }
}