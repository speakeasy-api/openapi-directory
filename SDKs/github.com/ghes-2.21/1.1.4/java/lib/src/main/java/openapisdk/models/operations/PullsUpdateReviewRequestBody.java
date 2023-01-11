package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PullsUpdateReviewRequestBody {
    @JsonProperty("body")
    public String body;
    public PullsUpdateReviewRequestBody withBody(String body) {
        this.body = body;
        return this;
    }
}