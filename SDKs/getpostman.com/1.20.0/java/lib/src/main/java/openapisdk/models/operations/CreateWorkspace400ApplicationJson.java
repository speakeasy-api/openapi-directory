package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkspace400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CreateWorkspace400ApplicationJsonError error;
    public CreateWorkspace400ApplicationJson withError(CreateWorkspace400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}