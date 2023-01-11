package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAssessmentTargetRequest {
    @JsonProperty("assessmentTargetArn")
    public String assessmentTargetArn;
    public DeleteAssessmentTargetRequest withAssessmentTargetArn(String assessmentTargetArn) {
        this.assessmentTargetArn = assessmentTargetArn;
        return this;
    }
}