package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentRunsResponse {
    @JsonProperty("assessmentRunArns")
    public String[] assessmentRunArns;
    public ListAssessmentRunsResponse withAssessmentRunArns(String[] assessmentRunArns) {
        this.assessmentRunArns = assessmentRunArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentRunsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}