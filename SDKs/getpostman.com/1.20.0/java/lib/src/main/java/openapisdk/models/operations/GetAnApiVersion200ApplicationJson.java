package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAnApiVersion200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public GetAnApiVersion200ApplicationJsonVersion version;
    public GetAnApiVersion200ApplicationJson withVersion(GetAnApiVersion200ApplicationJsonVersion version) {
        this.version = version;
        return this;
    }
}