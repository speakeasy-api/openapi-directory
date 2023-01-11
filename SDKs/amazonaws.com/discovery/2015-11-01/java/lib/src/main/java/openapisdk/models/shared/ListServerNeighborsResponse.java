package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListServerNeighborsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("knownDependencyCount")
    public Long knownDependencyCount;
    public ListServerNeighborsResponse withKnownDependencyCount(Long knownDependencyCount) {
        this.knownDependencyCount = knownDependencyCount;
        return this;
    }
    @JsonProperty("neighbors")
    public NeighborConnectionDetail[] neighbors;
    public ListServerNeighborsResponse withNeighbors(NeighborConnectionDetail[] neighbors) {
        this.neighbors = neighbors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListServerNeighborsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}