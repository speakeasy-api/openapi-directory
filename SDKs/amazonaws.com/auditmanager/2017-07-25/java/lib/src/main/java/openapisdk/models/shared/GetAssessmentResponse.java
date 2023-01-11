package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssessmentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessment")
    public Assessment assessment;
    public GetAssessmentResponse withAssessment(Assessment assessment) {
        this.assessment = assessment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userRole")
    public Role userRole;
    public GetAssessmentResponse withUserRole(Role userRole) {
        this.userRole = userRole;
        return this;
    }
}