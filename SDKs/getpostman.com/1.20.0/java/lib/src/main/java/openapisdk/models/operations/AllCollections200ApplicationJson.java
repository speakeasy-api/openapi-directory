package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllCollections200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collections")
    public AllCollections200ApplicationJsonCollections[] collections;
    public AllCollections200ApplicationJson withCollections(AllCollections200ApplicationJsonCollections[] collections) {
        this.collections = collections;
        return this;
    }
}