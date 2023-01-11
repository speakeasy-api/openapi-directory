package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * StaticValue
 * The static value of the resource.
**/
public class StaticValue {
    @JsonProperty("Values")
    public String[] values;
    public StaticValue withValues(String[] values) {
        this.values = values;
        return this;
    }
}