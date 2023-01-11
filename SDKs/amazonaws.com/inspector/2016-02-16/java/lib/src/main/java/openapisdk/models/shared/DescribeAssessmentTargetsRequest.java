package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAssessmentTargetsRequest {
    @JsonProperty("assessmentTargetArns")
    public String[] assessmentTargetArns;
    public DescribeAssessmentTargetsRequest withAssessmentTargetArns(String[] assessmentTargetArns) {
        this.assessmentTargetArns = assessmentTargetArns;
        return this;
    }
}