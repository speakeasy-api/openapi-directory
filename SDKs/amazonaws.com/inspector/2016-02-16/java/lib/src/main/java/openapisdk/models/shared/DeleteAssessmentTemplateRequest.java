package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAssessmentTemplateRequest {
    @JsonProperty("assessmentTemplateArn")
    public String assessmentTemplateArn;
    public DeleteAssessmentTemplateRequest withAssessmentTemplateArn(String assessmentTemplateArn) {
        this.assessmentTemplateArn = assessmentTemplateArn;
        return this;
    }
}