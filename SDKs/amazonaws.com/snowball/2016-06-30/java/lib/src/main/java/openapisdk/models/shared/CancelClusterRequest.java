package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelClusterRequest {
    @JsonProperty("ClusterId")
    public String clusterId;
    public CancelClusterRequest withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}