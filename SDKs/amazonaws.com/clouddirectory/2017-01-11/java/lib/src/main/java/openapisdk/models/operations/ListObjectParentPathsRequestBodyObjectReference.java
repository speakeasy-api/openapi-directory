package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListObjectParentPathsRequestBodyObjectReference
 * The reference that identifies an object.
**/
public class ListObjectParentPathsRequestBodyObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public ListObjectParentPathsRequestBodyObjectReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}