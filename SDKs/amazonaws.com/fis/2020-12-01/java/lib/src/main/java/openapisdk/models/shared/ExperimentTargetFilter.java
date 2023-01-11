package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExperimentTargetFilter
 * Describes a filter used for the target resources in an experiment.
**/
public class ExperimentTargetFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("path")
    public String path;
    public ExperimentTargetFilter withPath(String path) {
        this.path = path;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public ExperimentTargetFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}