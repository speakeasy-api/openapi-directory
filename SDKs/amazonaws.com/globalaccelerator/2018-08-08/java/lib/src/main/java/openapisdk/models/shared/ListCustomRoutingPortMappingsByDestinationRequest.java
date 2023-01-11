package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomRoutingPortMappingsByDestinationRequest {
    @JsonProperty("DestinationAddress")
    public String destinationAddress;
    public ListCustomRoutingPortMappingsByDestinationRequest withDestinationAddress(String destinationAddress) {
        this.destinationAddress = destinationAddress;
        return this;
    }
    @JsonProperty("EndpointId")
    public String endpointId;
    public ListCustomRoutingPortMappingsByDestinationRequest withEndpointId(String endpointId) {
        this.endpointId = endpointId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListCustomRoutingPortMappingsByDestinationRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCustomRoutingPortMappingsByDestinationRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}