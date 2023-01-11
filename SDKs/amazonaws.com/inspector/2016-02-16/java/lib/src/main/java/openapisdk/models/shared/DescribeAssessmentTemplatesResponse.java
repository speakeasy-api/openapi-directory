package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAssessmentTemplatesResponse {
    @JsonProperty("assessmentTemplates")
    public AssessmentTemplate[] assessmentTemplates;
    public DescribeAssessmentTemplatesResponse withAssessmentTemplates(AssessmentTemplate[] assessmentTemplates) {
        this.assessmentTemplates = assessmentTemplates;
        return this;
    }
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public DescribeAssessmentTemplatesResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
}