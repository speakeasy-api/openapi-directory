package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCollection400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public UpdateCollection400ApplicationJsonError error;
    public UpdateCollection400ApplicationJson withError(UpdateCollection400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}