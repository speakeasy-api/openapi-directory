package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FailoverShardRequest {
    @JsonProperty("ClusterName")
    public String clusterName;
    public FailoverShardRequest withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonProperty("ShardName")
    public String shardName;
    public FailoverShardRequest withShardName(String shardName) {
        this.shardName = shardName;
        return this;
    }
}