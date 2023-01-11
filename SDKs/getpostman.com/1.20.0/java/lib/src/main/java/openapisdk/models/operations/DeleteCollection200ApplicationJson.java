package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCollection200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public DeleteCollection200ApplicationJsonCollection collection;
    public DeleteCollection200ApplicationJson withCollection(DeleteCollection200ApplicationJsonCollection collection) {
        this.collection = collection;
        return this;
    }
}