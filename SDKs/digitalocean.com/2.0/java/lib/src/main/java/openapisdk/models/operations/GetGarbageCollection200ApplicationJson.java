package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGarbageCollection200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("garbage_collection")
    public GetGarbageCollection200ApplicationJsonGarbageCollection garbageCollection;
    public GetGarbageCollection200ApplicationJson withGarbageCollection(GetGarbageCollection200ApplicationJsonGarbageCollection garbageCollection) {
        this.garbageCollection = garbageCollection;
        return this;
    }
}