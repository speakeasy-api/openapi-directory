package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollection200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collection")
    public UpdateCollection200ApplicationJsonCollection collection;
    public UpdateCollection200ApplicationJson withCollection(UpdateCollection200ApplicationJsonCollection collection) {
        this.collection = collection;
        return this;
    }
}