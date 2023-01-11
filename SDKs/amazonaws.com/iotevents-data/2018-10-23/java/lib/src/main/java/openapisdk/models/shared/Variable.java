package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Variable
 * The current state of the variable.
**/
public class Variable {
    @JsonProperty("name")
    public String name;
    public Variable withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Variable withValue(String value) {
        this.value = value;
        return this;
    }
}