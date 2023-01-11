package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ParameterObject
 * Contains information about a parameter object.
**/
public class ParameterObject {
    @JsonProperty("attributes")
    public ParameterAttribute[] attributes;
    public ParameterObject withAttributes(ParameterAttribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ParameterObject withId(String id) {
        this.id = id;
        return this;
    }
}