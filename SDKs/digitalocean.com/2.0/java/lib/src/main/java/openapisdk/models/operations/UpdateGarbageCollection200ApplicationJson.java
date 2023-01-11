package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGarbageCollection200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("garbage_collection")
    public UpdateGarbageCollection200ApplicationJsonGarbageCollection garbageCollection;
    public UpdateGarbageCollection200ApplicationJson withGarbageCollection(UpdateGarbageCollection200ApplicationJsonGarbageCollection garbageCollection) {
        this.garbageCollection = garbageCollection;
        return this;
    }
}