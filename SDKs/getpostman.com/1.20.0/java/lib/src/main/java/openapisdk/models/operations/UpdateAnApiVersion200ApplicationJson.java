package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAnApiVersion200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public UpdateAnApiVersion200ApplicationJsonVersion version;
    public UpdateAnApiVersion200ApplicationJson withVersion(UpdateAnApiVersion200ApplicationJsonVersion version) {
        this.version = version;
        return this;
    }
}