package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor404ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public SingleMonitor404ApplicationJsonError error;
    public SingleMonitor404ApplicationJson withError(SingleMonitor404ApplicationJsonError error) {
        this.error = error;
        return this;
    }
}