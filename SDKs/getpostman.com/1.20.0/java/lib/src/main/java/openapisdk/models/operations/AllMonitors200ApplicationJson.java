package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllMonitors200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitors")
    public AllMonitors200ApplicationJsonMonitors[] monitors;
    public AllMonitors200ApplicationJson withMonitors(AllMonitors200ApplicationJsonMonitors[] monitors) {
        this.monitors = monitors;
        return this;
    }
}