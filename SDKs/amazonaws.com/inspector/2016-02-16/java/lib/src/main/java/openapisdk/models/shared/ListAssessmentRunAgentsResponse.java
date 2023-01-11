package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAssessmentRunAgentsResponse {
    @JsonProperty("assessmentRunAgents")
    public AssessmentRunAgent[] assessmentRunAgents;
    public ListAssessmentRunAgentsResponse withAssessmentRunAgents(AssessmentRunAgent[] assessmentRunAgents) {
        this.assessmentRunAgents = assessmentRunAgents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAssessmentRunAgentsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}