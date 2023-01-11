package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetMonitorRelations200ApplicationJsonMonitor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetMonitorRelations200ApplicationJsonMonitor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("monitorId")
    public String monitorId;
    public GetMonitorRelations200ApplicationJsonMonitor withMonitorId(String monitorId) {
        this.monitorId = monitorId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetMonitorRelations200ApplicationJsonMonitor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedAt")
    public String updatedAt;
    public GetMonitorRelations200ApplicationJsonMonitor withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}