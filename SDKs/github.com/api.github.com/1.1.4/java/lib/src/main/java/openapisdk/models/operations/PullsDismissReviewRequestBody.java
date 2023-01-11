package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PullsDismissReviewRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("event")
    public String event;
    public PullsDismissReviewRequestBody withEvent(String event) {
        this.event = event;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public PullsDismissReviewRequestBody withMessage(String message) {
        this.message = message;
        return this;
    }
}