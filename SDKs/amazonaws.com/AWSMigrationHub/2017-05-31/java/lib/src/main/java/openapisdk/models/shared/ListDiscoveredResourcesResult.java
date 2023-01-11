package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDiscoveredResourcesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DiscoveredResourceList")
    public DiscoveredResource[] discoveredResourceList;
    public ListDiscoveredResourcesResult withDiscoveredResourceList(DiscoveredResource[] discoveredResourceList) {
        this.discoveredResourceList = discoveredResourceList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDiscoveredResourcesResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}