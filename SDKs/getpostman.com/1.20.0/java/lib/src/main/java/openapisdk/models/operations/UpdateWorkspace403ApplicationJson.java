package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspace403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateWorkspace403ApplicationJsonError error;
    public UpdateWorkspace403ApplicationJson withError(UpdateWorkspace403ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}