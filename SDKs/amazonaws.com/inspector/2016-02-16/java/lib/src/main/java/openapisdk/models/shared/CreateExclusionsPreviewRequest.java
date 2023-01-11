package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateExclusionsPreviewRequest {
    @JsonProperty("assessmentTemplateArn")
    public String assessmentTemplateArn;
    public CreateExclusionsPreviewRequest withAssessmentTemplateArn(String assessmentTemplateArn) {
        this.assessmentTemplateArn = assessmentTemplateArn;
        return this;
    }
}