package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteEnvironment404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteEnvironment404ApplicationJsonError error;
    public DeleteEnvironment404ApplicationJson withError(DeleteEnvironment404ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}