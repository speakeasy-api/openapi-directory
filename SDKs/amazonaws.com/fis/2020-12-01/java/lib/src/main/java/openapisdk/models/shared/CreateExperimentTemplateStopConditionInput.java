package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateExperimentTemplateStopConditionInput
 * Specifies a stop condition for an experiment template.
**/
public class CreateExperimentTemplateStopConditionInput {
    @JsonProperty("source")
    public String source;
    public CreateExperimentTemplateStopConditionInput withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CreateExperimentTemplateStopConditionInput withValue(String value) {
        this.value = value;
        return this;
    }
}