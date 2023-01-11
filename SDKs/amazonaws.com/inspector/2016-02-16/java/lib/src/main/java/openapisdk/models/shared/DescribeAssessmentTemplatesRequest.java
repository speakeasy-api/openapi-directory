package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAssessmentTemplatesRequest {
    @JsonProperty("assessmentTemplateArns")
    public String[] assessmentTemplateArns;
    public DescribeAssessmentTemplatesRequest withAssessmentTemplateArns(String[] assessmentTemplateArns) {
        this.assessmentTemplateArns = assessmentTemplateArns;
        return this;
    }
}