package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMonitor200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public UpdateMonitor200ApplicationJsonMonitor monitor;
    public UpdateMonitor200ApplicationJson withMonitor(UpdateMonitor200ApplicationJsonMonitor monitor) {
        this.monitor = monitor;
        return this;
    }
}