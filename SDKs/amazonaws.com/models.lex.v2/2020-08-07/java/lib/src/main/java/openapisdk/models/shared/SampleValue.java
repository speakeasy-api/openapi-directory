package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SampleValue
 * Defines one of the values for a slot type.
**/
public class SampleValue {
    @JsonProperty("value")
    public String value;
    public SampleValue withValue(String value) {
        this.value = value;
        return this;
    }
}