package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateExperimentTemplateTargetInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ExperimentTemplateTargetInputFilter[] filters;
    public CreateExperimentTemplateTargetInput withFilters(ExperimentTemplateTargetInputFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArns")
    public String[] resourceArns;
    public CreateExperimentTemplateTargetInput withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public java.util.Map<String, String> resourceTags;
    public CreateExperimentTemplateTargetInput withResourceTags(java.util.Map<String, String> resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public CreateExperimentTemplateTargetInput withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionMode")
    public String selectionMode;
    public CreateExperimentTemplateTargetInput withSelectionMode(String selectionMode) {
        this.selectionMode = selectionMode;
        return this;
    }
}