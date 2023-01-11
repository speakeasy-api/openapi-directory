package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeHostedConnectionsRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public DescribeHostedConnectionsRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
}