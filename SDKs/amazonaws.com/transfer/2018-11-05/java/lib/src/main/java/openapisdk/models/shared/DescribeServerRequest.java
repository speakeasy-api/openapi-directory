package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeServerRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public DescribeServerRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}