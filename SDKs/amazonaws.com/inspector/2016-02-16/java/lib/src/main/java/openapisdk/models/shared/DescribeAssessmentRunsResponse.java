package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAssessmentRunsResponse {
    @JsonProperty("assessmentRuns")
    public AssessmentRun[] assessmentRuns;
    public DescribeAssessmentRunsResponse withAssessmentRuns(AssessmentRun[] assessmentRuns) {
        this.assessmentRuns = assessmentRuns;
        return this;
    }
    @JsonProperty("failedItems")
    public java.util.Map<String, FailedItemDetails> failedItems;
    public DescribeAssessmentRunsResponse withFailedItems(java.util.Map<String, FailedItemDetails> failedItems) {
        this.failedItems = failedItems;
        return this;
    }
}