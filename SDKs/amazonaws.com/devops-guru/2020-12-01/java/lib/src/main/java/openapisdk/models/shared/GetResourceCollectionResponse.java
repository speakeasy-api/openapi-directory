package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceCollectionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetResourceCollectionResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceCollection")
    public ResourceCollectionFilter resourceCollection;
    public GetResourceCollectionResponse withResourceCollection(ResourceCollectionFilter resourceCollection) {
        this.resourceCollection = resourceCollection;
        return this;
    }
}