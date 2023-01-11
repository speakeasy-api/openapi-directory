package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExperimentTemplateTargetFilter
 * Describes a filter used for the target resources in an experiment template.
**/
public class ExperimentTemplateTargetFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ExperimentTemplateTargetFilter withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public ExperimentTemplateTargetFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}