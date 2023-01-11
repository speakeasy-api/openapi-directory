package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleWorkspace404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public SingleWorkspace404ApplicationJsonError error;
    public SingleWorkspace404ApplicationJson withError(SingleWorkspace404ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}