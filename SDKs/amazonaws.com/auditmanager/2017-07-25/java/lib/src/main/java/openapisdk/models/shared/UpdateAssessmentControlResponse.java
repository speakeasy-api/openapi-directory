package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentControlResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("control")
    public AssessmentControl control;
    public UpdateAssessmentControlResponse withControl(AssessmentControl control) {
        this.control = control;
        return this;
    }
}