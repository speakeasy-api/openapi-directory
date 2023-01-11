package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeNodeAssociationStatusRequest {
    @JsonProperty("NodeAssociationStatusToken")
    public String nodeAssociationStatusToken;
    public DescribeNodeAssociationStatusRequest withNodeAssociationStatusToken(String nodeAssociationStatusToken) {
        this.nodeAssociationStatusToken = nodeAssociationStatusToken;
        return this;
    }
    @JsonProperty("ServerName")
    public String serverName;
    public DescribeNodeAssociationStatusRequest withServerName(String serverName) {
        this.serverName = serverName;
        return this;
    }
}