package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAssessmentFrameworkRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("complianceType")
    public String complianceType;
    public CreateAssessmentFrameworkRequestBody withComplianceType(String complianceType) {
        this.complianceType = complianceType;
        return this;
    }
    @JsonProperty("controlSets")
    public openapisdk.models.shared.CreateAssessmentFrameworkControlSet[] controlSets;
    public CreateAssessmentFrameworkRequestBody withControlSets(openapisdk.models.shared.CreateAssessmentFrameworkControlSet[] controlSets) {
        this.controlSets = controlSets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateAssessmentFrameworkRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateAssessmentFrameworkRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateAssessmentFrameworkRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}