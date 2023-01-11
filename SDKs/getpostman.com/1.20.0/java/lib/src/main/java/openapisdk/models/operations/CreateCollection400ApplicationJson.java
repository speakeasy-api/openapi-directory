package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCollection400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CreateCollection400ApplicationJsonError error;
    public CreateCollection400ApplicationJson withError(CreateCollection400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}