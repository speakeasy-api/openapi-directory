package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollection404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateCollection404ApplicationJsonError error;
    public UpdateCollection404ApplicationJson withError(UpdateCollection404ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}