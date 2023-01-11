package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironment400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CreateEnvironment400ApplicationJsonError error;
    public CreateEnvironment400ApplicationJson withError(CreateEnvironment400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}