package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeResourceServerResponse {
    @JsonProperty("ResourceServer")
    public ResourceServerType resourceServer;
    public DescribeResourceServerResponse withResourceServer(ResourceServerType resourceServer) {
        this.resourceServer = resourceServer;
        return this;
    }
}