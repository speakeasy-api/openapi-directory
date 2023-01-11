package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ParameterValue
 * A value or list of parameter values. 
**/
public class ParameterValue {
    @JsonProperty("id")
    public String id;
    public ParameterValue withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("stringValue")
    public String stringValue;
    public ParameterValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}