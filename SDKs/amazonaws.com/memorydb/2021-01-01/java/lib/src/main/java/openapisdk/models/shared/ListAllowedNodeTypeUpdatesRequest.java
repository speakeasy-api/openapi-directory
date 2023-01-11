package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ListAllowedNodeTypeUpdatesRequest {
    @JsonProperty("ClusterName")
    public String clusterName;
    public ListAllowedNodeTypeUpdatesRequest withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
}