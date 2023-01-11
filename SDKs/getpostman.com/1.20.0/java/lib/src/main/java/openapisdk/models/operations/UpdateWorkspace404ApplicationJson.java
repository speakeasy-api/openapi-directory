package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspace404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateWorkspace404ApplicationJsonError error;
    public UpdateWorkspace404ApplicationJson withError(UpdateWorkspace404ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}