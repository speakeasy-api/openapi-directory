package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentControlSetStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controlSet")
    public AssessmentControlSet controlSet;
    public UpdateAssessmentControlSetStatusResponse withControlSet(AssessmentControlSet controlSet) {
        this.controlSet = controlSet;
        return this;
    }
}