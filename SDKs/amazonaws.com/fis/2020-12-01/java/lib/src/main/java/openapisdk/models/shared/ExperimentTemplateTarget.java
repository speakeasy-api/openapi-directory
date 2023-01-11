package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExperimentTemplateTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ExperimentTemplateTargetFilter[] filters;
    public ExperimentTemplateTarget withFilters(ExperimentTemplateTargetFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArns")
    public String[] resourceArns;
    public ExperimentTemplateTarget withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public java.util.Map<String, String> resourceTags;
    public ExperimentTemplateTarget withResourceTags(java.util.Map<String, String> resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ExperimentTemplateTarget withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionMode")
    public String selectionMode;
    public ExperimentTemplateTarget withSelectionMode(String selectionMode) {
        this.selectionMode = selectionMode;
        return this;
    }
}