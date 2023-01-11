package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputDefinition
 * The definition of the input.
**/
public class InputDefinition {
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public InputDefinition withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
}