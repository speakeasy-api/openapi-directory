package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollection403ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateCollection403ApplicationJsonError error;
    public UpdateCollection403ApplicationJson withError(UpdateCollection403ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}