package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttachTypedLinkRequestBodySourceObjectReference
 * The reference that identifies an object.
**/
public class AttachTypedLinkRequestBodySourceObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public AttachTypedLinkRequestBodySourceObjectReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}