package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VariableDefinition
 * The new value of the variable.
**/
public class VariableDefinition {
    @JsonProperty("name")
    public String name;
    public VariableDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public VariableDefinition withValue(String value) {
        this.value = value;
        return this;
    }
}