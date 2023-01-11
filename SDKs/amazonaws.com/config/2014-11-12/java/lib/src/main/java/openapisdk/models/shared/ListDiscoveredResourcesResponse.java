package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDiscoveredResourcesResponse
 * <p/>
**/
public class ListDiscoveredResourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListDiscoveredResourcesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceIdentifiers")
    public ResourceIdentifier[] resourceIdentifiers;
    public ListDiscoveredResourcesResponse withResourceIdentifiers(ResourceIdentifier[] resourceIdentifiers) {
        this.resourceIdentifiers = resourceIdentifiers;
        return this;
    }
}