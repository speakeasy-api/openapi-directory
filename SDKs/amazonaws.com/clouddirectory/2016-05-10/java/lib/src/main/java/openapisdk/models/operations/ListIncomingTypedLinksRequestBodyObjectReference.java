package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListIncomingTypedLinksRequestBodyObjectReference
 * The reference that identifies an object.
**/
public class ListIncomingTypedLinksRequestBodyObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public ListIncomingTypedLinksRequestBodyObjectReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}