package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateApiVersion200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public CreateApiVersion200ApplicationJsonVersion version;
    public CreateApiVersion200ApplicationJson withVersion(CreateApiVersion200ApplicationJsonVersion version) {
        this.version = version;
        return this;
    }
}