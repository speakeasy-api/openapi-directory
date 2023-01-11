package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateResourceServerResponse {
    @JsonProperty("ResourceServer")
    public ResourceServerType resourceServer;
    public CreateResourceServerResponse withResourceServer(ResourceServerType resourceServer) {
        this.resourceServer = resourceServer;
        return this;
    }
}