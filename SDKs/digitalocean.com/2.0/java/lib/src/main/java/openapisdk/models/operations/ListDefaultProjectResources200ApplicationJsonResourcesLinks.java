package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDefaultProjectResources200ApplicationJsonResourcesLinks
 * The links object contains the `self` object, which contains the resource relationship.
**/
public class ListDefaultProjectResources200ApplicationJsonResourcesLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public String self;
    public ListDefaultProjectResources200ApplicationJsonResourcesLinks withSelf(String self) {
        this.self = self;
        return this;
    }
}