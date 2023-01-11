package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentTargetsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public AssessmentTargetFilter filter;
    public ListAssessmentTargetsRequest withFilter(AssessmentTargetFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListAssessmentTargetsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentTargetsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}