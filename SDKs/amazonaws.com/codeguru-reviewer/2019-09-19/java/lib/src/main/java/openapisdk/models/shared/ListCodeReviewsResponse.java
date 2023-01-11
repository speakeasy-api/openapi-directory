package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCodeReviewsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeReviewSummaries")
    public CodeReviewSummary[] codeReviewSummaries;
    public ListCodeReviewsResponse withCodeReviewSummaries(CodeReviewSummary[] codeReviewSummaries) {
        this.codeReviewSummaries = codeReviewSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCodeReviewsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}