package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateAssessmentTemplateResponse {
    @JsonProperty("assessmentTemplateArn")
    public String assessmentTemplateArn;
    public CreateAssessmentTemplateResponse withAssessmentTemplateArn(String assessmentTemplateArn) {
        this.assessmentTemplateArn = assessmentTemplateArn;
        return this;
    }
}