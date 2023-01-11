package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAssessmentTargetsResponse {
    @JsonProperty("assessmentTargets")
    public AssessmentTarget[] assessmentTargets;
    public DescribeAssessmentTargetsResponse withAssessmentTargets(AssessmentTarget[] assessmentTargets) {
        this.assessmentTargets = assessmentTargets;
        return this;
    }
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public DescribeAssessmentTargetsResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
}