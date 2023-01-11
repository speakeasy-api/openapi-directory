package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAnApiVersion200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public DeleteAnApiVersion200ApplicationJsonVersion version;
    public DeleteAnApiVersion200ApplicationJson withVersion(DeleteAnApiVersion200ApplicationJsonVersion version) {
        this.version = version;
        return this;
    }
}