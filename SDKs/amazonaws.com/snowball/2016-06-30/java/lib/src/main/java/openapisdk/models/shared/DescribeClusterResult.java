package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClusterResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterMetadata")
    public ClusterMetadata clusterMetadata;
    public DescribeClusterResult withClusterMetadata(ClusterMetadata clusterMetadata) {
        this.clusterMetadata = clusterMetadata;
        return this;
    }
}