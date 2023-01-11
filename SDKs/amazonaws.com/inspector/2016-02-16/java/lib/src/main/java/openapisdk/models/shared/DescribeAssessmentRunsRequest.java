package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAssessmentRunsRequest {
    @JsonProperty("assessmentRunArns")
    public String[] assessmentRunArns;
    public DescribeAssessmentRunsRequest withAssessmentRunArns(String[] assessmentRunArns) {
        this.assessmentRunArns = assessmentRunArns;
        return this;
    }
}