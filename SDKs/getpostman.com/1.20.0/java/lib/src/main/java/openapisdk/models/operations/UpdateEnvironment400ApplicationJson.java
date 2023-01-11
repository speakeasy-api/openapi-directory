package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEnvironment400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateEnvironment400ApplicationJsonError error;
    public UpdateEnvironment400ApplicationJson withError(UpdateEnvironment400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}