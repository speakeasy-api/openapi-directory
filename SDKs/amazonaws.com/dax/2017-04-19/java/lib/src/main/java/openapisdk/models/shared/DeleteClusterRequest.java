package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteClusterRequest {
    @JsonProperty("ClusterName")
    public String clusterName;
    public DeleteClusterRequest withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
}