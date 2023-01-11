package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServerEngineAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Server")
    public Server server;
    public UpdateServerEngineAttributesResponse withServer(Server server) {
        this.server = server;
        return this;
    }
}