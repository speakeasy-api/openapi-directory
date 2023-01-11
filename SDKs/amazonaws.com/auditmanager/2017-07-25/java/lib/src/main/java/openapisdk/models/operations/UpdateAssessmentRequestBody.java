package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentDescription")
    public String assessmentDescription;
    public UpdateAssessmentRequestBody withAssessmentDescription(String assessmentDescription) {
        this.assessmentDescription = assessmentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentName")
    public String assessmentName;
    public UpdateAssessmentRequestBody withAssessmentName(String assessmentName) {
        this.assessmentName = assessmentName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assessmentReportsDestination")
    public UpdateAssessmentRequestBodyAssessmentReportsDestination assessmentReportsDestination;
    public UpdateAssessmentRequestBody withAssessmentReportsDestination(UpdateAssessmentRequestBodyAssessmentReportsDestination assessmentReportsDestination) {
        this.assessmentReportsDestination = assessmentReportsDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roles")
    public openapisdk.models.shared.Role[] roles;
    public UpdateAssessmentRequestBody withRoles(openapisdk.models.shared.Role[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonProperty("scope")
    public UpdateAssessmentRequestBodyScope scope;
    public UpdateAssessmentRequestBody withScope(UpdateAssessmentRequestBodyScope scope) {
        this.scope = scope;
        return this;
    }
}