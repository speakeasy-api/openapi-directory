package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RemoveFacetFromObjectRequestBodyObjectReference
 * The reference that identifies an object.
**/
public class RemoveFacetFromObjectRequestBodyObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public RemoveFacetFromObjectRequestBodyObjectReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}