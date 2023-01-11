package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteClusterRequest {
    @JsonProperty("cluster")
    public String cluster;
    public DeleteClusterRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
}