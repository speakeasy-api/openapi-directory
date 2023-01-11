package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetDiscoveredResourceCountsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetDiscoveredResourceCountsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceCounts")
    public ResourceCount[] resourceCounts;
    public GetDiscoveredResourceCountsResponse withResourceCounts(ResourceCount[] resourceCounts) {
        this.resourceCounts = resourceCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalDiscoveredResources")
    public Long totalDiscoveredResources;
    public GetDiscoveredResourceCountsResponse withTotalDiscoveredResources(Long totalDiscoveredResources) {
        this.totalDiscoveredResources = totalDiscoveredResources;
        return this;
    }
}