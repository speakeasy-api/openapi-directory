package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCodeReviewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeReview")
    public CodeReview codeReview;
    public CreateCodeReviewResponse withCodeReview(CodeReview codeReview) {
        this.codeReview = codeReview;
        return this;
    }
}