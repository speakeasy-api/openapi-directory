package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetachObjectRequestBodyParentReference
 * The reference that identifies an object.
**/
public class DetachObjectRequestBodyParentReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public DetachObjectRequestBodyParentReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}