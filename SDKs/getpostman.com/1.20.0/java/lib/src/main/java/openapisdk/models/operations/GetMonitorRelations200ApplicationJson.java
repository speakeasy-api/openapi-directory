package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMonitorRelations200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public GetMonitorRelations200ApplicationJsonMonitor[] monitor;
    public GetMonitorRelations200ApplicationJson withMonitor(GetMonitorRelations200ApplicationJsonMonitor[] monitor) {
        this.monitor = monitor;
        return this;
    }
}