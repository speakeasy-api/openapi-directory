package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEndpointsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointPropertiesList")
    public EndpointProperties[] endpointPropertiesList;
    public ListEndpointsResponse withEndpointPropertiesList(EndpointProperties[] endpointPropertiesList) {
        this.endpointPropertiesList = endpointPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEndpointsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}