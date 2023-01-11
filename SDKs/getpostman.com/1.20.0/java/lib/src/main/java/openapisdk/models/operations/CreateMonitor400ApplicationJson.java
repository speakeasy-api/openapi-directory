package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMonitor400ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CreateMonitor400ApplicationJsonError error;
    public CreateMonitor400ApplicationJson withError(CreateMonitor400ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}