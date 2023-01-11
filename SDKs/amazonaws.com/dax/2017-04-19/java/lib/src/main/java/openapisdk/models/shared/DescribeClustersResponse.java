package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeClustersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Clusters")
    public Cluster[] clusters;
    public DescribeClustersResponse withClusters(Cluster[] clusters) {
        this.clusters = clusters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeClustersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}