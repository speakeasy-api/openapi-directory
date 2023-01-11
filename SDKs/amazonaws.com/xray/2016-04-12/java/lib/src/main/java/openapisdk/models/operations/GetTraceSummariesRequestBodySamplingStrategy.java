package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetTraceSummariesRequestBodySamplingStrategy
 * The name and value of a sampling rule to apply to a trace summary.
**/
public class GetTraceSummariesRequestBodySamplingStrategy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public openapisdk.models.shared.SamplingStrategyNameEnum name;
    public GetTraceSummariesRequestBodySamplingStrategy withName(openapisdk.models.shared.SamplingStrategyNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public Double value;
    public GetTraceSummariesRequestBodySamplingStrategy withValue(Double value) {
        this.value = value;
        return this;
    }
}