package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteClusterRequest {
    @JsonProperty("ClusterId")
    public String clusterId;
    public DeleteClusterRequest withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}