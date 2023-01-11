package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartMaintenanceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineAttributes")
    public EngineAttribute[] engineAttributes;
    public StartMaintenanceRequest withEngineAttributes(EngineAttribute[] engineAttributes) {
        this.engineAttributes = engineAttributes;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public StartMaintenanceRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}