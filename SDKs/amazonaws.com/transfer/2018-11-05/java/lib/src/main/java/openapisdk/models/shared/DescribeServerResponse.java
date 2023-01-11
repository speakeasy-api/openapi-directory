package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeServerResponse {
    @JsonProperty("Server")
    public DescribedServer server;
    public DescribeServerResponse withServer(DescribedServer server) {
        this.server = server;
        return this;
    }
}