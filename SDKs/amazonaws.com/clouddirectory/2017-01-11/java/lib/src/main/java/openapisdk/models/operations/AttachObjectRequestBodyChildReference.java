package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachObjectRequestBodyChildReference
 * The reference that identifies an object.
**/
public class AttachObjectRequestBodyChildReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public AttachObjectRequestBodyChildReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}