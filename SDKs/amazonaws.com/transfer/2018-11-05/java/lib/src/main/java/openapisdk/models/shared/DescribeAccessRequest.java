package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAccessRequest {
    @JsonProperty("ExternalId")
    public String externalId;
    public DescribeAccessRequest withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public DescribeAccessRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}