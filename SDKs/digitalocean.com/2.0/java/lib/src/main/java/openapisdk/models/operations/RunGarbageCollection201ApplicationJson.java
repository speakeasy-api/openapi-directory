package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunGarbageCollection201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("garbage_collection")
    public RunGarbageCollection201ApplicationJsonGarbageCollection garbageCollection;
    public RunGarbageCollection201ApplicationJson withGarbageCollection(RunGarbageCollection201ApplicationJsonGarbageCollection garbageCollection) {
        this.garbageCollection = garbageCollection;
        return this;
    }
}