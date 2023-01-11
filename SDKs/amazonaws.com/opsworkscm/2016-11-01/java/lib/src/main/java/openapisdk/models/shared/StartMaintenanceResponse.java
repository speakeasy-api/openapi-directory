package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartMaintenanceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Server")
    public Server server;
    public StartMaintenanceResponse withServer(Server server) {
        this.server = server;
        return this;
    }
}