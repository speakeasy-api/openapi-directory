package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RebootNodeRequest {
    @JsonProperty("ClusterName")
    public String clusterName;
    public RebootNodeRequest withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonProperty("NodeId")
    public String nodeId;
    public RebootNodeRequest withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
}