package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCodeReviewResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeReview")
    public CodeReview codeReview;
    public DescribeCodeReviewResponse withCodeReview(CodeReview codeReview) {
        this.codeReview = codeReview;
        return this;
    }
}