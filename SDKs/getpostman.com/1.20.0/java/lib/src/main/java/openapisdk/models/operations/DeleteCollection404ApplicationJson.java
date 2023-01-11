package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteCollection404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteCollection404ApplicationJsonError error;
    public DeleteCollection404ApplicationJson withError(DeleteCollection404ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}