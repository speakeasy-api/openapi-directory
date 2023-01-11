package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAssessmentTargetResponse {
    @JsonProperty("assessmentTargetArn")
    public String assessmentTargetArn;
    public CreateAssessmentTargetResponse withAssessmentTargetArn(String assessmentTargetArn) {
        this.assessmentTargetArn = assessmentTargetArn;
        return this;
    }
}