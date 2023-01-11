package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ParameterNameValue
 * An individual DAX parameter.
**/
public class ParameterNameValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterName")
    public String parameterName;
    public ParameterNameValue withParameterName(String parameterName) {
        this.parameterName = parameterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterValue")
    public String parameterValue;
    public ParameterNameValue withParameterValue(String parameterValue) {
        this.parameterValue = parameterValue;
        return this;
    }
}