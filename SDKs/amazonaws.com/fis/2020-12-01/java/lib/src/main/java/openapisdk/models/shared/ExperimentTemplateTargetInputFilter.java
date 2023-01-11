package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExperimentTemplateTargetInputFilter
 * Describes a filter used for the target resource input in an experiment template.
**/
public class ExperimentTemplateTargetInputFilter {
    @JsonProperty("path")
    public String path;
    public ExperimentTemplateTargetInputFilter withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public ExperimentTemplateTargetInputFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}