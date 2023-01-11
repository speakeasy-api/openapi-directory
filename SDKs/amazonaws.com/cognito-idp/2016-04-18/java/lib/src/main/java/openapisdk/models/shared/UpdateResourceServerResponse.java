package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateResourceServerResponse {
    @JsonProperty("ResourceServer")
    public ResourceServerType resourceServer;
    public UpdateResourceServerResponse withResourceServer(ResourceServerType resourceServer) {
        this.resourceServer = resourceServer;
        return this;
    }
}