package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddFacetToObjectRequestBodyObjectReference
 * The reference that identifies an object.
**/
public class AddFacetToObjectRequestBodyObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public AddFacetToObjectRequestBodyObjectReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}