package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ComponentParameter
 * Contains a key/value pair that sets the named component parameter.
**/
public class ComponentParameter {
    @JsonProperty("name")
    public String name;
    public ComponentParameter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String[] value;
    public ComponentParameter withValue(String[] value) {
        this.value = value;
        return this;
    }
}