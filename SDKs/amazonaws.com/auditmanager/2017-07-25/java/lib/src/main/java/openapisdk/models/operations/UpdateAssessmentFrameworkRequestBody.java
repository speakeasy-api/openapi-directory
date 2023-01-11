package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssessmentFrameworkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceType")
    public String complianceType;
    public UpdateAssessmentFrameworkRequestBody withComplianceType(String complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonProperty("controlSets")
    public openapisdk.models.shared.UpdateAssessmentFrameworkControlSet[] controlSets;
    public UpdateAssessmentFrameworkRequestBody withControlSets(openapisdk.models.shared.UpdateAssessmentFrameworkControlSet[] controlSets) {
        this.controlSets = controlSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateAssessmentFrameworkRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateAssessmentFrameworkRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}