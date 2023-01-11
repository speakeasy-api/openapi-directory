package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListObjectChildrenRequestBodyObjectReference
 * The reference that identifies an object.
**/
public class ListObjectChildrenRequestBodyObjectReference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Selector")
    public String selector;
    public ListObjectChildrenRequestBodyObjectReference withSelector(String selector) {
        this.selector = selector;
        return this;
    }
}