package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeConnectionsOnInterconnectRequest {
    @JsonProperty("interconnectId")
    public String interconnectId;
    public DescribeConnectionsOnInterconnectRequest withInterconnectId(String interconnectId) {
        this.interconnectId = interconnectId;
        return this;
    }
}