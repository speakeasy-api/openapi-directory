package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ComponentParameterDetail
 * Defines a parameter that is used to provide configuration details for the component.
**/
public class ComponentParameterDetail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValue")
    public String[] defaultValue;
    public ComponentParameterDetail withDefaultValue(String[] defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ComponentParameterDetail withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ComponentParameterDetail withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ComponentParameterDetail withType(String type) {
        this.type = type;
        return this;
    }
}