package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMonitorRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public CreateMonitorRequestBodyMonitor monitor;
    public CreateMonitorRequestBody withMonitor(CreateMonitorRequestBodyMonitor monitor) {
        this.monitor = monitor;
        return this;
    }
}