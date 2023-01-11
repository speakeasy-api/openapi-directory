package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartAssessmentRunResponse {
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public StartAssessmentRunResponse withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
}