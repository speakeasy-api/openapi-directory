package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleCollection200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public SingleCollection200ApplicationJsonCollection collection;
    public SingleCollection200ApplicationJson withCollection(SingleCollection200ApplicationJsonCollection collection) {
        this.collection = collection;
        return this;
    }
}