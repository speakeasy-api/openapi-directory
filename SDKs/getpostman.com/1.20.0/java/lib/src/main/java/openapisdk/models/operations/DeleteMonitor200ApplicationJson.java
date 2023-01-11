package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteMonitor200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public DeleteMonitor200ApplicationJsonMonitor monitor;
    public DeleteMonitor200ApplicationJson withMonitor(DeleteMonitor200ApplicationJsonMonitor monitor) {
        this.monitor = monitor;
        return this;
    }
}