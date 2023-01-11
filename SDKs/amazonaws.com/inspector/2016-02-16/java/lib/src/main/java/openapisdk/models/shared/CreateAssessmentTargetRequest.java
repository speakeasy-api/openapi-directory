package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAssessmentTargetRequest {
    @JsonProperty("assessmentTargetName")
    public String assessmentTargetName;
    public CreateAssessmentTargetRequest withAssessmentTargetName(String assessmentTargetName) {
        this.assessmentTargetName = assessmentTargetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceGroupArn")
    public String resourceGroupArn;
    public CreateAssessmentTargetRequest withResourceGroupArn(String resourceGroupArn) {
        this.resourceGroupArn = resourceGroupArn;
        return this;
    }
}