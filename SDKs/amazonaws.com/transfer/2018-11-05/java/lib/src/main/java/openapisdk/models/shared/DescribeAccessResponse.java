package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeAccessResponse {
    @JsonProperty("Access")
    public DescribedAccess access;
    public DescribeAccessResponse withAccess(DescribedAccess access) {
        this.access = access;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public DescribeAccessResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
}