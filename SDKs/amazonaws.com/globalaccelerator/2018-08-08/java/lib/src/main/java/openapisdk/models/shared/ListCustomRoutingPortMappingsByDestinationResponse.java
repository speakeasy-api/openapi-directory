package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCustomRoutingPortMappingsByDestinationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DestinationPortMappings")
    public DestinationPortMapping[] destinationPortMappings;
    public ListCustomRoutingPortMappingsByDestinationResponse withDestinationPortMappings(DestinationPortMapping[] destinationPortMappings) {
        this.destinationPortMappings = destinationPortMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListCustomRoutingPortMappingsByDestinationResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}