package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourceTypesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListResourceTypesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceTypes")
    public ServiceNameAndResourceType[] resourceTypes;
    public ListResourceTypesResponse withResourceTypes(ServiceNameAndResourceType[] resourceTypes) {
        this.resourceTypes = resourceTypes;
        return this;
    }
}