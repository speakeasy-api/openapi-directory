package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMonitorRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public UpdateMonitorRequestBodyMonitor monitor;
    public UpdateMonitorRequestBody withMonitor(UpdateMonitorRequestBodyMonitor monitor) {
        this.monitor = monitor;
        return this;
    }
}