package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExperimentTarget {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filters")
    public ExperimentTargetFilter[] filters;
    public ExperimentTarget withFilters(ExperimentTargetFilter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArns")
    public String[] resourceArns;
    public ExperimentTarget withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTags")
    public java.util.Map<String, String> resourceTags;
    public ExperimentTarget withResourceTags(java.util.Map<String, String> resourceTags) {
        this.resourceTags = resourceTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ExperimentTarget withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectionMode")
    public String selectionMode;
    public ExperimentTarget withSelectionMode(String selectionMode) {
        this.selectionMode = selectionMode;
        return this;
    }
}