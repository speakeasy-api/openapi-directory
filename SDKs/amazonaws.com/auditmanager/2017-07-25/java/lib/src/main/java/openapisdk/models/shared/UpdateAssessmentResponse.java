package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessment")
    public Assessment assessment;
    public UpdateAssessmentResponse withAssessment(Assessment assessment) {
        this.assessment = assessment;
        return this;
    }
}