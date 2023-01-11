package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAggregateDiscoveredResourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAggregateDiscoveredResourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceIdentifiers")
    public AggregateResourceIdentifier[] resourceIdentifiers;
    public ListAggregateDiscoveredResourcesResponse withResourceIdentifiers(AggregateResourceIdentifier[] resourceIdentifiers) {
        this.resourceIdentifiers = resourceIdentifiers;
        return this;
    }
}