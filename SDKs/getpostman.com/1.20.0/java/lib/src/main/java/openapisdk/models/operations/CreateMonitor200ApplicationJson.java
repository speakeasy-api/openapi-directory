package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMonitor200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitor")
    public CreateMonitor200ApplicationJsonMonitor monitor;
    public CreateMonitor200ApplicationJson withMonitor(CreateMonitor200ApplicationJsonMonitor monitor) {
        this.monitor = monitor;
        return this;
    }
}