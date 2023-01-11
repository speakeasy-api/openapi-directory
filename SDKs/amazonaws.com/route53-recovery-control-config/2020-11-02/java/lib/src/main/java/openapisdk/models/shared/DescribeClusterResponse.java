package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClusterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Cluster")
    public Cluster cluster;
    public DescribeClusterResponse withCluster(Cluster cluster) {
        this.cluster = cluster;
        return this;
    }
}