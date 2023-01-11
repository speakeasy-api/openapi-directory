package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExperimentStopCondition
 * Describes the stop condition for an experiment.
**/
public class ExperimentStopCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public ExperimentStopCondition withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ExperimentStopCondition withValue(String value) {
        this.value = value;
        return this;
    }
}