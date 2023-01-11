package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentTargetRequest {
    @JsonProperty("assessmentTargetArn")
    public String assessmentTargetArn;
    public UpdateAssessmentTargetRequest withAssessmentTargetArn(String assessmentTargetArn) {
        this.assessmentTargetArn = assessmentTargetArn;
        return this;
    }
    @JsonProperty("assessmentTargetName")
    public String assessmentTargetName;
    public UpdateAssessmentTargetRequest withAssessmentTargetName(String assessmentTargetName) {
        this.assessmentTargetName = assessmentTargetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroupArn")
    public String resourceGroupArn;
    public UpdateAssessmentTargetRequest withResourceGroupArn(String resourceGroupArn) {
        this.resourceGroupArn = resourceGroupArn;
        return this;
    }
}