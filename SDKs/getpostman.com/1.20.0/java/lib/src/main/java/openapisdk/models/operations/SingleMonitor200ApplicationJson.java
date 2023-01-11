package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public SingleMonitor200ApplicationJsonMonitor monitor;
    public SingleMonitor200ApplicationJson withMonitor(SingleMonitor200ApplicationJsonMonitor monitor) {
        this.monitor = monitor;
        return this;
    }
}