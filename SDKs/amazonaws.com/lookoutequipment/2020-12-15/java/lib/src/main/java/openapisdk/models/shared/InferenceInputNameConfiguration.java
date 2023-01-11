package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InferenceInputNameConfiguration
 * Specifies configuration information for the input data for the inference, including timestamp format and delimiter. 
**/
public class InferenceInputNameConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComponentTimestampDelimiter")
    public String componentTimestampDelimiter;
    public InferenceInputNameConfiguration withComponentTimestampDelimiter(String componentTimestampDelimiter) {
        this.componentTimestampDelimiter = componentTimestampDelimiter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TimestampFormat")
    public String timestampFormat;
    public InferenceInputNameConfiguration withTimestampFormat(String timestampFormat) {
        this.timestampFormat = timestampFormat;
        return this;
    }
}