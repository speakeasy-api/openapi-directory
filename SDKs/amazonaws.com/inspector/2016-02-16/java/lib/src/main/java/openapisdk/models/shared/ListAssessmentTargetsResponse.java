package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentTargetsResponse {
    @JsonProperty("assessmentTargetArns")
    public String[] assessmentTargetArns;
    public ListAssessmentTargetsResponse withAssessmentTargetArns(String[] assessmentTargetArns) {
        this.assessmentTargetArns = assessmentTargetArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentTargetsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}