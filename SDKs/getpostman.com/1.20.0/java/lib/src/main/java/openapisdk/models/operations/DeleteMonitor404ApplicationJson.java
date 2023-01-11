package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteMonitor404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public DeleteMonitor404ApplicationJsonError error;
    public DeleteMonitor404ApplicationJson withError(DeleteMonitor404ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}