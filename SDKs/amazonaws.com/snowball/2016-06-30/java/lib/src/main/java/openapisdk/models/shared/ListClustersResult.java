package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClustersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClusterListEntries")
    public ClusterListEntry[] clusterListEntries;
    public ListClustersResult withClusterListEntries(ClusterListEntry[] clusterListEntries) {
        this.clusterListEntries = clusterListEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListClustersResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}