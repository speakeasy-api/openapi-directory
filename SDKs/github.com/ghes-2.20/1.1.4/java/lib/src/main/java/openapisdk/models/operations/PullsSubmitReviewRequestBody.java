package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsSubmitReviewRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public PullsSubmitReviewRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonProperty("event")
    public PullsSubmitReviewRequestBodyEventEnum event;
    public PullsSubmitReviewRequestBody withEvent(PullsSubmitReviewRequestBodyEventEnum event) {
        this.event = event;
        return this;
    }
}