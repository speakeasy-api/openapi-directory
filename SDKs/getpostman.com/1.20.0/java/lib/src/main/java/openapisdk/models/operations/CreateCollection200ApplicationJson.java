package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollection200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public CreateCollection200ApplicationJsonCollection collection;
    public CreateCollection200ApplicationJson withCollection(CreateCollection200ApplicationJsonCollection collection) {
        this.collection = collection;
        return this;
    }
}