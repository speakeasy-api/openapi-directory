package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateInputRequestBodyInputDefinition
 * The definition of the input.
**/
public class CreateInputRequestBodyInputDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public openapisdk.models.shared.Attribute[] attributes;
    public CreateInputRequestBodyInputDefinition withAttributes(openapisdk.models.shared.Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
}