package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Dimension
 * Internal only API.
**/
public class Dimension {
    @JsonProperty("Name")
    public String name;
    public Dimension withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public Dimension withValue(String value) {
        this.value = value;
        return this;
    }
}