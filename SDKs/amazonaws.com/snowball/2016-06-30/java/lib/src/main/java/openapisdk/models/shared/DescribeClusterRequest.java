package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeClusterRequest {
    @JsonProperty("ClusterId")
    public String clusterId;
    public DescribeClusterRequest withClusterId(String clusterId) {
        this.clusterId = clusterId;
        return this;
    }
}