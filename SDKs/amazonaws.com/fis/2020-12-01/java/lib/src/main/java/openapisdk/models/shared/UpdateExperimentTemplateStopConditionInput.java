package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateExperimentTemplateStopConditionInput
 * Specifies a stop condition for an experiment. You can define a stop condition as a CloudWatch alarm.
**/
public class UpdateExperimentTemplateStopConditionInput {
    @JsonProperty("source")
    public String source;
    public UpdateExperimentTemplateStopConditionInput withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public UpdateExperimentTemplateStopConditionInput withValue(String value) {
        this.value = value;
        return this;
    }
}