package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListExclusionsRequest {
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public ListExclusionsRequest withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListExclusionsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListExclusionsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}