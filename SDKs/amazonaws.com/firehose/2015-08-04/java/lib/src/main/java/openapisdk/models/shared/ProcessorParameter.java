package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ProcessorParameter
 * Describes the processor parameter.
**/
public class ProcessorParameter {
    @JsonProperty("ParameterName")
    public ProcessorParameterNameEnum parameterName;
    public ProcessorParameter withParameterName(ProcessorParameterNameEnum parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    @JsonProperty("ParameterValue")
    public String parameterValue;
    public ProcessorParameter withParameterValue(String parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    }
}