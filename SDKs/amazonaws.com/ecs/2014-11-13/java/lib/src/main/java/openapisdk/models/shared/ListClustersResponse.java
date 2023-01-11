package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListClustersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterArns")
    public String[] clusterArns;
    public ListClustersResponse withClusterArns(String[] clusterArns) {
        this.clusterArns = clusterArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListClustersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}