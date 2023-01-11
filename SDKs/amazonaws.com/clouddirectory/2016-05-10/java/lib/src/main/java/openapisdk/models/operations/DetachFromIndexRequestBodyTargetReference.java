package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DetachFromIndexRequestBodyTargetReference
 * The reference that identifies an object.
**/
public class DetachFromIndexRequestBodyTargetReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public DetachFromIndexRequestBodyTargetReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}