package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExperimentTemplateStopCondition
 * Describes a stop condition for an experiment template.
**/
public class ExperimentTemplateStopCondition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public ExperimentTemplateStopCondition withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ExperimentTemplateStopCondition withValue(String value) {
        this.value = value;
        return this;
    }
}