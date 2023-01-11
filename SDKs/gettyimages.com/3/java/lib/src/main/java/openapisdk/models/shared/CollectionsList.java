package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CollectionsList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public Collection[] collections;
    public CollectionsList withCollections(Collection[] collections) {
        this.collections = collections;
        return this;
    }
}