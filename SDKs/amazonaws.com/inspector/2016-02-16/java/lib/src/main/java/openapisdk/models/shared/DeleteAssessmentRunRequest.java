package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAssessmentRunRequest {
    @JsonProperty("assessmentRunArn")
    public String assessmentRunArn;
    public DeleteAssessmentRunRequest withAssessmentRunArn(String assessmentRunArn) {
        this.assessmentRunArn = assessmentRunArn;
        return this;
    }
}